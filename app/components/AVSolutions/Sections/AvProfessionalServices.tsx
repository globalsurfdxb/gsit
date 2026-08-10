
"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import ServicesGrid from "@/app/components/common/ServicesGrid";
  interface industriestype {
      icon: string;
    title: string;
    description: string;
    href: string;
  }

  
  interface BlogCardProps {
 tag: string;
    heading: string;
    highlightLast: number;
    offerData:industriestype[]; 
   
} 
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
} 
export default function AvProfessionalServices({ data ,variant}: SliderKnowledgeInsightsProps) {  
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}  variant={variant}    subtitleClass=''  />  
     <ServicesGrid data={data.offerData} classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 " minheight="min-h-[300px]"/>
      </div>
    </section>
  );
}