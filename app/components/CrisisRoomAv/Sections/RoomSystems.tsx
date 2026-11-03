"use client";

import { useState, type KeyboardEvent } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

interface Room {
  tab: string;
  image: string;
  who: string;
  title: string;
  lead: string;
  wall: string;
  vc: string;
  ctl: string;
  int: string;
}

export interface RoomSystemsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  specLabels: { wall: string; vc: string; ctl: string; int: string };
  button: { text: string; href: string };
  rooms: Room[];
}

interface Props {
  data: RoomSystemsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const SPEC_KEYS = ["wall", "vc", "ctl", "int"] as const;

export default function RoomSystems({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const room = data.rooms[cur];

  // Left/right arrows cycle through room types
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : -1) + data.rooms.length) % data.rooms.length;
    setCur(n);
    (e.currentTarget.parentElement?.children[n] as HTMLElement | undefined)?.focus();
  };

  return (
    <section id="rooms" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Crisis room types" className="mt-52 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">
          {data.rooms.map((r, i) => (
            <button
              key={r.tab}
              role="tab"
              aria-selected={i === cur}
              tabIndex={i === cur ? 0 : -1}
              onClick={() => setCur(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`rounded-[14px] border px-3 py-2.5 text-[15px] font-medium tracking-[-0.03em] transition-colors duration-200 sm:rounded-full sm:px-6 sm:py-3 sm:text-18 ${
                i === cur
                  ? "border-primary bg-primary text-white"
                  : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary/75 hover:bg-primary/75 hover:text-white"
              }`}
            >
              {r.tab}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-live="polite" className="mt-8 grid items-stretch gap-[30px] lg:grid-cols-[1.1fr_1fr]">
          <div
            role="img"
            aria-label={room.title}
            className="min-h-[280px] rounded-2xl bg-[#132250] bg-cover bg-center lg:min-h-[420px]"
            style={{ backgroundImage: `url('${room.image}')` }}
          />
          <div className="flex flex-col gap-[22px] rounded-2xl bg-[#F6F6F6] p-[22px] md:p-8">
            <div>
              <span className="text-[15px] uppercase tracking-[0.06em] text-paragraph">{room.who}</span>
              <h3 className="mt-1 text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.2] tracking-[-0.01em] text-primary">{room.title}</h3>
            </div>
            <p className="text-18 text-paragraph">{room.lead}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {SPEC_KEYS.map((k) => (
                <div key={k} className="grid gap-1 rounded-xl bg-white p-4">
                  <em className="text-[13px] not-italic uppercase tracking-[0.06em] text-[#8A8A8A]">{data.specLabels[k]}</em>
                  <strong className="text-[17px] font-medium leading-[1.4] text-primary">{room[k]}</strong>
                </div>
              ))}
            </div>
            <CustomButton text={data.button.text} icon="ArrowRight" bgButton="bg-primary" dark href={data.button.href} />
          </div>
        </div>
      </div>
    </section>
  );
}
