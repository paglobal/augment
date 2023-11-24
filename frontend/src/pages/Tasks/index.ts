import { Component, h, html } from "promethium-js";
import MainSection from "../../components/MainSection";

const Tasks: Component = () => {
  return () => html` ${h(MainSection, { headerText: "Tasks" })} `;
};

export default Tasks;
