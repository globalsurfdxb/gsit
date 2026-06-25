"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { KnowledgeHeaderData,blogData } from "../data";  
import SliderKnowledgeInsights from "@/app/components/common/SliderKnowledgeInsights";
export default function ITSecurityKnowledge() {
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={KnowledgeHeaderData} descriptionClass="max-w-[37ch]"   titlebrake="md:hidden"  />
        
 <div>
  <SliderKnowledgeInsights blogData={blogData} />
 </div>
      </div>
    </section>
  );
}