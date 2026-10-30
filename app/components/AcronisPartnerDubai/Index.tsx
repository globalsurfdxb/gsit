import Banner from "../AcronisAdvancedBackup/Sections/Banner";
import ProblemSolution from "../AcronisAdvancedBackup/Sections/ProblemSolution";
import Capabilities from "../AcronisAdvancedBackup/Sections/Capabilities";
import EngagementModels from "../AcronisAdvancedBackup/Sections/EngagementModels";
 import WhyGsitStats from "./Sections/WhyGsitStats";
import DataResidency from "./Sections/DataResidency"; 
import GetStarted from "../AcronisAdvancedBackup/Sections/GetStarted";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import {
  bannerData,
  problemData,
  capabilitiesData,
  modelsData, 
  faqHeaderData,
  getStartedData,whyGsitStatsData, dataResidencyData
} from "./data";

const Index = () => (
  <>
    <Banner
      bannerData={bannerData}
      descstyle="max-w-[58ch]"
      padding={"py-4  md:py-[82px] lg:py-[80px] 2xl:py-[128px] 3xl:py-[145.5px]"}
    />
    <ProblemSolution data={problemData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
    <Capabilities data={capabilitiesData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
    <EngagementModels data={modelsData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
  
<DataResidency data={dataResidencyData} variant={'defaultBorder'} subtitleClass="max-w-[76ch]" />
 
<WhyGsitStats data={whyGsitStatsData} variant={'defaultBorder'} subtitleClass="max-w-[76ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <GetStarted data={getStartedData} variant={"defaultBorder"} subtitleClass="max-w-[69ch]" />
  </>
);

export default Index;