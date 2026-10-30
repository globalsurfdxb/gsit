import React from "react";
import Link from "next/link";
import SectionHeader from "../../common/Heading/SectionHeader";

type CoverageModelsSectionProps = {
  data: typeof import("../data").coverageModelsData;
};

export interface CoverageModelItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  isDarkTag?: boolean;
}

const splitHeading = (heading: string, highlightLast: number) => {
  const words = heading.trim().split(/\s+/);
  const n = Math.min(Math.max(highlightLast, 0), words.length);
  return {
    plain: words.slice(0, words.length - n).join(" "),
    accent: words.slice(words.length - n).join(" "),
  };
};

const Description: React.FC<{
  item: CoverageModelItem & { href?: string };
}> = ({ item }) => {
  const match = item.description.match(/^(.*?)(Learn more\.)$/);
  if (!match) return <>{item.description}</>;

  return (
    <>
      {match[1]}
      <Link href={item.href ?? "#"} className="text-primary hover:underline">
        {match[2]}
      </Link>
    </>
  );
};

export const CoverageModelsSection: React.FC<CoverageModelsSectionProps> = ({
  data,
}) => {
  const { header, models } = data;

  return (
    <section className="w-full rounded-2xl bg-white py-82">
      <div className="container ">
        {/* Header */}
        <SectionHeader
          data={{
            tag: header.tag,
            heading: header.heading,
            subhead: header.subhead,
            highlightLast: header.highlightLast,
          }}
          variant="defaultBorder"
          className="!pt-[26px]"
          subtitleClass="max-w-[53ch]"
        />

        {/* Cards */}
        <ul className="pt-52 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px] lg:grid-cols-3">
          {models.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-[16px] bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-6 transition-all duration-300"
            >
              <span
                className={`mb-4 md:mb-6 inline-flex w-fit items-center rounded-[4px] p-2 text-[16px] leading-[1.625]   ${
                  item.isDarkTag
                    ? "bg-[linear-gradient(135deg,_#1A2E6E_0%,_#1A3FA0_100%)] text-white"
                    : "bg-[#F1F5FB] text-primary"
                }`}
              >
                {item.tag}
              </span>

              <h3 className="mb-4 text-24 font-medium leading-[1.5] tracking-[-0.03em] text-primary ">
                {item.title}
              </h3>

              <p className="m-0 text-18 leading-[1.4444] text-paragraph ">
                <Description item={item} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoverageModelsSection;
