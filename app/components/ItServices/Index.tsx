import Banner from "@/app/components/common/Banner" 
import WhatWeOffer from "../common/IconCardGrid";
 import WhoisThisFor from "./Sections/WhoisThisFor";
 import TheDifference from"./Sections/TheDifference";
 import WhyGSIT from "../common/IconbgCardGrid";
 import TrustedBy from "./Sections/TrustedBy";
 import Testimonials  from "../home/Sections/Testimonials";
import{testimonialsData}  from "@/app/components/common/data";
import { faqHeaderData,bannerData,SectionHeaderData,whygsData } from "./data"; 
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import TechPartners from "./Sections/TechPartners";
import CtaBanner from"./Sections/CtaBanner";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import GsitDifference from './Sections/GsitDifference';
const Index = () => {
  return (
    <>
    <Banner bannerData={bannerData} descstyle="max-w-[42ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:pt-[165.5px] 3xl:pb-[164.5px]'} /> 
    <WhatWeOffer SectionHeaderData={SectionHeaderData}  headingClass="text-heading max-w-[16ch] md:max-w-full lg:max-w-[16ch]" descriptionClass="lg:max-w-[54ch]" arrow={true}/>
    <WhoisThisFor />
    <TheDifference />
    <GsitDifference />
    <WhyGSIT sectionData={whygsData} headingClass = "text-heading md:!whitespace-normal lg:!whitespace-pre-line " titlebrake={'hidden'}  subtitle={false} descriptionClass='max-w-[57ch]'
     border={false} myclass="3xl:mt-8 3xl:mb-4.5" classheight="min-h-[196px] lg:min-h-[269px]"/>
    <TrustedBy />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
        <IndustriesWeServe />
        <TechPartners />
        <CtaBanner />
         <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
