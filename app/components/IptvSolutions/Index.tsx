import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials"; 
import FooterCta from "../common/Banner/FooterCta"; 
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Oursolutions from "@/app/components/common/TabCard/GridCard";
import BusinessOutcomes from '@/app/components/common/IconCardGrid'; 
import Overview from "../common/Boxgrid/GridwithImageCard";  
import ExecutionWorkflow from '@/app/components/common/Numbox/NumberBox';
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import LearningEnvironments from "./section/LearningEnvironmentsSection"; 
import LicensingComplianceSection from "./section/LicensingComplianceSection";
import WhyChooseUsSection from "./section/WhyChooseUsSection";
import { bannerData, recomData, postdevelopmentData,learningEnvironmentsData,licensingComplianceData,usecaseData, 
   serverChoicesData, faqHeaderData, servicesData, whyChooseUsData } from "./data";

const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:w-[190px] xl:w-[247px] " descstyle="max-w-[56ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={serverChoicesData} cardType="two" variant={'subtitleBorder'} subtitleClass="" /> 
       <LearningEnvironments data={learningEnvironmentsData} variant="subtitleBorder" />
       <Oursolutions data={usecaseData} gridcount="3" variant={'subtitleBorder'} />
      <BusinessOutcomes  data={servicesData} gridcount={3} variant={'default'} subtitleClass="lg:max-w-[32ch] xl:max-w-[42ch]" />
      <LicensingComplianceSection data={licensingComplianceData} variant="subtitleBorder" />
        
      <ExecutionWorkflow approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   " />
     
        <WhyChooseUsSection data={whyChooseUsData} variant="subtitle" />  
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[67ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[162.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};
export default Index;
