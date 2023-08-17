import React from "react";
import map from "./map";

const contact = () => {
  return (
    <div id="contact">
      <h2 className="py-4 uppercase text-xl tracking-widest">Get In Touch</h2>
      <p className="py-2">
        To schendule an appointment feel free to call us at 905-337-9346. We are
        also available for a walk-in same day service at 2456 Royal Windsor Dr,
        Oakville, ON L6J 7Y3.
      </p>
      <map/>
    </div>
  );
};

export default contact;
