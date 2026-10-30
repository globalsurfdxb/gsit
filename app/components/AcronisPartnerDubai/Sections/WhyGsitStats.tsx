import SectionHeader, {
  type SectionHeaderData,
} from "@/app/components/common/Heading/SectionHeader";
import PillLinks, { type PillLinkItem } from "./PillLinks";

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface WhyGsitStatsData {
  header: SectionHeaderData;
  stats: StatItem[];
  links?: PillLinkItem[];
}

interface WhyGsitStatsProps {
  data: WhyGsitStatsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function WhyGsitStats({
  data,
  variant = "defaultBorder",
  subtitleClass,
}: WhyGsitStatsProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader
          data={data.header}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.stats.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#EBEBEB] bg-[#FBFBFB] p-5 lg:min-h-[193px]"
            >
              <p className="text-primary text-27-medium">{item.value}</p>
              <p className="mt-1 text-paragraph text-18 font-medium tracking-[-3%]">
                {item.label}
              </p>
              <p className="mt-3 text-paragraph text-17">{item.description}</p>
            </div>
          ))}
        </div>

        {data.links && <PillLinks links={data.links} />}
      </div>
    </section>
  );
}
