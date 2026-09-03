
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../home/Sections/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc";
import WhatWeOffer from '@/app/components/common/IconCardGrid';
import ServervsServerStorage from '@/app/components/common/Comparison';
import DataManagement from "../common/Boxgrid/GridwithImageCard";
import TechPartners from "@/app/components/common/PartnersSlider";
import ServerChoices from "@/app/components/common/TabImageCard";
import BusinessBenefits from '@/app/components/common/Boxgrid/BoxCard';
import WhyChooseUs from '@/app/components/common/Boxgrid/GridGraySection';



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, faqHeaderData, grayboxData, overviewData, serverChoicesData, longtermValueData, servicesData, featuresData, makingswichData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="py-82 2xl:py-[152px] 3xl:py-[165px]" maxw="max-w-[64.3ch]" />
      <ServervsServerStorage competitorData={makingswichData} variant={'default'} subtitleClass="lg:max-w-[38ch] xl:max-w-[53ch]" />
      <WhatWeOffer data={servicesData} gridcount={3} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[50ch]" />
      <ServerChoices data={featuresData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[47ch]"/>
      <DataManagement data={serverChoicesData} cardType="two" variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch]" />
      <BusinessBenefits data={longtermValueData} variant={'defaultBorder'} subtitleClass='lg:max-w-[38ch] xl:max-w-[54ch]' />
      <WhyChooseUs data={grayboxData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />

      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />

      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
