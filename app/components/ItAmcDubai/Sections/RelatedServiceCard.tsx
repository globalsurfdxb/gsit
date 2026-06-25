"use client";

import Link from "next/link";
import LucideIcon from "@/app/components/common/LucideIcon";

interface RelatedServiceCardProps {
  icon: string;
  title: string;
  href: string;
  active: boolean;
  onHover: () => void;
}

export default function RelatedServiceCard({ icon, title, href, active, onHover }: RelatedServiceCardProps) {
  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      onTouchStart={onHover}
      className="group w-full relative flex flex-col justify-between gap-[51px] lg:gap-9.5 p-4 md:p-6 rounded-2xl overflow-hidden"
    >
      {/* fading bg */}
      <span
        className={`absolute inset-0 rounded-2xl border transition-opacity duration-500 ease-in-out ${
          active ? "opacity-100 bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] border-transparent" : "bg-white border-[#D3D3D3] lg:opacity-0"
        }`}
      />

      <div
        className={`relative z-10 w-[42px] h-[42px] lg:w-[58px] lg:h-[58px] rounded-[10px] flex items-center justify-center transition-colors duration-500 ${
          active ? "bg-white" : "bg-[#EEF5FF]"
        }`}
      >
        <LucideIcon name={icon} strokeWidth={1.5} className="w-[32px] h-[32px] text-primary" />
      </div>

      <div className="relative z-10">
        <h3
          className={`text-24 leading-[1.46] tracking-[-3%] font-medium md:font-bold mb-4 transition-colors duration-500 ${
            active ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h3>

        <span
          className={`inline-flex pb-5 lg:pb-5 border-b w-full transition-colors duration-500 ${
            active ? "border-white" : "border-primary"
          }`}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.66699 16H25.3337"
              stroke={active ? "white" : "#114A9F"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />
            <path
              d="M16 6.66699L25.3333 16.0003L16 25.3337"
              stroke={active ? "white" : "#114A9F"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}