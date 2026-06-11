"use client" 

 import Button from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import IconBox from "@/app/components/common/IconBox";

export default function Banner() {
  return (
    <section className="w-full "> 
      <div className="container ">
        <div className="bg-white rounded-2xl">
              <div className="container ">
                <div className=" bg-white p-10 text-paragraphdrk py-82  ">
                    <p className="max-w-[] text-24">Reliable IT. Delivered with Agility.</p> 
                    <Button text="Talk To An IT Consultant" icon={'/assets/images/icons/fullarrow.svg'} bgButton={'bg-primary'} dark={false} />
                    <SectionTag text="Industries we serve" />
                    <IconBox src="/assets/images/icons/fullarrow.svg" imgsize="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" bgClass="bg-[#EEF2FF]" />
                </div>
            </div>
            </div>
      </div>
    </section>
  );
}