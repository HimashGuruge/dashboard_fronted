import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then((res) => setPosts(res.data))
      .catch(() => setError("Could not fetch posts."));
  }, []);

  if (error) {
    return <div className="text-center pt-24">{error}</div>;
  }

  if (!posts.length) {
    return <div className="text-center pt-24">No posts available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            {post.image && (
              <img
                src={`http://localhost:3000${post.image}`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-1">{post.title}</h2>

              <div
                className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content),
                }}
              />

              <div className="mt-auto flex justify-between items-end">
                <span className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <Link
                  to={`/post/${post._id}`}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
