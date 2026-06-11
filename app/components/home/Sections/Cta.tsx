"use client" 
import CustomButton from "@/app/components/common/CustomButton";
import { ctaData } from "../data";
export default function Cta() {
 
  return (
    <section className="bg-white rounded-2xl bg-cover bg-right " style={{ backgroundImage: "url('/assets/images/home/cta.jpg')" }}> 
      <div className="container ">
         <div className="pt-[243px] pb-[148px]">
              <div className="mb-52">
                    <h2 className="text-heading text-primary whitespace-pre-line">{ctaData.title}</h2>
                  </div>
                <CustomButton   text={ctaData.btntext}  icon={ctaData.icon}  bgButton={'bg-primary'}  dark={true} href={ctaData.link} />
          
                </div>
         </div>
    </section>
  );
}