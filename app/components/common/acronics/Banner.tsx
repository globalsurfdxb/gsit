import Image from "next/image";
import Link from "next/link";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";
import { ButtonItem, PointsItem } from "@/app/components/common/Banner/BannerMain";
import HeroCallbackForm, { type HeroFormData } from "./HeroCallbackForm";

export interface BannerData {
  breadcrumb?: { label: string; href: string; current: string };
  tag: string;
  heading: string;
  highlightLast: number;
  description: string; 
  points: PointsItem[];
  buttons: (ButtonItem & { interest?: string })[];
  badge?: {
    image: string;
    alt: string;
    list: { value: string; desc: string }[];
  };
  // When set, the callback form takes the right column instead of the badge panel
  form?: HeroFormData;
}

interface BannerProps {
  bannerData: BannerData;
  padding?: string;
  descstyle?: string;
  classpointdes?: string;
}

export default function Banner({ bannerData, padding, descstyle, classpointdes }: BannerProps) {
  const { breadcrumb, badge, form } = bannerData;

  return (
    <section className="w-full rounded-2xl bg-gradient-to-r from-white from-50% to-[#F3F6FF] xl:mt-[11px]">
      <div className={`container ${padding ?? "py-82"}`}>
        <div
          className={`grid grid-cols-1 gap-8 items-center ${
            form ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-[clamp(40px,5vw,110px)]" : "lg:grid-cols-[1.25fr_1fr] lg:gap-14"
          }`}
        >
          {/* copy */}
          <div className="flex flex-col gap-6 min-w-0">
           {breadcrumb && (
            <p className="text-14 text-paragraph">
              <Link
                href={breadcrumb.href}
                className="text-primary underline underline-offset-4"
              >
                {breadcrumb.label}
              </Link>{" "}
              / {breadcrumb.current}
            </p>
          )}

            <SectionTag text={bannerData.tag} />

            <HeadingTag
              as="h1"
              text={bannerData.heading}
              highlightLast={bannerData.highlightLast}
            />

            <p
              className={`${descstyle ?? ""} text-[16px] lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] text-paragraph`}
            >
              {bannerData.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
  {bannerData.buttons.map((btn, i) => {
    const button = (
      <CustomButton
        key={i}
        text={btn.text}
        icon={btn.icon}
        bgButton={btn.bgButton}
        dark={btn.dark}
        href={btn.href}
        hoverScroll={btn.hoverScroll}
      />
    );

    // buttons pointing to #enquire open the "Let's talk" popup
    return btn.href === "#enquire" ? (
      <div key={i} data-enquiry data-interest={btn.interest} className="contents">
        {button}
      </div>
    ) : (
      button
    );
  })}
</div>

            <dl className="grid grid-cols-2 lg:flex gap-4 lg:gap-7 mt-2">
              {bannerData.points.map((p, i) => (
                <div key={i} className={`${classpointdes ?? ""} lg:flex-1`}>
                  <dt className="text-24 font-medium tracking-[-3%] text-primary">{p.value}</dt>
                  <dd className="mt-1 text-16 text-paragraph">{p.desc}</dd>
                </div>
              ))}
            </dl>
          </div>

          {form && (
            <aside aria-label="Request a callback" className="min-w-0 w-full">
              <HeroCallbackForm data={form} />
            </aside>
          )}

          {/* badge panel */}
          {!form && badge && (
          <aside
            aria-label="Acronis partner status"
            className="flex flex-col gap-2 min-w-0 rounded-2xl bg-[#00204C] px-3 pt-3 pb-5"
          >
            <Image
              src={badge.image}
              alt={badge.alt}
              width={1024}
              height={266}
              className="w-full h-auto"
            />
            <ul className="px-3 flex flex-col">
              {badge.list.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[5.5rem_1fr] gap-3 items-baseline py-3 border-t border-white/15 text-white/70 text-[15px]"
                >
                  <span className="text-20 font-medium tracking-[-3%] text-white">{item.value}</span>
                  {item.desc}
                </li>
              ))}
            </ul>
          </aside>
          )}
        </div>
      </div>
    </section>
  );
}