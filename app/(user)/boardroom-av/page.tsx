import type { Metadata } from "next";
import Index from "@/app/components/BoardroomAvSolutions/Index";

export const metadata: Metadata = {
    title: "Immersive Room Solutions Solutions Dubai",
    description:
        "Immersive Room Solutions solutions in Dubai from GS IT. We design, install and support townhall audio, displays, cameras and streaming so every office hears and sees leadership clearly.",
};

const page = async () => {
    return <Index />;
};

export default page;
