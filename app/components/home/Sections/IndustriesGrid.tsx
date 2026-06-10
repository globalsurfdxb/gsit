 
// components/IndustriesGrid.tsx
import Link from "next/link";
import IconBox from "@/app/components/common/IconBox"; 
import { industriesData, industryCTA } from "../data"; 
export default function IndustriesGrid() {
  return (
    <div className="grid mt-5 lg:mt-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#cccccc] rounded-2xl overflow-hidden divide-x divide-y divide-[#cccccc]">

      {industriesData.map((item, i) => (
        <div
          key={i} 
          className="flex flex-col   p-4 md:p-6 hover:bg-[#F5F7FF] transition-colors duration-300"
        >
          <IconBox
            src={item.icon}
            alt={item.title}
            imgsize="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            bgClass="bg-[#E8EDF6]"
          />
          <h3 className="text-primary mt-[23px] mb-[12px] text-24 tracking-[-3%] font-bold  leading-[1.46]">
            {item.title}
          </h3>
          <p className="text-paragraphlte text-18 tracking-[-3%] !leading-[1.28]  ">
            {item.description}
          </p>
        </div>
      ))}

      {/* CTA card */}
      <Link
        href={industryCTA.href}
        className="relative flex flex-col justify-end gap-3 p-6 md:p-7 bg-[#1B3A9E] min-h-[200px] "
      >
        <span className="absolute top-5 right-5 w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7" stroke="#1B3A9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7H17V17" stroke="#1B3A9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-white text-[17px] md:text-[19px] font-semibold  leading-snug">
          {industryCTA.title}
        </h3>
        <p className="text-white/80 text-[14px] md:text-[15px] font-light leading-[1.6]">
          {industryCTA.description}
        </p>
      </Link>

    </div>
  );
} 