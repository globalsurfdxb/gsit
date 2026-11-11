import type { YealinkProductData } from "../../Index";
import { roomcastE2 } from "./roomcast-e2";
import { pa20 } from "./pa20";
import { wpp30 } from "./wpp30";
import { mbRemote } from "./mb-remote";

// Every Yealink wireless presentation page, keyed by its URL slug (/yealink-wireless-presentation-system/<slug>). Add new devices here.
export const presentationProducts: Record<string, YealinkProductData> = {
  [roomcastE2.slug]: roomcastE2,
  [pa20.slug]: pa20,
  [wpp30.slug]: wpp30,
  [mbRemote.slug]: mbRemote,
};
