import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function DashboardLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (err) {
      console.error("Invalid token:", err.message);
      localStorage.removeItem("jwtToken");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("jwtToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Logout failed. Please try again.");
    }
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Checking admin access...
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Access Denied: Admins only.
      </div>
    );
  }

  return (
    <div className="flex h-screen pt-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 fixed top-16 bottom-0 left-0 bg-white dark:bg-gray-800 p-6 shadow-md z-30 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/admin/manageusers" className="block no-underline">Manage Users</Link>
          <Link to="/admin/createusers" className="block no-underline">Create Users</Link>
          <Link to="/admin/addpost" className="block no-underline">Add Post</Link>
          <Link to="/admin/managepost" className="block no-underline">Post Manage</Link>
          <Link to="/admin/mail" className="block no-underline">Mail</Link> {/* ✅ New Link */}
          <button
            onClick={handleLogout}
            className="block text-left w-full mt-6 text-red-600"
          >
            Logout
          </button>
          <Link to="/" className="block text-sm text-gray-500 no-underline">← Back to Home</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
}
