import { useEffect, useState } from "react";
import axios from "axios";

export default function UserStatusList() {
  const [users, setUsers] = useState([]);

 useEffect(() => {
  const token = localStorage.getItem("jwtToken");
  if (!token) return;

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err.message);
    }
  };

  fetchUsers();
  const interval = setInterval(fetchUsers, 10000); // every 10 seconds
  return () => clearInterval(interval);
}, []);


  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-600/30 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-600/30 dark:text-yellow-300";
      case "Offline":
      default:
        return "bg-gray-200 text-gray-800 dark:bg-gray-600/40 dark:text-white";
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">User Online Status</h1>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wide">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{index + 1}</td>
                  <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-6 text-center text-gray-400 dark:text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
