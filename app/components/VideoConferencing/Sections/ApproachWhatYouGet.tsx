import React from "react";
import Image from "next/image";
import IconBox from "../../common/IconBox";
import LucideIcon from "../../common/LucideIcon";

export interface HandoverItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface WhatYouReceiveProps {
  tag?: string;
  heading?: string;
  subhead?: string;
  items: HandoverItem[];
  redtheme?:boolean
  iconbg?:string
}

export const WhatYouReceive: React.FC<WhatYouReceiveProps> = ({
  tag = "At Handover",
  heading = "What you receive",
  subhead = "Detailed handover documentation equips administrators and staff to manage installed room technology confidently.",
  items,
  redtheme=false,
  iconbg
}) => {
  return (
    <section className="pt-52">
      {/* Header */}
      <div className="flex flex-col gap-2 md:gap-4">
        <span className="text-[18px]  text-primary block">
          {tag}
        </span>
        <h3 className="text-[24px] lg:text-32 leading-[1.125] text-paragraph">
          {heading}
        </h3>
        <p className=" text-paragraph text-[18px]">
          {subhead}
        </p>
      </div>

      {/* Grid: 2 columns on mobile, 3 on tablet, 6 on desktop */}
      <div className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-[30px] items-start">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 lg:gap-4 items-start text-left">
            {/* Light blue icon box */}
            <IconBox
              icon={
                <LucideIcon
                  name={item.icon}
                  strokeWidth={1}
                  className={`${redtheme ? "text-colorred " : "text-primary"} w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] `}
                />
              }
              bgClass={`${redtheme ? "bg-transparent !w-auto !h-auto 2xl:!w-auto 2xl:!h-auto !justify-start" : (iconbg ?? "bg-[#EEF5FF]")}  rounded-[8px]`}
            />

            {/* Title */}
            <h4 className="text-[18px] text-primary leading-[1.5] lg:leading-[1.7]">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[18px]  text-textgray leading-[1.44444]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouReceive;
