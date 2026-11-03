import type { Metadata } from "next";
import Index from "../../components/BallroomAv/Index";

export const metadata: Metadata = {
    title: "Ballroom AV Solutions Dubai",
    description:
        "Ballroom AV solutions in Dubai from GS IT. We design and install ballroom audio, displays, wireless microphones and room-combining control for hotels and venues in the UAE.",
};

const page = async () => {
    return <Index />;
};

export default page;
