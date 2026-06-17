// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/public/data/data";
import { Mail,Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white mt-8">

      {/* Main footer */}
      <div className="container pt-8 pb-10 xl:py-[42px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_864px] gap-6 lg:gap-20">

          {/* Left — logo, address, contact, social */}
          <div className="flex flex-col md:gap-8 ">
            <Link href="/">
              <Image
                src={footerData.logo}
                alt="GS.IT"
                width={120}
                height={48}
                className="w-[106px] lg:w-[200px]   object-contain"
              />
            </Link>

            <div className="flex flex-col pt-8 pb-6 md:pt-0 md:pb-0">
              {footerData.address.map((line, i) => (
                <p key={i} className="text-paragraph text-17">{line}</p>
              ))}
            </div>

            <div className="flex items-center gap-2 lg:gap-6 flex-wrap">
              <a
                href={`mailto:${footerData.contact.email}`}
                className="flex items-center gap-2 lg:gap-4 "
              >
                <div className="py-[5.5px]">
               <Mail strokeWidth={1}/>
                </div>

                <span className="text-paragraph text-18 !leading-[1.1.945] hover:text-primary transition-colors duration-200 font-[500]">{footerData.contact.email}</span>
              </a>
              <div className="w-[1px] h-full bg-paragraph"> </div>
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 lg:gap-4"
              >
                <div className="py-[5.5px]">
               
               <Phone strokeWidth={1}/>
                </div>

                 <span className="text-paragraph text-18 !leading-[1.1.945] hover:text-primary transition-colors duration-200 font-[500]">{footerData.contact.phone}</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-[7px]  mt-10.5 lg:mt-2.5">
              {footerData.social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[44px] h-[44px] border border-[#E0E0E0] rounded-[2px] flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <Image src={s.icon} alt={s.alt} width={18} height={18} className={`${s.h} w-fit object-contain`} />
                </a>
              ))}
            </div>
          </div>
          {/* end Left */}

          {/* Right — nav columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 3xl:grid-cols-[293px_293px_214px] gap-8 md:gap-16 3xl:gap-8">
            {footerData.navColumns.map((col, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-paragraph text-27-medium  ">{col.title}</h4>
                <ul className="flex flex-col md:gap-[4px]">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-paragraph text-[16px] leading-[1.875] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.445] md:text-18 hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* end Right */}

        </div>
      </div>
      {/* end Main footer */}

      {/* Group companies */}
      <div className="border-t border-[#cccccc]">
        <div className="container py-4 lg:py-[42px]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4.5 md:gap-0 md:justify-between">
            <p className="text-black text-[16px] font-[500] leading-[1.625] md:leading-[1.2967] tracking-[-3%] md:text-[20px] lg:text-27 ">
              Our Group Companies
            </p>
            <div className="flex w-full md:w-fit items-center justify-between md:gap-[195.75px] flex-wrap">
             <div > 
                  <Image
                    src={'/assets/images/gs-digital.svg'}
                    alt={'gs-digital'}
                    width={146}
                    height={32}
                    className="h-4 md:h-8 w-auto object-contain  transition-opacity duration-200"
                  /> 
                  </div>
                 <div>
                  <Image
                    src={'/assets/images/gs-it-security.svg'}
                    alt={'gs-it-security'}
                    width={213}
                    height={32}
                    className="h-4 md:h-8 w-auto object-contain  transition-opacity duration-200"
                  /> 
                  </div>
                 <div>
                  <Image
                    src={'/assets/images/gs-av.svg'}
                    alt={'gs-av'}
                    width={93}
                    height={32}
                    className="h-4 md:h-8 w-auto object-contain  transition-opacity duration-200"
                  /> 
                  </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Group companies */}

      {/* Bottom bar */}
      <div className="bg-[#FAF9F6]">
        <div className="container py-4 md:py-5 xl:py-[28px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-3">
            <div className="flex items-center gap-[18.5px] flex-wrap">
              {footerData.legal.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-paragraph text-[12px] md:text-[14px] leading-[2.167] md:leading-[1.79] hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-paragraph text-[12px] md:text-[14px] leading-[2.167] md:leading-[1.79]">{footerData.copyright}</p>
          </div>
        </div>
      </div>
      {/* end Bottom bar */}

    </footer>
  );
}