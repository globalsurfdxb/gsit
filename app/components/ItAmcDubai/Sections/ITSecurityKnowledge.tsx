"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
import SliderKnowledgeInsights from "@/app/components/common/SliderKnowledgeInsights";
interface sectionSixData {
   tag: string;
    heading: string;
    highlightLast: number;
    description: string;
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
} 
export default function ITSecurityKnowledge({ data}: xtsProps) {  
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={data} descriptionClass="max-w-[37ch]"   titlebrake="md:hidden"  />
        
 <div>
  <SliderKnowledgeInsights blogData={data.blogData} />
 </div>
      </div>
    </section>
  );
}