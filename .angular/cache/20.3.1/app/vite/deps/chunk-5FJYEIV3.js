import {
  __async,
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/theme-DiVJyqlX.js
var hostContext = /* @__PURE__ */ __name((selector, el) => {
  return el.closest(selector) !== null;
}, "hostContext");
var createColorClasses = /* @__PURE__ */ __name((color, cssClassMap) => {
  return typeof color === "string" && color.length > 0 ? Object.assign({ "ion-color": true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
}, "createColorClasses");
var getClassList = /* @__PURE__ */ __name((classes) => {
  if (classes !== void 0) {
    const array = Array.isArray(classes) ? classes : classes.split(" ");
    return array.filter((c) => c != null).map((c) => c.trim()).filter((c) => c !== "");
  }
  return [];
}, "getClassList");
var getClassMap = /* @__PURE__ */ __name((classes) => {
  const map = {};
  getClassList(classes).forEach((c) => map[c] = true);
  return map;
}, "getClassMap");
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = /* @__PURE__ */ __name((url, ev, direction, animation) => __async(null, null, function* () {
  if (url != null && url[0] !== "#" && !SCHEME.test(url)) {
    const router = document.querySelector("ion-router");
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
}), "openURL");

export {
  hostContext,
  createColorClasses,
  getClassMap,
  openURL
};
/*! Bundled license information:

@ionic/core/dist/esm/theme-DiVJyqlX.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-5FJYEIV3.js.map
