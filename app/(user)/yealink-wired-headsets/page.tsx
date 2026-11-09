import type { Metadata } from "next";
import Index from "../../components/YealinkWiredHeadsets/Index";

export const metadata: Metadata = {
    title: "Yealink Wired Headsets Dubai | UH42, UH44, UH46, YHS36 E2 | GS IT",
    description:
        "Yealink USB wired headsets UH42, UH44 and UH46 for PCs and softphones, and YHS36 E2 for Yealink IP phones, in Dubai. Supplied and supported by GS IT.",
};

const page = async () => {
    return <Index />;
};

export default page;
