"use client"

import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import LogoSlider from "@/app/components/common/LogoSlider"



interface BlogCard {
  tag: string; heading: string; highlightLast: number;
}
interface headerData {

  src: string; alt: string;
}

interface BlogCardProps {
  headerData: BlogCard;
  logo: headerData[];
  border?: boolean;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
}

export default function TechPartners({ logo, headerData,subtitleClass, variant,border }: BlogCardProps) {

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container ">
        <SectionHeader data={headerData}  variant={variant} subtitleClass={subtitleClass} />
        <div className={`mt-4  ${border ? 'lg:mt-8' : 'lg:mt-[56px]'}`}>
          <LogoSlider partnersData={logo} slidecount={5} imgheight='h-[38px] lg:h-[50px] 2xl:h-[73px]' />
        </div>
      </div>
    </section>
  );
}