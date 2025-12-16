import React from "react";

import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experiences from "./sections/Experiences.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Layout wrapper */}
      <div className="w-full min-h-screen overflow-hidden">

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
