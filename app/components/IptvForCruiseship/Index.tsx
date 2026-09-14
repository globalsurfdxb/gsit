
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy"; 
import EnviornmentWeServe from '@/app/components/common/IndustriesWeServe';
import AboutService from '@/app/components/common/ComparisonOne';
import TechPartners from "@/app/components/common/PartnersSlider";
import Overview from "../common/Boxgrid/GridwithImageCard";
import DeliveryProcess from '@/app/components/common/Numbox/NumberBox';
import WhatWeFix from '@/app/components/common/IconCardGrid';
import Testimonials from "../common/Testimonials";
import WhyChooseUs from "../common/WhyChooseUsSection"; 
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Videowall from "./sections/VideoWall";

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import {
  bannerData, IndustriesHeaderData, overviewData, recomData, whyChooseUsData, partnersData, faqHeaderData,
  logoData, howweworkData, videoData, makingswichData,servicesData
} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:max-w-[185px] 3xl:max-w-[210px]" descstyle="max-w-[60ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} variant={'defaultBorder'} /> 
      <WhatWeFix data={servicesData} gridcount={3} variant={'subtitleBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[62ch]" />
            <AboutService competitorData={makingswichData} variant={'subtitleBorder'} subtitleClass="" />
            <AboutService competitorData={makingswichData} variant={'subtitleBorder'} subtitleClass="" />
      <Videowall data={videoData} variant="default" subtitleClass="lg:max-w-[32ch] xl:max-w-[42ch]"/>
      <DeliveryProcess approachData={howweworkData} variant={'subtitleBorder'} />
      <EnviornmentWeServe data={IndustriesHeaderData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <FooterCta data={recomData} descclass="max-w-[65ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[162.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} /> 
    </>
  );
};

export default Index;
