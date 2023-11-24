import { html } from "promethium-js";
import { overlayVisibility, setOverlayVisibility } from "../state";

const Overlay = () => {
  return () => html`
    <div
      class="w-full h-full bg-black/70 fixed top-0 left-0 ${overlayVisibility() ===
      true
        ? ""
        : "hidden"}"
      @click=${() => setOverlayVisibility(false)}
    ></div>
  `;
};

export default Overlay;
