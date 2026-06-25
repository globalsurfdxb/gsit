"use client";

import { useState } from "react";
import FaqAccordionItem from "./FaqAccordionItem";
import { faqHeaderData, faqData } from "../data";
import SectionHeader from "../../common/SectionHeader";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const MOBILE_LIMIT = 5;

  const half = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, half);
  const rightColumn = faqData.slice(half);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const alwaysVisible = faqData.slice(0, MOBILE_LIMIT);
  const hiddenItems = faqData.slice(MOBILE_LIMIT);

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <SectionHeader data={faqHeaderData} descriptionClass="lg:max-w-[37ch]" bordersm='border-b-0' titlebrake="hidden" />

        {/* Mobile layout */}
        <div className="lg:hidden">
          {/* Always visible first 5 */}
          {alwaysVisible.map((item, i) => (
            <FaqAccordionItem
              key={i}
              number={String(i + 1).padStart(2, "0")}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}

          {/* Animated hidden items */}
          {hiddenItems.length > 0 && (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: showAll ? "1fr" : "0fr",
                  transition: showAll
                    ? "grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "grid-template-rows 0.4s cubic-bezier(0.4, 0, 1, 1)",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    opacity: showAll ? 1 : 0,
                    transform: showAll ? "translateY(0)" : "translateY(-8px)",
                    transition: showAll
                      ? "opacity 0.4s ease 0.1s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.05s"
                      : "opacity 0.2s ease, transform 0.3s cubic-bezier(0.4, 0, 1, 1)",
                  }}
                >
                  {hiddenItems.map((item, i) => {
                    const globalIndex = MOBILE_LIMIT + i;
                    return (
                      <FaqAccordionItem
                        key={globalIndex}
                        number={String(globalIndex + 1).padStart(2, "0")}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => toggle(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center pt-2 relative bottom-[1px] bg-white">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="flex items-center gap-4   text-[15px]      transition-all duration-300   "
                >
                  {showAll ? "See Less" : "See All"}
              <svg width="24" height="24" className={`${showAll ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                </button>
              </div> 
            </>
          )}
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2 gap-x-10 lg:gap-x-[70px] lg:pt-[2px]">
          <div className="fistsec">
            {leftColumn.map((item, i) => (
              <FaqAccordionItem
                key={i}
                number={String(i + 1).padStart(2, "0")}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          <div>
            {rightColumn.map((item, i) => {
              const globalIndex = half + i;
              return (
                <FaqAccordionItem
                  key={globalIndex}
                  number={String(half + i + 1).padStart(2, "0")}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}