import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

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

  theme: theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  shouldPrefetch: true,
});
