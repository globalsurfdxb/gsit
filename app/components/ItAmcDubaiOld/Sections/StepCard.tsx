 
interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div
      style={{ height: "100%" }}
      className="cardmn flex w-full flex-col gap-6 lg:gap-[31px] p-4 md:p-6 rounded-2xl bg-[linear-gradient(211.76deg,#FFFFFF_-12.95%,#C9DEFD_100%)]"
    >
      <p className="text-primary text-[58px] 2xl:text-[86px] font-semibold leading-none">
        {number}
      </p>
      <div className="flex flex-col gap-4.5 lg:gap-4.5 pb-[17px] md:pb-0">
        <h3 className="text-primary text-27-medium !font-semibold">
          {title}
        </h3>
        <p className="text-paragraph text-18   max-w-[38ch]">
          {description}
        </p>
      </div>
    </div>
  );
}