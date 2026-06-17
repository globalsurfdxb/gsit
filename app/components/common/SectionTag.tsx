interface SectionTagProps {
  text: string;
}

export default function SectionTag({ text }: SectionTagProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 bg-primary  " />
      <span className="text-paragraph text-[12px] leading-[2.167] md:leading-[1.6255] lg:leading-[1.625] 3xl:leading-[1.445] md:text-18 uppercase">
        {text}
      </span>
    </div>
  );
}