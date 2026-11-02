import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { cx50Data } from "../../../../components/BarcoProduct/products/cx50";

export const metadata: Metadata = {
    title: "Barco ClickShare CX-50 Wireless Conferencing System in Dubai - GS IT",
    description:
        "Barco ClickShare CX-50 Gen 2: wireless conferencing for boardrooms with dual screen, wired room dock and room-system switching. Book a demo with GS IT.",
};

const page = async () => {
    return <Index data={cx50Data} />;
};

export default page;
