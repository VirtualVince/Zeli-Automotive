"use client";
import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const center = useMemo(
    () => ({ lat: 43.49413718447445, lng: -79.64774563864927 }),
    []
  );

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
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
        <div>
          return <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
