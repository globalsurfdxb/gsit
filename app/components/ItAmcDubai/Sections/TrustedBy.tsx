"use client" 
  
import { ClienteleData} from "@/app/components/common/data";   
import LogoSlider from "@/app/components/common/LogoSlider";
import SectionTag from "@/app/components/common/SectionTag";
export default function TrustedBy() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
          <div className="flex items-center justify-between gap-82">
             <div className="min-w-fit"><SectionTag text={'Trusted By'} /></div>
             <div className="w-[1px] h-10 bg-[#CEC9C9]"></div>
            <div className="">
                <LogoSlider partnersData={ClienteleData}  />
            </div>
          </div>
      </div>
    </section>
  );
}