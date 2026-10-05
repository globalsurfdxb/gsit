"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

import BusinessFitGrid, { type FitColumn } from "./BusinessFit/BusinessFitGrid";

 interface BlogCardProps {
tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  columns: FitColumn[];
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder";
  subtitleClass?:string;
}

export default function WhoisThisFor({ data, columns, variant, subtitleClass }: SliderKnowledgeInsightsProps) {


  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <BusinessFitGrid columns={columns} />
      </div>
    </section>
  );
}