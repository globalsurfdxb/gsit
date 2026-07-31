import Image from "next/image";
import LucideIcon from "@/app/components/common/LucideIcon";
import SectionHeader from "@/app/components/common/SectionHeader";
export interface ChecklistImageItem {
  id: string;
  type: "image";
  image: string;
}

export interface ChecklistTextItem {
  id: string;
  type: "text";
  icon: string;
  title: string;
  description: string;
}

export type ChecklistItem = ChecklistImageItem | ChecklistTextItem;

export interface ChecklistData {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  checklistItems: ChecklistItem[];
}
interface CorebenefitsProps {
  data: ChecklistData;
}
function ChecklistCell({ item }: { item: ChecklistItem }) {
  if (item.type === "image") {
    return (
      <div className="relative w-full h-full min-h-[280px] overflow-hidden">
        <Image src={item.image} alt="" fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 flex flex-col justify-between min-h-[280px] 2xl:min-h-[394px]">
      <div className="flex justify-end">
        <LucideIcon
          name={item.icon}
          strokeWidth={1}
          className="w-[24px] h-[24px] 2xl:w-[48px] 2xl:h-[48px] text-primary transition-colors duration-500"
        />
      </div>

      <div className="mt-auto">
        <h3 className="text-24 max-w-[16.213ch] tracking-[-3%] font-medium text-primary mb-4">
          {item.title}
        </h3>
        <p className="text-paragraph text-18">{item.description}</p>
      </div>
    </div>
  );
}

export default function Corebenefits({ data }: CorebenefitsProps) {
  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <div>
          <SectionHeader
            data={data}
            subtitle={false}
            titlebrake="hidden"
            descriptionClass="max-w-[34ch]"
            headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
          />
        </div>

        <div className="mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e2e2e2] divide-y lg:divide-y-0 divide-[#e2e2e2]">
          {data.checklistItems.map((item, i) => (
            <div
              key={item.id}
              className={`
                ${i % 4 !== 3 ? "lg:border-r border-[#e2e2e2]" : ""}
                ${i < 4 ? "lg:border-b border-[#e2e2e2]" : ""}
              `}
            >
              <ChecklistCell item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}