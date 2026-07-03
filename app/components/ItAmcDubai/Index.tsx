 
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
import { faqHeaderData } from "./data"; 
import{testimonialsData}  from "@/app/components/common/data";
import GettingStarted from './Sections/GettingStarted';
import ITSecurityKnowledge from './Sections/ITSecurityKnowledge';
import FaqSection from  '@/app/components/common/Faq/FaqSection';
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
    <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <ITSecurityKnowledge />
    <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    <RelatedServices />
    </>
  );
};

export default Index;
