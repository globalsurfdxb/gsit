import SectionHeader, {
  type SectionHeaderData,
} from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import PillLinks, { type PillLinkItem } from "./PillLinks";

export interface ResidencyCard {
  icon: string;
  title: string;
  description: string;
  fits: string;
}

export interface DataResidencyData {
  header: SectionHeaderData;
  cards: ResidencyCard[];
  note?: string;
  links?: PillLinkItem[];
}

interface DataResidencyProps {
  data: DataResidencyData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function DataResidency({
  data,
  variant = "defaultBorder",
  subtitleClass,
}: DataResidencyProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader
          data={data.header}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52 grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.cards.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[#EBEBEB] bg-[#FBFBFB] p-5"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-[#EAF2FF] flex items-center justify-center">
                <LucideIcon
                  name={item.icon}
                  className="w-5 h-5 text-primary"
                  strokeWidth={1.25}
                />
              </div>

              <div>
                <h3 className="text-paragraph text-[18px] leading-[1.4] tracking-[-3%]">
                  {item.title}
                </h3>
                <p className="mt-3 text-paragraph text-17">{item.description}</p>
                <p className="mt-4 text-primary text-[13px] leading-[1.5]">
                  {item.fits}
                </p>
              </div>
            </div>
          ))}
        </div>

        {data.note && (
          <p className="mt-6 max-w-[100ch] border-l-2 border-primary pl-4 text-paragraph text-17">
            {data.note}
          </p>
        )}

        {data.links && <PillLinks links={data.links} />}
      </div>
    </section>
  );
}
