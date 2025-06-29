import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RequestPage() {
  const [form, setForm] = useState({ title: "", message: "" });
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
    } else {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setUser(decoded);
      } catch {
        navigate("/login");
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const token = localStorage.getItem("jwtToken");
    if (!token) return setError("Please login first.");

    try {
      const res = await fetch("http://localhost:3000/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setSuccess("Request submitted successfully!");
      setForm({ title: "", message: "" });
    } catch (err) {
      setError("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-20 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Submit a Request</h2>

      {success && <p className="text-green-600 mb-2">{success}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
