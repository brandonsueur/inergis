"use client";

import { Button } from "@/components/button";
import { SectionTitle } from "@/components/sectionTitle";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Clubs = () => {
  const allLogos = [
    { name: "Casa", src: "/logos/casa.png" },
    { name: "Jimmiz", src: "/logos/jimmiz.png" },
    { name: "Toto", src: "/logos/toto.png" },
    { name: "Casa Alt", src: "/logos/casa.png" },
    { name: "Jimmiz Alt", src: "/logos/jimmiz.png" },
    { name: "Toto Alt", src: "/logos/toto.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Commencer le fade out
      setIsTransitioning(true);

      // Après le fade out, changer les logos et faire le fade in
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % allLogos.length;
          return newIndex;
        });
        setIsTransitioning(false);
      }, 300); // Délai pour le fade out
    }, 3000); // Change toutes les 3 secondes pour plus de temps d'appréciation

    return () => clearInterval(interval);
  }, [allLogos.length]);

  // Affiche 3 logos consécutifs
  const displayedLogos = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % allLogos.length;
    displayedLogos.push(allLogos[index]);
  }

  return (
    <>
      <SectionTitle
        subTitle="Partners"
        title="Trusted by the most exclusive clubs."
        description="From Paris to Ibiza, leading venues choose SpendR to boost visibility, drive sales, and turn their guests into loyal ambassadors."
        centered
        className="max-w-3xl mx-auto"
      />

      <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {displayedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${currentIndex}-${index}`}
            className={`flex items-center rounded-full justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-700 ease-in-out transform hover:scale-105 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            style={{
              transitionDelay: `${index * 100}ms`, // Délai échelonné pour chaque logo
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={70}
              height={70}
              className="rounded-full transition-all duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="secondary">Become a partner</Button>
      </div>
    </>
  );
};
