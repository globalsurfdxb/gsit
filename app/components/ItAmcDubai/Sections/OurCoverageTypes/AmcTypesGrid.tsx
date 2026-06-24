import { sectionEightData } from "../../data";

export default function AmcTypesGrid() {
  return (
    <section className="mt-4 md:mt-52">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-10.5">
          {sectionEightData.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-4 lg:px-6 lg:pt-10 lg:pb-0  md:border-l border-primary">
              <h3 className="text-primary text-27-medium">
                {item.title}
              </h3>
              <p className="text-paragraph text-18 ">
                {item.description}
              </p>
              <span className="text-primary  border-b md:border-0 border-primary pb-5 md:pb-0 md:pt-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M6.66699 16H25.3337" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 6.66699L25.3333 16.0003L16 25.3337" stroke="#114A9F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}