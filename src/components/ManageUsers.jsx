import { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast"; // ✅ REMOVED: hot-toast import
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // ✅ NEW: Import SweetAlert2 for error alerts

export default function AllUsersTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "user",
    password: "",
  });

  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for authentication errors
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken"); // Clear invalid token
          navigate("/login"); // Redirect to login page
        });
      } else {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for other fetch errors
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch users. Please check server connection.',
        });
      }
    }
  };

  useEffect(() => {
    if (token) { 
        fetchUsers();
    } else {
        Swal.fire({ // ✅ MODIFIED: Handle missing token with Swal.fire
          icon: 'error',
          title: 'Authentication Required',
          text: 'Authentication token missing. Please log in.',
        }).then(() => {
          navigate("/login"); // Redirect to login if token is missing
        });
    }
  }, [token, navigate]);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      role: user.role || "user",
      password: "", // only provide if changing password
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        role: form.role,
      };

      if (form.password.trim()) {
        updateData.password = form.password;
      }

      await axios.put(
        `http://localhost:3000/api/users/${editingUser._id}`,
        updateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // toast.success("User updated successfully!"); // ✅ REMOVED: hot-toast
      Swal.fire('Updated!', 'User updated successfully!', 'success'); // ✅ NEW: SweetAlert success
      setEditingUser(null);
      fetchUsers(); // Re-fetch users to update the table
    } catch (error) {
      console.error("Update failed:", error);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for authentication errors
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken");
          navigate("/login");
        });
      } else {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for other update errors
          icon: 'error',
          title: 'Update Failed',
          text: 'Failed to update user.',
        });
      }
    }
  };

  const confirmDelete = async () => {
    // This part already uses Swal.fire, no changes needed for this block specifically.
    // However, the success/error toasts will be removed/replaced below.
    try {
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
        await axios.delete(`http://localhost:3000/api/users/${userToDelete._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // toast.success("User deleted successfully!"); // ✅ REMOVED: hot-toast
        Swal.fire('Deleted!', 'User deleted successfully!', 'success'); // ✅ NEW: SweetAlert success
        setUsers((prev) => prev.filter((u) => u._id !== userToDelete._id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for authentication errors
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken");
          navigate("/login");
        });
      } else {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for other delete errors
          icon: 'error',
          title: 'Delete Failed',
          text: 'Failed to delete user.',
        });
      }
    } finally {
      setUserToDelete(null); // Close the delete confirmation modal
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
      {/* <Toaster position="top-center" /> */ } {/* ✅ REMOVED: hot-toast Toaster component */}
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Users</h1>

      {/* Delete Modal */}
      <Transition appear show={!!userToDelete} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center"
          onClose={() => setUserToDelete(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl max-w-md w-full z-50">
            <Dialog.Title className="text-xl font-semibold text-red-600 text-center">
              Confirm Deletion
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-center text-gray-700 dark:text-gray-300">
              Are you sure you want to delete <strong>{userToDelete?.firstName} {userToDelete?.lastName}</strong>?
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setUserToDelete(null)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                Cancel
              </button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Edit Modal - Now using Transition and Dialog for consistency */}
      <Transition appear show={!!editingUser} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center"
          onClose={() => setEditingUser(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl w-full max-w-md z-50">
            <Dialog.Title className="text-xl font-semibold mb-4">Edit User</Dialog.Title>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              {["firstName", "lastName", "email"].map((field) => (
                <div key={field}>
                  <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                  <input
                    type="text"
                    name={field}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1">Password <span className="text-sm text-gray-400">(optional)</span></label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1">Role</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setEditingUser(null)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Save
                </button>
              </div>
            </form>
          </div>
        </Dialog>
      </Transition>

      {/* Users Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{user.firstName} {user.lastName}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 capitalize">{user.role}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setUserToDelete(user)}
                    className="ml-2 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
