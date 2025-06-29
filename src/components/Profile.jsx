import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';
import io from 'socket.io-client'; // ✅ NEW: Import socket.io-client

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Socket.IO setup
  const socket = io('http://localhost:3000'); // ✅ NEW: Connect to your backend Socket.IO server

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in.");
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'You are not logged in. Please log in to view your profile.',
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        Swal.fire({
          icon: 'error',
          title: 'Session Expired',
          text: 'Your session has expired. Please log in again.',
        }).then(() => {
          navigate("/login");
        });
        return;
      }
    } catch {
      setError("Invalid session token.");
      localStorage.removeItem("jwtToken");
      Swal.fire({
        icon: 'error',
        title: 'Invalid Session',
        text: 'Your session is invalid. Please log in again.',
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    // Function to fetch profile data
    const fetchProfile = () => {
      axios.get("http://localhost:3000/api/profile", {
          headers: { Authorization: `Bearer ${token}` }
      })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.error("Profile fetch failed:", err);
          if (err.response && (err.response.status === 401 || err.response.status === 403)) {
              Swal.fire({
                  icon: 'error',
                  title: 'Authentication Error',
                  text: 'Authentication failed. Please log in again.',
              }).then(() => {
                  localStorage.removeItem("jwtToken");
                  navigate("/login");
              });
          } else {
              setError("Failed to load profile.");
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to load profile. Please try again.',
              });
          }
        });
    };

    fetchProfile(); // Initial fetch of profile data

    // ✅ NEW: Listen for 'profileUpdated' event from Socket.IO
    socket.on('profileUpdated', (updatedUser) => {
      // Only update if the updated user is the current user viewing the profile
      if (user && updatedUser._id === user._id) {
        setUser(updatedUser);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'info',
          title: 'Profile updated in real-time!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });

    // ✅ NEW: Clean up socket connection on component unmount
    return () => {
      socket.off('profileUpdated'); // Remove the event listener
      socket.disconnect(); // Disconnect the socket
    };

  }, [navigate, user]); // Added user to dependency array to re-run effect when user changes, important for socket.on condition

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-red-500 text-lg space-y-4">
        <p>{error}</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        Loading profile...
      </div>
    );
  }

  return (
    // Outer container for the whole page. min-h-screen, padding-x for spacing.
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 flex justify-center items-start md:items-center">
      {/* Main profile card container - ✅ MODIFIED: Re-added max-w-7xl mx-auto and mt-8 for spacing */}
      <div className="relative w-full max-w-7xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {/* Cover Photo Display */}
        <div className="relative h-48 sm:h-64 md:h-80 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 overflow-hidden">
          <img
            src={
              user.coverPhoto
                ? `http://localhost:3000${user.coverPhoto}`
                : "https://placehold.co/1200x400/e0e0e0/333333?text=Cover+Photo" // Default placeholder
            }
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Picture and Info Section */}
        {/* ✅ MODIFIED: Adjusted px-6 and pb-8 for better spacing around content */}
        <div className="relative -mt-16 md:-mt-24 flex flex-col items-center px-6 pb-8">
          {/* Profile Picture */}
          <img
            src={
              user.profilePicture
                ? `http://localhost:3000${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full border-4 md:border-8 border-white dark:border-gray-800 shadow-xl z-10"
          />

          {/* User Info */}
          {/* ✅ MODIFIED: mt-6 for better spacing */}
          <div className="mt-6 text-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2"> {/* mb-2 for slightly more space */}
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">{user.email}</p>
            <span className="mt-4 inline-block px-4 py-1.5 text-sm font-semibold uppercase bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-blue-300 rounded-full">
              {user.role}
            </span>
          </div>

          {/* Edit Profile Button and Placeholder for Tabs */}
          {/* ✅ MODIFIED: Increased gap, px-6, and pt-6 for better visual separation */}
          <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex justify-center gap-8 px-6">
            <Link
              to="/editprofile"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition transform hover:scale-105" // Increased padding
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
