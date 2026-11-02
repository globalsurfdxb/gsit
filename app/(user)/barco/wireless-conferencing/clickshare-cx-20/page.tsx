import type { Metadata } from "next";
import Index from "../../../../components/BarcoProduct/Index";
import { cx20Data } from "../../../../components/BarcoProduct/products/cx20";

export const metadata: Metadata = {
    title: "Barco ClickShare CX-20 | Wireless Conferencing System CX-20 - GS IT",
    description:
        "Barco ClickShare CX-20: one-click wireless conferencing for small meeting rooms. See specs, compare with CX-30 and CX-50, and book a demo with GS IT.",
};

const page = async () => {
    return <Index data={cx20Data} />;
};

export default page;
