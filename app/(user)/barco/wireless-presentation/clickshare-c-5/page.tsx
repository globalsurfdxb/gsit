import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { c5Data } from "../../../../components/BarcoProduct/products/c5";

export const metadata: Metadata = {
    title: "Barco ClickShare C-5 Wireless Presentation System in Dubai - GS IT",
    description:
        "Barco ClickShare C-5: wireless presentation for huddle spaces and small rooms. Share from the ClickShare app, see specs and book a demo with GS IT.",
};

const page = async () => {
    return <Index data={c5Data} />;
};

export default page;
