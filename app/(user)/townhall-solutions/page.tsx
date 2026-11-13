import type { Metadata } from "next";
import Index from "../../components/TownhallSolutions/Index";

export const metadata: Metadata = {
    title: "Corporate Townhall AV Solutions Dubai",
    description:
        "Corporate townhall AV solutions in Dubai from GS IT. We design, install and support townhall audio, displays, cameras and streaming so every office hears and sees leadership clearly.",
};

const page = async () => {
    return <Index />;
};

export default page;
