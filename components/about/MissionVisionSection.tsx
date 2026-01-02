"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 mb-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <div className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
          <Check size={12} />
        </div>
        <span className="text-gray-700 font-medium">{item}</span>
      </li>
    ))}
  </ul>
);

export const MissionVisionSection = () => {
  const router = useRouter();
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Mission]"
              title="Safeguarding Kathmandu's Homes & Businesses"
              italicWord="Kathmandu's"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our mission is to deliver reliable, eco-friendly pest control
              solutions that safeguard homes and businesses across the Kathmandu Valley,
              optimizing hygiene and ensuring peace of mind.
            </p>
            <FeatureList
              items={[
                "Rapid response teams dedicated to Kathmandu & Lalitpur",
                "Eco-friendly solutions safe for children and pets",
                "Proven track record with local businesses and residences",
              ]}
            />
            <Button variant="blue" onClick={() => router.push("/contact")}>
              Get Started
            </Button>
          </motion.div>
          <motion.div
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/images/safeguarding.png"
              alt="Nepal Pest Control Kathmandu Mission - Team Collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/images/hygiene.png"
              alt="Nepal Pest Control Kathmandu Vision - Global Innovation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Vision]"
              title="Setting the Standard for Hygiene in Nepal"
              italicWord="Nepal"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              We aim to be the most trusted partner for pest management in Nepal,
              setting new benchmarks for quality, safety, and customer satisfaction
              in the industry.
            </p>
            <FeatureList
              items={[
                "Adopting international standards for local pest challenges",
                "Expanding our service network throughout Nepal",
                "Educating the community on sustainable pest prevention",
              ]}
            />
            <Button variant="blue" onClick={() => router.push("/contact")}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
