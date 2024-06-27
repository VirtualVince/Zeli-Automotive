import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "./footerlinks";
import logo from "../public/assets/ZeliLogo.jpg";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-dm:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-black">
            Zeli Automotive 1995 <br />
          </p>
        </div>
        <div className="footer__links text-[#3e37ff]">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link text-[#3e37ff]">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-black">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 text-black">
        <p>Copyright 2023 Zeli Automotive. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-black">
            Privacy Policy
          </Link>
          <Link href="/" className="text-black">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
