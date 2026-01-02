"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

// Kathmandu-focused services
const services = [
  {
    id: "01",
    title: "Residential Pest Control in Kathmandu",
    description:
      "Safe and effective pest control services for homes, flats, and apartments across Kathmandu Valley.",
    points: [
      "Cockroach, Ant & Bed Bug Control",
      "Safe for Families & Pets",
      "Regular & Preventive Treatments",
    ],
    image: "/images/residential-control.png",
  },
  {
    id: "02",
    title: "Commercial Pest Control Services",
    description:
      "Reliable pest management solutions for offices, hotels, restaurants, and businesses in Kathmandu.",
    points: [
      "Customized Pest Control Plans",
      "Hygiene & Safety Compliance",
      "Minimal Business Disruption",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    id: "03",
    title: "Termite & Rodent Control in Kathmandu",
    description:
      "Professional termite and rodent control to protect buildings and properties in Kathmandu Valley.",
    points: [
      "Termite Inspection & Treatment",
      "Rodent Control & Proofing",
      "Long-Term Protection",
    ],
    image: "/images/rodent-control.jpeg",
  },
  {
    id: "04",
    title: "Sanitization & Disinfection Services",
    description:
      "Professional sanitization and disinfection services for homes and commercial spaces in Kathmandu.",
    points: [
      "Office & Home Sanitization",
      "Healthcare & Hospitality Hygiene",
      "Government-Approved Chemicals",
    ],
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df",
  },
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const router = useRouter();

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Kathmandu Pest Control Services You Can Rely On"
            italicWord="Kathmandu Pest Control"
            className="mb-0 max-w-2xl"
          />
          <Button
            className="w-full md:w-auto"
            onClick={() => router.push("/appointment")}
          >
            Get a Free Inspection
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Accordion */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="border-b border-gray-200 pb-6 cursor-pointer group"
                onClick={() => setActiveService(idx)}
              >
                <div className="flex items-center gap-5 mb-4">
                  <span
                    className={`text-lg font-medium ${
                      activeService === idx
                        ? "text-primary-600"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    [{service.id}]
                  </span>
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-medium ${
                      activeService === idx
                        ? "text-gray-900"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <motion.div
                  initial={false}
                  animate={
                    activeService === idx
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-10 pt-1">
                    <p className="text-gray-500 text-sm mb-5 max-w-md">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm font-medium text-gray-800"
                        >
                          <Check size={16} className="text-primary-700" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-80 sm:h-[420px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl"
            key={services[activeService].image}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={services[activeService].image}
              alt={services[activeService].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
