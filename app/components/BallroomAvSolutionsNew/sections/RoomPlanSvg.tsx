interface Props {
  /** index of the active tab in data.segments */
  active: number;
}

type Wall = 0 | 1; // 0 = closed, 1 = open

// [A|B, B|C], same order as the tabs:
// Three Separate Events, A & B Combined, A Alone / B & C Combined, Full Ballroom
const WALLS: Wall[][] = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
];

// Plan geometry (SVG units)
const X0 = 20;
const Y0 = 20;
const W = 560;
const H = 300;
const SW = W / 3;
const LETTERS = ["A", "B", "C"];
const ZONE_COLORS = ["#114A9F", "#4C8BE8", "#7FB0F0"];
const NAVY = "#132250";

// Sections joined by an open wall share a zone
function zonesFor(walls: Wall[]) {
  const z = [0];
  for (let s = 1; s < 3; s++) z.push(walls[s - 1] ? z[s - 1]! : z[s - 1]! + 1);
  return z;
}

export default function RoomPlanSvg({ active }: Props) {
  const walls = WALLS[active] ?? WALLS[0]!;
  const zones = zonesFor(walls);

  return (
    <svg
      viewBox="0 0 600 340"
      role="img"
      aria-label="Top-down ballroom plan with three divisible sections"
      className="h-auto w-full"
    >
      <rect x={X0} y={Y0} width={W} height={H} rx={10} fill="#fff" stroke="#C9C9C9" />

      {LETTERS.map((letter, i) => {
        const c = ZONE_COLORS[zones[i] ?? 0] ?? ZONE_COLORS[0]!;
        const x = X0 + i * SW;
        const lead = i === 0 || !walls[i - 1]; // first section of its zone owns the live panel

        return (
          <g key={letter} className="[&_*]:transition-[fill,opacity] [&_*]:duration-500">
            <rect x={x + 6} y={Y0 + 6} width={SW - 12} height={H - 12} rx={6} fill={c} fillOpacity={0.09} />

            {/* Speakers */}
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((k) => {
                const cx = x + (SW * (k + 1)) / 4;
                const cy = Y0 + 50 + r * 80;
                return (
                  <g key={`${r}-${k}`}>
                    <circle cx={cx} cy={cy} r={22} fill={c} fillOpacity={0.12} />
                    <circle cx={cx} cy={cy} r={5} fill={c} />
                  </g>
                );
              })
            )}

            {/* Tables */}
            {[0, 1].map((r) =>
              [0, 1].map((k) => (
                <circle
                  key={`t${r}-${k}`}
                  cx={x + (SW * (k + 1)) / 3}
                  cy={Y0 + 90 + r * 80}
                  r={13}
                  fill="#E9E2D8"
                  stroke="#cbbfae"
                />
              ))
            )}

            <text x={x + SW / 2} y={Y0 + H - 16} textAnchor="middle" fontSize={13} fontWeight={500} fill="#525252">
              Section {letter}
            </text>

            {/* Screen and control panel */}
            <rect x={x + SW / 2 - 40} y={Y0 - 2} width={80} height={7} rx={2} fill={NAVY} />
            <rect x={x + 12} y={Y0 + H - 26} width={12} height={14} rx={2} fill={lead ? NAVY : "#9AA3B5"} />
          </g>
        );
      })}

      {/* Air walls */}
      {[0, 1].map((j) => {
        const x = X0 + (j + 1) * SW;
        const open = walls[j] === 1;
        return (
          <g key={j}>
            {open ? (
              <>
                <line x1={x} y1={Y0 + 4} x2={x} y2={Y0 + H - 4} stroke="#8A8A8A" strokeWidth={2} strokeDasharray="3 9" strokeOpacity={0.5} />
                <rect x={x - 5} y={Y0 + 4} width={10} height={22} rx={2} fill="#8A8A8A" />
              </>
            ) : (
              <line x1={x} y1={Y0 + 4} x2={x} y2={Y0 + H - 4} stroke="#6B6B6B" strokeWidth={5} strokeDasharray="14 4" />
            )}
          </g>
        );
      })}
    </svg>
  );
}