import BannerWithForm from "../common/Banner/BannerWithForm";
import TrustedBy from "@/app/components/common/TrustedBy";
import UnderstandingAmc from "./Sections/UnderstandingAmc";
import TheRightFit from "./Sections/TheRightFit";
import GsitDifference from "./Sections/GsitDifference";
import ItAmcCost from "./Sections/ItAmcCost";
import ServiceLevelAgreement from "./Sections/ServiceLevelAgreement";
import OurCoverageTypes from "./Sections/OurCoverageTypes";
import IndustriesWeServe from "@/app/components/common/IndustriesWeServe";
import TechPartners from "@/app/components/common/PartnersSlider";
import SeeItAnAction from "./Sections/SeeItAnAction";
import EscalationFlow from "./Sections/EscalationFlow";
import ClientOutcomes from "./Sections/ClientOutcomes";
import Testimonials from "../common/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCtaWithForm";
import {
  faqHeaderData,
  TrustedbyData,
  BannerFormItem,
  escalationHeaderData,
  recomData,
  partnersData,
  ClientOutcomesData,
  logoData,
  relatedServicesHeaderData,
  parnerpoints,
  gettingStartedHeaderData,
  KnowledgeHeaderData,
  SectionNineData,
  seeITData,
  sectionEightData,
  sectionthreeData,
  videoData,
  sectionSevenData,
  sectionSixData,
  rightFitData,
  sectionFiveData,
  auditData,
  AMC_DOMAINS_DATA,
  onePartnerData,
  pricingPlansData,
  latestInsightsData,
  itAmcCtaForm,
  comparisonData,
  teamAccreditationData,
  coverageModelsData,
  slaEscalationData,
  gettingStartedData,
} from "./data";
import {
  testimonialsData,
  IndustriesHeaderData,
} from "@/app/components/common/data";
import GettingStarted, {
  GettingStartedSection,
} from "./Sections/GettingStarted";
import ITSecurityKnowledge from "./Sections/ITSecurityKnowledge";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import RelatedServices from "./Sections/RelatedServices";
import AmcScopeSection from "./Sections/AmsScopeSection";
import OnePartnerSection from "./OnePartnerSection";
import ComparisonTableSection from "./Sections/ComparisonTableSection";
import TeamAccreditationSection from "./Sections/teamAccreditation";
import CoverageModelsSection from "./Sections/coverageModels";
import SlaEscalationSection from "./Sections/SlaEscalationSection";
import ClientSuccessSlider from "../common/Slider/ClientSuccessSlider";
import { clientSuccessData } from "../NewOfficeITSetup/data";
import LatestInsightsSection from "./Sections/ITSecurityKnowledge";
const Index = () => {
  return (
    <>
      {/* section 1 */}
      <BannerWithForm bannerData={BannerFormItem} descstyle="max-w-[56ch]" />
      {/* section 2 */}
      <TrustedBy TrustedbyData={TrustedbyData} />

      <div className="w-full bg-white  rounded-2xl relative py-82 ">
        <div className="container">
          {/* section 3 */}
          <UnderstandingAmc data={sectionthreeData} videodata={videoData} />
          <hr className="text-color-border my-6" />
          {/* section 4 */}
          <AmcScopeSection amcData={AMC_DOMAINS_DATA} />
          <hr className="text-color-border my-6" />
          {/* section 5 */}
          <OnePartnerSection
            header={onePartnerData.header}
            cards={onePartnerData.cards}
            resultBox={onePartnerData.resultBox}
          />
        </div>
      </div>
      {/* section 6 */}
      <ComparisonTableSection data={comparisonData} />
      {/* section 7 */}
      <TeamAccreditationSection data={teamAccreditationData} />
      {/* section 8 */}
      <TheRightFit
        data={rightFitData}
        variant={"defaultBorder"}
        subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[50ch]"
      />
      {/* section 9 */}
      <CoverageModelsSection data={coverageModelsData} />
      {/* section 10 */}
      <SlaEscalationSection data={slaEscalationData} />
      {/* section 11 */}
      <ClientSuccessSlider data={clientSuccessData} rounded={true} />
      {/* section 12 */}
      <Testimonials
        data={testimonialsData.review}
        header={testimonialsData.Header}
      />
      {/* section 13 */}
      <ItAmcCost
        data={pricingPlansData}
        variant={"default"}
        subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[55ch] "
      />

      {/* section 14 */}
      <IndustriesWeServe
        data={IndustriesHeaderData}
        variant={"subtitle"}
        subtitleClass="w-full"
      />
      {/* section 15 */}
      <SeeItAnAction data={SectionNineData} seeitData={seeITData} />

      {/* section 16 */}
      <GettingStartedSection data={gettingStartedData} />

      {/* section 17 */}
      <LatestInsightsSection data={latestInsightsData} />

      {/* section 18 */}
      <RelatedServices
        data={relatedServicesHeaderData}
        variant={"defaultBorder"}
        subtitleClass="lg:max-w-[54ch]"
      />
      {/* section 19 */}
      {/* <ServiceLevelAgreement
        data={sectionSevenData}
        variant={"defaultBorder"}
        subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[52ch] "
      /> */}

      {/* section 20 */}
      <FaqSection
        faqHeaderData={faqHeaderData}
        faqData={faqHeaderData.faqData}
        variant={"default"}
        numberOfListLeft={5}
      />

      {/* section 21 */}
      <ExpertRecommendations
        data={recomData}
        descclass="max-w-full"
        sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[199.5px]"
      />

      {/* <GsitDifference
        data={sectionFiveData}
        auditData={auditData}
        variant={"defaultBorder"}
        subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[65ch]"
      />

      <OurCoverageTypes
        data={sectionEightData}
        variant={"defaultBorder"}
        subtitleClass="lg:max-w-[36ch] xl:max-w-[45ch] 2xl:max-w-[55ch] "
      />

      <EscalationFlow
        data={escalationHeaderData}
        variant={"subtitle"}
        subtitleClass="max-w-[37ch]"
      />
      <TechPartners
        headerData={partnersData}
        variant={"defaultBorder"}
        subtitleClass="max-w-[44ch]"
        parnerpoints={parnerpoints}
        logo={logoData}
        imgheight=" 3xl:mt-[10px] 3xl:mb-6 h-[38px] lg:h-[50px] 2xl:h-[112px]"
      />
      <ClientOutcomes
        data={ClientOutcomesData}
        variant={"defaultBorder"}
        subtitleClass="max-w-[37ch]"
      /> */}
    </>
  );
};

export default Index;
