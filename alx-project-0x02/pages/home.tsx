import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import React from "react";

const home = () => {
  return (
    <div>
      <Header />
      <h1>home page</h1>
      <Card
        title="Welcome to the Home Page"
        content="This is a simple card component displaying some content."
      />
      <PostModal />
    </div>
  );
};

export default home;
