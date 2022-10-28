import { Component, html } from "promethium-js";

const Command: Component<{ text: string; action?: () => void }> = (props) => {
  return () =>
    html`
      <button
        class="text-[length:var(--text-md)] text-[color:var(--text-secondary)] mb-6"
      >
        ${props.text}
      </button>
    `;
};

export default Command;
