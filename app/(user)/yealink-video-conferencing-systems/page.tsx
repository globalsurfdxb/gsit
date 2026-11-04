import type { Metadata } from "next";
import Index from "../../components/YealinkVideoConferencing/Index";

export const metadata: Metadata = {
    title: "Yealink Video Conferencing Solutions in Dubai | GS IT",
    description:
        "Yealink video conferencing in Dubai: MeetingBars, Teams Rooms and Zoom Rooms kits, USB cameras and displays. Supplied, installed and supported by GS IT, a Yealink Gold partner.",
    alternates: { canonical: "https://www.gs-it.ae/yealink-video-conferencing-systems" },
};

const page = async () => {
    return <Index />;
};

export default page;
