import Link from "next/link";
import React from "react";
import Image from "next/image";
import bgImage from "../public/assets/zeli-automotive-bg.jpg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillReconciliation } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#223C60] ">Zeli Automotive</h1>
          <p className="py-4 text-[#223C60]  sm:max-w-[70%] m-auto">
            Your destination for comprehensive auto care. Specializing in
            maintenance and repairs to keep you on the road.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
