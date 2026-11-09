/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface CategoryGroup {
  image: string;
  alt: string;
  tag: string;
  title: string;
  lead: string;
  categories: { title: string; text: string }[];
}

export interface CategoryGroupsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: CategoryGroup[];
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
}

// Product range as rows: one image per group, its categories listed beside it
export default function CategoryGroups({ data, variant, subtitleClass }: Props) {
  const { platforms } = data;

  return (
    <section id="range" className="bg-white py-82 rounded-2xl scroll-mt-4">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3">
          {data.data.map((group, i) => (
            <article
              key={i}
              className="grid overflow-hidden rounded-2xl border border-[#efefef] bg-white lg:grid-cols-[340px_1fr]"
            >
              <div className="aspect-[390/246] bg-[#f3f3f3] lg:aspect-auto lg:h-full">
                <img src={group.image} alt={group.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>

              <div className="flex min-w-0 flex-col gap-2.5 px-6 pb-[26px] pt-[22px] lg:px-8 lg:py-7">
                <span className="self-start rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">
                  {group.tag}
                </span>
                <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">{group.title}</h3>
                <p className="text-[15px] text-paragraph">{group.lead}</p>

                <ul className="mt-2 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                  {group.categories.map((cat) => (
                    <li
                      key={cat.title}
                      className="grid min-w-0 gap-1 rounded-xl border border-[#e3e8f0] bg-[#fcfcfc] px-4 py-3.5"
                    >
                      <h4 className="text-[16px] font-medium tracking-[-0.02em] text-primary">{cat.title}</h4>
                      <p className="text-[14px] leading-normal text-paragraph">{cat.text}</p>
                    </li>
                  ))}
                </ul>
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
