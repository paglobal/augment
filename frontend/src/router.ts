import { Router } from "promethium-js";

const router = new Router({
  Home: "/home",
  Tasks: "/tasks",
  TaskGroups: "/taskGroups",
  ProgressReport: "/progressReport",
  Settings: "/settings",
} as const);

export const { Link, Switch, paths } = router;
export type Path = (typeof paths)[keyof typeof paths];
