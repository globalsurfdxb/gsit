"use client";

import Card from "./Card"; // rename import to match, or keep as Card — see note below
import SectionHeader from "@/app/components/common/SectionHeader";

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
  border?: boolean;
  subtitle?: boolean;
  subtitleClass?:string;
  gridcount?:string;
}
 
export default function GridCard({ data, border = true,subtitleClass, subtitle = false ,gridcount="4"}: UsecaseSectionProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} subtitle={subtitle} subtitleClass={subtitleClass} />
        <div className="mt-52"> 
        <Card data={data.cardsitem} border={border} gridcount={gridcount} />
        </div>
      </div>
    </section>
  );
}