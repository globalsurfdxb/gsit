import FeatureCard from "./FeatureCard";
import VideoCard from "./VideoCard";
 export interface fe {
   titleLine1: string; titleLine2: string; description: string; featured: boolean; pattern: boolean;
 }
   
 export interface frdata {
   tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string; 
  description?: string;
  features:fe[];
  video:{ thumbnail: string; videoUrl: string; };
   
}
  interface IconbgCardGridProps {
    rightFitData :frdata
  }
  
  export default function FeatureGrid({
    rightFitData
  }: IconbgCardGridProps) {
  const { features, video } = rightFitData;

  return (
    <section className="pt-52">
      <div className="  grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-[373px_373px_auto] gap-2 md:gap-6 2xl:gap-x-6 2xl:gap-y-7.5">
        {/* Row 1 */}
        <FeatureCard data={features[0]} className="lg:col-start-1 lg:row-start-1" />
        <FeatureCard data={features[1]} className="lg:col-start-2 lg:row-start-1" />
       <FeatureCard
        data={features[2]}
        className="col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1"
      /> 

        {/* Row 2 */}
        <FeatureCard data={features[3]} className="lg:col-start-1 lg:row-start-2" />
        <FeatureCard data={features[4]} className="lg:col-start-2 lg:row-start-2" />

        {/* Video spans rows 2–3 in column 3 */}
        <VideoCard
  thumbnail={video.thumbnail}
  videoUrl={video.videoUrl}
  className="col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:row-span-2"
/>

{/* Row 3 — spans first two columns on lg, full width on mobile */}
<FeatureCard
  data={features[5]}
  className="col-span-2 lg:col-start-1 lg:row-start-3 lg:col-span-2 2xl:!min-h-[276px]"
/>
      </div>
    </section>
  );
}
