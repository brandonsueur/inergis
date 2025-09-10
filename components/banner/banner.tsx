"use client";

import { activities } from "@/constants/activities";
import { Button } from "../button";
import { Container } from "../container";
import { motion } from "framer-motion";
import Link from "next/link";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const Banner = () => {
  return (
    <Container className="mt-52 z-10 mb-32">
      <div className="space-x-reverse md:grid md:grid-cols-12 gap-x-8 items-center">
        <div className="md:col-span-12 lg:col-span-9 xl:col-span-10">
          <div className="flex gap-3 mb-4 flex-wrap">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="flex items-center"
                initial={{ opacity: 0, y: 20, x: -5 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: activity.color,
                  }}
                />

                <span className="text-sm ml-2 font-airbnb font-medium text-primary">
                  {activity.label}
                </span>
              </motion.div>
            ))}
          </div>

          <h1 className="text-4xl font-airbnb text-primary lg:text-5xl font-medium leading-12 md:leading-16 mb-4 font-ca-slalom coin-shimmer-responsive">
            Du courant à l’eau, jusqu’au soleil, nous maîtrisons vos énergies.
          </h1>

          <p className="text-md text-gray-500 font-epilogue leading-relaxed mb-12 max-w-xl">
            Spécialistes en électricité, plomberie et énergies renouvelables,
            nous vous accompagnons dans tous vos projets, de l’installation à la
            rénovation. Fiabilité, performance et respect de l’environnement
            sont au cœur de notre savoir-faire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rendez-vous">
              <Button>Demandez votre devis gratuit</Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => scrollToSection("services")}
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
