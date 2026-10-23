import React from "react";
import Link from "next/link";
import HeaderContentAction from "../../common/HeaderContentAction";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

export interface AMCFeature {
  id: string;
  title: string;
  description: string;
}

interface AVAMCSectionProps {
  tag?: string;
  heading?: string;
  descriptionParagraphs?: string[];
  buttonText?: string;
  buttonHref?: string;
  cardTitle?: string;
  features: AMCFeature[];
}

export const AVAMCSection: React.FC<AVAMCSectionProps> = ({
  tag = "AV AMC",
  heading = "Keep Every Room\nCall-Ready After Go-Live",
  descriptionParagraphs = [],
  buttonText = "Explore Our Solutions",
  buttonHref = "#",
  cardTitle = "WHAT AN AV AMC COVERS",
  features = [],
}) => {
  return (
    <section className="bg-white py-12 md:py-20 rounded-2xl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[30px] items-start">
          {/* Left Column: Reusable Header Block */}
          <div className="w-full lg:max-w-[765px] flex flex-col justify-between">
            <HeaderContentAction
              tag={tag}
              heading={heading}
              highlightLast={3}
              descriptionParagraphs={descriptionParagraphs}
              buttonText={buttonText}
              buttonHref={buttonHref}
            />
          </div>

          {/* Right Column: Gradient Card Box */}
          <div className="w-full ">
            <div
              className="w-full rounded-[16px] p-4 lg:p-6 text-white"
              style={{
                background:
                  "linear-gradient(143.49deg, #1A2E6E 3.29%, #4578FF 94.24%)",
              }}
            >
              {/* Card Title */}
              <h3 className="text-[16px] uppercase leading-[1.44444] text-[#FFFFFF] mb-4 lg:mb-6">
                {cardTitle}
              </h3>

              {/* Features List with Dividers */}
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                {features.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 flex items-start border-b border-b-white/20 last:border-b-0 gap-4"
                  >
                    {/* Check Circle Icon */}
                    <div className="mt-0.5 flex-shrink-0 text-white/90">
                      <Image
                        width={32}
                        height={32}
                        src="/assets/images/icons/circle-checkmark.svg"
                        alt="check-mark"
                        className="text-white font-normal"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-[18px] font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[18px] text-[#F0F0F0] leading-[1.444]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AVAMCSection;
