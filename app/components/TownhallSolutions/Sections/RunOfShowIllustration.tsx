"use client";

// Isometric townhall room, drawn once into an <svg> and then re-coloured per
// segment (which mics/cameras are live, what the LED wall shows). Ported from
// the design's vanilla JS so the geometry stays identical.

import { useEffect, useRef } from "react";
import styles from "./RunOfShow.module.css";

export interface RunOfShowSegment {
  label: string;
  mode: string;
  on: string[];
  cam: "rear" | "side";
  tgt: [number, number, number];
  led: [string, string];
  aud: string;
  mic: string;
  camT: string;
  str: string;
  hint: string;
  fit: string;
}

type Pt = [number, number];
type Attrs = Record<string, string | number>;
type MicPair = [SVGElement, SVGElement]; // [pulse ring, dot]

interface Refs {
  touchT: SVGElement;
  ledT1: SVGElement;
  ledT2: SVGElement;
  lec: MicPair;
  panel: MicPair[];
  aisle: MicPair[];
  conf: SVGElement;
  desk: SVGElement;
  rear: SVGElement;
  side: SVGElement;
  cone: SVGElement;
  spk: SVGElement[];
  call: Record<string, SVGElement>;
}

const NS = "http://www.w3.org/2000/svg";
const F = "DM Sans, Arial, sans-serif";
const OX = 575, OY = 230, AX = 22.5, AY = 13, AZ = 26;
const P = (x: number, y: number, z = 0): Pt => [OX + (x - y) * AX, OY + (x + y) * AY - z * AZ];
const pts = (a: Pt[]) => a.map((p) => p.join(",")).join(" ");

const C = {
  floor: "#E6EEF8", floorLn: "#D6E2F1", wallL: "#D7E5F6", wallB: "#C8DAF1", cap: "#2F8FC9", capS: "#1F6FA6",
  stageT: "#F4F7FB", stageF: "#C9D6E8", stageR: "#B6C6DE", chairT: "#7FAAD6", chairF: "#5E8FC4", chairR: "#4C7DB3",
  navy: "#132250", off: "#B8BFCC", P: "#114A9F", cam: "#4C8BE8",
};
const tones = ["#3E5C86", "#6C7A8C", "#2B3A55", "#8A6F5A", "#4F6E5B", "#7A5C7E", "#5B6B7F", "#A0846A"];
const skins = ["#C89F7E", "#A97C5A", "#E2B994", "#8C6447", "#D6A985"];

const IC: Record<string, string> = {
  lec: "M9 3h6v11a3 3 0 0 1-6 0zM5 11a7 7 0 0 0 14 0M12 18v3",
  led: "M3 4h18v12H3zM8 20h8M12 16v4",
  panel: "M4 18v-4h16v4M7 14V9a5 5 0 0 1 10 0v5",
  conf: "M3 6h18v10H3zM12 16v4M7 20h10",
  desk: "M3 5h18v11H3zM10 9l5 3-5 3z",
  spk: "M11 5L6 9H3v6h3l5 4zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13",
  side: "M15 10l5-3v10l-5-3zM3 6h12v12H3z",
  rear: "M15 10l5-3v10l-5-3zM3 6h12v12H3z",
  touch: "M5 3h14v18H5zM9 7h6M9 11h6M9 15h3",
  aisle: "M9 3h6v11a3 3 0 0 1-6 0zM12 18v3M8 21h8",
};

const CALLOUTS: [string, string, number, number, Pt, "l" | "r"][] = [
  ["lec", "Lectern mic", 300, 46, P(4.9, 1.2, 2.45), "l"],
  ["led", "LED video wall", 960, 46, P(12, 0, 5.2), "r"],
  ["panel", "Panel mics", 1050, 250, P(14.6, 2.4, 1.85), "r"],
  ["conf", "Confidence monitor", 1050, 375, P(10.4, 3.7, 1.1), "r"],
  ["desk", "Stream & control desk", 1050, 600, P(17.1, 14.9, 1.5), "r"],
  ["spk", "Ceiling speakers", 36, 170, P(4, 6, 6.1), "l"],
  ["side", "Side PTZ camera", 36, 300, P(0.9, 8.3, 5.6), "l"],
  ["touch", "Touch panel", 36, 430, P(0, 14.9, 2.7), "l"],
  ["aisle", "Aisle Q&A mics", 36, 545, P(10.1, 8.6, 2.3), "l"],
  ["rear", "Rear PTZ camera", 36, 660, P(10, 15.3, 2.9), "l"],
];

