import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";

import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Hackathon from "./sections/Hackathon";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Hackathon/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
