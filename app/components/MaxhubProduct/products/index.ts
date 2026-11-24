import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { dm30MicPod } from "./maxhub-dm30-mic-pod";
import { panelSp10 } from "./maxhub-panel-sp10";
import { tcp30mConsole } from "./maxhub-tcp30m-console";
import { ucBm35 } from "./maxhub-uc-bm35";
import { ucBm45 } from "./maxhub-uc-bm45";
import { voiceLiftSystem } from "./maxhub-voice-lift-system";

// MAXHUB audio and room control pages under /store/audio-room-control/maxhub, keyed by URL slug
export const maxhubAudioRoomProducts: Record<string, LogitechProductData> = {
  [dm30MicPod.slug]: dm30MicPod,
  [panelSp10.slug]: panelSp10,
  [tcp30mConsole.slug]: tcp30mConsole,
  [ucBm35.slug]: ucBm35,
  [ucBm45.slug]: ucBm45,
  [voiceLiftSystem.slug]: voiceLiftSystem,
};
