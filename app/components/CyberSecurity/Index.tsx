 
   import BannerMain from "@/app/components/common/Banner/BannerMain";
   import TrustedBy from "@/app/components/common/TrustedBy"; 
   import UnderstandingCybersecurity from './Sections/UnderstandingCybersecurity';
   import CoerService from './Sections/CoerService';
   import OurApproach from './Sections/OurApproach' ;
   import WhyGsit from "../common/IconCardGrid";
   import TechPartners from './Sections/TechPartners';
 import Testimonials  from "../home/Sections/Testimonials";
import CtaBanner from"./Sections/CtaBanner";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import BusinessResilience from './Sections/BusinessResilience';

import{testimonialsData,TrustedbyData}  from "@/app/components/common/data"; 
import { faqHeaderData, bannerData,whyGsitData } from "./data"; 
const Index = () => {
  return (
    <>
       <BannerMain bannerData={bannerData} classpointdes='max-w-[18.324ch]' descstyle="max-w-[56ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'}/>
       <TrustedBy TrustedbyData={TrustedbyData}/>
       <UnderstandingCybersecurity />
       <CoerService />
       <BusinessResilience />
       <OurApproach />
       <WhyGsit SectionHeaderData={whyGsitData}   headingClass="text-heading max-w-[16ch] md:max-w-full lg:max-w-[16ch]" 
       descriptionClass="lg:max-w-[54ch]" />
       <TechPartners />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
     <CtaBanner />
     <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
           
        
    </>
  );
};

export default Index;
