"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";

export interface RoomFeature {
  icon: string; // Lucide icon name in PascalCase, e.g. "MonitorUp"
  title: string;
  text: string;
}

export interface RoomScenario {
  title: string;
  text: string;
  support: string;
}

export interface RoomItem {
  id: string;
  tab: string;
  people: string;
  label: string;
  title: string[]; // one entry per line
  description: string;
  idealFor: string;
  image: string;
  imageAlt: string;
  features: RoomFeature[];
  usedTitle: string;
  usedText?: string;
  scenarios: RoomScenario[];
}

export interface RoomConfigTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  rooms: RoomItem[];
  ctaText: string;
  ctaLink: string;
  footNote: string;
}

interface RoomConfigTabsProps {
  data: RoomConfigTabsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

/* ---------- Shared panel content (used by tabs and accordion) ---------- */
function RoomPanel({
  room,
  ctaText,
  ctaLink,
}: {
  room: RoomItem;
  ctaText: string;
  ctaLink: string;
}) {
  return (
    <>
      {/* Overview */}
      <div className="grid grid-cols-1 items-center gap-6 pt-6 lg:grid-cols-2 lg:gap-12 2xl:grid-cols-[auto_823px] 3xl:gap-[82px]">
        <div>
          <p className="text-18 text-paragraph">{room.label}</p>

          <h3 className="mt-4 text-primary text-32 font-normal tracking-[-2%]">
            {room.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < room.title.length - 1 && <br className="hidden md:block" />}
                {i < room.title.length - 1 && <span className="md:hidden"> </span>}
              </span>
            ))}
          </h3>

          <p className="mt-3 max-w-[63ch] text-18 text-paragraphlte lg:mt-4">
            {room.description}
          </p>

          <div className="mt-5 border-l-2 border-primary pl-4 lg:mt-6">
            <p className="text-18 text-paragraph">Ideal for</p>
            <p className="mt-1 text-18 text-primary">{room.idealFor}</p>
          </div>

          <div className="mt-6 xl:mt-7.5">
            <CustomButton
              text={ctaText}
              icon="/assets/images/icons/fullarrow.svg"
              bgButton="bg-primary "
              dark={true}
              href={ctaLink}
            />
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={room.image}
            alt={room.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Feature cards */}
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:mt-8">
        {room.features.map((feature, i) => (
          <div key={i} className="flex h-full gap-4 rounded-2xl bg-[#fcfcfc] p-4">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-[#EEF5FF]">
              <LucideIcon name={feature.icon} className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-18 font-normal text-paragraph">{feature.title}</h4>
              <p className="mt-1 text-17 text-paragraphlte">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How this room is used */}
      <div className="mt-4 lg:mt-6">
        <p className="text-18 text-paragraph">How this room is used</p>
        <h3 className="mt-4 text-primary text-32 font-medium tracking-[-2%] lg:mt-6">
          {room.usedTitle}
        </h3>
        {room.usedText && <p className="mt-4 text-18 text-paragraph">{room.usedText}</p>}
      </div>

      {/* Scenarios */}
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3 lg:mt-6">
        {room.scenarios.map((scenario, i) => (
          <article
            key={i}
            className="flex h-full flex-col rounded-2xl border border-[#efefef] bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-4 pb-5 transition-all duration-300 hover:border-[#c7d9fb] hover:shadow-[0_12px_30px_-16px_rgba(17,74,159,0.2)]"
          >
            <p className="text-18 font-medium !leading-[1.778] text-paragraph">
              Scenario {String(i + 1).padStart(2, "0")}
            </p>
            <h4 className="mt-3 text-18 font-medium !leading-[1.778] text-primary lg:mt-4">
              {scenario.title}
            </h4>
            <p className="mt-3 text-18 text-paragraphlte lg:mt-4">{scenario.text}</p>

            <div className="mt-auto pt-4">
              <p className="text-18 text-paragraph">What the room should support</p>
              <p className="mt-4 text-18 text-paragraphlte">{scenario.support}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default function RoomConfigTabsSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: RoomConfigTabsProps) {
  // Tabs (md+): always one active. Accordion (below md): one open, or none.
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = data.rooms.length;
  const room = data.rooms[active];

  const goTo = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo((i + 1) % total);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo((i - 1 + total) % total);
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(total - 1);
    }
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* ================= Desktop / tablet: tabs ================= */}
        <div
          role="tablist"
          aria-label="Room configurations"
          className="scrollbar-hide mt-52 hidden flex-nowrap overflow-x-auto border-b border-[#E3E8F0] md:flex"
        >
          {data.rooms.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`rc-tab-${item.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`rc-pane-${item.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group -mb-px flex min-w-[170px] flex-1 cursor-pointer flex-col gap-1.5 border-b-2 px-4 py-[18px] text-left outline-none transition-colors duration-300 focus-visible:bg-primary/10 lg:min-w-[200px] ${
                  isActive
                    ? "border-primary bg-gradient-to-b from-primary/0 to-primary/10"
                    : "border-transparent"
                }`}
              >
                <span
                  className={`text-17 leading-[1.3] transition-colors ${
                    isActive ? "text-primary" : "text-paragraph group-hover:text-primary"
                  }`}
                >
                  {item.tab}
                </span>
                <span
                  className={`text-16 !leading-[1.3] transition-colors ${
                    isActive ? "text-primary" : "text-paragraphlte"
                  }`}
                >
                  {item.people}
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={room.id}
          id={`rc-pane-${room.id}`}
          role="tabpanel"
          aria-labelledby={`rc-tab-${room.id}`}
          tabIndex={0}
          className="hidden outline-none md:block"
        >
          <RoomPanel room={room} ctaText={data.ctaText} ctaLink={data.ctaLink} />
        </div>

        {/* ================= Mobile: accordion ================= */}
        <div className="mt-8 border-t border-[#E3E8F0] md:hidden">
          {data.rooms.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.id} className="border-b border-[#E3E8F0]">
                <h3>
                  <button
                    type="button"
                    id={`rc-acc-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`rc-acc-panel-${item.id}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-4 text-left outline-none transition-colors focus-visible:bg-primary/10 ${
                      isOpen ? "bg-gradient-to-b from-primary/0 to-primary/10" : ""
                    }`}
                  >
                    <span className="flex flex-col gap-1.5">
                      <span
                        className={`text-17 leading-[1.3] ${
                          isOpen ? "text-primary" : "text-paragraph"
                        }`}
                      >
                        {item.tab}
                      </span>
                      <span
                        className={`text-16 !leading-[1.3] ${
                          isOpen ? "text-primary" : "text-paragraphlte"
                        }`}
                      >
                        {item.people}
                      </span>
                    </span>

                    <LucideIcon
                      name="ChevronDown"
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`rc-acc-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`rc-acc-btn-${item.id}`}
                    className="animate-in fade-in slide-in-from-top-2 pb-6 duration-300"
                  >
                    <RoomPanel room={item} ctaText={data.ctaText} ctaLink={data.ctaLink} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-18 text-paragraph lg:mt-6">{data.footNote}</p>
      </div>
    </section>
  );
}