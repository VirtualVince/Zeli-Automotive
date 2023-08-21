import Navbar from "../../components/navbar";
import Main from "../../components/main";
import Footer from "../../components/footer";
import About from "../../components/about";
import Contact from "../../components/contact";
import link from "next/link";

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
