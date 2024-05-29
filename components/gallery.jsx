"use client";
import React from "react";

const photos = [
  { src: "/gallery/assets/zeliphoto1.png" },
  { src: "/gallery/assets/zeliphoto2.png" },
  { src: "/gallery/assets/zeliphoto3.png" },
  { src: "/gallery/assets/zeliphoto4.png" },
  { src: "/gallery/assets/zeliphoto5.png" },
  { src: "/gallery/assets/zeliphoto6.png" },
];

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="gallery"
      style={{
        columnCount: 3,
        columnGap: "1em",
      }}
    >
      {photos.map((photo, index) => (
        <div key={index} className="inline-block mb-4">
          <img
            src={photo.src}
            alt="Gallery Image"
            className="w-full h-auto m-auto shadow-xl shadow-[#3e37ff] rounded-xl flex items-right p-4 hover:scale-105 ease-in duration-300 grid-cols-6"
          />
        </div>
      ))}
    </div>
  );
}
