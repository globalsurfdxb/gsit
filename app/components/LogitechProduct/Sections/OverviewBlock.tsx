/* eslint-disable @next/next/no-img-element */
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface OverviewData {
  tag: string;
  heading: string;
  highlightLast: number;
  paragraphs: string[];
  image: string;
  alt: string;
}

// Copy on the left, a product-in-room photo on the right
export default function OverviewBlock({ data }: { data: OverviewData }) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container grid items-center gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(0,460px)] xl:gap-12">
        <div className="grid min-w-0 gap-4">
          <SectionTag text={data.tag} />
          <HeadingTag
            as="h2"
            text={data.heading}
            highlightLast={data.highlightLast}
            className="home-banner-heading !text-[clamp(26px,1.7vw_+_12px,44px)] !leading-[1.2]"
          />
          {data.paragraphs.map((p) => (
            <p key={p} className="max-w-[78ch] text-18 text-paragraph">{p}</p>
          ))}
        </div>
        <img src={data.image} alt={data.alt} loading="lazy" className="h-auto w-full max-w-[532px] rounded-2xl xl:justify-self-end" />
      </div>
    </section>
  );
}
