import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillReconciliation } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#000000] ">Zeli Automotive</h1>
          <p className="py-4 text-[#000000]  sm:max-w-[70%] m-auto">
            Your destination for comprehensive auto care. Specializing in
            maintenance and repairs to keep you on the road.
          </p>
          <div className="flex items -center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.google.com/search?channel=fs&client=ubuntu-sn&q=zeli+automotive#lrd=0x882b449f9eada4e7:0xee2f7dee43e4e9aa,1">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
                <AiFillReconciliation />
              </div>
            </a>
            <a href="https://www.instagram.com/zeliautomotive/?hl=en ">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
                <AiFillInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
