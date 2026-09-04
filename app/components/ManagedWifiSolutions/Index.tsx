
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy"; 
import Overview from "../common/Boxgrid/GridwithImageCard";
import OperationalComparison from '@/app/components/common/Comparison';  
import TechPartners from "@/app/components/common/PartnersSlider"; 
import Theproblem from "../common/IconCardGrid";
import Fetures from '@/app/components/common/IconCardGrid';
import Testimonials from "../common/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
 import IndustriesWeServe from './Sections/IndustriesWeServe';
import BusinessImpact from '@/app/components/common/Boxgrid/BoxCard';
  import StepbyStep from '@/app/components/common/Numbox/NumberBox'; 
  import WhyChooseUs from '@/app/components/common/Boxgrid/GridGraySection'; 

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, ITArchitectureData,grayboxData ,howweworkData,longtermValueData,featuresData,industriesData,SectionHeaderData, compData, faqHeaderData,   partnersData, logoData, recomData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[62ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[130px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} /> 
      <Overview data={ITArchitectureData} variant={'defaultBorder'} subtitleClass="lg:max-w-[30ch] xl:max-w-[55ch]" />
      
          <div className="title-primary">
            <Theproblem data={SectionHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-[120ch]"  redtheme={true} />
          </div>   
          <IndustriesWeServe data={industriesData} variant={'subtitle'}subtitleClass="max-w-[134ch]" /> 
          <Fetures data={featuresData} gridcount={4} variant={'defaultBorder'} subtitleClass="lg:max-w-[55ch] xl:max-w-[39ch]" />
                <BusinessImpact data={longtermValueData} variant={'subtitleBorder'} subtitleClass='max-w-full' />
                 <StepbyStep approachData={howweworkData} variant={'subtitleBorder'}  gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  2xl:!gap-x-7.5   "     />
   <OperationalComparison competitorData={compData}    variant={'subtitle'} subtitleClass='' />
       <TechPartners headerData={partnersData} variant={'default'} subtitleClass="max-w-[44ch]" logo={logoData} /> 
       <WhyChooseUs data={grayboxData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />
   
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
 
    </>
  );
};

export default Index;
