import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateUserForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      Swal.fire("Unauthorized", "Please log in as admin.", "warning");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      }

      await axios.post("http://localhost:3000/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire("Success", "User created successfully!", "success");
      setForm({ firstName: "", lastName: "", email: "", password: "", role: "user" });
      setProfilePicture(null);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err.response?.data?.message || "Failed to create user.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-xl mt-10 p-6 rounded shadow 
                      bg-white dark:bg-gray-800 
                      text-gray-900 dark:text-gray-100 
                      transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6">Create New Account</h2>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white 
                       focus:outline-none focus:ring focus:ring-blue-500"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="file"
            onChange={handleImage}
            accept="image/*"
            className="text-gray-800 dark:text-gray-200"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-blue-600 hover:bg-blue-700 
                       text-white font-medium px-4 py-2 rounded"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
