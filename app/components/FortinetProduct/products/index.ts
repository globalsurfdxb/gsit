import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { fortigate30G } from "./fortigate-30g";
import { fortigate40F } from "./fortigate-40f";
import { fortigate50G } from "./fortigate-50g";
import { fortigate70G } from "./fortigate-70g";
import { fortigate90G } from "./fortigate-90g";
import { fortigate120G } from "./fortigate-120g";
import { fortigate200G } from "./fortigate-200g";
import { fortigate400G } from "./fortigate-400g";
import { fortigate900G } from "./fortigate-900g";
import { fortigate1800F } from "./fortigate-1800f";
import { fortigate2600F } from "./fortigate-2600f";
import { fortigate3000F } from "./fortigate-3000f";
import { fortigate3200F } from "./fortigate-3200f";
import { fortigate3500F } from "./fortigate-3500f";
import { fortigate3700F } from "./fortigate-3700f";
import { fortigate4200F } from "./fortigate-4200f";
import { fortigate4400F } from "./fortigate-4400f";
import { fortigate4800F } from "./fortigate-4800f";
import { fortigate7081F } from "./fortigate-7081f";
import { fortigate7121F } from "./fortigate-7121f";

// FortiGate pages under /store/next-generation-firewall-products/fortinet, keyed by URL slug (smallest to largest)
export const fortigateProducts: Record<string, LogitechProductData> = {
  [fortigate30G.slug]: fortigate30G,
  [fortigate40F.slug]: fortigate40F,
  [fortigate50G.slug]: fortigate50G,
  [fortigate70G.slug]: fortigate70G,
  [fortigate90G.slug]: fortigate90G,
  [fortigate120G.slug]: fortigate120G,
  [fortigate200G.slug]: fortigate200G,
  [fortigate400G.slug]: fortigate400G,
  [fortigate900G.slug]: fortigate900G,
  [fortigate1800F.slug]: fortigate1800F,
  [fortigate2600F.slug]: fortigate2600F,
  [fortigate3000F.slug]: fortigate3000F,
  [fortigate3200F.slug]: fortigate3200F,
  [fortigate3500F.slug]: fortigate3500F,
  [fortigate3700F.slug]: fortigate3700F,
  [fortigate4200F.slug]: fortigate4200F,
  [fortigate4400F.slug]: fortigate4400F,
  [fortigate4800F.slug]: fortigate4800F,
  [fortigate7081F.slug]: fortigate7081F,
  [fortigate7121F.slug]: fortigate7121F,
};

// FortiSwitch pages under /store/network-switches/fortinet
export { fortiswitchProducts } from "./fortiswitch-index";

// FortiAP pages under /store/wireless-access-points/fortinet
export { fortiapProducts } from "./fortiap-index";

// Zero trust access pages under /store/network-security/fortinet
export { zeroTrustProducts } from "./zero-trust-index";

// Endpoint, data and SASE pages, also under /store/network-security/fortinet
export { endpointSaseProducts } from "./endpoint-sase-index";
import { zeroTrustProducts as zeroTrust } from "./zero-trust-index";
import { endpointSaseProducts as endpointSase } from "./endpoint-sase-index";
import { managementAnalyticsProducts as managementAnalytics } from "./management-analytics-index";

// Management and analytics pages, also under /store/network-security/fortinet
export { managementAnalyticsProducts } from "./management-analytics-index";

// Every page under /store/network-security/fortinet (zero trust access; endpoint, data and SASE; management and analytics)
export const networkSecurityProducts = { ...zeroTrust, ...endpointSase, ...managementAnalytics };
