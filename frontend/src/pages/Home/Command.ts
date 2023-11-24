import { Component, h, html } from "promethium-js";
import { Link, Path } from "../../router";

const Command: Component<{
  text: string;
  to: Path;
}> = (props) => {
  return () =>
    html`
      ${h(Link, {
        to: props.to,
        text: props.text,
        class: () =>
          `text-[length:var(--text-md)] text-center text-[color:var(--text-tertiary)] 
           mb-6 hover:text-[color:var(--text-primary)] transition-all`,
      })}
    `;
};

export default Command;
