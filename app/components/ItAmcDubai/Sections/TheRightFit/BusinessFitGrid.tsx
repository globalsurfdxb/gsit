 
import BusinessFitItem from "./BusinessFitItem";
import { businessFitData } from "../../data";

export default function BusinessFitGrid() {
  return (
    <section className=" ">
      <div className="bg-bgF5F9FC p-2 md:p-4 lg:p-6 rounded-2xl mt-4  lg:mt-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7.5">

        {/* Business Fit */}
        <div className="flex flex-col gap-[24px] lg:gap-[32px] bg-white rounded-2xl p-4 lg:p-6">
          <h2 className="text-primary text-24 leading-[1.5] font-medium p-2 lg:p-4 ">
            {businessFitData.business.title}
          </h2>
          <div className="flex flex-col lg:px-6">
            {businessFitData.business.items.map((item, i) => (
              <BusinessFitItem key={i} {...item} type="check" />
            ))}
          </div>
        </div>

        {/* Operational Challenges */}
        <div className="flex flex-col gap-[24px] lg:gap-[32px] bg-white rounded-2xl p-4 lg:p-6">
          <h2 className="text-primary text-32 font-medium  p-2 lg:p-4">
            {businessFitData.challenges.title}
          </h2>
          <div className="flex flex-col lg:px-6">
            {businessFitData.challenges.items.map((item, i) => (
              <BusinessFitItem key={i} {...item} type="alert" />
            ))}
          </div>
        </div>

      </div>

      </div>
      {/* Note */}
      <div className="bg-primary rounded-[16px] p-4 md:p-6 mt-4 lg:mt-8">
        <h3 className="text-white text-24-medium mb-4 tracking-[-3%]">
          {businessFitData.note.title}
        </h3>
        <p className="text-white text-18  ">
          {businessFitData.note.description}
        </p>
      </div>
    </section>
  );
}