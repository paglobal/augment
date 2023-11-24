import { Component, h, html, TemplateResult } from "promethium-js";
import Header from "./Header";

const MainSection: Component<{
  headerText: string;
  content?: TemplateResult;
}> = (props) => {
  return () => html`
    <div
      class="min-w-[length:calc(1024px-3rem-200px)] w-[length:calc(100%-3rem-250px)] min-h-[length:calc(576px-3rem-90px)]
               h-[length:calc(100%-3rem-90px)] bg-[color:var(--bg-primary)]
              "
    >
      ${h(Header, { text: props.headerText })}
    </div>
  `;
};

export default MainSection;
