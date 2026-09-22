"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { headerData } from "@/public/data/data";
import CustomButton from "@/app/components/common/CustomButton";
import { Search } from 'lucide-react';
import { useLenis } from "@/app/components/common/Layout/LenisProvider";

// capsule spacing values, in px — { top-margin, side-margin } per state
const SPACING = {
  top: { mobile: { mt: 24, mx: 16 }, desktop: { mt: 32, mx: 32 } },   // "mt-6 mx-4" / "lg:mt-8 lg:mx-8"
  scrolled: { mobile: { mt: 16, mx: 24 }, desktop: { mt: 16, mx: 48 } }, // "mt-4 mx-6" / "lg:mx-12"
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { isHeaderPinned } = useLenis();
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // track lg breakpoint (1024px) to pick the right spacing set
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => {
      const height = el.getBoundingClientRect().height;
      if (height > 0) setHeaderHeight(height);
    };

    update();
    const raf = requestAnimationFrame(update);

    const ro = new ResizeObserver(update);
    ro.observe(el);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(update);
    }

    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const SCROLL_THRESHOLD = 10;
    const REVEAL_AFTER = 80;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      // An anchor/CTA-triggered scroll is in flight — force the header
      // out of view so the target lands flush at the top, unobstructed.
      if (isHeaderPinned.current) {
        setHidden(true);
        lastScrollY.current = currentY;
        return;
      }

      if (mobileOpen || currentY < REVEAL_AFTER) {
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      setHidden(delta > 0);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen, isHeaderPinned]);

  const spacingSet = scrolled ? SPACING.scrolled : SPACING.top;
  const { mt, mx } = isDesktop ? spacingSet.desktop : spacingSet.mobile;

  return (
    <>
      <div style={{ height: headerHeight }} aria-hidden="true" />

      <section>
        <motion.header
          initial={false}
          animate={{ y: hidden ? "calc(-100% - 2rem)" : 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 inset-x-0 z-[999]"
        >
          <motion.div
            animate={{ marginLeft: mx, marginRight: mx }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              ref={headerRef}
              animate={{ marginTop: mt }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={`rounded-lg lg:rounded-2xl w-full transition-colors duration-300 ${
                scrolled ? "bg-[#FFFFFD] shadow-sm" : "bg-[#FFFFFD]"
              }`}
            >
              <div className=" p-4 md:px-6.5  lg:p-4">
                <div className="flex items-center justify-between ">

                  <div className="flex gap-[42px]">

                    <Link href="/" className="flex-shrink-0">
                      <Image
                        src={headerData.logo}
                        alt="GS.IT"
                        width={150}
                        height={45}
                        className="h-[20px] w-[66px] lg:h-[30px] lg:w-[110px] xl:h-[45px] xl:w-[150px] object-contain"
                      />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-5 xl:gap-7.5">
                      {headerData.nav.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className={`group flex items-center gap-[7px] leading-[1.316] text-[14px] xl:text-19 transition-colors duration-400 font-medium text-paragraph hover:text-black
                           `}
                        >
                          {item.label}
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0L6.5 12.0003" stroke="#77787B" strokeWidth="2"
                              className={`transition-all duration-200 group-hover:stroke-[#114A9F]`} />
                            <path d="M6.5 0L6.5 12.0003" stroke="#77787B" strokeWidth="2"
                              className={`transition-all duration-200 group-hover:stroke-[#114A9F]`} />
                            <path d="M13 5.98462L0 5.98462" stroke="#77787B" strokeWidth="2"
                              className={`transition-all duration-200 group-hover:stroke-[#114A9F]`} />
                            <path d="M13 5.98462L0 5.98462" stroke="#77787B" strokeWidth="2"
                              className={`transition-all duration-200 group-hover:stroke-[#114A9F]`} />
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
                      bgButton="bg-primary    !py-3   3xl:!py-4"
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
                 `}
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
            </motion.div>
          </motion.div>
        </motion.header>
      </section>
    </>
  );
}