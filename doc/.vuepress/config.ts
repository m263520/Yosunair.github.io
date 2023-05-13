import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "迷途物语",
      description: "欢迎来到烟洛-迷途，来尽情探索吧！",
    },
    "/zh-tc/": {
      lang: "zh-TW",
      title: "迷途物語",
      description: "歡迎來到煙洛-迷途，來盡情探索吧！",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
