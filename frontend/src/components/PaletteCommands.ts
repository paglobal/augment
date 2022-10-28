import { html, map } from "promethium-js";

const PaletteCommands = () => {
  const commands = [
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
    "New task",
  ];

  return () => html`
    <div
      class="h-min max-h-[300px] mr-3 my-2 overflow-y-scroll scrollbar-thin
               scrollbar-thumb-[color:var(--bg-secondary)] scrollbar-track-[color:var(--bg-primary)]"
    >
      ${map(
        commands,
        (text) => html`
          <button
            class="truncate w-[560px] p-2 mx-2.5 my-1 first:mt-0 last:mb-0 text-[length:var(--text-base)]
                     hover:bg-[color:var(--bg-secondary)] text-[color:var(--text-primary)] rounded text-left
                    "
          >
            ${text}
          </button>
        `
      )}
    </div>
  `;
};

export default PaletteCommands;
