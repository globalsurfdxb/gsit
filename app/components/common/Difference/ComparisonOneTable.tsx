"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface ComparisonRow {
  scenario: string;
  with: string;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
  headers: {
    scenario: string;
    with: string;
  };
  theme?: "light" | "dark";  
  gridclass?:string;
}

const THEME_CLASSES = {
  light: {
    panelBg: "bg-white",
    headerText: "text-paragraph",
    rowText: "text-paragraph",
    divider: "divide-[#D3D3D3]",
    border: "border-[#D3D3D3]",
  },
  dark: {
    panelBg: "bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]",
    headerText: "text-white",
    rowText: "text-white/80",
    divider: "divide-white/15",
    border: "border-white/15",
  },
} as const;

export default function ComparisonOneTable({
  data,
  headers,
  theme = "light",
  gridclass="grid-cols-2 xl:grid-cols-[528px_auto]"
}: ComparisonTableProps) {
  const t = THEME_CLASSES[theme];

  // Refs to every `.rowheight` element, grouped by row index across all
  // three desktop columns (scenario / without / with).
  const rowRefs = useRef<HTMLDivElement[][]>(data.map(() => []));

  // Refs to the 3 desktop header <h3> elements — equalized the same way,
  // as their own separate "row 0".
  const headerRefs = useRef<HTMLHeadingElement[]>([]);

  const setRowRef = (rowIndex: number) => (el: HTMLDivElement | null) => {
    if (!el) return;
    if (!rowRefs.current[rowIndex]) rowRefs.current[rowIndex] = [];
    if (!rowRefs.current[rowIndex].includes(el)) {
      rowRefs.current[rowIndex].push(el);
    }
  };

  const setHeaderRef = (el: HTMLHeadingElement | null) => {
    if (!el) return;
    if (!headerRefs.current.includes(el)) {
      headerRefs.current.push(el);
    }
  };

  const equalizeGroup = (cells: HTMLElement[]) => {
    if (!cells || cells.length === 0) return;

    cells.forEach((cell) => {
      cell.style.minHeight = "0px";
    });

    const maxHeight = Math.max(
      ...cells.map((cell) => cell.getBoundingClientRect().height)
    );

    cells.forEach((cell) => {
      cell.style.minHeight = `${maxHeight}px`;
    });
  };

  const equalizeAll = () => {
    equalizeGroup(headerRefs.current);
    rowRefs.current.forEach((cells) => equalizeGroup(cells));
  };

  useLayoutEffect(() => {
    equalizeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, headers]);

  useEffect(() => {
    const handleResize = () => equalizeAll();
    window.addEventListener("resize", handleResize);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(equalizeAll);
    }

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative rounded-3xl bg-[#F5F9FC] p-2 md:p-6 mt-6 md:mt-52">
      {/* ── Mobile: fixed Scenario column + Swiper for Without/With ── */}
      <div className="flex md:hidden gap-x-2">
        <div className="shrink-0 w-[150px] sm:w-[200px]  ">
          <h3 ref={setHeaderRef} className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-paragraph  md:font-medium md:mb-6 ps-2 pt-5 pb-5 md:px-4 md:py-6">
            {headers.scenario}
          </h3>
          <hr className="mx-2   border-[#D3D3D3]" />
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => (
              <div key={i} className="p-2 md:p-4  rowheight" ref={setRowRef(i)}>
                <p className="text-18 text-paragraph">{row.scenario}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex-1 min-w-0"
          style={{ clipPath: "inset(0 -100vw 0 0)" }}
        >
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            threshold={5}
            touchRatio={1}
            simulateTouch={true}
            allowTouchMove={true}
            className="!overflow-visible"
          >
            <SwiperSlide>
              <div className={`relative rounded-2xl ${t.panelBg}`}>
                <h3 ref={setHeaderRef} className={`text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%] ${t.headerText}  md:font-medium  md:mb-6 ps-2 md:px-5 pt-5 pb-5 md:pb-0`}>
                  {headers.with}
                </h3>{" "}
                <hr className={`mx-2 ${t.border}`} />
                <div className={`divide-y ${t.divider}`}>
                  {data.map((row, i) => (
                    <div key={i} className="p-2 md:p-4  rowheight" ref={setRowRef(i)}>
                      <p className={`text-18 ${t.rowText}`}>{row.with}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ── Desktop: original fixed 3-column grid, headers + rows equalized via JS ── */}
      <div className={`${gridclass} hidden md:grid  gap-x-4 3xl:gap-x-7.5`}>
        <div className="px-6">
          <h3
            ref={setHeaderRef}
            className="text-[16px] lg:text-27 leading-[1.75] lg:leading-[1.2967] tracking-[-3%] text-paragraph md:font-medium px-4 py-6 flex items-start border-b border-[#D3D3D3]"
          >
            {headers.scenario}
          </h3>
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => (
              <div
                key={i}
                ref={setRowRef(i)}
                className="py-2 md:py-6 3xl:py-8.5   px-2 md:px-4 rowheight flex items-center"
              >
                <p className="text-18 text-paragraph">{row.scenario}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`relative rounded-2xl ${t.panelBg}`}>
          <h3
            ref={setHeaderRef}
            className={`text-[16px] lg:text-27 leading-[1.75] lg:leading-[1.2967] tracking-[-3%] md:font-medium ${t.headerText} px-4 py-6 flex items-start border-b ${t.border}`}
          >
            {headers.with}
          </h3>
          <div className={`divide-y ${t.divider}`}>
            {data.map((row, i) => (
              <div
                key={i}
                ref={setRowRef(i)}
                className="p-2 md:p-4 rowheight flex items-center"
              >
                <p className={`text-18 ${t.rowText}`}>{row.with}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}