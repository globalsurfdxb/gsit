interface SectionTagProps {
  text: string;
}

export default function SectionTag({ text }: SectionTagProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 bg-primary  " />
      <span className="text-paragraph text-18 uppercase">
        {text}
      </span>
    </div>
  );
}