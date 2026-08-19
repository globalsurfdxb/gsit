"use client";

import Card from "./Card"; // rename import to match, or keep as Card — see note below
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 

export interface CardItem {
  id?: string;
  title?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  highlighted?: boolean;
  url?: string;
   href?: string;
}

export interface UsecaseData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  description?: string;
  cardsitem: CardItem[];
}

interface UsecaseSectionProps {
  data: UsecaseData; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
  border?: boolean;
  gridcount?: "2" | "3" | "4" | "5" | "6";
}
 
export default function GridCard({ data, border = true,subtitleClass, variant  ,gridcount="4"}: UsecaseSectionProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <div className="mt-52"> 
        <Card data={data.cardsitem}  gridcount={gridcount} />
        </div>
      </div>
    </section>
  );
}