import React from "react";
import { CircleCheck } from "lucide-react";
import SectionHeader from "../common/Heading/SectionHeader";
import Image from "next/image";

export interface PartnerCard {
  id: string;
  logo: string;
  title: string;
  description: string;
  gradient: string;
}

interface OnePartnerSectionProps {
  header: {
    tag?: string;
    heading: string;
    highlightLast?: number;
    subhead?: string;
  };
  cards: PartnerCard[];
  resultBox: {
    tag: string;
    title: string;
    description: string;
    badges: string[];
  };
}

export const OnePartnerSection: React.FC<OnePartnerSectionProps> = ({
  header,
  cards,
  resultBox,
}) => {
  return (
    <section className="w-full   bg-white">
      <div className="">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <SectionHeader
            data={{
              tag: header.tag || "",
              heading: header.heading,
              highlightLast: header.highlightLast as number,
              subhead: header.subhead,
            }}
            variant="subtitle"
            subtitleClass="w-full lg:!mt-4  "
            subtitleTextClass="text-18 text-paragraph"
            className="pt-0 xl:pt-0"
          />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-[16px] flex items-end   shadow-sm h-[382px]"
              style={{ background: card.gradient }}
            >
              {/* Top/Middle Content */}
              <div className="p-6 ">
                <Image
                  src={card.logo}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="w-auto h-[32px] "
                />
                <div className="flex flex-col gap-4 mt-4 lg:mt-6">
                  <h4 className="text-sm font-semibold text-primary">
                    {card.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Result Footer Banner */}
        <div className="w-full bg-[#1A2E6E] rounded-[20px] p-6 md:p-8 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-lg">
          {/* Left Text Info */}
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-blue-200 block mb-1">
              {resultBox.tag}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              {resultBox.title}
            </h3>
            <p className="text-xs md:text-sm text-blue-100/80">
              {resultBox.description}
            </p>
          </div>

          {/* Right Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {resultBox.badges.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs md:text-sm font-medium text-white backdrop-blur-sm"
              >
                <CircleCheck className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnePartnerSection;
