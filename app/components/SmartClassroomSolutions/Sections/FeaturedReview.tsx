import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface FeaturedReviewData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  feature: {
    clientLabel: string;
    client: string;
    projectLabel: string;
    project: string;
    chips: string[];
    milestonesLabel: string;
    milestones: string[];
    quote: string[];
    highlight?: string; // sentence in the quote to underline
    name: string;
    initials: string;
    org: string;
  };
  ratings: string[];
}

interface Props {
  data: FeaturedReviewData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const label = "mb-2 block text-[12px] uppercase tracking-[0.08em] text-white/60";

function Quote({ text, highlight }: { text: string; highlight?: string }) {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark className="bg-[linear-gradient(transparent_58%,#DCE8FA_58%)] text-primary">{highlight}</mark>
      {text.slice(at + highlight.length)}
    </>
  );
}

export default function FeaturedReview({ data, variant, subtitleClass }: Props) {
  const f = data.feature;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <figure className="mt-52 grid overflow-hidden rounded-2xl border border-[#D3D3D3] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
          <div className="flex flex-col gap-[26px] bg-primary px-5 py-6 text-white/85 md:p-8">
            <div>
              <span className={label}>{f.clientLabel}</span>
              <b className="block text-[28px] font-normal leading-[1.2] tracking-[-0.01em] text-white">{f.client}</b>
            </div>
            <div className="border-t border-white/20 pt-[22px]">
              <span className={label}>{f.projectLabel}</span>
              <p className="mb-3 text-[19px] text-white">{f.project}</p>
              <div className="flex flex-wrap gap-2">
                {f.chips.map((c) => (
                  <span key={c} className="rounded-full border border-white/35 px-3 py-1 text-[13px] text-white">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/20 pt-[22px]">
              <span className={label}>{f.milestonesLabel}</span>
              <ol className="grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-1">
                {f.milestones.map((m, i) => (
                  <li key={m} className="relative flex items-center gap-3 py-[5px] text-[15px] text-white">
                    <i className="relative z-[1] size-2.5 shrink-0 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.2)]" />
                    {/* Connector line between milestones (single column only) */}
                    {i < f.milestones.length - 1 && (
                      <span aria-hidden="true" className="absolute left-[4.5px] top-[19px] hidden h-[calc(100%-4px)] w-px bg-white/35 lg:block" />
                    )}
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-[22px] bg-[#F6F6F6] px-5 py-6 md:px-11 md:py-10">
            <svg aria-hidden="true" viewBox="0 0 48 36" className="h-[33px] w-11 text-[#DAE7F0]">
              <path
                fill="currentColor"
                d="M0 36V22C0 9.5 6.5 2 19 0l2 5c-7 2-10.5 6.5-11 12h9v19zm27 0V22C27 9.5 33.5 2 46 0l2 5c-7 2-10.5 6.5-11 12h9v19z"
              />
            </svg>
            <blockquote className="grid gap-4">
              {f.quote.map((q) => (
                <p key={q} className="max-w-[62ch] text-[clamp(19px,1.5vw,23px)] leading-[1.55] tracking-[-0.015em] text-[#2b2b2b]">
                  <Quote text={q} highlight={f.highlight} />
                </p>
              ))}
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-4 border-t border-[#D3D3D3] pt-[22px]">
              <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-18 font-medium tracking-[0.02em] text-primary">
                {f.initials}
              </span>
              <span>
                <b className="block text-[20px] font-medium tracking-[-0.02em] text-black">{f.name}</b>
                <span className="block text-16 text-paragraph">{f.org}</span>
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="mt-14 flex flex-wrap gap-4">
          {data.ratings.map((r) => (
            <div key={r} className="rounded-full border border-[#D3D3D3] px-6 py-3 text-18 text-primary">
              {r}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
