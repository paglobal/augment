import { h, html } from "promethium-js";
import { commandPaletteVisibility } from "../../state";
import PaletteCommands from "./PaletteCommands";

const CommandPalette = () => {
  return () => html`
    <div
      class="w-[600px] h-min absolute top-1/2 left-1/2 -translate-x-1/2 
             -translate-y-1/2 rounded-lg bg-[color:var(--bg-primary)] flex 
             flex-col ${commandPaletteVisibility() === true ? "" : "hidden"}"
    >
      <input
        type="text"
        class="rounded-t-lg bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]
               outline-none px-4 py-3 placeholder:text-[color:var(--text-tertiary)] 
               text-[length:var(--text-base)] border-b border-[color:var(--stroke-tertiary)]"
        placeholder="Command..."
      />
      ${h(PaletteCommands)}
    </div>
  `;
};

export default CommandPalette;
