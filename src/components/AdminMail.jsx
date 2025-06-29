import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'; // ✅ NEW: Import SweetAlert2

export default function AdminMail() {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMails = async () => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("jwtToken");
      const res = await fetch("http://localhost:3000/api/requests", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMails(data.mails);
    } catch (error) {
      console.error("Failed to fetch mails", error);
      setError("Failed to load requests. Please try again.");
      toast.error("Failed to load requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []);

  const handleMarkAsRead = async (mailId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:3000/api/requests/${mailId}/mark-read`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to mark as read");
      }

      setMails(prevMails =>
        prevMails.map(mail =>
          mail._id === mailId ? { ...mail, read: true } : mail
        )
      );
      toast.success("Request marked as read!");
    } catch (err) {
      console.error("Error marking mail as read:", err);
      toast.error("Failed to mark as read.");
    }
  };

  const handleDelete = async (mailId) => {
    // ✅ MODIFIED: Use SweetAlert2 for confirmation instead of window.confirm
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("jwtToken");
        const res = await fetch(`http://localhost:3000/api/requests/${mailId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to delete request");
        }

        setMails(prevMails => prevMails.filter(mail => mail._id !== mailId));
        toast.success("Request deleted successfully!"); // Show success toast
        // Swal.fire( // Optional: Show SweetAlert success message, but toast is already doing this
        //   'Deleted!',
        //   'Your request has been deleted.',
        //   'success'
        // );
      } catch (err) {
        console.error("Error deleting mail:", err);
        toast.error("Failed to delete request."); // Show error toast
        Swal.fire(
          'Error!',
          'Failed to delete request.',
          'error'
        );
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📬 User Requests / Mails</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : mails.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No requests found.</p>
      ) : (
        <ul className="space-y-4">
          {mails.map((mail) => (
            <li
              key={mail._id}
              className={`p-4 rounded ${mail.read ? 'bg-gray-100 dark:bg-gray-700' : 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{mail.title}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${mail.read ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'}`}>
                  {mail.read ? "Read" : "Unread"}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{mail.message}</p>
              <p className="text-xs text-gray-400 mt-2">From: {mail.userId?.email || "Unknown"}</p>
              <p className="text-xs text-gray-400">Submitted: {new Date(mail.submittedAt).toLocaleString()}</p>

              <div className="mt-4 space-x-2">
                {!mail.read && (
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
