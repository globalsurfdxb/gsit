import type { Metadata } from "next";
import Index from "../../components/CrisisRoomAv/Index";

export const metadata: Metadata = {
    title: "Crisis Room AV Solutions in Dubai & UAE | GS IT",
    description:
        "Crisis room AV solutions in Dubai and the UAE from GS IT. We design and install video walls and conferencing with centralized control for faster crisis response.",
};

const page = async () => {
    return <Index />;
};

export default page;
