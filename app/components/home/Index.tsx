import Banner from "./Sections/Banner";
import CounterHome from "./Sections/CounterHome"; 
import WhoWeAre from "./Sections/WhoWeAre";
import WhatWeDo from "./Sections/WhyGsit";
import IndustriesWeServe from "./Sections/IndustriesWeServe"; 
import WhyGSIT from '@/app/components/common/IconCardGrid';
import Testimonials from "./Sections/Testimonials";
import KnowledgeInsights from "./Sections/KnowledgeInsights";
import Outcome from "./Sections/ImpactStats";
   import TechPartner from "@/app/components/common/PartnersSlider";
 import { servicesData,ImpactStatsData,bannerData,WhoWeAreData ,whatGsitData,ctaData,ClienteleData,logosData,OutcomeHeaderData,KnowledgeData,logoData,partnersData} from "./data"; 
 import { statsData,testimonialsData,IndustriesHeaderData } from "@/app/components/common/data";
 
 
  

import Cta from "./Sections/Cta";
const Index = () => {
  return (
    <>
      <Banner data={bannerData}/>
      <CounterHome data={statsData}/>
      <div id="whatwedo">
        <WhatWeDo data={whatGsitData} variant={'defaultBorder'} subtitleClass="lg:max-w-[29ch]" />
      </div>
      <WhoWeAre data={WhoWeAreData}/>
      <WhyGSIT data={servicesData} gridcount={3} variant={'default'} footertext={true} subtitleClass="lg:max-w-[32ch] xl:max-w-[36ch]" />
        <IndustriesWeServe data={IndustriesHeaderData} variant={'subtitle'} subtitleClass="max-w-[74ch]"/> 
      <Outcome data={ImpactStatsData} variant={'default'} subtitleClass="lg:max-w-[36ch]"/>
      <TechPartner headerData={partnersData} variant={'subtitle'} logo={logoData} imgheight='h-[38px] lg:h-[50px] 2xl:h-[107px] 2xl:w-[190px]'/>
      <Testimonials data={testimonialsData.review}   header={testimonialsData.Header} /> 
      <TechPartner headerData={ClienteleData} variant={'subtitle'} logo={logosData}/>
      <KnowledgeInsights data={KnowledgeData} variant={'subtitle'} />
      <Cta data={ctaData}/>
    </>
  );
};

export default Index;
