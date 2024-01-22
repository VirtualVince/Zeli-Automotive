import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          ZELHI AUTOMOTIVE
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            At Zeli Automotive, we're not just a mechanic shop; we're your
            trusted partners in keeping your vehicle running smoothly. Located
            in the heart of Mississauga, we take pride in providing top-notch
            automotive services with a commitment to excellence.
          </p>
        </div>
      </div>
      <div>
        <h1>My React App</h1>
        <div>
          <h1>My Google Maps Component</h1>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4015468533116!2d-79.65032592383159!3d43.49395817111017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b449f9eada4e7%3A0xee2f7dee43e4e9aa!2sZeli%20Automotive%20Ltd.!5e0!3m2!1sen!2sca!4v1705944657643!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
