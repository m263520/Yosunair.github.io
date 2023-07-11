import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://skyx.womi.ltd",

  author: {
    name: "尤苏奈尔·希洛尔",
    url: "https://www.womi.ltd",
  },


  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "Yosunair/Yosunair.github.io",

  docsDir: "doc",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "到此为止啦~<div align='center'><a href='https://beian.miit.gov.cn/' target='_blank'>鲁ICP备2023014368号-1</a></div><div align='center'><a href='https://icp.gov.moe/?keyword=20233348' target='_blank'>萌ICP备20233348号</a></div>",

      displayFooter: true,

      metaLocales: {
        editLink: "在 GitHub 上修改此界面",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh-TW/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "到此為止啦~<div align='center'><a href='https://beian.miit.gov.cn/' target='_blank'>鲁ICP备2023014368号-1</a></div><div align='center'><a href='https://icp.gov.moe/?keyword=20233348' target='_blank'>萌ICP备20233348号</a></div>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上修改此界面",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh-TW/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    //comment: {
      // @ts-expect-error: You should generate and use your own comment service
    //  provider: "Waline",
    //},

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});