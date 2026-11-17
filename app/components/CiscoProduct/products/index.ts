import type { LogitechProductData } from "../Index";
import { firewall200 } from "./cisco-secure-firewall-200"; 
import { firewall1000 } from "./cisco-firepower-1000"; 
import { firewall1200 } from "./cisco-secure-firewall-1200"; 

// Every Logitech product page, keyed by its URL slug. Add new products here.
export const logitechProducts: Record<string, LogitechProductData> = {
  [firewall200.slug]: firewall200, 
  [firewall1000.slug]: firewall1000, 
  [firewall1200.slug]: firewall1200, 
};
