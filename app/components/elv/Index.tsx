import Banner from "./Sections/Banner"
  import SectionTwo from "./Sections/SectionTwo";
  import {featuresData} from "./data";
  import WhatWeOffer from "./Sections/WhatWeOffer";
 import Testimonials  from "../home/Sections/Testimonials";
import WhatWeDo from "./Sections/WhatWeDo";
import TheDifference from "./Sections/TheDifference" ;
import BusinessImpact from "./Sections/BusinessImpact";
import HowWeWork from "./Sections/HowWeWork";
 import IndustriesWeServe from "./Sections/IndustriesWeServe";
 import StandardsCompliance from "./Sections/StandardsCompliance";
 import TechPartners from "./Sections/TechPartners";
 import TrustedByOrganizations from"./Sections/TrustedByOrganizations";
import{testimonialsData}  from "@/app/components/common/data";
import WhyGSIT from "./Sections/WhyGSIT";
import ExpertRecommendations from "./Sections/ExpertRecommendations";
import { faqHeaderData } from "./data"; 
import FaqSection from  '@/app/components/common/Faq/FaqSection';
const Index = () => {
  return (
    <>
    <Banner />
    <SectionTwo  data={featuresData} />
    <WhatWeOffer />
    <WhatWeDo />
    <TheDifference />
    <BusinessImpact />
    <HowWeWork />
    <IndustriesWeServe />
    <StandardsCompliance />
    <TechPartners />
    <WhyGSIT />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <TrustedByOrganizations />
    <ExpertRecommendations />
    <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
