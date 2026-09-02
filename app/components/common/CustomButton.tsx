"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import { ArrowRight, CornerRightDown } from "lucide-react";  
import { useLenis, type LenisContextType } from "@/app/components/common/Layout/LenisProvider";

interface ButtonProps {
  text?: string;
  href?: string;
  icon?: string;
  hovericon?: boolean;
  bgButton?: string;
  dark?: boolean;
  hoverBg?: string;
}

function parseUppercaseTags(text: string) {
  const parts = text.split(/(<uppercase>.*?<\/uppercase>)/g);

  return parts.map((part, i) => {
    const match = part.match(/^<uppercase>(.*?)<\/uppercase>$/);
    if (match) {
      return (
        <span key={i} className="uppercase">
          {match[1]}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function CustomButton({
  text = "Button",
  href = "#",
  icon = "",
  hovericon = false,
  bgButton = "bg-primary",
  dark = false,
  hoverBg = "",
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false); 
const { scrollTo }: LenisContextType = useLenis();
  const IncomingIcon = hovericon ? CornerRightDown : ArrowRight;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept same-page hash links, e.g. "#whatwedo".
    // Any normal route or external URL falls through to next/link as usual.
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        scrollTo(el, { offset: -100 });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      className={`group w-full md:w-fit justify-center inline-flex items-center gap-2 ${bgButton} ${
        dark ? "text-white" : "text-primary"
      } px-8 py-3 md:py-[16px] lg:py-4 rounded-[50px] overflow-hidden relative transition-transform duration-150 ease-out ${
        isPressed ? "scale-95" : "scale-100"
      }`}
      style={
        dark
          ? { boxShadow: "0px 0px 4px 0px #0000000A" }
          : { boxShadow: "none" }
      }
    >
      {/* Desktop hover bg — slides in from left */}
      <span
        className={`absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full ${
          hoverBg ? hoverBg : dark ? "bg-[#152d7a]" : "bg-[#fafafa]"
        }`}
      />

      {/* Mobile touch bg — fades/scales in from center instead of sliding */}
      <span
        className={`absolute inset-0 rounded-full md:hidden transition-all duration-300 ease-out ${
          hoverBg ? hoverBg : dark ? "bg-[#152d7a]" : "bg-[#fafafa]"
        } ${isPressed ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      />

      <span className="lowercase first-letter:uppercase relative z-10 transition-colors duration-300 btntext text-[18px] !leading-[1] lg:!leading-[1.445] font-[500] lg:font-light">
        {parseUppercaseTags(text)}
      </span>

      {icon && (
        <span className="relative z-10 min-w-6 h-6 overflow-hidden">
          {/* Resting icon — always ArrowRight, slides out on hover */}
          <ArrowRight
            strokeWidth={1}
            className={`absolute top-0 left-0 h-6 min-w-6 transition-transform duration-300 delay-200 ease-in-out group-hover:translate-x-full ${
              dark ? "brightness-0 invert" : ""
            }`}
          />

          {/* Hover-in icon — CornerRightDown if hovericon, otherwise ArrowRight */}
          <IncomingIcon
            strokeWidth={1}
            className={`absolute top-1 left-0 h-6 min-w-6 -translate-x-full transition-transform duration-300 delay-200 ease-in-out group-hover:translate-x-0 ${
              dark ? "brightness-0 invert" : ""
            }`}
          />

          <ArrowRight
            strokeWidth={1}
            className={`hidden md:hidden absolute top-0 left-0 h-6 min-w-6 transition-all duration-200 ease-out ${
              isPressed ? "translate-x-1 rotate-12" : "translate-x-0 rotate-0"
            } ${dark ? "brightness-0 invert" : ""}`}
          />
        </span>
      )}
    </Link>
  );
}