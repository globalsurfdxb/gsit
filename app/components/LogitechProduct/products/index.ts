import type { LogitechProductData } from "../Index";
import { meetup2 } from "./logitech-meetup-2";
import { meetup } from "./logitech-meetup";
import { rallyBar2 } from "./logitech-rally-bar-2";
import { rallyBarHuddle } from "./logitech-rally-bar-huddle";
import { rallyBarMini } from "./logitech-rally-bar-mini";
import { rallyBar } from "./logitech-rally-bar";
import { rallyCamera } from "./logitech-rally-camera";
import { rallyPlus } from "./logitech-rally-plus";
import { tapIp2 } from "./logitech-tap-ip-2";
import { tapIp } from "./logitech-tap-ip";
import { tap } from "./logitech-tap";
import { tapScheduler2 } from "./logitech-tap-scheduler-2";
import { tapScheduler } from "./logitech-tap-scheduler";

// Every Logitech product page, keyed by its URL slug. Add new products here.
export const logitechProducts: Record<string, LogitechProductData> = {
  [meetup2.slug]: meetup2,
  [meetup.slug]: meetup,
  [rallyBar2.slug]: rallyBar2,
  [rallyBarHuddle.slug]: rallyBarHuddle,
  [rallyBarMini.slug]: rallyBarMini,
  [rallyBar.slug]: rallyBar,
  [rallyCamera.slug]: rallyCamera,
  [rallyPlus.slug]: rallyPlus,
  [tapIp2.slug]: tapIp2,
  [tapIp.slug]: tapIp,
  [tap.slug]: tap,
  [tapScheduler2.slug]: tapScheduler2,
  [tapScheduler.slug]: tapScheduler,
};
