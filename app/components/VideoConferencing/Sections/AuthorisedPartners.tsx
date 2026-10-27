"use client";

import LogoSlider from "@/app/components/common/LogoSlider";
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

export interface CategoryLogos {
  id: string | number;
  title: string;
  logos: LogoItem[];
}

interface LogoItem {
  id?: string | number;
  name?: string;
  src: string;
  alt: string;
}
interface blogkey {
  title?: string;
  description?: string;
}
export interface CertificateItem {
  id: string;
  src: string;
  alt: string;
}

interface BlogCardProps {
  headerData: BlogCard;
  category: CategoryLogos[];
  border?: boolean;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  imgheight?: string;
  parnerpoints?: blogkey[];
  certificate?: {
    title:string
    data:CertificateItem[]
  };
  subheading?:string
}

export default function AuthorisedPartners({
  category,
  headerData,
  parnerpoints,
  certificate,
  subheading
}: BlogCardProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container ">
        <div>
          <SectionTag text={headerData.tag} />
          <div className="pt-[16px] lg:pt-[26px] flex flex-col  max-lg:gap-[16px] lg:flex-row lg:items-center sm:mt-[24px] lg:mt-0">
            <div className="w-full ">
              <HeadingTag
                as={"h2"}
                highlightLast={headerData.highlightLast}
                text={headerData.heading}
              />
            </div>
            <div className="flex  flex-wrap md:flex-col gap-2 lg:gap-4 p-[16px] lg:p-[24px] pr-0 max-w-[550px] border-l-[2px] border-l-primary">
              <Image
                src={headerData.imageSrc}
                alt=""
                width={100}
                height={50}
                className="h-[26px] w-auto self-start lg:h-[32px]"
              />
              {headerData.rightDescription && (
                <p className="text-18  text-paragraph">{headerData.rightDescription}</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[30px] mt-[clamp(32px,4vw,56px)] 3xl:mt-[66px]">
          {category.map((category) => (
            <LogoBox
              key={category.id}
              title={category.title}
              logos={category.logos}
            />
          ))}
        </div>
        {/* <div
          className={`mt-4  ${border ? "lg:mt-8" : "md:mt-10.5 3xl:mt-[66px]"}`}
        >
          <LogoSlider
            partnersData={logo}
            slidecount={5}
            imgheight={imgheight}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LogoBox title={"category.title"} logos={logo} />
          </div>
        </div> */}
        {certificate&&certificate.data && certificate.data.length && (
            <>
            <hr className="my-[clamp(32px,4vw,56px)] 3xl:my-[66px] text-[#D3D3D3]"/>
          <div>
            <p className="text-24 lg:text-32 text-primary font-medium ">{certificate?.title}</p>
            <div className="mt-[24px] grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-[16px] lg:gap-[62.2px] items-center justify-center">
              {certificate.data.map((certficate, ind) => (
                <div
                  key={ind}
                  className="w-full h-[92px] flex items-center justify-center"
                >
                  <Image
                    src={certficate.src}
                    alt={certficate.alt}
                    className="w-auto h-[92px] object-contain"
                    width={218}
                    height={92}
                  />
                </div>
              ))}
            </div>
          </div>
            </>
        )}

        {parnerpoints && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 3xl:gap-y-[60px] mt-6 3xl:mt-[60px]">
            {parnerpoints?.map((point, i) => (
              <div key={i}>
                <div className="w-8 h-[2px] bg-primary mb-2"></div>
                <h3 className="text-18 text-paragraph font-medium tracking-[-3%] 3xl:!leading-[1.778]">
                  {point.title}
                </h3>
                <p className="text-18 text-paragraph/50 mt-2">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}



export interface LogoBoxProps {
  title: string;
  logos: LogoItem[];
  className?: string;
}

export const LogoBox: React.FC<LogoBoxProps> = ({
  title,
  logos,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-white 
        border border-gray-200 
        rounded-[16px] 
        p-[20px]
        lg:p-[24px] 
        flex flex-col gap-[clamp(16px,2.625vw,42px)]
        ${className}
      `}
    >
      <p className="text-24 font-semibold text-primary ">
        {title}
      </p>

      {/* Logo Grid inside Box */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[clamp(16px,2vw,32px)] items-center justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={logo.id || index}
            className="w-auto h-[73px] flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt || logo.name || ""}
              className="w-auto h-[73px]"
              width={150}
              height={72}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
