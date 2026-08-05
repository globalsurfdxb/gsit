"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
 
import BusinessFitGrid from "./TheRightFit/BusinessFitGrid";
 

  
  interface BlogCardProps {
tag: string;
    heading: string;
    highlightLast: number;
    description: string;
   
} 
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
} 
export default function TheRightFit({ data }: SliderKnowledgeInsightsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} descriptionClass="lg:max-w-[35ch]" titlebrake="hidden"/>

        <BusinessFitGrid />
        

        
      </div>
    </section>
  );
}