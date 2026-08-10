"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import SliderKnowledgeInsights from "@/app/components/common/SliderKnowledgeInsights";
interface sectionSixData {
   tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    blogData: {
        image: string;
        category: string;
        date: string;
        title: string;
        href: string;
    }[];
}
 
 interface xtsProps {
  data: sectionSixData;  
    variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
} 
export default function ITSecurityKnowledge({ data,subtitleClass,variant}: xtsProps) {  
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={data} subtitleClass={subtitleClass}variant={variant}  />
        
 <div>
  <SliderKnowledgeInsights blogData={data.blogData} />
 </div>
      </div>
    </section>
  );
}