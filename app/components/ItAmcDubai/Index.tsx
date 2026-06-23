 
 import Banner from "./Sections/Banner" ;
 import TrustedBy from "./Sections/TrustedBy";
 import UnderstandingAmc from "./Sections/UnderstandingAmc";
 import TheRightFit from "./Sections/TheRightFit";
 import GsitDifference from "./Sections/GsitDifference";
 import ItAmcCost from "./Sections/ItAmcCost";
 import ServiceLevelAgreement from "./Sections/ServiceLevelAgreement";
 import OurCoverageTypes from './Sections/OurCoverageTypes';
 import IndustriesWeServe from './Sections/IndustriesWeServe';
 import SeeItAnAction from './Sections/SeeItAnAction';
 import EscalationFlow from './Sections/EscalationFlow' ;
 import Testimonials  from "../home/Sections/Testimonials";
import { amcTestimonialsHeader } from "./data";
import{testimonialsData}  from "@/app/components/common/data";
import GettingStarted from './Sections/GettingStarted';
import ITSecurityKnowledge from './Sections/ITSecurityKnowledge';
import FaqSection from  './Sections/FaqSection';
import RelatedServices from './Sections/RelatedServices';
const Index = () => {
  return (
    <>
    <Banner /> 
    <TrustedBy />
    <UnderstandingAmc />
    <TheRightFit />
    <GsitDifference />
    <ItAmcCost />
    <ServiceLevelAgreement />
    <OurCoverageTypes />
    <IndustriesWeServe />
    <SeeItAnAction />
    <EscalationFlow />
    <GettingStarted />
  
        <Testimonials data={testimonialsData} header={amcTestimonialsHeader} />
        <ITSecurityKnowledge />
     <FaqSection />
     <RelatedServices />
    </>
  );
};

export default Index;
