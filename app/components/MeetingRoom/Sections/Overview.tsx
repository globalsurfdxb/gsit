"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";  

   import FeatureGrid from "./gridoverview/FeatureGrid"
  export interface fe {
   titleLine1: string; titleLine2: string; description: string; featured: boolean; pattern: boolean;
 }
   
 export interface frdata {
   tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  features:fe[];
  video:{ thumbnail: string; videoUrl: string; };
   
}
  interface IconbgCardGridProps {
    rightFitData :frdata
  }
  
  export default function Overview({
    rightFitData
  }: IconbgCardGridProps) {

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={rightFitData} descriptionClass="lg:max-w-[45ch]" titlebrake="hidden" headingClass="text-heading     lg:!whitespace-normal xl:!whitespace-pre-line"/>
        <FeatureGrid rightFitData={rightFitData} /> 
      </div>
    </section>
  );
}