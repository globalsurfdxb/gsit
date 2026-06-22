 
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useCountUp } from "@/app/hooks/useCountUp";

// interface StatItem {
//   value: string;
//   label: string;
//   description: string;
// }

// export default function CounterCard({ value, label, description }: StatItem) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [started, setStarted] = useState(false);

//   const numeric = parseInt(value.replace(/\D/g, ""), 10);
//   const suffix = value.replace(/[0-9]/g, "");
//   const count = useCountUp(numeric, 1200, started);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStarted(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="flex flex-col gap-4 p-4 md:py-[31.5px] xl:p-6">
//       <p className="text-primary font-bold text-[26px] md:text-[36px] xl:text-[48px] leading-[1.308] md:leading-[1.3] flex flex-nowrap items-baseline gap-1 md:gap-3">
//         <span className="inline-block tabular-nums">
//           {started ? count : 0}{suffix}
//         </span>
//         <span className="text-[12px] md:text-[18px] xl:!text-[24px] leading-[1.9589] font-medium whitespace-nowrap">
//           {label}
//         </span>
//       </p>
//       <p className="text-paragraphlte text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627]">
//         {description}
//       </p>
//     </div>
//   );
// }



"use client";

import { useCountUp } from "@/app/hooks/useCountUp";

interface StatItem {
  value: string;
  label: string;
  description: string;
  startTime: number | null;
}

export default function CounterCard({ value, label, description, startTime }: StatItem) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(numeric, 800, startTime);

  return (
    <div className="flex flex-col gap-4 p-4 md:py-[31.5px] xl:p-6">
      <p className="text-primary font-bold text-[26px] md:text-[36px] xl:text-[48px] leading-[1.308] md:leading-[1.3] flex flex-nowrap items-baseline gap-1 md:gap-3">
        <span className="inline-block tabular-nums">
          {startTime !== null ? count : 0}{suffix}
        </span>
        <span className="text-[12px] md:text-[18px] xl:!text-[24px] leading-[1.9589] font-medium whitespace-nowrap">
          {label}
        </span>
      </p>
      <p className="text-paragraphlte text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627]">
        {description}
      </p>
    </div>
  );
}