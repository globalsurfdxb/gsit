import type { Metadata } from "next";
import Index from "../../components/ExperienceCenter/Index";

export const metadata: Metadata = {
    title: "Experience Center & Demo Room Solutions in Dubai | GS IT",
    description:
        "Experience center and demo room solutions in Dubai. GS IT plans and installs the display and control systems for client presentation spaces across the UAE.",
};

const page = async () => {
    return <Index />;
};

export default page;
