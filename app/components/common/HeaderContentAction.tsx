import React from "react";
import Link from "next/link";
import SectionTag from "./Heading/SectionTag";
import HeadingTag from "./Heading/HeadingTag";
import CustomButton from "./CustomButton";

interface HeaderContentActionProps {
  tag?: string;
  tagDotColor?: string;
  heading?: string;
  highlightLast?: number;
  descriptionParagraphs?: string[];
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export const HeaderContentAction: React.FC<HeaderContentActionProps> = ({
  tag,
  tagDotColor = "bg-primary",
  heading,
  highlightLast,
  descriptionParagraphs = [],
  buttonText,
  buttonHref = "#",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start ${className} `}>
      {/* Optional Tag */}
      {tag && <SectionTag text={tag} />}
      <div className="mt-[26px]">
        {heading && (
          <HeadingTag as={"h2"} highlightLast={highlightLast} text={heading} />
        )}
      </div>

      {descriptionParagraphs.length > 0 && (
        <div className="space-y-4 mt-6 mb-8 text-[18px] text-paragraph leading-[1.4444] ">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="lg:mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {buttonText && (
        <CustomButton
          text={buttonText}
          href={buttonHref}
          icon={"ArrowRight"}
          dark={true}
        />
      )}
    </div>
  );
};

export default HeaderContentAction;
