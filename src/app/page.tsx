"use client"
import Navbar from "../../components/navbar";
import Main from "../../components/main";
import Footer from "../../components/footer";
import About from "../../components/about";
import Contact from "../../components/contact";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
