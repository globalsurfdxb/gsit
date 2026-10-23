import React from "react";
import SectionHeader from "../../common/Heading/SectionHeader";

export interface ChallengeItem {
  id: string;
  problemLabel: string;
  problemTitle: string;
  problemDescription: string;
  solutionLabel: string;
  solutionDescription: string;
}

interface ChallengesSectionProps {
  data: FeatureItem;
  items: ChallengeItem[];
  redtheme?: boolean;
  subtitleClass?:string
}

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
}
export const ChallengesSection: React.FC<ChallengesSectionProps> = ({
  data,
  items,
  redtheme = false,
  subtitleClass
}) => {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={"defaultBorder"}
          highlightColorClass={redtheme ? "text-[#E5484D]" : "text-primary"}
          subtitleClass={subtitleClass}
        />

        <div className="pt-52">
          <div className=" rounded-[16px] overflow-hidden divide-y divide-gray-200 bg-[#FCFCFD]">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 lg:divide-y-0 lg:gap-[24px]  divide-gray-200"
              >
                {/* The Problem Side */}
                <div className="p-4 md:p-6 flex flex-col justify-between bg-[#FCFCFD]">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <span className="text-4  leading-[1.625] text-[#DD0505]  block">
                      {item.problemLabel}
                    </span>
                    <h3 className="text-24 font-medium  text-[#525252]">
                      {item.problemTitle}
                    </h3>
                    <p className="text-[#A9A9A9] text-18 ">
                      {item.problemDescription}
                    </p>
                  </div>
                </div>

                {/* Our Solution Side */}
                <div className="p-4 md:p-6  flex flex-col justify-between bg-[#FCFFFA]">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <span className="text-4 leading-[1.625]  text-[#007D1F]  block">
                      {item.solutionLabel}
                    </span>
                    <p className="text-[#525252] text-18">
                      {item.solutionDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
