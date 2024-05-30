import React from "react";
import About from "./about.jsx";
import Services from "./services.jsx";
import Testimonials from "./testimonials.jsx";
import Footer from "./footer.tsx";

const landingpage = () => {
  return (
    <div>
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default landingpage;
