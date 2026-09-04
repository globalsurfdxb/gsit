
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import WhatWeOffer from "@/app/components/common/BannerDesc";
import IndustryCoverage from "@/app/components/common/TabCard/GridCard";
import BusinessImpact from '@/app/components/common/CardSectionLte';
import Fetures from '@/app/components/common/IconCardGrid';
import WhyGsit from '@/app/components/common/GridThree/gridspace';
import TechPartners from "@/app/components/common/PartnersSlider";
import WhatweSolved from "./Sections/SecuritySolved";
import StructuredApproach from '@/app/components/common/Numbox/NumberBox';
import OurExpertise from "../common/IconCardGrid";
import CameraType from "@/app/components/common/ImageCard"; 
 
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, faqHeaderData, SectionHeaderData, technicalComponentsData, featuresData, howweworkData, securitySolvedData, overviewData, usecaseData, technicaldata, partnersHeaderData, logoData, whygsData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <WhatWeOffer data={overviewData} maxw={'max-w-[71ch]'} spacey ="pt-[393px] pb-4 md:py-82 2xl:py-[152px]"/>
      <IndustryCoverage data={usecaseData} gridcount="4" subtitleClass='lg:max-w-[35ch] xl:max-w-[50ch]' variant={'default'} />
      <WhatweSolved data={securitySolvedData} variant={'subtitleBorder'} />
      <StructuredApproach approachData={howweworkData} variant={'subtitleBorder'}  subtitleClass='max-w-[82ch]' gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  2xl:!gap-x-7.5   " />
      <OurExpertise data={SectionHeaderData} variant={'default'} subtitleClass="max-w-[60ch]" bg="bg-[#F6F6F6]" iconbg="bg-[#fff]" />
      <Fetures data={featuresData} gridcount={4} variant={'default'} subtitleClass="lg:max-w-[35ch] xl:max-w-[64ch]" />
      <BusinessImpact data={technicaldata} variant={'subtitleBorder'} />
      <CameraType data={technicalComponentsData} variant={'defaultBorder'} subtitleClass="lg:max-w-[30ch] xl:max-w-[54ch]" />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={logoData} />
      <WhyGsit data={whygsData} variant={'subtitle'} subtitleClass="max-w[200ch]" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[162.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};

export default Index;
