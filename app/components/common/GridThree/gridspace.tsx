"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
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
  data: WhyUsItem; 
  minheight?:string;
  subtitleClass?:string; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
} 
export default function gridspace({ data,variant ,subtitleClass,minheight}: WhyUsGridProps) { 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} variant={variant}   subtitleClass={subtitleClass}   />
          <WhyUsGrid data={data.whygs} minheight={minheight}/>
      </div>
    </section>
  );
}