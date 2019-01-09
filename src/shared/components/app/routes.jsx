import loadable from "loadable-components";

export const HomePage = loadable(() => import("shared/components/home-page/"));
export const PageA = loadable(() => import("shared/components/page-a/"));
export const PageB = loadable(() => import("shared/components/page-b/"));
