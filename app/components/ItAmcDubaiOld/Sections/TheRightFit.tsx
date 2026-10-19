"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
import BusinessFitGrid from "./TheRightFit/BusinessFitGrid";
 

  
  interface BlogCardProps {
tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
   
} 
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
} 
export default function TheRightFit({ data,variant,subtitleClass }: SliderKnowledgeInsightsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass}/>

        <BusinessFitGrid />
        

        
      </div>
    </section>
  );
}