"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
import LogoSlider from "@/app/components/common/LogoSlider"

     
    interface logopr {
      src: string;
        alt: string;
    }
    interface BlogCard {
    tag: string;
    heading: string;
    highlightLast: number;
    logo:logopr[]
}

interface BlogCardProps {
  data: BlogCard;
}

export default function TechPartners({ data }: BlogCardProps) { 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-4 lg:mt-[56px]">
             <LogoSlider partnersData={data.logo} slidecount={5} imgheight = 'h-[38px] lg:h-[50px] 2xl:h-[73px]' />
         </div>
      </div>
    </section>
  );
}