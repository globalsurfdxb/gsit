
"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
 
import ServicesGrid from "@/app/components/common/ServicesGrid";
 interface headerstype {
  scenario: string;
        without: string;
        with: string;
 }
  interface offerDatatype {
   icon: string;
        title: string;
        description: string;
        href: string;
 }
 interface BlogCardProps {
  tag: string;
    heading: string;
    highlightLast: number;
    subhead: string; 
    headers:headerstype;
    offerData:offerDatatype[];
}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
}

export default function CoerService({ data }: SliderKnowledgeInsightsProps) {    
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}    subtitle={true} subtitleClass=''  />  
          <ServicesGrid data={data.offerData} classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 " minheight="min-h-[275px]"/>
      </div>
    </section>
  );
}