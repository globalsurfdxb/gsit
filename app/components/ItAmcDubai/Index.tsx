 
 import Banner from "./Sections/Banner" ;
   import TrustedBy from "@/app/components/common/TrustedBy";
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
import { faqHeaderData,bannerData } from "./data"; 
import{testimonialsData}  from "@/app/components/common/data";
import GettingStarted from './Sections/GettingStarted';
import ITSecurityKnowledge from './Sections/ITSecurityKnowledge';
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import RelatedServices from './Sections/RelatedServices';
   import { TrustedbyData} from "@/app/components/common/data"; 
const Index = () => {
  return (
    <>
    <Banner data={bannerData} /> 
    <TrustedBy TrustedbyData={TrustedbyData}/>
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
