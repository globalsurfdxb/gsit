
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc";
import WhatWeOffer from '@/app/components/common/IconCardGrid';
import TechPartners from "@/app/components/common/PartnersSlider";
import WhyChooseUs from '@/app/components/common/Boxgrid/GridGraySection';
import IndustriesWeServe from './section/IndustriesWeServe';
import AcousticPlaning from "../common/Boxgrid/GridwithImageCard";
import ProjectExecution from '@/app/components/common/Numbox/NumberBox';



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, postdevelopmentData, ITArchitectureData, faqHeaderData, industriesData, grayboxData, overviewData, servicesData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="pt-[333px] pb-4 md:py-82 " maxw="max-w-[63.3ch]" />
      <WhatWeOffer data={servicesData} gridcount={3} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[48ch]" />
      <AcousticPlaning data={ITArchitectureData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[47ch]" />
      <ProjectExecution approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   " />
      <IndustriesWeServe data={industriesData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <WhyChooseUs data={grayboxData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[220.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />



    </>
  );
};

export default Index;
