import type { YealinkProductData } from "../Index";
import { uvc85Byod } from "./uvc85-byod";
import { deskvisionA24 } from "./yealink-deskvision-a24";
import { deskvisionA24Zoom } from "./yealink-deskvision-a24-zoom";
import { meetingbarA10 } from "./yealink-meetingbar-a10";
import { meetingbarA102 } from "./yealink-meetingbar-a10-2";
import { meetingbarA10Teams } from "./yealink-meetingbar-a10-teams";
import { meetingbarA10Zoom } from "./yealink-meetingbar-a10-zoom";
import { meetingbarA25 } from "./yealink-meetingbar-a25";
import { meetingbarA25Byom } from "./yealink-meetingbar-a25-byom";
import { meetingbarA25Zoom } from "./yealink-meetingbar-a25-zoom";
import { meetingbarA30 } from "./yealink-meetingbar-a30";
import { meetingbarA30Teams } from "./yealink-meetingbar-a30-teams";
import { meetingbarA30Zoom } from "./yealink-meetingbar-a30-zoom";
import { meetingbarA40 } from "./yealink-meetingbar-a40";
import { meetingbarA40Zoom } from "./yealink-meetingbar-a40-zoom";
import { meetingbarA50 } from "./yealink-meetingbar-a50";
import { meetingbarA50Zoom } from "./yealink-meetingbar-a50-zoom";
import { meetingboardCByod } from "./yealink-meetingboard-c-byod";
import { meetingboardPro } from "./yealink-meetingboard-pro";
import { meetingboardProZoom } from "./yealink-meetingboard-pro-zoom";
import { mvcs40 } from "./yealink-mvcs40";
import { mvcs60 } from "./yealink-mvcs60";
import { mvcs90 } from "./yealink-mvcs90";
import { smartvision40 } from "./yealink-smartvision-40";
import { smartvision60 } from "./yealink-smartvision-60";
import { smartvision80 } from "./yealink-smartvision-80";
import { uvc34 } from "./yealink-uvc34";
import { uvc40E2 } from "./yealink-uvc40-e2";
import { uvc86 } from "./yealink-uvc86";
import { mvcS50MicrosoftTeamsSystem } from "./yealink-mvc-s50-microsoft-teams-system";
import { mvcS80MicrosoftTeamsSystem } from "./yealink-mvc-s80-microsoft-teams-system";

// Every Yealink product page, keyed by its URL slug. Add new products here.
export const yealinkProducts: Record<string, YealinkProductData> = {
  [uvc85Byod.slug]: uvc85Byod,
  [deskvisionA24.slug]: deskvisionA24,
  [deskvisionA24Zoom.slug]: deskvisionA24Zoom,
  [meetingbarA10.slug]: meetingbarA10,
  [meetingbarA102.slug]: meetingbarA102,
  [meetingbarA10Teams.slug]: meetingbarA10Teams,
  [meetingbarA10Zoom.slug]: meetingbarA10Zoom,
  [meetingbarA25.slug]: meetingbarA25,
  [meetingbarA25Byom.slug]: meetingbarA25Byom,
  [meetingbarA25Zoom.slug]: meetingbarA25Zoom,
  [meetingbarA30.slug]: meetingbarA30,
  [meetingbarA30Teams.slug]: meetingbarA30Teams,
  [meetingbarA30Zoom.slug]: meetingbarA30Zoom,
  [meetingbarA40.slug]: meetingbarA40,
  [meetingbarA40Zoom.slug]: meetingbarA40Zoom,
  [meetingbarA50.slug]: meetingbarA50,
  [meetingbarA50Zoom.slug]: meetingbarA50Zoom,
  [meetingboardCByod.slug]: meetingboardCByod,
  [meetingboardPro.slug]: meetingboardPro,
  [meetingboardProZoom.slug]: meetingboardProZoom,
  [mvcs40.slug]: mvcs40,
  [mvcS50MicrosoftTeamsSystem.slug]: mvcS50MicrosoftTeamsSystem,
  [mvcs60.slug]: mvcs60,
  [mvcs90.slug]: mvcs90,
  [smartvision40.slug]: smartvision40,
  [smartvision60.slug]: smartvision60,
  [smartvision80.slug]: smartvision80,
  [uvc34.slug]: uvc34,
  [uvc40E2.slug]: uvc40E2,
  [uvc86.slug]: uvc86,
  [mvcS80MicrosoftTeamsSystem.slug]: mvcS80MicrosoftTeamsSystem,
};
