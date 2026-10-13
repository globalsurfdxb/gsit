// components/TrackRecordSection.tsx
"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface TrackRecordStat {
  value: string;
  suffix?: string;
  title: string;
  description: string;
}

export interface TrackRecordData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  stats: TrackRecordStat[];
}

interface TrackRecordSectionProps {
  data: TrackRecordData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function TrackRecordSection({
  data,
  variant,
  subtitleClass,
}: TrackRecordSectionProps) {
  const { stats, ...header } = data;

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={header} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-10 lg:gap-y-12 mt-52">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col pt-2 xl:pt-6.5 pb-8 lg:pb-16.5 border-b border-[#D3D3D3]"
            >
              <p className="flex items-baseline gap-2 text-primary text-56 leading-[1.072] tracking-[-3%]">
                <span className="tabular-nums">{stat.value}</span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </p>

              <h3 className="text-27-medium text-primary mt-8 lg:mt-12">
                {stat.title}
              </h3>

              <p className="text-18 text-paragraph mt-3 lg:mt-4">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
