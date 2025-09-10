"use client";

import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/pageTitle";
import { Container } from "@/components/container";
import { activities } from "@/constants/activities";
import { motion, useInView, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "@/components/button";
import { ArrowRight } from "@/icons";

// Définition des variantes d'animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Layout>
      <section className="py-16 mx-auto mt-28">
        <Container>
          <PageTitle
            title="Nos Services"
            description="Découvrez l'ensemble de nos services professionnels : plomberie, électricité, chauffage et énergies renouvelables. Des solutions complètes pour tous vos projets."
          />

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-16"
          >
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Contenu textuel */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex w-16 h-16 rounded-full justify-center items-center"
                        style={{ background: activity.color }}
                      >
                        <Icon
                          size={24}
                          strokeWidth={2}
                          className="text-white"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {activity.label}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {activity.bigDescription}
                    </p>

                    {/* Services principaux */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Services principaux :
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {activity.services.slice(0, 4).map((service) => (
                          <li
                            key={service.id}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ background: activity.color }}
                            />
                            {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Zone d'image/illustration */}
                  <div className="flex-1 max-w-md">
                    <div
                      className="relative w-full h-80 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${activity.color}20, ${activity.color}10)`,
                        border: `2px solid ${activity.color}30`,
                      }}
                    >
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{ background: activity.color }}
                      >
                        <Icon
                          size={40}
                          strokeWidth={2}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Section CTA finale */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d&apos;un service personnalisé ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour étudier votre projet et
              vous proposer une solution sur mesure. Contactez-nous pour un
              devis gratuit et sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => router.push("/rendez-vous")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Demander un devis
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("mailto:contact@inergis.fr")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
}
