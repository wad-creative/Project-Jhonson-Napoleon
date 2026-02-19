"use client";

import {
  Droplets,
  Lightbulb,
  Users,
  MapPin,
  Phone,
  Mail,
  Award,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-white text-gray-800 antialiased overflow-x-hidden">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-28 pb-12 md:pt-50 md:pb-20 bg-linear-to-b from-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium tracking-wider text-gray-600 uppercase bg-yellow-200 rounded-full"
          >
            Our Legacy
          </motion.span>

          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 md:mb-6"
          >
            Jhonson Napoleon
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Entrepreneur, Innovator, and Beverage Producer committed to quality,
            excellence, and refreshing experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* STORY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group hidden md:block"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl -z-10 transition-transform group-hover:scale-105" />
          <img
            src="/about.jpg"
            alt="Jhonson Napoleon Workspace"
            className="object-contain w-full h-[350px] md:h-[500px]"
          />
        </motion.div>

        <motion.div {...fadeIn} className="md:space-y-6">
          {/* Title + Icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-600 rounded-md">
              <Award size={22} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Story
            </h2>
          </div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group md:hidden"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl -z-10 transition-transform group-hover:scale-105" />
            <img
              src="/about.jpg"
              alt="Jhonson Napoleon Workspace"
              className="object-contain w-full h-[320px]"
            />
          </motion.div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Jhonson Napoleon is a passionate entrepreneur dedicated to producing
            high-quality beverages that bring freshness and satisfaction to
            every customer. Built on strong values of consistency and
            innovation.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            From refreshing soft drinks to carefully crafted specialty
            beverages, every product reflects attention to detail, premium
            ingredients, and a commitment to delivering the best taste
            experience.
          </p>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-yellow-600 py-16 md:py-24 text-gray-800 overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Our Mission
          </h2>

          <motion.blockquote
            {...fadeIn}
            className="text-xl md:text-3xl font-light italic leading-snug"
          >
            "To produce high-quality beverages that inspire refreshment,
            energize communities, and set new standards in taste and
            reliability."
          </motion.blockquote>
        </div>
      </motion.section>

      {/* VALUES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-28">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Core Values
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-yellow-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-10"
        >
          {[
            {
              title: "Quality First",
              desc: "We prioritize premium ingredients and strict production standards in every beverage we create.",
              icon: Droplets,
            },
            {
              title: "Innovation",
              desc: "Constantly developing new flavors and products to meet evolving customer needs.",
              icon: Lightbulb,
            },
            {
              title: "Community Impact",
              desc: "Supporting local communities and building long-term partnerships through responsible entrepreneurship.",
              icon: Users,
            },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group p-5 md:p-6 bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 md:mb-6 inline-block p-3 md:p-4 bg-gray-50 rounded-md group-hover:bg-yellow-100 transition-colors">
                  <Icon size={28} className="text-yellow-600" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CONTACT & CTA SECTION */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Get in Touch
              </h2>

              <p className="text-gray-600 mb-6 md:mb-8">
                Have questions about our products or partnerships? Reach out to
                us today.
              </p>

              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    icon: MapPin,
                    text: "123 Beverage Way, Innovation District, FL 33101",
                  },
                  { icon: Phone, text: "+1 (555) 000-0000" },
                  { icon: Mail, text: "info@jhonsonnapoleon.com" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 md:gap-4 text-gray-700"
                  >
                    <item.icon className="text-yellow-600" size={20} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-yellow-600 rounded-md p-6 md:p-10 text-white text-center shadow shadow-yellow-200"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Ready to refresh?
              </h3>

              <p className="text-yellow-100 mb-4 md:mb-6 text-sm md:text-base">
                Discover our range of premium beverages and experience
                excellence.
              </p>

              <Link
                href="/#products"
                className="inline-block bg-white text-gray-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                View Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
