// components/TechMediumSection.tsx
"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import Cta from "@/app/components/common/Cta";
import TechMediumTable from "./Table"; 
import { div } from "framer-motion/client";
export interface TechMediumRow {
  media: string;
  maxSpeed: string;
  bandwidth: string;
  maxDistance: string;
  typicalUse: string;
}
export interface ctatype {
  title?: string;
  description?: string;
  button: string;
  background?: string;
  classtitle?: string;
  classdesc?: string;
}
export interface roomreadingtype {
  title?: string;
  items?: string[]; 
}

export interface TechMediumTableData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string; 
  cta?: ctatype;
  roomreading?:roomreadingtype;
  columns: {
    media: string;
    maxSpeed: string;
    bandwidth: string;
    maxDistance: string;
    typicalUse: string;
  };
  rows: TechMediumRow[];
}
interface TechMediumSectionProps {
  data: TechMediumTableData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function TechMediumSection({
  data,
  variant = "default",
  subtitleClass,
}: TechMediumSectionProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <TechMediumTable columns={data.columns} rows={data.rows}  />
         {data.roomreading && (
        <div className="pt-6 lg:pt-10.5">
      <h2 className="text-primary text-27 font-medium tracking-[-3%] pb-6 border-b border-[#D3D3D3]">
        {data.roomreading.title}
      </h2>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-7.5 gap-y-6 lg:gap-y-8 mt4 lg:mt-6 2xl:mt-10.5">
        {data.roomreading.items?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            {/* Blue square */}
            <span className="mt-[6px] shrink-0 w-[12px] h-[12px] bg-primary" />

            {/* Text */}
            <p className="text-paragraph text-18 tracking-[-3%] m-0">
              {item}
            </p>
          </div>
        ))}
      </div>
      </div>)}
         {data.cta && (  <Cta items={data.cta} classcta="mt-52"/>
                        )}
                         <section className="w-full">
     
     
    </section>
      </div>
    </section>
  );
}