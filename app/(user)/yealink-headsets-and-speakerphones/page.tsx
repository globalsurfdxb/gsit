import type { Metadata } from "next";
import Index from "../../components/YealinkHeadsets/Index";

export const metadata: Metadata = {
    title: "Yealink Headsets and Speakerphones Dubai | Bluetooth, DECT, USB | GS IT",
    description:
        "Yealink headsets and speakerphones in Dubai: Bluetooth and DECT wireless headsets, USB and desk phone wired headsets, and SP96, SP92, CP900 and CP700 speakerphones. Supplied and supported by GS IT.",
    alternates: { canonical: "https://www.gs-it.ae/yealink-headsets-and-speakerphones" },
};

const page = async () => {
    return <Index />;
};

export default page;
