import {
  isRTL
} from "./chunk-TOJUG4F5.js";
import {
  clamp
} from "./chunk-B346ZSWA.js";
import "./chunk-RVN4HUSD.js";
import {
  createGesture
} from "./chunk-5XH4WTAS.js";
import "./chunk-H3GXRPTH.js";
import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/swipe-back-B2YfOHRM.js
var createSwipeBackGesture = /* @__PURE__ */ __name((el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = isRTL(el);
  const isAtEdge = /* @__PURE__ */ __name((detail) => {
    const threshold = 50;
    const { startX } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  }, "isAtEdge");
  const getDeltaX = /* @__PURE__ */ __name((detail) => {
    return rtl ? -detail.deltaX : detail.deltaX;
  }, "getDeltaX");
  const getVelocityX = /* @__PURE__ */ __name((detail) => {
    return rtl ? -detail.velocityX : detail.velocityX;
  }, "getVelocityX");
  const canStart = /* @__PURE__ */ __name((detail) => {
    rtl = isRTL(el);
    return isAtEdge(detail) && canStartHandler();
  }, "canStart");
  const onMove = /* @__PURE__ */ __name((detail) => {
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  }, "onMove");
  const onEnd = /* @__PURE__ */ __name((detail) => {
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : clamp(0, stepValue, 0.9999), realDur);
  }, "onEnd");
  return createGesture({
    el,
    gestureName: "goback-swipe",
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
}, "createSwipeBackGesture");
export {
  createSwipeBackGesture
};
/*! Bundled license information:

@ionic/core/dist/esm/swipe-back-B2YfOHRM.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=swipe-back-B2YfOHRM-CXTCLZAK.js.map
