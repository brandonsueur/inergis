"use client";

import { Container } from "@/components/container";
import { SectionTitle } from "@/components/sectionTitle";
import { FC } from "react";
import Image from "next/image";

const LOGOS = [
  "geberit",
  "hilti",
  "hitachi",
  "legrand",
  "nexans",
  "philips",
  "schneider",
];

export const Partners: FC = () => {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          subTitle="Partenaires"
          title="Des collaborations solides pour des projets réussis"
          description="Nous sélectionnons rigoureusement nos partenaires afin de vous proposer des équipements performants et durables. Ces collaborations nous permettent d'allier savoir-faire, innovation et fiabilité pour chacun de vos projets."
          centered
          className="max-w-3xl mx-auto"
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center p-4 w-32 h-32 md:w-40 md:h-40"
            >
              <Image
                src={`/marques/${logo}.svg`}
                alt={`Logo ${logo}`}
                width={100}
                height={50}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
