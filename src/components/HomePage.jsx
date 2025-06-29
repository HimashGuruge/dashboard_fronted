import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { jwtDecode } from "jwt-decode";
import { FaThumbsUp, FaRegThumbsUp, FaComment, FaTrashAlt, FaUser, FaWifi, FaTimesCircle } from 'react-icons/fa';
import io from 'socket.io-client';
import Swal from 'sweetalert2';
import { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [commentInput, setCommentInput] = useState({});
  const [socketStatus, setSocketStatus] = useState('Connecting...');
  const [refreshTrigger, setRefreshTrigger] = useState(0); // ✅ NEW: State to trigger a data re-fetch
  const navigate = useNavigate();

  const socketRef = useRef(null);
  const currentUserRef = useRef(currentUser);

  useEffect(() => {
    currentUserRef.current = currentUser;
  }, [currentUser]);

  useEffect(() => {
    // Initialize socket only once
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:3000');
      console.log('Socket initialized.');
      
      // ✅ Add socket connection status listeners
      socketRef.current.on('connect', () => {
        setSocketStatus('Connected');
        console.log('Socket: Connected to backend 🚀');
      });
      socketRef.current.on('disconnect', () => {
        setSocketStatus('Disconnected');
        console.log('Socket: Disconnected from backend 🚪');
      });
      socketRef.current.on('connect_error', (err) => {
        setSocketStatus('Connection Error');
        console.error('Socket: Connection Error:', err);
      });
    }
    const currentSocket = socketRef.current;

    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("jwtToken");
          setCurrentUser(null);
        } else {
          setCurrentUser(decoded);
        }
      } catch (e) {
        console.error("Invalid token:", e);
        localStorage.removeItem("jwtToken");
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }

    const fetchPostsAndComments = async () => {
      console.log("Fetching posts... (Triggered by initial load or refreshTrigger)");
      try {
        const postsRes = await axios.get("http://localhost:3000/api/posts", {
          headers: { Authorization: token ? `Bearer ${token}` : '' }
        });
        const fetchedPosts = postsRes.data;

        const postsWithComments = await Promise.all(
          fetchedPosts.map(async (post) => {
            try {
              const commentsRes = await axios.get(`http://localhost:3000/api/posts/${post._id}/comments`, {
                headers: { Authorization: token ? `Bearer ${token}` : '' }
              });
              return { ...post, comments: commentsRes.data };
            } catch (commentErr) {
              console.error(`Failed to fetch comments for post ${post._id}:`, commentErr);
              return { ...post, comments: [] };
            }
          })
        );
        setPosts(postsWithComments);
        setError("");
      } catch (err) {
        console.error("Could not fetch posts:", err);
        setError("Could not fetch posts. Please try again later.");
      }
    };

    fetchPostsAndComments();

    // ✅ MODIFIED: Add socket event listeners and logic
    // We need to check if the socket is already connected to avoid adding multiple listeners
    if (currentSocket) {
        const onPostUpdated = (updatedPost) => {
            console.log('Socket: postUpdated event received', updatedPost);
            setPosts(prevPosts =>
                prevPosts.map(post => {
                    if (post._id === updatedPost._id) {
                        console.log(`Updating post ${post._id}: new likes=${updatedPost.likes}, likedByCurrentUser=${updatedPost.likedByCurrentUser}`);
                        return { ...post, likes: updatedPost.likes, likedByCurrentUser: updatedPost.likedByCurrentUser };
                    }
                    return post;
                })
            );
        };
        
        const onNewPost = (newPost) => {
            console.log('Socket: newPost event received', newPost);
            setPosts(prevPosts => [{ ...newPost, comments: [] }, ...prevPosts]);
        };

        const onPostDeleted = ({ postId }) => {
            console.log('Socket: postDeleted event received', postId);
            setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'info',
                title: 'A post was deleted in real-time! 🗑️',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        };

        const onNewComment = (newComment) => {
            console.log('Socket: newComment event received', newComment);
            setPosts(prevPosts =>
                prevPosts.map(post =>
                    post._id === newComment.postId
                        ? { ...post, comments: [...post.comments, newComment] }
                        : post
                )
            );
            if (currentUserRef.current && newComment.userId._id !== currentUserRef.current.id) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'info',
                    title: `New comment on a post! From: ${newComment.userId.firstName}`,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        };

        const onCommentDeleted = ({ commentId, postId }) => {
            console.log('Socket: commentDeleted event received', { commentId, postId });
            setPosts(prevPosts =>
                prevPosts.map(post =>
                    post._id === postId
                        ? { ...post, comments: post.comments.filter(comment => comment._id !== commentId) }
                        : post
                )
            );
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'info',
                title: 'A comment was deleted in real-time! 💬🚫',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        };

        // Add listeners
        currentSocket.on('newPost', onNewPost);
        currentSocket.on('postUpdated', onPostUpdated);
        currentSocket.on('postDeleted', onPostDeleted);
        currentSocket.on('newComment', onNewComment);
        currentSocket.on('commentDeleted', onCommentDeleted);

        // Return cleanup function to remove listeners
        return () => {
            console.log('Cleaning up socket listeners...');
            currentSocket.off('newPost', onNewPost);
            currentSocket.off('postUpdated', onPostUpdated);
            currentSocket.off('postDeleted', onPostDeleted);
            currentSocket.off('newComment', onNewComment);
            currentSocket.off('commentDeleted', onCommentDeleted);
            currentSocket.off('connect');
            currentSocket.off('disconnect');
            currentSocket.off('connect_error');
            // We don't disconnect the socket here to keep it alive across component re-renders
        };
    }

  }, [navigate, refreshTrigger]); // ✅ MODIFIED: Added refreshTrigger to the dependency array

  const handleLike = async (postId, currentLikedStatus) => {
    if (!currentUser) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You need to be logged in to like posts.',
      }).then(() => navigate('/login'));
      return;
    }

    const token = localStorage.getItem("jwtToken");
    try {
      console.log(`Sending like/unlike request for post ID: ${postId}, currentLikedStatus: ${currentLikedStatus}`);
      await axios.post(`http://localhost:3000/api/posts/${postId}/like`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(`Like/unlike request sent for post ID: ${postId}. Expecting socket update.`);
      
      // ✅ NEW: If socket is not connected, trigger a re-fetch
      if (socketStatus !== 'Connected') {
        console.log("Socket not connected. Triggering a data refresh.");
        setRefreshTrigger(prev => prev + 1);
      }

    } catch (err) {
      console.error("Error liking/unliking post:", err);
      Swal.fire({
        icon: 'error',
        title: 'Action Failed',
        text: 'Failed to update like status. Please try again.',
      });
    }
  };

  const handleCommentChange = (postId, value) => {
    setCommentInput(prev => ({ ...prev, [postId]: value }));
  };

  const handleAddComment = async (postId) => {
    if (!currentUser) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You need to be logged in to comment.',
      }).then(() => navigate('/login'));
      return;
    }

    const content = commentInput[postId]?.trim();
    if (!content) {
      Swal.fire({
        icon: 'warning',
        title: 'Empty Comment',
        text: 'Comment cannot be empty.',
      });
      return;
    }

    const token = localStorage.getItem("jwtToken");
    try {
      console.log(`Adding comment to post ID: ${postId}, content: ${content}`);
      await axios.post(`http://localhost:3000/api/posts/${postId}/comments`, { content }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCommentInput(prev => ({ ...prev, [postId]: '' }));
      console.log(`Comment added request sent for post ID: ${postId}. Expecting socket update.`);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Comment added! 🎉',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      
      // ✅ NEW: If socket is not connected, trigger a re-fetch
      if (socketStatus !== 'Connected') {
        console.log("Socket not connected. Triggering a data refresh for comments.");
        setRefreshTrigger(prev => prev + 1);
      }

    } catch (err) {
      console.error("Error adding comment:", err);
      Swal.fire({
        icon: 'error',
        title: 'Action Failed',
        text: 'Failed to add comment. Please try again.',
      });
    }
  };

  const handleDeleteComment = async (commentId, userIdOfComment) => {
    if (!currentUser) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You need to be logged in to delete comments.',
      }).then(() => navigate('/login'));
      return;
    }

    const isOwner = currentUser.id === userIdOfComment;
    const isPostOwner = posts.find(p => p.comments.some(c => c._id === commentId))?.createdBy?._id === currentUser.id;
    const isAdmin = currentUser.role === 'admin';

    if (!isOwner && !isPostOwner && !isAdmin) {
        Swal.fire({
            icon: 'error',
            title: 'Unauthorized',
            text: 'You do not have permission to delete this comment.',
        });
        return;
    }

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      const token = localStorage.getItem("jwtToken");
      try {
        console.log(`Deleting comment ID: ${commentId}`);
        await axios.delete(`http://localhost:3000/api/comments/${commentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`Delete comment request sent for comment ID: ${commentId}. Expecting socket update.`);
        Swal.fire(
          'Deleted!',
          'Your comment has been deleted.',
          'success'
        );
        // ✅ NEW: Trigger a re-fetch after successful deletion if socket is not connected
        if (socketStatus !== 'Connected') {
            console.log("Socket not connected. Triggering a data refresh after comment deletion.");
            setRefreshTrigger(prev => prev + 1);
        }
      } catch (err) {
        console.error("Error deleting comment:", err);
        Swal.fire({
          icon: 'error',
          title: 'Delete Failed',
          text: err.response?.data?.message || 'Failed to delete comment. Please try again.',
        });
      }
    }
  };

  if (error) {
    return <div className="min-h-screen flex items-center justify-center pt-24 text-red-500 text-lg">{error}</div>;
  }

  if (!posts.length) {
    return <div className="min-h-screen flex items-center justify-center pt-24 text-gray-600 dark:text-gray-300">No posts available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 px-4 pb-8">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Socket Connection Status Indicator */}
      <div className={`fixed bottom-4 right-4 p-2 rounded-full shadow-lg flex items-center gap-2 text-white
        ${socketStatus === 'Connected' ? 'bg-green-500' :
          socketStatus === 'Disconnected' ? 'bg-red-500' : 'bg-yellow-500'}
        z-50 text-sm`}
      >
        {socketStatus === 'Connected' ? <FaWifi /> : <FaTimesCircle />}
        Socket: {socketStatus}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {post.image && (
              <img
                src={`http://localhost:3000${post.image}`}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found"; }}
              />
            )}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>

              <div
                className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content),
                }}
              />

              <div className="mt-auto flex justify-between items-center text-gray-500 dark:text-gray-400 text-xs">
                <span className="flex items-center gap-1">
                  <FaUser className="text-sm" /> {post.createdBy?.firstName} {post.createdBy?.lastName}
                </span>
                <span className="flex items-center gap-1">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Likes Section */}
              <div className="flex items-center mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
                <button
                  onClick={() => handleLike(post._id, post.likedByCurrentUser)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
                    ${post.likedByCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'}`
                  }
                  disabled={!currentUser}
                >
                  {post.likedByCurrentUser ? <FaThumbsUp /> : <FaRegThumbsUp />}
                  {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
                </button>
                <div className="ml-4 flex items-center gap-1 text-gray-600 dark:text-gray-300">
                  <FaComment className="text-sm" /> {post.comments?.length || 0} Comments
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Comments:</h3>
                {post.comments && post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div key={comment._id} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg relative">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <img 
                                src={comment.userId?.profilePicture ? `http://localhost:3000${comment.userId.profilePicture}` : "/default-avatar.png"} 
                                alt={comment.userId?.firstName} 
                                className="w-6 h-6 rounded-full object-cover" 
                            />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                {comment.userId?.firstName} {comment.userId?.lastName}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(comment.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{comment.content}</p>
                      {/* Delete button for comment owner, post owner or admin */}
                      {(currentUser && (
                        currentUser.id === comment.userId?._id || // Comment owner
                        currentUser.id === post.createdBy?._id || // Post owner
                        currentUser.role === 'admin' // Admin
                      )) && (
                        <button
                          onClick={() => handleDeleteComment(comment._id, comment.userId._id)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
                          title="Delete Comment"
                        >
                          <FaTrashAlt />
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No comments yet.</p>
                )}

                {/* Add Comment Input */}
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentInput[post._id] || ''}
                    onChange={(e) => handleCommentChange(post._id, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    disabled={!currentUser}
                  />
                  <button
                    onClick={() => handleAddComment(post._id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
                    disabled={!currentUser || !commentInput[post._id]?.trim()}
                  >
                    Post
                  </button>
                </div>
                {!currentUser && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Login to like or comment on posts.</p>
                )}
              </div>

              {/* Read More Link */}
              <div className="mt-6 text-right">
                <Link
                  to={`/post/${post._id}`}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium inline-block shadow-sm transition transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
