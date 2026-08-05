"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
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
   
 
} 
export default function KnowledgeInsights({ data}: BannerProps ) { 
 
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={data} descriptionClass="max-w-[37ch]" border={false}  titlebrake="md:hidden"  /> 
 <div>
  <SliderKnowledgeInsights blogData={data.items} />
 </div>
      </div>
    </section>
  );
}