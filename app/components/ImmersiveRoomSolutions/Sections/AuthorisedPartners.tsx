"use client";

import SectionTag from "../../common/Heading/SectionTag";
import HeadingTag from "../../common/Heading/HeadingTag";
import Image from "next/image";

interface BlogCard {
  tag: string;
  heading: string;
  highlightLast: number;
  rightDescription?: string;
  subhead?: string;
  imageSrc: string;
}

interface LogoItem {
  id?: string | number;
  name?: string;
  src: string;
  alt: string;
}

export interface CategoryLogos {
  id: string | number;
  title: string;
  logos: LogoItem[];
}

export interface CertificateItem {
  id: string;
  src: string;
  alt: string;
}

interface BlogCardProps {
  headerData: BlogCard;
  category: CategoryLogos[];
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  certificate?: {
    title: string;
    description?: string;
    data: CertificateItem[];
  };
}

export default function AuthorisedPartners({
  category,
  headerData,
  certificate,
}: BlogCardProps) {
  // if the count is odd, the last card spans the full row
  const isOdd = category.length % 2 === 1;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        {/* Header */}
        <div>
          <SectionTag text={headerData.tag} />
          <div className="pt-4 lg:pt-6.5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <HeadingTag
              as="h2"
              highlightLast={headerData.highlightLast}
              text={headerData.heading}
            />

            <div className="flex flex-col gap-2 lg:gap-4 py-4 lg:py-6 pl-4 lg:pl-6 max-w-[550px] border-l-2 border-l-primary">
              <Image
                src={headerData.imageSrc}
                alt=""
                width={100}
                height={50}
                className="h-[26px] lg:h-[32px] w-auto self-start"
              />
              {headerData.rightDescription && (
                <p className="text-18 text-paragraph">
                  {headerData.rightDescription}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Logo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px] mt-[clamp(32px,4vw,56px)] 3xl:mt-[66px]">
          {category.map((cat, i) => {
            const isWide = isOdd && i === category.length - 1;
            return (
              <LogoBox
                key={cat.id}
                title={cat.title}
                logos={cat.logos}
                wide={isWide}
              />
            );
          })}
        </div>

        {/* Certified engineers */}
        {certificate && certificate.data.length > 0 && (
          <>
            <hr className="my-[clamp(32px,4vw,56px)] 3xl:my-[66px] border-[#D3D3D3]" />
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
              <div className="lg:w-[45%] lg:max-w-[560px]">
                <p className="text-18 text-primary font-medium">
                  {certificate.title}
                </p>
                {certificate.description && (
                  <p className="text-18 text-paragraph/60 mt-2">
                    {certificate.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 items-center justify-items-center lg:flex-1">
                {certificate.data.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-[72px] lg:h-[92px] flex items-center justify-center"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={218}
                      height={92}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export interface LogoBoxProps {
  title: string;
  logos: LogoItem[];
  className?: string;
  wide?: boolean;
}

export const LogoBox: React.FC<LogoBoxProps> = ({
  title,
  logos,
  className = "",
  wide = false,
}) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl p-5 lg:p-6 flex flex-col gap-[clamp(16px,2.625vw,42px)] ${
        wide ? "md:col-span-2" : ""
      } ${className}`}
    >
      <p className="text-24 font-normal text-primary">{title}</p>

      <div
        className={`grid grid-cols-3 gap-2 sm:gap-[clamp(16px,2vw,32px)] items-center justify-items-center ${
          wide ? "lg:grid-cols-6" : "lg:grid-cols-4"
        }`}
      >
        {logos.map((logo, index) => (
          <div
            key={logo.id ?? index}
            className="w-full h-[73px] flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt || logo.name || ""}
              width={150}
              height={73}
              className="w-auto h-[73px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};