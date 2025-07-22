import React, { useState } from "react";

const PostModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96">
      <h2 className="text-lg font-semibold mb-4">New Post</h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="border p-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostModal;
