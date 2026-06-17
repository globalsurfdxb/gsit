"use client" 
import CustomButton from "@/app/components/common/CustomButton";
import { ctaData } from "../data";
export default function Cta() {
 
  return (
    <section className="bg-white rounded-2xl  "  > 
      <div className="hidden md:block  bg-cover bg-right rounded-2xl " style={{ backgroundImage: "url('/assets/images/home/cta.jpg')" }}>
        <div className="container ">
         <div className="pb-6 pt-[85px] pt-[215px] md:py-[82px] lg:pt-[243px] lg:pb-[151px]   3xl:pb-[148px]">
              <div className="mb-52">
                    <h2 className="text-heading text-primary whitespace-pre-line">{ctaData.title}</h2>
                  </div>
                <CustomButton   text={ctaData.btntext}  icon={ctaData.icon}  bgButton={'bg-primary'}  dark={true} href={ctaData.link} />
          
                </div>
         </div>
      </div> 
      <div className=" md:hidden  rounded-2xl bg-cover bg-right " style={{ backgroundImage: "url('/assets/images/home/cta-mob.jpg')" }}>
        <div className=" pt-[85px] pt-[215px] md:py-[82px] lg:pt-[243px] lg:pb-[151px]   3xl:pb-[148px]"> 
          <div className="container rounded-2xl bg-[linear-gradient(180.71deg,rgba(255,255,255,0)_0.59%,#F8F8F8_29.57%,#FFFFFF_99.39%)]">
         <div className="pt-[85px] pb-6" >
              <div className="mb-6">
                    <h2 className="text-heading text-primary md:whitespace-pre-line">{ctaData.title}</h2>
                  </div>
                <CustomButton   text={ctaData.btntext}  icon={ctaData.icon}  bgButton={'bg-primary'}  dark={true} href={ctaData.link} />
          
                </div>
         </div>
        </div>
      </div>
    </section>
  );
}