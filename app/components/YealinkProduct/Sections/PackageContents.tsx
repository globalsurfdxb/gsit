/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface PackageDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: { image: string; title: string; text?: string }[];
}

interface Props {
  data: PackageDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function PackageContents({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-2 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {data.items.map((it) => (
            <article key={it.title} className="overflow-hidden rounded-2xl border border-[#efefef] bg-white">
              <div className="grid aspect-[4/3] place-items-center border-b border-[#efefef] p-4">
                <img src={it.image} alt={it.title} loading="lazy" className="max-h-[110px] w-auto object-contain" />
              </div>
              <div className="grid gap-1 px-4 pb-4 pt-3">
                <h3 className="text-[15px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{it.title}</h3>
                {it.text && <p className="text-[14px] text-paragraph">{it.text}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
