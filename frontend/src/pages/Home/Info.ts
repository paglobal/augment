import { html, h } from "promethium-js";
import Greeting from "./Greeting";
import Time from "./Time";
import Title from "./Title";

const Info = () => {
  return () =>
    html`
      <div
        class="text-[color:var(--text-primary)] flex flex-col justify-center items-center mb-12"
      >
        ${h(Time)} ${h(Title)} ${h(Greeting)}
      </div>
    `;
};

export default Info;
