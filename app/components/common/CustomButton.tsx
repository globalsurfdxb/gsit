import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  text?: string;
  href?: string;
  icon?: string;
  bgButton?: string;
  dark?: boolean;
}

export default function CustomButton({
  text = "Button",
  href = "#",
  icon = "",
  bgButton = "bg-primary",
  dark = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 ${bgButton} ${
        dark ? "text-white hover:bg-[#152d7a]" : "text-primary hover:bg-[#fafafa]"
      }  px-[32px] py-[16px] rounded-full overflow-hidden relative`}
    >
      <span className="transition-colors duration-300 text-18 !leading-[1.445] font-light">{text}</span>
      {icon && (
        <span className="relative w-6 h-6 overflow-hidden">
          {/* current icon slides out up */}
          <Image
            src={icon}
            alt="icon"
            width={24}
            height={24}
            className={`absolute top-0 left-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full ${
              dark ? "brightness-0 invert" : ""
            }`}
          />
          {/* duplicate slides in from below */}
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            aria-hidden
            className={`absolute top-0 left-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
              dark ? "brightness-0 invert" : ""
            }`}
          />
        </span>
      )}
    </Link>
  );
}