"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
import PricingGrid from './ItAmcCost/PricingGrid'
interface sectionSixData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
}
 interface SliderKnowledgeInsightsProps {
  data: sectionSixData; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
} 
export default function ItAmcCost({ data,variant,subtitleClass}: SliderKnowledgeInsightsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} subtitleClass={subtitleClass}  variant={variant}  />
        </div>
        <div>
          <PricingGrid />
        </div>
    </section>
  );
}