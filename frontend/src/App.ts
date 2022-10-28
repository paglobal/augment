import { html, h, choose } from "promethium-js";
import Home from "./pages/Home";
import { page } from "./state";
import Overlay from "./components/Overlay";
import CommandPalette from "./components/CommandPalette";

const App = () => {
  return () => html`<div
    class="min-w-[1024px] min-h-[576px] h-full w-full
           bg-[color:var(--bg-primary)]
           flex flex-col justify-center items-center"
  >
    ${h(Overlay)} ${h(CommandPalette)}
    ${choose(page(), [["Home", () => html`${h(Home)}`]])}
  </div> `;
};

export default App;
