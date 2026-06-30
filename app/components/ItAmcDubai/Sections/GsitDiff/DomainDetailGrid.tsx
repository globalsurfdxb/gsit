import LucideIcon from "@/app/components/common/LucideIcon";
import IconBox from "@/app/components/common/IconBox";

interface DomainDetailItem {
  icon: string;
  title: string;
  description: string;
}

interface DomainDetailGridProps {
  items: DomainDetailItem[];
  color?: string;
}

export default function DomainDetailGrid({ items, color = "#f0f0f0" }: DomainDetailGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {items.map((item, i) => {
        const isRightCol = i % 2 === 0;
        const isLastRow = i >= items.length - (items.length % 2 === 0 ? 2 : 1);

        return (
          <div
            key={i}
            className="flex flex-col gap-10.5 lg:gap-4 3xl:gap-52 p-4 xl:p-6"
            style={{
              borderRight: isRightCol ? `1px solid ${color}` : undefined,
              borderBottom: !isLastRow ? `1px solid ${color}` : undefined,
            }}
          >
            <IconBox
              icon={
                <LucideIcon
                  name={item.icon}
                  strokeWidth={1}
                  className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                />
              }
              bgClass={`bg-white rounded-[5px] border border-[${color}]`}
            />
            <div>
              <h4 className="text-primary text-27-medium lg:!text-[16px] xl:!text-[20px] 3xl:text-27-medium mb-4 md:mb-4.5 lg:mb-2 2xl:mb-[26px]">
                {item.title}
              </h4>
              <p className="text-paragraph text-18">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}