import Banner from "./Sections/Banner";
import CounterHome from "./Sections/CounterHome";
import WhatWeDo from "./Sections/WhatWeDo";
import WhoWeAre from "./Sections/WhoWeAre";
import WhyGsit from "./Sections/WhyGsit";
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import OutCome from "./Sections/OutCome";
import TechPartners from "./Sections/TechPartners";
import Clientele from "./Sections/Clientele";
import Testimonials from "./Sections/Testimonials";
import KnowledgeInsights from "./Sections/KnowledgeInsights";

import {  testimonialsHeader } from "./data";

import { testimonialsData } from "@/app/components/common/data";
  

import Cta from "./Sections/Cta";
const Index = () => {
  return (
    <>
      <Banner />
      <CounterHome />
      <WhatWeDo />
      <WhoWeAre />
      <WhyGsit />
      <IndustriesWeServe />
      <OutCome />
      <TechPartners />
      <Testimonials data={testimonialsData} header={testimonialsHeader} />
      <Clientele />
      <KnowledgeInsights />
      <Cta />
    </>
  );
};

export default Index;
