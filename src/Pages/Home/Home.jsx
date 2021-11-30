import React from "react";
import Page from "../../Shared/Component/Page";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import "./home.css";
const Home = () => {
  return (
    <Page>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </Page>
  );
};

export default Home;
