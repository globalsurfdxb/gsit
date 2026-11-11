"use client";

import { useLayoutEffect, useRef, useState } from "react";
import SvgIcon from "./SvgIcon";

// Column steps tried in order: four per row, then three, then one item per line
const STEPS = [
  "grid-cols-1 min-[521px]:grid-cols-2 xl:grid-cols-4",
  "grid-cols-1 min-[521px]:grid-cols-2 xl:grid-cols-3",
  "grid-cols-1",
];
const MAX_LINES = 2;

// "In the box" list that drops to fewer columns whenever an item's text wraps past two lines
export default function PackageItems({ items, fixedCols }: { items: { icon: string; text: string }[]; fixedCols?: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  // width is part of the state so a resize always re-renders and re-measures, even when already at step 0
  const [{ step, width }, setLayout] = useState({ step: 0, width: 0 });

  // Start again from four columns when the available width changes
  useLayoutEffect(() => {
    const parent = listRef.current?.parentElement;
    if (fixedCols || !parent) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      setLayout((prev) => (prev.width === w ? prev : { step: 0, width: w }));
    });
    ro.observe(parent);
    return () => ro.disconnect();
  }, [fixedCols]);

  // After each layout, move to the next step if any text runs past two lines
  useLayoutEffect(() => {
    const list = listRef.current;
    if (fixedCols || !list || step >= STEPS.length - 1) return;
    const tooLong = [...list.querySelectorAll<HTMLElement>("[data-text]")].some((el) => {
      const lh = parseFloat(getComputedStyle(el).lineHeight);
      return Math.round(el.offsetHeight / lh) > MAX_LINES;
    });
    if (tooLong) setLayout((prev) => ({ ...prev, step: prev.step + 1 }));
  }, [fixedCols, step, width]);

  return (
    <ul ref={listRef} className={`grid list-none gap-x-5 p-0 ${fixedCols ?? STEPS[step]}`}>
      {items.map((it) => (
        <li key={it.text} className="flex min-w-0 items-center gap-3 border-b border-[#e3e8f0] px-1 py-3 text-[15px] text-[#111]">
          <span className="grid size-8 flex-none place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
            <SvgIcon markup={it.icon} className="size-[17px]" />
          </span>
          <span data-text className="min-w-0 leading-normal">
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
