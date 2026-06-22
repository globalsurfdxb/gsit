// "use client";

// import { useState, useEffect } from "react";

// export function useCountUp(
//   target: number,
//   duration: number = 2000,
//   start: boolean = false,
// ) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
// const eased = progress < 1 ? 1 - Math.pow(1 - progress, 3) : 1;
// setCount(Math.max(target - 5, Math.floor(eased * target)));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [start, target, duration]);

//   return count;
// }

"use client";

import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration: number = 2000,
  startTime: number | null = null,
) {
  const startFrom = Math.max(0, Math.floor(target - 5));
  const [count, setCount] = useState(() => startFrom);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setCount(startFrom);
  }, [startFrom]);

  useEffect(() => {
    if (startTime === null) return;

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(progress >= 1 ? target : Math.floor(startFrom + eased * (target - startFrom)));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [startTime, target, duration, startFrom]);

  return count;
}