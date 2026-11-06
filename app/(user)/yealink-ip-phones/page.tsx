import type { Metadata } from "next";
import Index from "../../components/YealinkIpPhones/Index";

export const metadata: Metadata = {
    title: "Yealink IP Phones Dubai | T8, T7 Series and DECT Phones | GS IT",
    description:
        "New Yealink IP phones in Dubai: SIP-T88V Pro, T88W Pro, T87W, T85W, T7 series, T31W, W79P Pro and W59R Pro DECT. Supplied, configured and supported by GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
