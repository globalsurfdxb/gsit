
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc";
import WhatisInside from '@/app/components/common/IconCardGrid';
import TechPartners from "@/app/components/common/PartnersSlider"; 
import BuiltToPerform from "../common/Boxgrid/GridwithImageCard";
import VenueTypes from "@/app/components/common/ImageCard";
import Whychoose from "../common/Boxgrid/GridwithImageCard";
import HowprojectRun from '@/app/components/common/Numbox/NumberBox';



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, postdevelopmentData, ITArchitectureData, whychooseData,featuresData, faqHeaderData, overviewData, servicesData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <> 
        <BannerMain bannerData={bannerData}   classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
       <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="pt-[333px] pb-4 md:py-82   2xl:py-[128px]  3xl:py-[152px]" maxw="max-w-[63.3ch]" />
      <WhatisInside data={servicesData} gridcount={3} variant={'subtitleBorder'} subtitleClass="" />
      <HowprojectRun approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5   2xl:!gap-x-7.5   " />
      <BuiltToPerform data={ITArchitectureData} variant={'subtitleBorder'} subtitleClass=" max-w-full" />
      <VenueTypes data={featuresData} variant={'subtitleBorder'} gridclass={4} />
      <Whychoose data={whychooseData} variant={'subtitle'} subtitleClass="max-w-full" /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} /> 
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[225.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />



    </>
  );
};

export default Index;
