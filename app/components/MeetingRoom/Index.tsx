
   import BannerMain from "@/app/components/common/Banner/BannerMain";
   import TrustedBy from "@/app/components/common/TrustedBy";  
   import Overview from "./Sections/Overview"
   import WhatWeOffers from "./Sections/WhatWeOffers"
   import RoomConfig from "./Sections/RoomConfig"
   import BusinessOutcomes from "./Sections/BusinessOutcomes"
   import TechPartners from "./Sections/TechPartners"
 import TheDifference from '@/app/components/common/Comparison';
 import GridNumber from '@/app/components/common/GridNumber';
 import Testimonials  from "../home/Sections/Testimonials";
import ExpertRecommendations from './Sections/ExpertRecommendations';
import PlatformCompatibility from './Sections/PlatformCompatibility';
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
   import TechnicalCapabilities from "../common/IconCardGrid";
import FaqSection from  '@/app/components/common/Faq/FaqSection';

import{TrustedbyData,testimonialsData}  from "@/app/components/common/data"; 
import { bannerData,rightFitData,differenceData,offersData,roomConfigData, approachData, techData,whygsData,faqHeaderData} from "./data"; 
const Index = () => {
  return (
    <>
     <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'}/>
     <TrustedBy TrustedbyData={TrustedbyData}/> 
     <Overview rightFitData={rightFitData} /> 
       <WhatWeOffers offersData={offersData}/>
       <TheDifference competitorData={differenceData}    subtitle={true} subtitleClass='' />  
       <RoomConfig roomConfigData={roomConfigData} />
        <TechnicalCapabilities SectionHeaderData={techData} gridcount={4}  subtitle={true}   subtitleClass="lg:max-w-full" />
        <BusinessOutcomes />
        <TechPartners />
        <GridNumber approachData={approachData} subtitle={true} subtitleClass="max-w[200ch]" border={true} boxheight="pt-14  xl:pt-[135px]"/> 
        <PlatformCompatibility />
      <WhyGsit whygsData={whygsData} descriptionClass="max-w-[37ch]" border={true} subtitle={true} subtitleClass="max-w[200ch]"/>
              <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
          <ExpertRecommendations />
                  <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
            
    </>
  );
};

export default Index;
