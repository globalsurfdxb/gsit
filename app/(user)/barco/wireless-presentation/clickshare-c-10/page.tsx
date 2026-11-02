import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { c10Data } from "../../../../components/BarcoProduct/products/c10";

export const metadata: Metadata = {
    title: "Barco ClickShare C-10 Wireless Presentation System in Dubai - GS IT",
    description:
        "Barco ClickShare C-10: wireless presentation for medium to large rooms with two sources and interactivity. See specs and book a demo with GS IT.",
};

const page = async () => {
    return <Index data={c10Data} />;
};

export default page;
