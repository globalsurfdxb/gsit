import Image from "next/image";

interface DotPatternProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function DotPattern({ variant = "dark", className = "" }: DotPatternProps) {
  const src = variant === "light" ? "/assets/images/icons/pattern-dark.svg" : "/assets/images/icons/pattern-lte.svg";

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={319}
      height={200}
      className={`absolute h-35% w-[159px] xl:h-full 2xl:w-[319px] top-0 right-0 pointer-events-none object-cover ${className}`}
    />
  );
}