import { render } from "promethium-js";
import App from "./src/App";
import "./index.css";
import "./ipc";

render(App, { renderContainer: "body" });
