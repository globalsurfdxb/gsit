"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
 
import GridFour from "../../common/GridFour";
import Cta from "../../common/Cta";
export interface ctatype {
  title: string;
        description: string;
        button: string;
        background: string;
        classtitle: string;
        classdesc: string;}
export interface itemstype {
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
  data:itemstype[];
  cta:ctatype;
}
interface BannerProps {
  data:dataitem; 
} 
 
export default function IndustriesWeServe({ data}: BannerProps ) {  
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} subtitleClass="max-w[200ch]" descriptionClass="max-w-[37ch]" border={false} subtitle={false} titlebrake={'hidden '}  />
          <div className=" mt-82">
             <GridFour industriesData={data.data}   gap={true} titleclass="font-medium" heightclass="min-h-[196px] lg:min-h-[257px] 3xl:min-h-[272px]"/> 
             <Cta items={data.cta} classcta="mt-4 lg:mt-7.5"/>
          </div>
      </div>
    </section>
  );
}