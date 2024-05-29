import React from "react";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";

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
