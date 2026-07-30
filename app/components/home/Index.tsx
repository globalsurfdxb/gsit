import Banner from "./Sections/Banner";
import CounterHome from "./Sections/CounterHome";
import WhatWeDo from "../common/IconCardGrid";
import WhoWeAre from "./Sections/WhoWeAre";
import WhyGsit from "./Sections/WhyGsit";
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import OutCome from "./Sections/OutCome";
import TechPartners from "./Sections/TechPartners";
import Clientele from "./Sections/Clientele";
import Testimonials from "./Sections/Testimonials";
import KnowledgeInsights from "./Sections/KnowledgeInsights";
 import { SectionHeaderData } from "./data";


import { testimonialsData } from "@/app/components/common/data";
  

import Cta from "./Sections/Cta";
const Index = () => {
  return (
    <>
      <Banner />
      <CounterHome />
      <WhatWeDo data={SectionHeaderData} headingClass="text-heading max-w-[16ch] md:max-w-full lg:max-w-[16ch]" descriptionClass="lg:max-w-[27ch]" arrow={true} />
      <WhoWeAre />
      <WhyGsit />
      <IndustriesWeServe />
      <OutCome />
      <TechPartners /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <Clientele />
      <KnowledgeInsights />
      <Cta />
    </>
  );
};

export default Index;
