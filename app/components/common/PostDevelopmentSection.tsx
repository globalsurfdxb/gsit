"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  image: string;
  imageAlt: string;
  /** Used by imagePosition="center" (image between two columns) */
  leftItems?: FeatureItem[];
  rightItems?: FeatureItem[];
  /** Used by imagePosition="left" | "right" (2-col grid beside the image).
   *  Falls back to [...leftItems, ...rightItems] if not provided. */
  items?: FeatureItem[];
}

export type ImagePosition = "center" | "left" | "right";

interface SixFeaturesGridProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  imagePosition?: ImagePosition;
}

function FeatureCard({
  item,
  alignBottom = false,
}: {
  item: FeatureItem;
  alignBottom?: boolean;
}) {
  return (
    <div className="h-full">
      <div
        className={`bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] rounded-2xl p-6 h-full ${
          alignBottom ? "flex flex-col justify-end" : ""
        }`}
      >
        {item.icon && (
          <div className="mb-6">
            <IconBox
              icon={
                <LucideIcon
                  name={item.icon}
                  strokeWidth={1}
                  className="text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px]"
                />
              }
              bgClass="bg-[#FFFFFF] rounded-[8px]"
            />
          </div>
        )}

        <h3 className="text-primary text-24 font-medium tracking-[-3%] md:whitespace-pre-line">
          {item.title}
        </h3>
        <p className="mt-4 text-paragraphlte text-18">{item.description}</p>
      </div>
    </div>
  );
}

function FeatureImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[32px] overflow-hidden min-h-[300px] lg:min-h-full ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}

export default function SixFeaturesGrid({
  data,
  variant,
  subtitleClass,
  imagePosition = "center",
}: SixFeaturesGridProps) {
  const leftItems = data.leftItems ?? [];
  const rightItems = data.rightItems ?? [];
  const gridItems = data.items ?? [...leftItems, ...rightItems];

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-52">
          {imagePosition === "center" ? (
            <>
              <div className="flex flex-col gap-6">
                {leftItems.map((item, i) => (
                  <FeatureCard key={i} item={item} />
                ))}
              </div>

              <FeatureImage src={data.image} alt={data.imageAlt} />

              <div className="flex flex-col gap-6">
                {rightItems.map((item, i) => (
                  <FeatureCard key={i} item={item} />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Image: always first on mobile; on desktop moves right if needed */}
              <FeatureImage
                src={data.image}
                alt={data.imageAlt}
                className={imagePosition === "right" ? "lg:order-2" : "lg:order-1"}
              />

              {/* 2x2 cards grid spanning the remaining two columns */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2 lg:auto-rows-fr ${
                  imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {gridItems.map((item, i) => (
                  <FeatureCard key={i} item={item} alignBottom />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}