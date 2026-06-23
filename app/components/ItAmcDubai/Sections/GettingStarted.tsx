 
import StepCard from "./StepCard";
import { gettingStartedHeaderData, stepsData } from "../data";
import SectionHeader from "../../common/SectionHeader";
export default function GettingStarted() {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
         <SectionHeader data={gettingStartedHeaderData} descriptionClass="lg:max-w-[37ch]" />
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-7.5 mt-8 lg:mt-13">
          {stepsData.map((step, i) => (
            <StepCard key={i} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}