import React from "react";
import logo from "../public/ZeliLogo.jpg";
import backgroundImage from "../public/assets/background.png";

const hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="Zeli Automotive Logo"
          className="mx-auto mb-4"
          style={{ maxWidth: "120px" }}
        />
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Zeli Automotive
        </h1>
        <p className="text-lg text-white max-w-md mx-auto">
          Your trusted partner in automotive excellence.
        </p>
      </div>
    </div>
  );
};

export default hero;
