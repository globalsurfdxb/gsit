"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";

export interface ProductHeroData {
  crumbs: { label: string; href?: string }[];
  gallery: { src: string; alt: string }[];
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  pills: string[]; // the first pill is the green "In stock" one
  meta: { label: string; value: string }[];
  aboutTitle: string;
  about: { label: string; text: string }[];
  buttons: { text: string; icon: string; bgButton: string; dark: boolean; href: string }[];
  datasheet?: { text: string; href: string };
}

// Up to this many thumbnails sit in a plain row; more turn the row into a slider
const THUMBS_VISIBLE = 4;

export default function ProductHero({ data }: { data: ProductHeroData }) {
  const [cur, setCur] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });
  const swiperRef = useRef<SwiperType | null>(null);
  const main = data.gallery[cur];
  const slider = data.gallery.length > THUMBS_VISIBLE;

  const select = (i: number) => {
    setCur(i);
    swiperRef.current?.slideTo(Math.max(0, i - 1)); // keep the picked thumb in view
  };

  const thumb = (g: ProductHeroData["gallery"][number], i: number) => (
    <button
      type="button"
      aria-current={i === cur}
      aria-label={`Show image ${i + 1}`}
      onClick={() => select(i)}
      className={`block aspect-[668/439] w-full overflow-hidden rounded-[10px] bg-white transition-colors duration-200 ${
        i === cur ? "border-2 border-primary" : "border border-[#efefef] hover:border-[#c7d9fb]"
      }`}
    >
      <img src={g.src} alt="" className="h-full w-full object-contain" />
    </button>
  );

  const arrow = "absolute top-1/2 z-[2] grid size-8 -translate-y-1/2 place-items-center rounded-full border border-[#e3e8f0] bg-white text-primary shadow-[0_4px_12px_rgb(17_74_159_/_0.12)] transition-opacity disabled:pointer-events-none disabled:opacity-0";

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[14px] text-paragraph">
          {data.crumbs.map((c, i) => (
            <Fragment key={c.label}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className="text-primary hover:underline">{c.label}</Link>
              ) : (
                <span aria-current="page">{c.label}</span>
              )}
            </Fragment>
          ))}
        </nav>

        {/* minmax(0,…) on mobile too: without it the thumbnail Swiper stretches the column endlessly */}
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)] items-start gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
          {/* Gallery: thumbnails swap the main image */}
          <div className="min-w-0 lg:sticky lg:top-4">
            <div className="grid aspect-[668/439] place-items-center overflow-hidden rounded-2xl border border-[#efefef] bg-white">
              <img src={main.src} alt={main.alt} width={600} height={394} className="h-full w-full object-contain" />
            </div>
            {data.gallery.length > 1 &&
              (slider ? (
                <div role="group" aria-label="Product images" className="relative mt-3">
                  <Swiper
                    onSwiper={(sw) => {
                      swiperRef.current = sw;
                      setEdge({ start: sw.isBeginning, end: sw.isEnd });
                    }}
                    onSlideChange={(sw) => setEdge({ start: sw.isBeginning, end: sw.isEnd })}
                    slidesPerView={THUMBS_VISIBLE}
                    spaceBetween={10}
                    watchOverflow
                  >
                    {data.gallery.map((g, i) => (
                      <SwiperSlide key={g.src}>{thumb(g, i)}</SwiperSlide>
                    ))}
                  </Swiper>
                  <button type="button" aria-label="Previous images" disabled={edge.start} onClick={() => swiperRef.current?.slidePrev()} className={`${arrow} -left-3`}>
                    <ChevronLeft strokeWidth={1} className="size-5" />
                  </button>
                  <button type="button" aria-label="Next images" disabled={edge.end} onClick={() => swiperRef.current?.slideNext()} className={`${arrow} -right-3`}>
                    <ChevronRight strokeWidth={1} className="size-5" />
                  </button>
                </div>
              ) : (
                <div role="group" aria-label="Product images" className="mt-3 grid grid-cols-4 gap-2.5">
                  {data.gallery.map((g, i) => (
                    <Fragment key={g.src}>{thumb(g, i)}</Fragment>
                  ))}
                </div>
              ))}
          </div>

          <div>
            <SectionTag text={data.tag} />
            <HeadingTag as="h1" text={data.heading} highlightLast={data.highlightLast} className="home-banner-heading mt-3 !text-[clamp(28px,2.4vw_+_8px,44px)] !leading-[1.15]" />
            <p className="mt-2.5 text-18 text-paragraph">{data.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {data.pills.map((p, i) => (
                <span
                  key={p}
                  className={`rounded-full border px-3 py-1 text-[13px] ${
                    i === 0 ? "border-[#d4ecd9] bg-[#eef8f0] text-[#0a7a1e]" : "border-[#e3e8f0] text-[#111]"
                  }`}
                >
                  {i === 0 && <i aria-hidden="true" className="mr-[7px] inline-block size-[7px] rounded-full bg-current align-[1px]" />}
                  {p}
                </span>
              ))}
            </div>

            <dl className="mt-5 grid grid-cols-[auto_1fr] border-t border-[#e3e8f0] text-[15px]">
              {data.meta.map((m) => (
                <Fragment key={m.label}>
                  <dt className="border-b border-[#e3e8f0] py-2.5 pr-7 text-paragraph">{m.label}</dt>
                  <dd className="border-b border-[#e3e8f0] py-2.5 font-medium text-[#111]">{m.value}</dd>
                </Fragment>
              ))}
            </dl>

            <div className="mt-[22px]">
              <h2 className="text-[17px] font-medium tracking-[-0.02em] text-[#111]">{data.aboutTitle}</h2>
              <ul className="mt-3 grid list-none gap-2.5 p-0 text-[15px] text-paragraph">
                {data.about.map((a) => (
                  <li key={a.label} className="grid grid-cols-[14px_1fr] gap-2.5">
                    <i aria-hidden="true" className="mt-[9px] size-1.5 bg-primary" />
                    <span>
                      <b className="font-medium text-[#111]">{a.label}:</b> {a.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[26px] flex flex-wrap gap-4">
              {data.buttons.map((b) => (
                <CustomButton key={b.text} text={b.text} icon={b.icon} bgButton={b.bgButton} dark={b.dark} href={b.href} />
              ))}
            </div>
            {data.datasheet && (
              <a href={data.datasheet.href} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-primary hover:underline">
                <Download strokeWidth={1} className="size-[18px]" />
                {data.datasheet.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
