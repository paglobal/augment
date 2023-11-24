import { Component, html } from "promethium-js";

const Header: Component<{ text: string }> = (props) => {
  return () =>
    html`<div class="text-center">
      <h1
        class="text-[length:var(--text-lg)] text-[color:var(--text-primary)] pb-1 
               border-[color:var(--accent-primary)] border-b-[3px] inline-block
              "
      >
        ${props.text}
      </h1>
    </div>`;
};

export default Header;
