import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { hubCoreData } from "../../../../components/BarcoProduct/products/hubCore";

export const metadata: Metadata = {
    title: "Barco ClickShare Hub Core | Teams Room System - GS IT",
    description:
        "Barco ClickShare Hub Core: modular Microsoft Teams Rooms system for small meeting rooms, with one 5th-gen ClickShare Button. See specs and book a demo with GS IT.",
};

const page = async () => {
    return <Index data={hubCoreData} />;
};

export default page;
