"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text?: string;
  href?: string;
  icon?: string;
  bgButton?: string;
  dark?: boolean;
  hoverBg?: string;
}

export default function CustomButton({
  text = "Button",
  href = "#",
  icon = "",
  bgButton = "bg-primary",
  dark = false,
  hoverBg = "",
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Link
      href={href}
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
        {text}
      </span>

      {icon && (
        <span className="relative z-10 min-w-6 h-6 overflow-hidden">
          {/* Desktop: current icon slides out to the right */}
          <ArrowRight
            strokeWidth={1}
            className={`absolute top-0 left-0 h-6 min-w-6 transition-transform duration-300 delay-200 ease-in-out group-hover:translate-x-full ${
              dark ? "brightness-0 invert" : ""
            }`}
          />
          {/* Desktop: new icon slides in from the left */}
          <ArrowRight
            strokeWidth={1}
            className={`absolute top-0 left-0 h-6 min-w-6 -translate-x-full transition-transform duration-300 delay-200 ease-in-out group-hover:translate-x-0 ${
              dark ? "brightness-0 invert" : ""
            }`}
          />

          {/* Mobile: single icon, nudges right + rotates slightly on tap */}
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