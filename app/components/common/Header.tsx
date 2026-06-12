// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { headerData } from "@/public/data/data";
import CustomButton from "@/app/components/common/CustomButton";
import { Search } from 'lucide-react';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`rounded-lg lg:rounded-2xl mt-8 w-full z-[999] transition-all duration-300 ${
        scrolled ? "bg-[#FFFFFD] shadow-sm" : "bg-[#FFFFFD]"
      }`}
    >
      <div className=" p-[16px]">
        <div className="flex items-center justify-between ">

          <div className="flex gap-[42px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={headerData.logo}
                alt="GS.IT"
                width={150}
                    height={45}
                    className="h-[20px] w-[66px] lg:h-[45px] lg:w-[150px] object-contain"
                  />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-5 xl:gap-7.5">
                  {headerData.nav.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className={`group flex items-center gap-[7px] leading-[1.316] text-19 transition-colors duration-200 font-[500] text-paragraph hover:font-semibold hover:text-black
                         `}
                      >
                        {item.label}
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.5 0L6.5 12.0003"
                            stroke={ "#525252"}
                            strokeWidth="2"
                            className={`transition-all duration-200 group-hover:stroke-[#114A9F]`}
                          />
                          <path
                            d="M6.5 0L6.5 12.0003"
                            stroke={ "#525252"}
                            strokeWidth="2"
                            className={`transition-all duration-200 group-hover:stroke-[#114A9F]`}
                          />
                          <path
                            d="M13 5.98438L3.57628e-07 5.98437"
                            stroke={ "#525252"}
                            strokeWidth="2"
                            className={`transition-all duration-200 group-hover:stroke-[#114A9F]`}
                          />
                          <path
                            d="M13 5.98438L3.57628e-07 5.98437"
                            stroke={ "#525252"}
                            strokeWidth="2"
                            className={`transition-all duration-200 group-hover:stroke-[#114A9F]`}
                          />
                        </svg>
                      </Link>
                  ))}
                </nav>


          </div>

          {/* Right — search + CTA */}
          <div className="hidden lg:flex items-center gap-2.5 ">
            <div className="group">
              <button className="w-[53px] h-[53px] cursor-pointer flex items-center justify-center border border-[#E0E0E087] rounded-full transition-all duration-300 ">
            <Search strokeWidth={2} className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12 active:rotate-0" />
          </button>
            </div>
            <CustomButton
              text={headerData.cta.label}
              href={headerData.cta.href}
              icon="/assets/images/icons/fullarrow.svg"
              bgButton="bg-primary"
              dark={true}
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-4.5 h-[2px] rounded-full bg-black transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-4.5 h-[2px] rounded-full bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4.5 h-[2px] rounded-full bg-black transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white  overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container flex flex-col gap-1">
          {headerData.nav.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-3 py-3 text-[15px]  border-b border-[#F0F0F0] hover:text-primary transition-colors duration-200
                ${item.bold ? "font-semibold text-secondary" : "font-light text-paragraphlte"}`}
            >
              {item.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <CustomButton
              text={headerData.cta.label}
              href={headerData.cta.href}
              icon="/assets/images/icons/fullarrow.svg"
              bgButton="bg-primary"
              dark={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}