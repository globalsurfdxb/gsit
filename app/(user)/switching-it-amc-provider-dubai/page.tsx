import type { Metadata } from "next";
import Index from "../../components/StructuredHandoverItamc/Index";

export const metadata: Metadata = {
    title: "How to Switch IT AMC Providers in Dubai | GS IT",
    description:
        "Unhappy with your current IT support? Switch your IT AMC provider in Dubai with zero downtime, full documentation recovery, and a dedicated onboarding engineer from GS IT.",
    alternates: { canonical: "" },
    openGraph: {
        title: "Switch IT AMC Providers in Dubai | Seamless Handover | GS IT",
        description:
            "Unhappy with your current IT support? Switch your IT AMC provider in Dubai with zero downtime, full documentation recovery, and a dedicated onboarding engineer from GS IT.",
        url: "",
        type: "website",
    },
};

const page = async () => {
    return <Index />;
};

export default page;
