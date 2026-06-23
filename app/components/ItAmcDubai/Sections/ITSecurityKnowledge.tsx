"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { KnowledgeHeaderData,blogData } from "../data";  
import SliderKnowledgeInsights from "../../home/Sections/SliderKnowledgeInsights";
export default function ITSecurityKnowledge() {
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={KnowledgeHeaderData} descriptionClass="max-w-[37ch]" border={false}  titlebrake="md:hidden"  />
         <p className="text-18 text-paragraph max-w-[76ch] mt-4">{KnowledgeHeaderData.subhead}</p>
 <div>
  <SliderKnowledgeInsights blogData={blogData} />
 </div>
      </div>
    </section>
  );
}