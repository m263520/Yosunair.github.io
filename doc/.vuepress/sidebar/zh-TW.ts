import { sidebar } from "vuepress-theme-hope";

export const zhtwSidebar = sidebar({
  "/": [
    "/",
    {
      icon: "discover",
      text: "「尤蘇奈爾基本外發(黑塔)」",
      link: "https://www.womi.ltd",
      children: "structure",
    },
  ],
});
