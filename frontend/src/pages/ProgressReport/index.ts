import { Component, h, html } from "promethium-js";
import MainSection from "../../components/MainSection";

const ProgressReport: Component = () => {
  return () => html` ${h(MainSection, { headerText: "Progress Report" })} `;
};

export default ProgressReport;
