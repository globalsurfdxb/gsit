import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../home/Sections/Testimonials";
import OurServices from "./section/WifiServices";
import FooterCta from "../common/Banner/FooterCta";
import ScopeMapping from '@/app/components/common/ComparisonOne';
import FaqSection from '@/app/components/common/Faq/FaqSection';
import EngagementPoints from '@/app/components/common/IconCardGrid';
import TechPartners from "@/app/components/common/PartnersSlider";
import Overview from "../common/Boxgrid/GridwithImageCard";
import IndustriesWeServe from './section/IndustriesWeServe';
import WhyChooseUs from "../common/Boxgrid/GridwithImageCard";
import DeploymentPhases from '@/app/components/common/Numbox/NumberBox';
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, postdevelopmentData, WifiServicesData, BridgingData, ITArchitectureData, serverChoicesData, faqHeaderData, industriesData, servicesData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[21.6ch] " descstyle="max-w-[55ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={serverChoicesData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[46ch]" />
      <OurServices data={WifiServicesData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[48ch]" />
      <EngagementPoints data={servicesData} gridcount={4} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[45ch]" />
      <ScopeMapping competitorData={BridgingData} theme="dark" gridclass="grid-cols-2 " variant={'default'} subtitleClass="lg:max-w-[32ch] xl:max-w-[36ch]"/>
      <IndustriesWeServe data={industriesData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <DeploymentPhases approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   " />
      <WhyChooseUs data={ITArchitectureData} variant={'subtitle'} subtitleClass="max-w-full" />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[175.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};
export default Index;
