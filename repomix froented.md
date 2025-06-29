This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/vite.svg
README.md
repomix.config.json
src/App.css
src/App.jsx
src/components/ActiveStatus.jsx
src/components/AddPost - Copy.jsx
src/components/AddPost.jsx
src/components/AdminMail.jsx
src/components/axiosInstance.jsx
src/components/content - Copy.jsx
src/components/content.jsx
src/components/CreateUserForm.jsx
src/components/DarkModeToggle.jsx
src/components/DashboardLayout.jsx
src/components/EditPostPage.jsx
src/components/Editprofile.jsx
src/components/HomePage.jsx
src/components/LoadingSpring.jsx
src/components/Loginform.jsx
src/components/Managepost.jsx
src/components/ManageUsers.jsx
src/components/MenuBar.jsx
src/components/Navbar.jsx
src/components/PostDetail.jsx
src/components/Profile.jsx
src/components/RegisterForm.jsx
src/components/RequestPage.jsx
src/index.css
src/main.jsx
tailwind.config.js
vite.config.js
```

# Files

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```

## File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "test",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": " vite preview"
  },
  "dependencies": {
    "@headlessui/react": "^2.2.4",
    "@tiptap/core": "^2.22.2",
    "@tiptap/extension-blockquote": "^2.14.0",
    "@tiptap/extension-bullet-list": "^2.14.0",
    "@tiptap/extension-code-block-lowlight": "^2.22.3",
    "@tiptap/extension-color": "^2.22.3",
    "@tiptap/extension-font-family": "^2.22.0",
    "@tiptap/extension-heading": "^2.14.0",
    "@tiptap/extension-highlight": "^2.14.0",
    "@tiptap/extension-history": "^2.14.0",
    "@tiptap/extension-horizontal-rule": "^2.14.0",
    "@tiptap/extension-image": "^2.22.2",
    "@tiptap/extension-link": "^2.22.2",
    "@tiptap/extension-list-item": "^2.14.0",
    "@tiptap/extension-ordered-list": "^2.14.0",
    "@tiptap/extension-table": "^2.22.2",
    "@tiptap/extension-text-align": "^2.22.2",
    "@tiptap/extension-text-style": "^2.22.3",
    "@tiptap/extension-underline": "^2.14.0",
    "@tiptap/pm": "^2.22.2",
    "@tiptap/react": "^2.22.3",
    "@tiptap/starter-kit": "^2.22.3",
    "audit": "^0.0.6",
    "axios": "^1.10.0",
    "dompurify": "^3.2.6",
    "fix": "^0.0.6",
    "framer-motion": "^12.18.1",
    "highlight.js": "^11.11.1",
    "jwt-decode": "^4.0.0",
    "lodash": "^4.17.21",
    "nodemon": "^3.1.10",
    "npm": "^11.4.2",
    "prosemirror-tables": "^1.7.1",
    "quill": "^2.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-quill": "^2.0.0",
    "react-router-dom": "^7.6.2",
    "socket.io-client": "^4.8.1",
    "sweetalert2": "^11.6.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "vite": "^6.3.5"
  }
}
```

## File: postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## File: public/vite.svg
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

## File: README.md
```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```

## File: repomix.config.json
```json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
```

## File: src/App.css
```css
/* ReactQuill dark mode support */
.dark .ql-toolbar,
.dark .ql-container {
  background-color: #1f2937 !important;
  color: #e5e7eb !important;
  border-color: #4b5563 !important;
}

.dark .ql-editor {
  color: #f3f4f6 !important;
}

.dark .ql-editor::before {
  color: #9ca3af !important;
}
```

## File: src/App.jsx
```javascript
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
```

## File: src/components/ActiveStatus.jsx
```javascript
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserStatusList() {
  const [users, setUsers] = useState([]);

 useEffect(() => {
  const token = localStorage.getItem("jwtToken");
  if (!token) return;

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err.message);
    }
  };

  fetchUsers();
  const interval = setInterval(fetchUsers, 10000); // every 10 seconds
  return () => clearInterval(interval);
}, []);


  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-600/30 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-600/30 dark:text-yellow-300";
      case "Offline":
      default:
        return "bg-gray-200 text-gray-800 dark:bg-gray-600/40 dark:text-white";
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">User Online Status</h1>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wide">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{index + 1}</td>
                  <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-6 text-center text-gray-400 dark:text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/AddPost - Copy.jsx
```javascript
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
```

## File: src/components/AddPost.jsx
```javascript
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
```

