import { classMap, Component, html } from "promethium-js";
import { TemplateResult } from "lit-html";

const Button: Component<{
  type: string;
  size: string;
  text?: string;
  imgTag?: TemplateResult;
  additionalClasses?: string;
  onClick?: (e: Event) => void;
}> = (props) => {
  const classes = {
    [props.additionalClasses as string]: props.additionalClasses !== undefined,
    " bg-[color:var(--btn-generic)] rounded\
        hover:w-[length:calc(var(--btn-base)+5px)] hover:h-[length:calc(var(--btn-base)+5px)]":
      props.type === "generic",
    " bg-[color:var(--btn-primary)] rounded": props.type === "primary",
    " bg-[color:var(--btn-secondary)] rounded": props.type === "secondary",
    " bg-[color:var(--btn-primary)] rounded-full": props.type === "rounded",
    " w-[length:var(--btn-base)] h-[length:var(--btn-base)]":
      props.size === "base",
    " w-[length:var(--btn-lg)] h-[length:var(--btn-lg)]":
      props.size === "large",
  };

  return () =>
    html`
      <button
        class="text-[length:var(--text-md)] text-[color:var(--btn-text)] font-medium text-center transition-all ${classMap(
          classes
        )}"
        @click=${props.onClick}
      >
        ${props.text || props.imgTag}
      </button>
    `;
};

export default Button;
