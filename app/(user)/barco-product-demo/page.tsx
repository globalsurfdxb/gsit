import type { Metadata } from "next";
import Index from "../../components/BarcoProductDemo/Index";

export const metadata: Metadata = {
    title: "Barco Product Demo",
    description:
        "",
};

const page = async () => {
    return <Index />;
};

export default page;
