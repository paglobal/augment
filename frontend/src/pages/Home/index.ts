import { html, h } from "promethium-js";
import Commands from "./Commands";
import Info from "./Info";

const Home = () => {
  return () => html` ${h(Info)} ${h(Commands)} `;
};

export default Home;
