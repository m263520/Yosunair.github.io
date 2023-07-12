import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-TW",
      title: "尤蘇奈爾基本外發",
      description: "歡迎來到尤蘇奈爾基本外發，來盡情探索吧！",
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "尤苏奈尔基本外发",
      description: "欢迎来到尤苏奈尔基本外发，来尽情探索吧！",
    },
  },

  theme: hopeTheme({
    fullscreen: true,
  }),

  plugins: [
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
