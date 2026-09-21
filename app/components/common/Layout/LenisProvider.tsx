"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type LenisContextType = {
  scrollTo: (target: number | string | HTMLElement, options?: object) => void;
  lock: () => void;
  unlock: () => void;
  resize: () => void;
  isHeaderPinned: React.MutableRefObject<boolean>;
};

const LenisContext = createContext<LenisContextType>({
  scrollTo: () => {},
  lock: () => {},
  unlock: () => {},
  resize: () => {},
  isHeaderPinned: { current: false },
});

export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const lockedRef = useRef(false);
  const isHeaderPinned = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    lenisRef.current = lenis;

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    if (lockedRef.current) {
      document.documentElement.style.overflow = "hidden";
      lenis.stop();
    } else {
      document.documentElement.style.overflow = "";
    }

    const failsafe = setTimeout(() => {
      if (lenis.isStopped) {
        console.warn("Lenis failsafe: force-unlocking stuck scroll");
        lockedRef.current = false;
        document.documentElement.style.overflow = "";
        lenis.start();
      }
    }, 5000);

    let resizeRaf: number;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      });
    });
    ro.observe(document.body);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(resizeRaf);
      clearTimeout(failsafe);
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    const hash = window.location.hash;

    if (!hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    const t = setTimeout(() => {
      lenisRef.current?.resize();
      ScrollTrigger.refresh();

      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          isHeaderPinned.current = true;

          requestAnimationFrame(() => {
            lenisRef.current?.scrollTo(el, {
              offset: 0,
              immediate: false,
              onComplete: () => {
                setTimeout(() => {
                  isHeaderPinned.current = false;
                }, 50);
              },
            });
          });
        }
      }
    }, 300);

    return () => clearTimeout(t);
  }, [pathname]);

  const scrollTo = useCallback<LenisContextType["scrollTo"]>(
    (target, options: any = {}) => {
      isHeaderPinned.current = true;

      requestAnimationFrame(() => {
        lenisRef.current?.scrollTo(target as any, {
          offset: -10,
          ...options,
          onComplete: () => {
            setTimeout(() => {
              isHeaderPinned.current = false;
            }, 50);
            options.onComplete?.();
          },
        });
      });
    },
    [],
  );

  const lock = useCallback(() => {
    lockedRef.current = true;
    lenisRef.current?.stop();
  }, []);

  const unlock = useCallback(() => {
    lockedRef.current = false;
    document.documentElement.style.overflow = "";
    lenisRef.current?.start();
  }, []);

  const resize = useCallback(() => {
    lenisRef.current?.resize();
  }, []);

  const value = useMemo(
    () => ({ scrollTo, lock, unlock, resize, isHeaderPinned }),
    [scrollTo, lock, unlock, resize],
  );

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}