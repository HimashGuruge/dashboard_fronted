import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => setError("Post not found."));
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-red-500 px-4">
        <p className="text-xl font-medium">{error}</p>
        <Link
          to="/"
          className="mt-4 text-blue-600 hover:underline transition duration-200"
        >
          ← Back to all posts
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">
      {post.image && (
        <img
          src={`http://localhost:3000${post.image}`}
          alt={post.title}
          className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-6 transition-all duration-300"
        />
      )}

      <h1 className="text-4xl font-bold tracking-tight leading-tight mb-3">{post.title}</h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        {new Date(post.createdAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <article
        className="prose lg:prose-xl dark:prose-invert prose-img:rounded-xl prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.content),
        }}
      />

      <div className="mt-12">
        <Link
          to="/"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-200"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
