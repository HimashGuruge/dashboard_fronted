import React, { useState, useEffect, useRef, useCallback, memo, useLayoutEffect } from 'react';
import { io } from "socket.io-client";
import { useNavigate } from 'react-router-dom'; // ADDED useNavigate hook

// --- Helper Functions ---
/**
 * A simple, self-contained function to decode a JWT token.
 * This replaces the need for the external `jwt-decode` library.
 * @param {string} token The JWT token to decode.
 * @returns {object|null} The decoded payload of the token, or null if decoding fails.
 */
function jwtDecode(token) {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
}

// --- SVG Icons ---
// Using inline SVGs to avoid external dependencies.
const FaThumbsUp = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.13 223.94L392 320H152a24 24 0 00-24 24v136a24 24 0 0024 24h240a23.93 23.93 0 0023.41-20.24l48.4-145.19a24 24 0 00-7.68-26.63zM120 480H56a24 24 0 01-24-24V248a24 24 0 0124-24h64v256z"></path></svg>;
const FaRegThumbsUp = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.13 223.94L392 320H152a24 24 0 00-24 24v136a24 24 0 0024 24h240a23.93 23.93 0 0023.41-20.24l48.4-145.19a24 24 0 00-7.68-26.63zM120 480H56a24 24 0 01-24-24V248a24 24 0 0124-24h64v256zM392 344l-23-69.1-1.3-3.9H152v-48h213.9l23.1 69.1 1.3 3.9H392v48z"></path></svg>;
const FaComment = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22.2 14.5H256c141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>;
const FaTrashAlt = ({ size = '1em' }) => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg"><path d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z"></path></svg>;
const FaUser = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>;
const FaWifi = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-48.6 0-96 19.4-128 51.2l128 128 128-128C352 179.4 304.6 160 256 160zM256 48C141.1 48 33.3 92.5 0 160l256 256L512 160C478.7 92.5 370.9 48 256 48z"></path></svg>;
const FaTimesCircle = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>;

// --- Configuration ---
const API_BASE_URL = 'http://localhost:3000';
const API_URL = `${API_BASE_URL}/api`;

// --- API Service ---
const getAuthToken = () => localStorage.getItem('jwtToken');

const apiService = {
    async _fetch(url, options = {}) {
        const token = getAuthToken();
        const headers = { 'Content-Type': 'application/json', ...options.headers };
        if (token) headers['Authorization'] = `Bearer ${token}`;
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: response.statusText }));
            throw new Error(errorData.message || 'An API error occurred');
        }
        return response.json();
    },
    async fetchPosts() { return this._fetch(`${API_URL}/posts`); },
    async fetchCommentsForPost(postId) { return this._fetch(`${API_URL}/posts/${postId}/comments`); },
    async likePost(postId) { return this._fetch(`${API_URL}/posts/${postId}/like`, { method: 'POST' }); },
    async addComment(postId, content) { return this._fetch(`${API_URL}/posts/${postId}/comments`, { method: 'POST', body: JSON.stringify({ content }) }); },
    async deleteComment(commentId) { return this._fetch(`${API_URL}/comments/${commentId}`, { method: 'DELETE' }); }
};

// --- Custom Hooks ---
function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const token = getAuthToken();
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded && decoded.exp * 1000 >= Date.now()) {
                setCurrentUser(decoded);
            } else {
                localStorage.removeItem("jwtToken");
            }
        }
    }, []);
    return currentUser;
}

function useSocket(handlers) {
    const [socketStatus, setSocketStatus] = useState('Connecting...');
    useEffect(() => {
        const socket = io(API_BASE_URL, { withCredentials: true });
        const onConnect = () => setSocketStatus('Connected');
        const onDisconnect = () => setSocketStatus('Disconnected');
        const onConnectError = (err) => { setSocketStatus('Connection Error'); console.error('Socket Connection Error:', err); };
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('connect_error', onConnectError);
        for (const event in handlers) socket.on(event, handlers[event]);
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('connect_error', onConnectError);
            for (const event in handlers) socket.off(event, handlers[event]);
            socket.disconnect();
        };
    }, [handlers]);
    return { socketStatus };
}

