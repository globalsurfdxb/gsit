import type { Metadata } from "next";
import Index from "../../components/BarcoClickSharePresent/Index";

export const metadata: Metadata = {
    title: "Barco ClickShare Wireless Presentation System Dubai - GS IT",
    description:
        "Barco ClickShare Present: one-click wireless presentation for meeting rooms. Compare ClickShare C-5 and C-10 and book an on-site demo with GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
