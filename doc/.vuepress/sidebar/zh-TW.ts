import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh-TW/": [
    "/",
    {
      icon: "discover",
      text: "「200OK Working」",
      link: "https://200ok.work",
      children: "structure",
    },
  ],
});
