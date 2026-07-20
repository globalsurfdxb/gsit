
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
  hidearrow?:boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  featured = false,
  hidearrow=false,
  onHover,
  onLeave,
}: ServiceCardProps) {
  return (
    <div className={` ${hidearrow ? "pb-5 lg:pb-10.5 ":"pb-6"}  flex flex-col gap-4 transition-all   duration-300 group `}>
      <div
        className={` ${hidearrow ? "p-0 ":"p-4 lg:p-5 lg:p-[18px] pb-0 lg:pb-0 "}  flex flex-col gap-4 transition-all  duration-300 group  `}
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
              className={`${hidearrow ? "text-colorred ":"text-primary"} w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] `}
            />
          }
          bgClass={`${hidearrow ? "bg-[#FFE3E0] ":"bg-[#EEF5FF]"}  rounded-[8px]`}
        />
        <h3 className={` ${hidearrow ? "text-colorred ":"text-primary"}  text-24 font-[500]   tracking-[-3%]`}>
          {title}
        </h3>
        <p className={`${hidearrow ? " ":""} text-paragraph text-18 leading-[1.6] `}>
          {description}
        </p>
      </div>
    
    </div>
  );
}
