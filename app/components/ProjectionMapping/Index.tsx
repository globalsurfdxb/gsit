
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import OurSolutions from "../common/ServicesCard";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from "../common/Boxgrid/GridwithImageCard";
import WhyChooseUs from "../common/WhyChooseUsSection";
import TechPartners from "@/app/components/common/PartnersSlider";
import DeploymentWorkflow from '@/app/components/common/Numbox/NumberBox';
import Application from '@/app/components/common/IndustriesWeServe';
import ThrowDistanceGuide from "../common/Throwdistanceguide";



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, WifiServicesData, throwDistanceData, IndustriesHeaderData, whyChooseUsData, postdevelopmentData, faqHeaderData, overviewData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} darkMode={true} classpointdes="lg:w-[170px]  2xl:w-[198.75px]" descstyle="max-w-[59ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[50ch]" />
      <OurSolutions data={WifiServicesData} variant={'subtitle'} />
      <ThrowDistanceGuide data={throwDistanceData} classdesc="max-w-[66ch]" variant={'subtitle'} subtitleClass="" />
      <DeploymentWorkflow approachData={postdevelopmentData} variant={'subtitle'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3   2xl:!gap-x-7.5   " />
      <Application data={IndustriesHeaderData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <FooterCta data={recomData} descclass="max-w-[70ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[182.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />



    </>
  );
};

export default Index;
