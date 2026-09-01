interface Feature {
  label: string;
  value: string;
}

interface PricingCardProps {
  plan: string;
  subtitle?:string;
  tags: string[];
  dark: boolean;
  features: Feature[];
}

import CustomButton from "@/app/components/common/CustomButton";

export default function PricingCard({ plan,subtitle, tags, dark, features }: PricingCardProps) {
  return (
    <div className="relative overflow-hidden isolate flex flex-col h-[593px] 2xl:h-[650px] 3xl:h-[747px] rounded-2xl p-4 md:p-6 cursor-pointer bg-[#f7faff] border border-[#ebebec] hover:border-primary transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_12px_34px_rgba(17,74,159,0.1)]">
     

      

      {/* content */}
      <div className="relative z-10 flex flex-col h-full">
        <h2 className={`text-32 leading-[.8125] font-medium mb-4 transition-colors duration-700 text-primary`}>
          {plan}
        </h2>
        <div className="mb-7"><p className="text-18 text-paragraph">{subtitle}</p></div>
        <div className="flex items-center gap-2 flex-wrap mb-5 mb:mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-[11.5px] font-semibold leading-[1] px-2 py-[6.5px] rounded-[6px] bg-white text-paragraph">
              {tag}
            </span>
          ))}
        </div>

        <hr className="mb-5 border-[#D3D3D3]" />

        <div className="flex flex-col gap-4 xl:gap-6 flex-1">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <svg width="19" height="14" viewBox="0 0 19 14" className="w-3 h-2 md:w-4 md:h-3 transition-all duration-700" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.25 1.25L6.25 12.25L1.25 7.25" stroke="#7FE3B4" className=" transition-all duration-700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={`text-18 font-light transition-colors duration-700 text-paragraph`}>
                  {feature.label}
                </span>
              </div>
              {feature.value && (
                <span className={`text-18 font-bold whitespace-nowrap transition-colors duration-700 text-primary`}>
                  {feature.value}
                </span>
              )}
            </div>
          ))}
        </div>

        <CustomButton
          text={'Get Custom Quote '}
          icon="/assets/images/icons/fullarrow.svg"
          bgButton={`!px-[18.5] !w-full transition-all duration-700 bg-primary `}
          dark={true}
        />
      </div>
    </div>
  );
}