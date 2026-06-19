// components/DomainDetailGrid.tsx
import LucideIcon from "@/app/components/common/LucideIcon";

interface DomainDetailItem {
  icon: string;
  title: string;
  description: string;
}

interface DomainDetailGridProps {
  items: DomainDetailItem[];
}

export default function DomainDetailGrid({ items }: DomainDetailGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col gap-5 p-6 md:p-8 
              ${
              i % 2 === 0 ? "sm:border-r border-[#E4E7F0]" : ""
            } ${i < items.length - (items.length % 2 === 0 ? 2 : 1) ? "border-b border-[#E4E7F0]" : ""}
          `}
        >
          <div className="w-[42px] h-[42px] rounded-lg bg-[#EEF2FF] flex items-center justify-center">
            <LucideIcon name={item.icon} strokeWidth={1.5} className="w-[22px] h-[22px] text-primary" />
          </div>
          <div>
            <h4 className="text-primary text-[20px] md:text-[24px] font-poppins font-medium mb-2">
              {item.title}
            </h4>
            <p className="text-paragraphlte text-[14px] md:text-[15px] font-light leading-[1.6]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}