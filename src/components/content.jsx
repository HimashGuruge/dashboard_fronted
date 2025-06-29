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