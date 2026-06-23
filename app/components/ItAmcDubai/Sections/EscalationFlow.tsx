 
import { escalationHeaderData, escalationLevelsData } from "../data";
import SectionHeader from "../../common/SectionHeader";

export default function EscalationFlow() {
  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
         <SectionHeader data={escalationHeaderData} descriptionClass="lg:max-w-[37ch]" bordersm="border-b-0" />
        

        <div className="flex flex-col lg:flex-row items-stretch gap-4   mt-4 md:nt-6 lg:mt-8 lg:gap-5">
          {escalationLevelsData.map((item, i) => (
            <div key={i} className="flex items-center w-full relative">
              <div className="flex-1 bg-[#F5F9FC] h-full rounded-[10px] p-4 md:p-6 lg:p-10  lg:pb-14 flex flex-col gap-2">
                <span className="text-paragraph text-14">
                  {item.level}
                </span>
                <h3 className="text-black text-27 !leading-[1.2965] font-light pb-2">
                  {item.title}
                </h3>
                <p className="text-paragraph text-18">
                  {item.description}
                </p>
              </div>

              {i < escalationLevelsData.length - 1 && (
                <div className=" absolute bottom-[-35px] lg:bottom-auto translate-x-1/2 lg:translate-x-0 right-1/2 lg:-right-9 lg:flex items-center justify-center  z-10 flex-shrink-0 ">
                  <span className="w-12 h-12 rounded-full rotate-90 lg:rotate-0 bg-primary flex items-center justify-center shadow-[0px_3px_14px_0px_#1A3FA64D]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}