import type { Metadata } from "next";
import Index from "../../components/YealinkPartnerDubai/Index";

export const metadata: Metadata = {
    title: "Yealink Partner Dubai | Authorized Yealink Reseller | GS IT",
    description:
        "GS IT is a Yealink Gold Video Conferencing Partner that supplies and installs Yealink video conferencing, room devices, headsets and IP phones across the UAE. Book an on-site demo.",
};

const page = async () => {
    return <Index />;
};

export default page;
