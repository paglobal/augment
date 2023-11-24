import { Component, h, html } from "promethium-js";
import MainSection from "../../components/MainSection";

const TaskGroups: Component = () => {
  return () => html` ${h(MainSection, { headerText: "Task Groups" })} `;
};

export default TaskGroups;
