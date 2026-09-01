"use client";

import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface itemtype {
  type: string;
  image?: string;
  icon?: string;
  label?: string; // eyebrow text, e.g. "Small Offices Sharing Local Files"
  title: string;
  description?: string;
  href?: string;
}

export interface ITArchitectureData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: itemtype[];
}

export default function Grayboxtwo({ item }: { item: itemtype }) {
  return (
    <div className="rounded-2xl p-4 md:p-6 bg-[#F6F6F6] flex flex-col justify-between min-h-[250px] md:min-h-[280px] xl:min-h-[353px]">
      <div>
        {item.icon && (
          <IconBox
            icon={
              item.icon ? (
                <LucideIcon
                  name={item.icon}
                  strokeWidth={1}
                  className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                />
              ) : null
            }
            bgClass="bg-white rounded-[8px]"
          />
        )}
      </div>

      <div>
        {item.label && (
          <div className="flex items-center gap-2.5 mb-2 xl:mb-4">
            <span className="w-[2px] h-5 xl:h-[32px] bg-primary shrink-0" />
            <span className="text-18 text-paragraph !leading-[1.2] 3xl:!leading-[1.778]">{item.label}</span>
          </div>
        )}

        <h3 className="text-27  3xl:!leading-[1.2967] text-primary tracking-[-3%] whitespace-pre-line">
          {item.title}
        </h3>

        {item.description && (
          <p className="text-18 text-paragraph/50 mt-2 xl:mt-4">{item.description}</p>
        )}
      </div>
    </div>
  );
}