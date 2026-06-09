"use client" 

 import Button from "@/app/components/common/Button";
import SectionTag from "@/app/components/common/SectionTag";
import IconBox from "@/app/components/common/IconBox";

export default function Banner() {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/home/banner.jpg')" }}> 
      <div className="container ">
        <SectionTag text="END-TO-END IT PROVIDER DUBAI, UAE · SINCE 2013 " />
        <div className="my-6">
          <h1 className="home-banner-heading"><span className="text-paragraphlte">Reliable IT.</span> <span className="text-primary">Delivered with Agility.</span></h1>
        </div>
        <p className="text-color979797 text-24 leading-[1.3] tracking-[-3%] max-w-[54ch]">One partner for infrastructure, security, cloud, and AV. Fully compliant, multivendor authorized, and backed by years of Dubai expertise. </p>
     
     <div className="flex items-center gap-4 py-50">
        <Button text="Talk To An IT Consultant" icon={'/assets/images/icons/fullarrow.svg'} bgButton={'bg-primary'} arrowdark={false} />
        <Button text="Talk To An IT Consultant" icon={'/assets/images/icons/fullarrow.svg'} bgButton={'bg-white'} arrowdark={true} />
     </div>
      </div>
    </section>
  );
}