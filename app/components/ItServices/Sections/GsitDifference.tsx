"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import OnboardingSteps from"./OnboardingSteps";
  interface datatype {
number: string;
        title: string;
        description: string;
        tag: string;
  }
  interface BlogCardProps {
tag: string;
    heading: string;
    highlightLast: number;
    description: string;
    data: datatype[];

}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function GsitDifference({ data ,variant}: SliderKnowledgeInsightsProps) {     
 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}     variant={variant}    />   
         <div className="mt-52">
          <OnboardingSteps data={data.data} />
         </div>
      </div>
    </section>
  );
}