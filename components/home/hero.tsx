"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to disable animations on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Positions for the "tiny background images"
  const bgDecals = [
    { top: "8%", left: "10%", scale: 0.4, delay: 0 },
    { top: "15%", right: "12%", scale: 0.35, delay: 0.5 },
    { bottom: "18%", left: "8%", scale: 0.5, delay: 1 },
    { bottom: "25%", right: "18%", scale: 0.4, delay: 1.5 },
    { top: "45%", left: "3%", scale: 0.3, delay: 2 },
    { top: "60%", right: "5%", scale: 0.45, delay: 2.5 },
    { bottom: "10%", right: "35%", scale: 0.3, delay: 3 },
    { top: "30%", left: "25%", scale: 0.35, delay: 3.5 },
  ];

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 min-h-screen mt-30 mb-16 md:mb-0 md:mt-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ================= MOBILE TOP BADGE ================= */}
      <div className="md:hidden mb-6 flex flex-col items-center">
        <div className="px-4 py-2 bg-amber-500/90 backdrop-blur rounded-full mb-4 shadow-md">
          <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-white">
            Taste a Choucoune
          </p>
        </div>

        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }} // Slower duration
          className="text-2xl font-extrabold max-w-sm leading-tight text-center"
        >
          <span className="block text-gray-600">Refresh Your Day with</span>
          <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
            Natural & Energy Drinks
          </span>
        </motion.h1>
      </div>

      {/* ================= HERO IMAGE CONTAINER ================= */}
      <motion.div
        initial={isMobile ? false : { scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }} // Slower duration
        className="group relative max-w-5xl w-full flex items-center justify-center"
      >
        {/* TINY BACKGROUND IMAGES */}
        {bgDecals.map((decal, index) => (
          <motion.div
            key={index}
            className="absolute z-0 opacity-20 pointer-events-none"
            style={{ ...decal }}
            // Completely disable floating animation on mobile
            animate={
              isMobile
                ? {}
                : {
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }
            }
            transition={{
              duration: 10, // Slower: changed from 5 to 10
              repeat: Infinity,
              delay: decal.delay,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/bottle.png"
              alt="Background Decor"
              width={150}
              height={150}
              className="object-contain blur-[1px]"
            />
          </motion.div>
        ))}

        {/* MAIN BOTTLE IMAGE */}
        <div className="relative z-10 overflow-hidden">
          <Image
            src="/author.png"
            alt="Drinks"
            width={700}
            height={600}
            className="object-contain transition-transform duration-1000 group-hover:scale-[1.05]" // CSS transition slowed to 1s
            priority
          />
          <div className="md:hidden absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t from-gray-50 via-transparent to-transparent"></div>
        </div>

        {/* ================= CONTENT OVERLAY ================= */}
        <div className="absolute inset-0 pt-70 flex flex-col items-center justify-center text-center text-white px-6 z-20">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
          >
            <p className="uppercase text-gray-700 tracking-[0.35em] text-xs font-semibold">
              Taste a Choucoune
            </p>
          </motion.div>

          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden md:block text-3xl text-yellow-600/90 md:text-3xl lg:text-5xl font-extrabold max-w-4xl leading-tight"
          >
            <span className="block">Refresh Your Day with</span>
            <span className="block">Natural & Energy Drinks</span>
          </motion.h1>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="hidden md:flex gap-4 mt-12"
          >
            <Link href="/#products">
              <button className="cursor-pointer px-8 py-4 bg-yellow-500 text-white hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 rounded-lg font-semibold text-lg shadow-xl">
                Explore Products
              </button>
            </Link>
          </motion.div>

          <p className="hidden md:block text-sm mt-12 text-gray-800 font-medium max-w-md mx-auto text-center">
            From Cola Choucoune to coconut water and powerful energy drinks —
            discover flavors crafted to boost your lifestyle.
          </p>
        </div>
      </motion.div>

      {/* ================= MOBILE BOTTOM CONTENT ================= */}
      <div className="md:hidden text-center px-6 mt-6">
        <p className="text-gray-700 max-w-xs mx-auto mb-5">
          From Cola Choucoune to coconut water and powerful energy drinks —
          discover flavors crafted to boost your lifestyle.
        </p>

        <Link href="/#products">
          <button className="cursor-pointer px-8 py-4 bg-amber-500 hover:bg-amber-600 transition text-white rounded-lg font-semibold text-lg shadow-lg">
            Explore Products
          </button>
        </Link>
      </div>
    </section>
  );
};
