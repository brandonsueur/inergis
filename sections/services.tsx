"use client";

import { Container } from "@/components/container";
import { SectionTitle } from "@/components/sectionTitle";
import { activities } from "@/constants/activities";
import { FC } from "react";

export const Services: FC = () => {
  return (
    <Container>
      <SectionTitle
        subTitle="Services"
        title="Du courant à l’eau, jusqu’au soleil"
        description="Que ce soit pour une urgence, une mise aux normes, une rénovation ou l’installation d’équipements énergétiques, nous intervenons rapidement et efficacement."
        centered
        className="max-w-3xl mx-auto"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {activities.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="relative p-6 flex flex-col items-start">
              <div
                className={`flex w-18 h-18 rounded-full justify-center items-center`}
                style={{
                  background: value.color,
                }}
              >
                <Icon size={24} strokeWidth={2} className="text-white" />
              </div>

              <h3 className="text-xl font-medium  mt-8 mb-4">{value.label}</h3>

              <p className="text-base font-epilogue text-md text-gray-500 leading-relaxed">
                {value.bigDescription}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
