import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Contact from "../../components/Contact";
import link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Navbar />
      <Main />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
