import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { fortiai } from "./fortiai";
import { fortianalyzer } from "./fortianalyzer";
import { fortigateCloud } from "./fortigate-cloud";
import { fortimanager } from "./fortimanager";

// Management and analytics pages under /store/network-security/fortinet, keyed by URL slug
export const managementAnalyticsProducts: Record<string, LogitechProductData> = {
  [fortiai.slug]: fortiai,
  [fortianalyzer.slug]: fortianalyzer,
  [fortigateCloud.slug]: fortigateCloud,
  [fortimanager.slug]: fortimanager,
};
