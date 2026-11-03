import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";

export interface AmcData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  lead: { title: string; text: string; kpis: { value: string; label: string }[] };
  items: { icon: string; title: string; text: string }[];
  cta: { title: string; text: string; button: string; href: string };
}

interface Props {
  data: AmcData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function AmcSection({ data, variant, subtitleClass }: Props) {
  const { lead, cta } = data;

  return (
    <section id="amc" className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-[30px] lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col justify-between gap-7 rounded-2xl bg-[#132250] p-8 text-white/80">
            <div>
              <h3 className="text-[30px] font-normal leading-[1.25] tracking-[-0.01em] text-white">{lead.title}</h3>
              <p className="mt-3.5 text-[17px] leading-[1.6]">{lead.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-[18px] border-t border-white/20 pt-[22px]">
              {lead.kpis.map((k) => (
                <div key={k.label}>
                  <b className="block text-[26px] font-medium tracking-[-0.03em] text-white">{k.value}</b>
                  <span className="text-[14px]">{k.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {data.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 rounded-2xl bg-[#F6F6F6] p-6">
                <span className="grid size-[58px] place-items-center rounded-lg bg-[#EEF5FF] text-primary">
                  <LucideIcon name={item.icon} className="size-[26px]" strokeWidth={1} />
                </span>
                <h3 className="mt-1 text-[21px] font-medium leading-[1.5] tracking-[-0.03em] text-primary">{item.title}</h3>
                <p className="text-16 !leading-[1.6] text-paragraph">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-[#D3D3D3] px-7 py-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="mb-1.5 text-24 font-medium tracking-[-0.03em] text-primary">{cta.title}</h3>
            <p className="max-w-[70ch] text-[17px] text-paragraph">{cta.text}</p>
          </div>
          <CustomButton text={cta.button} icon="ArrowRight" bgButton="bg-primary" dark href={cta.href} className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
