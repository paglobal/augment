import { h, html } from "promethium-js";
import Command from "./Command";
import { paths } from "../../router";

const Commands = () => {
  return () => html`
    <div class="last:mb-0 flex flex-col">
      ${h(Command, {
        text: "Tasks",
        to: paths.Tasks,
      })}
      ${h(Command, {
        text: "Task Groups",
        to: paths.TaskGroups,
      })}
      ${h(Command, {
        text: "Settings",
        to: paths.Settings,
      })}
      ${h(Command, {
        text: "Progress Report",
        to: paths.ProgressReport,
      })}
    </div>
  `;
};

export default Commands;
