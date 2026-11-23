/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface Family {
  id: string; // anchor used by the jump links
  jumpLabel: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  lead: string;
  categories: { title: string; text: string }[];
  foot?: { label: string; chips: string[] }; // e.g. "Ranges:" with Meraki, Catalyst...
  link: { text: string; href: string };
}

export interface FamilyGroupsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: Family[];
  platforms?: { strong: string; text: string; chips: string[] };
}

interface Props {
  data: FamilyGroupsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Cisco product families: jump links, then two-up cards with a photo on top,
// the family's categories, a chip row and a link to the category page
export default function FamilyGroups({ data, variant, subtitleClass }: Props) {
  const { platforms } = data;

  return (
    <section id="range" className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <nav aria-label="Cisco product families" className="mt-5 flex flex-wrap gap-2">
          {data.data.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="rounded-3xl border border-[#ebf2fd] bg-[#eef5ff] px-3.5 py-1.5 text-[14px] text-primary transition-colors duration-300 hover:border-primary"
            >
              {f.jumpLabel}
            </a>
          ))}
        </nav>

        <div className="mt-52 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {data.data.map((f) => (
            <article
              key={f.id}
              id={f.id}
              className="group flex scroll-mt-4 flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#c7d9fb] hover:shadow-[0_16px_24px_0_#114a9f24]"
            >
              <div className="aspect-video overflow-hidden border-b border-[#efefef] bg-[#eef3f8]">
                <img
                  src={f.image}
                  alt={f.alt}
                  width={800}
                  height={450}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-2.5 px-6 pb-[26px] pt-6 xl:px-8 xl:pb-[30px] xl:pt-7">
                <span className="self-start rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">
                  {f.tag}
                </span>
                <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">{f.title}</h3>
                <p className="text-[15px] text-paragraph">{f.lead}</p>

                <ul className="mt-2 grid gap-2 xl:grid-cols-2">
                  {f.categories.map((cat) => (
                    <li
                      key={cat.title}
                      className="grid min-w-0 gap-1 rounded-xl border border-[#e3e8f0] bg-[#fcfcfc] px-4 py-3.5"
                    >
                      <h4 className="text-[16px] font-medium tracking-[-0.02em] text-primary">{cat.title}</h4>
                      <p className="text-[14px] leading-normal text-paragraph">{cat.text}</p>
                    </li>
                  ))}
                </ul>

                {f.foot && (
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[14px]">
                    <b className="font-medium text-[#111]">{f.foot.label}</b>
                    {f.foot.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[13px] text-primary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={f.link.href}
                  className="group/link mt-auto inline-flex items-center gap-1.5 self-start border-b border-transparent pt-3.5 text-[15px] font-medium text-primary transition-colors hover:border-primary"
                >
                  {f.link.text}
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={1}
                    className="size-[18px] transition-transform delay-200 duration-300 group-hover/link:translate-x-[3px]"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {platforms && (
          <div className="mt-5 grid gap-4 rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] p-5 lg:grid-cols-[260px_1fr] lg:items-center lg:px-7 lg:py-6">
            <p className="text-[15px] text-paragraph">
              <strong className="font-medium text-[#111]">{platforms.strong}</strong> {platforms.text}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {platforms.chips.map((c) => (
                <span key={c} className="rounded-lg bg-white px-4 py-2.5 text-[15px] font-medium tracking-[-0.01em] text-[#111]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
