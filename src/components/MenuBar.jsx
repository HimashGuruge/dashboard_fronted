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
