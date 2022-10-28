import { h, html } from "promethium-js";
import { showCommandPalette } from "../state";
import PaletteCommands from "./PaletteCommands";

const CommandPalette = () => {
  return () => html`
    <div
      class="w-[600px] h-min fixed top-24 left-1/2 -translate-x-1/2 
             rounded-lg bg-[color:var(--bg-primary)] flex flex-col
             ${showCommandPalette() === true ? "" : "hidden"}
            "
    >
      <input
        type="text"
        class="rounded-t-lg bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]
               outline-none px-4 py-3 placeholder:text-[color:var(--text-tertiary)] 
               text-[length:var(--text-base)] border-b border-[color:var(--stroke-tertiary)]
              "
        placeholder="Command..."
      />
      ${h(PaletteCommands)}
    </div>
  `;
};

export default CommandPalette;
