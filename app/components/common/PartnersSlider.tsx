"use client"

import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import LogoSlider from "@/app/components/common/LogoSlider"



interface BlogCard {
  tag: string; heading: string; highlightLast: number;
}
interface headerData { 
  src: string; alt: string;
}
interface blogkey { 
  title?: string; description?: string;
}

interface BlogCardProps {
  headerData: BlogCard;
  logo: headerData[];
  border?: boolean;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
  imgheight?:string;
  parnerpoints?:blogkey[];
}

export default function TechPartners({ logo, headerData,subtitleClass, variant,border,parnerpoints,imgheight='h-[38px] lg:h-[50px] 2xl:h-[73px]' }: BlogCardProps) {

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container ">
        <SectionHeader data={headerData}  variant={variant} subtitleClass={subtitleClass} />
        <div className={`mt-4  ${border ? 'lg:mt-8' : 'lg:mt-10 3xl:mt-[66px]'}`}>
          <LogoSlider partnersData={logo} slidecount={5} imgheight={imgheight} />
        </div>
         {parnerpoints &&(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 3xl:gap-y-[60px] mt-6 3xl:mt-[60px]">
          {parnerpoints?.map((point, i) => (
            <div key={i}>
              <div className="w-8 h-[2px] bg-primary mb-2"></div>
              <h3 className="text-18 text-paragraph font-medium tracking-[-3%] 3xl:!leading-[1.778]">
                {point.title}
              </h3>
              <p className="text-18 text-paragraph/50 mt-2">
                {point.description}
              </p>
            </div>
          ))}
        </div>
         )}
      </div>
    </section>
  );
}