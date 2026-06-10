// components/ServiceCard.tsx
import Link from "next/link";
import IconBox from "@/app/components/common/IconBox";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  featured = false,
  onHover,
  onLeave,
}: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 transition-all  p-5 lg:p-[24px] pb-0 lg:pb-0 duration-300  `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
      onTouchEnd={onLeave}
    >
      <IconBox
        src={icon}
        imgsize="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
        bgClass="bg-[#EEF5FF]"
      />
      <h3 className="text-primary text-24 font-semibold  leading-[1.4589] tracking-[-3%]">
        {title}
      </h3>
      <p className="text-paragraphlte text-18 leading-[1.6] max-w-[38ch]">
        {description}
      </p>

      {/* always rendered to prevent layout shift */}
      <div>
        <Link
          href={href}
          className={`w-fit text-paragraph hover:text-primary transition-all duration-500 ${
            featured ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
        
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66699 16H25.3337" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 6.66602L25.3333 15.9993L16 25.3327" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </Link>
        <div className={`flex flex-col gap-4 transition-all border-b pb-5   duration-700 ${
          featured ? "border-primary w-full " : "border-transparent w-0"
        }`}>
        </div>
      </div>
    </div>
  );
}