// --- UI Components ---
const SocketStatus = memo(({ status }) => {
    const statusConfig = {
        'Connected': { icon: <FaWifi />, color: 'bg-green-500' },
        'Disconnected': { icon: <FaTimesCircle />, color: 'bg-red-500' },
        'Connecting...': { icon: <FaWifi />, color: 'bg-yellow-500' },
        'Connection Error': { icon: <FaTimesCircle />, color: 'bg-red-500' },
    };
    const { icon, color } = statusConfig[status] || statusConfig['Disconnected'];
    return (<div className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg flex items-center gap-2 text-white ${color} z-50 text-sm font-medium`}>{icon} <span>Socket: {status}</span></div>);
});

const Comment = memo(({ comment, currentUser, postOwnerId, onDeleteComment }) => {
    const canDelete = currentUser && (currentUser.id === comment.userId?._id || currentUser.id === postOwnerId || currentUser.role === 'admin');
    return (
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg relative group">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                    <img src={comment.userId?.profilePicture ? `${API_BASE_URL}${comment.userId.profilePicture}` : 'https://placehold.co/100x100/A9A9A9/FFFFFF?text=??'} alt={comment.userId?.firstName} className="w-6 h-6 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600" />
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{comment.userId?.firstName} {comment.userId?.lastName}</span>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{comment.content}</p>
                    </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">{new Date(comment.createdAt).toLocaleTimeString()}</span>
            </div>
            {canDelete && (<button onClick={() => onDeleteComment(comment._id)} className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100" title="Delete Comment"><FaTrashAlt size={'14px'} /></button>)}
        </div>
    );
});

const CommentList = memo(({ comments, currentUser, postOwnerId, onDeleteComment }) => {
    return (
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {comments?.length > 0 ? comments.map((comment) => (<Comment key={comment._id} comment={comment} currentUser={currentUser} postOwnerId={postOwnerId} onDeleteComment={onDeleteComment} />)) : (<p className="text-sm text-center text-gray-500 dark:text-gray-400 py-4">No comments yet.</p>)}
        </div>
    );
});

const AddCommentForm = ({ postId, currentUser, onAddComment }) => {
    const [content, setContent] = useState('');
    const handleSubmit = (e) => { e.preventDefault(); if (!content.trim() || !currentUser) return; onAddComment(postId, content); setContent(''); };
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
            <input type="text" placeholder={currentUser ? "Write a comment..." : "Login to comment"} value={content} onChange={(e) => setContent(e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition" disabled={!currentUser} />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={!currentUser || !content.trim()}>Post</button>
        </form>
    );
};

const PostCard = memo(({ post, currentUser, onLike, onAddComment, onDeleteComment }) => {
    const [showFullContent, setShowFullContent] = useState(false);
    const sanitizedContent = post.content;
    const contentRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);
    const navigate = useNavigate(); // ADDED useNavigate hook

    // CHANGED: Replaced useEffect with useLayoutEffect for accurate DOM measurement.
    // This runs synchronously after DOM updates, ensuring the element's size is correct.
    useLayoutEffect(() => {
        if (contentRef.current) {
            // This condition checks if the content is overflowing its container,
            // which indicates it has been truncated by the line-clamp CSS.
            setIsTruncated(contentRef.current.scrollHeight > contentRef.current.clientHeight);
        }
    }, [sanitizedContent]);

    const toggleContent = () => {
        setShowFullContent(prev => !prev);
    };

    const handleReadMeClick = () => { // ADDED a new function for navigation
        navigate(`/post/${post._id}`); // You need to define this route in your main App component
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
            {post.image && (<img src={`${API_BASE_URL}${post.image}`} alt={post.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />)}
            <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
                <div 
                    ref={contentRef}
                    // CHANGED: Added `break-words` to handle long strings without spaces.
                    // This ensures the line-clamp functionality works even with long URLs or words.
                    className={`text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-all duration-300 ${showFullContent ? '' : 'line-clamp-3'} break-words`} 
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
                />
                <div className="flex items-center gap-2">
                    {isTruncated && !showFullContent && (
                        <button 
                            onClick={toggleContent}
                            className="text-blue-600 dark:text-blue-400 text-sm font-medium text-left hover:underline focus:outline-none"
                        >
                            Read More...
                        </button>
                    )}
                    {/* 🎨 ADDED: Styled "Read Me" button */}
                    <button
                        onClick={handleReadMeClick} // CHANGED the onClick function
                        className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 hover:bg-blue-600/20 dark:hover:bg-blue-400/20"
                    >
                        Read Me 📖
                    </button>
                </div>
                {showFullContent && (
                    <button 
                        onClick={toggleContent}
                        className="text-blue-600 dark:text-blue-400 text-sm font-medium text-left -mt-2 mb-2 hover:underline focus:outline-none"
                    >
                        Collapse
                    </button>
                )}
                <div className="mt-auto flex justify-between items-center text-gray-500 dark:text-gray-400 text-xs">
                    <span className="flex items-center gap-1 font-medium"><FaUser /> {post.createdBy?.firstName} {post.createdBy?.lastName}</span>
                    <span className="font-medium">{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
                    <button onClick={() => onLike(post._id)} className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${post.likedByCurrentUser ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'}`} disabled={!currentUser}>{post.likedByCurrentUser ? <FaThumbsUp /> : <FaRegThumbsUp />} <span>{post.likes}</span></button>
                    <div className="ml-4 flex items-center gap-1 text-gray-600 dark:text-gray-300"><FaComment /> {post.comments?.length || 0}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <CommentList comments={post.comments} currentUser={currentUser} postOwnerId={post.createdBy?._id} onDeleteComment={onDeleteComment} />
                    <AddCommentForm postId={post._id} currentUser={currentUser} onAddComment={onAddComment} />
                </div>
            </div>
        </div>
    );
});

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const currentUser = useAuth();
    
    const handleNewComment = useCallback((newComment) => { setPosts(prev => prev.map(p => p._id === newComment.postId ? { ...p, comments: [...p.comments, newComment] } : p)); }, []);
    const handleCommentDeleted = useCallback(({ commentId, postId }) => { setPosts(prev => prev.map(p => p._id === postId ? { ...p, comments: p.comments.filter(c => c._id !== commentId) } : p)); }, []);
    const handlePostUpdated = useCallback((updatedPost) => { setPosts(prev => prev.map(p => p._id === updatedPost._id ? { ...p, likes: updatedPost.likes, likedByCurrentUser: updatedPost.likedByCurrentUser } : p)); }, []);
    const handleNewPost = useCallback((newPost) => { setPosts(prev => [{...newPost, comments: []}, ...prev]); }, []);
    const handlePostDeleted = useCallback(({ postId }) => { setPosts(prev => prev.filter(p => p._id !== postId)); }, []);

    const socketHandlers = { 'newPost': handleNewPost, 'postDeleted': handlePostDeleted, 'postUpdated': handlePostUpdated, 'newComment': handleNewComment, 'commentDeleted': handleCommentDeleted };
    const { socketStatus } = useSocket(socketHandlers);
    
    useEffect(() => {
        async function loadPosts() {
            try {
                setIsLoading(true);
                const fetchedPosts = await apiService.fetchPosts();
                const postsWithComments = await Promise.all(
                    fetchedPosts.map(async (post) => ({ ...post, comments: await apiService.fetchCommentsForPost(post._id) }))
                );
                setPosts(postsWithComments);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        loadPosts();
    }, []);

    const handleLike = async (postId) => { if (!currentUser) return alert('Please login to like posts.'); try { await apiService.likePost(postId); } catch (err) { alert(`Error: ${err.message}`); } };
    const handleAddComment = async (postId, content) => { if (!currentUser) return alert('Please login to comment.'); try { await apiService.addComment(postId, content); } catch (err) { alert(`Error: ${err.message}`); } };
    const handleDeleteComment = async (commentId) => { if (!currentUser) return alert('Please login to delete comments.'); if (window.confirm("Are you sure?")) { try { await apiService.deleteComment(commentId); } catch (err) { alert(`Error: ${err.message}`); } } };
    
    if (isLoading) return <div className="min-h-screen flex items-center justify-center pt-24 text-gray-600 dark:text-gray-300 text-xl">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center pt-24 text-red-500 text-lg">Error: {error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 px-4 pb-8">
            <SocketStatus status={socketStatus} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.length > 0 ? posts.map((post) => (<PostCard key={post._id} post={post} currentUser={currentUser} onLike={handleLike} onAddComment={handleAddComment} onDeleteComment={handleDeleteComment} />)) : (<div className="col-span-full text-center text-gray-500 dark:text-gray-400">No posts to display.</div>)}
            </div>
            <style>{`.custom-scrollbar::-webkit-scrollbar { width: 8px; } .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; } .dark .custom-scrollbar::-webkit-scrollbar-track { background: #2d3748; } .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #4a5568; } .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #718096; }`}</style>
        </div>
    );
}

export default HomePage;