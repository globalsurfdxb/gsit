import type { Metadata } from "next";
import Index from "../../components/YealinkWirelessPresentation/Index";

export const metadata: Metadata = {
    title: "Yealink Wireless Presentation System Dubai | RoomCast E2, WPP30, PA20 | GS IT",
    description:
        "Yealink wireless presentation in Dubai: RoomCast E2, WPP30 and PA20 presentation pods and the MB-Remote. Share up to four screens in 4K. Supplied and installed by GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
