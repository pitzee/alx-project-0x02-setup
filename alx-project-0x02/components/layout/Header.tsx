import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <Link href="/home">
        <h1>Home</h1>
      </Link>
      <Link href="/about">
        <h1>About</h1>
      </Link>
      <Link href="/posts">
        <h1>Posts</h1>
      </Link>
    </div>
  );
};

export default Header;
