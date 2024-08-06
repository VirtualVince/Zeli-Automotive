import React from "react";
import logo from "../public/assets/ZeliLogo.jpg";
import backgroundImage from "../public/assets/background.png";
import Image from "next/image";

const hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero p-4 md:p-8 bg-blue-900 text-white text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Welcome to Zeli Automotive
        </h1>
        <p className="text-base md:text-lg">
          Your trusted partner in automotive excellence.
        </p>
      </div>
    </div>
  );
};

export default hero;
