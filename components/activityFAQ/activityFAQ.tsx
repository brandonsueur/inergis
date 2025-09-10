"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../container";
import { SectionTitle } from "../sectionTitle";
import { SquareArrowDownRight, SquareArrowRight } from "lucide-react";
import clsx from "clsx";
import { FAQItem } from "@/constants/activities";

interface ActivityFAQProps {
  faqData: FAQItem[];
  activityName: string;
}

export function ActivityFAQ({ faqData, activityName }: ActivityFAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set([faqData[0]?.id])
  );

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 px-6">
      <Container>
        <SectionTitle
          subTitle="FAQ"
          title={`Questions fréquentes - ${activityName}`}
          description={`Retrouvez ici les réponses aux questions que nos clients nous posent le plus souvent concernant nos services en ${activityName.toLowerCase()}.`}
        />

        {/* FAQ Items */}
        <div className="space-y-0 border border-[#4A4A4A] rounded-lg overflow-hidden">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={index !== 0 ? "border-t border-[#4A4A4A]" : ""}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex cursor-pointer items-center justify-between p-6 text-left transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                    <motion.div className="text-black font-bold text-lg">
                      {openItems.has(item.id) ? (
                        <SquareArrowDownRight className="text-secondary" />
                      ) : (
                        <SquareArrowRight className="text-black" />
                      )}
                    </motion.div>
                  </div>
                  <h3
                    className={clsx(
                      "text-black text-xl font-semibold font-ca-slalom",
                      openItems.has(item.id) ? "text-secondary" : ""
                    )}
                  >
                    {item.question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openItems.has(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-[#4A4A4A]"
                  >
                    <div className="p-6 bg-white ">
                      {Array.isArray(item.answer) ? (
                        <div className="space-y-4">
                          {item.answer.map((paragraph, idx) => (
                            <p key={idx} className="text-black font-epilogue">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 font-epilogue">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
