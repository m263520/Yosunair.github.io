import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "「迷途之岛」",
      prefix: "mitu/",
      link: "mitu/",
      children: "structure",
    },
    {
      text: "「文档」",
      icon: "note",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
