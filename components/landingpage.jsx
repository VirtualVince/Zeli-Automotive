import React from "react";
import About from "./about.jsx";
import Services from "./services.jsx";
import EnhancedTestimonials from "./testimonials.jsx";
import Footer from "./footer.tsx";

const landingpage = () => {
  return (
    <div>
      <About />
      <EnhancedTestimonials />
      <Footer />
    </div>
  );
};

export default landingpage;
