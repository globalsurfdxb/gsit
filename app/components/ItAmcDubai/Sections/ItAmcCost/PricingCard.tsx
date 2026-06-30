interface Feature {
  label: string;
  value: string;
}

interface PricingCardProps {
  plan: string;
  tags: string[];
  dark: boolean;
  features: Feature[];
}
import CustomButton from "@/app/components/common/CustomButton";
export default function PricingCard({ plan, tags, dark, features }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col h-[593px] 2xl:h-[747px] rounded-2xl p-4 md:p-6 transition-colors duration-500 cursor-pointer ${
        dark
          ? "bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]"
          : "bg-[linear-gradient(211.76deg,#FFFFFF_-12.95%,#C9DEFD_100%)]"
      }`}
    >
      <h2 className={`text-32px leading-[.8125] font-medium mb-5  xl:mb-8 transition-colors duration-500 ${dark ? "text-white" : "text-primary"}`}>
        {plan}
      </h2>

      <div className="flex items-center gap-2 flex-wrap mb-5  mb:mb-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`text-[11.5px] font-semibold leading-[1] px-2 py-[6.5px] rounded-[6px] transition-colors duration-500 bg-white text-black `}
          >
            {tag}
          </span>
        ))}
      </div>

      <hr className={`mb-5 transition-colors duration-500 ${dark ? "border-[#D3D3D3]" : "border-[#D3D3D3]"}`} />

      <div className="flex flex-col gap-4 xl:gap-6 flex-1">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-4">   

          <svg width="19" height="14" viewBox="0 0 19 14" className="w-3 h-2 md:w-4 md:h-3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.25 1.25L6.25 12.25L1.25 7.25" stroke={dark ? "#ffffff" : "#114A9F"} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


              <span className={`text-18 font-medium transition-colors duration-500 ${dark ? "text-white" : "text-paragraph"}`}>
                {feature.label}
              </span>
            </div>
            {feature.value && (
              <span className={`text-18 font-bold whitespace-nowrap transition-colors duration-500 ${dark ? "text-white" : "text-primary"}`}>
                {feature.value}
              </span>
            )}
          </div>
        ))}
      </div>
  <CustomButton   text={'Request a Consultation'}   icon="/assets/images/icons/fullarrow.svg"  bgButton={` !px-[18.5] !w-full bg-primary ${
          dark
            ? "bg-white text-primary hover:bg-gray-100"
            : "bg-primary text-white hover:bg-[#152d7a]"
        } `}   /> 
    </div>
  );
}