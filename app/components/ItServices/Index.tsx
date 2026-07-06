import Banner from "@/app/components/common/Banner" 
import WhatWeOffer from "@/app/components/common/BoxwithArrow/BoxwithArrow";   
 import WhoisThisFor from "./Sections/WhoisThisFor";
 import TheDifference from"./Sections/TheDifference";
 import WhyGSIT from"./Sections/WhyGSIT";
 import TrustedBy from "./Sections/TrustedBy";
 import Testimonials  from "../home/Sections/Testimonials";
import{testimonialsData}  from "@/app/components/common/data";
import { faqHeaderData,bannerData,SectionHeaderData } from "./data"; 
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import TechPartners from "./Sections/TechPartners";
import CtaBanner from"./Sections/CtaBanner";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import GsitDifference from './Sections/GsitDifference';
const Index = () => {
  return (
    <>
    <Banner bannerData={bannerData} padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[172px]'} /> 
    <WhatWeOffer SectionHeaderData={SectionHeaderData} />
    <WhoisThisFor />
    <TheDifference />
    <GsitDifference />
    <WhyGSIT />
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