## File: src/components/AdminMail.jsx
```javascript
// components/AdminMail.jsx
import { useEffect, useState } from "react";

export default function AdminMail() {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const res = await fetch("http://localhost:3000/api/request", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMails(data);
      } catch (error) {
        console.error("Failed to fetch mails", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMails();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📬 User Requests / Mails</h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : mails.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No requests found.</p>
      ) : (
        <ul className="space-y-4">
          {mails.map((mail, idx) => (
            <li key={idx} className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <h3 className="text-lg font-semibold">{mail.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{mail.message}</p>
              <p className="text-xs text-gray-400 mt-2">From: {mail.user?.email || "Unknown"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## File: src/components/axiosInstance.jsx
```javascript
// utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
```

## File: src/components/content - Copy.jsx
```javascript
// src/components/content.jsx

function getWordUnderCursor() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return null;
  const node = selection.getRangeAt(0).startContainer;
  if (node.nodeType !== Node.TEXT_NODE) return null;
  const text = node.textContent;
  const offset = selection.getRangeAt(0).startOffset;

  let start = offset;
  while (start > 0 && /\S/.test(text[start - 1])) start--;
  let end = offset;
  while (end < text.length && /\S/.test(text[end])) end++;
  return text.substring(start, end);
}

export default function Content() {
  // Your component logic here...

  // Example usage inside an event handler:
  const handleClick = () => {
    const word = getWordUnderCursor();
    console.log("Word under cursor:", word);
  };

  return (
    <div onClick={handleClick}>
      {/* Your component JSX */}
    </div>
  );
}


document.body.addEventListener('click', () => {
  const word = getWordUnderCursor();
  console.log('Word under cursor:', word);
});
```

## File: src/components/content.jsx
```javascript
// src/components/content.jsx

function getWordUnderCursor() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return null;
  const node = selection.getRangeAt(0).startContainer;
  if (node.nodeType !== Node.TEXT_NODE) return null;
  const text = node.textContent;
  const offset = selection.getRangeAt(0).startOffset;

  let start = offset;
  while (start > 0 && /\S/.test(text[start - 1])) start--;
  let end = offset;
  while (end < text.length && /\S/.test(text[end])) end++;
  return text.substring(start, end);
}

export default function Content() {
  // Your component logic here...

  // Example usage inside an event handler:
  const handleClick = () => {
    const word = getWordUnderCursor();
    console.log("Word under cursor:", word);
  };

  return (
    <div onClick={handleClick}>
      {/* Your component JSX */}
    </div>
  );
}


document.body.addEventListener('click', () => {
  const word = getWordUnderCursor();
  console.log('Word under cursor:', word);
});
```

## File: src/components/CreateUserForm.jsx
```javascript
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateUserForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      Swal.fire("Unauthorized", "Please log in as admin.", "warning");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      }

      await axios.post("http://localhost:3000/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire("Success", "User created successfully!", "success");
      setForm({ firstName: "", lastName: "", email: "", password: "", role: "user" });
      setProfilePicture(null);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err.response?.data?.message || "Failed to create user.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-xl mt-10 p-6 rounded shadow 
                      bg-white dark:bg-gray-800 
                      text-gray-900 dark:text-gray-100 
                      transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6">Create New Account</h2>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white 
                       focus:outline-none focus:ring focus:ring-blue-500"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded 
                       border border-gray-300 dark:border-gray-400 
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="file"
            onChange={handleImage}
            accept="image/*"
            className="text-gray-800 dark:text-gray-200"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-blue-600 hover:bg-blue-700 
                       text-white font-medium px-4 py-2 rounded"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
```

## File: src/components/DarkModeToggle.jsx
```javascript
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg border font-medium shadow-sm
        transition-colors duration-200 ease-in-out
        bg-white text-black border-gray-300 hover:bg-gray-100
        dark:bg-[#1f2937] dark:text-[#e0e0e0] dark:border-[#444] dark:hover:bg-[#2a2a2a]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      `}
    >
      {darkMode ? (
        <>
          <span>🌙</span>
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <span>☀️</span>
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
}
```

## File: src/components/DashboardLayout.jsx
```javascript
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function DashboardLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (err) {
      console.error("Invalid token:", err.message);
      localStorage.removeItem("jwtToken");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("jwtToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Logout failed. Please try again.");
    }
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Checking admin access...
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Access Denied: Admins only.
      </div>
    );
  }

  return (
    <div className="flex h-screen pt-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 fixed top-16 bottom-0 left-0 bg-white dark:bg-gray-800 p-6 shadow-md z-30 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/admin/manageusers" className="block no-underline">Manage Users</Link>
          <Link to="/admin/createusers" className="block no-underline">Create Users</Link>
          <Link to="/admin/addpost" className="block no-underline">Add Post</Link>
          <Link to="/admin/managepost" className="block no-underline">Post Manage</Link>
          <Link to="/admin/mail" className="block no-underline">Mail</Link> {/* ✅ New Link */}
          <button
            onClick={handleLogout}
            className="block text-left w-full mt-6 text-red-600"
          >
            Logout
          </button>
          <Link to="/" className="block text-sm text-gray-500 no-underline">← Back to Home</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
}
```

## File: src/components/EditPostPage.jsx
```javascript
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
```

## File: src/components/Editprofile.jsx
```javascript
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
  });

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setError("User not logged in.");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        return;
      }

      axiosInstance
        .get("/profile")
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.error("Profile fetch failed:", err.message);
          setError("Failed to load profile.");
        });
    } catch {
      setError("Invalid session token.");
      localStorage.removeItem("jwtToken");
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-red-500 text-lg space-y-4">
        <p>{error}</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-10 flex gap-8 items-center">
        <div>
          <img
            src={
              user.profilePicture
                ? `http://localhost:3000${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
            <span className="mt-3 inline-block px-3 py-1 text-xs font-semibold uppercase bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-blue-300 rounded-full w-fit">
              {user.role}
            </span>
          </div>
          <div className="mt-6 self-end">
            <Link
              to="/editprofile"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/HomePage.jsx
```javascript
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
```

## File: src/components/LoadingSpring.jsx
```javascript
import { motion } from "framer-motion";

export default function LoadingSpring() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <motion.div
        className="w-10 h-10 rounded-full bg-blue-500"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut", // removed spring
        }}
      />
    </div>
  );
}
```

## File: src/components/Loginform.jsx
```javascript
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../components/axiosInstance";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/login", { email, password });
      const token = response.data.token;

      if (token) {
        localStorage.setItem("jwtToken", token);
        navigate("/profile");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError("Invalid credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <fieldset className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                aria-label="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                aria-label="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {error}
              </p>
            )}
          </fieldset>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
