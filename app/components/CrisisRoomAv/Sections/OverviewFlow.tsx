import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface OverviewFlowData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  paragraphs: string[];
  verbs: { title: string; text: string }[];
  flow: {
    title: string;
    label: string;
    sources: string[]; // six inputs drawn down the left of the diagram
    outputs: { wall: string; operator: string; vc: string; vcSub: string[] };
    network: string[];
  };
}

interface Props {
  data: OverviewFlowData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Curves from each source box into the processor block
const SOURCE_PATHS = [
  "M166 58 C200 58 205 160 232 180",
  "M166 110 C200 110 205 170 232 184",
  "M166 162 C200 162 210 185 232 188",
  "M166 214 C200 214 210 195 232 192",
  "M166 266 C200 266 205 205 232 196",
  "M166 318 C200 318 205 215 232 200",
];

export default function OverviewFlow({ data, variant, subtitleClass }: Props) {
  const { flow } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid items-start gap-12 lg:grid-cols-[1fr_1.35fr]">
          <div>
            {data.paragraphs.map((p) => (
              <p key={p} className="mb-[18px] text-18 text-paragraph">
                {p}
              </p>
            ))}
            <div className="mt-3">
              {data.verbs.map((v) => (
                <div key={v.title} className="grid gap-1 border-t border-[#D3D3D3] py-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                  <b className="text-[20px] font-medium tracking-[-0.03em] text-primary">{v.title}</b>
                  <span className="text-[17px] text-paragraph">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-[#F6F4F2] p-6">
            <div className="mb-2.5 flex justify-between text-[14px] uppercase tracking-[0.06em] text-paragraph">
              <span>{flow.title}</span>
              <span>{flow.label}</span>
            </div>
            <svg
              viewBox="0 0 600 380"
              role="img"
              aria-label={`Signal flow: ${flow.sources.join(", ")} feed a video wall processor and control system, which drive the ${flow.outputs.wall.toLowerCase()}, ${flow.outputs.operator.toLowerCase()} and ${flow.outputs.vc.toLowerCase()}.`}
              className="block h-auto w-full min-w-[560px]"
              fontSize={13}
            >
              <text x={16} y={24} fill="#525252" fontSize={11} letterSpacing=".8">SOURCES</text>
              {flow.sources.map((s, i) => (
                <g key={s}>
                  <rect x={16} y={38 + i * 52} width={150} height={40} rx={8} fill="#fff" stroke="#D3D3D3" />
                  <text x={32} y={63 + i * 52} fill="#132250">{s}</text>
                </g>
              ))}
              <g stroke="#4C8BE8" strokeWidth={1.5} fill="none" strokeDasharray="4 4">
                {SOURCE_PATHS.map((d) => (
                  <path key={d} d={d} />
                ))}
              </g>

              <text x={236} y={24} fill="#525252" fontSize={11} letterSpacing=".8">PROCESS &amp; CONTROL</text>
              <rect x={232} y={128} width={136} height={124} rx={10} fill="#114A9F" />
              <text x={300} y={168} fill="#fff" textAnchor="middle" fontSize={14}>Video wall</text>
              <text x={300} y={186} fill="#fff" textAnchor="middle" fontSize={14}>processor</text>
              <line x1={252} y1={202} x2={348} y2={202} stroke="rgba(255,255,255,.3)" />
              <text x={300} y={224} fill="#fff" textAnchor="middle">+ touch panel</text>
              <text x={300} y={240} fill="#fff" textAnchor="middle">control</text>
              <g stroke="#114A9F" strokeWidth={1.6} fill="none">
                <path d="M368 170 C400 170 400 78 430 78" />
                <path d="M368 190 L430 190" />
                <path d="M368 210 C400 210 400 300 430 300" />
              </g>

              <text x={434} y={24} fill="#525252" fontSize={11} letterSpacing=".8">OUTPUTS</text>
              <rect x={430} y={40} width={154} height={76} rx={8} fill="#EEF5FF" stroke="#D6E4FA" />
              <g fill="#114A9F" fillOpacity={0.35}>
                <rect x={442} y={52} width={62} height={40} rx={2} />
                <rect x={508} y={52} width={30} height={19} rx={2} />
                <rect x={542} y={52} width={30} height={19} rx={2} />
                <rect x={508} y={73} width={30} height={19} rx={2} />
                <rect x={542} y={73} width={30} height={19} rx={2} />
              </g>
              <text x={442} y={108} fill="#114A9F">{flow.outputs.wall}</text>
              <rect x={430} y={168} width={154} height={44} rx={8} fill="#EEF5FF" stroke="#D6E4FA" />
              <text x={446} y={195} fill="#114A9F">{flow.outputs.operator}</text>
              <rect x={430} y={264} width={154} height={74} rx={8} fill="#EEF5FF" stroke="#D6E4FA" />
              <text x={446} y={292} fill="#114A9F">{flow.outputs.vc}</text>
              {flow.outputs.vcSub.map((t, i) => (
                <text key={t} x={446} y={312 + i * 16} fill="#525252" fontSize={12}>{t}</text>
              ))}

              {flow.network.map((t, i) => (
                <text key={t} x={300} y={300 + i * 16} fill="#525252" textAnchor="middle" fontSize={12}>{t}</text>
              ))}
              <path d="M240 280 H360" stroke="#D3D3D3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
