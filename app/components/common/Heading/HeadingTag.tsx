interface HeadingTagProps {
  text: string;
  highlightLast?: number;
  highlight_first?: boolean;
  as?: "h1" | "h2" | "h3" | "h4";
  highlightColorClass?: string; // e.g. "text-primary", "text-red-600", "text-[#E5484D]"
}

export default function HeadingTag({
  text,
  as: Tag = "h2",
  highlightLast = 2,
  highlight_first = false,
  highlightColorClass = "text-primary",
}: HeadingTagProps) {
  const hasCustomMarkers = /\{\{.*?\}\}/.test(text);
  const hasLineBreak = text.includes("\n");
  const lineBreakClass = hasLineBreak ? " md:whitespace-pre-line" : "";

  if (hasCustomMarkers) {
    const parts = text.split(/(\{\{.*?\}\})/g);
    return (
      <Tag className={`${Tag === "h1" ? "home-banner-heading" : "text-heading"}${lineBreakClass}`}>
        {parts.map((part, i) => {
          const match = part.match(/^\{\{(.*?)\}\}$/);
          return match ? (
            <span key={i} className={highlightColorClass}>
              {match[1]}
            </span>
          ) : (
            <span key={i} className="text-paragraph">
              {part}
            </span>
          );
        })}
      </Tag>
    );
  }

  const words = text.trim().split(" ");
  const safeHighlightCount = Math.min(highlightLast, words.length);

  const normalWords = words.slice(0, words.length - safeHighlightCount).join(" ");
  const highlightWords = words.slice(words.length - safeHighlightCount).join(" ");

  return (
    <Tag className={`${Tag === "h1" ? "home-banner-heading" : "text-heading"}${lineBreakClass}`}>
      {normalWords && (
        <span className={highlight_first ? highlightColorClass : "text-paragraph"}>
          {normalWords}{" "}
        </span>
      )}

      <span className={highlight_first ? "text-paragraph" : highlightColorClass}>
        {highlightWords}
      </span>
    </Tag>
  );
}