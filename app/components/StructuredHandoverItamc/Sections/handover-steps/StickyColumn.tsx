"use client";

import { useEffect, useRef } from "react";

export default function StickyColumn({
  children,
  top = 112, // px, your header height
}: {
  children: React.ReactNode;
  top?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const apply = (s: Partial<CSSStyleDeclaration>) =>
      Object.assign(inner.style, {
        position: "",
        top: "",
        bottom: "",
        left: "",
        width: "",
        ...s,
      });

    const update = () => {
      if (window.innerWidth < 1024) return apply({});

      const rect = outer.getBoundingClientRect();
      const height = inner.offsetHeight;
      const width = `${rect.width}px`;

      if (rect.top >= top) {
        // 1. Before reaching the top: normal flow
        apply({});
      } else if (rect.bottom - top <= height) {
        // 3. Steps finished: release, rest at the bottom of the column
        apply({ position: "absolute", bottom: "0", left: "0", width });
      } else {
        // 2. In between: fixed
        apply({ position: "fixed", top: `${top}px`, left: `${rect.left}px`, width });
      }
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
    <div ref={outerRef} className="relative lg:self-stretch">
      <div ref={innerRef}>{children}</div>
    </div>
  );
}