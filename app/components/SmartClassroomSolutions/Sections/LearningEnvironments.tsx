"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface EnvironmentRow {
  image: string;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export interface LearningEnvironmentsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  rowsData: EnvironmentRow[];
}

interface LearningEnvironmentsProps {
  data: LearningEnvironmentsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function LearningEnvironments({
  data,
  variant = "default",
  subtitleClass,
}: LearningEnvironmentsProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={{
            tag: data.tag,
            heading: data.heading,
            highlightLast: data.highlightLast,
            subhead: data.subhead,
          }}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52    ">
          {data.rowsData.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1  xl:grid-cols-[386px_1fr_421px] gap-6 lg:gap-10 3xl:gap-[102px] items-start pb-8 3xl:pb-10.5 border-b border-[#E5E5E5] mb-6 lg:mb-10  3xl:mb-[92px] last:mb-0 lg:last:mb-0  3xl:last:mb-0"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[18/10] xl:aspect-auto xl:h-[200px]">
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-24 font-medium text-primary tracking-[-3%] mb-4 lg:mb-5">
                  {row.title}
                </h3>
                <p className="text-18 text-[#A9A9A9]  ">
                  {row.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-4 3xl:gap-6">
                {row.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0 w-[8px] h-[8px] bg-primary" />
                    <span className="text-18 text-primary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}