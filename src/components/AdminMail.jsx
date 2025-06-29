// components/AdminMail.jsx
import { useEffect, useState } from "react";

export default function AdminMail() {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const res = await fetch("http://localhost:3000/api/request", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMails(data);
      } catch (error) {
        console.error("Failed to fetch mails", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMails();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📬 User Requests / Mails</h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : mails.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No requests found.</p>
      ) : (
        <ul className="space-y-4">
          {mails.map((mail, idx) => (
            <li key={idx} className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <h3 className="text-lg font-semibold">{mail.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{mail.message}</p>
              <p className="text-xs text-gray-400 mt-2">From: {mail.user?.email || "Unknown"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
