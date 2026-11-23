import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { fortiauthenticator } from "./fortiauthenticator";
import { fortinac } from "./fortinac";
import { fortipam } from "./fortipam";
import { fortitokenMobile } from "./fortitoken-mobile";

// Zero trust access pages under /store/network-security/fortinet, keyed by URL slug
export const zeroTrustProducts: Record<string, LogitechProductData> = {
  [fortiauthenticator.slug]: fortiauthenticator,
  [fortinac.slug]: fortinac,
  [fortipam.slug]: fortipam,
  [fortitokenMobile.slug]: fortitokenMobile,
};
