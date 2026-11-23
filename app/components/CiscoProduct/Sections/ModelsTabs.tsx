"use client";

import { useId, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionHeader, {
  type SectionHeaderData,
} from "@/app/components/common/Heading/SectionHeader";

export interface ModelItem {
  name: string;
  desc: string;
  points: string[];
  enquireLabel?: string;
  href?: string; // defaults to "#enquiry"
  tag?: string; // small chip above the name, e.g. "Also as a service"
  secondary?: { label: string; href?: string }; // optional second link under the main one
}

export interface ModelGroup {
  label: string; // tab / accordion title
  title?: string; // heading inside the panel (omit for a single group with no heading)
  description?: string;
  columns?: 2; // 2 = keep two cards per row on wide screens (default goes to 4)
  models: ModelItem[];
}

export interface ModelsData extends SectionHeaderData {
  groups: ModelGroup[];
}

interface ModelsTabsProps {
  data: ModelsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  onEnquire?: (modelName: string) => void;
}

function Panel({
  group,
  onEnquire,
}: {
  group: ModelGroup;
  onEnquire?: (modelName: string) => void;
}) {
  return (
    <>
      {(group.title || group.description) && (
        <div className="mb-4 grid gap-1.5">
          {group.title && (
            <h3 className="text-[20px] font-medium tracking-[-0.02em] text-primary">
              {group.title}
            </h3>
          )}
          {group.description && (
            <p className="max-w-[72ch] text-[15px] text-paragraph">
              {group.description}
            </p>
          )}
        </div>
      )}

      <div className={`grid gap-3 md:grid-cols-2 ${group.columns === 2 ? "" : "xl:grid-cols-4"}`}>
        {group.models.map((m) => (
          <article
            key={m.name}
            className="flex flex-col gap-2.5 rounded-2xl border border-[#e5e5e5] bg-white p-5 transition-colors duration-300 hover:border-[#A7CAFF]"
          >
            {m.tag && (
              <span className="self-start rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">
                {m.tag}
              </span>
            )}
            <h4 className="text-[18px] font-medium tracking-[-0.02em] text-primary">
              {m.name}
            </h4>
            <p className="text-[14.5px] text-paragraph">{m.desc}</p>

            <ul className="grid gap-[7px] border-t border-[#e5e5e5] pt-3 text-[14px] text-paragraph">
              {m.points.map((p) => (
                <li key={p} className="grid grid-cols-[12px_1fr] gap-2">
                  <span className="mt-[9px] h-[5px] w-[5px] bg-primary" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={m.href ?? "#enquiry"}
              data-model={m.name}
              onClick={() => onEnquire?.(m.name)}
              className="mt-auto inline-flex items-center gap-1.5 pt-1.5 text-[14.5px] font-medium text-primary hover:underline"
            >
              {m.enquireLabel ?? "Enquire about this model"}
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </a>
            {m.secondary && (
              <a
                href={m.secondary.href ?? "#enquiry"}
                data-model={m.name}
                onClick={() => onEnquire?.(m.name)}
                className="self-start text-[14px] text-paragraph underline underline-offset-2 hover:text-primary"
              >
                {m.secondary.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  );
}

export default function ModelsTabs({
  data,
  variant = "subtitleBorder",
  subtitleClass,
  onEnquire,
}: ModelsTabsProps) {
  const uid = useId();
  const [tab, setTab] = useState(0); // desktop active tab
  const [open, setOpen] = useState<number | null>(0); // mobile open accordion item

  const { groups } = data;
  const hasTabs = groups.length > 1;

  if (!groups.length) return null;

  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52">
          {/* Single group: no tabs, no accordion, just the panel */}
          {!hasTabs ? (
            <Panel group={groups[0]} onEnquire={onEnquire} />
          ) : (
            <>
              {/* Desktop tab bar */}
              <div
                role="tablist"
                aria-label={data.heading}
                className="scrollbar-hide hidden gap-1 overflow-x-auto rounded-xl bg-bgF5F9FC p-1 md:flex"
              >
                {groups.map((g, i) => (
                  <button
                    key={g.label}
                    type="button"
                    role="tab"
                    id={`${uid}-t-${i}`}
                    aria-controls={`${uid}-p-${i}`}
                    aria-selected={tab === i}
                    tabIndex={tab === i ? 0 : -1}
                    onClick={() => setTab(i)}
                    className={`min-h-11 flex-1 cursor-pointer whitespace-nowrap rounded-[9px] px-4 py-2.5 text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      tab === i
                        ? "bg-white font-medium text-primary shadow-[0_1px_3px_rgb(17_34_80/0.12)]"
                        : "text-paragraph hover:text-primary"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              {/* Panels: accordion on mobile, tab panels on md+ */}
              <div className="grid gap-3 md:mt-5 md:block">
                {groups.map((g, i) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={g.label}
                      className="rounded-xl border border-[#e5e5e5] md:border-0 md:rounded-none"
                    >
                      {/* Mobile accordion header */}
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${uid}-p-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between px-4 py-4 text-left text-[17px] font-medium tracking-[-0.02em] text-primary md:hidden"
                      >
                        {g.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          strokeWidth={1.6}
                        />
                      </button>

                      <div
                        role="tabpanel"
                        id={`${uid}-p-${i}`}
                        aria-labelledby={`${uid}-t-${i}`}
                        className={`px-4 pb-4 md:px-0 md:pb-0 ${
                          isOpen ? "block" : "hidden"
                        } ${tab === i ? "md:block" : "md:hidden"}`}
                      >
                        <Panel group={g} onEnquire={onEnquire} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}