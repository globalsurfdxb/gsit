interface SlaCardProps {
  value: string;
  title: string;
  description: string;
}

export default function SlaCard({ value, title, description }: SlaCardProps) {
  return (
    <div className="flex flex-col gap-[50px] md:gap-6 3xl:gap-[50px] pb-6 3xl:pb-[90px] border-b border-primary">
      <p className="text-primary text-heading !leading-[1.2] lg:!leading-[1.3045] 3xl:!leading-[1.018] font-light">
        {value}
      </p>
      <div className="flex flex-col gap-4 lg:gap-2 2xl:gap-4">
        <h3 className="text-primary text-24 lg:!text-[22px]  3xl:!text-[26px] !leading-[1.3] lg:!leading-[1.5] font-medium  ">
          {title}
        </h3>
        <p className="text-paragraph text-18 max-w-[29ch]">
          {description}
        </p>
      </div>
    </div>
  );
}