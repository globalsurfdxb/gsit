import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { fortiswitch108F } from "./fortiswitch-108F";
import { fortiswitch110G } from "./fortiswitch-110G";
import { fortiswitch124F } from "./fortiswitch-124F";
import { fortiswitch124G } from "./fortiswitch-124G";
import { fortiswitch148F } from "./fortiswitch-148F";
import { fortiswitch224E } from "./fortiswitch-224E";
import { fortiswitch248E } from "./fortiswitch-248E";
import { fortiswitch324G } from "./fortiswitch-324G";
import { fortiswitch348G } from "./fortiswitch-348G";
import { fortiswitch624F } from "./fortiswitch-624F";
import { fortiswitch648F } from "./fortiswitch-648F";
import { fortiswitch1024E } from "./fortiswitch-1024E";
import { fortiswitchT1024E } from "./fortiswitch-T1024E";
import { fortiswitch1048G } from "./fortiswitch-1048G";
import { fortiswitch2048F } from "./fortiswitch-2048F";
import { fortiswitch3032G } from "./fortiswitch-3032G";
import { fortiswitchRugged } from "./fortiswitch-rugged";

// FortiSwitch pages under /store/network-switches/fortinet, keyed by URL slug (as in the page pack, e.g. fortiswitch-124G)
export const fortiswitchProducts: Record<string, LogitechProductData> = {
  [fortiswitch108F.slug]: fortiswitch108F,
  [fortiswitch110G.slug]: fortiswitch110G,
  [fortiswitch124F.slug]: fortiswitch124F,
  [fortiswitch124G.slug]: fortiswitch124G,
  [fortiswitch148F.slug]: fortiswitch148F,
  [fortiswitch224E.slug]: fortiswitch224E,
  [fortiswitch248E.slug]: fortiswitch248E,
  [fortiswitch324G.slug]: fortiswitch324G,
  [fortiswitch348G.slug]: fortiswitch348G,
  [fortiswitch624F.slug]: fortiswitch624F,
  [fortiswitch648F.slug]: fortiswitch648F,
  [fortiswitch1024E.slug]: fortiswitch1024E,
  [fortiswitchT1024E.slug]: fortiswitchT1024E,
  [fortiswitch1048G.slug]: fortiswitch1048G,
  [fortiswitch2048F.slug]: fortiswitch2048F,
  [fortiswitch3032G.slug]: fortiswitch3032G,
  [fortiswitchRugged.slug]: fortiswitchRugged,
};
