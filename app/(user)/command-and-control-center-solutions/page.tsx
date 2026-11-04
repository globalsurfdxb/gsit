import type { Metadata } from "next";
import Index from "../../components/CommandControlCenter/Index";

export const metadata: Metadata = {
    title: "Command and Control Center Solutions Dubai | GS IT",
    description:
        "Command and control center solutions in Dubai and the UAE from GS IT. Video walls, operator consoles and integrated control that give teams one live view for faster incident response.",
};

const page = async () => {
    return <Index />;
};

export default page;
