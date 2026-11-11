import type { Metadata } from "next";
import Index from "../../components/LogitechMeetingRoomDevices/Index";

export const metadata: Metadata = {
    title: "Logitech Partner Dubai | Logitech Meeting Room Devices | GS IT",
    description:
        "GS IT is a Logitech Partner in Dubai. We supply, install and configure Logitech meeting room devices for businesses across the UAE.",
};

const page = async () => {
    return <Index />;
};

export default page;
