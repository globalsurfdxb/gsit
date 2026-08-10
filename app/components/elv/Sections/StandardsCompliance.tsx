"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";

 export interface table {
 icon: string;
    title: string;
    description: string;
    href: string;
}
export interface dataitem {
 tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
  table:table[];
}
interface BannerProps {
  data:dataitem; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
 
}  
export default function StandardsCompliance({ data,variant}: BannerProps ) {    
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
        <div className="grid grid-cols-1 2xl:grid-cols-[auto_760px] 3xl:grid-cols-[auto_889px] gap-4 2xl:gap-[82px] items-center">
           <SectionHeader data={data}    variant={variant} subtitleClass='max-w-[53ch] 3xl:max-w-[60ch]' />  
         <div > 
    <Impactgrid industriesData={data.table} myclass="3xl:mt-8 3xl:mb-4"  gridclass='grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-4 3xl:!gap-8.5' classheight="min-h-[196px] lg:min-h-[251px] 2xl:min-h-[295px] "/>
         </div>
        </div>
      </div>
    </section>
  );
}