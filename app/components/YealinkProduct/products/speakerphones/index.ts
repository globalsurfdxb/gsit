import type { YealinkProductData } from "../../Index";
import { cp700 } from "./cp700";
import { cp900 } from "./cp900";
import { sp92 } from "./sp92";
import { sp96 } from "./sp96";

// Every Yealink speakerphone page, keyed by its URL slug (/yealink/speakerphone/<slug>).
// Also listed on /yealink-headsets-and-speakerphones, after the headsets.
export const speakerphoneProducts: Record<string, YealinkProductData> = {
  [cp700.slug]: cp700,
  [cp900.slug]: cp900,
  [sp92.slug]: sp92,
  [sp96.slug]: sp96,
};
