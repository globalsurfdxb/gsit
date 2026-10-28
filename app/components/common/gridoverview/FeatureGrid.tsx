import FeatureCard from "./FeatureCard";
import VideoCard from "./VideoCard";

export interface fe {
  titleLine1: string;
  titleLine2: string;
  description: string;
  featured: boolean;
  pattern: boolean;
}

export interface frdata {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  description?: string;
  features: fe[];
  video: { thumbnail: string; videoUrl: string };
}

interface IconbgCardGridProps {
  rightFitData: frdata;
}

export default function FeatureGrid({ rightFitData }: IconbgCardGridProps) {
  const { features, video } = rightFitData;

  return (
    <section className="pt-52">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[373px_373px_auto] gap-4 md:gap-6 2xl:gap-x-6 2xl:gap-y-[31px]">
        {/* Row 1 */}
        <FeatureCard data={features[0]} className="lg:col-start-1 lg:row-start-1" />
        <FeatureCard data={features[1]} className="lg:col-start-2 lg:row-start-1" />
        <FeatureCard
          data={features[2]}
          className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1"
        />

        {/* Row 2 */}
        <FeatureCard data={features[3]} className="lg:col-start-1 lg:row-start-2" />
        <FeatureCard data={features[4]} className="lg:col-start-2 lg:row-start-2" />

        {/* Video spans rows 2–3 in column 3 on lg */}
        <VideoCard
          thumbnail={video.thumbnail}
          videoUrl={video.videoUrl}
          className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:row-span-2"
        />

        {/* Row 3 — full width on tablet, first two columns on lg */}
        <FeatureCard
          data={features[5]}
          className="md:col-span-2 lg:col-start-1 lg:row-start-3 lg:col-span-2"
        />
      </div>
    </section>
  );
}