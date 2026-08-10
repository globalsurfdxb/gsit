
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 


       interface BlogCard {
   tag: string;
    heading: string;
    highlightLast: number;
    desc: string;
    cta: string;
} 
interface BlogCardProps {
  data: BlogCard; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function Overview({ data,variant}: BlogCardProps) { 
  
 
  return (
    <section className="bg-white py-82  rounded-2xl">
      <div className="container ">
        <div className="   grid grid-cols-1 xl:grid-cols-[350px_auto]  xl:grid-cols-[450px_auto] 2xl:grid-cols-[550px_auto] 3xl:grid-cols-[auto_809px] gap-3 lg:gap-2 2xl:gap-10.5 items-center">
        {/* Left: Heading + CTA */} 
            <div className="flex flex-col gap-6 2xl:gap-10.5">
              
               <SectionHeader data={data}  variant={variant}    /> 
            
            </div> 
        {/* Right: Issues checklist */}
         <div>
          <div className="text-18 text-paragraph flex flex-col gap-4 2xl:gap-6" dangerouslySetInnerHTML={{ __html: data.desc }}></div>
          <p className="text-18 text-primary mt-6 2xl:mt-52">{data.cta}</p>
          </div>
      </div>
    </div>
    </section>
  );
}