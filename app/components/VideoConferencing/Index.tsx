
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview from "./Sections/Overview"; 
import OurCustomizedSolutions from "./Sections/OurCustomizedSolutions";
import Deplyentprocedure from '@/app/components/common/Numbox/NumberBox';
import TechnicalCapabilities from '@/app/components/common/IconCardGrid';
import Testimonials from "../common/Testimonials";
import TechPartners from "@/app/components/common/PartnersSlider";
import PlatformCompatibilitySection from "./Sections/PlatformCompatibilitySection"; 
import BusinessOutcomes from "../common/Boxgrid/GridwithImageCard";
import FooterCta from "../common/Banner/FooterCta";
import Theproblem from "../common/IconCardGrid";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import TechnicalComponents from "../common/ServicesCard";
import WhyChooseUs from "../common/WhyChooseUsSection"; 

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";

import { bannerData, rightFitData, probData,whyChooseUsData, smarterEquipmentData, approachData, platformCompatibilityData, serverChoicesData, techData, videoConferencingItems, logoData, partnersData, recomData, faqHeaderData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:max-w-[200px] 2xl:max-w-[238px]"  descstyle="max-w-[59ch]" padding={'pt-[320px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[130px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview rightFitData={rightFitData} variant={'subtitleBorder'} />
      <div className="title-primary">
        <Theproblem data={probData} variant={'subtitleBorder'}  redtheme={true} />
      </div>
      <OurCustomizedSolutions data={videoConferencingItems} variant={'defaultBorder'} subtitleClass="max-w-[66ch]" />
      <TechnicalComponents data={smarterEquipmentData} variant="subtitle" />
      <Deplyentprocedure approachData={approachData}  variant={'subtitleBorder'} subtitleClass="max-w[200ch]" />
      <TechnicalCapabilities data={techData} gridcount={3} variant={'subtitleBorder'} subtitleClass="lg:max-w-full" />
      <PlatformCompatibilitySection data={platformCompatibilityData} variant={'default'} />
      <BusinessOutcomes data={serverChoicesData} bgColor={'bg-[linear-gradient(180deg,#F1F7FF_0%,#F3F7FC_100%)]'} variant={'subtitle'} subtitleClass="" />
      <TechPartners headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[162.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
