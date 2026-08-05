"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
 
import PricingGrid from './ItAmcCost/PricingGrid'
interface sectionSixData {
    tag: string;
    heading: string;
    highlightLast: number;
    description: string;
}
 interface SliderKnowledgeInsightsProps {
  data: sectionSixData; 
} 
export default function ItAmcCost({ data}: SliderKnowledgeInsightsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} descriptionClass="lg:max-w-[55ch] "  headingClass={'text-heading lg:!whitespace-normal xl:!whitespace-pre-line'} titlebrake="hidden" />
        </div>
        <div>
          <PricingGrid />
        </div>
    </section>
  );
}