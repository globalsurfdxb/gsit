import type { YealinkProductData } from "../../Index";
import { bh70 } from "./bh70";
import { bh71 } from "./bh71";
import { bh74 } from "./bh74";
import { bh78 } from "./bh78";
import { uh42 } from "./uh42";
import { uh44 } from "./uh44";
import { uh46 } from "./uh46";
import { wh64Workstation } from "./wh64-workstation";
import { wh68Workstation } from "./wh68-workstation";
import { yhs36E2 } from "./yhs36-e2";
import { zenoffice32 } from "./zenoffice32";

// Listed on /yealink-bluetooth-wireless-headsets
export const wirelessHeadsetProducts: Record<string, YealinkProductData> = {
  [bh70.slug]: bh70,
  [bh71.slug]: bh71,
  [bh74.slug]: bh74,
  [bh78.slug]: bh78,
  [wh64Workstation.slug]: wh64Workstation,
  [wh68Workstation.slug]: wh68Workstation,
  [zenoffice32.slug]: zenoffice32,
};

// Listed on /yealink-wired-headsets
export const wiredHeadsetProducts: Record<string, YealinkProductData> = {
  [uh42.slug]: uh42,
  [uh44.slug]: uh44,
  [uh46.slug]: uh46,
  [yhs36E2.slug]: yhs36E2,
};

// Every Yealink headset page, keyed by its URL slug (/yealink/headset/<slug>). Add new headsets to one of the lists above.
export const headsetProducts: Record<string, YealinkProductData> = { ...wirelessHeadsetProducts, ...wiredHeadsetProducts };
