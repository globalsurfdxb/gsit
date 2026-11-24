/* eslint-disable @next/next/no-img-element */
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { Check } from "lucide-react";

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
  checks?: string[]; // tick list under the copy (MAXHUB pages); the photo then fills an equal-width column
  imagePosition?: string; // object-position of that photo, e.g. "45% center"
}

// Copy on the left; on the right either a stat grid (facts) or a product-in-room photo
export default function OverviewBlock({ data }: { data: OverviewData }) {
  const hasFacts = !!data.facts?.length;
  const split = !!data.checks?.length;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div
        className={`container grid items-center gap-7 xl:gap-12 items-start ${
          hasFacts
            ? "lg:grid-cols-2 lg:gap-14"
            : split
              ? "lg:grid-cols-2   2xl:gap-16"
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
          {split && (
            <ul className="mt-1 grid gap-3">
              {data.checks!.map((c) => (
                <li key={c} className="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-2.5 text-16 text-[#111]">
                  <span className="grid size-7 place-items-center rounded-full bg-[#eef5ff] text-primary">
                    <Check strokeWidth={1} className="size-4" aria-hidden />
                  </span>
                  <span className="pt-0.5">{c}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {hasFacts ? (
          <div className="grid grid-cols-2 gap-3">
            {data.facts!.map((fact) => (
              <div
                key={fact.label}
                className={`rounded-2xl p-4 lg:p-[22px] ${
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
        ) : split && data.image ? (
          <div className="aspect-[4/3] lg:aspect-[6/7] xl:aspect-[7/6]  2xl:aspect-auto overflow-hidden rounded-2xl bg-gradient-to-b from-[#f2f2f9] to-[#f3f6ff]  lg:min-h-[420px]">
            <img
              src={data.image}
              alt={data.alt ?? ""}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: data.imagePosition ?? "center" }}
            />
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