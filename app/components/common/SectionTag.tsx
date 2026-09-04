interface SectionTagProps {
  text: string;
}

export default function SectionTag({ text }: SectionTagProps) {
  return (
    <div className="flex  gap-2">
      <span className="min-w-2.5 min-h-2.5 w-2.5 h-2.5 bg-primary relative top-2 darkbg" />
      <span className="text-paragraph text-[12px] leading-[2.167] md:leading-[1.6255] lg:leading-[1.625] 3xl:leading-[1.445] md:text-18 uppercase">
        {text}
      </span>
    </div>
  );
}