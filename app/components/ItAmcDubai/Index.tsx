 
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
import { IndustriesHeaderData } from "@/app/components/common/data"; 
import { faqHeaderData,bannerData,escalationHeaderData,relatedServicesHeaderData,gettingStartedHeaderData,KnowledgeHeaderData,SectionNineData,seeITData ,sectionEightData,sectionthreeData,videoData,sectionSevenData,sectionSixData,rightFitData,sectionFiveData,auditData} from "./data"; 
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
    <UnderstandingAmc data={sectionthreeData} videodata={videoData}/>
    <TheRightFit data={rightFitData} />
    <GsitDifference data={sectionFiveData} auditData={auditData}/>
    <ItAmcCost data={sectionSixData}/>
    <ServiceLevelAgreement data={sectionSevenData} />
    <OurCoverageTypes  data={sectionEightData}/>
    <IndustriesWeServe data={IndustriesHeaderData} />
    <SeeItAnAction data={SectionNineData} seeitData={seeITData} />
    <EscalationFlow data={escalationHeaderData}/>
    <GettingStarted  data={gettingStartedHeaderData}/> 
    <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <ITSecurityKnowledge data={KnowledgeHeaderData}/>
    <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    <RelatedServices data={relatedServicesHeaderData} />
    </>
  );
};

export default Index;
