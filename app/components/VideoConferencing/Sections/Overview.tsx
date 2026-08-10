"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 

   import FeatureGrid from "@/app/components/common/gridoverview/FeatureGrid"
  export interface fe {
   titleLine1: string; titleLine2: string; description: string; featured: boolean; pattern: boolean;
 }
   
 export interface frdata {
   tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  features:fe[];
  video:{ thumbnail: string; videoUrl: string; };
   
}
  interface IconbgCardGridProps {
    rightFitData :frdata;
  subtitleClass?: string;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  }
  
  export default function Overview({
    rightFitData,subtitleClass,variant
  }: IconbgCardGridProps) {

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={rightFitData} subtitleClass={subtitleClass} variant={variant}  />
        <FeatureGrid rightFitData={rightFitData} /> 
      </div>
    </section>
  );
}