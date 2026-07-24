// Profile.tsx — your component, prop renamed for reuse
import Image from "next/image";

interface StatItem {
  value?: string;
  label?: string;
  description?: string;
  icon?: string;
}

export default function Profile({ value, label, description, icon }: StatItem) {
  return (
    <div className="flex flex-col gap-4 p-4 pe-3 md:pe-4 md:py-[31.5px] xl:p-6">
      <div className="flex items-baseline ">
        <p className="text-primary font-bold text-[26px] md:text-[36px] 2xl:text-[48px] leading-[1.308] md:leading-[1.3] flex items-baseline gap-2">
          <span className="tabular-nums">{value}</span>
          <span className="text-24 font-medium">{label}</span>
        </p>
        {icon && <Image src={icon} width={32} height={32} alt="" />}
      </div>
      <p className="text-paragraphlte text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627]">
        {description}
      </p>
    </div>
  );
}