```

## File: src/components/Managepost.jsx
```javascript
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
```

## File: src/components/ManageUsers.jsx
```javascript
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Dialog, Transition } from "@headlessui/react";

export default function AllUsersTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "user",
    password: "",
  });

  const token = localStorage.getItem("jwtToken");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    if (token) fetchUsers();
  }, [token]);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      role: user.role || "user",
      password: "", // only provide if changing password
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        role: form.role,
      };

      if (form.password.trim()) {
        updateData.password = form.password;
      }

      await axios.put(
        `http://localhost:3000/api/users/${editingUser._id}`,
        updateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("User updated");
      setEditingUser(null);
      fetchUsers();
    } catch {
      toast.error("Update failed");
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userToDelete._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("User deleted");
      setUsers((prev) => prev.filter((u) => u._id !== userToDelete._id));
    } catch {
      toast.error("Delete failed");
    } finally {
      setUserToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Users</h1>

      {/* Delete Modal */}
      <Transition appear show={!!userToDelete} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center"
          onClose={() => setUserToDelete(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl max-w-md w-full z-50">
            <Dialog.Title className="text-xl font-semibold text-red-600 text-center">
              Confirm Deletion
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-center text-gray-700 dark:text-gray-300">
              Are you sure you want to delete <strong>{userToDelete?.firstName} {userToDelete?.lastName}</strong>?
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setUserToDelete(null)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                Cancel
              </button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Edit Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>

            {["firstName", "lastName", "email"].map((field) => (
              <div key={field}>
                <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                <input
                  type="text"
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1">Password <span className="text-sm text-gray-400">(optional)</span></label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1">Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setEditingUser(null)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{user.firstName} {user.lastName}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 capitalize">{user.role}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setUserToDelete(user)}
                    className="ml-2 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

## File: src/components/MenuBar.jsx
```javascript
import { useState } from "react";

export default function MenuBar({ editor }) {
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("16px");

  if (!editor) return null;

  const applyColor = (selectedColor) => {
    setColor(selectedColor);
    editor.chain().focus().setColor(selectedColor).run();
  };

  const applyFontSize = (size) => {
    setFontSize(size);
    editor.chain().focus().setFontSize(size).run();
  };

  const increaseFont = () => {
    const current = parseInt(fontSize.replace("px", ""), 10);
    const newSize = `${Math.min(current + 2, 72)}px`;
    applyFontSize(newSize);
  };

  const decreaseFont = () => {
    const current = parseInt(fontSize.replace("px", ""), 10);
    const newSize = `${Math.max(current - 2, 8)}px`;
    applyFontSize(newSize);
  };

  const buttonClasses = (active) =>
    `${active ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"} 
    px-2 py-1 rounded hover:bg-blue-500 dark:hover:bg-blue-600 transition`;

  return (
    <div className="mb-3 flex flex-wrap gap-2 items-center">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClasses(editor.isActive("bold"))}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClasses(editor.isActive("italic"))}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={buttonClasses(editor.isActive("strike"))}
      >
        Strike
      </button>

      {/* Color Picker */}
      <label className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded cursor-pointer">
        <span className="text-sm text-gray-800 dark:text-gray-100">Color</span>
        <input
          type="color"
          value={color}
          onChange={(e) => applyColor(e.target.value)}
          className="w-6 h-6 border rounded cursor-pointer"
        />
      </label>

      <button
        type="button"
        onClick={() => editor.chain().focus().unsetColor().run()}
        className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition"
      >
        Reset Color
      </button>

      {/* Font Size Controls */}
      <button
        type="button"
        onClick={decreaseFont}
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        A−
      </button>
      <button
        type="button"
        onClick={increaseFont}
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        A+
      </button>
    </div>
  );
}
```

## File: src/components/Navbar.jsx
```javascript
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  FaHome,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaUserShield,
  FaBars,
  FaTimes,
  FaClipboardList, // ✅ Icon for Request
} from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("jwtToken");
          setUser(null);
          return;
        }
        setUser(decoded);
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("jwtToken");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const navLink = (path, label, icon) => (
    <Link
      to={path}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition font-medium ${
        location.pathname === path
          ? "text-blue-600 dark:text-blue-400 underline"
          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      }`}
      onClick={() => setMenuOpen(false)}
    >
      {icon} {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          MyApp
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLink("/", "Home", <FaHome />)}
          {!user && (
            <>
              {navLink("/login", "Login", <FaSignInAlt />)}
              {navLink("/register", "Register", <FaUserPlus />)}
            </>
          )}
          {user?.role === "admin" && navLink("/admin", "Dashboard", <FaUserShield />)}
          {user && navLink("/request", "Request", <FaClipboardList />)} {/* ✅ New Link */}
          {user && navLink("/profile", "Profile", <FaUser />)}
        </div>

        {/* Right Tools */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium hover:underline"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl text-gray-700 dark:text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium">
          {navLink("/", "Home", <FaHome />)}
          {!user && (
            <>
              {navLink("/login", "Login", <FaSignInAlt />)}
              {navLink("/register", "Register", <FaUserPlus />)}
            </>
          )}
          {user?.role === "admin" && navLink("/admin", "Dashboard", <FaUserShield />)}
          {user && navLink("/request", "Request", <FaClipboardList />)} {/* ✅ New Link */}
          {user && navLink("/profile", "Profile", <FaUser />)}
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:underline"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
```

## File: src/components/PostDetail.jsx
```javascript
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
```

## File: src/components/Profile.jsx
```javascript
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../components/axiosInstance";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in.");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        return;
      }
    } catch {
      setError("Invalid session token.");
      localStorage.removeItem("jwtToken");
      return;
    }

    axiosInstance
      .get("/profile")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error("Profile fetch failed:", err.message);
        setError("Failed to load profile.");
      });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-red-500 text-lg space-y-4">
        <p>{error}</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-10 flex gap-8 items-center">
        {/* Profile Picture - Left */}
        <div>
          <img
            src={
              user.profilePicture
                ? `http://localhost:3000${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        {/* Profile Info - Right */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
            <span className="mt-3 inline-block px-3 py-1 text-xs font-semibold uppercase bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-blue-300 rounded-full w-fit">
              {user.role}
            </span>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 self-end">
            <Link
              to="/editprofile"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/RegisterForm.jsx
```javascript
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
```

## File: src/components/RequestPage.jsx
```javascript
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
```

## File: src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* index.css */
html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
```

## File: src/main.jsx
```javascript
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import LoadingSpring from './components/LoadingSpring.jsx';
import { motion } from 'framer-motion'; // optional, for smooth transitions


function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpring />;

  return (
    <BrowserRouter>
     
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Navbar />
        <App />
      </motion.div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',          // true dark background
          surface: '#1f2937',     // surface cards/containers
          text: '#e0e0e0',        // light text
          border: '#444444',      // muted border
          hover: '#2a2a2a',       // hover states
          accent: '#3b82f6',      // optional highlight (blue-500)
        },
      },
    },
  },
  plugins: [],
}
```

## File: vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```
