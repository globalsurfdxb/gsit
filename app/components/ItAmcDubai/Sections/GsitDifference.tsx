"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { sectionFiveData,auditData } from "../data";  
import DomainsSection from "./GsitDiff/DomainsSection";
import CustomButton from "@/app/components/common/CustomButton";
export default function GsitDifference() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
      <div className="mb-4 md:mb-0">
          <SectionHeader data={sectionFiveData} descriptionClass="lg:max-w-[62ch] " headingClass="home-banner-heading whitespace-pre-line" titlebrake="hidden lg:hidden" />
 
      </div>
        <DomainsSection />
<div className="bg-bgF5F9FC p-4 lg:p-6 rounded-2xl mt-6  lg:mt-10.5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7.5">
 
        <div className="bg-[#FEF2F2] rounded-2xl p-4 lg:p-6">
          <h2 className="text-[#933300] text-32px font-medium   lg:p-4 mb-4 2xl:mb-8">
            {auditData.business.title}
          </h2>
          <div className="flex flex-col lg:px-6 gap-4 lg:gap-6">
            {auditData.business.items.map((item, i) => (
             <div className="flex items-center gap-2 md:gap-4   " key={i}>
                <div
                  className={`bg-[#FCFCFC] w-5 h-5  3xl:w-[35px] 3xl:h-[35px] md:p-[3.5px] min-w-5 rounded-full flex items-center justify-center `}
                > 
                {item.active 
                  ? (
                    
                    <svg width="12" height="9" className="w-[6px] h-[4px] md:w-[12px] md:h-[9px]" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 4.25L4.25 7.75L11.25 0.75" stroke="#33580E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  ) 
                  : (
                    
                    <svg width="12" height="12" className="w-[6px] h-[6px] md:w-[12px] md:h-[12px]"  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 0.75L0.75 11.25" stroke="#FF5900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.75 0.75L11.25 11.25" stroke="#FF5900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  )
                } 

                    
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className={`font-normal lg:font-medium text-18 ${item.active ? 'text-[#33580E] ':'text-paragraph'}`}>{item.title}</h4> 
                </div>
              </div>
          
            ))}
             <hr className="border-[#C3C3C3] "/>
             <div className="flex flex-col lg:flex-row gap-4 lg:gap-[27px] lg:items-center p-2 md:p-4 bg-white rounded-2xl">
              <div >

            <svg className="w-6 h-6 lg:w-10.5 lg:h-10.5" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7504 31.71L17.5004 24.5H7.29785C6.75449 24.5 6.2186 24.3735 5.7326 24.1305C5.24661 23.8875 4.82387 23.5347 4.49785 23.1C4.17184 22.6653 3.95151 22.1607 3.85431 21.6261C3.75711 21.0915 3.78571 20.5416 3.93785 20.02L8.01535 6.02C8.22739 5.293 8.66952 4.65438 9.27535 4.2C9.88119 3.74562 10.6181 3.5 11.3754 3.5H35.0004C35.9286 3.5 36.8188 3.86875 37.4752 4.52513C38.1316 5.1815 38.5004 6.07174 38.5004 7V21C38.5004 21.9283 38.1316 22.8185 37.4752 23.4749C36.8188 24.1313 35.9286 24.5 35.0004 24.5H30.1704C29.5192 24.5003 28.8811 24.6823 28.3277 25.0255C27.7743 25.3686 27.3276 25.8594 27.0379 26.4425L21.0004 38.5C20.1751 38.4898 19.3628 38.2932 18.6242 37.925C17.8856 37.5567 17.2397 37.0263 16.7349 36.3734C16.2301 35.7205 15.8793 34.9619 15.7088 34.1544C15.5383 33.3469 15.5525 32.5113 15.7504 31.71Z" stroke="#933300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.75 24.5V3.5" stroke="#933300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

              </div>
              <p className="text-18 text-[#933300]">Result: 3 to 4 vendors, fragmented SLAs, no single point of accountability. When something breaks, nobody owns it</p>
             </div>
          </div>
        </div>

        {/* Operational Challenges */}
        <div className="bg-[#ECF7E7] rounded-2xl p-4 lg:p-6">
          <h2 className="text-[#33580E] text-32px font-medium  p-2 lg:p-4 mb-3 2xl:mb-8">
            {auditData.challenges.title}
          </h2>

          <div className="flex flex-col lg:px-6 gap-4 lg:gap-6">
            {auditData.challenges.items.map((item, i) => (
             <div className="flex  items-center gap-2 md:gap-4   " key={i}>
                <div
                  className={`bg-[#B2DFC3] w-5 h-5  3xl:w-[35px] 3xl:h-[35px] md:p-[3.5px] min-w-5 rounded-full flex items-center justify-center `}
                > 
                {item.active 
                  ? (
                    
                    <svg width="12" height="9" className="w-[6px] h-[4px] md:w-[12px] md:h-[9px]" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 4.25L4.25 7.75L11.25 0.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  ) 
                  : (
                    
                    <svg width="12" height="12" className="w-[6px] h-[6px] md:w-[12px] md:h-[12px]" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 0.75L0.75 11.25" stroke="#FF5900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.75 0.75L11.25 11.25" stroke="#FF5900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  )
                } 

                    
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className={`font-normal lg:font-medium font-medium text-18 ${item.active ? 'text-[#33580E] ':'text-paragraph'}`}>{item.title}</h4> 
                </div>
              </div>
          
            ))}
             <hr className="border-[#C3C3C3] "/>
             <div className="flex flex-col lg:flex-row gap-4 lg:gap-[27px] lg:items-center p-2 md:p-4 bg-white rounded-2xl">
              <div >

            <svg className="w-6 h-6 lg:w-10.5 lg:h-10.5" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7504 31.71L17.5004 24.5H7.29785C6.75449 24.5 6.2186 24.3735 5.7326 24.1305C5.24661 23.8875 4.82387 23.5347 4.49785 23.1C4.17184 22.6653 3.95151 22.1607 3.85431 21.6261C3.75711 21.0915 3.78571 20.5416 3.93785 20.02L8.01535 6.02C8.22739 5.293 8.66952 4.65438 9.27535 4.2C9.88119 3.74562 10.6181 3.5 11.3754 3.5H35.0004C35.9286 3.5 36.8188 3.86875 37.4752 4.52513C38.1316 5.1815 38.5004 6.07174 38.5004 7V21C38.5004 21.9283 38.1316 22.8185 37.4752 23.4749C36.8188 24.1313 35.9286 24.5 35.0004 24.5H30.1704C29.5192 24.5003 28.8811 24.6823 28.3277 25.0255C27.7743 25.3686 27.3276 25.8594 27.0379 26.4425L21.0004 38.5C20.1751 38.4898 19.3628 38.2932 18.6242 37.925C17.8856 37.5567 17.2397 37.0263 16.7349 36.3734C16.2301 35.7205 15.8793 34.9619 15.7088 34.1544C15.5383 33.3469 15.5525 32.5113 15.7504 31.71Z" stroke="#33580E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.75 24.5V3.5" stroke="#33580E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

              </div>
              <p className="text-18 text-[#33580E]">Result: One contract. One team. One SLA. One invoice. Total accountability from Day 1</p>
             </div>
          </div>
        </div>

      </div>
      {/* Note */}
      <div className="bg-white rounded-2xl p-4   mt-6 lg:mt-8">
       <div className="flex flex-col 2xl:flex-row gap-6 lg:gap-5 items:start 2xl:items-center justify-between">
        <div>
           <h3 className="text-primary text-32px mb-4 lg:mb-5 tracking-[-1%]">
          {auditData.note.title}
        </h3>
        <p className="text-paragraph text-18  max-w-[80ch] 3xl:max-w-[94ch]">
          {auditData.note.description}
        </p>
        </div>
         <CustomButton   text={'Talk to an IT Consultant'}   icon="/assets/images/icons/fullarrow.svg"  bgButton={' !px-4  md:!px-8  bg-primary '}  dark={true} />
                  
       </div>
      </div>
      </div>
        
      </div>
    </section>
  );
}