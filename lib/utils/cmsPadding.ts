// Parses a CMS "section padding" class string (e.g.
// "pt-[332px] pb-4 md:py-[82px] 3xl:py-[152.5px]") into inline CSS variables.
//
// Why: Tailwind only generates classes it finds in source at build time, and
// the CMS value lives in the database. Arbitrary values typed there — above all
// decimals like py-[152.5px] — never get a generated class, so they silently do
// nothing. We convert every padding token (standard and arbitrary) into
// per-edge, per-breakpoint CSS variables that the `.cms-pad` rule in globals.css
// reads, so any value works and stays responsive. Non-padding classes are left
// untouched in `rest`.

const BP_SUFFIX: Record<string, string> = {
  base: "",
  sm: "-sm",
  md: "-md",
  lg: "-lg",
  xl: "-xl",
  "2xl": "-2xl",
  "3xl": "-3xl",
};

// Which edges each padding prefix controls, as CSS-var edge letters.
const EDGES: Record<string, Array<"t" | "r" | "b" | "l">> = {
  p: ["t", "r", "b", "l"],
  px: ["l", "r"],
  py: ["t", "b"],
  pt: ["t"],
  pr: ["r"],
  pb: ["b"],
  pl: ["l"],
};

// Standard Tailwind spacing step is 0.25rem per unit; arbitrary values pass
// through verbatim (Tailwind writes spaces as underscores in arbitrary values).
function toLength(raw: string): string {
  if (raw.startsWith("[") && raw.endsWith("]")) {
    return raw.slice(1, -1).replace(/_/g, " ");
  }
  const n = Number(raw);
  return Number.isNaN(n) ? raw : `${n * 0.25}rem`;
}

export function parsePadding(cls?: string) {
  const style: Record<string, string> = {};
  if (!cls) return { rest: "", style, hasPad: false };

  const rest: string[] = [];
  for (const token of cls.split(/\s+/).filter(Boolean)) {
    const match = token.match(/^(?:(sm|md|lg|xl|2xl|3xl):)?(p|px|py|pt|pr|pb|pl)-(\[.+\]|[0-9.]+)$/);
    if (!match) {
      rest.push(token); // not a padding utility — keep as a class
      continue;
    }
    const [, bp, prefix, rawValue] = match;
    const suffix = BP_SUFFIX[bp ?? "base"];
    const value = toLength(rawValue);
    for (const edge of EDGES[prefix]) {
      style[`--p${edge}${suffix}`] = value;
    }
  }

  return { rest: rest.join(" "), style, hasPad: Object.keys(style).length > 0 };
}
