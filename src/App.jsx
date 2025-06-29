import { Routes, Route, Outlet } from "react-router-dom";

// Components
// Components
import HomePage from "./components/HomePage";
import LoginForm from "./components/Loginform";
import RegisterForm from "./components/RegisterForm";
import DashboardLayout from "./components/DashboardLayout";
import ManageUsers from "./components/ManageUsers";
import ActiveStatus from "./components/ActiveStatus";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";
import ManagePosts from "./components/Managepost";
import PostDetail from "./components/PostDetail";
import EditPostForm from "./components/EditPostPage";
import CreateUserForm from "./components/CreateUserForm";
import EditProfile from "./components/Editprofile";
import RequestPage from "./components/RequestPage";
import AdminMail from "./components/AdminMail"; // ✅ ADD THIS LINE

import { Toaster } from "react-hot-toast";

// ✅ Shared layout wrapper using Outlet
const Wrapped = () => (
  <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 px-4">
    <Outlet />
  </div>
);

export default function App() {
  return (

    
    <Routes>
      




      {/* ✅ Public Routes with layout wrapper */}
      <Route element={<Wrapped />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
       
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/request" element={<RequestPage />} /> {/* ✅ Mail Page Route */}
        

         <Route path="/profile/" element={<Profile />} />
         <Route path="/editprofile" element={<EditProfile />} />
      
       

      </Route>

      {/* ✅ Admin Routes with dashboard layout */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<ActiveStatus />} />
        <Route path="manageusers" element={<ManageUsers />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="managepost" element={<ManagePosts />} />
         <Route path="createusers" element={<CreateUserForm />} />
         <Route path="edit/:postId" element={<EditPostForm />} />
          <Route path="mail" element={<AdminMail />} /> {/* ✅ Mail Page Route */}
          

        
        <Route
          path="*"
          element={
            <div className="p-8 text-center text-red-600">
              Admin Page Not Found
            </div>
          }
        />
      </Route>

      {/* ✅ Global fallback 404 */}
      <Route
        path="*"
        element={
          <div className="p-8 text-center text-red-600">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
    
  );
}
