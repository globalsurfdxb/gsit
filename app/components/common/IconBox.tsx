import Image from "next/image";

import { ReactNode } from "react";
interface IconBoxProps {
  src?: string;
  icon?: ReactNode;
  alt?: string;
  bgClass?: string;
  imgsize?: string;
}

export default function IconBox({ src, icon, alt = "icon", bgClass = "bg-white rounded-[8px]", imgsize = "" }: IconBoxProps) {
  return (
    <div className={`min-w-[42px] min-h-[42px] lg:min-w-[58px] lg:min-h-[58px] w-[42px] h-[42px] lg:w-[58px] lg:h-[58px]  ${bgClass} flex items-center justify-center`}>
      {icon ? (
        <span className={imgsize}>{icon}</span>
      ) : src ? (
        <Image src={src} alt={alt} width={32} height={32} className={imgsize} />
      ) : null}
    </div>
  );
}