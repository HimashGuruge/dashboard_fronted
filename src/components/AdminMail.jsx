import { useEffect, useState } from "react";
import toast from 'react-hot-toast'; // ✅ NEW: Import toast for notifications

export default function AdminMail() {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // ✅ NEW: State to manage error messages

  // Function to fetch mails, moved outside useEffect to be callable by actions
  const fetchMails = async () => {
    try {
      setLoading(true); // Set loading to true when fetching starts
      setError(""); // Clear any previous errors
      const token = localStorage.getItem("jwtToken");
      const res = await fetch("http://localhost:3000/api/requests", { // Updated to /api/requests
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) { // Check if response is successful
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMails(data.mails); // Access .mails property from the response as backend returns an object
    } catch (error) {
      console.error("Failed to fetch mails", error);
      setError("Failed to load requests. Please try again."); // Set user-friendly error message
      toast.error("Failed to load requests."); // Show toast notification for error
    } finally {
      setLoading(false); // Set loading to false when fetching completes
    }
  };

  useEffect(() => {
    fetchMails(); // Fetch mails on component mount
  }, []); // Empty dependency array means this runs once after initial render

  // Function to handle marking a mail as read
  const handleMarkAsRead = async (mailId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:3000/api/requests/${mailId}/mark-read`, {
        method: "PUT", // Use PUT method to update resource
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to mark as read");
      }

      // Update the local state to reflect the change without refetching all mails
      setMails(prevMails =>
        prevMails.map(mail =>
          mail._id === mailId ? { ...mail, read: true } : mail
        )
      );
      toast.success("Request marked as read!"); // Show success toast
    } catch (err) {
      console.error("Error marking mail as read:", err);
      toast.error("Failed to mark as read."); // Show error toast
    }
  };

  // Function to handle deleting a mail
  const handleDelete = async (mailId) => {
    // Use a custom modal for confirmation instead of window.confirm for better UX
    // For simplicity, using window.confirm here as per previous code, but recommend custom modal
    if (!window.confirm("Are you sure you want to delete this request?")) {
        return;
    }
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:3000/api/requests/${mailId}`, {
        method: "DELETE", // Use DELETE method to remove resource
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to delete request");
      }

      // Remove the deleted mail from the local state
      setMails(prevMails => prevMails.filter(mail => mail._id !== mailId));
      toast.success("Request deleted successfully!"); // Show success toast
    } catch (err) {
      console.error("Error deleting mail:", err);
      toast.error("Failed to delete request."); // Show error toast
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📬 User Requests / Mails</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>} {/* Display error message */}

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : mails.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No requests found.</p>
      ) : (
        <ul className="space-y-4">
          {mails.map((mail) => ( // Changed key to mail._id for better list rendering performance and stability
            <li 
              key={mail._id} // ✅ CHANGED: Use mail._id as key for unique identification
              className={`p-4 rounded ${mail.read ? 'bg-gray-100 dark:bg-gray-700' : 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'}`}
            > {/* Conditional styling to highlight unread mails */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{mail.title}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${mail.read ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'}`}>
                  {mail.read ? "Read" : "Unread"}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{mail.message}</p>
              <p className="text-xs text-gray-400 mt-2">From: {mail.userId?.email || "Unknown"}</p> {/* Use mail.userId as per backend population */}
              <p className="text-xs text-gray-400">Submitted: {new Date(mail.submittedAt).toLocaleString()}</p> {/* Display submission date */}

              <div className="mt-4 space-x-2">
                {!mail.read && ( // Only show "Mark as Read" button if the mail is unread
                  <button
                    onClick={() => handleMarkAsRead(mail._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => handleDelete(mail._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
