import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../components/axiosInstance";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in.");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        return;
      }
    } catch {
      setError("Invalid session token.");
      localStorage.removeItem("jwtToken");
      return;
    }

    axiosInstance
      .get("/profile")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error("Profile fetch failed:", err.message);
        setError("Failed to load profile.");
      });
  }, []);

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-10 flex gap-8 items-center">
        {/* Profile Picture - Left */}
        <div>
          <img
            src={
              user.profilePicture
                ? `http://localhost:3000${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        {/* Profile Info - Right */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
            <span className="mt-3 inline-block px-3 py-1 text-xs font-semibold uppercase bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-blue-300 rounded-full w-fit">
              {user.role}
            </span>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 self-end">
            <Link
              to="/editprofile"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
