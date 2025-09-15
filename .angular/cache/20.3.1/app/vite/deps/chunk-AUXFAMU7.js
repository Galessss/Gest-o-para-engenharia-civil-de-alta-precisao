import {
  config,
  configFromSession,
  configFromURL,
  getMode,
  printIonWarning,
  saveConfig,
  setMode
} from "./chunk-RVN4HUSD.js";
import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/ionic-global-CTSyufhF.js
var getPlatforms = /* @__PURE__ */ __name((win) => setupPlatforms(win), "getPlatforms");
var isPlatform = /* @__PURE__ */ __name((winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
}, "isPlatform");
var setupPlatforms = /* @__PURE__ */ __name((win = window) => {
  if (typeof win === "undefined") {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
}, "setupPlatforms");
var detectPlatforms = /* @__PURE__ */ __name((win) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
}, "detectPlatforms");
var isMobileWeb = /* @__PURE__ */ __name((win) => isMobile(win) && !isHybrid(win), "isMobileWeb");
var isIpad = /* @__PURE__ */ __name((win) => {
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
}, "isIpad");
var isIphone = /* @__PURE__ */ __name((win) => testUserAgent(win, /iPhone/i), "isIphone");
var isIOS = /* @__PURE__ */ __name((win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win), "isIOS");
var isAndroid = /* @__PURE__ */ __name((win) => testUserAgent(win, /android|sink/i), "isAndroid");
var isAndroidTablet = /* @__PURE__ */ __name((win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
}, "isAndroidTablet");
var isPhablet = /* @__PURE__ */ __name((win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
}, "isPhablet");
var isTablet = /* @__PURE__ */ __name((win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
}, "isTablet");
var isMobile = /* @__PURE__ */ __name((win) => matchMedia(win, "(any-pointer:coarse)"), "isMobile");
var isDesktop = /* @__PURE__ */ __name((win) => !isMobile(win), "isDesktop");
var isHybrid = /* @__PURE__ */ __name((win) => isCordova(win) || isCapacitorNative(win), "isHybrid");
var isCordova = /* @__PURE__ */ __name((win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]), "isCordova");
var isCapacitorNative = /* @__PURE__ */ __name((win) => {
  const capacitor = win["Capacitor"];
  return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
}, "isCapacitorNative");
var isElectron = /* @__PURE__ */ __name((win) => testUserAgent(win, /electron/i), "isElectron");
var isPWA = /* @__PURE__ */ __name((win) => {
  var _a;
  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, "(display-mode: standalone)").matches) || win.navigator.standalone);
}, "isPWA");
var testUserAgent = /* @__PURE__ */ __name((win, expr) => expr.test(win.navigator.userAgent), "testUserAgent");
var matchMedia = /* @__PURE__ */ __name((win, query) => {
  var _a;
  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
}, "matchMedia");
var PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
var defaultMode;
var getIonMode = /* @__PURE__ */ __name((ref) => {
  return ref && getMode(ref) || defaultMode;
}, "getIonMode");
var initialize = /* @__PURE__ */ __name((userConfig = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), { persistConfig: false }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean("persistConfig")) {
    saveConfig(win, configObj);
  }
  setupPlatforms(win);
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get("mode", doc.documentElement.getAttribute("mode") || (isPlatform(win, "ios") ? "ios" : "md"));
  config.set("mode", defaultMode);
  doc.documentElement.setAttribute("mode", defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean("_testing")) {
    config.set("animated", false);
  }
  const isIonicElement = /* @__PURE__ */ __name((elm) => {
    var _a;
    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith("ION-");
  }, "isIonicElement");
  const isAllowedIonicModeValue = /* @__PURE__ */ __name((elmMode) => ["ios", "md"].includes(elmMode), "isAllowedIonicModeValue");
  setMode((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute("mode");
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          printIonWarning('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
}, "initialize");

export {
  getPlatforms,
  isPlatform,
  getIonMode,
  initialize
};
/*! Bundled license information:

@ionic/core/dist/esm/ionic-global-CTSyufhF.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-AUXFAMU7.js.map
