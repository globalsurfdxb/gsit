import type { Metadata } from "next";
import Index from "../../components/BarcoClickShareHub/Index";

export const metadata: Metadata = {
    title: "Barco ClickShare Hub Room System - GS IT",
    description:
        "Barco ClickShare Hub: modular Microsoft Teams Rooms system with wireless 4K sharing. Compare Hub Core and Hub Pro and book an on-site demo with GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
