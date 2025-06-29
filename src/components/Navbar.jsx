import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios"; // Added axios as it's used in handleLogout if backend is updated for it
import Swal from 'sweetalert2'; // Added Swal for better alerts
import {
  FaHome,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaUserShield,
  FaBars, // Hamburger icon
  FaTimes, // Close icon
  FaClipboardList, // Icon for Request
} from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle"; // Assuming DarkModeToggle is a separate component
import { motion, AnimatePresence } from "framer-motion"; // ✅ NEW: Import motion for animations

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
  }, [location]); // Re-run effect when location changes (e.g., user navigates)

  const handleLogout = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    try {
      // ✅ MODIFIED: Using axios for logout, consistent with other API calls
      await axios.post("http://localhost:3000/api/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("jwtToken");
      setUser(null);
      setMenuOpen(false); // Close mobile menu on logout
      Swal.fire({ // ✅ NEW: Using Swal for logout success
        icon: 'success',
        title: 'Logged Out!',
        text: 'You have been successfully logged out.',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire({ // ✅ NEW: Using Swal for logout error
        icon: 'error',
        title: 'Logout Failed',
        text: error.response?.data?.message || 'Failed to logout. Please try again.',
      });
    }
  };

  // NavLink component for consistent styling
  const NavLink = ({ to, label, icon }) => (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-base transition-all duration-300 ease-in-out
        ${
          location.pathname === to
            ? "bg-blue-600 text-white shadow-md" // Active state
            : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
        }
      `}
      onClick={() => setMenuOpen(false)} // Close menu on link click
    >
      {icon} <span className="font-medium">{label}</span>
    </Link>
  );

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          MyApp <span className="text-gray-900 dark:text-white">Pro</span> {/* Enhanced logo */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" label="Home" icon={<FaHome />} />
          {!user && (
            <>
              <NavLink to="/login" label="Login" icon={<FaSignInAlt />} />
              <NavLink to="/register" label="Register" icon={<FaUserPlus />} />
            </>
          )}
          {user?.role === "admin" && <NavLink to="/admin" label="Dashboard" icon={<FaUserShield />} />}
          {user && <NavLink to="/request" label="Request" icon={<FaClipboardList />} />}
          {user && <NavLink to="/profile" label="Profile" icon={<FaUser />} />}
        </nav>

        {/* Right tools and Mobile Toggle */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
          {/* Mobile hamburger/close button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pb-4 pt-2 shadow-inner"
          >
            <nav className="flex flex-col items-center space-y-2 px-4">
              <NavLink to="/" label="Home" icon={<FaHome />} />
              {!user && (
                <>
                  <NavLink to="/login" label="Login" icon={<FaSignInAlt />} />
                  <NavLink to="/register" label="Register" icon={<FaUserPlus />} />
                </>
              )}
              {user?.role === "admin" && <NavLink to="/admin" label="Dashboard" icon={<FaUserShield />} />}
              {user && <NavLink to="/request" label="Request" icon={<FaClipboardList />} />}
              {user && <NavLink to="/profile" label="Profile" icon={<FaUser />} />}
              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md text-base font-medium w-full justify-center shadow-md transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 mt-4"
                >
                  <FaSignOutAlt /> Logout
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
