"use client";

import { motion } from "motion/react";
import { Target, LineChart, Cog } from "lucide-react";
import { Button } from "../ui/Button";

export const PhilosophySection = () => {
  const features = [
    {
      icon: Target,
      title: "Comprehensive Pest Control Plans",
      desc: "Tailored solutions for homes, offices, and commercial spaces to eliminate pests effectively.",
    },
    {
      icon: LineChart,
      title: "Inspection & Monitoring",
      desc: "Regular inspections and data-driven monitoring to detect and prevent infestations early.",
    },
    {
      icon: Cog,
      title: "Safe & Efficient Treatments",
      desc: "Using modern, eco-friendly techniques and technology to ensure fast, long-lasting pest control.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Effective{" "}
              <span className="block sm:inline">
                <em className="font-serif italic font-light text-blue-600">
                  Pest Control Solutions
                </em>
              </span>
            </h2>
          </div>
          <div className="shrink-0">
            <Button className="w-full sm:w-auto justify-center">
              Book an Inspection
            </Button>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Text & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Text Content */}
            <div className="space-y-3 lg:space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed font-medium">
                At Nepal Pest Control Kathmandu, we believe that a safe, pest-free
                environment is key to peace of mind and operational success. We
                combine modern technology with expert guidance to protect your
                home and business.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our approach uses data-driven insights, tailored strategies, and
                proven treatment methods to eliminate pests efficiently,
                ensuring lasting results and reliable protection for your
                property.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-2 lg:pt-4">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative  max-w-sm sm:max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="/images/effective-section.webp"
                  alt="Nepal Pest Control Kathmandu Team"
                  className="w-full h-auto object-cover lg:w-150 lg:h-130"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -z-10 top-4 -right-4 w-48 h-48 sm:top-6 sm:-right-6 sm:w-60 sm:h-60 lg:top-8 lg:-right-8 lg:w-72 lg:h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}