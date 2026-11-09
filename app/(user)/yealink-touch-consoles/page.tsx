import type { Metadata } from "next";
import Index from "../../components/YealinkTouchConsoles/Index";

export const metadata: Metadata = {
    title: "Yealink Touch Consoles and Room Control Dubai | CTP25, MTouch Plus, CT300 | GS IT",
    description:
        "Yealink touch consoles and room controllers in Dubai: CTP25, MTouch Plus, MTouch Plus-EXT, MTouch Plus-MB, CT200 and CT300. Supplied, installed and programmed by GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
