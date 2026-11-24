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
  // A card has an icon, or a product image (kit cards, e.g. MAXHUB capture systems) with an optional list such as "In its box"
  data: {
    icon?: string;
    image?: string;
    alt?: string;
    title: string;
    description: string;
    highlight?: boolean;
    list?: { label: string; items: string[] };
  }[];
  platforms?: { title: string; logos: PlatformKey[] }; // certified platform logos under the grid
  columns?: 2 | 4; // two or four cards per row on wide screens (default three)
  diagram?: { svg: string; label: string }; // inline SVG drawing above the cards; label is its text description
  note?: { title: string; text: string }; // highlight box under the cards
}

interface Props {
  data: FeatureGridData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function FeatureGrid({ data, variant, subtitleClass }: Props) {
  const { platforms, diagram, note } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {diagram && (
          // Wide drawing: scrolls sideways on phones instead of shrinking the labels
          <div
            role="img"
            aria-label={diagram.label}
            className="mt-52 overflow-x-auto rounded-2xl border border-[#efefef] bg-gradient-to-b from-[#f2f2f9] to-[#f3f6ff] p-[clamp(12px,2vw,28px)] [&_svg]:block [&_svg]:h-auto [&_svg]:w-full [&_svg]:min-w-[680px]"
            dangerouslySetInnerHTML={{ __html: diagram.svg }}
          />
        )}

        <div
          className={`${diagram ? "mt-3" : "mt-52"} grid gap-3 md:grid-cols-2 ${
            data.columns === 4 ? "min-[1100px]:grid-cols-4" : data.columns === 2 ? "" : "min-[1100px]:grid-cols-3"
          }`}
        >
          {data.data.map((item) =>
            item.image ? (
              <article key={item.title} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white">
                <div className={`relative ${data.columns === 2 ? "aspect-[16/7]" : "aspect-video"} border-b border-[#efefef] bg-gradient-to-b from-[#f2f2f9] to-[#f3f6ff]`}>
                  <img
                    src={item.image}
                    alt={item.alt ?? ""}
                    loading="lazy"
                    className="absolute left-[10%] top-[12%] h-[76%] w-[80%] object-contain mix-blend-multiply"
                  />
                </div>
                <div className="grid content-start gap-2.5 px-6 pb-6 pt-[22px]">
                  <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{item.title}</h3>
                  <p className="text-16 text-paragraph">{item.description}</p>
                  {item.list && (
                    <>
                      <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.06em] text-primary">{item.list.label}</p>
                      <ul className="grid gap-1.5 text-[14.5px] text-paragraph">
                        {item.list.items.map((li) => (
                          <li key={li} className="grid grid-cols-[14px_1fr] gap-2.5">
                            <i aria-hidden="true" className="mt-[9px] size-1.5 bg-primary" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>
            ) : (
            <article
              key={item.title}
              className={`flex min-w-0 flex-col gap-3.5 rounded-2xl border p-6 ${
                item.highlight ? "border-[#efefef] bg-[#fcfcfc]" : "border-[#efefef] bg-[#fcfcfc]"
              }`}
            >
              <span className="grid size-11 place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                <SvgIcon markup={item.icon ?? ""} className="size-5.5" />
              </span>
              <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{item.title}</h3>
              <p className="text-16 text-paragraph">{item.description}</p>
            </article>
            ),
          )}
        </div>

        {note && (
          <div className="mt-3 grid items-center gap-4 rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] p-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-[clamp(40px,5vw,80px)] lg:px-[30px] lg:py-[22px]">
            <h3 className="text-[clamp(19px,0.5vw_+_15px,22px)] font-medium text-[#111] lg:whitespace-nowrap">{note.title}</h3>
            <p className="text-16 text-paragraph">{note.text}</p>
          </div>
        )}

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
