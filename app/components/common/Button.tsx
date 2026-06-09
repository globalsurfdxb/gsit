import Link from "next/link";
import Image from "next/image";
interface ButtonProps {
  text?: string;
  href?: string;
  icon?: string;
  bgButton?: string;
  arrowdark?: boolean;
}

const fullarrow = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5L19 12L12 19" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const arrow = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default function Button({
  text = "Button",
  href = "#",
  icon = '',
  bgButton = "bg-primary",
  arrowdark = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 ${bgButton} hover:bg-[#152d7a] ${arrowdark ? 'text-primary' : 'text-white'} transition-colors duration-300  text-18 !leading-[1.28] font-light px-[32px] py-[16.5px] rounded-full`}
    >
      {text} 
     {icon && (
      <Image src={icon} alt="icon" width={24} height={24} className={`text-lg leading-none ml-2 ${arrowdark ? '' : 'brightness-0 invert'}`}/>
      )}
    </Link>
    
  );
}