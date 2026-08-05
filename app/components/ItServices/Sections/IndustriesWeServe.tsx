"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
import GridFour from "../../common/GridFour";
  interface industriestype {
    icon: string;
        title: string;
        description: string;
        href: string;
  }

  interface industryCTAtype {
   title: string;
        description: string;
        href: string;
  }
  interface BlogCardProps {
tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    industriesData:industriestype[];
    industryCTA:industryCTAtype;
   
} 
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
}

export default function IndustriesWeServe({ data }: SliderKnowledgeInsightsProps) { 
 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} descriptionClass="max-w-[37ch]" border={false} subtitle={true}  />
           <GridFour industriesData={data.industriesData} industryCTA={data.industryCTA} gap={true} heightclass="min-h-[196px] lg:min-h-[228px]"/>
      </div>
    </section>
  );
}