import { Component, html } from "promethium-js";
import { TemplateResult } from "lit-html";

const Button: Component<{
  type: string;
  size: string;
  text?: string;
  imgTag?: TemplateResult;
  additionalClasses?: string;
  clickHandler?: (e: Event) => void;
}> = (props) => {
  let remainingClasses = props.additionalClasses || "";

  if (props.type === "generic") {
    remainingClasses += " bg-[color:var(--btn-generic)] rounded";
  } else if (props.type === "primary") {
    remainingClasses += " bg-[color:var(--btn-primary)] rounded";
  } else if (props.type === "secondary") {
    remainingClasses += " bg-[color:var(--btn-secondary)] rounded";
  } else if (props.type === "rounded") {
    remainingClasses += " bg-[color:var(--btn-primary)] rounded-full";
  }

  if (props.size === "base") {
    remainingClasses +=
      " w-[length:var(--btn-base)] h-[length:var(--btn-base)]";
  } else if (props.size === "large") {
    remainingClasses += " w-[length:var(--btn-lg)] h-[length:var(--btn-lg)]";
  }

  return () =>
    html`
      <button
        class="text-[length:var(--text-md)] text-[color:var(--btn-text)] font-medium text-center ${remainingClasses}"
        @click=${props.clickHandler}
      >
        ${props.text || props.imgTag}
      </button>
    `;
};

export default Button;
