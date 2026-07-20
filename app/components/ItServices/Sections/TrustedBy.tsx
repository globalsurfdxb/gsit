"use client" 
  
import { TrustedbyData} from "@/app/components/common/data";   
import LogoSlider from "@/app/components/common/LogoSlider";
import SectionTag from "@/app/components/common/SectionTag";
export default function TrustedBy() {
 
  return (
    <section className="bg-white py-4 md:py-6.5 lg:py-8 2xl:py-82 rounded-2xl"> 
      <div className="container ">
          <div className="flex flex-col md:flex-row item-left md:items-center   gap-4 lg:gap-82">
             <div className="lg:max-w-[23ch]"><SectionTag text={'Trusted By Leading uae organizations since 2011'} /></div>
             <div className="w-[1px] h-13 hidden md:block bg-[#CEC9C9]"></div>
            <div className="w-full">
                <LogoSlider partnersData={TrustedbyData} slidecount={5} imgheight={'h-[42px] lg:h-[50px] 3xl:h-[52px]'}/>
            </div>
          </div>
      </div>
    </section>
  );
}