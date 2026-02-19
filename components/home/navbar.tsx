"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", href: "/#hero" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/about-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/#hero">
            <img src="/logo.png" alt="Logo" className="w-16 h-16" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-yellow-500 font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact-us"
              className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2.5 rounded font-semibold shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute h-0.5 w-5 bg-gray-800 transform transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2.5" : "rotate-0 top-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-gray-800 top-2.5 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-gray-800 transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2.5" : "rotate-0 top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="h-screen p-4 bg-white/98 backdrop-blur-xl shadow-xl border border-white/20">
          <div className="flex flex-col space-y-3">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-xl font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-semibold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
