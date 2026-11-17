"use client";

/* eslint-disable @next/next/no-img-element */
import { useId, useState } from "react";
import SectionHeader, {
  type SectionHeaderData,
} from "@/app/components/common/Heading/SectionHeader";

export interface JourneyStep {
  label: string; // shown next to the number when active, e.g. "Arrival"
  title?: string; // defaults to label
  experience: string; // "What the visitor experiences"
  system: string; // "What the system does"
  image: string;
  alt: string;
}

export interface JourneyTabsData extends SectionHeaderData {
  steps: JourneyStep[];
  note?: string; // caption under the block
  experienceLabel?: string;
  systemLabel?: string;
  momentLabel?: string; // e.g. "Moment"
}

interface Props {
  data: JourneyTabsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function JourneyTabs({
  data,
  variant = "default",
  subtitleClass,
}: Props) {
  const uid = useId();
  const [active, setActive] = useState(0);
  const { steps } = data;

  if (!steps.length) return null;

  const step = steps[active];
  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52 grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 3xl:grid-cols-[860px_1fr] 3xl:gap-[52px]">
          {/* Image: all steps stacked, only the active one visible */}
          <div className="relative aspect-[860/575] w-full overflow-hidden bg-[#E9E9EC]">
            {steps.map((s, i) => (
              <img
                key={s.label}
                src={s.image}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                aria-hidden={active !== i}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Tabs + content */}
          <div className="min-w-0">
            <div
              role="tablist"
              aria-label={data.heading.replace(/\n/g, " ")}
              className="scrollbar-hide flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full bg-white p-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {steps.map((s, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={s.label}
                    type="button"
                    role="tab"
                    id={`${uid}-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls={`${uid}-panel`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight")
                        setActive((active + 1) % steps.length);
                      if (e.key === "ArrowLeft")
                        setActive((active - 1 + steps.length) % steps.length);
                    }}
                    className={`flex h-[54px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-18 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-6 ${
                      isActive
                        ? "bg-[#E5E5E8] font-medium text-primary"
                        : "text-paragraph hover:text-primary"
                    }`}
                  >
                    <span>{pad(i)}</span>
                    {isActive && <span>{s.label}</span>}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`${uid}-panel`}
              aria-labelledby={`${uid}-tab-${active}`}
              className="mt-6 lg:pl-4"
            >
              <h3 className="text-24-medium tracking-[-3%] text-primary">
                {step.title ?? step.label}
              </h3>
              <p className="mt-1 text-18 text-textgray">
                {data.momentLabel ?? "Moment"} {active + 1} of {steps.length}
              </p>

              <div className="mt-8">
                <h4 className="text-18-medium text-paragraph">
                  {data.experienceLabel ?? "What the visitor experiences"}
                </h4>
                <p className="mt-3 max-w-[48ch] text-18 text-paragraph">
                  {step.experience}
                </p>
              </div>

              <hr className="my-8 border-t border-[#D3D3D3]" />

              <div>
                <h4 className="text-18-medium text-paragraph">
                  {data.systemLabel ?? "What the system does"}
                </h4>
                <p className="mt-3 max-w-[48ch] text-18 text-paragraph">
                  {step.system}
                </p>
              </div>
            </div>
          </div>
        </div>

        {data.note && (
          <p className="mt-8 text-18 text-paragraph">{data.note}</p>
        )}
      </div>
    </section>
  );
}