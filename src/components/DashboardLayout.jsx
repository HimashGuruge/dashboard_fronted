import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"; // ✅ MODIFIED: Added useLocation
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { io } from "socket.io-client";
import toast, { Toaster } from 'react-hot-toast';

export default function DashboardLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ NEW: Get current location object
  const [unreadMailCount, setUnreadMailCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("jwtToken");
        setIsAdmin(false);
        navigate("/login");
        return;
      }
      
      if (decoded.role === "admin") {
        setIsAdmin(true);

        const fetchUnreadCount = async () => {
          try {
            const res = await fetch("http://localhost:3000/api/requests/unread-count", {
              headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
              const data = await res.json();
              setUnreadMailCount(data.unreadCount);
            } else {
                toast.error("Failed to fetch initial unread mail count.");
            }
          } catch (err) {
            console.error("Failed to fetch unread count:", err);
            toast.error("Failed to fetch initial unread mail count.");
          }
        };
        fetchUnreadCount();

        const socket = io("http://localhost:3000");
        socket.on('connect', () => {
          console.log('Socket connected to backend 🚀');
        });

        socket.on('newMailRequest', (newRequest) => {
          setUnreadMailCount(prevCount => prevCount + 1);
          toast.success(`New request from ${newRequest.userId?.email || 'a user'}!`);
        });

        socket.on('mailRead', ({ requestId }) => {
            setUnreadMailCount(prevCount => Math.max(0, prevCount - 1));
        });

        socket.on('disconnect', () => {
          console.log('Socket disconnected from backend 🚪');
        });

        return () => {
          socket.disconnect();
        };

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
      toast.error("Logout failed. Please try again.");
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

  // Helper function to determine if a link is active
  const getLinkClass = (path) => {
    return `block no-underline p-2 rounded-md ${
      location.pathname === path
        ? 'bg-blue-600 text-white shadow-md' // Active state classes
        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' // Inactive state classes
    }`;
  };

  return (
    <div className="flex h-screen pt-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Sidebar */}
      <aside className="w-64 fixed top-16 bottom-0 left-0 bg-white dark:bg-gray-800 p-6 shadow-md z-30 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-2"> {/* Reduced space for tighter links */}
          <Link to="/admin/manageusers" className={getLinkClass("/admin/manageusers")}>Manage Users</Link>
          <Link to="/admin/createusers" className={getLinkClass("/admin/createusers")}>Create Users</Link>
          <Link to="/admin/addpost" className={getLinkClass("/admin/addpost")}>Add Post</Link>
          <Link to="/admin/managepost" className={getLinkClass("/admin/managepost")}>Post Manage</Link>
          <Link to="/admin/mail" className={getLinkClass("/admin/mail")}>
            Mail
            {unreadMailCount > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
                {unreadMailCount}
              </span>
            )}
          </Link>
          <button
            onClick={handleLogout}
            className="block text-left w-full mt-6 px-2 py-1 rounded-md text-red-600 hover:bg-red-100 dark:hover:bg-red-800"
          >
            Logout
          </button>
          <Link to="/" className="block text-sm text-gray-500 no-underline mt-4 px-2 py-1">← Back to Home</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
}
