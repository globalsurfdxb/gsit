import type { LogitechProductData } from "../Index";
import { firewall200 } from "./cisco-secure-firewall-200"; 
import { firewall1000 } from "./cisco-firepower-1000"; 
import { firewall1200 } from "./cisco-secure-firewall-1200";
import { deskPhone9841 } from "./cisco-desk-phone-9841";
import { deskPhone9851 } from "./cisco-desk-phone-9851";
import { deskPhone9861 } from "./cisco-desk-phone-9861";
import { deskPhone9871 } from "./cisco-desk-phone-9871";
import { ipPhone8800 } from "./cisco-ip-phone-8800-series";
import { wirelessPhone9821 } from "./cisco-wireless-phone-9821";
import { ipDect6800 } from "./cisco-ip-dect-6800-series";
import { catalyst1200 } from "./cisco-catalyst-1200-series";
import { catalyst1300 } from "./cisco-catalyst-1300-series";
import { catalyst9200 } from "./cisco-catalyst-9200-series";
import { catalyst9300 } from "./cisco-catalyst-9300-series";
import { catalyst9500 } from "./cisco-catalyst-9500-series";
import { merakiMs130 } from "./cisco-meraki-ms130-series";
import { merakiMs150 } from "./cisco-meraki-ms150-series";
import { roomBar } from "./cisco-room-bar";
import { roomBarPro } from "./cisco-room-bar-pro";
import { roomKitEq } from "./cisco-room-kit-eq";
import { roomKitEqx } from "./cisco-room-kit-eqx";
import { roomKitProG2 } from "./cisco-room-kit-pro-g2";
import { boardProG3 } from "./cisco-board-pro-g3";
import { deskProG2 } from "./cisco-desk-pro-g2";
import { catalyst9136 } from "./cisco-catalyst-9136-series";
import { catalyst9172 } from "./cisco-catalyst-9172-series";
import { merakiMr76 } from "./cisco-meraki-mr76-series";
import { wireless9174 } from "./cisco-wireless-9174-series";
import { wireless9176 } from "./cisco-wireless-9176-series";
import { isr112x } from "./cisco-catalyst-112x-isrs";
import { merakiMx67 } from "./cisco-meraki-mx67";
import { merakiMx75 } from "./cisco-meraki-mx75";
import { merakiMx85 } from "./cisco-meraki-mx85";
import { merakiMx95 } from "./cisco-meraki-mx95";

// Every Logitech product page, keyed by its URL slug. Add new products here.
export const logitechProducts: Record<string, LogitechProductData> = {
  [firewall200.slug]: firewall200, 
  [firewall1000.slug]: firewall1000, 
  [firewall1200.slug]: firewall1200,
};

// Cisco IP phone pages under /store/ip-phones/cisco, keyed by URL slug
export const ciscoIpPhoneProducts: Record<string, LogitechProductData> = {
  [deskPhone9841.slug]: deskPhone9841,
  [deskPhone9851.slug]: deskPhone9851,
  [deskPhone9861.slug]: deskPhone9861,
  [deskPhone9871.slug]: deskPhone9871,
  [ipPhone8800.slug]: ipPhone8800,
  [wirelessPhone9821.slug]: wirelessPhone9821,
  [ipDect6800.slug]: ipDect6800,
};

// Cisco switch pages under /store/network-switches/cisco, keyed by URL slug
export const ciscoSwitchProducts: Record<string, LogitechProductData> = {
  [catalyst1200.slug]: catalyst1200,
  [catalyst1300.slug]: catalyst1300,
  [catalyst9200.slug]: catalyst9200,
  [catalyst9300.slug]: catalyst9300,
  [catalyst9500.slug]: catalyst9500,
  [merakiMs130.slug]: merakiMs130,
  [merakiMs150.slug]: merakiMs150,
};

// Cisco video conferencing pages under /store/video-conferencing-devices/cisco, keyed by URL slug
export const ciscoVideoProducts: Record<string, LogitechProductData> = {
  [roomBar.slug]: roomBar,
  [roomBarPro.slug]: roomBarPro,
  [roomKitEq.slug]: roomKitEq,
  [roomKitEqx.slug]: roomKitEqx,
  [roomKitProG2.slug]: roomKitProG2,
  [boardProG3.slug]: boardProG3,
  [deskProG2.slug]: deskProG2,
};

// Cisco access point pages under /store/wireless-access-points/cisco, keyed by URL slug
export const ciscoAccessPointProducts: Record<string, LogitechProductData> = {
  [catalyst9136.slug]: catalyst9136,
  [catalyst9172.slug]: catalyst9172,
  [wireless9174.slug]: wireless9174,
  [wireless9176.slug]: wireless9176,
  [merakiMr76.slug]: merakiMr76,
};

// Cisco router pages under /store/network-routers/cisco, keyed by URL slug
export const ciscoRouterProducts: Record<string, LogitechProductData> = {
  [isr112x.slug]: isr112x,
  [merakiMx67.slug]: merakiMx67,
  [merakiMx75.slug]: merakiMx75,
  [merakiMx85.slug]: merakiMx85,
  [merakiMx95.slug]: merakiMx95,
};
