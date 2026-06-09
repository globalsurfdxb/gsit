import Image from "next/image";

interface IconBoxProps {
  src: string;
  alt?: string;
  bgClass?: string;
  imgsize?: string;
}

export default function IconBox({ src, alt = "icon", bgClass = "bg-white", imgsize = "w-[28px] h-[28px]" }: IconBoxProps) {
  return (
    <div className={`w-[42px] h-[42px] lg:w-[58px] lg:h-[58px] rounded-[12px] ${bgClass} flex items-center justify-center`}>
      <Image src={src} alt={alt} width={28} height={28} className={imgsize} />
    </div>
  );
}