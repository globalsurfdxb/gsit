"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
export interface OutcomeCard {
  category: string;
  stat: string;
  statLabel: string;
  metricLabel: string;
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
  clientTitle: string;
  description: string;
}

export interface ClientOutcomesData {
  
    tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  cards: OutcomeCard[];  
  quote:string;
}

interface ClientOutcomesProps {
  data: ClientOutcomesData;
    variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
}

export default function ClientOutcomes({ data ,variant ,subtitleClass}: ClientOutcomesProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        {/* Header */}
        
                 <SectionHeader data={data} subtitleClass={subtitleClass} variant={variant}  />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 3xl:gap-7.5 mt-52">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#F5F9FC] p-6 flex flex-col"
            >
              <span className="text-18 text-primary font-medium tracking-[-3%] 3xl:!leading-[1.778]">
                {card.category}
              </span>

              <div className="text-42 3xl:!text-[56px] 3xl:!leading-[1.018] text-primary tracking-[-3%] mt-4">
                {card.stat}
              </div>

              <p className="text-18 text-paragraph mt-4">{card.statLabel}</p>

              <hr className="border-[#D9D9D9] my-4" />

              <p className="text-18  3xl:!leading-[1.778] font-medium tracking-[-3%] text-paragraph">{card.metricLabel}</p>

              <div className="flex items-center justify-between gap-4 mt-4">
                <div>
                  <span className="block text-14 font-medium text-paragraph/50">
                    {card.beforeLabel}
                  </span>
                  <span className="block text-18 text-paragraph font-light">
                    {card.beforeValue}
                  </span>
                </div>

                <div className="flex-1 relative h-[1px] border-t border-dotted border-[#B9B9B9] mb-[6px]">
                  <span className="absolute -left-[2px] -top-[4px] w-[6px] h-[6px] rounded-full bg-paragraph" />
                  <span className="absolute -right-[2px] -top-[4px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-paragraph" />
                </div>

                <div className="">
                  <span className="block text-14 font-medium text-paragraph">
                    {card.afterLabel}
                  </span>
                  <span className="block text-18 text-primary font-medium 3xl:!leading-[1.778] ">
                    {card.afterValue}
                  </span>
                </div>
              </div>

              <hr className="border-[#D9D9D9] my-4" />

                <h3 className="text-24 text-primary 3xl:!leading-[1.3334] tracking-[-3%]">
                {card.clientTitle}
              </h3>
              <p className="text-18 text-[#A9A9A9]  mt-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        {data.quote && (
          <p className="text-18 text-paragraph leading-[1.6] mt-52 max-w-[1400px]">
            {data.quote}
          </p>
        )}
      </div>
    </section>
  );
}