import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Swal from "sweetalert2"; // 🆕 Import SweetAlert2

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleEdit = (postId) => {
    navigate(`/admin/edit/${postId}`);
  };

  const handleDelete = async (postId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/posts/${postId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
        });
        setPosts((prev) => prev.filter((p) => p._id !== postId));
        Swal.fire("Deleted!", "The post has been deleted.", "success"); // 🆕 Success alert
      } catch (err) {
        console.error("Error deleting post:", err);
        Swal.fire("Error", "Failed to delete post.", "error"); // 🆕 Error alert
      }
    }
  };

  const handleImageRemove = async (postId) => {
    const confirm = await Swal.fire({
      title: "Remove image?",
      text: "This will delete the image from the post.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/posts/${postId}/image`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });

        setPosts((prev) =>
          prev.map((post) =>
            post._id === postId ? { ...post, image: "" } : post
          )
        );
        Swal.fire("Removed!", "Image removed successfully.", "success"); // 🆕 Success alert
      } catch (err) {
        console.error("Error removing image:", err);
        Swal.fire("Error", "Failed to remove image.", "error"); // 🆕 Error alert
      }
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Manage Posts</h2>
        <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Manage Posts</h2>
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Manage Posts</h2>
        <p className="text-gray-500 dark:text-gray-400">No posts available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Manage Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={post.image ? `http://localhost:3000${post.image}` : "https://via.placeholder.com/150"}
              alt={post.title || "Post Image"}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3
              className="text-lg font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title) }}
            />
            <div
              className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />
            <div className="mt-4 text-right space-x-2">
              <button
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                onClick={() => handleEdit(post._id)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePosts;
