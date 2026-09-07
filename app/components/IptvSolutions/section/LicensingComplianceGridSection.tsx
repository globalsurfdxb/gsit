"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface PointItem {
  title: string;
  description: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  points: PointItem[];
  image: string;
  imageAlt: string;
  note: string;
}

interface LicensingComplianceGridProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function LicensingComplianceGridSection({
  data,
  variant,
  subtitleClass,
}: LicensingComplianceGridProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] rounded-2xl border border-[#d3d3d3] overflow-hidden mt-52">
          <div className="relative w-full min-h-[320px] lg:min-h-full">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {data.points.map((point, i) => {
              const isRightCol = i % 2 === 1;
              const isBottomRow = i >= data.points.length - 2;

              return (
                <div
                  key={i}
                  className={`p-4 pt-10 lg:p-6 lg:pt-[80px] 2xl:pt-[137px] flex flex-col justify-center ${
                    !isRightCol ? "sm:border-r  border-[#d3d3d3]" : ""
                  }${
                    isRightCol ? "border-t sm:border-t-0  border-[#d3d3d3]" : ""
                  } ${!isBottomRow ? "border-b border-[#d3d3d3]" : ""}`}
                >
                  <h3 className="text-paragraph text-24 font-medium tracking-[-3%]">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-paragraphlte text-18">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-52 bg-[#F5F9FC] rounded-2xl p-4 lg:p-6">
          <p className="text-primary text-18 leading-[1.6] tracking-[-3%]">{data.note}</p>
        </div>
      </div>
    </section>
  );
}