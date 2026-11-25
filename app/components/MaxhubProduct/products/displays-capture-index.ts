import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { cmbSeries } from "./maxhub-cmb-series";
import { raptorSeriesV3Lite } from "./maxhub-raptor-series-v3-lite";
import { raptorSeriesV3 } from "./maxhub-raptor-series-v3";
import { uwSeries } from "./maxhub-uw-series";
import { captureSystemV3 } from "./maxhub-capture-system-v3";
import { portableCaptureSystem } from "./maxhub-portable-capture-system";
import { smartLectern } from "./maxhub-smart-lectern";
import { wt15Dongle } from "./maxhub-wt15-dongle";

// MAXHUB displays, capture and screen-sharing products under /store/displays-capture-sharing/maxhub, keyed by URL slug
export const maxhubDcsProducts: Record<string, LogitechProductData> = {
  [cmbSeries.slug]: cmbSeries,
  [raptorSeriesV3Lite.slug]: raptorSeriesV3Lite,
  [raptorSeriesV3.slug]: raptorSeriesV3,
  [uwSeries.slug]: uwSeries,
  [captureSystemV3.slug]: captureSystemV3,
  [portableCaptureSystem.slug]: portableCaptureSystem,
  [smartLectern.slug]: smartLectern,
  [wt15Dongle.slug]: wt15Dongle,
};
