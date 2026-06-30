import Image from "next/image";

import { ReactNode } from "react";
interface IconBoxProps {
  src?: string;
  icon?: ReactNode;
  alt?: string;
  bgClass?: string;
  imgsize?: string;
  csBorder?:string;
}

export default function IconBox({ src, icon, alt = "icon", bgClass = "bg-white rounded-[8px]", imgsize = "", csBorder }: IconBoxProps) {
  return (
    <div className={`  w-[42px] h-[42px] 2xl:w-[58px] 2xl:h-[58px]   ${bgClass} flex items-center justify-center`}
     style={{ border: `1px solid ${csBorder}` }}  >
      {icon ? (
        <span className={imgsize}>{icon}</span>
      ) : src ? (
        <Image src={src} alt={alt} width={32} height={32} className={imgsize} />
      ) : null}
    </div>
  );
}