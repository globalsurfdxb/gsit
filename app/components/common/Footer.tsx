// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/public/data/data";

export default function Footer() {
  return (
    <footer className="bg-white mt-8">

      {/* Main footer */}
      <div className="container py-14 xl:py-[42px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_864px] gap-12 lg:gap-20">

          {/* Left — logo, address, contact, social */}
          <div className="flex flex-col gap-6 lg:gap-8 ">
            <Link href="/">
              <Image
                src={footerData.logo}
                alt="GS.IT"
                width={120}
                height={48}
                className="w-[200px] w-auto object-contain"
              />
            </Link>

            <div className="flex flex-col ">
              {footerData.address.map((line, i) => (
                <p key={i} className="text-paragraph text-17">{line}</p>
              ))}
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <a
                href={`mailto:${footerData.contact.email}`}
                className="flex items-center gap-4 "
              >
                <div className="py-[5.5px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>

                <span className="text-paragraph text-18 !leading-[1.1.945] hover:text-primary transition-colors duration-200 font-[500]">{footerData.contact.email}</span>
              </a>
              <div className="w-[1px] h-full bg-paragraph"> </div>
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 "
              >
                <div className="py-[5.5px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>

                 <span className="text-paragraph text-18 !leading-[1.1.945] hover:text-primary transition-colors duration-200 font-[500]">{footerData.contact.phone}</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-[7px]  mt-1 lg:mt-2.5">
              {footerData.social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xl:w-[44px] xl:h-[44px] border border-[#E0E0E0] rounded-[2px] flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <Image src={s.icon} alt={s.alt} width={18} height={18} className={`${s.h} w-fit object-contain`} />
                </a>
              ))}
            </div>
          </div>
          {/* end Left */}

          {/* Right — nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-[293px_293px_214px] gap-10 md:gap-16 3xl:gap-8">
            {footerData.navColumns.map((col, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-paragraph text-27-medium  ">{col.title}</h4>
                <ul className="flex flex-col gap-[4px]">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-paragraph text-18 hover:text-primary transition-colors duration-200"
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
        <div className="container py-6 lg:py-[42px]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 md:justify-between">
            <p className="text-black text-27-medium">
              Our Group Companies
            </p>
            <div className="flex items-center gap-10 md:gap-[218px] flex-wrap">
             <div > 
                  <Image
                    src={'/assets/images/gs-digital.svg'}
                    alt={'gs-digital'}
                    width={146}
                    height={32}
                    className="h-8  object-contain  transition-opacity duration-200"
                  /> 
                  </div>
                 <div>
                  <Image
                    src={'/assets/images/gs-it-security.svg'}
                    alt={'gs-it-security'}
                    width={213}
                    height={32}
                    className="h-8  object-contain  transition-opacity duration-200"
                  /> 
                  </div>
                 <div>
                  <Image
                    src={'/assets/images/gs-av.svg'}
                    alt={'gs-av'}
                    width={93}
                    height={32}
                    className="h-8  object-contain  transition-opacity duration-200"
                  /> 
                  </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Group companies */}

      {/* Bottom bar */}
      <div className="bg-[#FAF9F6]">
        <div className="container py-5 xl:py-[28px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-[18.5px] flex-wrap">
              {footerData.legal.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-paragraph text-14 !leading-[1.79] hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-paragraph text-14 !leading-[1.79]">{footerData.copyright}</p>
          </div>
        </div>
      </div>
      {/* end Bottom bar */}

    </footer>
  );
}