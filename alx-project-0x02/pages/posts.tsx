import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";
import React, { useEffect, useState } from "react";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 10));
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.userId} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {post.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
