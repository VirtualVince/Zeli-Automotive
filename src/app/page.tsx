import Image from "next/image";
import About from "../../components/about";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <About />
    </div>
  );
}
