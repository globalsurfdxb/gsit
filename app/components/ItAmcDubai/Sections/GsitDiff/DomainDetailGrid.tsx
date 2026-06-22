// components/DomainDetailGrid.tsx
import LucideIcon from "@/app/components/common/LucideIcon";
import IconBox from "@/app/components/common/IconBox";
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
          className={`flex flex-col gap-5 3xl:gap-52 p-4 md:p-6 
              ${
              i % 2 === 0 ? "sm:border-r border-[#f0f0f0]" : ""
            } ${i < items.length - (items.length % 2 === 0 ? 2 : 1) ? "border-b border-[#f0f0f0]" : ""}
          `}
        >
         
          <IconBox 
                  icon={<LucideIcon name={item.icon} strokeWidth={1} className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-primary" />}  
                  bgClass="bg-[#EEF5FF] rounded-[5px]"
                />
          <div>
            <h4 className="text-primary text-27-medium mb-2 md:mb-4.5">
              {item.title}
            </h4>
            <p className="text-paragraph text-18">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}