function el(parent: Element, tag: string, attrs: Attrs = {}): SVGElement {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  parent.appendChild(e);
  return e;
}

function box(g: Element, x: number, y: number, z: number, w: number, d: number, h: number, t: string, f: string, r: string) {
  el(g, "polygon", { points: pts([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)]), fill: t });
  el(g, "polygon", { points: pts([P(x, y + d, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x, y + d, z + h)]), fill: f });
  el(g, "polygon", { points: pts([P(x + w, y, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x + w, y, z + h)]), fill: r });
}

// Wall-plane transforms: back wall (y=0) and left wall (x=0); local u along wall, v downward
const backM = (x: number, z: number) => { const [e, f] = P(x, 0, z); return `matrix(${AX},${AY},0,${AZ},${e},${f})`; };
const leftM = (y: number, z: number) => { const [e, f] = P(0, y, z); return `matrix(${AX},${-AY},0,${AZ},${e},${f})`; };

function person(g: Element, x: number, y: number, z: number, col: string, head = "#C89F7E") {
  const [bx, by] = P(x, y, z);
  el(g, "rect", { x: bx - 6, y: by - 17, width: 12, height: 17, rx: 5, fill: col });
  el(g, "circle", { cx: bx, cy: by - 22, r: 5.5, fill: head });
}

function micPair(g: Element, cx: number, cy: number, r = 3.5): MicPair {
  const ring = el(g, "circle", { cx, cy, r: 10, fill: C.P, "fill-opacity": 0, class: styles.pulse });
  const dot = el(g, "circle", { cx, cy, r, fill: C.off });
  return [ring, dot];
}

