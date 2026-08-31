 
"use client";

import Graytextbox from "./Graytextbox";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; 
import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
export interface itemtype { 
  type: string;
  image?: string;
  icon?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  href?: string;
}
 
export interface ITArchitectureData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    subtitle?:string;
    desc?:string;
    items:  itemtype[];
} 
interface ITArchitectureOverviewProps {
  data: ITArchitectureData;
    variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
}

export default function GridgrayImageCard({ data,subtitleClass,variant }: ITArchitectureOverviewProps) {
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
<div>
  <p className="text-18 text-primary font-medium mt-4 lg:mt-6 3xl:!leading-[1.778]">{data.subtitle}</p>
  <p className="text-18 text-paragraph mt-4">{data.desc} </p>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7.5  mt-52">
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
      <div className="relative hidden md:block rounded-2xl overflow-hidden aspect-square sm:aspect-auto sm:h-full  md:min-h-[280px] xl:min-h-[353px]">
        <Image
          src={item.image}
          alt={item.titleLine1 || "Office overview"}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  } 

  return ( 
    <Graytextbox item={item}/>
  );
}