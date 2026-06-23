// components/FaqSection.tsx
"use client";

import { useState } from "react";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import FaqAccordionItem from "./FaqAccordionItem";
import { faqHeaderData, faqData } from "../data";
import SectionHeader from "../../common/SectionHeader";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const half = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, half);
  const rightColumn = faqData.slice(half);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">

                 <SectionHeader data={faqHeaderData} descriptionClass="lg:max-w-[37ch]" bordersm='border-b-0'/>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10  lg:gap-x-[70px] pt-[2px]">
          {/* Left column */}
          <div>
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

          {/* Right column */}
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