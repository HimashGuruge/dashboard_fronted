import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  FaHome,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaUserShield,
  FaBars,
  FaTimes,
  FaClipboardList, // ✅ Icon for Request
} from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("jwtToken");
          setUser(null);
          return;
        }
        setUser(decoded);
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]);

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
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again."); // You might want to replace this with a toast notification
    }
  };

  const navLink = (path, label, icon) => (
    <Link
      to={path}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition font-medium ${
        location.pathname === path
          ? "text-blue-600 dark:text-blue-400 underline"
          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      }`}
      onClick={() => setMenuOpen(false)}
    >
      {icon} {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-md">
      {/* Removed max-w-7xl mx-auto to make content full width, keeping px-6 for padding */}
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          MyApp
        </Link>

        {/* Desktop Nav - ✅ MODIFIED: Added flex-1 and justify-center to center links */}
        <div className="hidden md:flex flex-1 justify-center gap-6 items-center">
          {navLink("/", "Home", <FaHome />)}
          {!user && (
            <>
              {navLink("/login", "Login", <FaSignInAlt />)}
              {navLink("/register", "Register", <FaUserPlus />)}
            </>
          )}
          {user?.role === "admin" && navLink("/admin", "Dashboard", <FaUserShield />)}
          {user && navLink("/request", "Request", <FaClipboardList />)}
          {user && navLink("/profile", "Profile", <FaUser />)}
        </div>

        {/* Right Tools */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium hover:underline"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl text-gray-700 dark:text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium">
          {navLink("/", "Home", <FaHome />)}
          {!user && (
            <>
              {navLink("/login", "Login", <FaSignInAlt />)}
              {navLink("/register", "Register", <FaUserPlus />)}
            </>
          )}
          {user?.role === "admin" && navLink("/admin", "Dashboard", <FaUserShield />)}
          {user && navLink("/request", "Request", <FaClipboardList />)}
          {user && navLink("/profile", "Profile", <FaUser />)}
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:underline"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
