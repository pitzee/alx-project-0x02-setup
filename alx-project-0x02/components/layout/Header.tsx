import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href="/home">
        <h1>Home</h1>
      </Link>
      <Link href="/about">
        <h1>About</h1>
      </Link>
    </div>
  );
};

export default Header;
