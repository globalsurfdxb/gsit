import Image from "next/image";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface BrandLogo {
  logo: string;
  alt: string;
}

export interface BrandGroup {
  title: string;
  logos: BrandLogo[];
}

export interface PartnerBrandsData {
  tag: string;
  heading: string;
  highlightLast: number;
  aside: {
    logo: string;
    logoAlt: string;
    text: string;
  };
  groups: BrandGroup[];
  certTitle: string;
  certifications: BrandLogo[];
}

interface PartnerBrandsProps {
  data: PartnerBrandsData;
}

export default function PartnerBrandsSection({ data }: PartnerBrandsProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <SectionTag text={data.tag} />
            <div className="pt-4 xl:pt-6.5">
              <HeadingTag
                as="h2"
                text={data.heading}
                highlightLast={data.highlightLast}
              />
            </div>
          </div>

          <div className="border-l-2 border-primary pl-5 lg:max-w-[40%] 3xl:max-w-[560px] lg:pl-6">
            <Image
              src={data.aside.logo}
              alt={data.aside.logoAlt}
              width={160}
              height={48}
              className="h-auto max-h-10 w-auto object-contain object-left lg:max-h-12"
            />
            <p className="mt-3 text-18 text-paragraph">{data.aside.text}</p>
          </div>
        </div>

        {/* Brand groups */}
        <div className="mt-52 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {data.groups.map((group, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#e5e5e5] bg-white p-5 lg:p-6"
            >
              <h3 className="text-primary text-24 font-normal tracking-[-3%]">
                {group.title}
              </h3>

              <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 lg:mt-10 lg:gap-y-8">
                {group.logos.map((logo, j) => (
                  <div
                    key={j}
                    className="flex h-12 items-center justify-center lg:h-[73px]"
                  >
                    <Image
                      src={logo.logo}
                      alt={logo.alt}
                      width={140}
                      height={56}
                      className="h-auto max-h-full w-auto max-w-[162px] object-contain "
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10 border-t border-[#e5e5e5] pt-8 lg:mt-[66px] lg:pt-[66px]">
          <h3 className="text-primary text-32 font-normal tracking-[-3%]">
            {data.certTitle}
          </h3>

          <div className="mt-2 grid grid-cols-3 items-center gap-x-4 gap-y-8 sm:grid-cols-3 lg:mt-6 lg:grid-cols-6">
            {data.certifications.map((cert, i) => (
              <div key={i} className="flex h-18 items-center justify-center lg:h-[92px]">
                <Image
                  src={cert.logo}
                  alt={cert.alt}
                  width={140}
                  height={80}
                  className="h-auto max-h-full w-auto max-w-[218px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}