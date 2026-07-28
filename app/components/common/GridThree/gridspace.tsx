"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
import WhyUsGrid from "@/app/components/common/GridThree/WhyUsGrid";
export interface items {
  title:string;
  description:string;
  url?:string;
}
export interface WhyUsItem {
 tag: string; heading: string; highlightLast: number; subhead: string;

  whygs:items[];
}

interface WhyUsGridProps {
   descriptionClass?:string;
 bordersm?:string;
 subtitle?:boolean;
 subtitleClass?:string;
  whygsData: WhyUsItem;
  border?:boolean;
} 
export default function gridspace({ whygsData,descriptionClass ,subtitleClass,bordersm,subtitle, border}: WhyUsGridProps) { 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={whygsData} descriptionClass={descriptionClass} bordersm={bordersm} border={border} subtitle={subtitle} subtitleClass={subtitleClass}   />
          <WhyUsGrid data={whygsData.whygs} />
      </div>
    </section>
  );
}