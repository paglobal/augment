import { html } from "promethium-js";
import { showOverlay } from "../state";

const Overlay = () => {
  return () => html`
    <div
      class="w-full h-full bg-black/70 fixed top-0 left-0 ${showOverlay() ===
      true
        ? ""
        : "hidden"}"
    ></div>
  `;
};

export default Overlay;
