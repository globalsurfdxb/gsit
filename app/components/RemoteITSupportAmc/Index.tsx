
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection'; 
import WhatisInside from '@/app/components/common/IconCardGrid'; 
import Whychoose from "../common/Boxgrid/GridwithImageCard";
import HowprojectRun from '@/app/components/common/Numbox/NumberBox';
import TechPartners from "@/app/components/common/PartnersSlider";
import SLASection from "./section/SLASection";
import PostDevelopmentSection from "./section/PostDevelopmentSection";




import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, postdevelopmentData,slaData,sixFeaturesGridData, whychooseData, partnersData,parnerpoints,logoData,faqHeaderData, servicesData } from "./data";
const Index = () => {
  return (
    <>
    
        <BannerMain bannerData={bannerData}   classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
  
      <TrustedBy TrustedbyData={TrustedbyData} /> 
           <PostDevelopmentSection data={sixFeaturesGridData} variant={'subtitleBorder'} subtitleClass=""/>
      <WhatisInside data={servicesData} gridcount={3} variant={'default'} subtitleClass="lg:max-w-[38ch] xl:max-w-[54ch]" />
      <HowprojectRun approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4   2xl:!gap-x-7.5   " />         
 
      <SLASection data={slaData} variant={'subtitleBorder'}/>
      <Whychoose data={whychooseData} variant={'subtitle'} subtitleClass="max-w-full" />   
      <TechPartners headerData={partnersData} variant={'defaultBorder'} subtitleClass="max-w-[44ch]" parnerpoints={parnerpoints} logo={logoData} imgheight=' 3xl:mt-[10px] 3xl:mb-6 h-[38px] lg:h-[50px] 2xl:h-[112px]' />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />  
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[225.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />



    </>
  );
};

export default Index;
