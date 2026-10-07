"use client";

import { useEffect, useRef, useState } from "react";

export default function StepCard({
  id,
  top = 200, // px, same value as StickyColumn
  children,
}: {
  id: string;
  top?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      // Active while the card's top has reached the line and its bottom hasn't passed it
      setActive(rect.top <= top + 1 && rect.bottom > top);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [top]);

  return (
    <article
      ref={ref}
      id={id}
      className={`scroll-mt-24 rounded-2xl border bg-white p-4 transition-shadow duration-300 sm:p-6 ${
        active
          ? "border-transparent shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
          : "border-[#E6E6E6]"
      }`}
    >
      {children}
    </article>
  );
}