import loadable from "loadable-components";

export const HomePage = loadable(() => import("../home/"));
export const PageA = loadable(() => import("../pagea/"));
export const PageB = loadable(() => import("../pageb/"));
