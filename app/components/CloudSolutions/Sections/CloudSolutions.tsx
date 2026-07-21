
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";
import SectionHeader from "@/app/components/common/SectionHeader";
import type { FC } from "react";
import Link from "next/link";
 

 
 
   export interface dtaRow {
     title: string; 
     description: string; 
     icon: string; 
     href: string; 
     featured: boolean; }


    export interface ComparisonRow {
  tag:string,
  heading: string
  highlightLast:number,
  description?:string;
  data: dtaRow[];
}

interface ComparisonTableProps {  
   
  data: ComparisonRow;
}

export default function CloudSolutions({
  data,
  
}: ComparisonTableProps) {


    

  return (
    <section className="w-full py-82 bg-white">
      <div className="container">
         <SectionHeader data={data}      descriptionClass='max-w-[66ch] lg:max-w-[40ch] xl:max-w-[66ch]'  />   
            <div className=" mt-52 lg:border border-[#d3d3d3] rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
        {data.data.map((item, index) => {
          const Icon = item.icon;
          const isFeatured = item.featured;
          const isLastInRow = (index + 1) % 4 === 0;

          return (
            <Link
              key={index}
              href={item.href}
              className={`group relative flex flex-col justify-between p-6 min-h-[280px] transition-all duration-500 hover:bg-primary  transition-colors duration-500 border border-[#d3d3d3] lg:border-0 rounded-2xl lg:rounded-[0px] lg:border-r lg:last:border-r-0  `}
            >
              <div>
                    <IconBox icon={
                                <LucideIcon name={item.icon} strokeWidth={1} className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary group-hover:brightness-0 group-hover:invert-100"   />
                                } bgClass="bg-transparent rounded-[8px] border border-[#d3d3d3]"  />

                <h3
                  className={`  mb-3 3xlmb-4 mt-6 3xl:mt-8 text-[20px] 3xl:text-24 font-medium tracking-[-3%]  text-primary group-hover:text-white transition-colors duration-500`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-18 text-paragraph group-hover:text-[#f0f0f0] transition-colors duration-500`}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex justify-end mt-10 3xl:mt-[137px]">
                   <span
                              className={`flex items-center justify-center w-[42px] h-[42px] 2xl:w-[58px] 2xl:h-[58px]  rounded-xl transition-colors duration-500 bg-[#EEF5FF]`}
                            >
                              <LucideIcon
                                name="ArrowRight"
                                strokeWidth={1}
                                className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary transition-colors duration-500"
                              />
                            </span> 
                
              </div>
            </Link>
          );
        })}
      </div>
      </div>
    </section>
  );
}
 