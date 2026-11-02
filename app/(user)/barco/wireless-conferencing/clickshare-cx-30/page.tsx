import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { cx30Data } from "../../../../components/BarcoProduct/products/cx30";

export const metadata: Metadata = {
    title: "Barco ClickShare CX-30 Wireless Conferencing System Dubai - GS IT",
    description:
        "Barco ClickShare CX-30: wireless conferencing for medium meeting rooms with two Buttons, two sources and interactivity. Book a demo with GS IT.",
};

const page = async () => {
    return <Index data={cx30Data} />;
};

export default page;
