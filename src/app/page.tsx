import React from "react";
import About from "../../components/about";
import Map from "../../components/map";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex justify-center">
        <About />
      </div>
    </div>
  );
}
