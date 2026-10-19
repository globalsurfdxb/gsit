import type { CSSProperties } from "react";
import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  url?: string;
}

export interface DeliveryProcessData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: ProcessStep[];
}

interface DeliveryProcessProps {
  data: DeliveryProcessData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Items per row on tablet (md to lg). Keep in sync with `md:grid-cols-3` below.
const TABLET_COLS = 3;

export default function DeliveryProcessSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: DeliveryProcessProps) {
  const total = data.data.length;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <ol
          className="mt-52 grid grid-cols-1 md:grid-cols-3 md:gap-y-12 lg:grid-cols-[repeat(var(--steps),minmax(0,1fr))] lg:gap-y-0"
          style={{ "--steps": total } as CSSProperties}
        >
          {data.data.map((item, i) => {
            const isLast = i === total - 1;
            const hasUrl = Boolean(item.url && item.url.trim() !== "");

            // Tablet snake layout
            const tabletRow = Math.floor(i / TABLET_COLS); // 0, 1, 2...
            const tabletReversed = tabletRow % 2 === 1; // odd rows run right to left
            const posInRow = i % TABLET_COLS;
            const tabletCol = tabletReversed ? TABLET_COLS - posInRow : posInRow + 1;
            const endsTabletRow = posInRow === TABLET_COLS - 1;

            // Tablet connector type for this item
            const turnRight = endsTabletRow && !isLast && !tabletReversed; // 3 -> 4
            const turnLeft = endsTabletRow && !isLast && tabletReversed; // 6 -> 7
            const lineLeft = tabletReversed && !endsTabletRow; // 4 -> 5, 5 -> 6

            // Default flex connector is hidden on tablet when a special one takes over
            const hideFlexLineOnTablet = tabletReversed || endsTabletRow;

            const innerClass = [
              "group flex gap-4 md:block",
              isLast ? "pb-0" : "pb-8 md:pb-0",
              hasUrl
                ? "rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                : "",
            ].join(" ");

            const content = (
              <>
                {/* Icon box + dashed connector */}
                <div className="flex flex-col items-center md:flex-row">
                  <div
                    className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ease-out xl:h-[72px] xl:w-[72px] 3xl:h-[80px] 3xl:w-[80px] ${
                      hasUrl
                        ? "border-transparent bg-white shadow-[0px_8px_16px_0px_#00000040] group-hover:-translate-y-1 group-hover:bg-primary"
                        : "border-[#e5e5e5] bg-white"
                    }`}
                  >
                    {/* Step number badge */}
                    <span
                      className={`absolute -right-2.5 -top-2.5 flex h-8 w-8 items-center justify-center rounded-md bg-primary text-[14px] leading-none text-white transition-all duration-300 xl:h-9 xl:w-9 xl:text-[16px] ${
                        hasUrl ? "group-hover:ring-2 group-hover:ring-white" : ""
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Default icon */}
                    <LucideIcon
                      name={item.icon}
                      className={`h-6 w-6 text-primary transition-all duration-300 xl:h-8 xl:w-8 ${
                        hasUrl
                          ? "group-hover:rotate-90 group-hover:scale-50 group-hover:opacity-0"
                          : ""
                      }`}
                      strokeWidth={1}
                    />

                    {/* Arrow icon, only for linked steps, revealed on hover */}
                    {hasUrl && (
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 -rotate-45 scale-50 transition-all duration-300 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100">
                        <LucideIcon
                          name="ArrowRight"
                          className="h-6 w-6 text-white xl:h-8 xl:w-8"
                          strokeWidth={1}
                        />
                      </span>
                    )}
                  </div>

                  {/* Default dashed connector (vertical on mobile, horizontal on md+).
                      On tablet it is replaced by the snake connectors below. */}
                  {!isLast && (
                    <div
                      className={`my-2 flex-1 border-l border-dashed border-[#C9D8F0] md:my-0 md:border-l-0 md:border-t ${
                        hideFlexLineOnTablet ? "md:max-lg:hidden" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="pt-1 md:pr-4 md:pt-0 md:mt-5">
                  <h3
                    className={`text-18 font-medium leading-[1.4] tracking-[-3%] ${
                      hasUrl ? "text-primary" : "text-paragraph"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-18 md:mt-4 ${
                      hasUrl ? "text-primary" : "text-paragraphlte"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </>
            );

            return (
              <li
                key={i}
                className="relative md:max-lg:[grid-column:var(--tc)] md:max-lg:[grid-row:var(--tr)]"
                style={
                  { "--tr": tabletRow + 1, "--tc": tabletCol } as CSSProperties
                }
              >
                {hasUrl ? (
                  <Link href={item.url as string} className={innerClass}>
                    {content}
                  </Link>
                ) : (
                  <div className={innerClass}>{content}</div>
                )}

                {/* Tablet only: right-to-left line (4 -> 5, 5 -> 6).
                    Starts at this box's left edge, ends at the next box's right edge. */}
                {lineLeft && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-full top-7 hidden w-[calc(100%-3.5rem)] border-t border-dashed border-[#C9D8F0] md:max-lg:block"
                  />
                )}

                {/* Tablet only: 3 -> 4. Exits box 3 to the right, drops down, enters box 4 from the right. */}
                {turnRight && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-14 right-2 top-7 hidden h-[calc(100%+3rem)] rounded-r-2xl border-y border-r border-dashed border-[#C9D8F0] md:max-lg:block"
                  />
                )}

                {/* Tablet only: 6 -> 7. Exits box 6 to the left, drops down, enters box 7 from the left. */}
                {turnLeft && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-full top-7 hidden h-[calc(100%+3rem)] w-4 rounded-l-2xl border-y border-l border-dashed border-[#C9D8F0] md:max-lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}