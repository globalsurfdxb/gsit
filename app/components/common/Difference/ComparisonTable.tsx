"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface ComparisonRow {
  scenario: string;
  without: string;
  with: string;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
  headers: {
    scenario: string;
    without: string;
    with: string;
  };
}

export default function ComparisonTable({
  data,
  headers,
}: ComparisonTableProps) {
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

    // Reset first, so we measure natural (un-equalized) height,
    // not a previously-applied min-height from an earlier run.
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
    // Headers — a single group of 3, equalized to whichever wraps tallest.
    // min-height (not padding-bottom) is what absorbs the extra space from
    // a wrapped 2nd line, so a wrapped header doesn't ALSO keep its full
    // fixed bottom padding on top of the extra line height.
    equalizeGroup(headerRefs.current);

    // Data rows — one group per row index, same as before.
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
    <div className="relative rounded-3xl bg-[#F3F6FB] p-2 md:p-6 mt-6 md:mt-52">
      {/* ── Mobile: fixed Scenario column + Swiper for Without/With ── */}
      <div className="flex md:hidden gap-x-2">
        <div className="shrink-0 w-[150px] sm:w-[200px]  ">
          <h3     ref={setHeaderRef} className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-paragraph  md:font-medium md:mb-6 ps-2 pt-5 pb-5 md:px-4 md:py-6">
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
            <SwiperSlide style={{ width: 175, flexShrink: 0 }}>
              <div className="relative   rounded-2xl bg-[#F7FBFF]">
                <h3     ref={setHeaderRef} className=" text-[16px] lg:text-27 text-paragraphlte  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-paragraph  md:font-medium   md:mb-6  px-2 md:px-5 pt-5 pb-5 md:pb-0">
                  {headers.without}
                </h3>
                <hr className="mx-2   border-[#D3D3D3]" />
                <div className="divide-y divide-[#D3D3D3]">
                  {data.map((row, i) => (
                    <div key={i} className="p-2 md:p-4 rowheight" ref={setRowRef(i)}>
                      <p className="text-18 text-paragraphlte">
                        {row.without}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ width: 197, flexShrink: 0 }}>
              <div className="relative rounded-2xl bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] ">
                <h3     ref={setHeaderRef} className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-white  md:font-medium  md:mb-6 ps-2 md:px-5 pt-5 pb-5 md:pb-0">
                  {headers.with}
                </h3>{" "}
                <hr className="mx-2   border-[#D3D3D3]" />
                <div className="divide-y divide-white/15">
                  {data.map((row, i) => (
                    <div key={i} className="p-2 md:p-4  rowheight" ref={setRowRef(i)}>
                      <p className="text-18 text-white   ">{row.with}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ── Desktop: original fixed 3-column grid, headers + rows equalized via JS ── */}
      <div className="hidden md:grid grid-cols-3 gap-x-4 3xl:gap-x-7.5">
        <div>
          <h3
            ref={setHeaderRef}
            className="text-[16px] lg:text-27 leading-[1.75] lg:leading-[1.2967] tracking-[-3%] text-paragraph md:font-medium px-4 pt-6 flex items-start"
          >
            {headers.scenario}
          </h3>
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => (
              <div
                key={i}
                ref={setRowRef(i)}
                className="py-2 md:py-[29px] px-2 md:px-4 rowheight flex items-center"
              >
                <p className="text-18 text-paragraph">{row.scenario}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative   rounded-2xl bg-[#F7FBFF]">
          <h3
            ref={setHeaderRef}
            className="text-[16px] lg:text-27 leading-[1.75] lg:leading-[1.2967] tracking-[-3%] text-paragraph md:font-medium px-4 pt-6 flex items-start"
          >
            {headers.without}
          </h3>
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => (
              <div
                key={i}
                ref={setRowRef(i)}
                className="p-2 md:p-4 rowheight flex items-center"
              >
                <p className="text-18 text-paragraphlte">{row.without}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative   rounded-2xl bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] shadow-[0_20px_40px_-12px_rgba(26,46,110,0.35)]">
          <h3
            ref={setHeaderRef}
            className="text-[16px] lg:text-27 leading-[1.75] lg:leading-[1.2967] tracking-[-3%] md:font-medium text-white px-4 pt-6 flex items-start"
          >
            {headers.with}
          </h3>
          <div className="divide-y divide-white/15">
            {data.map((row, i) => (
              <div
                key={i}
                ref={setRowRef(i)}
                className="p-2 md:p-4 rowheight flex items-center"
              >
                <p className="text-18 text-white  ">{row.with}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}