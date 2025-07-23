import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const about = () => {
  return (
    <div>
      <Header />
      <h1>about page</h1>
      <Button size="medium" shape="rounded-md" />
      <Button size="large" shape="rounded-lg" />
      <Button size="small" shape="rounded-sm" />
    </div>
  );
};

export default about;
