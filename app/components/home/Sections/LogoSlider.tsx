"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SWAP_INTERVAL = 2000;

export interface PartnerItem {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  partnersData: PartnerItem[];
}

export default function LogoSlider({ partnersData }: LogoSliderProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [visible, setVisible] = useState<PartnerItem[]>(partnersData.slice(0, 6));
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const count = window.innerWidth < 768 ? 3 : 6;
      setVisibleCount(count);
      setVisible(partnersData.slice(0, count));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [partnersData]);

  useEffect(() => {
    const interval = setInterval(() => {
      const pool = partnersData.filter((p) => !visible.includes(p));
      if (pool.length === 0) return;

      const slotIndex = Math.floor(Math.random() * visibleCount);
      const newItem = pool[Math.floor(Math.random() * pool.length)];

      setFadingIndex(slotIndex);

      setTimeout(() => {
        setVisible((prev) => {
          const updated = [...prev];
          updated[slotIndex] = newItem;
          return updated;
        });
        setFadingIndex(null);
      }, 400);
    }, SWAP_INTERVAL);

    return () => clearInterval(interval);
  }, [visible, visibleCount, partnersData]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 items-center">
      {visible.map((partner, i) => (
        <div
          key={partner.src}
          className={`flex items-center justify-center transition-all duration-[400ms]
            ${fadingIndex === i ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            width={190}
            height={73}
            className="h-[73px] md:h-[73px] w-[190px] object-contain transition-all duration-500"
          />
        </div>
      ))}
    </div>
  );
}