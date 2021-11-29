import React from "react";
import NavBar from "./NavBar";

const Page = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="vh-min-100">{children}</div>
    </>
  );
};

export default Page;
