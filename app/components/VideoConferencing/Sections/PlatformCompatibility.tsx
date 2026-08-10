"use client" 
 import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
import LogoSlider from "@/app/components/common/LogoSlider"
interface logotype {
  src: string;
        alt: string;
  }
  interface BlogCardProps {
tag: string;
    heading: string;
    highlightLast: number;
     
    logo: logotype[];

}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function PlatformCompatibility({ data ,variant}: SliderKnowledgeInsightsProps) {   
 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">    
        <div className="grid lg:grid-cols-2 xl:grid-cols-[500px_auto] 3xl:grid-cols-[647px_auto] gap-6 2xl:gap-[80px] 3xl:gap-[162px]">
          <div> 
         <SectionHeader data={data}   variant={variant}     />
          </div>
     
             <LogoSlider partnersData={data.logo} slidecount={4} imgheight = 'h-[38px] lg:h-[50px] 2xl:h-[92px]' gridgap='gap-[21px]' />
         </div>
      </div>
    </section>
  );
}