import { useEffect, useState, useRef } from "react"; // ✅ MODIFIED: Import useRef
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';
import io from 'socket.io-client'; // ✅ NEW: Import socket.io-client

export default function EditProfile() {
  const [user, setUser] = useState(null); // Current user data from API
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "user", // Default role
    password: "", // Added password field to form data
    profilePicture: null, // File object for new profile picture
    coverPhoto: null, // File object for new cover photo
    currentProfilePictureUrl: "", // URL of existing profile picture
    currentCoverPhotoUrl: "", // URL of existing cover photo
    removeProfilePicture: false, // Flag to indicate if profile picture should be removed
    removeCoverPhoto: false, // Flag to indicate if cover photo should be removed
    previewProfilePicture: "", // For showing immediate preview of selected profile picture
    previewCoverPhoto: "", // For showing immediate preview of selected cover photo
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Socket.IO setup - Use useRef to ensure a single socket instance
  const socketRef = useRef(null); // ✅ NEW: Ref to hold the socket instance
  const userRef = useRef(user); // ✅ NEW: Ref to hold the latest user state

  // ✅ NEW: Update userRef whenever user state changes
  useEffect(() => {
    userRef.current = user;
  }, [user]);


  // Fetch user profile data on component mount and listen for real-time updates
  useEffect(() => {
    // Initialize socket only once
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:3000');
    }

    const currentSocket = socketRef.current; // Get the current socket instance

    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in.");
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'You need to be logged in to edit your profile.',
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
      
      const fetchProfile = () => {
        axios.get("http://localhost:3000/api/profile", {
            headers: { Authorization: `Bearer ${token}` }
        })
          .then((res) => {
            const fetchedUser = res.data.user;
            setUser(fetchedUser);
            setFormData({
              firstName: fetchedUser.firstName || "",
              lastName: fetchedUser.lastName || "",
              email: fetchedUser.email || "",
              role: fetchedUser.role || "user",
              password: "", // Initialize password as empty
              profilePicture: null, // Reset file input
              coverPhoto: null, // Reset file input
              currentProfilePictureUrl: fetchedUser.profilePicture ? `http://localhost:3000${fetchedUser.profilePicture}` : "",
              currentCoverPhotoUrl: fetchedUser.coverPhoto ? `http://localhost:3000${fetchedUser.coverPhoto}` : "",
              removeProfilePicture: false,
              removeCoverPhoto: false,
              previewProfilePicture: "", // Reset preview
              previewCoverPhoto: "", // Reset preview
            });
            setLoading(false);
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
              setError("Failed to load profile. Please try again.");
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to load profile. Please try again.',
              });
            }
            setLoading(false);
          });
      };

      fetchProfile(); // Initial fetch

      // Listen for 'profileUpdated' event
      currentSocket.on('profileUpdated', (updatedUser) => {
        // Only update if the updated user is the current user
        // ✅ MODIFIED: Use userRef.current for the current user's ID
        if (userRef.current && updatedUser._id === userRef.current._id) { 
          setUser(updatedUser);
          setFormData(prev => ({
            ...prev,
            firstName: updatedUser.firstName || "",
            lastName: updatedUser.lastName || "",
            email: updatedUser.email || "",
            role: updatedUser.role || "user",
            currentProfilePictureUrl: updatedUser.profilePicture ? `http://localhost:3000${updatedUser.profilePicture}` : "",
            currentCoverPhotoUrl: updatedUser.coverPhoto ? `http://localhost:3000${updatedUser.coverPhoto}` : "",
            password: "",
            profilePicture: null, // Clear file input
            coverPhoto: null, // Clear file input
            removeProfilePicture: false, // Reset remove flags
            removeCoverPhoto: false, // Reset remove flags
            previewProfilePicture: "", // Clear preview
            previewCoverPhoto: "", // Clear preview
          }));
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'info',
            title: 'Profile updated in real-time! 🚀', // Added emoji
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      });

      // Clean up socket connection on component unmount
      return () => {
        currentSocket.off('profileUpdated'); // Remove event listener
        currentSocket.disconnect(); // Disconnect when component unmounts
      };

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
      setLoading(false);
    }
  }, [navigate]); // ✅ MODIFIED: Removed 'user' from dependencies, rely on userRef for socket callback


  // Clean up object URLs when component unmounts or files change
  useEffect(() => {
    return () => {
      if (formData.previewProfilePicture) {
        URL.revokeObjectURL(formData.previewProfilePicture);
      }
      if (formData.previewCoverPhoto) {
        URL.revokeObjectURL(formData.previewCoverPhoto);
      }
    };
  }, [formData.profilePicture, formData.coverPhoto, formData.previewProfilePicture, formData.previewCoverPhoto]);


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => {
        // Revoke old object URL if it exists before creating a new one
        if (name === "profilePicture" && prev.previewProfilePicture) {
          URL.revokeObjectURL(prev.previewProfilePicture);
        }
        if (name === "coverPhoto" && prev.previewCoverPhoto) {
          URL.revokeObjectURL(prev.previewCoverPhoto);
        }

        return {
          ...prev,
          [name]: file,
          // Create object URL for immediate preview
          [`preview${name.charAt(0).toUpperCase() + name.slice(1)}`]: file ? URL.createObjectURL(file) : "",
          [`remove${name.charAt(0).toUpperCase() + name.slice(1)}`]: false,
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemoveProfilePicture = () => {
    setFormData((prev) => {
      if (prev.previewProfilePicture) { // Revoke preview URL if it exists
        URL.revokeObjectURL(prev.previewProfilePicture);
      }
      return {
        ...prev,
        profilePicture: null,
        currentProfilePictureUrl: "",
        removeProfilePicture: true,
        previewProfilePicture: "", // Clear preview
      };
    });
  };

  const handleRemoveCoverPhoto = () => {
    setFormData((prev) => {
      if (prev.previewCoverPhoto) { // Revoke preview URL if it exists
        URL.revokeObjectURL(prev.previewCoverPhoto);
      }
      return {
        ...prev,
        coverPhoto: null,
        currentCoverPhotoUrl: "",
        removeCoverPhoto: true,
        previewCoverPhoto: "", // Clear preview
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);

    if (formData.password.trim()) {
        data.append("password", formData.password);
    }

    if (formData.profilePicture && !formData.removeProfilePicture) {
        data.append("profilePicture", formData.profilePicture);
    }
    if (formData.coverPhoto && !formData.removeCoverPhoto) {
        data.append("coverPhoto", formData.coverPhoto);
    }

    if (formData.removeProfilePicture) {
        data.append("removeProfilePicture", "true");
    }
    if (formData.removeCoverPhoto) {
        data.append("removeCoverPhoto", "true");
    }

    const token = localStorage.getItem("jwtToken");

    try {
      const res = await axios.put("http://localhost:3000/api/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.token) {
        localStorage.setItem("jwtToken", res.data.token);
      }
      
      setUser(res.data.user);
      setFormData(prev => ({
        ...prev,
        currentProfilePictureUrl: res.data.user.profilePicture ? `http://localhost:3000${res.data.user.profilePicture}` : "",
        currentCoverPhotoUrl: res.data.user.coverPhoto ? `http://localhost:3000${res.data.user.coverPhoto}` : "",
        profilePicture: null,
        coverPhoto: null,
        removeProfilePicture: false,
        removeCoverPhoto: false,
        password: "",
        previewProfilePicture: "", // Clear preview after successful submission
        previewCoverPhoto: "", // Clear preview after successful submission
      }));

      Swal.fire('Success!', 'Profile updated successfully!', 'success');
      navigate("/profile");
    } catch (err) {
      console.error("Profile update failed:", err);
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken");
          navigate("/login");
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: err.response?.data?.message || 'Failed to update profile. Please try again.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        Loading profile for editing... ⏳
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4 flex justify-center items-center">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profile Picture</label>
            {/* Display preview if available, otherwise current URL */}
            {(formData.previewProfilePicture || formData.currentProfilePictureUrl) && (
              <div className="mb-2 flex flex-col items-center">
                <img 
                  src={formData.previewProfilePicture || formData.currentProfilePictureUrl} 
                  alt="Profile" 
                  className="w-24 h-24 object-cover rounded-full mx-auto border border-gray-300 dark:border-gray-600" 
                />
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.previewProfilePicture ? "New Picture Preview" : "Current Picture"}
                </p>
                {formData.currentProfilePictureUrl && ( // Only show remove if there's a current picture
                  <button
                    type="button"
                    onClick={handleRemoveProfilePicture}
                    className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition"
                  >
                    Remove Picture
                  </button>
                )}
              </div>
            )}
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-200 dark:hover:file:bg-blue-800"
              accept="image/*"
              // Reset file input value when a file is selected to allow re-selection of the same file
              value={formData.profilePicture ? "" : undefined} 
            />
          </div>

          {/* Cover Photo Upload */}
          <div>
            <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Photo</label>
            {/* Display preview if available, otherwise current URL */}
            {(formData.previewCoverPhoto || formData.currentCoverPhotoUrl) && (
              <div className="mb-2 flex flex-col items-center">
                <img 
                  src={formData.previewCoverPhoto || formData.currentCoverPhotoUrl} 
                  alt="Cover" 
                  className="w-full h-32 object-cover rounded-md mx-auto border border-gray-300 dark:border-gray-600" 
                />
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.previewCoverPhoto ? "New Cover Preview" : "Current Cover Photo"}
                </p>
                {formData.currentCoverPhotoUrl && ( // Only show remove if there's a current cover photo
                  <button
                    type="button"
                    onClick={handleRemoveCoverPhoto}
                    className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition"
                  >
                    Remove Cover Photo
                  </button>
                )}
              </div>
            )}
            <input
              type="file"
              id="coverPhoto"
              name="coverPhoto"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-200 dark:hover:file:bg-blue-800"
              accept="image/*"
              // Reset file input value when a file is selected to allow re-selection of the same file
              value={formData.coverPhoto ? "" : undefined}
            />
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password (optional)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