function drawScene(svg: SVGSVGElement): Refs {
  svg.innerHTML = "";
  const defs = el(svg, "defs");
  const lg = el(defs, "linearGradient", { id: "rosLedG", x1: 0, y1: 0, x2: 1, y2: 1 });
  el(lg, "stop", { offset: 0, "stop-color": "#1A3FA0" });
  el(lg, "stop", { offset: 1, "stop-color": "#4C8BE8" });
  const wg = el(defs, "linearGradient", { id: "rosWinG", x1: 0, y1: 0, x2: 0, y2: 1 });
  el(wg, "stop", { offset: 0, "stop-color": "#BFE3FA" });
  el(wg, "stop", { offset: 1, "stop-color": "#7CC4EE" });

  el(svg, "ellipse", { cx: 620, cy: 470, rx: 560, ry: 250, fill: "#EEF5FF" });
  const room = el(svg, "g");

  // Floor, walls and wall caps
  el(room, "polygon", { points: pts([P(0, 0), P(20, 0), P(20, 16), P(0, 16)]), fill: C.floor });
  for (let i = 2; i < 16; i += 2) {
    el(room, "line", { x1: P(0, i)[0], y1: P(0, i)[1], x2: P(20, i)[0], y2: P(20, i)[1], stroke: C.floorLn, "stroke-width": 1 });
  }
  el(room, "polygon", { points: pts([P(0, 0, 0), P(0, 16, 0), P(0, 16, 7), P(0, 0, 7)]), fill: C.wallL });
  el(room, "polygon", { points: pts([P(0, 0, 0), P(20, 0, 0), P(20, 0, 7), P(0, 0, 7)]), fill: C.wallB });
  el(room, "polygon", { points: pts([P(0, 0, 7), P(0, 16, 7), P(-0.5, 16.5, 7), P(-0.5, -0.5, 7)]), fill: C.capS });
  el(room, "polygon", { points: pts([P(0, 0, 7), P(20, 0, 7), P(20.5, -0.5, 7), P(-0.5, -0.5, 7)]), fill: C.cap });
  el(room, "polygon", { points: pts([P(0, 16, 0), P(0, 16, 7), P(-0.5, 16.5, 7), P(-0.5, 16.5, 0)]), fill: "#9EBBDD" });
  el(room, "polygon", { points: pts([P(20, 0, 0), P(20, 0, 7), P(20.5, -0.5, 7), P(20.5, -0.5, 0)]), fill: "#B0C8E6" });

  // Windows on the left wall
  [[3, 7], [9.6, 13.2]].forEach(([a, b]) => {
    const g = el(room, "g", { transform: leftM(b, 5.8) });
    el(g, "rect", { x: 0, y: 0, width: b - a, height: 4, fill: "url(#rosWinG)" });
    for (let u = 0; u <= b - a; u += (b - a) / 3) el(g, "rect", { x: u - 0.06, y: 0, width: 0.12, height: 4, fill: "#fff" });
    el(g, "rect", { x: 0, y: -0.15, width: b - a, height: 0.3, fill: "#fff" });
    el(g, "rect", { x: 0, y: 3.85, width: b - a, height: 0.3, fill: "#fff" });
    el(g, "path", { d: "M0.4 3.6 L1.6 0.8 M1.2 3.6 L2.4 0.8", stroke: "#E6F5FF", "stroke-width": 0.12, fill: "none" });
  });

  // Touch panel on the left wall
  const tp = el(room, "g", { transform: leftM(15.5, 3.1) });
  el(tp, "rect", { x: 0, y: 0, width: 1.1, height: 0.8, rx: 0.08, fill: C.navy });
  el(tp, "rect", { x: 0.08, y: 0.08, width: 0.94, height: 0.64, rx: 0.05, fill: "#4C8BE8" });
  const touchT = el(tp, "text", { x: 0.55, y: 0.5, "text-anchor": "middle", "font-size": 0.24, "font-weight": 700, fill: "#fff", "font-family": F });

  // LED wall on the back wall
  const lw = el(room, "g", { transform: backM(5.5, 5.8) });
  el(lw, "rect", { x: -0.15, y: -0.15, width: 9.3, height: 4.1, rx: 0.1, fill: C.navy });
  el(lw, "rect", { x: 0, y: 0, width: 9, height: 3.8, fill: "url(#rosLedG)" });
  el(lw, "circle", { cx: 7.2, cy: 1.5, r: 2.1, fill: "#fff", "fill-opacity": 0.08 });
  const ledT1 = el(lw, "text", { x: 0.6, y: 1.7, "font-size": 0.85, "font-weight": 500, fill: "#fff", "font-family": F });
  const ledT2 = el(lw, "text", { x: 0.6, y: 2.6, "font-size": 0.45, fill: "#DCE8F8", "font-family": F });
  el(lw, "rect", { x: 0.6, y: 3.0, width: 2.2, height: 0.12, rx: 0.06, fill: "#7FB0F0" });

  // Side camera bracket
  {
    const [x, y] = P(0, 8.3, 5.6), [x2, y2] = P(0.8, 8.3, 5.6);
    el(room, "line", { x1: x, y1: y, x2, y2, stroke: "#6B7A90", "stroke-width": 3 });
  }

  // Stage
  box(room, 2, 0, 0, 16, 4.4, 0.5, C.stageT, C.stageF, C.stageR);

  // Depth-sorted items
  const items: { d: number; fn: (g: Element) => void }[] = [];
  const add = (d: number, fn: (g: Element) => void) => items.push({ d, fn });
  const r = {} as Refs;
  r.panel = [];
  r.aisle = [];

  add(2.8, (g) => person(g, 4.9, 1.0, 0.5, "#1F2E4E", "#C89F7E"));
  add(5.8, (g) => {
    box(g, 4.2, 1.5, 0.5, 1.1, 0.8, 1.5, "#FFFFFF", "#E3E9F2", "#D2DAE6");
    const [a, b] = P(4.75, 1.5, 2.0), [c, d] = P(4.9, 1.2, 2.45);
    el(g, "line", { x1: a, y1: b, x2: c, y2: d, stroke: "#2B2B2B", "stroke-width": 1.5 });
    r.lec = micPair(g, c, d);
  });
  [11.6, 13.1, 14.6].forEach((x, i) =>
    add(x + 1.8, (g) => {
      box(g, x, 1.6, 0.5, 0.9, 0.9, 0.5, "#F1C9A5", "#D9A982", "#C9966F");
      person(g, x + 0.45, 2.05, 1.0, tones[i + 1], skins[i]);
      const [mx, my] = P(x + 0.45, 2.4, 1.85);
      r.panel.push(micPair(g, mx, my));
    })
  );
  add(13.6, (g) => {
    box(g, 9.3, 3.5, 0.5, 1.5, 0.6, 0.15, "#2B3A55", "#1C2740", "#141C30");
    const quad = [P(9.3, 3.8, 0.65), P(10.8, 3.8, 0.65), P(10.8, 3.6, 1.25), P(9.3, 3.6, 1.25)];
    r.conf = el(g, "polygon", { points: pts(quad), fill: "#3A4660" });
  });
  add(19.8, (g) => {
    box(g, 18.6, 0.6, 0, 0.8, 0.8, 0.8, "#FFFFFF", "#E3E9F2", "#D2DAE6");
    const [x, y] = P(19, 1, 1.0);
    [[-14, -34], [0, -42], [14, -34], [-8, -24], [9, -26]].forEach(([dx, dy]) =>
      el(g, "ellipse", { cx: x + dx / 2, cy: y + dy / 2, rx: 6, ry: 13, fill: "#3F8E5C", transform: `rotate(${dx * 2} ${x + dx / 2} ${y + dy / 2})` })
    );
  });

  // Audience
  let n = 0;
  for (let row = 0; row < 6; row++) {
    const y = 6.6 + row * 1.45;
    [2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 11.4, 12.5, 13.6, 14.7, 15.8, 16.9].forEach((x) => {
      const k = n++;
      const seated = (k * 7) % 11 > 2;
      add(x + y + 0.5, (g) => {
        box(g, x, y, 0, 0.75, 0.75, 0.45, C.chairT, C.chairF, C.chairR);
        if (seated) person(g, x + 0.38, y + 0.38, 0.45, tones[k % tones.length], skins[k % skins.length]);
        box(g, x, y + 0.68, 0.45, 0.75, 0.12, 0.75, C.chairT, C.chairF, C.chairR);
      });
    });
  }

  // Aisle mics
  [[10.1, 8.6], [10.1, 12.9]].forEach(([x, y]) =>
    add(x + y, (g) => {
      const [a, b] = P(x, y, 0), [c, d] = P(x, y, 2.3);
      el(g, "ellipse", { cx: a, cy: b, rx: 9, ry: 5, fill: "#4A4A4A" });
      el(g, "line", { x1: a, y1: b, x2: c, y2: d, stroke: "#4A4A4A", "stroke-width": 2 });
      r.aisle.push(micPair(g, c, d, 4));
    })
  );

  // Control desk
  add(31, (g) => {
    box(g, 14.6, 14.4, 0, 3.4, 1.2, 1.3, "#FFFFFF", "#DCE3EE", "#C9D3E2");
    const [a, b] = P(15.6, 14.7, 1.3);
    el(g, "rect", { x: a - 14, y: b - 20, width: 28, height: 18, rx: 2, fill: C.navy });
    r.desk = el(g, "rect", { x: a - 12, y: b - 18, width: 24, height: 14, rx: 1, fill: C.off });
    box(g, 16.6, 14.6, 1.3, 1.1, 0.7, 0.25, "#2B3A55", "#1C2740", "#141C30");
    person(g, 16.3, 15.9, 0.4, "#2B3A55", "#A97C5A");
  });

  // Rear tripod camera
  add(25.5, (g) => {
    const [t1, t2] = P(10, 15.3, 2.6);
    [[-0.5, 0.3], [0.5, 0.3], [0, -0.5]].forEach(([dx, dy]) => {
      const [a, b] = P(10 + dx, 15.3 + dy, 0);
      el(g, "line", { x1: a, y1: b, x2: t1, y2: t2, stroke: "#3D3D3D", "stroke-width": 2 });
    });
    r.rear = el(g, "g");
  });

  items.sort((a, b) => a.d - b.d).forEach((it) => it.fn(el(room, "g")));

  // Ceiling pendant speakers, drawn last so they sit above the room
  r.spk = [];
  [[4, 6], [10, 6], [16, 6], [4, 11.5], [10, 11.5], [16, 11.5]].forEach(([x, y]) => {
    const [a, b] = P(x, y, 7), [c, d] = P(x, y, 6.1);
    el(room, "line", { x1: a, y1: b, x2: c, y2: d, stroke: "#132250", "stroke-width": 1.5 });
    el(room, "ellipse", { cx: c, cy: d, rx: 9, ry: 5, fill: "#fff", stroke: "#9AA3B5" });
    const w = el(room, "g", { class: styles.waves });
    [14, 22].forEach((rr) =>
      el(w, "path", { d: `M${c - rr} ${d + 6} Q${c} ${d + 6 + rr * 0.7} ${c + rr} ${d + 6}`, fill: "none", stroke: C.P, "stroke-width": 1.6, "stroke-opacity": 0.55 })
    );
    r.spk.push(w);
  });

  r.side = el(room, "g");
  r.cone = el(room, "polygon", { fill: C.cam, "fill-opacity": 0.13, stroke: C.cam, "stroke-opacity": 0.55, "stroke-dasharray": "5 5" });

  // Labelled callouts
  r.call = {};
  const cg = el(svg, "g");
  CALLOUTS.forEach(([k, label, lx, ly, [ax, ay], side]) => {
    const g = el(cg, "g", { class: styles.co });
    const sx = side === "l" ? lx + 190 : lx - 12, sy = ly;
    const top = ly < 100;
    const ex = top ? lx + 75 : sx, ey = top ? ly + 30 : sy;
    const mx = (ex + ax) / 2;
    el(g, "path", {
      d: `M${ex} ${ey} C${top ? ex : mx} ${top ? (ey + ay) / 2 : ey} ${top ? ax : mx} ${top ? (ey + ay) / 2 : ay} ${ax} ${ay}`,
      fill: "none", stroke: "#C0392B", "stroke-width": 1.6, "stroke-dasharray": "2 5", "stroke-linecap": "round", class: styles.coLine,
    });
    el(g, "circle", { cx: ax, cy: ay, r: 3.5, fill: "#C0392B", class: styles.coLine });
    const ig = el(g, "g", { transform: `translate(${lx},${ly - 17})` });
    el(ig, "rect", { x: 0, y: 0, width: 34, height: 34, rx: 8, class: styles.coIc });
    el(ig, "path", { d: IC[k], transform: "translate(5,5)", fill: "none", "stroke-width": 1.6, "stroke-linecap": "round", "stroke-linejoin": "round", class: styles.coGlyph });
    const t = el(g, "text", { x: lx + 44, y: ly + 5, "font-size": 16, "font-weight": 500, "font-family": F, class: styles.coT });
    t.textContent = label;
    r.call[k] = g;
  });

  return { ...r, touchT, ledT1, ledT2 };
}

