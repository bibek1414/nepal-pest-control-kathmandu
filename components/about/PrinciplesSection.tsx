"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus, Minus } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "Local Expertise, Global Standards",
    content:
      "We combine deep knowledge of Kathmandu's unique pest challenges with international best practices to deliver effective solutions.",
  },
  {
    id: "02",
    title: "Trusted by Kathmandu Families",
    content:
      "We are committed to building lasting relationships with our neighbors, providing pest control that keeps Kathmandu homes safe and comfortable.",
  },
  {
    id: "03",
    title: "Safe & Eco-Friendly",
    content:
      "We prioritize the health of your family and the environment by using government-approved, low-toxicity treatments safe for children and pets.",
  },
  {
    id: "04",
    title: "Prompt & Reliable Service",
    content:
      "We understand urgency. Our team is dedicated to providing timely inspections and treatments across the Kathmandu Valley.",
  },
  {
    id: "05",
    title: "Customer Satisfaction First",
    content:
      "Your peace of mind is our top priority. We tailor our services to your specific needs and ensure you are fully satisfied with the results.",
  },
];

export const PrinciplesSection = () => {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Principles]"
              title="Core Values Driving Effective Pest Control"
              italicWord="Effective"
              className="mb-12"
            />
            <p className="text-gray-500 mb-12">
              At Nepal Pest Control Kathmandu, our principles guide every action we take —
              combining innovation, expertise, and a client-centric approach to
              deliver pest control solutions you can trust.
            </p>

            <div className="space-y-4">
              {principles.map((p) => (
                <motion.div
                  key={p.id}
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${activeId === p.id
                    ? "shadow-md border-primary-100"
                    : "border border-transparent"
                    }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setActiveId(activeId === p.id ? "" : p.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-gray-400">
                        [{p.id}]
                      </span>
                      <span
                        className={`text-lg font-semibold ${activeId === p.id
                          ? "text-primary-600"
                          : "text-gray-900"
                          }`}
                      >
                        {p.title}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeId === p.id
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-400"
                        }`}
                    >
                      {activeId === p.id ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={
                      activeId === p.id
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16 text-gray-500 text-sm leading-relaxed">
                      {p.content}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="h-full min-h-[600px] rounded-3xl overflow-hidden relative shadow-2xl lg:mt-0"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/images/person-protective-suit-getting-ready-disinfect-room.jpg"
              alt="Nepal Pest Control Kathmandu Core Principles"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
