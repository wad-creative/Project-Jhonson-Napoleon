"use client";

import { useState } from "react";
import Image from "next/image";

export function Community() {
  const data = [
    { imgelink: "/kola-fan.jpeg" },
    { imgelink: "/beer-ewo-fan.jpeg" },
    { imgelink: "/coco-fan.jpg" },
    { imgelink: "/baton-24-fan.jpg" },
    { imgelink: "/shake-fan.jpg" },
  ];

  const [active, setActive] = useState("/kola-fan.jpeg");
  const [fade, setFade] = useState(true);

  const handleClick = (img: string) => {
    if (img === active) return;
    setFade(false);
    setTimeout(() => {
      setActive(img);
      setFade(true);
    }, 200);
  };

  return (
    <section className="w-full px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-gray-500 text-sm md:text-base">
            People around the world are sharing their experience with us.
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our Active Community
          </h2>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={active}
            alt="Community highlight"
            fill
            className={`object-contain transition-opacity duration-300 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-4">
          {data.map(({ imgelink }, index) => (
            <div
              key={index}
              onClick={() => handleClick(imgelink)}
              className={`relative h-20 md:h-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                active === imgelink
                  ? "ring-1 ring-yellow-500 scale-105"
                  : "opacity-90 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={imgelink}
                alt="Community thumbnail"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
