
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview from "./Sections/Overview";
import OurCustomizedSolutions from "./Sections/OurCustomizedSolutions";
import Deplyentprocedure from '@/app/components/common/Numbox/NumberBox';
import TechnicalCapabilities from '@/app/components/common/IconCardGrid';
 import Testimonials  from "../home/Sections/Testimonials";
import BusinessOutcomes from "../common/CardSection";
import TechPartners from "@/app/components/common/PartnersSlider";
import PlatformCompatibility from "./Sections/PlatformCompatibility";
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
import TechnicalComponents from "@/app/components/common/ImageCard";
import FooterCta from "../common/Banner/FooterCta";
import Theproblem from "../common/emptyCardGrid";
import FaqSection from  '@/app/components/common/Faq/FaqSection';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
   
import { bannerData, rightFitData, probData, approachData,compatibilityData, techData,videoConferencingItems, outcomesdata,technicalComponentsData,logoData, partnersData,whygsData,recomData,faqHeaderData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[130px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview rightFitData={rightFitData} />
      <Theproblem SectionHeaderData={probData} subtitle={true} subtitleClass="max-w-[129ch]"
        headingClass="text-heading headred" descriptionClass="lg:max-w-[54ch]" redtheme={true} />
      <OurCustomizedSolutions data={videoConferencingItems} />
      <TechnicalComponents data={technicalComponentsData}/>
      <Deplyentprocedure approachData={approachData} subtitle={true} subtitleClass="max-w[200ch]" border={true} />
      <TechnicalCapabilities data={techData} gridcount={3} subtitle={true} subtitleClass="lg:max-w-full" />
      <BusinessOutcomes data={outcomesdata} />
      <PlatformCompatibility data={compatibilityData} />
      <TechPartners headerData={partnersData} logo={logoData} />
      <WhyGsit data={whygsData} descriptionClass="max-w-[37ch]" border={true} subtitle={true} subtitleClass="max-w[200ch]" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace ="py-82 2xl:py-[100px]  3xl:py-[162.5px]"/>
       <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>

    </>
  );
};

export default Index;
