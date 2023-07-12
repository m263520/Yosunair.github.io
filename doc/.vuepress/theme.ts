import { hopeTheme } from "vuepress-theme-hope";
import { zhcnNavbar, zhtwNavbar } from "./navbar/index.js";
import { zhcnSidebar, zhtwSidebar } from "./sidebar/index.js";

type WalineEmojiPresets = 'https://unpkg.com/@waline/emojis@1.1.0/bilibili';

export default hopeTheme({
  fullscreen: true,
  //custom: true,

  hostname: "https://skyx.womi.ltd",

  author: {
    name: "尤苏奈尔·希洛尔",
    url: "https://www.womi.ltd",
  },


  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "Yosunair/Yosunair.github.io",
  docsBranch: "Murong_Naiyi",

  docsDir: "doc",

  locales: {
    "/": {
      // navbar
      navbar: zhtwNavbar,

      // sidebar
      sidebar: zhtwSidebar,

      footer: "到此為止啦~<div align='center'><a href='https://beian.miit.gov.cn/' target='_blank'>鲁ICP备2023014368号-1</a></div><div align='center'><a href='https://icp.gov.moe/?keyword=20233348' target='_blank'>萌ICP备20233348号</a></div>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上修改此界面",
      },
    },
    "/zh-CN/": {
      // navbar
      navbar: zhcnNavbar,

      // sidebar
      sidebar: zhcnSidebar,

      footer: "到此为止啦~<div align='center'><a href='https://beian.miit.gov.cn/' target='_blank'>鲁ICP备2023014368号-1</a></div><div align='center'><a href='https://icp.gov.moe/?keyword=20233348' target='_blank'>萌ICP备20233348号</a></div>",

      displayFooter: true,

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
    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Waline",
      comment: true,
      serverURL: "https://www.say.womi.ltd",
      dark: 'auto',
      commentSorting: 'hottest',
      requiredMeta: ['nick', 'mail'],
      login: 'force',
      wordLimit: 555,
      pageSize: 13,
      reaction: true,
    },

    // all features are enabled for demo, only preserve features you need here
    /*prismjs : {
      light: "ateliersulphurpool-light",
      dark: "atom-dark"
    },*/
    mdEnhance: {
      card: true,
      container: true,
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
    pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cachePic: true,
       appendBase: true,
       apple: {
         icon: "/logo.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/logo.png",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "/logo.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/logo.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/logo.png",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "/logo.png",
             sizes: "192x192",
             type: "image/png",
           },
         ],
         shortcuts: [
           {
             name: "Skyx",
             short_name: "Skyx",
             url: "/skyx/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                 purpose: "maskable",
                 type: "image/png",
               },
             ],
           },
         ],
       },
     },
  },
});
