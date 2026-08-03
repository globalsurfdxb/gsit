
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  redtheme?:boolean;
  arrow?:boolean;
  gridcount?:number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  featured = false,
  redtheme=false,
  arrow=false,
  gridcount,
  onHover,
  onLeave,
}: ServiceCardProps) {
  return (
    <div className={`  flex flex-col gap-4 transition-all   duration-300 group `}>
      <div
        className={` p4 2xl:p-6  flex flex-col gap-4 transition-all  duration-300 group  `}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onTouchStart={onHover}
        onTouchEnd={onLeave}
      >
        <IconBox
          icon={
            <LucideIcon
              name={icon}
              strokeWidth={1}
              className={`${redtheme ? "text-colorred ":"text-primary"} w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] `}
            />
          }
          bgClass={`${redtheme ? "bg-[#FFE3E0] ":"bg-[#EEF5FF]"}  rounded-[8px]`}
        />
        <h3 className={` ${redtheme ? "text-colorred ":"text-primary"} ${gridcount ===4 ? "mt-2 2xl:mt-4 ":"mt-0"}  text-24 font-[500]   tracking-[-3%]`}>
          {title}
        </h3>
        <p className={` text-paragraph text-18 leading-[1.6] `}>
          {description}
        </p>
      </div>
      {/* always rendered to prevent layout shift */}
      <div className={arrow ? "ps-4 lg:ps-5 lg:ps-6 pe-4 ps-4 lg:pe-6 3xl:pe-1 " : "hidden"}>
        <div
          className={`w-fit text-paragraph group-hover:translate-x-0 -translate-x-2 transition-all duration-500 ${
            featured
              ? "opacity-100 translate-x-0"
              : "xl:opacity-0  pointer-events-none"
          }`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66699 16H25.3337"
              stroke="#114A9F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 6.66602L25.3333 15.9993L16 25.3327"
              stroke="#114A9F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* <div
          className={`flex flex-col gap-4 transition-all border-b pb-5   duration-700 ${
            featured
              ? "border-primary w-full "
              : "border-primary xl:border-transparent w-full xl:w-0"
          }`}
        /> */}

        <div
          className={`flex flex-col gap-4 border-b pb-5 border-primary transition-opacity duration-400 ${
            featured ? "opacity-100" : "opacity-0 xl:opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
