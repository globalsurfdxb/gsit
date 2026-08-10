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
  className = "home-banner-heading",
  highlightLast = 2,
  highlight_first = false,
  titlebrake = "lg:hidden",
}: HeadingTagProps) {
  const hasCustomMarkers = /\{\{.*?\}\}/.test(text);

  if (hasCustomMarkers) {
    const parts = text.split(/(\{\{.*?\}\})/g);
    return (
      <Tag className={`${className} lg:whitespace-pre-line`}>
        {parts.map((part, i) => {
          const match = part.match(/^\{\{(.*?)\}\}$/);
          return match ? (
            <span key={i} className="text-primary">
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
  // guard: if highlightLast >= word count, treat whole string as highlighted (avoids empty normalWords + stray leading space)
  const safeHighlightCount = Math.min(highlightLast, words.length);
  const normalWords = words.slice(0, words.length - safeHighlightCount).join(" ");
  const highlightWords = words.slice(words.length - safeHighlightCount).join(" ");

  return (
    <Tag className={`${className} lg:whitespace-pre-line`}>
      {normalWords && (
        <span className={highlight_first ? "text-primary" : "text-paragraph"}>
          {normalWords}{" "}
        </span>
      )}
      {normalWords && <br className={titlebrake} />}
      <span className={highlight_first ? "text-paragraph" : "text-primary"}>
        {highlightWords}
      </span>
    </Tag>
  );
}