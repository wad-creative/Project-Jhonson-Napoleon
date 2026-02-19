"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const DrinksList = () => {
  const drinks = [
    {
      title: "Kola Choucoune",
      description:
        "Choucoune Kola Champnana Mix Flavour Soda - 100% Natural Ingredients - No Artificial Sweeteners, Non-GMO & No High Fructose Corn Syrup - Perfect for Kids, Adults & Parties.",
      image: "/Kola-Choucoune.jpg",
      color: "bg-yellow-400",
      color1: "bg-yellow-400/20",
    },
    {
      title: "Beer Ewo",
      description:
        "Beer Ewo is a crisp, refreshing Haitian beer with a smooth, balanced flavor and 5% alcohol. Perfect for any occasion, it brings the vibrant spirit of Haiti to your glass—light, satisfying, and full of character. Cheers to great moments with Beer Ewo!",
      image: "/Beer-Ewo.jpeg",
      color: "bg-amber-800",
      color1: "bg-amber-500/20",
    },
    {
      title: "Shake Choucoune",
      description:
        "Enjoy the rich, creamy taste of our whole-milk strawberry shake. Whether you're at the gym or on the go, this smooth treat provides the perfect energy boost for your busy lifestyle.",
      image: "/shake.webp",
      color: "bg-red-400",
      color1: "bg-red-400/20",
    },
    {
      title: "Baton 24H",
      description:
        "Choucoune Baton Coffee Flavored Energy Drink, Smooth Coffee Taste Beverage, Ready-to-Drink Bottle, Convenient Single Serve",
      image: "/baton-24.jpg",
      color: "bg-amber-950",
      color1: "bg-amber-600/20",
    },
    {
      title: "Coconut Water",
      description:
        "Taste the Caribbean. Pure coconut water with a hint of pulp and natural electrolytes to keep you hydrated and refreshed.",
      image: "/coco.jpg",
      color: "bg-blue-400",
      color1: "bg-blue-400/20",
    },
    {
      title: "Aloe Vera",
      description:
        "Choucoune Pure Aloe Vera Juice - 100% Original Flavor With Pulp, Aloe Vera Drink",
      image: "/aloe-vera.jpg",
      color: "bg-green-400",
      color1: "bg-green-400/20",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 px-6 overflow-hidden scroll-mt-16 bg-[#FCF9F1] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
    >
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="uppercase tracking-[0.2em] text-sm font-semibold text-yellow-500 mb-4 block">
            The Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
            Choucoune Drinks
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-32">
          {drinks.map((drink, index) => {
            const isReversed = index % 2 === 1;

            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className={`group relative flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-16 lg:gap-24 max-w-5xl mx-auto`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2">
                  <div
                    className={`absolute inset-0 ${drink.color} rounded-md rotate-3 transition-transform group-hover:rotate-1`}
                  />
                  <img
                    src={drink.image}
                    alt={drink.title}
                    className="relative rounded-md shadow-2xl object-contain w-full h-1/2 transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-5xl font-serif text-slate-800 tracking-tight">
                    {drink.title}
                  </h3>

                  <div className={`h-1 w-20 ${drink.color1} rounded-full`} />

                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                    {drink.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
