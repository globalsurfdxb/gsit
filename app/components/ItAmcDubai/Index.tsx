 
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
    <TheRightFit data={rightFitData}  variant={'defaultBorder'} subtitleClass="lg:max-w-[35ch]"/>
    <GsitDifference data={sectionFiveData} auditData={auditData} variant={'defaultBorder'} subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[65ch]"/>
    <ItAmcCost data={sectionSixData} variant={'defaultBorder'} subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[55ch] "/>
    <ServiceLevelAgreement data={sectionSevenData} variant={'defaultBorder'}  subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[55ch] "/>
    <OurCoverageTypes  data={sectionEightData} variant={'defaultBorder'}  subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[55ch] "/>
    <IndustriesWeServe data={IndustriesHeaderData} variant={'subtitle'}subtitleClass="max-w-[74ch]" />
    <SeeItAnAction data={SectionNineData} seeitData={seeITData} />
    <EscalationFlow data={escalationHeaderData} variant={'subtitle'}subtitleClass="max-w-[37ch]"/>
    <GettingStarted  data={gettingStartedHeaderData} variant={'defaultBorder'} subtitleClass="max-w-[36ch]"/> 
    <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <ITSecurityKnowledge data={KnowledgeHeaderData}  variant={'defaultBorder'} subtitleClass="lg:max-w-[36ch]"/>
    <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData} variant={'default'} />
    <RelatedServices data={relatedServicesHeaderData}  variant={'defaultBorder'} subtitleClass="lg:max-w-[54ch]"/>
    </>
  );
};

export default Index;
