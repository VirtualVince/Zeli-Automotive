import Navbar from "../../components/navbar";
import Main from "../../components/main";
import Footer from "../../components/footer";
import About from "../../components/about";

import "./globals.css";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Footer />
    </div>
  );
}
