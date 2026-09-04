
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy"; 
import Overview from "../common/Boxgrid/GridwithImageCard";
import BridgingtheGaps from '@/app/components/common/ComparisonOne'; 
 import IndustriesWeServe from "./Sections/IndustriesWeServe";
import WhatWeInstall from '../common/TabCard/TabCards';
import BusinessImpact from "./Sections/RelatedGrid";
import TechPartners from "@/app/components/common/PartnersSlider";
import WhyGsit from '@/app/components/common/GridThree/gridspace';
import Testimonials from "../common/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, ITArchitectureData, BridgingData, faqHeaderData,IndustriesData, BusinessImpactData, infrastructureData,   partnersData, logoData, whygsData, recomData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[62ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[130px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} /> 
      <Overview data={ITArchitectureData} variant={'subtitle'} subtitleClass="lg:max-w-[194ch]" />
      <WhatWeInstall data={infrastructureData} gridcount='4' variant={'defaultBorder'} subtitleClass='max-w-[42ch]' />
      <BusinessImpact sectionData={BusinessImpactData} variant={'subtitleBorder'} subtitleClass='max-w-[130ch]'
        gridCols='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ' classheight="" />
      <BridgingtheGaps competitorData={BridgingData} theme="dark" gridclass="grid-cols-2 " variant={'subtitleBorder'} subtitleClass='' />
       <IndustriesWeServe data={IndustriesData} variant={'subtitle'} />
        <WhyGsit data={whygsData} variant={'subtitleBorder'}  minheight = "min-h-[225px] 2xl:min-h-[318px]"  subtitleClass="max-w[200ch]" />
       <TechPartners headerData={partnersData} variant={'default'} subtitleClass="max-w-[44ch]" logo={logoData} /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
 
    </>
  );
};

export default Index;
