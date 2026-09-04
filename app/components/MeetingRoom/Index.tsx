
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview from "./Sections/Overview";
import WhatWeOffers from "@/app/components/common/TabCard/GridCard";
import RoomConfig from "./Sections/RoomConfig";
import BusinessOutcomes from "../common/CardSection";
import TechPartners from "@/app/components/common/PartnersSlider";
import TheDifference from '@/app/components/common/Comparison';
import Deplyentprocedure from '@/app/components/common/Numbox/NumberBox';
import Testimonials from "../common/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import PlatformCompatibility from './Sections/PlatformCompatibility';
import WhyGsit from '@/app/components/common/GridThree/gridspace';
import TechnicalCapabilities from "../common/IconCardGrid";
import FaqSection from '@/app/components/common/Faq/FaqSection';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, rightFitData, differenceData, compatibilityData, offersData, roomConfigData, approachData, techData, whygsData, businessOutcomes, recomData, faqHeaderData, partnersHeaderData, logoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview rightFitData={rightFitData} variant={'defaultBorder'} subtitleClass='max-w-[48ch]' />
      <WhatWeOffers data={offersData} border={false} variant={'subtitleBorder'} subtitleClass='' />
      <TheDifference competitorData={differenceData} variant={'subtitleBorder'} subtitleClass='' />
      <RoomConfig roomConfigData={roomConfigData} variant={'defaultBorder'} subtitleClass='max-w-[68ch]' />
      <TechnicalCapabilities data={techData} gridcount={4} variant={'subtitleBorder'} subtitleClass="lg:max-w-full" />
      <BusinessOutcomes data={businessOutcomes} variant={'subtitleBorder'} />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={logoData} />
      <Deplyentprocedure approachData={approachData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" />
      <PlatformCompatibility data={compatibilityData} variant={'subtitle'} />
      <WhyGsit data={whygsData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[45ch] xl:!max-w-[70ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[162.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
