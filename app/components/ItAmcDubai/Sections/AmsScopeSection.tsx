"use client";
import React, { useState } from "react";
import { AMC_DOMAINS_DATA } from "../data";
import SectionHeader from "../../common/Heading/SectionHeader";
import { Check, ChevronRight } from "lucide-react";
export interface FeatureCard {
  title: string;
  description: string;
  features: string[];
  note?: string;
}

export interface AmcDomainItem {
  id: string;
  number: string;
  title: string;
  description: string;
  cards?: FeatureCard[];
}
// Checkmark Icon
const CheckCircleIcon: React.FC<{ className?: string }> = ({
  className = "w-4 h-4",
}) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Sub-card inside open accordion
const ServiceSubCard: React.FC<{ card: FeatureCard }> = ({ card }) => {
  return (
    <div
      className="flex flex-col justify-between bg-white rounded-xl p-5 sm:p-6 transition-shadow duration-200 hover:shadow-md"
      style={{ border: "1px solid #E6E8F0" }}
    >
      <div>
        <div className="flex flex-col gap-2 lg:gap-4">
          <h4 className="text-[18px] font-medium text-primary tracking-[-0.03em] leading-[1.7777]">
            {card.title}
          </h4>
          <p className="text-18  text-paragraph">{card.description}</p>
        </div>
        <hr className="text-color-border my-3 lg:my-4" />
        <ul className="flex flex-col gap-4">
          {card.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#DAE7F0] flex items-center justify-center shrink-0">
                <Check className="w-3 h-4 text-primary" strokeWidth={4} />
              </div>
              <span className="text-18 text-paragraph">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {card.note && (
        <>
          <hr className="text-color-border my-4" />
          <p className=" text-18  text-[#A9A9A9] ">{card.note}</p>
        </>
      )}
    </div>
  );
};

// Accordion Item Component
const AccordionRow: React.FC<{
  item: AmcDomainItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: "1px solid #E6E8F0" }}
    >
      {/* Header Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 text-left
bg-gradient-to-b from-[#F5F6F8] via-[#FCFCFD] to-white
  hover:from-[#EEF3F6] hover:via-[#F5F8FA] hover:to-[#F9FBFC]
  transition-all duration-300 ease-in-out
  ${isOpen ? "px-6 pt-6 pb-4 lg:px-8 lg:pt-8 lg:pb-6" : "p-6 lg:p-8"}`}
      >
        <div className="flex max-md:flex-col items-start gap-4 lg:gap-6">
          <span className="self-start text-52 leading-none font-semibold text-[#DAE7F0]">
            {item.number}
          </span>

          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="text-24 font-medium leading-normal text-primary">
              {item.title}
            </h3>
            <p className="text-18 leading-[1.444444444] text-paragraph">
              {item.description}
            </p>
          </div>
        </div>

        <div className="shrink-0 p-1.5 text-primary self-start">
          <ChevronRight
            className={`w-[35px] h-[35px] lg:w-[42px] lg:h-[42px] transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </button>

      {/* Accordion Content Body */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-[18px] pb-[18px] md:px-[26px] md:pb-[26px] lg:px-[32px] lg:pb-[32px] ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {item.cards?.map((card, idx) => (
                <ServiceSubCard key={idx} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Section Component

interface AmcScopeSectionProps {
  amcData: {
    tag: string;
    heading: string;
    highlightLast: number;
    description?: string;
    data: AmcDomainItem[];
  };
}
export const AmcScopeSection: React.FC<AmcScopeSectionProps> = ({
  amcData,
}) => {
  // Default to first item expanded as in the design
  const [openId, setOpenId] = useState<string | null>("service-delivery");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-[42px]  bg-white">
      {/* Section Header */}

      <SectionHeader
        data={{
          tag: "",
          heading: amcData.tag.trim(),
          highlightLast: amcData.highlightLast,
          subhead: amcData.heading,
        }}
        variant="subtitle"
        subtitleClass="w-full lg:!mt-4"
      />

      <div className="flex flex-col gap-4  pt-52">
        {amcData.data.map((item) => (
          <AccordionRow
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggleAccordion(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default AmcScopeSection;
