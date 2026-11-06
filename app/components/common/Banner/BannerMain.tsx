"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { parseMaxW } from "@/lib/utils/cmsMaxWidth";

export interface ButtonItem {
  text: string;
  icon: string;
  hoverScroll?: boolean;
  bgButton: string;
  dark: boolean;
  href: string;
}
export interface PointsItem {
  value?: string;
  desc?: string;
}
export interface CrumbItem {
  label: string;
  href?: string; // omit for the current page
}
export interface BadgeItem {
  label?: string; // e.g. "Authorized Barco partner"; omit for a standalone badge image
  logo: string;
  alt: string;
}
export interface FeatureItem {
  crumbs?: CrumbItem[];
  badge?: BadgeItem;
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  bannercta?: string;
  backgroundImage: string;
  mobbanner: string;
  keypoints?: string[];
  buttons: ButtonItem[];
  points?: PointsItem[];
}

interface BannerProps {
  bannerData: FeatureItem;
  padding?: string;
  descstyle?: string;
  classpointdes?: string;
  // Width of the hero text column, chosen per breakpoint. Each is a key
  // ("65" | "60" | "57" | "50") mapped to a CSS width via the .hero-cw-* rules
  // in globals.css (57 → 57.47%). lg applies from 1024px up; 3xl overrides it
  // from 1715px up. Defaults: lg 65, 3xl 57.
  contentWidthLg?: string;
  contentWidth3xl?: string;
  contentMaxWidth?: number;
  darkMode?: boolean;
  // Full-width overlay on every desktop size (md and up, including 3xl),
  // replacing the default overlay that is hidden from 3xl.
  desktopOverlay?: boolean;
  // Show backgroundImage whole, in a framed box (right side on desktop, top on
  // mobile) instead of as a full-bleed photo. For product cut-out shots.
  productShot?: boolean;
}
// Partner badge: label above a logo on a white card
function HeroBadge({ badge, className }: { badge: BadgeItem; className: string }) {
  // No label: the logo is itself a badge (e.g. Yealink Gold), shown on its own
  if (!badge.label) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={badge.logo}
        alt={badge.alt}
        width={150}
        height={186}
        className={`h-auto !w-[104px] drop-shadow-[0_12px_20px_rgb(17_74_159_/_0.22)] min-[768px]:w-[150px] ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex flex-col items-start gap-2 rounded-2xl border border-[#e3e8f0] bg-white px-4 py-3 shadow-[0_16px_24px_0_#114a9f24] min-[900px]:gap-2.5 min-[900px]:px-5 min-[900px]:py-4 ${className}`}
    >
      <span className="text-[12px] uppercase tracking-[0.06em] text-paragraph">{badge.label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badge.logo}
        alt={badge.alt}
        width={143}
        height={44}
        className="h-8 w-auto max-w-none object-contain min-[900px]:h-10"
      />
    </div>
  );
}

