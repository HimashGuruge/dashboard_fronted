import { useState, useEffect } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
    role: "user",
  });

  const [emailExists, setEmailExists] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  useEffect(() => {
    if (!formData.email) return setEmailExists(null);

    const delay = setTimeout(() => {
      axios
        .get(`http://localhost:3000/api/check-email?email=${encodeURIComponent(formData.email)}`)
        .then((res) => setEmailExists(res.data.exists))
        .catch(() => setEmailExists(null));
    }, 500); // debounce by 500ms

    return () => clearTimeout(delay);
  }, [formData.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (emailExists) {
      alert("Email already exists. Please use another.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value && key !== "confirmPassword") {
        data.append(key, value);
      }
    });

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const result = await res.json();
      console.log("Registered:", result);
      alert("User registered successfully!");
    } catch (err) {
      console.error("Registration failed:", err.message);
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700"
            />
            {formData.email && (
              <p className={`text-sm mt-1 ${emailExists ? "text-red-500" : "text-green-500"}`}>
                {emailExists === null
                  ? "Checking..."
                  : emailExists
                  ? "❌ Email already registered"
                  : "✅ Email available"}
              </p>
            )}
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
