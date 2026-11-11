/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import SvgIcon from "./SvgIcon";
import { platformLogos } from "../shared";

export type PlatformKey = keyof typeof platformLogos;

export interface FeatureGridData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: { icon: string; title: string; description: string; highlight?: boolean }[];
  platforms?: { title: string; logos: PlatformKey[] }; // certified platform logos under the grid
}

interface Props {
  data: FeatureGridData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function FeatureGrid({ data, variant, subtitleClass }: Props) {
  const { platforms } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 md:grid-cols-2 min-[1100px]:grid-cols-3">
          {data.data.map((item) => (
            <article
              key={item.title}
              className={`flex min-w-0 flex-col gap-3.5 rounded-2xl border p-6 ${
                item.highlight ? "border-[#c7d9fb] bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff]" : "border-[#efefef] bg-[#fcfcfc]"
              }`}
            >
              <span className="grid size-11 place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                <SvgIcon markup={item.icon} className="size-5.5" />
              </span>
              <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{item.title}</h3>
              <p className="text-[15px] text-paragraph">{item.description}</p>
            </article>
          ))}
        </div>

        {platforms && (
          <div className="mt-5 grid items-center gap-4 rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,756px)] lg:py-7 lg:pl-[34px] lg:pr-[30px]">
            <h3 className="text-[clamp(19px,0.5vw_+_15px,22px)] font-medium text-[#111]">{platforms.title}</h3>
            <div
              className="grid overflow-hidden rounded-lg bg-white"
              style={{ gridTemplateColumns: `repeat(${platforms.logos.length}, minmax(0, 1fr))` }}
            >
              {platforms.logos.map((key, i) => {
                const logo = platformLogos[key];
                return (
                  <figure key={key} className={`grid h-16 place-items-center px-2 py-2 sm:h-20 sm:px-4 lg:h-[94px] ${i > 0 ? "border-l border-[#e3e8f0]" : ""}`}>
                    <img src={logo.src} alt={logo.alt} loading="lazy" className={`h-auto w-auto max-w-full ${logo.className}`} />
                  </figure>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
