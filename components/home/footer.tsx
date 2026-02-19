"use client";

import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="flex flex-col items-center justify-center w-full py-20 bg-gradient-to-b from-yellow-500 to-yellow-600 text-gray-700 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img src="/logo.png" className="w-32" alt="Logo" />
        <div className="flex items-center gap-2">
          <Link href="/#hero">
            <span>Home</span>
          </Link>
          <div className="h-4 w-[1px] bg-gray-600"></div>
          <Link href="/#products">
            <span>Products</span>
          </Link>
          <div className="h-4 w-[1px] bg-gray-600"></div>
          <Link href="/about-us">
            <span>About</span>
          </Link>
          <div className="h-4 w-[1px] bg-gray-600"></div>
          <Link href="/contact-us">
            <span>Contact</span>
          </Link>
        </div>

        <p className="mt-4 text-center">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">Choucoune</a>. All rights reserved.
        </p>

        <div className="flex items-center gap-4 mt-5">
          <a
            href="https://web.facebook.com/Jhonsonpage?locale=fr_FR"
            className="hover:-translate-y-0.5 transition-all duration-300"
            target="blank"
            rel="noopener noreferrer"
          >
            <Facebook size={24} strokeWidth={2} className="text-white/50" />
          </a>

          <a
            href="https://www.instagram.com/jhonson_napoleon?fbclid=IwY2xjawQBmBNleHRuA2FlbQIxMABicmlkETJseW8zUXcxN3VzYVcxblFXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHludlv2PHqMI5L3g9-SpWioAP8S275l-tFswOaV4tu48x_goI-kWrGzv9sxF_aem_l_TgnQSruaaI5E2tmsIRAA"
            className="hover:-translate-y-0.5 transition-all duration-300"
            target="blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} strokeWidth={2} className="text-white/50" />
          </a>
        </div>
      </footer>
    </>
  );
};