export default function BannerMain({
  bannerData,
  padding,
  descstyle,
  classpointdes,
  contentWidthLg = "65",
  contentWidth3xl = "57",
  contentMaxWidth,
  darkMode = false,
  desktopOverlay = false,
  productShot = false,
}: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const descW = parseMaxW(descstyle);

  const sourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className={` xl:min-h-[79.44dvh] flex items-center w-full bg-contain bg-cover  rounded-2xl relative xl:mt-[11px] ${isMobile ? "bg-top" : "bg-right"} ${productShot ? "bg-white" : ""} `}
      style={
        productShot
          ? undefined
          : { backgroundImage: `url('${isMobile ? bannerData.mobbanner : bannerData.backgroundImage}')` }
      }
    >
      {productShot ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-4 h-[300px] rounded-xl bg-[#f8f8f8] bg-[length:72%_auto] bg-center bg-no-repeat md:inset-x-auto md:bottom-6 md:right-6 md:top-6 md:h-auto md:w-[42%] md:bg-[length:74%_auto] md:bg-[position:center_42%]"
          style={{ backgroundImage: `url('${bannerData.backgroundImage}')` }}
        />
      ) : desktopOverlay ? (
        <div
          className="hidden md:block absolute inset-0 rounded-2xl"
          style={{
            backgroundImage: darkMode
              ? "linear-gradient(90deg, #0d418ea1 0%, #0d418ea1 46%, #082c646b 62%, #1253b400 82%)"
              : "linear-gradient(90deg, #fff 0%, #fff 46%, rgb(255 255 255 / 70%) 62%, rgb(255 255 255 / 0) 82%)",
          }}
        />
      ) : (
        <div
          className="hidden rounded-2xl md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[100%] 2xl:max-w-[90%]"
          style={{
            backgroundImage: darkMode
              ? "linear-gradient(270.05deg, #1253b400 .04%, #082c646b 28.62%, #0d418ea1 55.84% 93.96%)"
              : "linear-gradient(270.05deg, #e3e2e400 .04%, #ffffffad 28.62%, #fff 55.84% 93.96%)",
          }}
        />
      )}

      {/* Desktop badge sits in the banner's bottom-right corner (inside the photo frame for productShot) */}
      {bannerData.badge && (
        <HeroBadge
          badge={bannerData.badge}
          className={`absolute z-[2] hidden min-[768px]:flex ${
            productShot ? "bottom-12 right-12" : "bottom-7 right-[26px] lg:right-[50px]"
          }`}
        />
      )}

      <div
        className="container  md:!bg-none rounded-2xl"
        style={{
          backgroundImage: productShot
            ? "none"
            : darkMode
            ? "linear-gradient(0deg, #0f4aa0 0%, #0f4aa029 45.14%, rgb(26 43 147 / 64%) 76.96%)"
            : "linear-gradient(0deg,#FFFFFF 0%, #FFFFFF 45.14%, rgba(255, 255, 255, 0) 76.96%)",
        }}
      >
        <div className="">
          <div
            className={`pt-[332px] pb-4 md:py-52  relative `}
            ref={sourceRef}
          >
            <div
              className={`relative hero-cw-lg-${contentWidthLg} hero-cw-3xl-${contentWidth3xl} ${productShot ? "md:max-w-[52%]" : ""}`}
              style={
                contentMaxWidth
                  ? { width: "100%", maxWidth: `${contentMaxWidth}px` }
                  : undefined
              }
            >
              {bannerData.badge && (
                <HeroBadge badge={bannerData.badge} className="relative mb-5 w-fit min-[768px]:hidden" />
              )}
              {bannerData.crumbs && (
                <nav
                  aria-label="Breadcrumb"
                  className={`mb-[18px] flex flex-wrap gap-1.5 text-[13px] ${darkMode ? "text-white" : "text-paragraph"}`}
                >
                  {bannerData.crumbs.map((c, i) => (
                    <Fragment key={i}>
                      {i > 0 && <span aria-hidden="true" className="opacity-50">/</span>}
                      {c.href ? (
                        <Link href={c.href} className="hover:text-primary">
                          {c.label}
                        </Link>
                      ) : (
                        <span aria-current="page">{c.label}</span>
                      )}
                    </Fragment>
                  ))}
                </nav>
              )}
              <div className={`${darkMode ? "darkstle" : ""} `}>
                <SectionTag text={bannerData.tag} />
              </div>
              <div className="my-4   md:mt-[26px]">
                <HeadingTag
                  as="h1"
                  highlightLast={bannerData.highlightLast}
                  className={`${darkMode ? "headingstyle" : ""} text-heading  lg:!whitespace-pre-normal md:!whitespace-pre-line  `}
                  text={bannerData.heading}
                  titlebrake="hidden "
                />
              </div>
              <p
                className={`${descW.rest} ${descW.hasMaxW ? "cms-maxw" : ""} ${darkMode ? "!text-white" : "text-paragraph"} lg:text-paragraph text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] `}
                style={descW.style as React.CSSProperties}
              >
                {bannerData.description}
              </p>
              {bannerData.bannercta && (
                <div>
                  <p className="text-18 font-medium text-primary tracking-[-3%] mt-4 lg:mt-6 py-[3px]">
                    {bannerData.bannercta}
                  </p>
                </div>
              )}
              <div className="flex flex-col-reverse md:block">
                <div className="flex flex-col md:flex-row items-center gap-4 pt-52">
                  {bannerData.buttons.map((btn, i) => (
                    <CustomButton
                      key={i}
                      text={btn.text}
                      icon={btn.icon}
                      bgButton={btn.bgButton}
                      dark={btn.dark}
                      href={btn.href}
                      hoverScroll={btn.hoverScroll}
                    />
                  ))}
                </div>
                {bannerData.points && bannerData.points.length > 1 && (
                  <div className="mt-52"> 
                    <div className={` ${
            productShot ? "grid grid-cols-2  xl:flex w-fit gap-4  xl:gap-7  3xl:gap-10.5" : "grid grid-cols-2  lg:flex w-fit gap-4  xl:gap-7  3xl:gap-10.5"} `}>
                      {bannerData.points?.map((point, i) => (
                        <div key={i} className={`${classpointdes} lg:flex-1`}>
                          <p
                            className={`${darkMode ? "!text-[#BFD9FF]" : "text-primary"} text-24 variant font-medium !leading-[1.6] lg:!leading-[1.3334] tracking-[-3%] `}
                          >
                            {point.value}
                          </p>
                          <p
                            className={`mt-2 ${darkMode ? "!text-white" : "text-paragraph"} text-16 font-medium lg:font-normal xl:!whitespace-pre-line`}
                          >
                            {point.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
