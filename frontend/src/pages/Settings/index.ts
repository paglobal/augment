import { Component, h, html } from "promethium-js";
import MainSection from "../../components/MainSection";

const Settings: Component = () => {
  return () => html` ${h(MainSection, { headerText: "Settings" })} `;
};

export default Settings;
