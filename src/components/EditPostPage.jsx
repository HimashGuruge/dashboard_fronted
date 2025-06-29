import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

const EditPostForm = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/posts/${postId}`);
        setPost(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
        setPreview(res.data.image ? `http://localhost:3000${res.data.image}` : null);
      } catch (err) {
        console.error("Failed to load post", err);
        Swal.fire("Error", "Failed to load post.", "error");
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!postId) {
      Swal.fire("Error", "Invalid post ID.", "error");
      setIsLoading(false);
      return;
    }

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      Swal.fire("Unauthorized", "You are not logged in.", "warning");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const res = await axios.put(
        `http://localhost:3000/api/posts/${postId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPost(res.data.post);
      setPreview(res.data.post.image ? `http://localhost:3000${res.data.post.image}` : null);
      Swal.fire("Success", "Post updated successfully!", "success");
    } catch (err) {
      console.error("Update failed", err.response?.data || err.message);
      Swal.fire("Error", err.response?.data?.message || "Failed to update post.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded shadow">
        <div className="mb-4 text-right">
          <Link to="/admin/managepost" className="text-blue-500 hover:underline text-sm">
            ← Back to Manage Posts
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-4">Edit Post</h2>

        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded 
                border border-gray-300 dark:border-gray-400 
                bg-white dark:bg-gray-800 
                text-black dark:text-white 
                focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <div className="rounded border border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-800">
              <ReactQuill value={content} onChange={setContent} theme="snow" className="dark:text-white" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="text-gray-700 dark:text-gray-300"
            />
          </div>

          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-60 object-cover rounded mb-2"
              />
              <button
                type="button"
                onClick={async () => {
                  const confirm = await Swal.fire({
                    title: "Remove Image?",
                    text: "Do you want to remove the selected image?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, remove it",
                  });

                  if (confirm.isConfirmed) {
                    setImage(null);
                    setPreview(post?.image ? `http://localhost:3000${post.image}` : null);
                    Toast.fire({ icon: "success", title: "Image selection removed" });
                  }
                }}
                className="text-sm text-red-600 hover:underline"
              >
                Remove Selected Image
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isLoading ? "Updating..." : "Update Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
