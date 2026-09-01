import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 export interface itemkey{
        id: string;
        title: string;
        description: string;
        image: string;
 }
 export interface frdata {
 tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    items:itemkey[]
   
}
  interface IconbgCardGridProps {
    data :frdata; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
  }
  
  export default function ImageCard({  data,variant,subtitleClass}: IconbgCardGridProps) {  
  return (
    <section className="bg-white rounded-2xl py-82">
   <div className="container">
       <SectionHeader
        data={data} 
        subtitleClass={subtitleClass}
        variant={variant} 
      />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
        {data.items.map((item,i) => (
          <div key={i}>
            <div className="relative w-full aspect-[5.309/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-24 text-primary mb-0 mt-4 lg:my-4">{item.title}</h3>
            <p className="text-paragraph text-18">{item.description}</p>
          </div>
        ))}
      </div>
   </div>
    </section>
  );
}