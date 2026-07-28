import Image from "next/image";
import SectionHeader from "@/app/components/common/SectionHeader";
import { technicalComponents, technicalComponentsData } from "../data";

export default function TechnicalComponents() {
  return (
    <section className="bg-white rounded-2xl py-82">
   <div className="container">
       <SectionHeader
        data={technicalComponentsData} 
        subtitle={true}
        titlebrake="hidden"
        subtitleClass="max-w-[129ch]"
        headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
      />

      <div className="mt-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {technicalComponents.map((item) => (
          <div key={item.id}>
            <div className="relative w-full aspect-[5.3/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-24 text-primary my-4">{item.title}</h3>
            <p className="text-paragraph text-18">{item.description}</p>
          </div>
        ))}
      </div>
   </div>
    </section>
  );
}