import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";  
import FeatureandBenefits from '@/app/components/common/ComparisonOne'; 
import Connectivity from '../common/TableComparison/CompareTable'; 
import Overview from "../common/Boxgrid/GridwithImageCard";
import DeliveryProcess from '@/app/components/common/Numbox/NumberBox';
import OurSolution from '@/app/components/common/IconCardGrid';
import Testimonials from "../common/Testimonials";
import WhyChooseUs from "../common/WhyChooseUsSection"; 
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection'; 
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import {
  bannerData,  overviewData, recomData, whyChooseUsData, faqHeaderData,
   howweworkData,  makingswichData,ConnectivityData,servicesData
} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:w-[185px] 3xl:w-[210.75px]" descstyle="max-w-[60ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[50ch]"/> 
      <OurSolution data={servicesData} gridcount={3} variant={'subtitleBorder'}  />
      <FeatureandBenefits competitorData={makingswichData} variant={'subtitleBorder'}   gridclass="grid-cols-2 " />
      <Connectivity data={ConnectivityData} variant={'subtitleBorder'} subtitleClass='max-w-[140ch]'    columnwidth={{ base: '220px', md: '340px', '3xl': '456px' }}/> 
      <DeliveryProcess approachData={howweworkData} variant={'subtitleBorder'} />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />  
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} /> 
      <FooterCta data={recomData} descclass="max-w-[68ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} /> 
    </>
  );
};

export default Index;
