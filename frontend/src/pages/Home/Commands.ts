import { h, html } from "promethium-js";
import Command from "./Command";

const Commands = () => {
  return () => html`
    <div class="last:mb-0 flex flex-col">
      ${h(Command, { text: "Tasks" })} ${h(Command, { text: "Task Groups" })}
      ${h(Command, { text: "Settings" })}
      ${h(Command, { text: "Progress Report" })}
    </div>
  `;
};

export default Commands;
