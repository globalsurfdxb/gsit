import type { Metadata } from "next";
import Index from "../../components/YealinkHeadsets/Index";

export const metadata: Metadata = {
    title: "Yealink Bluetooth Wireless Headsets Dubai | BH78, BH74, ZenOffice32, WH68 | GS IT",
    description:
        "Yealink Bluetooth and DECT wireless headsets in Dubai: BH78 and BH74 with ANC, BH70, ZenOffice32, BH71 earpiece and WH64/WH68 Workstation. Supplied and supported by GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
