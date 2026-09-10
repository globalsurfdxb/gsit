import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import SpecificationGuide from '@/app/components/common/ComparisonOne';
import FaqSection from '@/app/components/common/Faq/FaqSection';
import WhatWeFix from '@/app/components/common/IconCardGrid';
import TechPartners from "@/app/components/common/PartnersSlider";
import OurSolutions from "@/app/components/common/TabCard/GridCard";
import Impactwedeliver from "../common/Boxgrid/GridwithImageCard";
import Overview from "../common/Boxgrid/GridwithImageCard";
import IndustriesWeServe from '@/app/components/common/IndustriesWeServe';
import Wherewestart from './section/Wherewestart';
import WhyChooseUs from "../common/WhyChooseUsSection";

import CoreFeatures from '@/app/components/common/Boxgrid/BoxCard';
import HowWeDeploy from '@/app/components/common/Numbox/NumberBox';
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";

import { bannerData, recomData, wstartData,overviewData, postdevelopmentData, BridgingData, longtermValueData, whyChooseUsData, usecaseData, serverChoicesData, faqHeaderData, industriesData, servicesData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:w-[177px] 2xl:w-[200px] 3xl:w-[202px]" descstyle="max-w-[55ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} cardType="two" variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[55ch]" />
      <Wherewestart approachData={wstartData} iconbg={'bg-[#ffffff]'} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[60ch]" gridcount={4} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   " />

      <OurSolutions data={usecaseData} gridcount="4" subtitleClass='lg:max-w-[35ch] xl:max-w-[62ch]' variant={'defaultBorder'} />
      <WhatWeFix data={servicesData} gridcount={3} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[62ch]" />
      <CoreFeatures data={longtermValueData} variant={'defaultBorder'} subtitleClass='lg:max-w-[32ch] xl:max-w-[32ch]' />

      <Impactwedeliver data={serverChoicesData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[62ch]" />
      <IndustriesWeServe data={industriesData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <HowWeDeploy approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   " />
      <SpecificationGuide competitorData={BridgingData} theme="dark" gridclass="grid-cols-2 " variant={'subtitle'} subtitleClass="lg:max-w-full" />

      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};
export default Index;
