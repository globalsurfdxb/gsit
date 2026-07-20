 
import BusinessFitItem from "./BusinessFitItem";
import { businessFitData } from "../../data";

export default function BusinessFitGrid() {
  return (
    <section className=" ">
      <div className="bg-bgF5F9FC p-2 md:p-4 lg:p-6 rounded-2xl mt-4  lg:mt-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7.5">

        {/* Business Fit */}
        <div className="bg-white rounded-2xl p-4 lg:p-6">
          <h2 className="text-primary text-32px font-medium  3xl:mb-2 p-2 lg:p-4 ">
            {businessFitData.business.title}
          </h2>
          <div className="flex flex-col lg:ps-6">
            {businessFitData.business.items.map((item, i) => (
              <BusinessFitItem key={i} {...item} type="check" />
            ))}
          </div>
        </div>

        {/* Operational Challenges */}
        <div className="bg-white rounded-2xl p-4 lg:p-6">
          <h2 className="text-primary text-32px font-medium  3xl:mb-2 p-2 lg:p-4">
            {businessFitData.challenges.title}
          </h2>
          <div className="flex flex-col lg:ps-6">
            {businessFitData.challenges.items.map((item, i) => (
              <BusinessFitItem key={i} {...item} type="check" />
            ))}
          </div>
        </div>

      </div>

      </div> 
    </section>
  );
}