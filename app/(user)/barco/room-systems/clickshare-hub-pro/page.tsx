import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { hubProData } from "../../../../components/BarcoProduct/products/hubPro";

export const metadata: Metadata = {
    title: "Barco ClickShare Hub Pro | Teams Room System - GS IT",
    description:
        "Barco ClickShare Hub Pro: premium Microsoft Teams Rooms system for medium meeting rooms, with dual display and two 5th-gen ClickShare Buttons. Book a demo with GS IT.",
};

const page = async () => {
    return <Index data={hubProData} />;
};

export default page;
