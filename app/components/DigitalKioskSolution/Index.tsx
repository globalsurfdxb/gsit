
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import SpeakerTypes from "../common/ServicesCard";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import OurSolutions from '@/app/components/common/IconCardGrid'; 
import Overview from "../common/Boxgrid/GridwithImageCard";
import WhyChooseUs from "../common/WhyChooseUsSection";
import TechPartners from "@/app/components/common/PartnersSlider";
import DeploymentProcedure from '@/app/components/common/Numbox/NumberBox';
import PodcastRoomSolutions from "@/app/components/common/PostDevelopmentSection"; 
import WhoWeSupport from '@/app/components/common/IndustriesWeServe'; 
import VersatileMountingOptions from "../common/Throwdistanceguide";



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, WifiServicesData,servicesData, throwDistanceData, sixFeaturesGridData,IndustriesHeaderData, whyChooseUsData, postdevelopmentData, faqHeaderData, overviewData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData}  classpointdes="lg:w-[170px]  2xl:w-[201.25px]" descstyle="max-w-[55ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[50ch]" />
      <OurSolutions data={servicesData} gridcount={3} variant={'subtitleBorder'} />
      <VersatileMountingOptions data={throwDistanceData} variant={'subtitle'}  classdesc="max-w-[66ch]" />
      <PodcastRoomSolutions data={sixFeaturesGridData} variant={'defaultBorder'} imagePosition="left" subtitleClass="lg:max-w-[38ch] xl:max-w-[67ch]" />
      <SpeakerTypes data={WifiServicesData} variant={'subtitle'} />
      <DeploymentProcedure approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3   2xl:!gap-x-7.5   " />
      <WhoWeSupport data={IndustriesHeaderData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <FooterCta data={recomData} descclass="max-w-[67ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[132.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />



    </>
  );
};

export default Index;
