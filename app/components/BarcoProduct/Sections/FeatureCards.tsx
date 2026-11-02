/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface FeatureCard {
  image: string;
  alt: string;
  title: string;
  text: string;
}

export interface FeatureDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  columns?: 2 | 3; // cards per row on wide screens, default 2
  data: FeatureCard[];
}

interface Props {
  data: FeatureDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function FeatureCards({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className={`mt-52 grid gap-3 md:grid-cols-2 ${data.columns === 3 ? "xl:grid-cols-3" : ""}`}>
          {data.data.map((f, i) => (
            <article
              key={i}
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white"
            >
              <img src={f.image} alt={f.alt} loading="lazy" className="aspect-[785/460] w-full object-cover" />
              <div className="grid gap-2 px-6 pb-6 pt-5">
                <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{f.title}</h3>
                <p className="text-[15px] text-paragraph">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
