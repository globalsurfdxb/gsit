import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { b5Series } from "./maxhub-b5-series";
import { f5Series } from "./maxhub-f5-series";
import { u4Series } from "./maxhub-u4-series";
import { xboardV7Mtr } from "./maxhub-xboard-v7-mtr";
import { xboardV7Series } from "./maxhub-xboard-v7-series";

// MAXHUB interactive displays under /store/interactive-displays/maxhub, keyed by URL slug
export const maxhubInteractiveProducts: Record<string, LogitechProductData> = {
  [b5Series.slug]: b5Series,
  [f5Series.slug]: f5Series,
  [u4Series.slug]: u4Series,
  [xboardV7Mtr.slug]: xboardV7Mtr,
  [xboardV7Series.slug]: xboardV7Series,
};
