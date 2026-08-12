// components/StrugglingIssuesSection.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeadingTag from "@/app/components/common/Heading/HeadingTag"; 
import CustomButton from "../../common/CustomButton";
export interface IssueItem {
  icon: string;
  text: string;
}

export interface StrugglingIssuesData {
  heading: string;
  highlightLast: number;
  ctaText: string;
  ctaHref: string;
  issues: IssueItem[];
}
interface StrugglingIssuesSectionProps {
  data: StrugglingIssuesData;
}

export default function StrugglingIssuesSection({ data }: StrugglingIssuesSectionProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-[auto_904px] gap-10 lg:gap-16 items-start">
          {/* Left: heading + CTA */}
          <div >
            <HeadingTag
              as="h2"
              text={data.heading}
              highlightLast={data.highlightLast}
            />

             
           <div className="mt-6 lg:mt-8">
             <CustomButton  text={data.ctaText} href={data.ctaHref} dark={true} 
                          icon="/assets/images/icons/fullarrow.svg"/>
           </div>
          </div>

          {/* Right: two-column issue list */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2  gap-x-10 lg:gap-x-15.5 gap-y-4 lg:gap-y-6">
            {data.issues.map((issue, i) => {
             
              return (
                <div key={i} className="flex gap-2 lg:gap-4">
                 <Image src={issue.icon} width={24} height={24} alt="" className="w-6 h-6 relative top-1" />
                  <p className="text-18 text-paragraph tracking-[-3%] font-medium xl:!leading-[1.778]">
                    {issue.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}