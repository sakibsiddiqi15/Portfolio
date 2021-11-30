import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Page = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="vh-min-100">{children}</div>
      <Footer/>
    </>
  );
};

export default Page;
