"use client";
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Image from "next/image";

export interface OverviewData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string; 
   networkStep: NetworkStep[]; 
  image: string;
}   
export interface NetworkStep {
  number: string;
  title: string;
  description: string;
}
interface OverviewGridProps {
  data: OverviewData; 
  subtitleClass?: string;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
 
} 

export default function ProdectSpec({
  data,
  variant,
  subtitleClass,
}: OverviewGridProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data} 
          subtitleClass={subtitleClass} 
          variant={variant}
        />

           <div className="mt-52 flex flex-col lg:grid grid-cols-[auto_35%] 3xl:grid-cols-[1092px_auto] items-center gap-10 lg:gap-[61px]">
             <div className="relative w-full aspect-[4/3] sm:aspect-[5/3]  md:aspect-[6/3] lg:aspect-auto h-full">
               <Image
                 src={data.image}
                 alt="Network infrastructure diagram showing entrance facility, equipment room, backbone cabling, telecom room, horizontal cabling, and work area"
                 fill
                 sizes="(min-width: 1092px) 50vw, 100vw"
                 className="object-contain"
               />
             </div>
       
             <div className="w-full flex flex-col gap-6 3xl:gap-8">
               {data.networkStep.map((step) => (
                 <div key={step.number} className="flex gap-4">
                   <span className="shrink-0 w-9 h-9 3xl:w-11 3xl:h-11 rounded-md bg-primary text-white text-[20px] 3xl:text-24 tracking-[-3%]  3xl:font-medium flex items-center justify-center">
                     {step.number}
                   </span>
                   <div>
                     <h3 className="text-primary  text-[20px] 3xl:text-24 tracking-[-3%] font-medium   uppercase">
                       {step.title}
                     </h3>
                     <p className="text-18 text-paragraph mt-2 3xl:mt-4 lg:max-w-[33ch]">
                       {step.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
      </div>
    </section>
  );
}