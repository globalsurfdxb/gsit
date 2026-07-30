
   import BannerMain from "@/app/components/common/Banner/BannerMain";
   import TrustedBy from "@/app/components/common/TrustedBy";  
   import Overview from "./Sections/Overview";
   import WhatWeOffers from "@/app/components/common/ImageLinkCard";
   import RoomConfig from "./Sections/RoomConfig";
   import BusinessOutcomes from "../common/CardSection";
   import TechPartners from "@/app/components/common/PartnersSlider";
 import TheDifference from '@/app/components/common/Comparison';
 import Deplyentprocedure from '@/app/components/common/Numbox/NumberBox';
 import Testimonials  from "../home/Sections/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import PlatformCompatibility from './Sections/PlatformCompatibility';
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
   import TechnicalCapabilities from "../common/IconCardGrid";
import FaqSection from  '@/app/components/common/Faq/FaqSection';

import{TrustedbyData,testimonialsData}  from "@/app/components/common/data"; 
import { bannerData,rightFitData,differenceData,offersData,roomConfigData, approachData, techData,whygsData,businessOutcomes,recomData,faqHeaderData,partnersHeaderData} from "./data"; 
const Index = () => {
  return (
    <>
     <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'}/>
     <TrustedBy TrustedbyData={TrustedbyData}/> 
     <Overview rightFitData={rightFitData} /> 
       <WhatWeOffers data={offersData}/>
       <TheDifference competitorData={differenceData}    subtitle={true} subtitleClass='' />  
       <RoomConfig roomConfigData={roomConfigData} />
        <TechnicalCapabilities data={techData} gridcount={4}  subtitle={true}   subtitleClass="lg:max-w-full" />
        <BusinessOutcomes data={businessOutcomes}/>
        <TechPartners data={partnersHeaderData}/>
        <Deplyentprocedure approachData={approachData} subtitle={true} subtitleClass="max-w[200ch]" border={true} /> 
        <PlatformCompatibility />
      <WhyGsit data={whygsData} descriptionClass="max-w-[37ch]" border={true} subtitle={true} subtitleClass="max-w[200ch]"/>
              <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
          <ExpertRecommendations data={recomData} descclass="max-w-[70ch]" sectionspace ="py-82 2xl:py-[100px]  3xl:py-[162.5px]"/> 
                  <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
            
    </>
  );
};

export default Index;
