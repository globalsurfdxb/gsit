import React, { type CSSProperties } from "react";
import Image from "next/image";
import {
  MonitorSmartphone,
  Network,
  Cctv,
  MonitorCog,
  ShieldCheck,
  BadgeCheck,
  BrainCircuit,
  Headset,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "../../common/Heading/SectionHeader";

export interface TeamMemberRole {
  id: string;
  title: string;
  description: string;
  icon?: string; // Placeholder for icon import/reference
}

export interface AccreditationLogo {
  id: string;
  name: string;
  imageSrc: string; // Placeholder for asset path
}

type TeamAccreditationData = Omit<
  typeof import("../data").teamAccreditationData,
  "teams"
> & {
  teams: TeamMemberRole[];
};

type TeamAccreditationSectionProps = {
  data: TeamAccreditationData;
};

const ICON_MAP: Record<string, LucideIcon> = {
  "it-engineers": MonitorSmartphone,
  "network-engineers": Network,
  "av-engineers": Cctv,
  "av-programmers": MonitorCog,
  "cybersecurity-experts": ShieldCheck,
  "sira-engineers": BadgeCheck,
  "ai-engineers": BrainCircuit,
  "remote-support": Headset,
};

/* ---------- Marquee helpers ---------- */

const MARQUEE_ROWS = 3;
const MARQUEE_DURATIONS: string[] = ["32s", "38s", "35s"];

interface MarqueeStyle extends CSSProperties {
  "--marquee-duration"?: string;
}

/** Round-robin split: (0,3,6…) / (1,4,7…) / (2,5,8…) */
function splitIntoRows<T>(items: T[], rowCount: number): T[][] {
  return Array.from({ length: rowCount }, (_, r) =>
    items.filter((_, i) => i % rowCount === r),
  );
}

interface AccreditationLogosProps {
  partners: AccreditationLogo[];
}

const AccreditationLogos: React.FC<AccreditationLogosProps> = ({
  partners,
}) => {
  const rows: AccreditationLogo[][] = splitIntoRows(partners, MARQUEE_ROWS);

  return (
    <>
      {/* Mobile only: marquee */}
      <div className="flex flex-col gap-2 lg:hidden">
        {rows.map((row, rowIndex) => {
          const trackStyle: MarqueeStyle = {
            "--marquee-duration":
              MARQUEE_DURATIONS[rowIndex % MARQUEE_DURATIONS.length],
          };

          return (
            <div
              key={rowIndex}
              className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            >
              <div
                className="marquee-track flex w-max active:[animation-play-state:paused]"
                data-reverse={rowIndex % 2 === 1}
                style={trackStyle}
              >
                {/* Copy 1: real, crawlable content */}
                <ul className="flex shrink-0 gap-3 pr-3">
                  {row.map((logo) => (
                    <li
                      key={logo.id}
                      className="flex shrink-0 items-center justify-center "
                    >
                      <Image
                        src={logo.imageSrc}
                        alt={logo.name}
                        width={233}
                        height={121}
                        className=" h-[62px] w-[120px]  sm:h-[78px] sm:w-[150px] md:h-[93px] md:w-[180px] lg:h-[109px] lg:w-[210px] xl:h-[121px] xl:w-[233px] "
                      />
                    </li>
                  ))}
                </ul>

                {/* Copy 2: visual clone, hidden from crawlers/screen readers */}
                <ul aria-hidden="true" className="flex shrink-0 gap-3 pr-3">
                  {row.map((logo) => (
                    <li
                      key={`clone-${logo.id}`}
                      className="flex  shrink-0 items-center justify-center  "
                    >
                      <Image
                        src={logo.imageSrc}
                        alt={logo.name}
                        width={233}
                        height={121}
                        className="h-[62px] w-[120px] sm:h-[78px] sm:w-[150px] md:h-[93px] md:w-[180px] lg:h-[109px] lg:w-[210px] xl:h-[121px] xl:w-[233px] "
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* sm and up: existing grid */}
      <ul className="hidden grid-cols-3 gap-x-4 gap-y-4 lg:grid md:grid-cols-4 md:gap-x-6 md:gap-y-6 lg:grid-cols-6 lg:gap-x-[30px] lg:gap-y-[34px] xl:gap-x-[36.34px]">
        {partners.map((logo) => (
          <li
            key={logo.id}
            className="flex aspect-[233/121] w-full items-center justify-center"
          >
            <Image
              src={logo.imageSrc}
              alt={logo.name}
              width={233}
              height={121}
              className="h-full w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

/* ---------- Main section ---------- */

export const TeamAccreditationSection: React.FC<
  TeamAccreditationSectionProps
> = ({ data }) => {
  const { header, teams, accreditationSection } = data;

  return (
    <section className="w-full rounded-2xl bg-white py-82">
      <div className="container">
        {/* Header */}
        <SectionHeader
          data={{
            tag: header.tag,
            heading: header.heading,
            highlightLast: header.highlightLast,
            subhead: header.subhead,
          }}
          variant="subtitle"
          className="!pt-6"
          subtitleClass="w-full !mt-4"
        />

        {/* Team roles */}
        <ul className="grid grid-cols-2 gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-3 md:gap-y-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-y-[42px] pt-52">
          {teams.map((role) => {
            const Icon = ICON_MAP[role.id];
            return (
              <li key={role.id} className="py-1 sm:p-4 lg:p-6">
                <div className="mb-4 lg:mb-6 flex h-[40px] w-[40px] lg:h-[58px] lg:w-[58px] items-center justify-center rounded-[10px] bg-[#F4F6FB] text-primary shadow-[0_2px_8px_rgba(17,74,159,0.06)] md:mb-[55px]">
                  {role.icon ? (
                    <Image
                      src={role.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  ) : (
                    Icon && (
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.4}
                        className="h-8 w-8"
                      />
                    )
                  )}
                </div>

                <h3 className="mb-2 md:3 text-24-medium tracking-[-0.03em] text-primary md:mb-4">
                  {role.title}
                </h3>
                <p className="m-0 max-w-[339px] text-18 leading-[1.444] text-paragraph ">
                  {role.description}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Key accreditation */}
        <div className="mt-52 p-4 lg:p-6 rounded-[16x] bg-[#FDFDFD]  ">
          <div className="mb-6">
            <h3 className="mb-4 text-32 font-medium !leading-[1.2]  text-primary">
              {accreditationSection.title}
            </h3>
            <p className="text-[16px] text-paragraph leading-[1.4]">
              {accreditationSection.subtitle}
            </p>
          </div>

          <AccreditationLogos partners={accreditationSection.partners} />
        </div>
      </div>
    </section>
  );
};

export default TeamAccreditationSection;
