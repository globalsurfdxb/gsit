import Banner from "./Sections/Banner";
import ProblemSolution, { type ProblemSolutionData } from "./Sections/ProblemSolution";
import Capabilities, { type CapabilitiesData } from "./Sections/Capabilities";
import EngagementModels, { type ModelsData } from "./Sections/EngagementModels";
import RelatedPacks, { type RelatedData } from "./Sections/RelatedPacks";
import GetStarted, { type GetStartedData } from "./Sections/GetStarted";
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