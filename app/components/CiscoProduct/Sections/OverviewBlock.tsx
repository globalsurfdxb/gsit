/* eslint-disable @next/next/no-img-element */
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface OverviewFact {
  value: string;
  label: string;
  dark?: boolean;
}

export interface OverviewData {
  tag: string;
  heading: string;
  highlightLast: number;
  paragraphs: string[];
  image?: string;
  alt?: string;
  facts?: OverviewFact[];
}

// Copy on the left; on the right either a stat grid (facts) or a product-in-room photo
export default function OverviewBlock({ data }: { data: OverviewData }) {
  const hasFacts = !!data.facts?.length;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div
        className={`container grid items-center gap-7 xl:gap-12 ${
          hasFacts
            ? "lg:grid-cols-2 lg:gap-14"
            : "xl:grid-cols-[minmax(0,1fr)_minmax(0,460px)]"
        }`}
      >
        <div className="grid min-w-0 gap-4">
          <SectionTag text={data.tag} />
          <HeadingTag
            as="h2"
            text={data.heading}
            highlightLast={data.highlightLast}
            className="home-banner-heading !text-[clamp(26px,1.7vw_+_12px,44px)] !leading-[1.2]"
          />
          {data.paragraphs.map((p) => (
            <p key={p} className="max-w-[78ch] text-18 text-paragraph">
              {p}
            </p>
          ))}
        </div>

        {hasFacts ? (
          <div className="grid grid-cols-2 gap-3">
            {data.facts!.map((fact) => (
              <div
                key={fact.label}
                className={`rounded-2xl p-5 lg:p-[22px] ${
                  fact.dark ? "bg-primary" : "bg-bgF5F9FC"
                }`}
              >
                <p
                  className={`text-24-medium   !leading-[1.15] ${
                    fact.dark ? "text-white" : "text-primary"
                  }`}
                >
                  {fact.value}
                </p>
                <p
                  className={`mt-2 text-16 !leading-[1.5] ${
                    fact.dark ? "text-[#BFD9FF]" : "text-paragraph"
                  }`}
                >
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          data.image && (
            <img
              src={data.image}
              alt={data.alt ?? ""}
              loading="lazy"
              className="h-auto w-full max-w-[532px] rounded-2xl xl:justify-self-end"
            />
          )
        )}
      </div>
    </section>
  );
}