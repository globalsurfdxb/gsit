/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

export interface CategoryGroupButton {
  text: string;
  href: string;
  dark?: boolean; // filled primary button; otherwise outline
}

export interface CategoryGroup {
  id?: string; // anchor for the jump links
  image?: string; // omit for a text-only card
  alt?: string;
  tag: string;
  title: string;
  lead: string;
  categories: { title: string; text: string }[];
  bestFor?: string[]; // "Best for:" chips under the categories
  buttons?: CategoryGroupButton[];
  featured?: boolean; // tinted card, e.g. an upgrades / replacement card
}

export interface CategoryGroupsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: CategoryGroup[];
  imageFit?: "contain"; // product shots: whole image on white, instead of filling the box
  layout?: "rows" | "cards"; // rows (default): image beside text; cards: two columns, photo on top
  jump?: { label: string; href: string }[]; // quick links to each group
  platforms?: {
    strong: string;
    text: string;
    chips: string[];
  };
}

interface Props {
  data: CategoryGroupsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  children?: ReactNode; // extra content inside the section, after the groups
}

// Product range grouped by use: one image per group, its categories listed with it
export default function CategoryGroups({ data, variant, subtitleClass, children }: Props) {
  const { platforms } = data;
  const contain = data.imageFit === "contain";
  const cards = data.layout === "cards";

  return (
    <section id="range" className="bg-white py-82 rounded-2xl scroll-mt-4">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {data.jump && (
          <nav aria-label={`${data.tag} groups`} className="mt-5 flex flex-wrap gap-2">
            {data.jump.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="rounded-full border border-[#ebf2fd] bg-[#eef5ff] px-3.5 py-1.5 text-[14px] text-primary transition-colors duration-300 hover:border-primary"
              >
                {j.label}
              </a>
            ))}
          </nav>
        )}

        <div className={`mt-52 grid gap-3 ${cards ? "lg:grid-cols-2 lg:gap-4" : ""}`}>
          {data.data.map((group, i) => (
            <article
              key={i}
              id={group.id}
              className={`group/card scroll-mt-4 overflow-hidden rounded-2xl border ${
                group.featured ? "border-[#c7d9fb] bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff]" : "border-[#efefef] bg-white"
              } ${
                cards
                  ? "flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-[#c7d9fb] hover:shadow-[0_16px_24px_0_#114a9f24]"
                  : `grid ${group.image ? "lg:grid-cols-[340px_1fr]" : ""}`
              }`}
            >
              {group.image &&
                (cards ? (
                  <div className="aspect-[4/3] overflow-hidden border-b border-[#efefef] bg-white">
                    <img
                      src={group.image}
                      alt={group.alt ?? ""}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
                    />
                  </div>
                ) : (
                  <div className={`aspect-[390/246] lg:aspect-auto lg:h-full ${contain ? "bg-white" : "bg-[#f3f3f3]"}`}>
                    <img
                      src={group.image}
                      alt={group.alt ?? ""}
                      loading="lazy"
                      className={`h-full w-full ${contain ? "object-contain p-4 lg:max-h-[420px]" : ""}`}
                    />
                  </div>
                ))}

              <div className={`flex min-w-0 flex-col gap-2.5 p-4 lg:px-8 lg:py-7 ${cards ? "flex-1 md:p-6 xl:px-8" : ""}`}>
                <span className="self-start rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">
                  {group.tag}
                </span>
                <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">{group.title}</h3>
                <p className="text-16 text-paragraph">{group.lead}</p>

                <ul className={`mt-2 grid gap-2.5 ${cards ? "xl:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3"}`}>
                  {group.categories.map((cat) => (
                    <li
                      key={cat.title}
                      className={`grid min-w-0 gap-1 rounded-xl border border-[#e3e8f0] px-4 py-3.5 ${
                        group.featured ? "bg-white" : "bg-[#fcfcfc]"
                      }`}
                    >
                      <h4 className="text-[16px] font-medium tracking-[-0.02em] text-primary">{cat.title}</h4>
                      <p className="text-[14px] leading-normal text-paragraph">{cat.text}</p>
                    </li>
                  ))}
                </ul>

                {group.bestFor && (
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[14px] text-paragraph">
                    <b className="font-medium text-[#111]">Best for:</b>
                    {group.bestFor.map((b) => (
                      <span key={b} className="rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[13px] text-primary">
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                {group.buttons && (
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-4">
                    {group.buttons.map((b) => (
                      <CustomButton
                        key={b.text}
                        text={b.text}
                        href={b.href}
                        dark={!!b.dark}
                        bgButton={b.dark ? "bg-primary" : "bg-white"}
                        icon={b.dark ? "/assets/images/icons/fullarrow.svg" : ""}
                      />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {platforms && (
          <div className="mt-5 grid gap-4 rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] p-5 lg:grid-cols-[260px_1fr] lg:items-center lg:px-7 lg:py-6">
            <p className="text-16 text-paragraph">
              <strong className="font-medium text-[#111]">{platforms.strong}</strong> {platforms.text}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {platforms.chips.map((c) => (
                <span key={c} className="rounded-lg bg-white px-4 py-2.5 text-16 font-medium tracking-[-0.01em] text-[#111]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
