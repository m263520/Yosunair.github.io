import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh-tc/": [
    "",
    {
      icon: "discover",
      text: "「迷途之島」",
      prefix: "mitu/",
      link: "mitu/",
      children: "structure",
    },
    {
      text: "「文檔」",
      icon: "note",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
