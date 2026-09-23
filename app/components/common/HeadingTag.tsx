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

  // Split into alternating [word, whitespace, word, whitespace, ...] segments
  // (capturing group keeps the whitespace, including any literal line break
  // the author typed) instead of collapsing straight to `.split(" ")`. Word
  // count is taken only from the word segments, so an embedded "\n" no
  // longer glues two words into one token and throws highlightLast off —
  // while the newline itself stays exactly where it was written, in
  // whichever half it lands in, since we rejoin with "" rather than " ".
  const segments = text.trim().split(/(\s+)/);
  const wordSegmentIndices = segments
    .map((segment, i) => (i % 2 === 0 && segment !== "" ? i : -1))
    .filter((i) => i !== -1);
  const totalWords = wordSegmentIndices.length;
  const safeHighlightCount = Math.min(highlightLast, totalWords);
  const splitSegmentIndex =
    safeHighlightCount === 0
      ? segments.length
      : wordSegmentIndices[totalWords - safeHighlightCount];
  const normalWords = segments.slice(0, splitSegmentIndex).join("");
  const highlightWords = segments.slice(splitSegmentIndex).join("");

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