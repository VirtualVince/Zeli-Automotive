import Image from "next/image";
import About from "../../components/about";
import Map from "../../components/map";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <About />
      <div className="max-w-2xl p-8 mt-8 bg-white shadow-xl rounded-xl">
        <Map />
      </div>
    </div>
  );
}
