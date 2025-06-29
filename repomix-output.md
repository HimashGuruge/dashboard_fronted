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
repomix froented.md
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
````
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
````

## File: eslint.config.js
````javascript
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
````

## File: index.html
````html
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
````

## File: package.json
````json
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
    "@tailwindcss/line-clamp": "^0.4.4",
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
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: public/vite.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: README.md
````markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
````

## File: repomix froented.md
````markdown
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
````

## File: repomix.config.json
````json
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
````

## File: src/App.css
````css
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
````

## File: src/components/ActiveStatus.jsx
````javascript
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
````

## File: src/components/AddPost - Copy.jsx
````javascript
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
````

## File: src/components/AddPost.jsx
````javascript
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
````

## File: src/components/axiosInstance.jsx
````javascript
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
````

## File: src/components/content - Copy.jsx
````javascript
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
````

## File: src/components/content.jsx
````javascript
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
````

## File: src/components/CreateUserForm.jsx
````javascript
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
````

## File: src/components/DarkModeToggle.jsx
````javascript
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
````

## File: src/components/EditPostPage.jsx
````javascript
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
````

## File: src/components/LoadingSpring.jsx
````javascript
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
````

## File: src/components/Loginform.jsx
````javascript
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
````

## File: src/components/Managepost.jsx
````javascript
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
````

## File: src/components/MenuBar.jsx
````javascript
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
````

## File: src/components/PostDetail.jsx
````javascript
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
````

## File: src/components/RegisterForm.jsx
````javascript
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
````

## File: src/components/RequestPage.jsx
````javascript
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
````

## File: src/index.css
````css
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
````

## File: src/main.jsx
````javascript
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
````

## File: tailwind.config.js
````javascript
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
          bg: '#121212',       // true dark background
          surface: '#1f2937',     // surface cards/containers
          text: '#e0e0e0',      // light text
          border: '#444444',      // muted border
          hover: '#2a2a2a',      // hover states
          accent: '#3b82f6',      // optional highlight (blue-500)
        },
      },
    },
  },
  plugins: [
    // --- ADDED plugin for line-clamp functionality ---
   
  ],
}
````

## File: vite.config.js
````javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
````

## File: src/App.jsx
````javascript
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
````

## File: src/components/HomePage.jsx
````javascript
import React, { useState, useEffect, useRef, useCallback, memo, useLayoutEffect } from 'react'; // ADDED useLayoutEffect to the import
import { io } from "socket.io-client";

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
                        onClick={() => alert(

    
)}
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
````

