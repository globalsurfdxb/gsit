"use client";

import { Map, FileText, Briefcase, TrendingUp } from "lucide-react"; 
import LucideIcon from "@/app/components/common/LucideIcon";
import IconBox from "../../common/IconBox";

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}



interface SectionTwoProps {
  data: FeatureItem[];
}

export default function SectionTwo({ data }: SectionTwoProps) {
  return (
        <section className="bg-white py-4 md:py-6.5 lg:py-8 rounded-2xl"> 
            <div className="container ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-[360px_449px_449px_360px]  justify-between  lg:divide-x divide-[#d3d3d3]">
                {data.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4  py-2 2xl:py-[21px]   w-full md:w-auto lg:justify-center first:xl:justify-start last:3xl:justify-end"
                    >
                      <IconBox
                                icon={
                                  <LucideIcon
                                    name={item.icon}
                                    strokeWidth={1}
                                    className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                                  />
                                }
                                bgClass="bg-[#E8EDF6] rounded-[8px]"
                              />
                      <p className="text-primary font-medium text-18 lg:!text-[14px] xl:!text-18 tracking-[-3%] 2xl:min-w-[199px]">
                        {item.title}
                        <br />
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
        </section>
  );
}