function drawCamera(g: SVGElement, x: number, y: number, z: number, on: boolean) {
  g.innerHTML = "";
  box(g, x - 0.35, y - 0.3, z, 0.7, 0.6, 0.55, on ? "#7FB0F0" : "#D3D8E2", on ? C.cam : C.off, on ? "#2F6FCC" : "#9AA3B5");
  if (!on) return;
  const [lx, ly] = P(x, y, z + 0.55);
  el(g, "rect", { x: lx + 10, y: ly - 26, width: 36, height: 16, rx: 8, fill: "#C0392B" });
  const t = el(g, "text", { x: lx + 28, y: ly - 14, "text-anchor": "middle", "font-size": 10, "font-weight": 700, fill: "#fff", "font-family": F });
  t.textContent = "LIVE";
}

function applySegment(r: Refs, d: RunOfShowSegment) {
  const on = (k: string) => d.on.includes(k);
  const mic = ([ring, dot]: MicPair, live: boolean) => {
    dot.setAttribute("fill", live ? C.P : C.off);
    ring.setAttribute("fill-opacity", live ? "0.18" : "0");
    ring.classList.toggle(styles.live, live);
  };
  mic(r.lec, on("lec"));
  r.panel.forEach((p) => mic(p, on("panel")));
  r.aisle.forEach((p) => mic(p, on("aisle")));
  r.spk.forEach((w) => (w.style.opacity = on("spk") ? "1" : "0"));
  r.ledT1.textContent = d.led[0];
  r.ledT2.textContent = d.led[1];
  r.conf.setAttribute("fill", on("conf") ? "#4C8BE8" : "#3A4660");
  r.desk.setAttribute("fill", on("desk") ? "#4C8BE8" : C.off);
  r.touchT.textContent = d.mode;
  drawCamera(r.rear, 10, 15.3, 2.6, d.cam === "rear");
  drawCamera(r.side, 0.9, 8.3, 5.25, d.cam === "side");
  const c = d.cam === "rear" ? P(10, 15.0, 2.85) : P(1.1, 8.3, 5.5);
  const sp = d.cam === "rear" ? 1.6 : 1.1;
  const [tx, ty, tz] = d.tgt;
  r.cone.setAttribute("points", pts([c, P(tx - sp, ty, tz + 0.6), P(tx + sp, ty, tz - 0.6)]));
  for (const k in r.call) r.call[k].classList.toggle(styles.on, on(k) || k === d.cam);
}

export default function RunOfShowIllustration({ segment }: { segment: RunOfShowSegment }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const refs = useRef<Refs | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    if (!refs.current) refs.current = drawScene(svgRef.current);
    applySegment(refs.current, segment);
  }, [segment]);

  return (
    <div className="overflow-x-auto [scrollbar-width:thin]">
      <svg
        ref={svgRef}
        viewBox="0 0 1300 740"
        role="img"
        aria-label="Isometric illustration of a townhall space with stage, LED wall, cameras, microphones and seated audience, labelled by equipment"
        className={`block h-auto w-full max-md:min-w-[720px] ${styles.svg}`}
      />
    </div>
  );
}
