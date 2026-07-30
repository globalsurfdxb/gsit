import Banner from "@/app/components/common/Banner";
  import SectionTwo from "./Sections/SectionTwo";
  import {featuresData} from "./data";
  import WhatWeOffer from "./Sections/WhatWeOffer";
 import Testimonials  from "../home/Sections/Testimonials";
import WhatWeDo from "./Sections/WhatWeDo";

 import TheDifference from '@/app/components/common/Comparison';
import BusinessImpact from "../common/IconbgCardGrid";
import HowWeWork from '@/app/components/common/GridNumber';
 import IndustriesWeServe from "./Sections/IndustriesWeServe";
 import StandardsCompliance from "./Sections/StandardsCompliance";
 import TechPartners from "./Sections/TechPartners";
 import TrustedByOrganizations from"./Sections/TrustedByOrganizations";
import{testimonialsData}  from "@/app/components/common/data"; 
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
import ExpertRecommendations from "./Sections/ExpertRecommendations";
import { faqHeaderData,bannerData,BusinessImpactData ,differenceData,HowWeWorkData,whygsData} from "./data"; 
import FaqSection from  '@/app/components/common/Faq/FaqSection';
const Index = () => {
  return (
    <>
    <Banner bannerData={bannerData} descstyle="max-w-[56ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[197.5px]'}/>
    <SectionTwo  data={featuresData} />
    <WhatWeOffer />
    <WhatWeDo />
   
        <TheDifference competitorData={differenceData} subtitle={true} subtitleClass=''/>
    <BusinessImpact sectionData={BusinessImpactData} subtitle={true} subtitleClass='max-w-[128ch]'
            classheight="min-h-[196px] lg:min-h-[251px]"/>
    
    <HowWeWork data ={HowWeWorkData} subtitle={true} subtitleClass='max-w-[128ch]'  boxheight="pt-14  xl:pt-[135px]"/>
    <IndustriesWeServe />
    <StandardsCompliance />
    <TechPartners /> 
        <WhyGsit data={whygsData} descriptionClass="max-w-[37ch]" bordersm="border-0" subtitle={true} subtitleClass="max-w[200ch]"/>
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <TrustedByOrganizations />
    <ExpertRecommendations />
    <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
