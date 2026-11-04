import Banner from "../common/acronics/Banner";
import ProblemSolution, { type ProblemSolutionData } from "../common/acronics/ProblemSolution";
import Capabilities, { type CapabilitiesData } from "../common/acronics/Capabilities";
import EngagementModels, { type ModelsData } from "../common/acronics/EngagementModels";
import RelatedPacks, { type RelatedData } from "../common/acronics/RelatedPacks";
import GetStarted, { type GetStartedData } from "../common/acronics/GetStarted";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import {
  bannerData,
  problemData,
  capabilitiesData,
  modelsData,
  relatedData,
  faqHeaderData,
  getStartedData,
} from "./data";

const Index = () => (
  <>
    <Banner
      bannerData={bannerData}
      descstyle="max-w-[56ch]"
      padding={"py-4 md:py-[82px] lg:py-[80px] 2xl:py-[128px] 3xl:py-[145.5px]"}
    />
    <ProblemSolution data={problemData as ProblemSolutionData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
    <Capabilities data={capabilitiesData as CapabilitiesData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
    <EngagementModels data={modelsData as ModelsData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
    <RelatedPacks data={relatedData as RelatedData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <GetStarted data={getStartedData as GetStartedData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
  </>
);

export default Index;