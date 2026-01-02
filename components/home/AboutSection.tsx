"use client";

import { motion } from "motion/react";
import { Pin, CheckCircle2, Award, Shield } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";
export const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <SectionHeading
            title="Kathmandu's Trusted Pest Control Experts Since 2016"
            italicWord=" Experts Since 2016"
            className="max-w-3xl"
          />

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                src="/images/about.png"
                alt="Professional Pest Control Service in Kathmandu"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">150+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">9+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Years</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Certified</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                At Nepal Pest Control Kathmandu Kathmandu, we specialize in providing safe, effective, and regulation-compliant pest control solutions for homes, offices, restaurants, and commercial spaces across Kathmandu.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our certified technicians understand Kathmandu's climate, dense urban living, and pest challenges, delivering targeted treatments that eliminate infestations and prevent future outbreaks — with minimal disruption to your daily life.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                "Residential Pest Control in Kathmandu",
                "Commercial & Office Pest Management",
                "Termite, Rodent & Bed Bug Control",
                "Hygiene, Sanitization & Prevention"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Certified</div>
                  <div className="text-xs text-gray-600">Technicians</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Safe & Eco</div>
                  <div className="text-xs text-gray-600">Friendly</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/appointment">
              <Button className="w-full sm:w-auto justify-center">
                Book a Free Inspection in Kathmandu
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}