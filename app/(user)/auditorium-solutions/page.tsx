import type { Metadata } from "next";
import Index from "@/app/components/AuditoriumAvSolutions/Index";

export const metadata: Metadata = {
    title: "Auditorium Solutions Solutions Dubai",
    description:
        "Auditorium Solutions solutions in Dubai from GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
