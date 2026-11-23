import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { forticlient } from "./forticlient";
import { fortidlp } from "./fortidlp";
import { fortiedr } from "./fortiedr";
import { fortisase } from "./fortisase";

// Endpoint, data and SASE pages under /store/network-security/fortinet, keyed by URL slug
export const endpointSaseProducts: Record<string, LogitechProductData> = {
  [forticlient.slug]: forticlient,
  [fortidlp.slug]: fortidlp,
  [fortiedr.slug]: fortiedr,
  [fortisase.slug]: fortisase,
};
