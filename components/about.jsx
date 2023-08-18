import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/logo.jpg";


const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 uppercase text-xl tracking-widest">
            Who Are We?
          </h2>
          <p className="py-2">
            Welcome to Zeli Automotive, your trusted partner for top-notch
            automotive care. With a legacy spanning [Number] years in the
            industry, we have earned a reputation as a reliable and
            customer-centric auto shop. Our team of skilled technicians is not
            just passionate about cars, but also about providing exceptional
            service. We pride ourselves on our commitment to delivering
            precision, efficiency, and integrity in every service we offer.
            Whether you're visiting us for routine maintenance or complex
            repairs, you can trust that your vehicle will receive the utmost
            care and attention. At Zeli's, we are more than just a repair shop;
            we are your automotive partners, dedicated to ensuring your driving
            experience is safe, smooth, and enjoyable.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300 grid-cols-6">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
