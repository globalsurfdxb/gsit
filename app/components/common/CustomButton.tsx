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
  return (
    <Link
      href={href}
      className={`group w-full md:w-fit justify-center inline-flex items-center gap-2 ${bgButton} ${
        dark ? "text-white" : "text-primary"
      } px-8 py-3 md:py-[16px] lg:py-4 rounded-3xl overflow-hidden relative`}
    >
      {/* sliding bg — enters from left on hover */}
      <span
        className={`absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full ${
          hoverBg ? hoverBg : dark ? "bg-[#152d7a]" : "bg-[#fafafa]"
        }`}
      />

      <span className="relative z-10 transition-colors duration-300 text-[18px] !leading-[1] lg:!leading-[1.445] font-[500] lg:font-light">
        {text}
      </span>

      {icon && (
        <span className="relative z-10 min-w-6 h-6 overflow-hidden">
          {/* current icon slides out to the right */} 
          <ArrowRight strokeWidth={1} className={`absolute top-0 left-0 h-6 min-w-6 transition-transform duration-300 delay-200 ease-in-out group-hover:translate-x-full ${
              dark ? "brightness-0 invert" : ""
            }`}/>
          {/* new icon slides in from the left */}
          <ArrowRight strokeWidth={1} className={`absolute top-0 left-0 h-6 min-w-6 -translate-x-full transition-transform duration-300 delay-200 ease-in-out group-hover:translate-x-0  ${
              dark ? "brightness-0 invert" : ""
            }`}/>

          
        </span>
      )}
    </Link>
  );
}