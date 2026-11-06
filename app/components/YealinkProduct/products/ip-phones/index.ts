import type { YealinkProductData } from "../../Index";
import { sipT31w } from "./sip-t31w";
import { sipT73u } from "./sip-t73u";
import { sipT73w } from "./sip-t73w";
import { sipT74u } from "./sip-t74u";
import { sipT74w } from "./sip-t74w";
import { sipT77u } from "./sip-t77u";
import { sipT85w } from "./sip-t85w";
import { sipT87w } from "./sip-t87w";
import { sipT88vPro } from "./sip-t88v-pro";
import { sipT88w } from "./sip-t88w";
import { sipT88wPro } from "./sip-t88w-pro";
import { w59rPro } from "./w59r-pro";
import { w79pPro } from "./w79p-pro";

// Every Yealink IP phone page, keyed by its URL slug (/yealink/ip-phone/<slug>). Add new phones here.
export const ipPhoneProducts: Record<string, YealinkProductData> = {
  [sipT31w.slug]: sipT31w,
  [sipT73u.slug]: sipT73u,
  [sipT73w.slug]: sipT73w,
  [sipT74u.slug]: sipT74u,
  [sipT74w.slug]: sipT74w,
  [sipT77u.slug]: sipT77u,
  [sipT85w.slug]: sipT85w,
  [sipT87w.slug]: sipT87w,
  [sipT88vPro.slug]: sipT88vPro,
  [sipT88w.slug]: sipT88w,
  [sipT88wPro.slug]: sipT88wPro,
  [w59rPro.slug]: w59rPro,
  [w79pPro.slug]: w79pPro,
};
