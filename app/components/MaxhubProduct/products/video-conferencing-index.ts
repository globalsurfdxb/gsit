import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { tcp33tUniversalConsole } from "./maxhub-tcp33t-universal-console";
import { ucP30 } from "./maxhub-uc-p30";
import { xbarU50 } from "./maxhub-xbar-u50";
import { xbarV50Kit } from "./maxhub-xbar-v50-kit";
import { xbarV70Kit } from "./maxhub-xbar-v70-kit";
import { xbarW70Kit } from "./maxhub-xbar-w70-kit";
import { xcoreKitPro } from "./maxhub-xcore-kit-pro";
import { xt20PsKit } from "./maxhub-xt20-ps-kit";
import { xt20VbKit } from "./maxhub-xt20-vb-kit";

// MAXHUB video conferencing products under /store/video-conferencing-devices/maxhub, keyed by URL slug
export const maxhubVideoProducts: Record<string, LogitechProductData> = {
  [tcp33tUniversalConsole.slug]: tcp33tUniversalConsole,
  [ucP30.slug]: ucP30,
  [xbarU50.slug]: xbarU50,
  [xbarV50Kit.slug]: xbarV50Kit,
  [xbarV70Kit.slug]: xbarV70Kit,
  [xbarW70Kit.slug]: xbarW70Kit,
  [xcoreKitPro.slug]: xcoreKitPro,
  [xt20PsKit.slug]: xt20PsKit,
  [xt20VbKit.slug]: xt20VbKit,
};
