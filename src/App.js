import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Work />
    </>
  );
};

export default App;
