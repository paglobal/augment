import { adaptState } from "promethium-js";

export const [page, setPage] = adaptState("Home");
export const [showOverlay, setShowOverlay] = adaptState(false);
export const [showCommandPalette, setShowCommandPalette] = adaptState(false);
