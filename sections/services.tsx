"use client";

import { Container } from "@/components/container";
import { SectionTitle } from "@/components/sectionTitle";
import { activities } from "@/constants/activities";
import { FC, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// Définition des variantes d'animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const Services: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Container>
      <SectionTitle
        subTitle="Services"
        title="Du courant à l'eau, jusqu'au soleil"
        description="Que ce soit pour une urgence, une mise aux normes, une rénovation ou l'installation d'équipements énergétiques, nous intervenons rapidement et efficacement."
        centered
        className="max-w-3xl mx-auto"
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {activities.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="relative p-6 flex flex-col items-start"
                variants={itemVariants}
                whileHover={{ transition: { duration: 0.2 } }}
              >
                <div
                  className={`flex w-16 h-16 rounded-full justify-center items-center`}
                  style={{
                    background: value.color,
                  }}
                >
                  <Icon size={24} strokeWidth={2} className="text-white" />
                </div>

                <h3 className="text-xl font-medium mt-8 mb-4">{value.label}</h3>

                <p className="text-base font-epilogue text-gray-500 leading-relaxed">
                  {value.bigDescription}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};
