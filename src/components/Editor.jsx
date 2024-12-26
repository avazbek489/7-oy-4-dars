import React, { useState } from "react";
function Editor() {
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="bg-gray-300 p-3 w-[700px] container mx-auto rounded-lg shadow-xl flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={bold}
          onChange={(e) => setBold(e.target.checked)}
          aria-label="Qalinroq"
          className="btn"
        />
        <input
          type="checkbox"
          checked={underline}
          onChange={(e) => setUnderline(e.target.checked)}
          aria-label="Pastki chiziq"
          className="btn"
        />
        <input
          type="button"
          value="Nusxalash"
          onClick={handleCopy}
          className="btn"
        />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`focus:outline-none p-2 rounded-md ${
          bold ? "font-bold" : ""
        } ${underline ? "underline" : ""}`}
        placeholder="Enter text => stilization select"
      />
    </div>
  );
}
export default Editor;
