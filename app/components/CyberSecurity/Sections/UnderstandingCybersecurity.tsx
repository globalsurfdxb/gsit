"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { UnderstandingData } from "../data";  
export default function UnderstandingCybersecurity() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={UnderstandingData} descriptionClass="lg:max-w-[39ch] xl:max-w-[66ch] " titlebrake="hidden"/>
 
        <div className=" mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-10.5">
        {UnderstandingData.StatCard.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-red-50 p-4 md:p-6 flex flex-col gap-4"
          >
            <div className="flex items-baseline gap-1 ">
              <span className="text-55 font-light text-colorred !tracking-[3%]">
                {item.stat}
              </span>
              {item.statSuffix && (
                <span className="text-18 text-paragraph whitespace-nowrap">
                  {item.statSuffix}
                </span>
              )}
            </div>

            <h3 className="text-paragraph max-w-[18ch]  text-24 !leading-[1.5] tracking-[-3%] font-medium">
              {item.title}
            </h3>

            <p className="text-18 text-color8f8f max-w-[27ch]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

        
      </div>
    </section>
  );
}