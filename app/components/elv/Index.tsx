import Banner from "./Sections/Banner";   
 import Testimonials  from "../home/Sections/Testimonials"; 
 import TrustedBy from "../common/TrustedBy"; 
import WhatweOffer from '../common/TabCard/TabCards';
import HowWeWork from '@/app/components/common/Numbox/NumberBox';

 import TheDifference from '@/app/components/common/Comparison';
import BusinessImpact from "../common/IconbgCardGrid"; 
 import IndustriesWeServe from "./Sections/IndustriesWeServe";
 import StandardsCompliance from "./Sections/StandardsCompliance";
 import OverviewGrid, { type OverviewData } from "./Sections/OverviewGrid";
 
   import TechPartner from "@/app/components/common/PartnersSlider"; 
import{testimonialsData}  from "@/app/components/common/data"; 
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
// import ExpertRecommendations from "./Sections/ExpertRecommendations";
import ExpertRecommendations from "../common/Banner/FooterCta";
import { faqHeaderData,bannerData,BusinessImpactData,elvOverviewData ,workData,differenceData,businessData,IndustriesData,partnersHeaderData,whygsData,recomData,TrustedbyData,offerData} from "./data"; 
import { TechnologyAlliancesData } from "@/app/components/common/data";  
import FaqSection from  '@/app/components/common/Faq/FaqSection';
const Index = () => (
  <>
    <Banner bannerData={bannerData} descstyle="max-w-[56ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[145.5px]'} />

    <TrustedBy TrustedbyData={TrustedbyData} />

    <WhatweOffer data={offerData}  gridcount ='4' variant={'subtitleBorder'}  subtitleClass='max-w-[120ch]' />
    <OverviewGrid data={elvOverviewData as OverviewData} variant={'subtitle'}  subtitleClass="max-w-[133ch]" />

    <TheDifference competitorData={differenceData} variant={'subtitleBorder'} subtitleClass='' />
    <BusinessImpact sectionData={BusinessImpactData} variant={'subtitleBorder'}  subtitleClass='max-w-[128ch]'
      classheight="min-h-[196px] lg:min-h-[251px]" />
    <HowWeWork approachData={workData} variant={'subtitle'} subtitleClass="max-w[200ch]"   />

    <IndustriesWeServe data={IndustriesData} variant={'subtitle'} />
    <StandardsCompliance data={businessData} variant={'subtitle'}/>
    <WhyGsit data={whygsData}    variant={'subtitle'} subtitleClass="max-w[200ch]" />
    <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />


    <TechPartner headerData={partnersHeaderData} variant={'subtitle'} logo={TechnologyAlliancesData} />
    <ExpertRecommendations data={recomData} descclass="max-w-[48ch]" sectionspace="py-82 2xl:py-[100px]  3xl:py-[174.5px]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
  </>
);

export default Index;
