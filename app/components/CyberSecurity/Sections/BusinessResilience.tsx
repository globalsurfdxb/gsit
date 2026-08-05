"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";
 
  interface tabletype {
   
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
    table: tabletype[];
}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
}

export default function BusinessResilience({ data }: SliderKnowledgeInsightsProps) {  
 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
        <div className="grid grid-cols-1 2xl:grid-cols-[auto_760px] 3xl:grid-cols-[auto_889px] gap-4 2xl:gap-[82px] items-center">
           <SectionHeader data={data}    subtitle={true} subtitleClass='max-w-[53ch] 3xl:max-w-[60ch]' border={false}  />  
         <div > 
    <Impactgrid industriesData={data.table} myclass="3xl:mt-8 3xl:mb-4"  gridclass='grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-4 3xl:!gap-8.5' classheight="min-h-[196px] lg:min-h-[251px] "/>
         </div>
        </div>
      </div>
    </section>
  );
}