// components/Banner.tsx
"use client";

import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { bannerData } from "../data";

export default function Banner() {
  return (
    <section
      className="w-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url('${bannerData.backgroundImage}')` }}
    >
      <div className="container">
        <div className="py-12.5 lg:py-15 3xl:pt-[132px] 3xl:pb-[289px]">
          <SectionTag text={bannerData.tag} />
          <div className="my-6 2xl:mb-6 2xl:mt-[26px]">
            <HeadingTag
              as="h1"
              highlightLast={bannerData.highlightLast}
              className="home-banner-heading"
              text={bannerData.heading}
            />
          </div>
          <p className="text-paragraphlte text-24 leading-[1.3334] tracking-[-3%] max-w-[54ch]">
            {bannerData.description}
          </p>
          <div className="flex items-center gap-4 pt-50 2xl:pt-[52px]">
            {bannerData.buttons.map((btn, i) => (
              <CustomButton
                key={i}
                text={btn.text}
                icon={btn.icon}
                bgButton={btn.bgButton}
                dark={btn.dark}
                href={btn.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}