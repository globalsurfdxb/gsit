import type { Metadata } from "next";
import Index from "../../components/BiampPartnerDubai/Index";

export const metadata: Metadata = {
    title: "Biamp Partner Dubai | Authorised Biamp Dealer UAE | GS IT",
    description:
        "GS IT is an authorised Biamp dealer in the UAE. We design, install and support Biamp audio and conferencing systems in Dubai and across the UAE: Tesira, Parlé and Devio, from meeting rooms to whole buildings.",
};

const page = async () => {
    return <Index />;
};

export default page;
