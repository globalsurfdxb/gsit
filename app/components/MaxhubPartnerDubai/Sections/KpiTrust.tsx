import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import SvgIcon from "@/app/components/CiscoProduct/Sections/SvgIcon";

export interface KpiTrustData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  kpis: { icon: string; title: string; text: string }[]; // icon: inner markup of a 24×24 outline SVG
  trust: { value: string; label: string }[];
}

interface Props {
  data: KpiTrustData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Reasons to choose GS IT, then a strip of headline figures
export default function KpiTrust({ data, variant, subtitleClass }: Props) {
  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <div className="mt-52 grid gap-6 lg:grid-cols-3 lg:gap-10">
          {data.kpis.map((k) => (
            <div key={k.title} className="min-w-0 border-l-2 border-primary py-1.5 pl-[18px]">
              <SvgIcon markup={k.icon} className="mb-[18px] size-7 text-primary" />
              <h3 className="mb-2.5 text-[18px] font-medium tracking-[-0.02em] text-[#111]">{k.title}</h3>
              <p className="text-[14.5px] text-paragraph">{k.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-[18px] rounded-[14px] bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] px-7 py-[22px] lg:grid-cols-3 lg:gap-6">
          {data.trust.map((t, i) => (
            <div
              key={t.label}
              className={`flex items-center gap-3.5 ${i > 0 ? "border-t border-[#d5e1f5] pt-[18px] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0" : ""}`}
            >
              <strong className="whitespace-nowrap text-[26px] font-normal text-primary">{t.value}</strong>
              <span className="text-[14px] text-paragraph">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
