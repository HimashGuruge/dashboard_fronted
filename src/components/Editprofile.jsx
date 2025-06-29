import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';

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
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch user profile data on component mount
  useEffect(() => {
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
      
      // Fetch full user profile from backend (including current profile/cover photo URLs)
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
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target; // Removed 'checked' as it's not used here anymore for files/text

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
        // If a new file is selected, ensure the 'remove' flag for that type is false
        [`remove${name.charAt(0).toUpperCase() + name.slice(1)}`]: false,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Function to handle removing profile picture
  const handleRemoveProfilePicture = () => {
    setFormData((prev) => ({
      ...prev,
      profilePicture: null, // Clear file input
      currentProfilePictureUrl: "", // Visually remove current picture
      removeProfilePicture: true, // Set flag for backend to remove
    }));
  };

  // Function to handle removing cover photo
  const handleRemoveCoverPhoto = () => {
    setFormData((prev) => ({
      ...prev,
      coverPhoto: null, // Clear file input
      currentCoverPhotoUrl: "", // Visually remove current picture
      removeCoverPhoto: true, // Set flag for backend to remove
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(); // FormData for file uploads
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    // data.append("role", formData.role); // Role is no longer editable directly by user

    // Append password if provided
    if (formData.password.trim()) {
        data.append("password", formData.password);
    }

    // Append files if they exist and are not marked for removal
    if (formData.profilePicture && !formData.removeProfilePicture) {
        data.append("profilePicture", formData.profilePicture);
    }
    if (formData.coverPhoto && !formData.removeCoverPhoto) {
        data.append("coverPhoto", formData.coverPhoto);
    }

    // Append removal flags
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
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });

      // Update local storage with new token (if backend sends one)
      if (res.data.token) {
        localStorage.setItem("jwtToken", res.data.token);
      }
      
      setUser(res.data.user); // Update user state with new data
      // Update current URLs to reflect changes (especially if files were removed)
      setFormData(prev => ({
        ...prev,
        currentProfilePictureUrl: res.data.user.profilePicture ? `http://localhost:3000${res.data.user.profilePicture}` : "",
        currentCoverPhotoUrl: res.data.user.coverPhoto ? `http://localhost:3000${res.data.user.coverPhoto}` : "",
        profilePicture: null, // Clear file input after successful upload
        coverPhoto: null, // Clear file input after successful upload
        removeProfilePicture: false, // Reset remove flags
        removeCoverPhoto: false, // Reset remove flags
        password: "", // Clear password field after successful update
      }));

      Swal.fire('Success!', 'Profile updated successfully!', 'success');
      navigate("/profile"); // Navigate back to profile page
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
        Loading profile for editing...
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
            {formData.currentProfilePictureUrl && ( // Display current picture if exists
              <div className="mb-2 flex flex-col items-center">
                <img src={formData.currentProfilePictureUrl} alt="Current Profile" className="w-24 h-24 object-cover rounded-full mx-auto border border-gray-300 dark:border-gray-600" />
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Current Picture</p>
                <button
                  type="button" // Important: type="button" to prevent form submission
                  onClick={handleRemoveProfilePicture} // onClick handler for remove button
                  className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition"
                >
                  Remove Picture
                </button>
              </div>
            )}
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-200 dark:hover:file:bg-blue-800"
              accept="image/*"
            />
          </div>

          {/* Cover Photo Upload */}
          <div>
            <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Photo</label>
            {formData.currentCoverPhotoUrl && ( // Display current cover if exists
              <div className="mb-2 flex flex-col items-center">
                <img src={formData.currentCoverPhotoUrl} alt="Current Cover" className="w-full h-32 object-cover rounded-md mx-auto border border-gray-300 dark:border-gray-600" />
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Current Cover Photo</p>
                <button
                  type="button" // Important: type="button" to prevent form submission
                  onClick={handleRemoveCoverPhoto} // onClick handler for remove button
                  className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition"
                >
                  Remove Cover Photo
                </button>
              </div>
            )}
            <input
              type="file"
              id="coverPhoto"
              name="coverPhoto"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-200 dark:hover:file:bg-blue-800"
              accept="image/*"
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
