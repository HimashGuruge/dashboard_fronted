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
src/assets/react.svg
src/components/ActiveStatus.jsx
src/components/AddPost.jsx
src/components/axiosInstance.jsx
src/components/content.jsx
src/components/CreateUserForm.jsx
src/components/DarkModeToggle.jsx
src/components/DashboardLayout.jsx
src/components/EditPostPage.jsx
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
    "axios": "^1.10.0",
    "dompurify": "^3.2.6",
    "framer-motion": "^12.18.1",
    "highlight.js": "^11.11.1",
    "jwt-decode": "^4.0.0",
    "lodash": "^4.17.21",
    "nodemon": "^3.1.10",
    "prosemirror-tables": "^1.7.1",
    "quill": "^2.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-quill": "^2.0.0",
    "react-router-dom": "^7.6.2",
    "socket.io-client": "^4.8.1",
    "sweetalert2": "^11.22.1"
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
import { Toaster } from "react-hot-toast";
import CreateUserForm from "./components/CreateUserForm";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<PostDetail />} />
       

      </Route>

      {/* ✅ Admin Routes with dashboard layout */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<ActiveStatus />} />
        <Route path="manageusers" element={<ManageUsers />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="managepost" element={<ManagePosts />} />
         <Route path="createusers" element={<CreateUserForm />} />
         <Route path="edit/:postId" element={<EditPostForm />} />
        
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

## File: src/assets/react.svg
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

## File: src/components/ActiveStatus.jsx
```javascript
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserActiveStatus() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setError("No JWT token found");
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching users:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers(); // Initial call
    const intervalId = setInterval(fetchUsers, 5000); // Polling every 5s
    return () => clearInterval(intervalId); // Cleanup
  }, []);

  const getStatusStyle = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800 dark:bg-green-600/30 dark:text-green-300"
      : "bg-gray-200 text-gray-800 dark:bg-gray-600/40 dark:text-white";
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">User Active Status</h1>

      {error && (
        <div className="text-center mb-4 text-red-500 font-semibold">
          ⚠️ {error}
        </div>
      )}

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
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{index + 1}</td>
                    <td className="px-6 py-4">{user.firstName} {user.lastName}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
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

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
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
      {/* Fixed Sidebar */}
      <aside className="w-64 fixed top-16 bottom-0 left-0 bg-white dark:bg-gray-800 p-6 shadow-md z-30 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/admin/manageusers" className="block no-underline">Manage Users</Link>
          <Link to="/admin/createusers" className="block no-underline">Create Users</Link>
          <Link to="/admin/addpost" className="block no-underline">Add Post</Link>
          <Link to="/admin/managepost" className="block no-underline">Post Manage</Link>
          <button
            onClick={handleLogout}
            className="block text-left w-full mt-6 text-red-600"
          >
            Logout
          </button>
          <Link to="/" className="block text-sm text-gray-500 no-underline">← Back to Home</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
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
  );
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

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
    navigate("/");
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
          {user && navLink("/profile", "Profile", <FaUser />)}
        </div>

        {/* Right Tools */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium hover:underline"
            >
              <FaSignOutAlt /> Logout
            </button>
          ) : null}
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
import { useNavigate } from "react-router-dom";
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
      <div className="min-h-screen flex flex-col items-center justify-center text-red-500 text-lg space-y-4">
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
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
          <img
            src={
              user.profilePicture
                ? `http://localhost:3000${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-blue-500"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>
        <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 uppercase font-bold">
          {user.role}
        </p>
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
