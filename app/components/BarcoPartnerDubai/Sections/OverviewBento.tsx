/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface BentoTile {
  variant: "photo" | "dark" | "light";
  image?: string;
  alt?: string;
  big?: string;
  logo?: { src: string; alt: string }; // brand lockup shown at the top of a light/dark tile
  title: string;
  dim: string;
  text: string[];
}

export interface BentoData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: BentoTile[];
}

interface Props {
  data: BentoData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const LIGHT = "bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff]";
const DARK = "bg-linear-[143.49deg,#1a2e6e_3.29%,#2f5fd6_94.24%]";

export default function OverviewBento({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 lg:grid-cols-[1.25fr_1fr_1fr] lg:auto-rows-[minmax(300px,auto)]">
          {data.data.map((tile, i) => {
            const isPhoto = tile.variant === "photo";
            const isDark = tile.variant === "dark";

            return (
              <article
                key={i}
                className={`min-w-0 rounded-2xl ${
                  isPhoto
                    ? "overflow-hidden border border-[#efefef] bg-white"
                    : `flex flex-col justify-between gap-5 p-6 ${isDark ? DARK : LIGHT}`
                }`}
              >
                {isPhoto && tile.image && (
                  <img
                    src={tile.image}
                    alt={tile.alt ?? ""}
                    loading="lazy"
                    className="aspect-[991/600] w-full object-cover"
                  />
                )}

                {tile.logo && (
                  <img src={tile.logo.src} alt={tile.logo.alt} loading="lazy" className="h-auto w-[200px] self-start" />
                )}

                {tile.big && (
                  <p className="text-[clamp(40px,5vw,64px)] font-normal leading-none tracking-[-0.04em] text-white">
                    {tile.big}
                  </p>
                )}

                <div className={isPhoto ? "grid gap-2 px-6 pb-6 pt-5" : "flex flex-col justify-between h-full gap-2.5"}>
                  <h3
                    className={`text-[20px] font-medium leading-[1.4] tracking-[-0.03em] lg:text-[24px] lg:leading-[1.35] ${
                      isDark ? "text-white" : "text-[#111]"
                    }`}
                  >
                    {tile.title}
                    <span className={`block ${isDark ? "opacity-70" : "opacity-50"}`}>{tile.dim}</span>
                  </h3>
                  {tile.text.map((t, j) => (
                    <p key={j} className={`text-[15px] ${isDark ? "text-white/80" : "text-paragraph"}`}>
                      {t}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
