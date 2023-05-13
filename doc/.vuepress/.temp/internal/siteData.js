export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"迷途物语\",\"description\":\"欢迎来到烟洛-迷途，来尽情探索吧！\"},\"/zh-tc/\":{\"lang\":\"zh-TW\",\"title\":\"迷途物語\",\"description\":\"歡迎來到煙洛-迷途，來盡情探索吧！\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
