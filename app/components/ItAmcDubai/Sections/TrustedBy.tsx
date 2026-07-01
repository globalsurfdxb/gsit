"use client" 
  
import { TrustedbyData} from "@/app/components/common/data";   
import LogoSlider from "@/app/components/common/LogoSlider";
import SectionTag from "@/app/components/common/SectionTag";
export default function TrustedBy() {
 
  return (
    <section className="bg-white py-4 md:py-6.5 lg:py-8 2xl:py-[42px] rounded-2xl"> 
      <div className="container ">
          <div className="flex flex-col md:flex-row item-left md:items-center   gap-4 lg:gap-82">
             <div className="min-w-fit"><SectionTag text={'Trusted By'} /></div>
             <div className="w-[1px] h-10 hidden md:block bg-[#CEC9C9]"></div>
            <div className="w-full">
                <LogoSlider partnersData={TrustedbyData} slidecount={5} imgheight={'h-[42px] lg:h-[50px] 3xl:h-[58px]'}/>
            </div>
          </div>
      </div>
    </section>
  );
}