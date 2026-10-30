import React from "react";
import { ArrowRight, CircleAlert, Clock, Headset } from "lucide-react";
import SectionHeader from "../../common/Heading/SectionHeader";

type SlaEscalationSectionProps = {
  data: typeof import("../data").slaEscalationData;
};

/* Colour tokens per priority (mirrors .sla-card.high/.med/.low and .sla-badge.*) */
const PRIORITY_STYLES: Record<string, { card: string; badge: string }> = {
  "high-priority": {
    card: "bg-[linear-gradient(180deg,_#FFFFFF_-28.98%,_#FBEAEA_100%)]",
    badge: "text-[#FF383C]",
  },
  "medium-priority": {
    card: "bg-[linear-gradient(180.44deg,_#FFFFFF_-122.39%,_#FEFAF4_99.62%)]",
    badge: "text-[#FD8747]",
  },
  "low-priority": {
    card: "bg-[linear-gradient(178.46deg,_#FFFFFF_-169.25%,_#F6FBFE_98.69%)]",
    badge: "text-primary",
  },
};

export const SlaEscalationSection: React.FC<SlaEscalationSectionProps> = ({
  data,
}) => {
  const {
    header,
    topBanner,
    priorityLevels,
    disclaimer,
    escalationHeader,
    escalationLevels,
  } = data;

  return (
    <section className="w-full bg-white rounded-2xl py-82">
      <div className="container mx-auto px-4 md:px-8">
        {/* ───────────── SLA ───────────── */}

        <SectionHeader
          data={{
            tag: header.tag,
            heading: header.heading,
            subhead: header.subhead,
            highlightLast: header.highlightLast,
          }}
          variant="subtitle"
          className="!pt-[22px] lg:!pt-[26px]"
          subtitleClass="w-full !mt-4"
        />

        <div className="pt-52">
          {/* Top banner */}
          <div className="mb-6 flex flex-col gap-2 rounded-[16px] bg-[#EEFAEE] px-6 py-8 md:flex-row md:flex-wrap md:items-center md:gap-[18px]">
            <div className="flex items-center gap-4 md:gap-6">
              <Headset
                aria-hidden="true"
                strokeWidth={1.6}
                className="h-[32px] w-[32px] lg:h-[44px] lg:w-[44px] shrink-0 text-primary"
              />
              <span className="whitespace-nowrap text-[28px] leading-[34px] sm:text-[34px] sm:leading-[41px] lg:text-[42px] lg:leading-[50px] font-bold text-primary">
                {topBanner.time}
              </span>
            </div>
            <p className="m-0 text-18 text-primary max-sm:leading-[1.44] md:relative md:top-[5px]">
              {topBanner.description}
            </p>
          </div>

          {/* Priority cards */}
          <div className="grid grid-cols-1 gap-[24px] lg:gap-[30px] lg:grid-cols-3">
            {priorityLevels.map((item) => {
              const style =
                PRIORITY_STYLES[item.id] ?? PRIORITY_STYLES["low-priority"];
              return (
                <article
                  key={item.id}
                  className={`rounded-[16px] p-[26px] flex flex-col gap-4 lg:gap-6  md:p-[32px] lg:p-[42px]  ${style.card}`}
                >
                  <div>
                    <span
                      className={`mb-3 py-2 px-3 inline-block rounded-[8px] bg-white  text-[16px] font-medium  ${style.badge}`}
                    >
                      {item.priorityLabel}
                    </span>

                    <h3 className="mb-2 text-[22px] font-medium leading-[1.59] text-primary">
                      {item.title}
                    </h3>
                    <p className="text-[16px] leading-[1.4] lg:leading-[1.625] text-paragraph">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <div className="mb-4 text-18  font-semibold leading-[1.777] text-paragraph">
                      On-site support
                    </div>
                    <div className="text-[48px] font-extrabold !leading-[1] text-primary md:text-[48px]">
                      {item.onsiteSupportTime}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-[14px] leading-[1.2] text-paragraph">
                      Target Resolution approach
                    </div>
                    <h4 className="mb-2 text-18-medium text-primary">
                      {item.resolutionApproachTitle}
                    </h4>
                    <p className="m-0 text-[16px] leading-[1.625] text-paragraph">
                      {item.resolutionApproachDesc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="flex gap-2 lg:gap-4 items-center mt-52 inline-flex font-light text-16 italic leading-[1.444] text-[#A9A9A9] ">
          <CircleAlert className="shrink-0 self-start w-5 h-5 md:w-8 md:h-8 text-[#FF5900]" />
          <span>{disclaimer}</span>
        </p>

        {/* ───────────── Escalation ───────────── */}
        <div className="pt-52">
          <SectionHeader
            data={{
              tag: escalationHeader.tag,
              heading: escalationHeader.heading,
              subhead: escalationHeader.subhead,
              highlightLast: 2,
            }}
            variant="subtitle"
            className="!pt-6"
            subtitleClass="w-full !mt-4 lg:!mt-6"
          />
        </div>

        <ol className="flex flex-col pt-52 gap-y-[82px] lg:flex-row lg:items-stretch lg:gap-x-16 xl:gap-x-[82px]">
          {escalationLevels.map((item, index) => {
            const isLast = index === escalationLevels.length - 1;
            return (
              <li key={item.id} className="relative flex-1 lg:basis-0">
                <div className="flex flex-col gap-5">
                  {/* Level tag */}
                  <span className="w-fit rounded-[4px] bg-[#F5F9FC] p-2 text-16 !leading-[1] font-medium tracking-[0.03em] text-primary">
                    {item.level}
                  </span>

                  {/* Role + title */}
                  <div>
                    <div className="text-18 leading-[1.444] text-primary">
                      {item.role}
                    </div>
                    <h3 className="text-24-medium leading-[1.5] text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="m-0 max-w-[485px] text-18 !leading-[1.444] text-[#A9A9A9]">
                    {item.description}
                  </p>
                </div>

                {/* Arrow: sibling of the content wrapper, positioned against the <li> */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0px_3px_14px_0px_#1A3FA64D]
              left-1/2 -translate-x-1/2 -bottom-[65px] rotate-90
              lg:left-auto lg:right-[-56px] lg:bottom-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0
              xl:right-[-65px]"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default SlaEscalationSection;
