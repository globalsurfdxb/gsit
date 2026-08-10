"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
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
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function IndustriesWeServe({ data,variant }: SliderKnowledgeInsightsProps) { 
 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}   variant={variant}    />
           <GridFour industriesData={data.industriesData} industryCTA={data.industryCTA} gap={true} heightclass="min-h-[196px] lg:min-h-[228px]"/>
      </div>
    </section>
  );
}