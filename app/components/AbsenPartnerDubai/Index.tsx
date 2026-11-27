import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
// "Get started" uses the same CTA design as the meeting-room page
import ExpertRecommendations, { type ConsultationData } from "@/app/components/MeetingRoom/Sections/ExpertRecommendations";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco and Biamp partner pages
import OverviewBento, { type BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import WhyMetrics, { type WhyDataType } from "@/app/components/BarcoPartnerDubai/Sections/WhyMetrics";
import CategoryGroups, { type CategoryGroupsData } from "@/app/components/BiampPartnerDubai/Sections/CategoryGroups";
import TurnkeyBand from "./Sections/TurnkeyBand";
import {
  bannerData,
  overviewData,
  rangeData,
  turnkeyData,
  choosingData,
  servicesData,
  procedureData,
  whyData,
  faqHeaderData,
  ctaData,
  footNote,
} from "./data";

const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={overviewData as BentoData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <CategoryGroups data={rangeData as CategoryGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]">
      <TurnkeyBand data={turnkeyData} />
    </CategoryGroups>
    <ServicesGrid data={choosingData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <WhyMetrics data={whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <div id="start" className="scroll-mt-4">
      <ExpertRecommendations data={ctaData as ConsultationData} variant="subtitle" subtitleClass="max-w-[60ch]" />
    </div>
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
