"use client";

import {
  SatelliteDish,
  GitMerge,
  Globe,
  Network,
  Monitor,
  Columns2,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface RowItem {
  icon: string;
  title: string;
  description: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: RowItem[];
}

interface LearningEnvironmentsProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Static lookup map (not built dynamically from `item.icon`) so bundlers can
// statically analyze every icon reference, per your established pattern.
const iconMap: Record<string, LucideIcon> = {
  SatelliteDish: SatelliteDish,
  GitMerge: GitMerge,
  Globe: Globe,
  Network: Network,
  Monitor: Monitor,
  Columns2: Columns2,
};

export default function LearningEnvironmentsSection({
  data,
  variant,
  subtitleClass,
}: LearningEnvironmentsProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52">
          {data.data.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Monitor;

            return (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] 3xl:grid-cols-[auto_663px_1fr]  gap-6 lg:gap-12 3xl:gap-25.5 items-start py-10.5 first:border-0 first:pt-0 border-t border-[#e5e5e5] last:border-b"
              >
                <div className="w-14 h-14 2xl:w-25 2xl:h-25 rounded-lg bg-[#F5F9FC] flex items-center justify-center">
                  <Icon className="w-6 h-6 w-15.5 h-15.5 text-primary" strokeWidth={1} />
                </div>

                <h3 className="text-primary text-24 font-medium tracking-[-3%] ">
                  {item.title}
                </h3>

                <p className="text-paragraphlte text-18 ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}