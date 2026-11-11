import type { YealinkProductData } from "../../Index";
import { ctp25 } from "./ctp25";
import { mtouchPlus } from "./mtouch-plus";
import { mtouchPlusExt } from "./mtouch-plus-ext";
import { mtouchPlusMb } from "./mtouch-plus-mb";
import { ct200 } from "./ct200";
import { ct300 } from "./ct300";

// Every Yealink touch console page, keyed by its URL slug (/yealink-touch-consoles/<slug>). Add new consoles here.
export const touchConsoleProducts: Record<string, YealinkProductData> = {
  [ctp25.slug]: ctp25,
  [mtouchPlus.slug]: mtouchPlus,
  [mtouchPlusExt.slug]: mtouchPlusExt,
  [mtouchPlusMb.slug]: mtouchPlusMb,
  [ct200.slug]: ct200,
  [ct300.slug]: ct300,
};
