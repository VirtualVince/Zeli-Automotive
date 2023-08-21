import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full md:h-screen flex items-center py-8">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 uppercase text-xl tracking-widest">
            Get In Touch
          </h2>
          <p className="py-2">
            To schendule an appointment feel free to call us at 905-337-9346. We
            are also available for a walk-in same day service at 2456 Royal
            Windsor Dr, Oakville, ON L6J 7Y3.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300 grid-cols-6">
          <isLoaded />
        </div>
      </div>
    </div>
  );
};

export default Contact;
