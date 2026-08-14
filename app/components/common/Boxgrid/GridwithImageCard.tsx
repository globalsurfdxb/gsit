 
"use client";

import IconBox from "@/app/components/common/IconBox";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import LucideIcon from "@/app/components/common/LucideIcon";
import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
export interface itemtype { 
  type: string;
  image?: string;
  icon?: string;
  title: string;
  description?: string;
  href?: string;
}
 
export interface ITArchitectureData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    items:  itemtype[];
} 
interface ITArchitectureOverviewProps {
  data: ITArchitectureData;
    variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
}

export default function ITArchitectureOverview({ data,subtitleClass,variant }: ITArchitectureOverviewProps) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-7.5 lg:gap-y-4 mt-52">
          {data.items.map((item, i) => (
            <OverviewCell key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OverviewCell({ item }: { item: itemtype }) {
  if (item.type === "image" && item.image) {
    return (
      <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-auto sm:h-full min-h-[280px] lg:min-h-[353px] ">
        <Image
          src={item.image}
          alt={item.title || "Office overview"}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (item.type === "cta") {
    return (
      <Link
        href={item.href || "#"}
        className="relative rounded-2xl p-4 md:p-6 bg-[linear-gradient(143.49deg,#1A2E6E_3.29%,#4578FF_94.24%)] flex flex-col justify-between min-h-[280px] lg:min-h-[353px] "
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-20 md:text-22 font-medium text-white tracking-[-2%] whitespace-pre-line">
            {item.title}
          </h3>
          <span className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary">
            <ArrowRight strokeWidth={1.5} className="w-5 h-5 -rotate-45" />
          </span>
        </div>

        {item.description && (
          <p className="text-18 text-white mt-auto pt-8">
            {item.description}
          </p>
        )}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl p-4 md:p-6 bg-[#F6F6F6] flex flex-col justify-between min-h-[280px] lg:min-h-[353px] ">
      <div>
        <IconBox
        icon={
          item.icon ? (
            <LucideIcon
              name={item.icon}
              strokeWidth={1}
              className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
            />
          ) : null
        }
        bgClass="bg-white rounded-[8px]  "
      /> <h3 className="text-32 mt-4 lg:mt-6   text-primary tracking-[-3%] whitespace-pre-line">
          {item.title}
        </h3>
      </div>

      <div className=" ">
       
        {item.description && (
          <p className="text-18 text-paragraph/50 mt-3">{item.description}</p>
        )}
      </div>
    </div>
  );
}