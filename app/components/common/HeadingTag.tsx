interface HeadingTagProps {
  text: string; 
     highlightLast?: number;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string; 
}

export default function HeadingTag({
  text,
  as: Tag = "h2",
  className = "home-banner-heading",
  highlightLast = 2, 
}: HeadingTagProps) {
  const words = text.trim().split(" ");
  const normalWords = words.slice(0, words.length - highlightLast).join(" ");
  const highlightWords = words.slice(words.length - highlightLast).join(" ");

  return (
    <Tag className={`${className} lg:whitespace-pre-line`}>
      <span className="text-paragraph">{normalWords} </span><br className="lg:hidden"/>
      <span className="text-primary">{highlightWords}</span>
    </Tag>
  );
}