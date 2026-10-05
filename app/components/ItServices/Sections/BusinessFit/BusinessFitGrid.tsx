import BusinessFitItem from "./BusinessFitItem";

export interface FitItem {
  description: string;
  type?: "check" | "alert";
}

export interface FitColumn {
  title: string;
  items: FitItem[];
}

interface BusinessFitGridProps {
  columns: FitColumn[];
}

export default function BusinessFitGrid({ columns }: BusinessFitGridProps) {
  return (
    <section className=" ">
      <div className="bg-bgF5F9FC p-2 md:p-4 lg:p-6 rounded-2xl mt-4  lg:mt-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7.5">
          {columns.map((column, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 lg:p-6">
              <h2 className="text-primary text-32 font-medium  3xl:mb-2 p-2 lg:p-4 ">
                {column.title}
              </h2>
              <div className="flex flex-col lg:ps-6">
                {column.items.map((item, j) => (
                  <BusinessFitItem key={j} description={item.description} type={item.type ?? "check"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
