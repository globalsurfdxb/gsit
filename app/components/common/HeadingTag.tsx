interface HeadingTagProps {
  text: string;
  highlightLast?: number;
  highlight_first?: boolean;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  titlebrake?: string;
}

export default function HeadingTag({
  text,
  as: Tag = "h2",
  className = "home-banner-heading ",
  highlightLast = 2,
  highlight_first = false,
  titlebrake = "lg:hidden",
}: HeadingTagProps) {
  // Support {{word}} syntax for highlighting any specific word(s)
  const hasCustomMarkers = /\{\{.*?\}\}/.test(text);

  if (hasCustomMarkers) {
    const parts = text.split(/(\{\{.*?\}\})/g);
    return (
      <Tag className={`${className} lg:whitespace-pre-line`}>
        {parts.map((part, i) => {
          const match = part.match(/^\{\{(.*?)\}\}$/);
          if (match) {
            return (
              <span key={i} className="text-primary">
                {match[1]}
              </span>
            );
          }
          return <span key={i} className="text-paragraph">{part}</span>;
        })}
      </Tag>
    );
  }

  // Existing fallback: highlight last N words
  const words = text.trim().split(" ");
  const normalWords = words.slice(0, words.length - highlightLast).join(" ");
  const highlightWords = words.slice(words.length - highlightLast).join(" ");

  return (
    <Tag className={`${className} lg:whitespace-pre-line`}>
      <span className={`${highlight_first ? "text-primary" : "text-paragraph"}`}>
        {normalWords}{" "}
      </span>
      <br className={`${titlebrake}`} />
      <span className={`${highlight_first ? "text-paragraph" : "text-primary"}`}>
        {highlightWords}
      </span>
    </Tag>
  );
}