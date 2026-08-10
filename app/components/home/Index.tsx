import Banner from "./Sections/Banner";
import CounterHome from "./Sections/CounterHome";
import WhatWeDo from "../common/IconCardGrid";
import WhoWeAre from "./Sections/WhoWeAre";
import WhyGsit from "./Sections/WhyGsit";
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import OutCome from "./Sections/OutCome";  
import Testimonials from "./Sections/Testimonials";
import KnowledgeInsights from "./Sections/KnowledgeInsights";
   import TechPartner from "@/app/components/common/PartnersSlider";
 import { SectionHeaderData,bannerData,WhoWeAreData ,whyGsitData,ctaData,ClienteleData,logosData,OutcomeHeaderData,KnowledgeData,logoData,partnersData} from "./data"; 
 import { statsData,testimonialsData,IndustriesHeaderData } from "@/app/components/common/data";
 
 
  

import Cta from "./Sections/Cta";
const Index = () => {
  return (
    <>
      <Banner data={bannerData}/>
      <CounterHome data={statsData}/>
      <WhatWeDo data={SectionHeaderData} variant={'defaultBorder'} subtitleClass="lg:max-w-[27ch]" arrow={true} />
      <WhoWeAre data={WhoWeAreData}/>
      <WhyGsit data={whyGsitData} variant={'defaultBorder'} subtitleClass="max-w-[38ch]" />
      <IndustriesWeServe data={IndustriesHeaderData} variant={'subtitle'} subtitleClass="max-w-[74ch]"/>
      <OutCome data={OutcomeHeaderData} variant={'defaultBorder'} subtitleClass="max-w-[35ch]"/> 
      <TechPartner headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <Testimonials data={testimonialsData.review}   header={testimonialsData.Header} /> 
      <TechPartner headerData={ClienteleData} variant={'subtitle'} logo={logosData}/>
      <KnowledgeInsights data={KnowledgeData} variant={'subtitle'} />
      <Cta data={ctaData}/>
    </>
  );
};

export default Index;
