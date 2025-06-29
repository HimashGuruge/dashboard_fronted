// File: src/components/AddPost.jsx

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css"; // Quill default theme
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [formData, setFormData] = useState({ title: "", content: "", image: null });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  const handleChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleTitleChange = (e) => {
    setFormData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should not exceed 5MB.");
      return;
    }

    setFormData((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Title cannot be empty.");
      return;
    }
    if (!formData.content.trim()) {
      setError("Content cannot be empty.");
      return;
    }

    setMessage(null);
    setError(null);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    if (formData.image) data.append("image", formData.image);

    try {
      await axios.post("http://localhost:3000/api/posts", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Post published successfully!");
      setFormData({ title: "", content: "", image: null });
      setPreview(null);
      setTimeout(() => {
        navigate("/admin/managepost"); // Redirect after success
      }, 1000);
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message;
      setError(`❌ Failed to publish post: ${errMsg}`);
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ align: [] }],
        ["bullet", "ordered"],
        ["blockquote", "code-block", "link", "image"],
        ["clean"],
      ],
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "font",
    "size",
    "align",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Post</h1>

      {/* Messages */}
      {message && (
        <div className="max-w-full mx-auto mb-4 p-4 bg-green-100 text-green-800 rounded dark:bg-green-200 dark:text-green-900">
          {message}
        </div>
      )}
      {error && (
        <div className="max-w-full mx-auto mb-4 p-4 bg-red-100 text-red-800 rounded dark:bg-red-200 dark:text-red-900">
          {error}
        </div>
      )}

      <form className="max-w-full mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6" onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <label className="block mb-1">Post Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Enter post title"
            className="w-full p-2 border rounded bg-white text-black"
          />
        </div>

        {/* Editor */}
        <div>
          <label className="block mb-1">Content</label>
          <ReactQuill
            value={formData.content}
            onChange={handleChange}
            modules={modules}
            formats={formats}
            className="border rounded bg-white text-black"
            style={{ height: "300px", marginBottom: "50px" }}
          />
        </div>

        {/* Image Upload Outside Editor */}
        <div>
          <label className="block mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 rounded border"
          />
          {preview && <img src={preview} alt="Preview" className="mt-2 rounded max-h-48 object-cover w-full" />}
        </div>

        {/* Publish Options */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => {
              // Save as draft logic here
              setMessage("Draft saved successfully!");
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
}