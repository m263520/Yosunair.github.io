import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h as h$3, inject, getCurrentInstance, camelize, capitalize, Transition, resolveComponent, watch, nextTick, onUnmounted, toRef, TransitionGroup, provide, useSSRContext, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isPlainObject, isLinkMailto, isLinkTel, isLinkExternal, ensureEndingSlash, removeEndingSlash } from "@vuepress/shared";
import { useElementSize, useWindowSize, useWindowScroll, useStyleTag, useClipboard, useEventListener, useStorage, useToggle, useDebounceFn, useMutationObserver, useFullscreen, useScrollLock, useThrottleFn, usePreferredDark, useSessionStorage, onClickOutside } from "@vueuse/core";
import "ts-debounce";
import { useRouter, RouterLink, useRoute, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { pageviewCount } from "@waline/client/dist/pageview.mjs";
import { compareSync } from "bcrypt-ts/browser";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-69ba69d8.js"
  ).then(({ data }) => data),
  // path: /docs/
  "v-147825fb": () => import(
    /* webpackChunkName: "v-147825fb" */
    "./assets/index.html-2215c8ab.js"
  ).then(({ data }) => data),
  // path: /mitu/
  "v-14f47f59": () => import(
    /* webpackChunkName: "v-14f47f59" */
    "./assets/index.html-699ed3c7.js"
  ).then(({ data }) => data),
  // path: /zh-tc/
  "v-c0c7de8c": () => import(
    /* webpackChunkName: "v-c0c7de8c" */
    "./assets/index.html-15bfc619.js"
  ).then(({ data }) => data),
  // path: /zh-tc/docs/
  "v-528878da": () => import(
    /* webpackChunkName: "v-528878da" */
    "./assets/index.html-3b49acf9.js"
  ).then(({ data }) => data),
  // path: /zh-tc/mitu/
  "v-5304d238": () => import(
    /* webpackChunkName: "v-5304d238" */
    "./assets/index.html-f224ee49.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-e4bc1d3b.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"迷途物语","description":"欢迎来到烟洛-迷途，来尽情探索吧！"},"/zh-tc/":{"lang":"zh-TW","title":"迷途物語","description":"歡迎來到煙洛-迷途，來盡情探索吧！"}}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-cd97d14b.js"
  )),
  // path: /docs/
  "v-147825fb": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-147825fb" */
    "./assets/index.html-fce4a22a.js"
  )),
  // path: /mitu/
  "v-14f47f59": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-14f47f59" */
    "./assets/index.html-9e4d7dc3.js"
  )),
  // path: /zh-tc/
  "v-c0c7de8c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c0c7de8c" */
    "./assets/index.html-523b8c04.js"
  )),
  // path: /zh-tc/docs/
  "v-528878da": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-528878da" */
    "./assets/index.html-88d252ac.js"
  )),
  // path: /zh-tc/mitu/
  "v-5304d238": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5304d238" */
    "./assets/index.html-4ff48f47.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page) => page.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h$3(pageComponent.value)
    ) : (
      // fallback content
      h$3(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a$1 = freb(fleb, 2), fl$1 = _a$1[0], revfl = _a$1[1];
fl$1[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$5 = 0; i$5 < 32768; ++i$5) {
  var x$3 = (i$5 & 43690) >>> 1 | (i$5 & 21845) << 1;
  x$3 = (x$3 & 52428) >>> 2 | (x$3 & 13107) << 2;
  x$3 = (x$3 & 61680) >>> 4 | (x$3 & 3855) << 4;
  rev[i$5] = ((x$3 & 65280) >>> 8 | (x$3 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le2 = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le2[i2] = le2[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le2[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le2[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$5 = 0; i$5 < 144; ++i$5)
  flt[i$5] = 8;
for (var i$5 = 144; i$5 < 256; ++i$5)
  flt[i$5] = 9;
for (var i$5 = 256; i$5 < 280; ++i$5)
  flt[i$5] = 7;
for (var i$5 = 280; i$5 < 288; ++i$5)
  flt[i$5] = 8;
var fdt = new u8(32);
for (var i$5 = 0; i$5 < 32; ++i$5)
  fdt[i$5] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p, m2) {
  var o2 = p / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p & 7) & m2;
};
var bits16 = function(d2, p) {
  var o2 = p / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st) {
  var sl2 = dat.length;
  if (!sl2 || st && st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st;
  var noSt = !st || st.i;
  if (!st)
    st = {};
  if (!buf)
    buf = new u8(sl2 * 3);
  var cbuf = function(l3) {
    var bl2 = buf.length;
    if (l3 > bl2) {
      var nbuf = new u8(Math.max(bl2 * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl2 * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl2) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl2 = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl2);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl2; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl$1[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const c$2 = ({ name: e2 = "", color: n2 = "currentColor" }, { slots: t2 }) => {
  var o2;
  return h$3("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${e2} icon` }, (o2 = t2.default) == null ? void 0 : o2.call(t2));
};
c$2.displayName = "IconBase";
const k$3 = ({ size: e2 = 48, stroke: n2 = 4, wrapper: t2 = true, height: o2 = 2 * e2 }) => {
  const s2 = h$3("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$3("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$3("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h$3("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$3("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return t2 ? h$3("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${o2}px` }, s2) : s2;
};
k$3.displayName = "LoadingIcon";
const F$3 = (e2, { slots: n2 }) => {
  var t2;
  return ((t2 = n2.default) == null ? void 0 : t2.call(n2)) || null;
}, I$2 = () => h$3(c$2, { name: "github" }, () => h$3("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
I$2.displayName = "GitHubIcon";
const x$2 = () => h$3(c$2, { name: "gitlab" }, () => h$3("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
x$2.displayName = "GitLabIcon";
const L$2 = () => h$3(c$2, { name: "gitee" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
L$2.displayName = "GiteeIcon";
const C$2 = () => h$3(c$2, { name: "bitbucket" }, () => h$3("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
C$2.displayName = "BitbucketIcon";
const z$2 = () => h$3(c$2, { name: "source" }, () => h$3("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
z$2.displayName = "SourceIcon";
const d$2 = Array.isArray, q$2 = (e2) => typeof e2 == "function", Y$2 = (e2) => typeof e2 == "string";
var h$2 = (e2) => /^(https?:)?\/\//.test(e2), u$2 = (e2) => Object.prototype.toString.call(e2) === "[object Object]";
const oe = (e2, n2) => {
  const t2 = n2 ? n2._instance : getCurrentInstance();
  return u$2(t2 == null ? void 0 : t2.appContext.components) && (e2 in t2.appContext.components || camelize(e2) in t2.appContext.components || capitalize(camelize(e2)) in t2.appContext.components);
};
function ae() {
  const e2 = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e2.value = true;
  }), e2;
}
function ce$1(e2) {
  return ae(), computed(() => !!e2());
}
const $$3 = () => ce$1(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), le = () => {
  const e2 = $$3();
  return computed(() => e2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, ue = (e2) => {
  const n2 = useRouteLocale();
  return computed(() => e2[n2.value]);
}, Ee$2 = (e2 = "") => {
  if (e2) {
    if (typeof e2 == "number")
      return new Date(e2);
    const n2 = Date.parse(e2.toString());
    if (!Number.isNaN(n2))
      return new Date(n2);
  }
  return null;
}, Se = (e2, n2) => {
  let t2 = 1;
  for (let o2 = 0; o2 < e2.length; o2++)
    t2 += e2.charCodeAt(o2), t2 += t2 << 10, t2 ^= t2 >> 6;
  return t2 += t2 << 3, t2 ^= t2 >> 11, t2 % n2;
}, a$3 = (e2) => typeof e2 == "string", N = (e2, n2) => a$3(e2) && e2.startsWith(n2), Le$1 = (e2, n2) => a$3(e2) && e2.endsWith(n2), A$2 = Object.entries, g$4 = Object.keys, f$4 = (e2, ...n2) => {
  if (n2.length === 0)
    return e2;
  const t2 = n2.shift() || null;
  return t2 && A$2(t2).forEach(([o2, s2]) => {
    o2 === "__proto__" || o2 === "constructor" || (u$2(e2[o2]) && u$2(s2) ? f$4(e2[o2], s2) : d$2(s2) ? e2[o2] = [...s2] : u$2(s2) ? e2[o2] = { ...s2 } : e2[o2] = t2[o2]);
  }), f$4(e2, ...n2);
}, _ = (e2) => u$2(e2) && a$3(e2.name), Me$1 = (e2, n2 = false) => e2 ? d$2(e2) ? e2.map((t2) => a$3(t2) ? { name: t2 } : _(t2) ? t2 : null).filter((t2) => t2 !== null) : a$3(e2) ? [{ name: e2 }] : _(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], v$3 = (e2, n2) => {
  if (e2) {
    if (d$2(e2) && e2.every(a$3))
      return e2;
    if (a$3(e2))
      return [e2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, $e$1 = (e2) => v$3(e2, "category"), Ne$1 = (e2) => v$3(e2, "tag"), _e$1 = (e2) => N(e2, "/");
const j$1 = /#.*$/u, T$2 = (e2) => {
  const n2 = j$1.exec(e2);
  return n2 ? n2[0] : "";
}, b$3 = (e2) => decodeURI(e2).replace(j$1, "").replace(/(index)?\.(md|html)$/, ""), Te = (e2, n2) => {
  if (n2 === void 0)
    return false;
  const t2 = b$3(e2.path), o2 = b$3(n2), s2 = T$2(n2);
  return s2 ? s2 === e2.hash && (!o2 || t2 === o2) : t2 === o2;
};
const Re$1 = (e2) => {
  const n2 = Buffer.from(e2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(n2, true)));
}, We$1 = (e2) => h$2(e2) ? e2 : `https://github.com/${e2}`, Oe$1 = (e2) => !h$2(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, B$2 = (e2, ...n2) => {
  const t2 = e2.resolve(...n2), o2 = t2.matched[t2.matched.length - 1];
  if (!(o2 != null && o2.redirect))
    return t2;
  const { redirect: s2 } = o2, r2 = q$2(s2) ? s2(t2) : s2, l2 = Y$2(r2) ? { path: r2 } : r2;
  return B$2(e2, { hash: t2.hash, query: t2.query, params: t2.params, ...l2 });
};
const badge = "";
const t$3 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h$3("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$3.displayName = "Badge";
const fontIcon = "";
var m$4 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"iconfont icon-"}${o2.icon}`;
    return n2.push(t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), g$4(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$3("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const l$3 = () => h$3(c$2, { name: "back-to-top" }, () => [h$3("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$3("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$3.displayName = "BackToTopIcon";
const balloon = "";
const backToTop = "";
var y$2 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 100 }, noProgress: Boolean }, setup(e2) {
  const l2 = usePageFrontmatter(), s2 = ue({ "/zh-tc/": { "backToTop": "返回頂部" }, "/": { "backToTop": "返回顶部" } }), a2 = ref(), { height: n2 } = useElementSize(a2), { height: p } = useWindowSize(), { y: t2 } = useWindowScroll(), u2 = computed(() => l2.value.backToTop !== false && t2.value > e2.threshold), c2 = computed(() => t2.value / (n2.value - p.value));
  return onMounted(() => {
    a2.value = document.body;
  }), () => h$3(Transition, { name: "fade" }, () => u2.value ? h$3("button", { type: "button", class: "back-to-top", "aria-label": s2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, [e2.noProgress ? null : h$3("svg", { class: "scroll-progress" }, h$3("circle", { cx: "50%", cy: "50%", r: "calc(50% - 2px)", style: { "stroke-dasharray": `${Math.PI * c2.value * 100}% ${Math.PI * 100}%` } })), h$3(l$3)]) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!oe("Badge"))
      app.component("Badge", t$3);
    if (!oe("FontIcon"))
      app.component("FontIcon", m$4);
  },
  setup: () => {
    useStyleTag(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h$3(y$2, {})
  ]
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
const autoCatalog = "";
var D$1 = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(c2, { slots: h2 }) {
  const f2 = ue({ "/zh-tc/": { "title": "目錄" }, "/": { "title": "目录" } }), O2 = usePageData(), g2 = useRouter(), T2 = useSiteData(), v2 = (i2) => {
    const u2 = i2["I"];
    return typeof u2 > "u" || u2;
  }, E2 = () => {
    const i2 = c2.base || O2.value.path.replace(/\/[^/]+$/, "/"), u2 = g2.getRoutes(), p = [];
    return u2.filter(({ meta: l2, path: e2 }) => {
      if (!N(e2, i2) || e2 === i2)
        return false;
      if (i2 === "/") {
        const t2 = g$4(T2.value.locales).filter((n2) => n2 !== "/");
        if (e2 === "/404.html" || t2.some((n2) => N(e2, n2)))
          return false;
      }
      return (Le$1(e2, ".html") && !Le$1(e2, "/index.html") || Le$1(e2, "/")) && v2(l2);
    }).map(({ path: l2, meta: e2 }) => {
      const t2 = l2.substring(i2.length).split("/").length;
      return { title: e2["t"] || "", icon: e2["i"], base: l2.replace(/\/[^/]+\/?$/, "/"), order: e2["O"] || null, level: Le$1(l2, "/") ? t2 - 1 : t2, path: l2 };
    }).filter(({ title: l2, level: e2 }) => typeof l2 == "string" && l2 && e2 <= c2.level).sort(({ title: l2, level: e2, path: t2, order: n2 }, { title: r2, level: o2, path: d2, order: s2 }) => e2 - o2 || (Le$1(t2, "/index.html") ? -1 : Le$1(d2, "/index.html") ? 1 : n2 === null ? s2 === null ? l2.localeCompare(r2) : s2 : s2 === null ? n2 : n2 > 0 ? s2 > 0 ? n2 - s2 : -1 : s2 < 0 ? n2 - s2 : 1)).forEach((l2) => {
      var e2;
      const { base: t2, level: n2 } = l2;
      switch (n2) {
        case 1:
          p.push(l2);
          break;
        case 2: {
          const r2 = p.find((o2) => o2.path === t2);
          r2 && (r2.children ?? (r2.children = [])).push(l2);
          break;
        }
        default: {
          const r2 = p.find((o2) => o2.path === t2.replace(/\/[^/]+\/$/, "/"));
          if (r2) {
            const o2 = (e2 = r2.children) == null ? void 0 : e2.find((d2) => d2.path === t2);
            o2 && (o2.children ?? (o2.children = [])).push(l2);
          }
        }
      }
    }), p;
  }, b2 = computed(() => E2());
  return () => h$3("div", { class: "auto-catalog-wrapper" }, [h$3("h2", { class: "main-title" }, f2.value.title), b2.value.map(({ children: i2 = [], icon: u2, path: p, title: l2 }, e2) => [h$3("h3", { id: l2, class: ["child-title", { "has-children": i2.length }] }, [h$3("a", { href: `#${l2}`, class: "header-anchor" }, "#"), h$3(RouterLink, { class: "catalog-title", to: p }, () => [c2.index ? `${e2 + 1}.` : null, u2 && h2.icon ? h2.icon({ icon: u2 }) : null, l2 || "Unknown"])]), i2.length ? h$3("ul", { class: "child-catalog-wrapper" }, i2.map(({ children: t2 = [], icon: n2, path: r2, title: o2 }, d2) => h$3("li", { class: "child-catalog-item" }, [h$3("div", { class: ["sub-title", { "has-children": t2.length }] }, [h$3("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h$3(RouterLink, { class: "catalog-title", to: r2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}` : null, n2 && h2.icon ? h2.icon({ icon: n2 }) : null, o2 || "Unknown"])]), t2.length ? h$3("div", { class: "sub-catalog-wrapper" }, t2.map(({ icon: s2, path: A2, title: L2 }, $2) => h$3(RouterLink, { class: "sub-catalog-item", to: A2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}.${$2 + 1}` : null, s2 && h2.icon ? h2.icon({ icon: s2 }) : null, L2 || "Unknown"]))) : null]))) : null])]);
} }), K$2 = defineClientConfig({ enhance: ({ app: c2 }) => {
  oe("AutoCatalog", c2) || c2.component("AutoCatalog", (h2) => h$3(D$1, h2, { icon: ({ icon: f2 }) => h$3(resolveComponent("HopeIcon"), { icon: f2 }) }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h$3("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$3("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$3("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$3("span", [
      svg,
      h$3("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$3(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$dJvASPKi5vBavM7/h4snl.U4/eetsC4.VXf5MGeQCCmEszVZtO4R."],"/zh-tc/demo/encrypt.html":["$2a$10$6BErs9UhdrC8.aSbR8uol.1jJ09EEGIhJa39SbXLYkdNBagetrJkK"]}},"author":{"name":"迷途之女 希洛尔","url":"HTTPS://迷途之女.Womi.Ltd"},"logo":"/logo.svg","repo":"Murong_Naiyi/MiTu","docsDir":"demo/theme-docs/src","locales":{"/zh-tc/":{"lang":"zh-TW","navbarLocales":{"langName":"繁體中文","selectLangAriaLabel":"選擇語言"},"metaLocales":{"author":"作者","date":"寫作日期","origin":"原創","views":"訪問量","category":"分類","tag":"標籤","readingTime":"閱讀時間","words":"字數","toc":"此頁內容","prev":"上一頁","next":"下一頁","lastUpdated":"上次編輯於","contributors":"貢獻者","editLink":"在 GitHub 上修改此介面","print":"打印"},"outlookLocales":{"themeColor":"主題色","darkmode":"主題模式","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"頁面已加密","placeholder":"輸入密碼","remember":"記憶密碼","errorHint":"請輸入正確密碼"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"頁面不存在","notFoundMsg":["這裡什麼也沒有","我們是怎麼來到這兒的？","這 是 四 零 四 !","看起来你訪問了一個失效的鏈結"],"back":"返回上一頁","home":"帶我回家","openInNewWindow":"Open in new window"},"navbar":["/zh-tc",{"text":"「文檔」","icon":"creative","link":"/zh-tc/docs/"},{"text":"「迷途之島」","icon":"discover","link":"https://www.womi.ltd/share/"}],"sidebar":{"/zh-tc/":["",{"icon":"discover","text":"「迷途之島」","prefix":"mitu/","link":"mitu/","children":"structure"},{"text":"「文檔」","icon":"note","prefix":"docs/","children":"structure"}]},"footer":"默认页脚到此為止啦~","displayFooter":true},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上修改此界面","print":"打印"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"「文档」","icon":"creative","link":"/docs/"},{"text":"「迷途之岛」","icon":"discover","link":"https://www.womi.ltd/share/"}],"sidebar":{"/":["",{"icon":"discover","text":"「迷途之岛」","prefix":"mitu/","link":"mitu/","children":"structure"},{"text":"「文档」","icon":"note","prefix":"docs/","children":"structure"}]},"footer":"到此为止啦~","displayFooter":true}}}');
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const waline$1 = "";
const waline = "";
const e$4 = { "provider": "Waline", "dark": 'html[data-theme="dark"]' }, I$1 = { "/zh-tc/": { "placeholder": "請留言。(填寫信箱可在被回覆時收到郵件提醒)" }, "/": { "placeholder": "请留言。(填写邮箱可在被回复时收到邮件提醒)" } }, i$4 = !!e$4.serverURL;
import("./assets/waline-meta-651f1b6d.js");
var M$1 = defineComponent({ name: "WalineComment", setup() {
  const u2 = usePageData(), l2 = usePageFrontmatter(), p = usePageLang(), s2 = ue(I$1);
  let n2;
  const v2 = computed(() => {
    if (!i$4)
      return false;
    const r2 = e$4.comment !== false, t2 = l2.value.comment;
    return !!t2 || r2 !== false && t2 !== false;
  }), c2 = computed(() => {
    if (!i$4)
      return false;
    const r2 = e$4.pageview !== false, t2 = l2.value.pageview;
    return !!t2 || r2 !== false && t2 !== false;
  }), o2 = computed(() => withBase(u2.value.path)), d2 = computed(() => ({ lang: p.value === "zh-CN" ? "zh-CN" : "en", locale: s2.value, dark: "html.dark", ...e$4, path: o2.value }));
  return onMounted(() => {
    watch(o2, () => {
      n2 == null || n2(), c2.value && nextTick().then(() => {
        setTimeout(() => {
          n2 = pageviewCount({ serverURL: e$4.serverURL, path: o2.value });
        }, e$4.delay || 800);
      });
    }, { immediate: true });
  }), () => v2.value ? h$3("div", { class: "waline-wrapper", id: "comment" }, i$4 ? h$3(defineAsyncComponent({ loader: async () => (await import("@waline/client/dist/component.mjs")).Waline, loadingComponent: k$3 }), d2.value) : []) : null;
} });
const i$3 = { "provider": "Waline", "dark": 'html[data-theme="dark"]' }.comment !== false, d$1 = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const o2 = usePageFrontmatter(), m2 = computed(() => o2.value.comment || i$3 && o2.value.comment !== false);
  return () => h$3(M$1, { darkmode: e2.darkmode, style: { display: m2.value ? "block" : "none" } });
} });
var l$2 = defineClientConfig({ enhance: ({ app: e2 }) => {
  e2.component("CommentService", d$1);
} });
const button = "";
const S$5 = 800, u$1 = 2e3, M = { "/zh-tc/": { "copy": "複製代碼", "copied": "已複製", "hint": "複製成功" }, "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, n$2 = false, P$2 = ['.theme-hope-content div[class*="language-"] pre'], m$3 = false;
const l$1 = /* @__PURE__ */ new Map(), T$1 = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = ue(M), g2 = usePageData(), i2 = le();
  const y2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.type = "button", e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P$2.forEach((e2) => {
        document.querySelectorAll(e2).forEach(y2);
      }), o2();
    }, S$5);
  })), d2 = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l$1.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l$1.delete(t2);
      }, u$1);
      if (l$1.set(t2, c2), n$2)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m$3) && p(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d2(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d2(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m$3) && p();
    });
  });
};
var Y$1 = defineClientConfig({ setup: () => {
  T$1();
} });
const chart = "";
const f$3 = (t2, n2) => n2 === "json" ? JSON.parse(t2) : new Function(`let config,__chart_js_config__;
{
${t2}
__chart_js_config__=config;
}
return __chart_js_config__;`)();
var g$3 = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(t2) {
  const n2 = ref(), a2 = ref(), i2 = ref(true);
  return onMounted(async () => {
    const [{ default: r2 }] = await Promise.all([import("chart.js/auto"), new Promise((c2) => setTimeout(c2, 800))]);
    r2.defaults.maintainAspectRatio = false;
    const s2 = f$3(Re$1(t2.config), t2.type), l2 = a2.value.getContext("2d");
    new r2(l2, s2), i2.value = false;
  }), () => [t2.title ? h$3("div", { class: "chart-title" }, decodeURIComponent(t2.title)) : null, i2.value ? h$3(k$3, { class: "chart-loading", height: 192 }) : null, h$3("div", { ref: n2, class: "chart-wrapper", id: t2.id, style: { display: i2.value ? "none" : "block" } }, h$3("canvas", { ref: a2, height: 400 }))];
} });
const codeTabs = "";
const o$3 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$4 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: v2 }) {
  const l2 = ref(e2.active), u2 = ref([]), c2 = () => {
    if (e2.tabId) {
      const { title: t2, id: a2 = t2 } = e2.data[l2.value];
      o$3.value[e2.tabId] = a2;
    }
  }, b2 = (t2 = l2.value) => {
    l2.value = t2 < u2.value.length - 1 ? t2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (t2 = l2.value) => {
    l2.value = t2 > 0 ? t2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p = (t2, a2) => {
    if (t2.key === " " || t2.key === "Enter" ? (t2.preventDefault(), l2.value = a2) : t2.key === "ArrowRight" ? (t2.preventDefault(), b2()) : t2.key === "ArrowLeft" && (t2.preventDefault(), f2()), e2.tabId) {
      const { title: d2, id: i2 = d2 } = e2.data[l2.value];
      o$3.value[e2.tabId] = i2;
    }
  }, y2 = () => {
    if (e2.tabId) {
      const t2 = e2.data.findIndex(({ title: a2, id: d2 = a2 }) => o$3.value[e2.tabId] === d2);
      if (t2 !== -1)
        return t2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = y2(), watch(() => o$3.value[e2.tabId], (t2, a2) => {
      if (e2.tabId && t2 !== a2) {
        const d2 = e2.data.findIndex(({ title: i2, id: r2 = i2 }) => r2 === t2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => e2.data.length ? h$3("div", { class: "code-tabs" }, [h$3("div", { class: "code-tabs-nav", role: "tablist" }, e2.data.map(({ title: t2 }, a2) => {
    const d2 = a2 === l2.value;
    return h$3("button", { type: "button", ref: (i2) => {
      i2 && (u2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${e2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p(i2, a2) }, t2);
  })), e2.data.map(({ title: t2, id: a2 = t2 }, d2) => {
    var i2;
    const r2 = d2 === l2.value;
    return h$3("div", { class: ["code-tab", { active: r2 }], id: `codetab-${e2.id}-${d2}`, role: "tabpanel", "aria-expanded": r2 }, (i2 = v2[`tab${d2}`]) == null ? void 0 : i2.call(v2, { title: t2, value: a2, isActive: r2 }));
  })]) : null;
} });
const codeGroup = "";
const c$1 = ({ active: p = false }, { slots: u2 }) => {
  var e2;
  return h$3("div", { class: ["code-group-item", { active: p }], "aria-selected": p }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c$1.displayName = "CodeGroupItem";
const h$1 = defineComponent({ name: "CodeGroup", setup(p, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h$3("div", { class: "code-group" }, [h$3("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h$3("button", { type: "button", ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m2(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$1 = "";
const q$1 = () => h$3(c$2, { name: "back" }, () => h$3("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$2 = () => h$3(c$2, { name: "home" }, () => h$3("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$2 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$2 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', l = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
const codeDemo = "";
const S$3 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, E = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, B$1 = (e2, s2, t2) => {
  const a2 = document.createElement(e2);
  return isPlainObject(s2) && g$4(s2).forEach((n2) => {
    if (n2.indexOf("data"))
      a2[n2] = s2[n2];
    else {
      const o2 = n2.replace("data", "");
      a2.dataset[o2] = s2[n2];
    }
  }), t2 && t2.forEach((n2) => {
    a2.appendChild(n2);
  }), a2;
}, w$1 = (e2) => ({ ...S$3, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...S$3.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...S$3.cssLib || [], ...e2.cssLib || []])) }), m$2 = (e2, s2) => {
  if (e2[s2] !== void 0)
    return e2[s2];
  const t2 = new Promise((a2) => {
    var n2;
    const o2 = document.createElement("script");
    o2.src = s2, (n2 = document.querySelector("body")) == null || n2.appendChild(o2), o2.onload = () => {
      a2();
    };
  });
  return e2[s2] = t2, t2;
}, k$2 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = B$1("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, V$1 = (e2, s2, t2) => {
  const a2 = t2.getScript();
  if (a2 && Array.from(s2.childNodes).every((n2) => n2.nodeName !== "SCRIPT")) {
    const n2 = document.createElement("script");
    n2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .code-demo-container').shadowRoot;
${a2}}`)), s2.appendChild(n2);
  }
}, H$1 = (e2) => {
  const s2 = g$4(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((a2) => {
    const n2 = s2.filter((o2) => E[a2].types.includes(o2));
    if (n2.length) {
      const o2 = n2[0];
      t2[a2] = [e2[o2].replace(/^\n|\n$/g, ""), E[a2].map[o2] || o2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, $$2 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), x$1 = (e2) => `<div id="app">
${$$2(e2)}
</div>`, I = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, J = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), O$1 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, q = (e2, s2) => {
  const t2 = w$1(s2), a2 = e2.js[0] || "";
  return { ...t2, html: $$2(e2.html[0] || ""), js: a2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var n2;
    return t2.useBabel ? ((n2 = window.Babel.transform(a2, { presets: ["es2015"] })) == null ? void 0 : n2.code) || "" : a2;
  } };
}, F$2 = /<template>([\s\S]+)<\/template>/u, G$1 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u, Y = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u, K$1 = (e2, s2) => {
  const t2 = w$1(s2), a2 = e2.html[0] || "", n2 = F$2.exec(a2), o2 = G$1.exec(a2), d2 = Y.exec(a2), u2 = n2 ? n2[1].replace(/^\n|\n$/g, "") : "", [i2 = "", c2 = ""] = o2 ? [o2[4].replace(/^\n|\n$/g, ""), o2[3]] : [], [l2 = "", h2 = ""] = d2 ? [d2[4].replace(/^\n|\n$/g, ""), d2[3]] : [], f2 = c2 === "" && (h2 === "" || h2 === "css");
  return { ...t2, html: x$1(u2), js: J(i2), css: l2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var y2, p;
    const g2 = s2.useBabel ? ((p = (y2 = window.Babel) == null ? void 0 : y2.transform(i2, { presets: ["es2015"] })) == null ? void 0 : p.code) || "" : i2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${O$1(g2)};appOptions.template=\`${u2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, U$1 = (e2, s2) => {
  const t2 = w$1(s2);
  return { ...t2, html: x$1(""), js: I(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var a2, n2;
    const o2 = ((n2 = (a2 = window.Babel) == null ? void 0 : a2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : n2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${O$1(o2)}))`;
  } };
}, v$1 = {}, W = (e2) => Promise.all([m$2(v$1, e2.babel), m$2(v$1, e2.react), m$2(v$1, e2.reactDOM)]), z$1 = (e2) => {
  const s2 = [m$2(v$1, e2.vue)];
  return e2.useBabel && s2.push(m$2(v$1, e2.babel)), Promise.all(s2);
}, Q$1 = (e2) => e2.useBabel ? m$2(v$1, e2.babel) : Promise.resolve();
var X = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: s2 }) {
  const [t2, a2] = useToggle(false), n2 = ref(), o2 = ref(), d2 = ref("0"), u2 = ref(false), i2 = computed(() => JSON.parse(e2.config ? Re$1(e2.config) : "{}")), c2 = computed(() => {
    const p = JSON.parse(Re$1(e2.code));
    return H$1(p);
  }), l2 = computed(() => e2.type === "react" ? U$1(c2.value, i2.value) : e2.type === "vue" ? K$1(c2.value, i2.value) : q(c2.value, i2.value)), h2 = computed(() => l2.value.isLegal), f2 = (p = false) => {
    const g2 = n2.value.attachShadow({ mode: "open" }), L2 = document.createElement("div");
    L2.classList.add("code-demo-app"), g2.appendChild(L2), h2.value ? (p && (L2.innerHTML = l2.value.html), k$2(g2, l2.value), V$1(e2.id, g2, l2.value), d2.value = "0") : d2.value = "auto", u2.value = true;
  }, y2 = () => {
    switch (e2.type) {
      case "react":
        return W(l2.value).then(() => f2());
      case "vue":
        return z$1(l2.value).then(() => f2());
      default:
        return Q$1(l2.value).then(() => f2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      y2();
    }, 800);
  }), () => {
    var p;
    return h$3("div", { class: "code-demo-wrapper", id: e2.id }, [h$3("div", { class: "code-demo-header" }, [l2.value.isLegal ? h$3("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["toggle-button", t2.value ? "down" : "end"], onClick: () => {
      d2.value = t2.value ? "0" : `${o2.value.clientHeight + 13.8}px`, a2();
    } }) : null, e2.title ? h$3("span", { class: "title" }, decodeURIComponent(e2.title)) : null, l2.value.isLegal && l2.value.jsfiddle !== false ? h$3("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$3("input", { type: "hidden", name: "html", value: l2.value.html }), h$3("input", { type: "hidden", name: "js", value: l2.value.js }), h$3("input", { type: "hidden", name: "css", value: l2.value.css }), h$3("input", { type: "hidden", name: "wrap", value: "1" }), h$3("input", { type: "hidden", name: "panel_js", value: "3" }), h$3("input", { type: "hidden", name: "resources", value: [...l2.value.cssLib, ...l2.value.jsLib].join(",") }), h$3("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$2, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !l2.value.isLegal || l2.value.codepen !== false ? h$3("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$3("input", { type: "hidden", name: "data", value: JSON.stringify({ html: l2.value.html, js: l2.value.js, css: l2.value.css, js_external: l2.value.jsLib.join(";"), css_external: l2.value.cssLib.join(";"), layout: l2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : l2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: l2.value.codepenEditors }) }), h$3("button", { type: "submit", innerHTML: o$2, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), u2.value ? null : h$3(k$3, { class: "code-demo-loading" }), h$3("div", { ref: n2, class: "code-demo-container", style: { display: h2.value && u2.value ? "block" : "none" } }), h$3("div", { class: "code-demo-code-wrapper", style: { height: d2.value } }, h$3("div", { ref: o2, class: "code-demo-codes" }, (p = s2.default) == null ? void 0 : p.call(s2)))]);
  };
} });
const echarts = "";
const g$2 = (e2, i2, n2) => i2 === "js" ? new Function("myChart", `let width,height,option,__echarts_config__;
{
${e2}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n2) : { option: JSON.parse(e2) };
var f$2 = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const i2 = ref(true), n2 = ref();
  let t2;
  return useEventListener("resize", useDebounceFn(() => t2 == null ? void 0 : t2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((r2) => setTimeout(r2, 800))]).then(([r2]) => {
      t2 = r2.init(n2.value);
      const { option: a2, ...l2 } = g$2(Re$1(e2.config), e2.type, t2);
      t2.resize(l2), t2.setOption(a2), i2.value = false;
    });
  }), onUnmounted(() => {
    t2 == null || t2.dispose();
  }), () => [e2.title ? h$3("div", { class: "echarts-title" }, decodeURIComponent(e2.title)) : null, h$3("div", { class: "echarts-wrapper" }, [h$3("div", { ref: n2, class: "echarts-container", id: e2.id }), i2.value ? h$3(k$3, { class: "echarts-loading", height: 360 }) : null])];
} });
const figure = "";
const flowchart = "";
var f$1 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F$1 = { ...f$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, b$2 = { ...f$1, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, y$1 = { ...f$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, s$1 = { ant: F$1, vue: y$1, pie: b$2 }, g$1 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(l2) {
  let o2 = null;
  const p = ref(), n2 = ref(true), t2 = ref(1), r2 = computed(() => s$1[l2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${l2.preset}`), s$1.vue)), c2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(Re$1(l2.code)), t2.value = c2(window.innerWidth), n2.value = false, o2.draw(l2.id, { ...r2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = c2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(l2.id, { ...r2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h$3(k$3, { class: "flowchart-loading", height: 192 }) : null, h$3("div", { ref: p, class: ["flowchart-wrapper", l2.preset], id: l2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const o$1 = { useMaxWidth: false }, T = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var g = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const n2 = ref(), t2 = ref(""), a2 = ref(false), s2 = computed(() => Re$1(e2.code)), f2 = async () => Promise.all([import("mermaid"), new Promise((r2) => setTimeout(r2, 800))]).then(async ([{ default: r2 }]) => {
    r2.initialize({ theme: "base", themeVariables: T(a2.value), flowchart: o$1, sequence: o$1, journey: o$1, gantt: o$1, er: o$1, pie: o$1, ...{}, startOnLoad: false }), t2.value = (await r2.render(e2.id, s2.value)).svg;
  });
  return onMounted(() => {
    const r2 = document.documentElement, i2 = () => r2.classList.contains("dark") || r2.getAttribute("data-theme") === "dark";
    a2.value = i2(), f2(), useMutationObserver(r2, () => {
      a2.value = i2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(a2, () => f2());
  }), () => h$3("div", { ref: n2, class: "mermaid-wrapper" }, t2.value ? h$3("div", { class: "mermaid-content", innerHTML: t2.value }) : h$3(k$3, { class: "mermaid-loading", height: 96 }));
} });
const reveal = "";
const o = () => import("reveal.js/plugin/highlight/highlight.esm.js"), t$2 = () => import("reveal.js/plugin/markdown/markdown.esm.js"), e$3 = () => import("reveal.js/plugin/math/math.esm.js"), r = () => import("reveal.js/plugin/notes/notes.esm.js"), a$1 = () => import("reveal.js/dist/reveal.esm.js"), i$2 = () => import("reveal.js/plugin/search/search.esm.js"), c = () => import("reveal.js/plugin/zoom/zoom.esm.js");
const useReveal = () => [a$1(), t$2(), o(), e$3(), i$2(), r(), c()];
const index = "";
const leagueGothic = "";
const sourceSansPro = "";
var S$2 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const t2 = usePageFrontmatter(), s2 = ref(""), u2 = ref(true), d2 = ref();
  let i2 = null;
  const m2 = async (e2) => {
    const p = [new Promise((o2) => setTimeout(o2, 800)), ...useReveal()], [, c2, ...v2] = await Promise.all(p), n2 = new c2.default(e2, { plugins: v2.map(({ default: o2 }) => o2) });
    return await n2.initialize({ backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...t2.value.reveal || {}, embedded: t2.value.layout !== "Slide" }), n2.configure({ backgroundTransition: "slide" }), n2;
  };
  return onMounted(async () => {
    const e2 = d2.value;
    e2 && (s2.value = Re$1(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), i2 = await m2(e2), u2.value = false);
  }), onUnmounted(() => {
    i2 == null || i2.destroy();
  }), () => h$3("div", { class: "presentation-wrapper" }, [h$3("div", { ref: d2, class: ["reveal", "reveal-viewport"] }, h$3("div", { class: "slides", innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s2.value}<\/script></section>` })), u2.value ? h$3(k$3, { class: "reveal-loading", height: 400 }) : null]);
} });
const playground = "";
var i$1 = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(r2) {
  return () => [h$3("div", { class: "playground-wrapper" }, [h$3("div", { class: "title-wrapper" }, [r2.title ? h$3("div", { class: "title" }, decodeURIComponent(r2.title)) : null, h$3("div", { class: "actions" }, [h$3("a", { class: "action", href: decodeURIComponent(r2.link), target: "_blank", innerHTML: l })])]), h$3("div", { class: "playground-container" }, h$3("iframe", { src: decodeURIComponent(r2.link) }))])];
} });
const tabs = "";
const v = useStorage("VUEPRESS_TAB_STORE", {});
var S$1 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(a2, { slots: o2 }) {
  const l2 = ref(a2.active), u2 = ref([]), s2 = () => {
    if (a2.tabId) {
      const { title: t2, id: e2 = t2 } = a2.data[l2.value];
      v.value[a2.tabId] = e2;
    }
  }, b2 = (t2 = l2.value) => {
    l2.value = t2 < u2.value.length - 1 ? t2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (t2 = l2.value) => {
    l2.value = t2 > 0 ? t2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p = (t2, e2) => {
    t2.key === " " || t2.key === "Enter" ? (t2.preventDefault(), l2.value = e2) : t2.key === "ArrowRight" ? (t2.preventDefault(), b2()) : t2.key === "ArrowLeft" && (t2.preventDefault(), f2()), s2();
  }, m2 = () => {
    if (a2.tabId) {
      const t2 = a2.data.findIndex(({ title: e2, id: i2 = e2 }) => v.value[a2.tabId] === i2);
      if (t2 !== -1)
        return t2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => v.value[a2.tabId], (t2, e2) => {
      if (a2.tabId && t2 !== e2) {
        const i2 = a2.data.findIndex(({ title: r2, id: n2 = r2 }) => n2 === t2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a2.data.length ? h$3("div", { class: "tab-list" }, [h$3("div", { class: "tab-list-nav", role: "tablist" }, a2.data.map(({ title: t2 }, e2) => {
    const i2 = e2 === l2.value;
    return h$3("button", { type: "button", ref: (r2) => {
      r2 && (u2.value[e2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${a2.id}-${e2}`, "aria-selected": i2, onClick: () => {
      l2.value = e2, s2();
    }, onKeydown: (r2) => p(r2, e2) }, t2);
  })), a2.data.map(({ title: t2, id: e2 = t2 }, i2) => {
    var r2;
    const n2 = i2 === l2.value;
    return h$3("div", { class: ["tab-item", { active: n2 }], id: `tab-${a2.id}-${i2}`, role: "tabpanel", "aria-expanded": n2 }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: t2, value: e2, isActive: n2 }));
  })]) : null;
} });
const tasklist = "";
const katex_min = "";
const katex = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", g$3);
    app.component("CodeTabs", S$4);
    if (!oe("CodeGroup", app))
      app.component("CodeGroup", h$1);
    if (!oe("CodeGroupItem", app))
      app.component("CodeGroupItem", c$1);
    app.component("CodeDemo", X);
    app.component("ECharts", f$2);
    app.component("FlowChart", g$1);
    app.component("Mermaid", g);
    app.component("Presentation", S$2);
    app.component("Playground", i$1);
    app.component("Tabs", S$1);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-9725a89b.js")));
  }
});
const photoswipe = "";
const photoSwipe = "";
const C$1 = ".theme-hope-content :not(a) > img:not([no-view])", P$1 = { "/zh-tc/": { "closeTitle": "關閉", "downloadTitle": "下載圖片", "fullscreenTitle": "切換全屏", "zoomTitle": "縮放", "arrowPrevTitle": "上一個 (左箭頭)", "arrowNextTitle": "下一個 (右箭頭)" }, "/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" } }, k$1 = 800, L$1 = {}, x = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>', A$1 = (e2) => isString(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((l2) => Array.from(document.querySelectorAll(l2))).flat(), h = (e2) => new Promise((l2, m2) => {
  e2.complete ? l2({ type: "image", element: e2, src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt, msrc: e2.src }) : (e2.onload = () => l2(h(e2)), e2.onerror = (d2) => m2(d2));
}), H = () => {
  const { isSupported: e2, toggle: l2 } = useFullscreen(), m2 = ue(P$1), d2 = usePageData();
  let n2;
  const v2 = (a2) => {
    a2.on("uiRegister", () => {
      e2 && a2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
        l2();
      } }), a2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, o2) => {
        r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), o2.on("change", () => {
          r2.setAttribute("href", o2.currSlide.data.src);
        });
      } }), a2.ui.registerElement({ name: "bulletsIndicator", className: "photo-swipe-bullets-indicator", appendTo: "wrapper", onInit: (r2, o2) => {
        const t2 = [];
        let i2 = -1;
        for (let s2 = 0; s2 < o2.getNumItems(); s2++) {
          const c2 = document.createElement("div");
          c2.className = "photo-swipe-bullet", c2.onclick = (g2) => {
            o2.goTo(t2.indexOf(g2.target));
          }, t2.push(c2), r2.appendChild(c2);
        }
        o2.on("change", () => {
          i2 >= 0 && t2[i2].classList.remove("active"), t2[o2.currIndex].classList.add("active"), i2 = o2.currIndex;
        });
      } });
    });
  }, u2 = () => Promise.all([import("photoswipe"), nextTick().then(() => new Promise((a2) => setTimeout(a2, k$1)).then(() => A$1(C$1)))]).then(([{ default: a2 }, r2]) => {
    const o2 = r2.map((t2) => ({ html: x, element: t2, msrc: t2.src }));
    r2.forEach((t2, i2) => {
      const s2 = () => {
        n2 = new a2({ preloaderDelay: 0, showHideAnimationType: "zoom", ...m2.value, ...L$1, dataSource: o2, index: i2, ...{ closeOnVerticalDrag: true, wheelToZoom: false } }), v2(n2), n2.addFilter("thumbEl", () => t2), n2.addFilter("placeholderSrc", () => t2.src), n2.init();
      };
      t2.style.cursor = "zoom-in", t2.addEventListener("click", () => {
        s2();
      }), t2.addEventListener("keypress", ({ key: c2 }) => {
        c2 === "Enter" && s2();
      });
    }), r2.forEach((t2, i2) => {
      h(t2).then((s2) => {
        o2.splice(i2, 1, s2), n2 == null || n2.refreshSlideContent(i2);
      });
    });
  });
  onMounted(() => {
    useEventListener("wheel", () => {
      n2 == null || n2.close();
    }), u2(), watch(() => d2.value.path, () => u2());
  });
};
var b$1 = defineClientConfig({ setup: () => {
  H();
} });
const i = () => {
  const e2 = usePageData();
  return computed(() => e2.value.readingTime ?? null);
}, n$1 = typeof { "/zh-tc/": { "word": "約 $word 字", "less1Minute": "小於 1 分鐘", "time": "大约 $time 分鐘" }, "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } } > "u" ? null : { "/zh-tc/": { "word": "約 $word 字", "less1Minute": "小於 1 分鐘", "time": "大约 $time 分鐘" }, "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } }, a = (e2, o2) => {
  const { minutes: r2, words: l2 } = e2, { less1Minute: m2, word: c2, time: d2 } = o2;
  return { time: r2 < 1 ? m2 : d2.replace("$time", Math.round(r2).toString()), words: c2.replace("$word", l2.toString()) };
}, u = { words: "", time: "" }, s = () => n$1 ? ue(n$1) : computed(() => null), L = () => {
  if (typeof n$1 > "u")
    return computed(() => u);
  const e2 = i(), o2 = s();
  return computed(() => e2.value && o2.value ? a(e2.value, o2.value) : u);
};
const e$2 = () => useThemeData(), m$1 = () => useThemeLocaleData(), t$1 = () => computed(() => !!e$2().value.pure);
var e$1 = defineComponent({ name: "EmptyComponent", setup: () => () => null });
const sidebarData = { "/zh-tc/mitu/": [], "/zh-tc/docs/": [""], "/mitu/": [], "/docs/": [""] };
const Me = (e2) => {
  const { icon: l2 = "", color: t2, size: n2 } = e2, o2 = {};
  return t2 && (o2.color = t2), n2 && (o2.height = Number.isNaN(Number(n2)) ? n2 : `${n2}px`), isLinkHttp(l2) ? h$3("img", { class: "icon", src: l2, "no-view": "", style: o2 }) : _e$1(l2) ? h$3("img", { class: "icon", src: withBase(l2), "no-view": "", style: o2 }) : h$3(resolveComponent("FontIcon"), e2);
};
Me.displayName = "HopeIcon";
var O = Me, V = ((e2) => (e2.type = "y", e2.title = "t", e2.shortTitle = "s", e2.icon = "i", e2.author = "a", e2.date = "d", e2.localizedDate = "l", e2.category = "c", e2.tag = "g", e2.isEncrypted = "n", e2.isOriginal = "o", e2.readingTime = "r", e2.excerpt = "e", e2.sticky = "u", e2.cover = "v", e2.index = "I", e2.order = "O", e2))(V || {}), $e = ((e2) => (e2.article = "a", e2.home = "h", e2.slide = "s", e2.page = "p", e2))($e || {});
const j = (e2, l2 = false) => {
  const t2 = useRouter(), { fullPath: n2, meta: o2, name: r2 } = B$2(t2, encodeURI(e2));
  return { text: !l2 && o2[V.shortTitle] ? o2[V.shortTitle] : o2[V.title] || e2, link: r2 === "404" ? e2 : n2, ...o2[V.icon] ? { icon: o2[V.icon] } : {} };
}, Ea = () => {
  const e2 = useRouter(), l2 = useRoute();
  return (t2) => {
    if (t2)
      if (_e$1(t2))
        l2.path !== t2 && e2.push(t2);
      else if (isLinkHttp(t2) || isLinkMailto(t2))
        window && window.open(t2);
      else {
        const n2 = l2.path.slice(0, l2.path.lastIndexOf("/"));
        e2.push(`${n2}/${encodeURI(t2)}`);
      }
  };
}, Be$1 = () => {
  const e2 = m$1(), l2 = usePageFrontmatter();
  return computed(() => {
    const { author: t2 } = l2.value;
    return t2 ? Me$1(t2) : t2 === false ? [] : Me$1(e2.value.author, false);
  });
}, Pa = () => {
  const e2 = usePageFrontmatter();
  return computed(() => $e$1(e2.value.category).map((l2) => {
    return { name: l2, path: "" };
  }));
}, Oa = () => {
  const e2 = usePageFrontmatter();
  return computed(() => Ne$1(e2.value.tag).map((l2) => {
    return { name: l2, path: "" };
  }));
}, Va = () => {
  const e2 = usePageFrontmatter(), l2 = usePageData();
  return computed(() => {
    const t2 = Ee$2(e2.value.date);
    if (t2)
      return t2;
    const { createdTime: n2 } = l2.value.git || {};
    return n2 ? new Date(n2) : null;
  });
}, Ha = () => {
  const e2 = m$1(), l2 = usePageData(), t2 = usePageFrontmatter(), n2 = Be$1(), o2 = Pa(), r2 = Oa(), u2 = Va(), i$12 = i(), v2 = L(), d2 = computed(() => ({ author: n2.value, category: o2.value, date: u2.value, localizedDate: l2.value.localizedDate, tag: r2.value, isOriginal: t2.value.isOriginal || false, readingTime: i$12.value, readingTimeLocale: v2.value, pageview: "pageview" in t2.value ? t2.value.pageview : true })), c2 = computed(() => "pageInfo" in t2.value ? t2.value.pageInfo : "pageInfo" in e2.value ? e2.value.pageInfo : null);
  return { info: d2, items: c2 };
}, Q = () => {
  const e2 = e$2(), l2 = ref(false), t2 = ref(false), n2 = () => {
    l2.value = window.innerWidth <= (e2.value.mobileBreakPoint || 719), t2.value = window.innerWidth >= (e2.value.pcBreakPoint || 1440);
  };
  return onMounted(() => {
    n2(), useEventListener("resize", n2, false), useEventListener("orientationchange", n2, false);
  }), { isMobile: l2, isPC: t2 };
}, ze = Symbol(""), U = () => {
  const e2 = inject(ze);
  if (!e2)
    throw new Error("useDarkmode() is called without provider.");
  return e2;
}, Ra = (e2) => {
  const l2 = e$2(), t2 = usePreferredDark(), n2 = useStorage("vuepress-theme-hope-scheme", "auto"), o2 = computed(() => l2.value.darkmode || "switch"), r2 = computed(() => {
    const i2 = o2.value;
    return i2 === "disable" ? false : i2 === "enable" ? true : i2 === "auto" ? t2.value : i2 === "toggle" ? n2.value === "dark" : n2.value === "dark" || n2.value === "auto" && t2.value;
  }), u2 = computed(() => {
    const i2 = o2.value;
    return i2 === "switch" || i2 === "toggle";
  });
  e2.provide(ze, { canToggle: u2, config: o2, isDarkmode: r2, status: n2 }), Object.defineProperties(e2.config.globalProperties, { $isDarkmode: { get: () => r2.value } });
}, Fa = () => {
  const { isDarkmode: e2 } = U(), l2 = (t2 = e2.value) => document.documentElement.setAttribute("data-theme", t2 ? "dark" : "light");
  onMounted(() => {
    watch(e2, l2, { immediate: true });
  });
};
var A = defineComponent({ name: "AutoLink", inheritAttrs: false, props: { config: { type: Object, required: true }, exact: Boolean, noExternalLinkIcon: Boolean }, emits: ["focusout"], setup(e2, { attrs: l2, emit: t2, slots: n2 }) {
  const o2 = useRoute(), r2 = useSiteData(), u2 = toRef(e2, "config"), i2 = computed(() => isLinkHttp(u2.value.link)), v2 = computed(() => isLinkMailto(u2.value.link) || isLinkTel(u2.value.link)), d2 = computed(() => v2.value ? void 0 : u2.value.target || (i2.value ? "_blank" : void 0)), c2 = computed(() => d2.value === "_blank"), h2 = computed(() => !i2.value && !v2.value && !c2.value), L2 = computed(() => v2.value ? void 0 : u2.value.rel || (c2.value ? "noopener noreferrer" : void 0)), f2 = computed(() => u2.value.ariaLabel || u2.value.text), S2 = computed(() => {
    if (e2.exact)
      return false;
    const g2 = g$4(r2.value.locales);
    return g2.length ? g2.every((B2) => B2 !== u2.value.link) : u2.value.link !== "/";
  }), M2 = computed(() => h2.value ? u2.value.activeMatch ? new RegExp(u2.value.activeMatch).test(o2.path) : S2.value ? N(o2.path, u2.value.link) : o2.path === u2.value.link : false);
  return () => {
    var g2, B2, z2;
    const { text: D2, icon: H2, link: R } = u2.value;
    return h2.value ? h$3(RouterLink, { to: R, "aria-label": f2.value, ...l2, class: ["nav-link", { active: M2.value }, l2.class], onFocusout: () => t2("focusout") }, () => {
      var b2, p, F2;
      return ((b2 = n2.default) == null ? void 0 : b2.call(n2)) || [((p = n2.before) == null ? void 0 : p.call(n2)) || h$3(O, { icon: H2 }), D2, (F2 = n2.after) == null ? void 0 : F2.call(n2)];
    }) : h$3("a", { href: R, rel: L2.value, target: d2.value, "aria-label": f2.value, ...l2, class: ["nav-link", l2.class], onFocusout: () => t2("focusout") }, ((g2 = n2.default) == null ? void 0 : g2.call(n2)) || [((B2 = n2.before) == null ? void 0 : B2.call(n2)) || h$3(O, { icon: H2 }), D2, e2.noExternalLinkIcon ? null : h$3(ExternalLinkIcon), (z2 = n2.after) == null ? void 0 : z2.call(n2)]);
  };
} });
const G = (e2, l2, t2 = false) => "activeMatch" in l2 ? new RegExp(l2.activeMatch).test(e2.path) : Te(e2, l2.link) ? true : l2.children && !t2 ? l2.children.some((n2) => G(e2, n2)) : false, xe$1 = (e2, l2) => l2.type === "group" ? l2.children.some((t2) => t2.type === "group" ? xe$1(e2, t2) : t2.type === "page" && G(e2, t2, true)) || "prefix" in l2 && Te(e2, l2.prefix) : false, Ne = (e2, l2) => isString(e2.link) ? h$3(A, { ...l2, config: e2 }) : h$3("p", l2, [h$3(O, { icon: e2.icon }), e2.text]), De$1 = (e2) => {
  const l2 = useRoute();
  return e2 ? h$3("ul", { class: "sidebar-sub-headers" }, e2.map((t2) => {
    const n2 = G(l2, t2, true);
    return h$3("li", { class: "sidebar-sub-header" }, [Ne(t2, { class: ["sidebar-link", "heading", { active: n2 }] }), De$1(t2.children)]);
  })) : null;
}, ce = (e2 = "", l2 = "") => _e$1(l2) ? l2 : `${ensureEndingSlash(e2)}${l2}`, _a = (e2, l2) => {
  const t2 = usePageData();
  return { type: "heading", text: e2.title, link: `${t2.value.path}#${e2.slug}`, children: ve(e2.children, l2) };
}, ve = (e2, l2) => l2 > 0 ? e2.map((t2) => _a(t2, l2 - 1)) : [], Ee$1 = (e2) => {
  const l2 = usePageData();
  return ve(l2.value.headers, e2);
}, pe = (e2, l2, t2 = "") => {
  const n2 = usePageData(), o2 = (r2, u2 = t2) => {
    var i2;
    const v2 = isString(r2) ? j(ce(u2, r2)) : r2.link ? { ...r2, ...isLinkExternal(r2.link) ? {} : { link: j(ce(u2, r2.link)).link } } : r2;
    if ("children" in v2) {
      const d2 = ce(u2, v2.prefix), c2 = v2.children === "structure" ? sidebarData[d2] : v2.children;
      return { type: "group", ...v2, prefix: d2, children: c2.map((h2) => o2(h2, d2)) };
    }
    return { type: "page", ...v2, children: v2.link === n2.value.path ? ve(((i2 = n2.value.headers[0]) == null ? void 0 : i2.level) === 1 ? n2.value.headers[0].children : n2.value.headers, l2) : [] };
  };
  return e2.map((r2) => o2(r2));
}, ja = (e2, l2) => {
  const t2 = usePageData(), n2 = g$4(e2).sort((o2, r2) => r2.length - o2.length);
  for (const o2 of n2)
    if (N(decodeURI(t2.value.path), o2)) {
      const r2 = e2[o2];
      return r2 ? pe(r2 === "structure" ? sidebarData[o2] : r2 === "heading" ? Ee$1(l2) : r2, l2, o2) : [];
    }
  return console.warn(`${t2.value.path} is missing sidebar config.`), [];
}, Ga = () => {
  const e2 = useRouteLocale(), l2 = usePageFrontmatter(), t2 = m$1(), n2 = l2.value.home ? false : l2.value.sidebar ?? t2.value.sidebar ?? "structure", o2 = l2.value.headerDepth ?? t2.value.headerDepth ?? 2;
  return n2 === false ? [] : n2 === "heading" ? Ee$1(o2) : n2 === "structure" ? pe(sidebarData[e2.value], o2, e2.value) : isArray(n2) ? pe(n2, o2) : isPlainObject(n2) ? ja(n2, o2) : [];
}, Pe$1 = Symbol(""), qa = () => {
  const e2 = computed(() => Ga());
  provide(Pe$1, e2);
}, de$1 = () => {
  const e2 = inject(Pe$1);
  if (!e2)
    throw new Error("useSidebarItems() is called without provider.");
  return e2;
};
var Ua = defineComponent({ name: "PageFooter", setup() {
  const e2 = usePageFrontmatter(), l2 = m$1(), t2 = Be$1(), n2 = computed(() => {
    const { copyright: u2, footer: i2 } = e2.value;
    return i2 !== false && !!(u2 || i2 || l2.value.displayFooter);
  }), o2 = computed(() => {
    const { footer: u2 } = e2.value;
    return u2 === false ? false : isString(u2) ? u2 : l2.value.footer || "";
  }), r2 = computed(() => "copyright" in e2.value ? e2.value.copyright : "copyright" in l2.value ? l2.value.copyright : t2.value.length ? `Copyright © ${new Date().getFullYear()} ${t2.value[0].name}` : false);
  return () => n2.value ? h$3("footer", { class: "footer-wrapper" }, [o2.value ? h$3("div", { class: "footer", innerHTML: o2.value }) : null, r2.value ? h$3("div", { class: "copyright", innerHTML: r2.value }) : null]) : null;
} }), Oe = defineComponent({ name: "NavbarDropdownLink", props: { config: { type: Object, required: true } }, setup(e2, { slots: l2 }) {
  const t2 = usePageData(), n2 = toRef(e2, "config"), o2 = computed(() => n2.value.ariaLabel || n2.value.text), r2 = ref(false);
  watch(() => t2.value.path, () => {
    r2.value = false;
  });
  const u2 = (i2) => {
    i2.detail === 0 && (r2.value = !r2.value);
  };
  return () => {
    var i2;
    return h$3("div", { class: ["dropdown-wrapper", { open: r2.value }] }, [h$3("button", { type: "button", class: "dropdown-title", "aria-label": o2.value, onClick: u2 }, [((i2 = l2.title) == null ? void 0 : i2.call(l2)) || h$3("span", { class: "title" }, [h$3(O, { icon: n2.value.icon }), e2.config.text]), h$3("span", { class: "arrow" }), h$3("ul", { class: "nav-dropdown" }, n2.value.children.map((v2, d2) => {
      const c2 = d2 === n2.value.children.length - 1;
      return h$3("li", { class: "dropdown-item" }, "children" in v2 ? [h$3("h4", { class: "dropdown-subtitle" }, v2.link ? h$3(A, { config: v2, onFocusout: () => {
        v2.children.length === 0 && c2 && (r2.value = false);
      } }) : h$3("span", v2.text)), h$3("ul", { class: "dropdown-subitem-wrapper" }, v2.children.map((h2, L2) => h$3("li", { class: "dropdown-subitem" }, h$3(A, { config: h2, onFocusout: () => {
        L2 === v2.children.length - 1 && c2 && (r2.value = false);
      } }))))] : h$3(A, { config: v2, onFocusout: () => {
        c2 && (r2.value = false);
      } }));
    }))])]);
  };
} });
const Ve = () => h$3(c$2, { name: "i18n" }, () => [h$3("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
Ve.displayName = "I18nIcon";
const He = (e2, l2 = "") => isString(e2) ? j(`${l2}${e2}`) : "children" in e2 ? { ...e2, ...e2.link && !isLinkExternal(e2.link) ? j(`${l2}${e2.link}`) : {}, children: e2.children.map((t2) => He(t2, `${l2}${e2.prefix || ""}`)) } : { ...e2, link: isLinkExternal(e2.link) ? e2.link : j(`${l2}${e2.link}`).link }, Re = () => computed(() => (m$1().value.navbar || []).map((e2) => He(e2))), Wa = () => {
  const e2 = useRouter(), l2 = useRoute(), t2 = useRouteLocale(), n2 = useSiteLocaleData(), o2 = e$2(), r2 = m$1();
  return computed(() => {
    const u2 = g$4(n2.value.locales);
    if (u2.length < 2)
      return null;
    const { path: i2, fullPath: v2 } = e2.currentRoute.value, { navbarLocales: d2 } = r2.value;
    return { text: "", ariaLabel: d2 == null ? void 0 : d2.selectLangAriaLabel, children: [...u2.map((c2) => {
      var h2, L2, f2;
      const S2 = ((h2 = n2.value.locales) == null ? void 0 : h2[c2]) ?? {}, M2 = ((L2 = o2.value.locales) == null ? void 0 : L2[c2]) ?? {}, g2 = S2.lang || "", B2 = ((f2 = M2.navbarLocales) == null ? void 0 : f2.langName) ?? g2;
      let z2;
      if (g2 === n2.value.lang)
        z2 = i2;
      else {
        const D2 = i2.replace(t2.value, c2);
        z2 = e2.getRoutes().some((H2) => H2.path === D2) ? v2.replace(i2, D2) : M2.home ?? c2;
      }
      return { text: B2, link: z2 };
    }), ...A$2(o2.value.extraLocales || {}).map(([c2, h2]) => ({ text: c2, link: h2.replace(":route", l2.path.replace(t2.value, "")) }))] };
  });
}, Ya = () => {
  const e2 = m$1(), l2 = computed(() => e2.value.repo || null), t2 = computed(() => l2.value ? We$1(l2.value) : null), n2 = computed(() => l2.value ? Oe$1(l2.value) : null), o2 = computed(() => t2.value ? e2.value.repoLabel ?? (n2.value === null ? "Source" : n2.value) : null);
  return computed(() => !t2.value || !o2.value || e2.value.repoDisplay === false ? null : { type: n2.value || "Source", label: o2.value, link: t2.value });
};
var Xa = defineComponent({ name: "LanguageDropdown", setup() {
  const e2 = Wa();
  return () => e2.value ? h$3("div", { class: "nav-item" }, h$3(Oe, { class: "i18n-dropdown", config: e2.value }, { title: () => {
    var l2;
    return h$3(Ve, { "aria-label": (l2 = e2.value) == null ? void 0 : l2.ariaLabel, style: { width: "1rem", height: "1rem", verticalAlign: "middle" } });
  } })) : null;
} }), Ja = defineComponent({ name: "NavScreenDropdown", props: { config: { type: Object, required: true } }, setup(e2) {
  const l2 = usePageData(), t2 = toRef(e2, "config"), n2 = computed(() => t2.value.ariaLabel || t2.value.text), o2 = ref(false);
  watch(() => l2.value.path, () => {
    o2.value = false;
  });
  const r2 = (u2, i2) => i2[i2.length - 1] === u2;
  return () => [h$3("button", { type: "button", class: ["nav-screen-dropdown-title", { active: o2.value }], "aria-label": n2.value, onClick: () => {
    o2.value = !o2.value;
  } }, [h$3("span", { class: "title" }, [h$3(O, { icon: t2.value.icon }), e2.config.text]), h$3("span", { class: ["arrow", o2.value ? "down" : "end"] })]), h$3("ul", { class: ["nav-screen-dropdown", { hide: !o2.value }] }, t2.value.children.map((u2) => h$3("li", { class: "dropdown-item" }, "children" in u2 ? [h$3("h4", { class: "dropdown-subtitle" }, u2.link ? h$3(A, { config: u2, onFocusout: () => {
    r2(u2, t2.value.children) && u2.children.length === 0 && (o2.value = false);
  } }) : h$3("span", u2.text)), h$3("ul", { class: "dropdown-subitem-wrapper" }, u2.children.map((i2) => h$3("li", { class: "dropdown-subitem" }, h$3(A, { config: i2, onFocusout: () => {
    r2(i2, u2.children) && r2(u2, t2.value.children) && (o2.value = false);
  } }))))] : h$3(A, { config: u2, onFocusout: () => {
    r2(u2, t2.value.children) && (o2.value = false);
  } }))))];
} }), Ka = defineComponent({ name: "NavScreenLinks", setup() {
  const e2 = Re();
  return () => e2.value.length ? h$3("nav", { class: "nav-screen-links" }, e2.value.map((l2) => h$3("div", { class: "navbar-links-item" }, "children" in l2 ? h$3(Ja, { config: l2 }) : h$3(A, { config: l2 })))) : null;
} });
const Fe = () => h$3(c$2, { name: "dark" }, () => h$3("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
Fe.displayName = "DarkIcon";
const _e = () => h$3(c$2, { name: "light" }, () => h$3("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
_e.displayName = "LightIcon";
const je = () => h$3(c$2, { name: "auto" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
je.displayName = "AutoIcon";
const Ge = () => h$3(c$2, { name: "enter-fullscreen" }, () => h$3("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
Ge.displayName = "EnterFullScreenIcon";
const qe = () => h$3(c$2, { name: "cancel-fullscreen" }, () => h$3("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
qe.displayName = "CancelFullScreenIcon";
const Ue = () => h$3(c$2, { name: "outlook" }, () => [h$3("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
Ue.displayName = "OutlookIcon";
var We = defineComponent({ name: "AppearanceSwitch", setup() {
  const { config: e2, status: l2 } = U(), t2 = () => {
    e2.value === "switch" ? l2.value = { light: "dark", dark: "auto", auto: "light" }[l2.value] : l2.value = l2.value === "light" ? "dark" : "light";
  };
  return () => h$3("button", { type: "button", id: "appearance-switch", onClick: () => t2() }, [h$3(je, { style: { display: l2.value === "auto" ? "block" : "none" } }), h$3(Fe, { style: { display: l2.value === "dark" ? "block" : "none" } }), h$3(_e, { style: { display: l2.value === "light" ? "block" : "none" } })]);
} }), Qa = defineComponent({ name: "AppearanceMode", setup() {
  const e2 = m$1(), { canToggle: l2 } = U(), t2 = computed(() => e2.value.outlookLocales.darkmode);
  return () => l2.value ? h$3("div", { class: "appearance-wrapper" }, [h$3("label", { class: "appearance-title", for: "appearance-switch" }, t2.value), h$3(We)]) : null;
} }), Za = defineComponent({ name: "ThemeColorPicker", props: { themeColor: { type: Object, required: true } }, setup(e2) {
  const l2 = (t2 = "") => {
    const n2 = document.documentElement.classList, o2 = g$4(e2.themeColor).map((r2) => `theme-${r2}`);
    if (!t2) {
      localStorage.removeItem("theme"), n2.remove(...o2);
      return;
    }
    n2.remove(...o2.filter((r2) => r2 !== `theme-${t2}`)), n2.add(`theme-${t2}`), localStorage.setItem("theme", t2);
  };
  return onMounted(() => {
    const t2 = localStorage.getItem("theme");
    t2 && l2(t2);
  }), () => h$3("ul", { id: "theme-color-picker" }, [h$3("li", h$3("span", { class: "theme-color", onClick: () => l2() })), A$2(e2.themeColor).map(([t2, n2]) => h$3("li", h$3("span", { style: { background: n2 }, onClick: () => l2(t2) })))]);
} }), el = defineComponent({ name: "ThemeColor", setup() {
  const e2 = e$2(), l2 = m$1(), t2 = computed(() => l2.value.outlookLocales.themeColor), n2 = computed(() => {
    const { themeColor: o2 } = e2.value;
    return o2 === false ? null : o2;
  });
  return () => n2.value ? h$3("div", { class: "theme-color-wrapper" }, [h$3("label", { class: "theme-color-title", for: "theme-color-picker" }, t2.value), h$3(Za, { themeColor: n2.value })]) : null;
} }), Ye = defineComponent({ name: "ToggleFullScreenButton", setup() {
  const e2 = m$1(), { isSupported: l2, isFullscreen: t2, toggle: n2 } = useFullscreen(), o2 = computed(() => e2.value.outlookLocales.fullscreen);
  return () => l2 ? h$3("div", { class: "full-screen-wrapper" }, [h$3("label", { class: "full-screen-title", for: "full-screen-switch" }, o2.value), h$3("button", { type: "button", class: "full-screen", id: "full-screen-switch", ariaPressed: t2.value, onClick: () => n2() }, t2.value ? h$3(qe) : h$3(Ge))]) : null;
} }), Xe = defineComponent({ name: "OutlookSettings", setup() {
  const e2 = e$2(), l2 = t$1(), t2 = computed(() => !l2.value && !!e2.value.themeColor), n2 = computed(() => !l2.value && e2.value.fullscreen);
  return () => h$3(ClientOnly, () => [t2.value ? h$3(el) : null, h$3(Qa), n2.value ? h$3(Ye) : null]);
} }), al = defineComponent({ name: "NavScreen", props: { show: Boolean }, emits: ["close"], setup(e2, { emit: l2, slots: t2 }) {
  const n2 = usePageData(), { isMobile: o2 } = Q(), r2 = ref(), u2 = useScrollLock(r2);
  return onMounted(() => {
    r2.value = document.body, watch(o2, (i2) => {
      !i2 && e2.show && (u2.value = false, l2("close"));
    }), watch(() => n2.value.path, () => {
      u2.value = false, l2("close");
    });
  }), onUnmounted(() => {
    u2.value = false;
  }), () => h$3(Transition, { name: "fade", onEnter: () => {
    u2.value = true;
  }, onAfterLeave: () => {
    u2.value = false;
  } }, () => {
    var i2, v2;
    return e2.show ? h$3("div", { id: "nav-screen" }, h$3("div", { class: "container" }, [(i2 = t2.before) == null ? void 0 : i2.call(t2), h$3(Ka), h$3("div", { class: "outlook-wrapper" }, h$3(Xe)), (v2 = t2.after) == null ? void 0 : v2.call(t2)])) : null;
  });
} }), ll = defineComponent({ name: "NavbarBrand", setup() {
  const e2 = useRouteLocale(), l2 = useSiteLocaleData(), t2 = m$1(), n2 = computed(() => t2.value.home || e2.value), o2 = computed(() => l2.value.title), r2 = computed(() => t2.value.logo ? withBase(t2.value.logo) : null), u2 = computed(() => t2.value.logoDark ? withBase(t2.value.logoDark) : null);
  return () => h$3(RouterLink, { to: n2.value, class: "brand" }, () => [r2.value ? h$3("img", { class: ["logo", { light: !!u2.value }], src: r2.value, alt: o2.value }) : null, u2.value ? h$3("img", { class: ["logo dark"], src: u2.value, alt: o2.value }) : null, o2.value ? h$3("span", { class: ["site-name", { "hide-in-pad": r2.value && t2.value.hideSiteNameOnMobile !== false }] }, o2.value) : null]);
} }), tl = defineComponent({ name: "NavbarLinks", setup() {
  const e2 = Re();
  return () => e2.value.length ? h$3("nav", { class: "nav-links" }, e2.value.map((l2) => h$3("div", { class: "nav-item hide-in-mobile" }, "children" in l2 ? h$3(Oe, { config: l2 }) : h$3(A, { config: l2 })))) : null;
} }), nl = defineComponent({ name: "RepoLink", components: { BitbucketIcon: C$2, GiteeIcon: L$2, GitHubIcon: I$2, GitLabIcon: x$2, SourceIcon: z$2 }, setup() {
  const e2 = Ya();
  return () => e2.value ? h$3("div", { class: "nav-item" }, h$3("a", { class: "repo-link", href: e2.value.link, target: "_blank", rel: "noopener noreferrer", "aria-label": e2.value.label }, h$3(resolveComponent(`${e2.value.type}Icon`), { style: { width: "1.25rem", height: "1.25rem", verticalAlign: "middle" } }))) : null;
} });
const Je = ({ active: e2 = false }, { emit: l2 }) => h$3("button", { type: "button", class: ["toggle-navbar-button", { "is-active": e2 }], "aria-label": "Toggle Navbar", "aria-expanded": e2, "aria-controls": "nav-screen", onClick: () => l2("toggle") }, h$3("span", { class: "button-container" }, [h$3("span", { class: "button-top" }), h$3("span", { class: "button-middle" }), h$3("span", { class: "button-bottom" })]));
Je.displayName = "ToggleNavbarButton";
var ol = Je;
const me$1 = (e2, { emit: l2 }) => h$3("button", { type: "button", class: "toggle-sidebar-button", title: "Toggle Sidebar", onClick: () => l2("toggle") }, h$3("span", { class: "icon" }));
me$1.displayName = "ToggleSidebarButton", me$1.emits = ["toggle"];
var rl = me$1, ul = defineComponent({ name: "OutlookButton", setup() {
  const { isSupported: e2 } = useFullscreen(), l2 = e$2(), t2 = t$1(), n2 = usePageData(), { canToggle: o2 } = U(), r2 = ref(false), u2 = computed(() => !t2.value && !!l2.value.themeColor), i2 = computed(() => !t2.value && l2.value.fullscreen && e2);
  return watch(() => n2.value.path, () => {
    r2.value = false;
  }), () => o2.value || i2.value || u2.value ? h$3("div", { class: "nav-item hide-in-mobile" }, o2.value && !i2.value && !u2.value ? h$3(We) : i2.value && !o2.value && !u2.value ? h$3(Ye) : h$3("button", { type: "button", class: ["outlook-button", { open: r2.value }], tabindex: "-1", "aria-hidden": true }, [h$3(Ue), h$3("div", { class: "outlook-dropdown" }, h$3(Xe))])) : null;
} }), il = defineComponent({ name: "NavBar", emits: ["toggleSidebar"], setup(e2, { emit: l2, slots: t2 }) {
  const n2 = m$1(), { isMobile: o2 } = Q(), r2 = ref(false), u2 = computed(() => {
    const { navbarAutoHide: c2 = "mobile" } = n2.value;
    return c2 !== "none" && (c2 === "always" || o2.value);
  }), i2 = computed(() => n2.value.navbarLayout || { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }), v2 = { Brand: ll, Language: Xa, Links: tl, Repo: nl, Outlook: ul, Search: oe("Docsearch") ? resolveComponent("Docsearch") : oe("SearchBox") ? resolveComponent("SearchBox") : e$1 }, d2 = (c2) => v2[c2] ?? (oe(c2) ? resolveComponent(c2) : e$1);
  return () => {
    var c2, h2, L2, f2, S2, M2;
    return [h$3("header", { class: ["navbar", { "auto-hide": u2.value, "hide-icon": n2.value.navbarIcon === false }], id: "navbar" }, [h$3("div", { class: "navbar-start" }, [h$3(rl, { onToggle: () => {
      r2.value && (r2.value = false), l2("toggleSidebar");
    } }), (c2 = t2.startBefore) == null ? void 0 : c2.call(t2), (i2.value.start || []).map((g2) => h$3(d2(g2))), (h2 = t2.startAfter) == null ? void 0 : h2.call(t2)]), h$3("div", { class: "navbar-center" }, [(L2 = t2.centerBefore) == null ? void 0 : L2.call(t2), (i2.value.center || []).map((g2) => h$3(d2(g2))), (f2 = t2.centerAfter) == null ? void 0 : f2.call(t2)]), h$3("div", { class: "navbar-end" }, [(S2 = t2.endBefore) == null ? void 0 : S2.call(t2), (i2.value.end || []).map((g2) => h$3(d2(g2))), (M2 = t2.endAfter) == null ? void 0 : M2.call(t2), h$3(ol, { active: r2.value, onToggle: () => {
      r2.value = !r2.value;
    } })])]), h$3(al, { show: r2.value, onClose: () => {
      r2.value = false;
    } }, { before: () => {
      var g2;
      return (g2 = t2.screenTop) == null ? void 0 : g2.call(t2);
    }, after: () => {
      var g2;
      return (g2 = t2.screenBottom) == null ? void 0 : g2.call(t2);
    } })];
  };
} }), sl = defineComponent({ name: "SidebarChild", props: { config: { type: Object, required: true } }, setup(e2) {
  const l2 = useRoute();
  return () => [Ne(e2.config, { class: ["sidebar-link", `sidebar-${e2.config.type}`, { active: G(l2, e2.config, true) }], exact: true }), De$1(e2.config.children)];
} }), cl = defineComponent({ name: "SidebarGroup", props: { config: { type: Object, required: true }, open: { type: Boolean, required: true } }, emits: ["toggle"], setup(e2, { emit: l2 }) {
  const t2 = useRoute(), n2 = computed(() => G(t2, e2.config)), o2 = computed(() => G(t2, e2.config, true));
  return () => {
    const { collapsible: r2, children: u2 = [], icon: i2, prefix: v2, link: d2, text: c2 } = e2.config;
    return h$3("section", { class: "sidebar-group" }, [h$3(r2 ? "button" : "p", { class: ["sidebar-heading", { clickable: r2 || d2, exact: o2.value, active: n2.value }], ...r2 ? { type: "button", onClick: () => l2("toggle"), onKeydown: (h2) => {
      h2.key === "Enter" && l2("toggle");
    } } : {} }, [h$3(O, { icon: i2 }), d2 ? h$3(A, { class: "title", config: { text: c2, link: d2 }, noExternalLinkIcon: true }) : h$3("span", { class: "title" }, c2), r2 ? h$3("span", { class: ["arrow", e2.open ? "down" : "end"] }) : null]), e2.open || !r2 ? h$3(Ke, { key: v2, config: u2 }) : null]);
  };
} }), Ke = defineComponent({ name: "SidebarLinks", props: { config: { type: Array, required: true } }, setup(e2) {
  const l2 = useRoute(), t2 = ref(-1), n2 = (o2) => {
    t2.value = o2 === t2.value ? -1 : o2;
  };
  return watch(() => l2.path, () => {
    const o2 = e2.config.findIndex((r2) => xe$1(l2, r2));
    t2.value = o2;
  }, { immediate: true, flush: "post" }), () => h$3("ul", { class: "sidebar-links" }, e2.config.map((o2, r2) => h$3("li", o2.type === "group" ? h$3(cl, { config: o2, open: r2 === t2.value, onToggle: () => n2(r2) }) : h$3(sl, { config: o2 }))));
} }), vl = defineComponent({ name: "SideBar", setup(e2, { slots: l2 }) {
  const t2 = useRoute(), n2 = m$1(), o2 = de$1(), r2 = ref();
  return onMounted(() => {
    watch(() => t2.hash, (u2) => {
      const i2 = document.querySelector(`.sidebar a.sidebar-link[href="${t2.path}${u2}"]`);
      if (!i2)
        return;
      const { top: v2, height: d2 } = r2.value.getBoundingClientRect(), { top: c2, height: h2 } = i2.getBoundingClientRect();
      c2 < v2 ? i2.scrollIntoView(true) : c2 + h2 > v2 + d2 && i2.scrollIntoView(false);
    });
  }), () => {
    var u2, i2, v2;
    return h$3("aside", { class: ["sidebar", { "hide-icon": n2.value.sidebarIcon === false }], id: "sidebar", ref: r2 }, [(u2 = l2.top) == null ? void 0 : u2.call(l2), ((i2 = l2.default) == null ? void 0 : i2.call(l2)) || h$3(Ke, { config: o2.value }), (v2 = l2.bottom) == null ? void 0 : v2.call(l2)]);
  };
} }), pl = defineComponent({ name: "CommonWrapper", props: { noNavbar: Boolean, noSidebar: Boolean }, setup(e2, { slots: l2 }) {
  const t2 = useRouter(), n2 = usePageData(), o2 = usePageFrontmatter(), r2 = m$1(), { isMobile: u2, isPC: i2 } = Q(), [v2, d2] = useToggle(false), [c2, h2] = useToggle(false), L2 = de$1(), f2 = ref(false), S2 = computed(() => e2.noNavbar || o2.value.navbar === false || r2.value.navbar === false ? false : !!(n2.value.title || r2.value.logo || r2.value.repo || r2.value.navbar)), M2 = computed(() => e2.noSidebar ? false : o2.value.sidebar !== false && L2.value.length !== 0 && !o2.value.home), g2 = { x: 0, y: 0 }, B2 = (b2) => {
    g2.x = b2.changedTouches[0].clientX, g2.y = b2.changedTouches[0].clientY;
  }, z2 = (b2) => {
    const p = b2.changedTouches[0].clientX - g2.x, F2 = b2.changedTouches[0].clientY - g2.y;
    Math.abs(p) > Math.abs(F2) * 1.5 && Math.abs(p) > 40 && (p > 0 && g2.x <= 80 ? d2(true) : d2(false));
  }, D2 = computed(() => o2.value.home ? false : o2.value.toc || r2.value.toc !== false && o2.value.toc !== false), H2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let R = 0;
  return useEventListener("scroll", useThrottleFn(() => {
    const b2 = H2();
    b2 <= 58 || b2 < R ? f2.value = false : R + 200 < b2 && !v2.value && (f2.value = true), R = b2;
  }, 300, true)), watch(u2, (b2) => {
    b2 || d2(false);
  }), onMounted(() => {
    const b2 = useScrollLock(document.body);
    watch(v2, (F2) => {
      b2.value = F2;
    });
    const p = t2.afterEach(() => {
      d2(false);
    });
    onUnmounted(() => {
      b2.value = false, p();
    });
  }), () => h$3(oe("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : F$3, () => {
    var b2;
    return h$3("div", { class: ["theme-container", { "no-navbar": !S2.value, "no-sidebar": !M2.value && !(l2.sidebar || l2.sidebarTop || l2.sidebarBottom), "has-toc": D2.value, "hide-navbar": f2.value, "sidebar-collapsed": !u2.value && !i2.value && c2.value, "sidebar-open": u2.value && v2.value }, o2.value.containerClass || ""], onTouchStart: B2, onTouchEnd: z2 }, [S2.value ? h$3(il, { onToggleSidebar: () => d2() }, { startBefore: () => {
      var p;
      return (p = l2.navbarStartBefore) == null ? void 0 : p.call(l2);
    }, startAfter: () => {
      var p;
      return (p = l2.navbarStartAfter) == null ? void 0 : p.call(l2);
    }, centerBefore: () => {
      var p;
      return (p = l2.navbarCenterBefore) == null ? void 0 : p.call(l2);
    }, centerAfter: () => {
      var p;
      return (p = l2.navbarCenterAfter) == null ? void 0 : p.call(l2);
    }, endBefore: () => {
      var p;
      return (p = l2.navbarEndBefore) == null ? void 0 : p.call(l2);
    }, endAfter: () => {
      var p;
      return (p = l2.navbarEndAfter) == null ? void 0 : p.call(l2);
    }, screenTop: () => {
      var p;
      return (p = l2.navScreenTop) == null ? void 0 : p.call(l2);
    }, screenBottom: () => {
      var p;
      return (p = l2.navScreenBottom) == null ? void 0 : p.call(l2);
    } }) : null, h$3(Transition, { name: "fade" }, () => v2.value ? h$3("div", { class: "sidebar-mask", onClick: () => d2(false) }) : null), h$3(Transition, { name: "fade" }, () => u2.value ? null : h$3("div", { class: "toggle-sidebar-wrapper", onClick: () => h2() }, h$3("span", { class: ["arrow", c2.value ? "end" : "start"] }))), h$3(vl, {}, { ...l2.sidebar ? { default: () => {
      var p;
      return (p = l2.sidebar) == null ? void 0 : p.call(l2);
    } } : {}, top: () => {
      var p;
      return (p = l2.sidebarTop) == null ? void 0 : p.call(l2);
    }, bottom: () => {
      var p;
      return (p = l2.sidebarBottom) == null ? void 0 : p.call(l2);
    } }), (b2 = l2.default) == null ? void 0 : b2.call(l2), h$3(Ua)]);
  });
} }), dl = defineComponent({ name: "DropTransition", props: { type: { type: String, default: "single" }, delay: { type: Number, default: 0 }, duration: { type: Number, default: 0.25 }, appear: Boolean }, setup(e2, { slots: l2 }) {
  const t2 = (o2) => {
    o2.style.transition = `transform ${e2.duration}s ease-in-out ${e2.delay}s, opacity ${e2.duration}s ease-in-out ${e2.delay}s`, o2.style.transform = "translateY(-20px)", o2.style.opacity = "0";
  }, n2 = (o2) => {
    o2.style.transform = "translateY(0)", o2.style.opacity = "1";
  };
  return () => h$3(e2.type === "single" ? Transition : TransitionGroup, { name: "drop", appear: e2.appear, onAppear: t2, onAfterAppear: n2, onEnter: t2, onAfterEnter: n2, onBeforeLeave: t2 }, () => {
    var o2;
    return (o2 = l2.default) == null ? void 0 : o2.call(l2);
  });
} });
const he$1 = ({ custom: e2 }) => h$3(Content, { class: ["theme-hope-content", { custom: e2 }] });
he$1.displayName = "MarkdownContent", he$1.props = { custom: Boolean };
var ml = he$1;
const Qe = () => h$3(c$2, { name: "author" }, () => h$3("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
Qe.displayName = "AuthorIcon";
const Ze = () => h$3(c$2, { name: "calendar" }, () => h$3("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
Ze.displayName = "CalendarIcon";
const ea = () => h$3(c$2, { name: "category" }, () => h$3("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
ea.displayName = "CategoryIcon";
const aa = () => h$3(c$2, { name: "eye" }, () => h$3("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
aa.displayName = "EyeIcon";
const la = () => h$3(c$2, { name: "fire" }, () => h$3("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
la.displayName = "FireIcon";
const ta = () => h$3(c$2, { name: "print" }, () => h$3("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
ta.displayName = "PrintIcon";
const na = () => h$3(c$2, { name: "tag" }, () => h$3("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
na.displayName = "TagIcon";
const oa = () => h$3(c$2, { name: "timer" }, () => h$3("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
oa.displayName = "TimerIcon";
const ra = () => h$3(c$2, { name: "word" }, () => [h$3("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h$3("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
ra.displayName = "WordIcon";
const $$1 = () => {
  const e2 = m$1();
  return computed(() => e2.value.metaLocales);
};
var hl = defineComponent({ name: "AuthorInfo", inheritAttrs: false, props: { author: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const l2 = $$1();
  return () => e2.author.length ? h$3("span", { class: "page-author-info", "aria-label": `${l2.value.author}${e2.pure ? "" : "🖊"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(Qe), h$3("span", e2.author.map((t2) => t2.url ? h$3("a", { class: "page-author-item", href: t2.url, target: "_blank", rel: "noopener noreferrer" }, t2.name) : h$3("span", { class: "page-author-item" }, t2.name))), h$3("span", { property: "author", content: e2.author.map((t2) => t2.name).join(", ") })]) : null;
} }), gl = defineComponent({ name: "CategoryInfo", inheritAttrs: false, props: { category: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const l2 = useRouter(), t2 = usePageData(), n2 = $$1(), o2 = (r2, u2 = "") => {
    u2 && t2.value.path !== u2 && (r2.preventDefault(), l2.push(u2));
  };
  return () => e2.category.length ? h$3("span", { class: "page-category-info", "aria-label": `${n2.value.category}${e2.pure ? "" : "🌈"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(ea), e2.category.map(({ name: r2, path: u2 }) => h$3("span", { class: ["page-category-item", { [`category${Se(r2, 9)}`]: !e2.pure, clickable: u2 }], role: u2 ? "navigation" : "", onClick: (i2) => o2(i2, u2) }, r2)), h$3("meta", { property: "articleSection", content: e2.category.map(({ name: r2 }) => r2).join(",") })]) : null;
} }), bl = defineComponent({ name: "DateInfo", inheritAttrs: false, props: { date: { type: Object, default: null }, localizedDate: { type: String, default: "" }, pure: Boolean }, setup(e2) {
  const l2 = usePageLang(), t2 = $$1();
  return () => e2.date ? h$3("span", { class: "page-date-info", "aria-label": `${t2.value.date}${e2.pure ? "" : "📅"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(Ze), h$3("span", h$3(ClientOnly, () => e2.localizedDate || e2.date.toLocaleDateString(l2.value))), h$3("meta", { property: "datePublished", content: e2.date.toISOString() || "" })]) : null;
} }), fl = defineComponent({ name: "OriginalInfo", inheritAttrs: false, props: { isOriginal: Boolean }, setup(e2) {
  const l2 = $$1();
  return () => e2.isOriginal ? h$3("span", { class: "page-original-info" }, l2.value.origin) : null;
} }), yl = defineComponent({ name: "PageViewInfo", inheritAttrs: false, props: { pageview: { type: [Boolean, String], default: false }, pure: Boolean }, setup(e2) {
  const l2 = useRoute(), t2 = $$1(), n2 = ref(), o2 = ref(0);
  return useMutationObserver(n2, () => {
    const r2 = n2.value.textContent;
    r2 && !isNaN(Number(r2)) && (o2.value = Number(r2));
  }, { childList: true }), () => e2.pageview ? h$3("span", { class: "page-pageview-info", "aria-label": `${t2.value.views}${e2.pure ? "" : "🔢"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(o2.value < 1e3 ? aa : la), h$3("span", { ref: n2, class: "waline-pageview-count", id: "ArtalkPV", "data-path": isString(e2.pageview) ? e2.pageview : withBase(l2.path) }, "...")]) : null;
} }), kl = defineComponent({ name: "ReadingTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const l2 = $$1(), t2 = computed(() => {
    if (!e2.readingTime)
      return null;
    const { minutes: n2 } = e2.readingTime;
    return n2 < 1 ? "PT1M" : `PT${Math.round(n2)}M`;
  });
  return () => {
    var n2, o2;
    return (n2 = e2.readingTimeLocale) != null && n2.time ? h$3("span", { class: "page-reading-time-info", "aria-label": `${l2.value.readingTime}${e2.pure ? "" : "⌛"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(oa), h$3("span", (o2 = e2.readingTimeLocale) == null ? void 0 : o2.time), h$3("meta", { property: "timeRequired", content: t2.value })]) : null;
  };
} }), wl = defineComponent({ name: "TagInfo", inheritAttrs: false, props: { tag: { type: Array, default: () => [] }, pure: Boolean }, setup(e2) {
  const l2 = useRouter(), t2 = usePageData(), n2 = $$1(), o2 = (r2, u2 = "") => {
    u2 && t2.value.path !== u2 && (r2.preventDefault(), l2.push(u2));
  };
  return () => e2.tag.length ? h$3("span", { class: "page-tag-info", "aria-label": `${n2.value.tag}${e2.pure ? "" : "🏷"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(na), e2.tag.map(({ name: r2, path: u2 }) => h$3("span", { class: ["page-tag-item", { [`tag${Se(r2, 9)}`]: !e2.pure, clickable: u2 }], role: u2 ? "navigation" : "", onClick: (i2) => o2(i2, u2) }, r2)), h$3("meta", { property: "keywords", content: e2.tag.map(({ name: r2 }) => r2).join(",") })]) : null;
} }), Il = defineComponent({ name: "ReadTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const l2 = $$1();
  return () => {
    var t2, n2, o2;
    return (t2 = e2.readingTimeLocale) != null && t2.words ? h$3("span", { class: "page-word-info", "aria-label": `${l2.value.words}${e2.pure ? "" : "🔠"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(ra), h$3("span", (n2 = e2.readingTimeLocale) == null ? void 0 : n2.words), h$3("meta", { property: "wordCount", content: (o2 = e2.readingTime) == null ? void 0 : o2.words })]) : null;
  };
} }), Ll = defineComponent({ name: "PageInfo", components: { AuthorInfo: hl, CategoryInfo: gl, DateInfo: bl, OriginalInfo: fl, PageViewInfo: yl, ReadingTimeInfo: kl, TagInfo: wl, WordInfo: Il }, props: { items: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"] }, info: { type: Object, required: true } }, setup(e2) {
  const l2 = t$1();
  return () => e2.items ? h$3("div", { class: "page-info" }, e2.items.map((t2) => h$3(resolveComponent(`${t2}Info`), { ...e2.info, pure: l2.value }))) : null;
} }), Tl = defineComponent({ name: "PrintButton", setup() {
  const e2 = e$2(), l2 = m$1();
  return () => e2.value.print === false ? null : h$3("button", { type: "button", class: "print-button", title: l2.value.metaLocales.print, onClick: () => {
    window.print();
  } }, h$3(ta));
} });
const Sl = ({ title: e2, level: l2, slug: t2 }) => h$3(RouterLink, { to: `#${t2}`, class: ["toc-link", `level${l2}`] }, () => e2), ge$1 = (e2, l2) => {
  const t2 = useRoute();
  return e2.length && l2 > 0 ? h$3("ul", { class: "toc-list" }, e2.map((n2) => {
    const o2 = ge$1(n2.children, l2 - 1);
    return [h$3("li", { class: ["toc-item", { active: Te(t2, `#${n2.slug}`) }] }, Sl(n2)), o2 ? h$3("li", o2) : null];
  })) : null;
};
var Cl = defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, setup(e2, { slots: l2 }) {
  const t2 = useRoute(), n2 = usePageData(), o2 = $$1(), r2 = ref(), u2 = ref("-1.7rem"), i2 = (d2) => {
    var c2;
    (c2 = r2.value) == null || c2.scrollTo({ top: d2, behavior: "smooth" });
  }, v2 = () => {
    if (r2.value) {
      const d2 = document.querySelector(".toc-item.active");
      d2 ? u2.value = `${d2.getBoundingClientRect().top - r2.value.getBoundingClientRect().top + r2.value.scrollTop}px` : u2.value = "-1.7rem";
    } else
      u2.value = "-1.7rem";
  };
  return onMounted(() => {
    watch(() => t2.hash, (d2) => {
      if (r2.value) {
        const c2 = document.querySelector(`#toc a.toc-link[href$="${d2}"]`);
        if (!c2)
          return;
        const { top: h2, height: L2 } = r2.value.getBoundingClientRect(), { top: f2, height: S2 } = c2.getBoundingClientRect();
        f2 < h2 ? i2(r2.value.scrollTop + f2 - h2) : f2 + S2 > h2 + L2 && i2(r2.value.scrollTop + f2 + S2 - h2 - L2);
      }
    }), watch(() => t2.fullPath, () => v2(), { flush: "post", immediate: true });
  }), () => {
    var d2, c2;
    const h2 = e2.items.length ? ge$1(e2.items, e2.headerDepth) : n2.value.headers ? ge$1(n2.value.headers, e2.headerDepth) : null;
    return h2 ? h$3("div", { class: "toc-place-holder" }, [h$3("aside", { id: "toc" }, [(d2 = l2.before) == null ? void 0 : d2.call(l2), h$3("div", { class: "toc-header" }, [o2.value.toc, h$3(Tl)]), h$3("div", { class: "toc-wrapper", ref: r2 }, [h2, h$3("div", { class: "toc-marker", style: { top: u2.value } })]), (c2 = l2.after) == null ? void 0 : c2.call(l2)])]) : null;
  };
} }), Al = defineComponent({ name: "SkipLink", props: { content: { type: String, default: "main-content" } }, setup(e2) {
  const l2 = usePageData(), t2 = m$1(), n2 = ref(), o2 = ({ target: r2 }) => {
    const u2 = document.querySelector(r2.hash);
    if (u2) {
      const i2 = () => {
        u2.removeAttribute("tabindex"), u2.removeEventListener("blur", i2);
      };
      u2.setAttribute("tabindex", "-1"), u2.addEventListener("blur", i2), u2.focus(), window.scrollTo(0, 0);
    }
  };
  return onMounted(() => {
    watch(() => l2.value.path, () => n2.value.focus());
  }), () => [h$3("span", { ref: n2, tabindex: "-1" }), h$3("a", { href: `#${e2.content}`, class: "skip-link sr-only", onClick: o2 }, t2.value.routeLocales.skipToContent)];
} });
let n = null, e = null;
const m = { wait: () => n, pending: () => {
  n = new Promise((l2) => e = l2);
}, resolve: () => {
  e == null || e(), n = null, e = null;
} }, t = () => m;
var f = defineComponent({ name: "FadeSlideY", setup(l2, { slots: o2 }) {
  const { resolve: i2, pending: s2 } = t();
  return () => h$3(Transition, { name: "fade-slide-y", mode: "out-in", onBeforeEnter: i2, onBeforeLeave: s2 }, () => {
    var r2;
    return (r2 = o2.default) == null ? void 0 : r2.call(o2);
  });
} });
var de = defineComponent({ name: "FeaturePanel", props: { items: { type: Object, default: () => [] }, header: { type: String, default: "" } }, setup(t2) {
  return () => h$3("div", { class: "feature-panel" }, [t2.header ? h$3("h2", { class: "feature-header" }, t2.header) : null, t2.items.length ? h$3("div", { class: "feature-wrapper" }, t2.items.map((a2) => {
    const l2 = [h$3("h3", [h$3(O, { icon: a2.icon }), h$3("span", { innerHTML: a2.title })]), h$3("p", { innerHTML: a2.details })];
    return a2.link ? isLinkExternal(a2.link) ? h$3("a", { class: "feature-item link", href: a2.link, role: "navigation", "aria-label": a2.title, target: "_blank" }, l2) : h$3(RouterLink, { class: "feature-item link", to: a2.link, role: "navigation", "aria-label": a2.title }, () => l2) : h$3("div", { class: "feature-item" }, l2);
  })) : null]);
} }), me = defineComponent({ name: "HeroInfo", setup(t2, { slots: a2 }) {
  const l2 = usePageFrontmatter(), o2 = useSiteLocaleData(), r2 = computed(() => l2.value.heroText === false ? false : l2.value.heroText || o2.value.title || "Hello"), n2 = computed(() => l2.value.tagline === false ? false : l2.value.tagline || o2.value.description || "Welcome to your VuePress site"), i2 = computed(() => l2.value.heroImage ? withBase(l2.value.heroImage) : null), u2 = computed(() => l2.value.heroImageDark ? withBase(l2.value.heroImageDark) : null), s2 = computed(() => l2.value.heroAlt || r2.value || "hero"), c2 = computed(() => l2.value.actions ?? []);
  return () => {
    var p, d2;
    return h$3("header", { class: "hero-info-wrapper" }, [((p = a2.heroImage) == null ? void 0 : p.call(a2)) || h$3(dl, { appear: true, type: "group" }, () => [i2.value ? h$3("img", { key: "light", class: { light: u2.value }, src: i2.value, alt: s2.value }) : null, u2.value ? h$3("img", { key: "dark", class: "dark", src: u2.value, alt: s2.value }) : null]), ((d2 = a2.heroInfo) == null ? void 0 : d2.call(a2)) || h$3("div", { class: "hero-info" }, [r2.value ? h$3(dl, { appear: true, delay: 0.04 }, () => h$3("h1", { id: "main-title" }, r2.value)) : null, n2.value ? h$3(dl, { appear: true, delay: 0.08 }, () => h$3("p", { class: "description" }, n2.value)) : null, c2.value.length ? h$3(dl, { appear: true, delay: 0.12 }, () => h$3("p", { class: "actions" }, c2.value.map((L2) => h$3(A, { class: ["action-button", L2.type || "default"], config: L2, noExternalLinkIcon: true })))) : null])]);
  };
} }), he = defineComponent({ name: "HopePage", setup(t2, { slots: a2 }) {
  const l2 = t$1(), o2 = usePageFrontmatter(), r2 = computed(() => {
    const { features: n2 } = o2.value;
    return isArray(n2) ? n2.some((i2) => !("items" in i2)) ? [{ items: n2 }] : n2 : [];
  });
  return () => {
    var n2, i2, u2;
    return h$3("main", { class: ["home project", { pure: l2.value }], id: "main-content", "aria-labelledby": o2.value.heroText === null ? void 0 : "main-title" }, [(n2 = a2.top) == null ? void 0 : n2.call(a2), h$3(me), r2.value.map(({ header: s2 = "", items: c2 }, p) => h$3(dl, { appear: true, delay: 0.16 + p * 0.08 }, () => h$3(de, { header: s2, items: c2 }))), (i2 = a2.center) == null ? void 0 : i2.call(a2), h$3(dl, { appear: true, delay: 0.16 + r2.value.length * 0.08 }, () => h$3(ml)), (u2 = a2.bottom) == null ? void 0 : u2.call(a2)]);
  };
} });
const fe = (t2, a2) => {
  const l2 = t2.replace(a2, "/").split("/"), o2 = [];
  let r2 = removeEndingSlash(a2);
  return l2.forEach((n2, i2) => {
    i2 !== l2.length - 1 ? (r2 += `${n2}/`, o2.push(r2)) : n2 !== "" && (r2 += n2, o2.push(r2));
  }), o2;
};
var be = defineComponent({ name: "BreadCrumb", setup() {
  const t2 = useRouter(), a2 = usePageData(), l2 = useRouteLocale(), o2 = usePageFrontmatter(), r2 = m$1(), n2 = ref([]), i2 = computed(() => (o2.value.breadcrumb || o2.value.breadcrumb !== false && r2.value.breadcrumb !== false) && n2.value.length > 1), u2 = computed(() => o2.value.breadcrumbIcon || o2.value.breadcrumbIcon !== false && r2.value.breadcrumbIcon !== false), s2 = () => {
    const c2 = t2.getRoutes(), p = fe(a2.value.path, l2.value).map((d2) => {
      const L2 = c2.find((y2) => y2.path === d2);
      if (L2) {
        const { meta: y2, path: N2 } = B$2(t2, L2.path), x2 = y2[V.shortTitle] || y2[V.title];
        if (x2)
          return { title: x2, icon: y2[V.icon], path: N2 };
      }
      return null;
    }).filter((d2) => d2 !== null);
    p.length > 1 && (n2.value = p);
  };
  return onMounted(() => {
    s2(), watch(() => a2.value.path, s2);
  }), () => h$3("nav", { class: ["breadcrumb", { disable: !i2.value }] }, i2.value ? h$3("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, n2.value.map((c2, p) => h$3("li", { class: { "is-active": n2.value.length - 1 === p }, property: "itemListElement", typeof: "ListItem" }, [h$3(RouterLink, { to: c2.path, property: "item", typeof: "WebPage" }, () => [u2.value ? h$3(O, { icon: c2.icon }) : null, h$3("span", { property: "name" }, c2.title || "Unknown")]), h$3("meta", { property: "position", content: p + 1 })]))) : []);
} });
const $ = (t2) => t2 === false ? false : isString(t2) ? j(t2, true) : isPlainObject(t2) ? t2 : null, w = (t2, a2, l2) => {
  const o2 = t2.findIndex((r2) => r2.link === a2);
  if (o2 !== -1) {
    const r2 = t2[o2 + l2];
    return r2 != null && r2.link ? r2 : null;
  }
  for (const r2 of t2)
    if (r2.children) {
      const n2 = w(r2.children, a2, l2);
      if (n2)
        return n2;
    }
  return null;
};
var ge = defineComponent({ name: "PageNav", setup() {
  const t2 = m$1(), a2 = usePageFrontmatter(), l2 = de$1(), o2 = usePageData(), r2 = Ea(), n2 = computed(() => {
    const u2 = $(a2.value.prev);
    return u2 === false ? null : u2 || (t2.value.prevLink === false ? null : w(l2.value, o2.value.path, -1));
  }), i2 = computed(() => {
    const u2 = $(a2.value.next);
    return u2 === false ? null : u2 || (t2.value.nextLink === false ? null : w(l2.value, o2.value.path, 1));
  });
  return useEventListener("keydown", (u2) => {
    u2.altKey && (u2.key === "ArrowRight" ? i2.value && (r2(i2.value.link), u2.preventDefault()) : u2.key === "ArrowLeft" && n2.value && (r2(n2.value.link), u2.preventDefault()));
  }), () => n2.value || i2.value ? h$3("nav", { class: "page-nav" }, [n2.value ? h$3(A, { class: "prev", config: n2.value }, () => {
    var u2, s2;
    return [h$3("div", { class: "hint" }, [h$3("span", { class: "arrow start" }), t2.value.metaLocales.prev]), h$3("div", { class: "link" }, [h$3(O, { icon: (u2 = n2.value) == null ? void 0 : u2.icon }), (s2 = n2.value) == null ? void 0 : s2.text])];
  }) : null, i2.value ? h$3(A, { class: "next", config: i2.value }, () => {
    var u2, s2;
    return [h$3("div", { class: "hint" }, [t2.value.metaLocales.next, h$3("span", { class: "arrow end" })]), h$3("div", { class: "link" }, [(u2 = i2.value) == null ? void 0 : u2.text, h$3(O, { icon: (s2 = i2.value) == null ? void 0 : s2.icon })])];
  }) : null]) : null;
} });
const ke = { GitHub: ":repo/edit/:branch/:path", GitLab: ":repo/-/edit/:branch/:path", Gitee: ":repo/edit/:branch/:path", Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default" }, Le = ({ docsRepo: t2, docsBranch: a2, docsDir: l2, filePathRelative: o2, editLinkPattern: r2 }) => {
  if (!o2)
    return null;
  const n2 = Oe$1(t2);
  let i2;
  return r2 ? i2 = r2 : n2 !== null && (i2 = ke[n2]), i2 ? i2.replace(/:repo/, isLinkHttp(t2) ? t2 : `https://github.com/${t2}`).replace(/:branch/, a2).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(l2)}/${o2}`)) : null;
}, ye = () => {
  const t2 = m$1(), a2 = usePageData(), l2 = usePageFrontmatter();
  return computed(() => {
    const { repo: o2, docsRepo: r2 = o2, docsBranch: n2 = "main", docsDir: i2 = "", editLink: u2, editLinkPattern: s2 = "" } = t2.value;
    if (!(l2.value.editLink ?? u2 ?? true) || !r2)
      return null;
    const c2 = Le({ docsRepo: r2, docsBranch: n2, docsDir: i2, editLinkPattern: s2, filePathRelative: a2.value.filePathRelative });
    return c2 ? { text: t2.value.metaLocales.editLink, link: c2 } : null;
  });
}, Ie = () => {
  const t2 = useSiteLocaleData(), a2 = m$1(), l2 = usePageData(), o2 = usePageFrontmatter();
  return computed(() => {
    var r2, n2;
    return !(o2.value.lastUpdated ?? a2.value.lastUpdated ?? true) || !((r2 = l2.value.git) != null && r2.updatedTime) ? null : new Date((n2 = l2.value.git) == null ? void 0 : n2.updatedTime).toLocaleString(t2.value.lang);
  });
}, De = () => {
  const t2 = m$1(), a2 = usePageData(), l2 = usePageFrontmatter();
  return computed(() => {
    var o2;
    return l2.value.contributors ?? t2.value.contributors ?? true ? ((o2 = a2.value.git) == null ? void 0 : o2.contributors) ?? null : null;
  });
};
var Pe = defineComponent({ name: "PageTitle", setup() {
  const t2 = usePageData(), a2 = usePageFrontmatter(), l2 = m$1(), { info: o2, items: r2 } = Ha();
  return () => h$3("div", { class: "page-title" }, [h$3("h1", [l2.value.titleIcon === false ? null : h$3(O, { icon: a2.value.icon }), t2.value.title]), h$3(Ll, { info: o2.value, ...r2.value === null ? {} : { items: r2.value } }), h$3("hr")]);
} });
const F = () => h$3(c$2, { name: "edit" }, () => [h$3("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h$3("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
F.displayName = "EditIcon";
var we = defineComponent({ name: "PageMeta", setup() {
  const t2 = m$1(), a2 = ye(), l2 = Ie(), o2 = De();
  return () => {
    const { metaLocales: r2 } = t2.value;
    return h$3("footer", { class: "page-meta" }, [a2.value ? h$3("div", { class: "meta-item edit-link" }, h$3(A, { class: "label", config: a2.value }, { before: () => h$3(F) })) : null, h$3("div", { class: "meta-item git-info" }, [l2.value ? h$3("div", { class: "update-time" }, [h$3("span", { class: "label" }, `${r2.lastUpdated}: `), h$3(ClientOnly, () => h$3("span", { class: "info" }, l2.value))]) : null, o2.value && o2.value.length ? h$3("div", { class: "contributors" }, [h$3("span", { class: "label" }, `${r2.contributors}: `), o2.value.map(({ email: n2, name: i2 }, u2) => [h$3("span", { class: "contributor", title: `email: ${n2}` }, i2), u2 !== o2.value.length - 1 ? "," : ""])]) : null])]);
  };
} }), xe = defineComponent({ name: "NormalPage", setup(t2, { slots: a2 }) {
  const l2 = usePageFrontmatter(), o2 = usePageData(), { isDarkmode: r2 } = U(), n2 = m$1(), i2 = computed(() => l2.value.toc || l2.value.toc !== false && n2.value.toc !== false);
  return () => h$3("main", { class: "page", id: "main-content" }, h$3(oe("LocalEncrypt") ? resolveComponent("LocalEncrypt") : F$3, () => {
    var u2, s2, c2, p;
    return [(u2 = a2.top) == null ? void 0 : u2.call(a2), l2.value.cover ? h$3("img", { class: "page-cover", src: l2.value.cover, alt: o2.value.title, "no-view": "" }) : null, h$3(be), h$3(Pe), i2.value ? h$3(Cl, { headerDepth: l2.value.headerDepth ?? n2.value.headerDepth ?? 2 }, { before: () => {
      var d2;
      return (d2 = a2.tocBefore) == null ? void 0 : d2.call(a2);
    }, after: () => {
      var d2;
      return (d2 = a2.tocAfter) == null ? void 0 : d2.call(a2);
    } }) : null, (s2 = a2.contentBefore) == null ? void 0 : s2.call(a2), h$3(ml), (c2 = a2.contentAfter) == null ? void 0 : c2.call(a2), h$3(we), h$3(ge), oe("CommentService") ? h$3(resolveComponent("CommentService"), { darkmode: r2.value }) : null, (p = a2.bottom) == null ? void 0 : p.call(a2)];
  }));
} }), Ae = defineComponent({ name: "Layout", setup() {
  m$1();
  const l2 = usePageData(), o2 = usePageFrontmatter(), { isMobile: r2 } = Q(), n2 = computed(() => {
    return "none";
  });
  return () => [h$3(Al), h$3(pl, {}, { default: () => o2.value.home ? h$3(he) : h$3(f, () => h$3(xe, { key: l2.value.path })), ...n2.value !== "none" ? { navScreenBottom: () => h$3(resolveComponent("BloggerInfo")) } : {}, ...!r2.value && n2.value === "always" ? { sidebar: () => h$3(resolveComponent("BloggerInfo")) } : {} })];
} }), Be = defineComponent({ name: "NotFoundHint", setup() {
  const t2 = m$1(), a2 = () => {
    const l2 = t2.value.routeLocales.notFoundMsg;
    return l2[Math.floor(Math.random() * l2.length)];
  };
  return () => h$3("div", { class: "not-found-hint" }, [h$3("p", { class: "error-code" }, "404"), h$3("h1", { class: "error-title" }, t2.value.routeLocales.notFoundTitle), h$3("p", { class: "error-hint" }, a2())]);
} }), Ee = defineComponent({ name: "NotFound", setup(t2, { slots: a2 }) {
  const l2 = useRouteLocale(), o2 = m$1(), { navigate: r2 } = useLink({ to: o2.value.home ?? l2.value });
  return () => [h$3(Al), h$3(pl, { noSidebar: true }, () => {
    var n2;
    return h$3("main", { class: "page not-found", id: "main-content" }, ((n2 = a2.default) == null ? void 0 : n2.call(a2)) || [h$3(Be), h$3("div", { class: "actions" }, [h$3("button", { type: "button", class: "action-button", onClick: () => {
      window.history.go(-1);
    } }, o2.value.routeLocales.back), h$3("button", { type: "button", class: "action-button", onClick: () => r2() }, o2.value.routeLocales.home)])]);
  })];
} });
const b = () => h$3(c$2, { name: "lock" }, () => h$3("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
b.displayName = "LockIcon";
var k = defineComponent({ name: "PasswordModal", props: { full: Boolean }, emits: ["verify"], setup(o2, { emit: e2 }) {
  const n2 = usePageFrontmatter(), s2 = m$1(), u2 = ref(""), a2 = ref(false), t2 = ref(false), l2 = computed(() => s2.value.encryptLocales);
  let c2 = null;
  const v2 = () => {
    c2 && clearTimeout(c2), a2.value = false, e2("verify", u2.value, t2.value), nextTick().then(() => {
      a2.value = true, c2 = setTimeout(() => {
        a2.value = false;
      }, 1e3);
    });
  };
  return () => h$3("div", { class: ["password-layer", { expand: o2.full || n2.value.home }] }, h$3("div", { class: "password-modal" }, [h$3("div", { class: ["hint", { tried: a2.value }] }, a2.value ? l2.value.errorHint : h$3(b, { "aria-label": l2.value.iconLabel })), h$3("div", { class: "password" }, [h$3("input", { type: "password", value: u2.value, placeholder: l2.value.placeholder, onInput: ({ target: i2 }) => {
    u2.value = i2.value;
  }, onKeydown: ({ key: i2 }) => {
    i2 === "Enter" && v2();
  } })]), h$3("div", { class: "remember-password" }, [h$3("input", { type: "checkbox", value: t2.value, onChange: () => t2.value = !t2.value }), l2.value.remember]), h$3("button", { type: "button", class: "submit", onClick: () => v2() }, "OK")]));
} });
const P = () => {
  const o2 = e$2();
  return computed(() => o2.value.encrypt || {});
}, S = "VUEPRESS_HOPE_GLOBAL_TOKEN", K = () => {
  const o2 = P(), e2 = useStorage(S, ""), n2 = useSessionStorage(S, ""), s2 = computed(() => {
    const { global: a2 = false, admin: t2 = [] } = o2.value;
    return a2 && t2.length > 0;
  }), u2 = computed(() => {
    if (s2.value) {
      if (e2.value)
        return o2.value.admin.some((a2) => compareSync(e2.value, a2));
      if (n2.value)
        return o2.value.admin.some((a2) => compareSync(n2.value, a2));
    }
    return false;
  });
  return { isEncrypted: s2, isDecrypted: u2, validate: (a2, t2 = false) => {
    (t2 ? e2 : n2).value = a2;
  } };
}, y = (o2 = "", e2) => !!o2 && compareSync(o2, e2), D = "VUEPRESS_HOPE_PATH_TOKEN", z = () => {
  const o2 = usePageData(), e2 = P(), n2 = useStorage(D, {}), s2 = useSessionStorage(D, {}), u2 = (t2) => isPlainObject(e2.value.config) ? g$4(e2.value.config).filter((l2) => N(decodeURI(t2), l2)).sort((l2, c2) => c2.length - l2.length) : [], a2 = (t2) => {
    const l2 = u2(t2);
    if (l2.length > 0) {
      const { config: c2 = {} } = e2.value;
      return { isEncrypted: true, isDecrypted: l2.some((v2) => n2.value[v2] && c2[v2].some((i2) => y(n2.value[v2], i2)) || s2.value[v2] && c2[v2].some((i2) => y(s2.value[v2], i2))) };
    }
    return { isDecrypted: false, isEncrypted: false };
  };
  return { status: computed(() => a2(o2.value.path)), getStatus: a2, validate: (t2, l2 = false) => {
    const { config: c2 = {} } = e2.value, v2 = u2(o2.value.path);
    for (const i2 of v2)
      if (c2[i2].filter((L2) => y(t2, L2))) {
        (l2 ? n2 : s2).value[i2] = t2;
        break;
      }
  } };
};
var B = defineComponent({ name: "GlobalEncrypt", setup(o2, { slots: e2 }) {
  const { isDecrypted: n2, isEncrypted: s2, validate: u2 } = K(), a2 = ref(false);
  return onMounted(() => {
    a2.value = true;
  }), () => h$3(f, () => {
    var t2, l2;
    return s2.value ? a2.value ? n2.value ? (t2 = e2.default) == null ? void 0 : t2.call(e2) : h$3(k, { full: true, onVerify: u2 }) : null : (l2 = e2.default) == null ? void 0 : l2.call(e2);
  });
} }), C = defineComponent({ name: "LocalEncrypt", setup(o2, { slots: e2 }) {
  const { status: n2, validate: s2 } = z(), u2 = ref(false);
  return onMounted(() => {
    u2.value = true;
  }), () => {
    var a2, t2;
    const { isEncrypted: l2, isDecrypted: c2 } = n2.value;
    return l2 ? u2.value ? c2 ? ((a2 = e2.default) == null ? void 0 : a2.call(e2)) || null : h$3(k, { full: true, onVerify: s2 }) : null : ((t2 = e2.default) == null ? void 0 : t2.call(e2)) || null;
  };
} });
const all$1 = "";
const slidePage = "";
var d = defineComponent({ name: "SlidePage", setup() {
  const i2 = useRouter(), o2 = ref(false), n2 = ref(), s2 = () => {
    o2.value = !o2.value;
  }, e2 = () => {
    o2.value = false;
  }, u2 = () => {
    e2(), window.history.go(-1);
  }, r2 = () => {
    e2(), i2.push("/");
  };
  return onClickOutside(n2, e2), () => h$3("div", { class: "presentation" }, [h$3(Content), h$3("div", { ref: n2, class: ["menu", { active: o2.value }] }, [h$3("button", { type: "button", class: "menu-button", onClick: () => s2() }, h$3("span", { class: "icon" })), h$3("button", { type: "button", class: "back-button", onClick: () => u2() }, h$3(q$1)), h$3("button", { type: "button", class: "home-button", onClick: () => r2() }, h$3(a$2))])]);
} });
const all = "";
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await t().wait();
      return scrollBehavior(...args);
    };
    Ra(app);
    app.component("HopeIcon", O);
    app.component("GlobalEncrypt", B);
    app.component("LocalEncrypt", C);
  },
  setup: () => {
    Fa();
    qa();
  },
  layouts: {
    Layout: Ae,
    NotFound: Ee,
    Slide: d
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  K$2,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  l$2,
  Y$1,
  clientConfig9,
  b$1,
  clientConfig11
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "「迷途物语」", "i": "home" }, ["/index.html", "/README.md"]],
  ["v-147825fb", "/docs/", { "y": "a", "t": "「文档」", "i": "creative" }, ["/docs/index.html", "/docs/README.md"]],
  ["v-14f47f59", "/mitu/", { "y": "a", "t": "「迷途之岛」", "i": "discover", "I": 0 }, ["/mitu/index.html", "/mitu/README.md"]],
  ["v-c0c7de8c", "/zh-tc/", { "y": "h", "t": "「迷途物語」", "i": "home" }, ["/zh-tc/index.html", "/zh-tc/README.md"]],
  ["v-528878da", "/zh-tc/docs/", { "y": "a", "t": "「文檔」", "i": "creative" }, ["/zh-tc/docs/index.html", "/zh-tc/docs/README.md"]],
  ["v-5304d238", "/zh-tc/mitu/", { "y": "a", "t": "「迷途之島」", "i": "discover", "I": 0 }, ["/zh-tc/mitu/index.html", "/zh-tc/mitu/README.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, ["/404"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h$3(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$3(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$3(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp,
  f$4 as f,
  k$3 as k
};