## File: src/components/ManageUsers.jsx
````javascript
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast"; // ✅ REMOVED: hot-toast import
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // ✅ NEW: Import SweetAlert2 for error alerts

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
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for authentication errors
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken"); // Clear invalid token
          navigate("/login"); // Redirect to login page
        });
      } else {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for other fetch errors
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch users. Please check server connection.',
        });
      }
    }
  };

  useEffect(() => {
    if (token) { 
        fetchUsers();
    } else {
        Swal.fire({ // ✅ MODIFIED: Handle missing token with Swal.fire
          icon: 'error',
          title: 'Authentication Required',
          text: 'Authentication token missing. Please log in.',
        }).then(() => {
          navigate("/login"); // Redirect to login if token is missing
        });
    }
  }, [token, navigate]);

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

      // toast.success("User updated successfully!"); // ✅ REMOVED: hot-toast
      Swal.fire('Updated!', 'User updated successfully!', 'success'); // ✅ NEW: SweetAlert success
      setEditingUser(null);
      fetchUsers(); // Re-fetch users to update the table
    } catch (error) {
      console.error("Update failed:", error);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for authentication errors
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken");
          navigate("/login");
        });
      } else {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for other update errors
          icon: 'error',
          title: 'Update Failed',
          text: 'Failed to update user.',
        });
      }
    }
  };

  const confirmDelete = async () => {
    // This part already uses Swal.fire, no changes needed for this block specifically.
    // However, the success/error toasts will be removed/replaced below.
    try {
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
        await axios.delete(`http://localhost:3000/api/users/${userToDelete._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // toast.success("User deleted successfully!"); // ✅ REMOVED: hot-toast
        Swal.fire('Deleted!', 'User deleted successfully!', 'success'); // ✅ NEW: SweetAlert success
        setUsers((prev) => prev.filter((u) => u._id !== userToDelete._id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for authentication errors
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken");
          navigate("/login");
        });
      } else {
        Swal.fire({ // ✅ MODIFIED: Use Swal.fire for other delete errors
          icon: 'error',
          title: 'Delete Failed',
          text: 'Failed to delete user.',
        });
      }
    } finally {
      setUserToDelete(null); // Close the delete confirmation modal
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
      {/* <Toaster position="top-center" /> */ } {/* ✅ REMOVED: hot-toast Toaster component */}
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

      {/* Edit Modal - Now using Transition and Dialog for consistency */}
      <Transition appear show={!!editingUser} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center"
          onClose={() => setEditingUser(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl w-full max-w-md z-50">
            <Dialog.Title className="text-xl font-semibold mb-4">Edit User</Dialog.Title>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              {["firstName", "lastName", "email"].map((field) => (
                <div key={field}>
                  <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                  <input
                    type="text"
                    name={field}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1">Password <span className="text-sm text-gray-400">(optional)</span></label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1">Role</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </Dialog>
      </Transition>

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
````

## File: src/components/AdminMail.jsx
````javascript
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'; // ✅ NEW: Import SweetAlert2

export default function AdminMail() {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMails = async () => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("jwtToken");
      const res = await fetch("http://localhost:3000/api/requests", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMails(data.mails);
    } catch (error) {
      console.error("Failed to fetch mails", error);
      setError("Failed to load requests. Please try again.");
      toast.error("Failed to load requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []);

  const handleMarkAsRead = async (mailId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:3000/api/requests/${mailId}/mark-read`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to mark as read");
      }

      setMails(prevMails =>
        prevMails.map(mail =>
          mail._id === mailId ? { ...mail, read: true } : mail
        )
      );
      toast.success("Request marked as read!");
    } catch (err) {
      console.error("Error marking mail as read:", err);
      toast.error("Failed to mark as read.");
    }
  };

  const handleDelete = async (mailId) => {
    // ✅ MODIFIED: Use SweetAlert2 for confirmation instead of window.confirm
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
      try {
        const token = localStorage.getItem("jwtToken");
        const res = await fetch(`http://localhost:3000/api/requests/${mailId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to delete request");
        }

        setMails(prevMails => prevMails.filter(mail => mail._id !== mailId));
        toast.success("Request deleted successfully!"); // Show success toast
        // Swal.fire( // Optional: Show SweetAlert success message, but toast is already doing this
        //   'Deleted!',
        //   'Your request has been deleted.',
        //   'success'
        // );
      } catch (err) {
        console.error("Error deleting mail:", err);
        toast.error("Failed to delete request."); // Show error toast
        Swal.fire(
          'Error!',
          'Failed to delete request.',
          'error'
        );
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📬 User Requests / Mails</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : mails.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No requests found.</p>
      ) : (
        <ul className="space-y-4">
          {mails.map((mail) => (
            <li
              key={mail._id}
              className={`p-4 rounded ${mail.read ? 'bg-gray-100 dark:bg-gray-700' : 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{mail.title}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${mail.read ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'}`}>
                  {mail.read ? "Read" : "Unread"}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{mail.message}</p>
              <p className="text-xs text-gray-400 mt-2">From: {mail.userId?.email || "Unknown"}</p>
              <p className="text-xs text-gray-400">Submitted: {new Date(mail.submittedAt).toLocaleString()}</p>

              <div className="mt-4 space-x-2">
                {!mail.read && (
                  <button
                    onClick={() => handleMarkAsRead(mail._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => handleDelete(mail._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
````

## File: src/components/DashboardLayout.jsx
````javascript
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"; // ✅ MODIFIED: Added useLocation
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { io } from "socket.io-client";
import toast, { Toaster } from 'react-hot-toast';

export default function DashboardLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ NEW: Get current location object
  const [unreadMailCount, setUnreadMailCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("jwtToken");
        setIsAdmin(false);
        navigate("/login");
        return;
      }
      
      if (decoded.role === "admin") {
        setIsAdmin(true);

        const fetchUnreadCount = async () => {
          try {
            const res = await fetch("http://localhost:3000/api/requests/unread-count", {
              headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
              const data = await res.json();
              setUnreadMailCount(data.unreadCount);
            } else {
                toast.error("Failed to fetch initial unread mail count.");
            }
          } catch (err) {
            console.error("Failed to fetch unread count:", err);
            toast.error("Failed to fetch initial unread mail count.");
          }
        };
        fetchUnreadCount();

        const socket = io("http://localhost:3000");
        socket.on('connect', () => {
          console.log('Socket connected to backend 🚀');
        });

        socket.on('newMailRequest', (newRequest) => {
          setUnreadMailCount(prevCount => prevCount + 1);
          toast.success(`New request from ${newRequest.userId?.email || 'a user'}!`);
        });

        socket.on('mailRead', ({ requestId }) => {
            setUnreadMailCount(prevCount => Math.max(0, prevCount - 1));
        });

        socket.on('disconnect', () => {
          console.log('Socket disconnected from backend 🚪');
        });

        return () => {
          socket.disconnect();
        };

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
      toast.error("Logout failed. Please try again.");
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

  // Helper function to determine if a link is active
  const getLinkClass = (path) => {
    return `block no-underline p-2 rounded-md ${
      location.pathname === path
        ? 'bg-blue-600 text-white shadow-md' // Active state classes
        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' // Inactive state classes
    }`;
  };

  return (
    <div className="flex h-screen pt-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Sidebar */}
      <aside className="w-64 fixed top-16 bottom-0 left-0 bg-white dark:bg-gray-800 p-6 shadow-md z-30 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-2"> {/* Reduced space for tighter links */}
          <Link to="/admin/manageusers" className={getLinkClass("/admin/manageusers")}>Manage Users</Link>
          <Link to="/admin/createusers" className={getLinkClass("/admin/createusers")}>Create Users</Link>
          <Link to="/admin/addpost" className={getLinkClass("/admin/addpost")}>Add Post</Link>
          <Link to="/admin/managepost" className={getLinkClass("/admin/managepost")}>Post Manage</Link>
          <Link to="/admin/mail" className={getLinkClass("/admin/mail")}>
            Mail
            {unreadMailCount > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
                {unreadMailCount}
              </span>
            )}
          </Link>
          <button
            onClick={handleLogout}
            className="block text-left w-full mt-6 px-2 py-1 rounded-md text-red-600 hover:bg-red-100 dark:hover:bg-red-800"
          >
            Logout
          </button>
          <Link to="/" className="block text-sm text-gray-500 no-underline mt-4 px-2 py-1">← Back to Home</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
}
````

## File: src/components/Editprofile.jsx
````javascript
import { useEffect, useState, useRef } from "react"; // ✅ MODIFIED: Import useRef
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';
import io from 'socket.io-client'; // ✅ NEW: Import socket.io-client

export default function EditProfile() {
  const [user, setUser] = useState(null); // Current user data from API
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "user", // Default role
    password: "", // Added password field to form data
    profilePicture: null, // File object for new profile picture
    coverPhoto: null, // File object for new cover photo
    currentProfilePictureUrl: "", // URL of existing profile picture
    currentCoverPhotoUrl: "", // URL of existing cover photo
    removeProfilePicture: false, // Flag to indicate if profile picture should be removed
    removeCoverPhoto: false, // Flag to indicate if cover photo should be removed
    previewProfilePicture: "", // For showing immediate preview of selected profile picture
    previewCoverPhoto: "", // For showing immediate preview of selected cover photo
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Socket.IO setup - Use useRef to ensure a single socket instance
  const socketRef = useRef(null); // ✅ NEW: Ref to hold the socket instance
  const userRef = useRef(user); // ✅ NEW: Ref to hold the latest user state

  // ✅ NEW: Update userRef whenever user state changes
  useEffect(() => {
    userRef.current = user;
  }, [user]);


  // Fetch user profile data on component mount and listen for real-time updates
  useEffect(() => {
    // Initialize socket only once
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:3000');
    }

    const currentSocket = socketRef.current; // Get the current socket instance

    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in.");
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'You need to be logged in to edit your profile.',
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        Swal.fire({
          icon: 'error',
          title: 'Session Expired',
          text: 'Your session has expired. Please log in again.',
        }).then(() => {
          navigate("/login");
        });
        return;
      }
      
      const fetchProfile = () => {
        axios.get("http://localhost:3000/api/profile", {
            headers: { Authorization: `Bearer ${token}` }
        })
          .then((res) => {
            const fetchedUser = res.data.user;
            setUser(fetchedUser);
            setFormData({
              firstName: fetchedUser.firstName || "",
              lastName: fetchedUser.lastName || "",
              email: fetchedUser.email || "",
              role: fetchedUser.role || "user",
              password: "", // Initialize password as empty
              profilePicture: null, // Reset file input
              coverPhoto: null, // Reset file input
              currentProfilePictureUrl: fetchedUser.profilePicture ? `http://localhost:3000${fetchedUser.profilePicture}` : "",
              currentCoverPhotoUrl: fetchedUser.coverPhoto ? `http://localhost:3000${fetchedUser.coverPhoto}` : "",
              removeProfilePicture: false,
              removeCoverPhoto: false,
              previewProfilePicture: "", // Reset preview
              previewCoverPhoto: "", // Reset preview
            });
            setLoading(false);
          })
          .catch((err) => {
            console.error("Profile fetch failed:", err);
            if (err.response && (err.response.status === 401 || err.response.status === 403)) {
              Swal.fire({
                  icon: 'error',
                  title: 'Authentication Error',
                  text: 'Authentication failed. Please log in again.',
              }).then(() => {
                  localStorage.removeItem("jwtToken");
                  navigate("/login");
              });
            } else {
              setError("Failed to load profile. Please try again.");
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to load profile. Please try again.',
              });
            }
            setLoading(false);
          });
      };

      fetchProfile(); // Initial fetch

      // Listen for 'profileUpdated' event
      currentSocket.on('profileUpdated', (updatedUser) => {
        // Only update if the updated user is the current user
        // ✅ MODIFIED: Use userRef.current for the current user's ID
        if (userRef.current && updatedUser._id === userRef.current._id) { 
          setUser(updatedUser);
          setFormData(prev => ({
            ...prev,
            firstName: updatedUser.firstName || "",
            lastName: updatedUser.lastName || "",
            email: updatedUser.email || "",
            role: updatedUser.role || "user",
            currentProfilePictureUrl: updatedUser.profilePicture ? `http://localhost:3000${updatedUser.profilePicture}` : "",
            currentCoverPhotoUrl: updatedUser.coverPhoto ? `http://localhost:3000${updatedUser.coverPhoto}` : "",
            password: "",
            profilePicture: null, // Clear file input
            coverPhoto: null, // Clear file input
            removeProfilePicture: false, // Reset remove flags
            removeCoverPhoto: false, // Reset remove flags
            previewProfilePicture: "", // Clear preview
            previewCoverPhoto: "", // Clear preview
          }));
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'info',
            title: 'Profile updated in real-time! 🚀', // Added emoji
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      });

      // Clean up socket connection on component unmount
      return () => {
        currentSocket.off('profileUpdated'); // Remove event listener
        currentSocket.disconnect(); // Disconnect when component unmounts
      };

    } catch {
      setError("Invalid session token.");
      localStorage.removeItem("jwtToken");
      Swal.fire({
        icon: 'error',
        title: 'Invalid Session',
        text: 'Your session is invalid. Please log in again.',
      }).then(() => {
        navigate("/login");
      });
      setLoading(false);
    }
  }, [navigate]); // ✅ MODIFIED: Removed 'user' from dependencies, rely on userRef for socket callback


  // Clean up object URLs when component unmounts or files change
  useEffect(() => {
    return () => {
      if (formData.previewProfilePicture) {
        URL.revokeObjectURL(formData.previewProfilePicture);
      }
      if (formData.previewCoverPhoto) {
        URL.revokeObjectURL(formData.previewCoverPhoto);
      }
    };
  }, [formData.profilePicture, formData.coverPhoto, formData.previewProfilePicture, formData.previewCoverPhoto]);


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => {
        // Revoke old object URL if it exists before creating a new one
        if (name === "profilePicture" && prev.previewProfilePicture) {
          URL.revokeObjectURL(prev.previewProfilePicture);
        }
        if (name === "coverPhoto" && prev.previewCoverPhoto) {
          URL.revokeObjectURL(prev.previewCoverPhoto);
        }

        return {
          ...prev,
          [name]: file,
          // Create object URL for immediate preview
          [`preview${name.charAt(0).toUpperCase() + name.slice(1)}`]: file ? URL.createObjectURL(file) : "",
          [`remove${name.charAt(0).toUpperCase() + name.slice(1)}`]: false,
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemoveProfilePicture = () => {
    setFormData((prev) => {
      if (prev.previewProfilePicture) { // Revoke preview URL if it exists
        URL.revokeObjectURL(prev.previewProfilePicture);
      }
      return {
        ...prev,
        profilePicture: null,
        currentProfilePictureUrl: "",
        removeProfilePicture: true,
        previewProfilePicture: "", // Clear preview
      };
    });
  };

  const handleRemoveCoverPhoto = () => {
    setFormData((prev) => {
      if (prev.previewCoverPhoto) { // Revoke preview URL if it exists
        URL.revokeObjectURL(prev.previewCoverPhoto);
      }
      return {
        ...prev,
        coverPhoto: null,
        currentCoverPhotoUrl: "",
        removeCoverPhoto: true,
        previewCoverPhoto: "", // Clear preview
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);

    if (formData.password.trim()) {
        data.append("password", formData.password);
    }

    if (formData.profilePicture && !formData.removeProfilePicture) {
        data.append("profilePicture", formData.profilePicture);
    }
    if (formData.coverPhoto && !formData.removeCoverPhoto) {
        data.append("coverPhoto", formData.coverPhoto);
    }

    if (formData.removeProfilePicture) {
        data.append("removeProfilePicture", "true");
    }
    if (formData.removeCoverPhoto) {
        data.append("removeCoverPhoto", "true");
    }

    const token = localStorage.getItem("jwtToken");

    try {
      const res = await axios.put("http://localhost:3000/api/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.token) {
        localStorage.setItem("jwtToken", res.data.token);
      }
      
      setUser(res.data.user);
      setFormData(prev => ({
        ...prev,
        currentProfilePictureUrl: res.data.user.profilePicture ? `http://localhost:3000${res.data.user.profilePicture}` : "",
        currentCoverPhotoUrl: res.data.user.coverPhoto ? `http://localhost:3000${res.data.user.coverPhoto}` : "",
        profilePicture: null,
        coverPhoto: null,
        removeProfilePicture: false,
        removeCoverPhoto: false,
        password: "",
        previewProfilePicture: "", // Clear preview after successful submission
        previewCoverPhoto: "", // Clear preview after successful submission
      }));

      Swal.fire('Success!', 'Profile updated successfully!', 'success');
      navigate("/profile");
    } catch (err) {
      console.error("Profile update failed:", err);
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Error',
          text: 'Session expired or unauthorized. Please log in again.',
        }).then(() => {
          localStorage.removeItem("jwtToken");
          navigate("/login");
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: err.response?.data?.message || 'Failed to update profile. Please try again.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        Loading profile for editing... ⏳
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4 flex justify-center items-center">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profile Picture</label>
            {/* Display preview if available, otherwise current URL */}
            {(formData.previewProfilePicture || formData.currentProfilePictureUrl) && (
              <div className="mb-2 flex flex-col items-center">
                <img 
                  src={formData.previewProfilePicture || formData.currentProfilePictureUrl} 
                  alt="Profile" 
                  className="w-24 h-24 object-cover rounded-full mx-auto border border-gray-300 dark:border-gray-600" 
                />
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.previewProfilePicture ? "New Picture Preview" : "Current Picture"}
                </p>
                {formData.currentProfilePictureUrl && ( // Only show remove if there's a current picture
                  <button
                    type="button"
                    onClick={handleRemoveProfilePicture}
                    className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition"
                  >
                    Remove Picture
                  </button>
                )}
              </div>
            )}
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-200 dark:hover:file:bg-blue-800"
              accept="image/*"
              // Reset file input value when a file is selected to allow re-selection of the same file
              value={formData.profilePicture ? "" : undefined} 
            />
          </div>

          {/* Cover Photo Upload */}
          <div>
            <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Photo</label>
            {/* Display preview if available, otherwise current URL */}
            {(formData.previewCoverPhoto || formData.currentCoverPhotoUrl) && (
              <div className="mb-2 flex flex-col items-center">
                <img 
                  src={formData.previewCoverPhoto || formData.currentCoverPhotoUrl} 
                  alt="Cover" 
                  className="w-full h-32 object-cover rounded-md mx-auto border border-gray-300 dark:border-gray-600" 
                />
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.previewCoverPhoto ? "New Cover Preview" : "Current Cover Photo"}
                </p>
                {formData.currentCoverPhotoUrl && ( // Only show remove if there's a current cover photo
                  <button
                    type="button"
                    onClick={handleRemoveCoverPhoto}
                    className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition"
                  >
                    Remove Cover Photo
                  </button>
                )}
              </div>
            )}
            <input
              type="file"
              id="coverPhoto"
              name="coverPhoto"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-200 dark:hover:file:bg-blue-800"
              accept="image/*"
              // Reset file input value when a file is selected to allow re-selection of the same file
              value={formData.coverPhoto ? "" : undefined}
            />
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password (optional)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: src/components/Navbar.jsx
````javascript
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios"; // Added axios as it's used in handleLogout if backend is updated for it
import Swal from 'sweetalert2'; // Added Swal for better alerts
import {
  FaHome,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaUserShield,
  FaBars, // Hamburger icon
  FaTimes, // Close icon
  FaClipboardList, // Icon for Request
} from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle"; // Assuming DarkModeToggle is a separate component
import { motion, AnimatePresence } from "framer-motion"; // ✅ NEW: Import motion for animations

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
  }, [location]); // Re-run effect when location changes (e.g., user navigates)

  const handleLogout = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    try {
      // ✅ MODIFIED: Using axios for logout, consistent with other API calls
      await axios.post("http://localhost:3000/api/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("jwtToken");
      setUser(null);
      setMenuOpen(false); // Close mobile menu on logout
      Swal.fire({ // ✅ NEW: Using Swal for logout success
        icon: 'success',
        title: 'Logged Out!',
        text: 'You have been successfully logged out.',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire({ // ✅ NEW: Using Swal for logout error
        icon: 'error',
        title: 'Logout Failed',
        text: error.response?.data?.message || 'Failed to logout. Please try again.',
      });
    }
  };

  // NavLink component for consistent styling
  const NavLink = ({ to, label, icon }) => (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-base transition-all duration-300 ease-in-out
        ${
          location.pathname === to
            ? "bg-blue-600 text-white shadow-md" // Active state
            : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
        }
      `}
      onClick={() => setMenuOpen(false)} // Close menu on link click
    >
      {icon} <span className="font-medium">{label}</span>
    </Link>
  );

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          MyApp <span className="text-gray-900 dark:text-white">Pro</span> {/* Enhanced logo */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" label="Home" icon={<FaHome />} />
          {!user && (
            <>
              <NavLink to="/login" label="Login" icon={<FaSignInAlt />} />
              <NavLink to="/register" label="Register" icon={<FaUserPlus />} />
            </>
          )}
          {user?.role === "admin" && <NavLink to="/admin" label="Dashboard" icon={<FaUserShield />} />}
          {user && <NavLink to="/request" label="Request" icon={<FaClipboardList />} />}
          {user && <NavLink to="/profile" label="Profile" icon={<FaUser />} />}
        </nav>

        {/* Right tools and Mobile Toggle */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
          {/* Mobile hamburger/close button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pb-4 pt-2 shadow-inner"
          >
            <nav className="flex flex-col items-center space-y-2 px-4">
              <NavLink to="/" label="Home" icon={<FaHome />} />
              {!user && (
                <>
                  <NavLink to="/login" label="Login" icon={<FaSignInAlt />} />
                  <NavLink to="/register" label="Register" icon={<FaUserPlus />} />
                </>
              )}
              {user?.role === "admin" && <NavLink to="/admin" label="Dashboard" icon={<FaUserShield />} />}
              {user && <NavLink to="/request" label="Request" icon={<FaClipboardList />} />}
              {user && <NavLink to="/profile" label="Profile" icon={<FaUser />} />}
              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md text-base font-medium w-full justify-center shadow-md transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 mt-4"
                >
                  <FaSignOutAlt /> Logout
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
````

## File: src/components/Profile.jsx
````javascript
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';
import io from 'socket.io-client'; // ✅ NEW: Import socket.io-client

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Socket.IO setup
  const socket = io('http://localhost:3000'); // ✅ NEW: Connect to your backend Socket.IO server

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in.");
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'You are not logged in. Please log in to view your profile.',
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        Swal.fire({
          icon: 'error',
          title: 'Session Expired',
          text: 'Your session has expired. Please log in again.',
        }).then(() => {
          navigate("/login");
        });
        return;
      }
    } catch {
      setError("Invalid session token.");
      localStorage.removeItem("jwtToken");
      Swal.fire({
        icon: 'error',
        title: 'Invalid Session',
        text: 'Your session is invalid. Please log in again.',
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    // Function to fetch profile data
    const fetchProfile = () => {
      axios.get("http://localhost:3000/api/profile", {
          headers: { Authorization: `Bearer ${token}` }
      })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.error("Profile fetch failed:", err);
          if (err.response && (err.response.status === 401 || err.response.status === 403)) {
              Swal.fire({
                  icon: 'error',
                  title: 'Authentication Error',
                  text: 'Authentication failed. Please log in again.',
              }).then(() => {
                  localStorage.removeItem("jwtToken");
                  navigate("/login");
              });
          } else {
              setError("Failed to load profile.");
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to load profile. Please try again.',
              });
          }
        });
    };

    fetchProfile(); // Initial fetch of profile data

    // ✅ NEW: Listen for 'profileUpdated' event from Socket.IO
    socket.on('profileUpdated', (updatedUser) => {
      // Only update if the updated user is the current user viewing the profile
      if (user && updatedUser._id === user._id) {
        setUser(updatedUser);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'info',
          title: 'Profile updated in real-time!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });

    // ✅ NEW: Clean up socket connection on component unmount
    return () => {
      socket.off('profileUpdated'); // Remove the event listener
      socket.disconnect(); // Disconnect the socket
    };

  }, [navigate, user]); // Added user to dependency array to re-run effect when user changes, important for socket.on condition

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
    // Outer container for the whole page. min-h-screen, padding-x for spacing.
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 flex justify-center items-start md:items-center">
      {/* Main profile card container - ✅ MODIFIED: Re-added max-w-7xl mx-auto and mt-8 for spacing */}
      <div className="relative w-full max-w-7xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {/* Cover Photo Display */}
        <div className="relative h-48 sm:h-64 md:h-80 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 overflow-hidden">
          <img
            src={
              user.coverPhoto
                ? `http://localhost:3000${user.coverPhoto}`
                : "https://placehold.co/1200x400/e0e0e0/333333?text=Cover+Photo" // Default placeholder
            }
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Picture and Info Section */}
        {/* ✅ MODIFIED: Adjusted px-6 and pb-8 for better spacing around content */}
        <div className="relative -mt-16 md:-mt-24 flex flex-col items-center px-6 pb-8">
          {/* Profile Picture */}
          <img
            src={
              user.profilePicture
                ? `http://localhost:3000${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full border-4 md:border-8 border-white dark:border-gray-800 shadow-xl z-10"
          />

          {/* User Info */}
          {/* ✅ MODIFIED: mt-6 for better spacing */}
          <div className="mt-6 text-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2"> {/* mb-2 for slightly more space */}
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">{user.email}</p>
            <span className="mt-4 inline-block px-4 py-1.5 text-sm font-semibold uppercase bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-blue-300 rounded-full">
              {user.role}
            </span>
          </div>

          {/* Edit Profile Button and Placeholder for Tabs */}
          {/* ✅ MODIFIED: Increased gap, px-6, and pt-6 for better visual separation */}
          <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex justify-center gap-8 px-6">
            <Link
              to="/editprofile"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition transform hover:scale-105" // Increased padding
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
````
