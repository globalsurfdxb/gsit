// interface Feature {
//   label: string;
//   value: string;
// }

// interface PricingCardProps {
//   plan: string;
//   subtitle?:string;
//   tags: string[];
//   dark: boolean;
//   features: Feature[];
// }

// import CustomButton from "@/app/components/common/CustomButton";

// export default function PricingCard({ plan,subtitle, tags, dark, features }: PricingCardProps) {
//   return (
//     <div className="relative overflow-hidden isolate flex flex-col h-[653px] xl:h-[747px] rounded-2xl p-4 md:p-6 cursor-pointer bg-[#f7faff] border border-[#ebebec] hover:border-primary transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_12px_34px_rgba(17,74,159,0.1)]">

//       {/* content */}
//       <div className="relative z-10 flex flex-col h-full">
//         <h2 className={`text-32 leading-[.8125] font-medium mb-4 transition-colors duration-700 text-primary`}>
//           {plan}
//         </h2>
//         <div className="mb-7"><p className="text-18 text-paragraph">{subtitle}</p></div>
//         <div className="flex items-center gap-2 flex-wrap mb-5 mb:mb-6">
//           {tags.map((tag, i) => (
//             <span key={i} className="text-[11.5px] font-semibold leading-[1] px-2 py-[6.5px] rounded-[6px] bg-white text-paragraph">
//               {tag}
//             </span>
//           ))}
//         </div>

//         <hr className="mb-5 border-[#D3D3D3]" />

//         <div className="flex flex-col gap-4 xl:gap-6 flex-1">
//           {features.map((feature, i) => (
//             <div key={i} className="flex items-center justify-between gap-3">
//               <div className="flex items-center gap-4">
//                 <svg width="19" height="14" viewBox="0 0 19 14" className="w-3 h-2 md:w-4 md:h-3 transition-all duration-700" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17.25 1.25L6.25 12.25L1.25 7.25" stroke="#7FE3B4" className=" transition-all duration-700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span className={`text-18 font-light transition-colors duration-700 text-paragraph`}>
//                   {feature.label}
//                 </span>
//               </div>
//               {feature.value && (
//                 <span className={`text-18 font-bold whitespace-nowrap transition-colors duration-700 text-primary`}>
//                   {feature.value}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         <CustomButton
//           text={'Get Custom Quote '}
//           icon="/assets/images/icons/fullarrow.svg"
//           bgButton={`!px-[18.5] !w-full transition-all duration-700 bg-primary `}
//           dark={true}
//         />
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { ArrowRight, Building2, Headset } from "lucide-react";
import CustomButton from "@/app/components/common/CustomButton";

export interface PlanFeature {
  label: string;
  value: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  isPopular?: boolean;
  features: PlanFeature[];
  buttonText: string;
  buttonHref: string;
}
/* Values that are NOT shown on the right of the row (the design only shows
   support-type values like "8×5 to 24×7" and "As Required") */
const HIDDEN_VALUES = new Set([
  "included",
  "standard",
  "proactive",
  "advanced",
]);

/* "8x5 to 24x7" → "8×5 to 24×7" */
const formatValue = (v: string) => v.replace(/(\d)x(\d)/gi, "$1×$2");

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const popular = !!plan.isPopular;
  const lastIndex = plan.features.length - 1;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border  py-5 md:py-6 px-5 md:px-6 lg:px-8 transition-all duration-500 hover:shadow-[0_12px_34px_rgba(17,74,159,0.1)]  ${
        popular
          ? "border-[#E1EAF8] bg-[linear-gradient(180deg,#E8F0FD_0%,#F8FAFF_100%)] lg:py-[56px]"
          : "border-[#EEEEEE] bg-[#FDFDFD] hover:border-primary"
      }`}
    >
      {popular && (
        <span className="absolute z-20 -top-[18px] left-5 rounded-full bg-[linear-gradient(180deg,_#FEE5B4_0%,_#CEB600_95.19%)] shadow-[0px_8px_16px_0px_#F9D47733] px-4 py-1 text-18-medium text-[#6B5834]     md:left-8">
          Most Popular
        </span>
      )}

      {/* Title + tagline */}
      <h3 className="mb-2 text-[26px] font-medium leading-[1.125] tracking-[-3%] text-primary md:text-32">
        {plan.name}
      </h3>
      <p
        className={`m-0 flex items-center gap-2 text-18-medium ${popular ? "text-primary" : "text-paragraph"}`}
      >
        <Building2
          aria-hidden="true"
          strokeWidth={1.4}
          className="h-6 w-6 shrink-0"
        />
        {plan.tagline}
      </p>

      {/* Features */}
      <ul className="mt-4 md:mt-6 flex flex-1 flex-col">
        {plan.features.map((f, i) => {
          const isDetail = i === lastIndex; // "360° Service Coverage" + list underneath
          const showValue =
            !isDetail && f.value && !HIDDEN_VALUES.has(f.value.toLowerCase());

          return (
            <li
              key={f.label}
              className={`py-4 md:py-[19px]    ${
                i !== lastIndex ? "border-b border-[#D3D3D3]" : "pb-0"
              }`}
            >
              <div className="flex items-center justify-between gap-[10px]">
                <div className="flex items-center gap-[10px] w-full">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      popular ? "bg-[#C9DCFB]" : "bg-[#B2DFC3]"
                    }`}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 9"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0.75 4.25L4.25 7.75L11.25 0.75"
                        stroke={popular ? "#114A9F" : "#ffffff"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className={`text-18 font-medium leading-[1.444]  ${popular ? "text-primary" : "text-paragraph"}`}
                  >
                    {f.label}
                  </span>
                </div>

                {showValue && (
                  <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-18 font-medium leading-[1.444] text-primary ">
                    {formatValue(f.value)}
                    {i === 0 && (
                      <Headset
                        aria-hidden="true"
                        strokeWidth={1.4}
                        className="h-6 w-6"
                      />
                    )}
                  </span>
                )}
              </div>

              {isDetail && f.value && (
                <p
                  className={`m-0 mt-2 pl-[34px]  md:text-18 ${popular ? "text-primary" : "text-paragraph"}`}
                >
                  {f.value}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {/* Button */}
      
      <CustomButton
        href={plan.buttonHref}
        dark={popular?true:false}
        icon={"/assets/images/icons/fullarrow.svg"}
        text={plan.buttonText}
        bgButton={`${popular?"bg-primary":"bg-white"}`}
        className=" !w-full !mt-4"
      />
      {/* <Link
        href={plan.buttonHref}
        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-4 text-18 font-medium leading-[1.444] transition-colors duration-300  ${
          popular
            ? "border-primary bg-primary text-white hover:bg-[#0C3A82]"
            : "border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
        }`}
      >
        {plan.buttonText}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link> */}
    </div>
  );
}
