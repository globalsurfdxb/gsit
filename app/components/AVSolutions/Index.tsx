import Banner from "@/app/components/common/Banner" 
import CounterMain from "./Sections/CounterMain"
import OurAv from "./Sections/OurAv"
 import OurCoverageTypes from "./Sections/OurCoverageTypes";
 import AvProfessionalServices from './Sections/AvProfessionalServices'; 
 import Comparison from '@/app/components/common/Comparison';
 import OurDifference from '@/app/components/common/GridNumber';
   import TechPartners from './Sections/TechPartners';
import CtaBanner from"./Sections/CtaBanner";
 import Testimonials  from "../home/Sections/Testimonials";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
 import TrustedByOrganizations from"./Sections/TrustedByOrganizations";

import{testimonialsData}  from "@/app/components/common/data"; 
import { bannerData,faqHeaderData,CompetitorData,approachData } from "./data";  
const Index = () => {
  return (
    <>
    <Banner bannerData={bannerData} descstyle="max-w-[42ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:pt-[154px] 3xl:pb-[153px]'} /> 
    <CounterMain />
    <OurAv />
    <OurCoverageTypes />
    <AvProfessionalServices /> 
    <Comparison competitorData={CompetitorData} subtitle={true} subtitleClass=""/>
    <OurDifference data ={approachData} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " boxheight="pt-14  xl:pt-[104px]"/>
           <TechPartners />
            <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
               <TrustedByOrganizations />
                    <CtaBanner />
                         <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
