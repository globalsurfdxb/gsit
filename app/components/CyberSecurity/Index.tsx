 
   import BannerMain from "@/app/components/common/Banner/BannerMain";
   import TrustedBy from "@/app/components/common/TrustedBy"; 
   import UnderstandingCybersecurity from './Sections/UnderstandingCybersecurity';
   import CoerService from './Sections/CoerService';
   import OurApproach from '@/app/components/common/GridNumber';
   import WhyGsit from "../common/IconCardGrid"; 
   import TechPartner from "@/app/components/common/PartnersSlider";
 import Testimonials  from "../home/Sections/Testimonials"; 
import FooterCta from "../common/Banner/FooterCta"; 
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import BusinessResilience from './Sections/BusinessResilience';

import{testimonialsData,TrustedbyData}  from "@/app/components/common/data"; 
import { faqHeaderData, bannerData,whyGsitData, approachData,businessData,ctabannermData,coreData ,UnderstandingData,partnersHeaderData} from "./data";   
import { TechnologyAlliancesData } from "@/app/components/common/data";
const Index = () => {
  return (
    <>
       <BannerMain bannerData={bannerData} classpointdes='max-w-[18.324ch]' descstyle="max-w-[60ch]" padding={'pt-[277px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'}/>
       <TrustedBy TrustedbyData={TrustedbyData}/>
       <UnderstandingCybersecurity data={UnderstandingData} variant={'defaultBorder'} subtitleClass='lg:max-w-[30ch] xl:max-w-[45ch] 2xl:max-w-[66ch]' />
       <CoerService data={coreData} variant={'subtitleBorder'}/>
       <BusinessResilience data={businessData} variant={'subtitle'}/> 
       <OurApproach data ={approachData} variant={'subtitle'} subtitleClass='max-w-[128ch]' gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " boxheight="pt-14  xl:pt-[95px]"/>
       <WhyGsit data={whyGsitData}   variant={'defaultBorder'}      subtitleClass="lg:max-w-[40ch] xl:max-w-[54ch]" />
  
       <TechPartner headerData={partnersHeaderData} variant={'subtitle'} logo={TechnologyAlliancesData} />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
     <FooterCta data={ctabannermData} descclass="max-w-[57ch]" sectionspace ="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[186.5px]"/>
     <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData} variant={'default'} />
           
        
    </>
  );
};

export default Index;
