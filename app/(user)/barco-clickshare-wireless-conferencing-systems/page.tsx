import type { Metadata } from "next";
import Index from "../../components/BarcoClickShareConference/Index";

export const metadata: Metadata = {
    title: "Barco ClickShare wireless conferencing system in Dubai - GS IT",
    description:
        "Barco ClickShare Conference: run hybrid meetings from your laptop on the room camera and audio. Compare CX-20, CX-30 and CX-50 and book a demo with GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
