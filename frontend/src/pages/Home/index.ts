import { html, h } from "promethium-js";
import Button from "../../components/Button";
import Commands from "./Commands";
import Info from "./Info";

const Home = () => {
  return () => html`
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses: "fixed top-8 left-8",
    })}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses: "fixed top-8 right-8",
    })}
    ${h(Info)} ${h(Commands)}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses: "fixed bottom-8 left-8",
    })}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses: "fixed bottom-8 right-8",
    })}
  `;
};

export default Home;
