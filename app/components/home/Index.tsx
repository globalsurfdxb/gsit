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
      <WhatWeDo data={SectionHeaderData} headingClass="text-heading max-w-[16ch] md:max-w-full lg:max-w-[16ch]" descriptionClass="lg:max-w-[27ch]" arrow={true} />
      <WhoWeAre data={WhoWeAreData}/>
      <WhyGsit data={whyGsitData}/>
      <IndustriesWeServe data={IndustriesHeaderData} />
      <OutCome data={OutcomeHeaderData}/> 
      <TechPartner headerData={partnersData} logo={logoData} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} /> 
      <TechPartner headerData={ClienteleData} logo={logosData}/>
      <KnowledgeInsights data={KnowledgeData}/>
      <Cta data={ctaData}/>
    </>
  );
};

export default Index;
