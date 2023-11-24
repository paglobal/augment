import { html, h } from "promethium-js";
import Button from "./components/Button";
import { revealCommandPalette } from "./state";
import Overlay from "./components/Overlay";
import CommandPalette from "./components/CommandPalette";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskGroups from "./pages/TaskGroups";
import ProgressReport from "./pages/ProgressReport";
import Settings from "./pages/Settings";
import { Switch, paths } from "./router";

const App = () => {
  return () => html`<div
    class="min-w-[1024px] min-h-[576px] h-full w-full
           bg-[color:var(--bg-primary)] relative
           flex flex-col justify-center items-center"
  >
    ${h(Switch, {
      // TODO: update components to just functions that return template results
      routes: [
        [paths.Home, Home()],
        [paths.Tasks, Tasks()],
        [paths.TaskGroups, TaskGroups()],
        [paths.ProgressReport, ProgressReport()],
        [paths.Settings, Settings()],
      ],
      default: Home(),
    })}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses:
        "absolute top-12 left-12 -translate-x-1/2 -translate-y-1/2",
      onClick: revealCommandPalette,
    })}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses:
        "absolute top-12 right-12 translate-x-1/2 -translate-y-1/2",
      onClick: revealCommandPalette,
    })}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses:
        "absolute bottom-12 left-12 -translate-x-1/2 translate-y-1/2",
      onClick: revealCommandPalette,
    })}
    ${h(Button, {
      type: "generic",
      size: "base",
      additionalClasses:
        "absolute bottom-12 right-12 translate-x-1/2 translate-y-1/2",
      onClick: revealCommandPalette,
    })}
    ${h(Overlay)} ${h(CommandPalette)}
  </div> `;
};

export default App;
