"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import SliderKnowledgeInsights from "@/app/components/common/SliderKnowledgeInsights";
export interface itemstype {
 image: string;
    category: string;
    date: string;
    title: string;
    href: string; 
}
export interface dataitem {
 tag: string; heading: string; highlightLast: number; subhead?: string;
   
  items:itemstype[];
}
interface BannerProps {
  data:dataitem;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;  
   
 
} 
export default function KnowledgeInsights({ data,variant,subtitleClass}: BannerProps ) { 
 
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={data}   variant={variant}  subtitleClass={subtitleClass}  /> 
 <div>
  <SliderKnowledgeInsights blogData={data.items} />
 </div>
      </div>
    </section>
  );
}