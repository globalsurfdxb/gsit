import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface CapabilityItem {
  icon: string; // Lucide icon name in PascalCase, e.g. "MonitorUp"
  title: string;
  text: string;
  outcome: string;
}

export interface PlatformItem {
  logo: string;
  name: string;
}

export interface CapabilitiesData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: CapabilityItem[];
  platformStrip: {
    title: string;
    platforms: PlatformItem[];
  };
}

interface CapabilitiesProps {
  data: CapabilitiesData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function CapabilitiesSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: CapabilitiesProps) {
  const { platformStrip } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Capabilities grid */}
        <div className="mt-8 grid grid-cols-1 gap-x-4 md:gap-x-6 gap-y-6 md:grid-cols-2 md:gap-y-10.5 lg:mt-52 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <article key={i} className="flex flex-col lg:px-3 xl:p-6">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-lg bg-[#EEF4FD] sm:h-[58px] sm:w-[58px]">
                <LucideIcon
                  name={item.icon}
                  className="h-[26px] w-[26px] text-primary"
                  strokeWidth={1.25}
                />
              </div>

              <h3 className="mt-4 text-primary text-24 font-normal md:mt-4">
                {item.title}
              </h3>

              <p className=" text-18 text-paragraph my-4">
                {item.text}
              </p>

              {/* mt-auto keeps the outcome lines aligned across a row */}
              <p className="mt-auto border-l-2 border-primary pl-3 text-18 text-primary">
                {item.outcome}
              </p>
            </article>
          ))}
        </div>

        {/* Platform strip */}
        <div className="mt-52">
          <div className="flex items-center justify-between gap-[clamp(24px,3vw,48px)] rounded-2xl bg-[linear-gradient(90deg,#EEF4FD_0%,#EAF1FC_100%)] p-4 max-[1420px]:flex-col max-[1420px]:items-start">
            <h2 className="text-24-medium   text-primary">
              {platformStrip.title}
            </h2>

            <ul className="grid w-full grid-cols-2 items-center gap-4 min-[576px]:flex min-[576px]:w-auto min-[576px]:flex-wrap min-[576px]:justify-end min-[576px]:gap-x-[clamp(24px,4vw,56px)] max-[1420px]:min-[576px]:w-full max-[1420px]:min-[576px]:justify-start">
              {platformStrip.platforms.map((platform, i) => (
                <li key={i} className="flex items-center gap-2.5 min-[576px]:gap-3.5">
                  <Image
                    src={platform.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="h-auto w-auto object-contain"
                  />
                  <span className="text-[15px] leading-[1.4] text-paragraph min-[576px]:whitespace-nowrap min-[576px]:text-[16px]">
                    {platform.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}