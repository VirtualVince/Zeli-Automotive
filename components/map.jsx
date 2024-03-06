import React from "react";

const Map = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Visit Us at Zeli Automotive
      </h2>
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4015468533116!2d-79.65032592383159!3d43.49395817111017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b449f9eada4e7%3A0xee2f7dee43e4e9aa!2sZeli%20Automotive%20Ltd.!5e0!3m2!1sen!2sca!4v1705944657643!5m2!1sen!2sca"
          width="600"
          height="400"
          className="absolute inset-0 w-full h-full rounded-xl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
