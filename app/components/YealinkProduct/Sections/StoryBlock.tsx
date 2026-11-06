/* eslint-disable @next/next/no-img-element */
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface StoryDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  paragraphs: string[];
  image: string;
  alt: string;
}

// Copy on the left, a room photo on the right
export default function StoryBlock({ data }: { data: StoryDataType }) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container grid items-center gap-7 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionTag text={data.tag} />
          <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} className="home-banner-heading mt-4 !text-[clamp(26px,1.6vw_+_14px,40px)] !leading-[1.2]" />
          {data.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-18 text-paragraph">{p}</p>
          ))}
        </div>
        <img src={data.image} alt={data.alt} loading="lazy" className="aspect-video h-auto w-full rounded-2xl object-cover" />
      </div>
    </section>
  );
}
