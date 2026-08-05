"use client"   
import { useEffect, useState } from "react"; 
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";
import Image from "next/image";
    export interface datakey {
    tag: string; heading: string; highlightLast: number; description: string;
    }
    
    interface BannerProps {
      data: datakey;  
    }
    export default function WhoWeAre({ data }: BannerProps ) {   
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className="rounded-2xl py-6.5   lg:py-[86px] 3xl:pt-[204px] bg-white 3xl:pb-[142px] bg-cover bg-center"
      style={isDesktop ? { backgroundImage: `url('/assets/images/home/banner-hand.jpg')` } : undefined}
    >
      <div>
        <div className="container">
          <SectionTag text={data.tag} />
          <div className="pt-4 pb-6 md:py-4 lg:py-6.5 max-w-[42ch]">
            <HeadingTag
              as="h2"
              highlightLast={data.highlightLast}
              className="text-heading"
              text={data.heading}
            />
          </div>
        </div>

        <div className="lg:hidden pb-4">
          <Image
            src="/assets/images/home/banner-hand-mobile.png"
            height={326}
            width={800}
            className="object-cover w-full h-[146px] md:h-[327px]"
            alt=""
          />
        </div>

        <div className="container">
          <p className="text-paragraph text-18 lg:max-w-[48ch] pt-2 md:pt-0">
            {data.description}
          </p>
          <div className="mt-8 lg:mt-52">
            <CustomButton
              text="About Us"
              icon="/assets/images/icons/fullarrow.svg"
              bgButton="bg-primary"
              dark={true}
              href="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}