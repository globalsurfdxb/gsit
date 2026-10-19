// Parses a CMS width class string (subtitleClass / descstyle), e.g.
// "max-w-[76ch]" or "lg:max-w-[38ch] xl:max-w-[47.5ch]", pulling ARBITRARY
// max-width tokens out into inline CSS variables read by the `.cms-maxw` rule
// in globals.css (per breakpoint).
//
// Why: Tailwind only generates classes it finds in source at build time, and
// the CMS value lives in the database. Arbitrary values typed there — above all
// decimals like max-w-[57.47ch] — never get a generated class and silently do
// nothing. Inline variables make any value work and stay responsive. Standard
// tokens (max-w-full, max-w-screen-lg, …) and non-max-width classes are left
// untouched in `rest`.

const BP_VARS: Record<string, string> = {
  base: "--mw",
  sm: "--mw-sm",
  md: "--mw-md",
  lg: "--mw-lg",
  xl: "--mw-xl",
  "2xl": "--mw-2xl",
  "3xl": "--mw-3xl",
};

export function parseMaxW(cls?: string) {
  const style: Record<string, string> = {};
  if (!cls) return { rest: "", style, hasMaxW: false };

  const rest: string[] = [];
  for (const token of cls.split(/\s+/).filter(Boolean)) {
    // Only arbitrary max-widths: optional breakpoint prefix + max-w-[value]
    const match = token.match(/^(?:(sm|md|lg|xl|2xl|3xl):)?max-w-\[(.+)\]$/);
    const varName = match && BP_VARS[match[1] ?? "base"];
    if (match && varName) {
      style[varName] = match[2].replace(/_/g, " "); // Tailwind writes spaces as _
    } else {
      rest.push(token); // standard tokens / other classes stay as-is
    }
  }

  return { rest: rest.join(" "), style, hasMaxW: Object.keys(style).length > 0 };
}
