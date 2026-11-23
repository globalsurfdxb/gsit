import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { fortiap221K } from "./fortiap-221K";
import { fortiap231K } from "./fortiap-231K";
import { fortiap241K } from "./fortiap-241K";
import { fortiap243K } from "./fortiap-243K";
import { fortiap441K } from "./fortiap-441K";
import { fortiap443K } from "./fortiap-443K";
import { fortiap23JK } from "./fortiap-23JK";
import { fortiap244K } from "./fortiap-244K";
import { fortiap222KL } from "./fortiap-222KL";
import { fortiap234G } from "./fortiap-234G";
import { fortiap432G } from "./fortiap-432G";
import { fortiap23JF } from "./fortiap-23JF";
import { fortiap432FR } from "./fortiap-432FR";
import { fortiap831F } from "./fortiap-831F";

// FortiAP pages under /store/wireless-access-points/fortinet, keyed by URL slug (as in the page pack, e.g. fortiap-231K)
export const fortiapProducts: Record<string, LogitechProductData> = {
  [fortiap221K.slug]: fortiap221K,
  [fortiap231K.slug]: fortiap231K,
  [fortiap241K.slug]: fortiap241K,
  [fortiap243K.slug]: fortiap243K,
  [fortiap441K.slug]: fortiap441K,
  [fortiap443K.slug]: fortiap443K,
  [fortiap23JK.slug]: fortiap23JK,
  [fortiap244K.slug]: fortiap244K,
  [fortiap222KL.slug]: fortiap222KL,
  [fortiap234G.slug]: fortiap234G,
  [fortiap432G.slug]: fortiap432G,
  [fortiap23JF.slug]: fortiap23JF,
  [fortiap432FR.slug]: fortiap432FR,
  [fortiap831F.slug]: fortiap831F,
};
