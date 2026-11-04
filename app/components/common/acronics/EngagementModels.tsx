import SectionHeader, { type SectionHeaderData } from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";
import { ButtonItem } from "@/app/components/common/Banner/BannerMain";

export interface ModelsData extends SectionHeaderData {
  columns: { title: string; sub: string }[];
  rows: [string, string, string, boolean, boolean][];
  text?:string;
  button: ButtonItem;
}

interface Props {
  data: ModelsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const Cell = ({ text, ticked }: { text: string; ticked: boolean }) => (
  <span className="flex items-start gap-2">
    {ticked && <LucideIcon name="Check" className="w-4 h-4 mt-1.5 shrink-0" strokeWidth={2} />}
    {text}
  </span>
);

export default function EngagementModels({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 overflow-hidden rounded-2xl border border-[#e3e8f0]">
          {/* header row (desktop) */}
          <div className="hidden md:grid grid-cols-[30%_1fr_1fr] bg-[#FCFCFC]">
            {data.columns.map((c, i) => (
              <div key={i} className={`p-5 ${i === 2 ? "bg-[#EEF5FF] text-primary" : "text-paragraph"}`}>
                <p className="text-18 font-medium">{c.title}</p>
                {c.sub && <p className="text-14 font-normal text-paragraph">{c.sub}</p>}
              </div>
            ))}
          </div>

          {data.rows.map(([feature, a, b, aTick, bTick], i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[30%_1fr_1fr] border-t border-[#e3e8f0] first:border-0 md:first:border-t">
              <p className="p-4 md:p-5 text-18 font-medium text-paragraph bg-[#FCFCFC] md:bg-transparent">{feature}</p>
              <div className="p-4 md:p-5 text-18 text-paragraph">
                <span className="md:hidden block text-[12px] uppercase text-paragraph">{data.columns[1].title}</span>
                <Cell text={a} ticked={aTick} />
              </div>
              <div className="p-4 md:p-5 text-18 text-primary bg-[#F7FAFF]">
                <span className="md:hidden block text-[12px] uppercase text-paragraph">{data.columns[2].title}</span>
                <Cell text={b} ticked={bTick} />
              </div>
            </div>
          ))}
        </div>
        {data.text && (
        <p className="text-18 text-paragraph mt-4">{data.text}</p>
        )}

        <div className="mt-5">
          <CustomButton
            text={data.button.text}
            icon={data.button.icon}
            bgButton={data.button.bgButton}
            dark={data.button.dark}
            href={data.button.href}
            hoverScroll={data.button.hoverScroll}
          />
        </div>
      </div>
    </section>
  );
}
