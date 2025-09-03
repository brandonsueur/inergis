"use client";

import { SectionTitle } from "@/components/sectionTitle";
import { Trophy, CreditCard, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  const values = [
    {
      icon: Trophy,
      title: "Leaderboards",
      description:
        "Real time rankings that showcase top spenders in each venue. Spark competition, boost ego and turn spending into a game.",
    },
    {
      icon: CreditCard,
      title: "QR Code Payments",
      description:
        "Fast, secure payments via Stripe, Apple Pay. Scan. Pay. Get ranked — all in seconds.",
    },
    {
      icon: TrendingUp,
      title: "Insights",
      description:
        "Clubs access detailed analytics, customer behavior, and high-spender profiles.",
    },
  ];

  return (
    <>
      <SectionTitle
        subTitle="Services"
        title="What SpendR does for you."
        description="SpendR is more than just a payment app. Easy to adopt for both clients and clubs, it's a powerful tool that showcases the competitive aspect of bottle service. Whether you are a clubber looking to shine or a venue looking to scale, our services are built to create engagement, visibility, and prestige."
        centered
        className="max-w-3xl mx-auto"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="relative p-6 flex flex-col items-start">
              <div className="flex bg-amber-50 bg-linear-20 from-[#151515] to-[#070707] w-20 h-20 rounded-full justify-center items-center">
                <Icon size={42} strokeWidth={1} className="text-white" />
              </div>

              <h3 className="text-2xl font-medium font-ca-slalom mt-8 mb-4">
                {value.title}
              </h3>

              <p className="text-base font-epilogue text-md text-gray-400 leading-relaxed">
                {value.description}
              </p>

              {/* <Link
                href="/"
                className="text-white opacity-50 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center gap-2 mt-4 font-ca-slalom font-bold text-sm ">
                  Learn more
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>
              </Link> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
