import { Check } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface CapabilitiesData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: { cap: string; title: string; text: string; outcome: string }[];
  platformsLabel: string;
  platforms: string[];
}

interface Props {
  data: CapabilitiesData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function Capabilities({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-3.5 rounded-2xl border border-[#D3D3D3] p-[26px] transition-colors duration-300 hover:border-primary"
            >
              <span className="text-[14px] uppercase tracking-[0.06em] text-paragraph">{c.cap}</span>
              <h3 className="text-24 font-medium leading-[1.3] tracking-[-0.03em] text-primary">{c.title}</h3>
              <p className="text-[17px] leading-[1.55] text-paragraph">{c.text}</p>
              {/* Outcome sits at the bottom of the card */}
              <div className="mt-auto flex items-start gap-2.5 border-t border-[#D3D3D3] pt-3.5 text-16 text-[#2b2b2b]">
                <Check strokeWidth={1} className="mt-[3px] size-[18px] shrink-0 text-primary" />
                {c.outcome}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl bg-[#F6F4F2] px-[26px] py-[22px] lg:flex-row lg:items-center">
          <span className="shrink-0 text-[14px] uppercase tracking-[0.06em] text-paragraph">{data.platformsLabel}</span>
          <ul className="flex flex-wrap gap-2.5">
            {data.platforms.map((p) => (
              <li key={p} className="rounded-full border border-[#D3D3D3] bg-white px-4 py-2 text-[15px] text-primary">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
