import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-FTYOYGL7.js";
import {
  writeTask
} from "./chunk-RVN4HUSD.js";
import {
  createGesture
} from "./chunk-5XH4WTAS.js";
import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/button-active-DBUPuLNw.js
var createButtonActiveGesture = /* @__PURE__ */ __name((el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = /* @__PURE__ */ __name((x, y, hapticFeedbackFn) => {
    if (typeof document === "undefined") {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target) || target.disabled) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  }, "activateButtonAtPoint");
  const setActiveButton = /* @__PURE__ */ __name((button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    writeTask(() => buttonToModify.classList.add("ion-activated"));
    hapticFeedbackFn();
  }, "setActiveButton");
  const clearActiveButton = /* @__PURE__ */ __name((dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    writeTask(() => buttonToModify.classList.remove("ion-activated"));
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = void 0;
  }, "clearActiveButton");
  return createGesture({
    el,
    gestureName: "buttonActiveDrag",
    threshold: 0,
    onStart: /* @__PURE__ */ __name((ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionStart), "onStart"),
    onMove: /* @__PURE__ */ __name((ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionChanged), "onMove"),
    onEnd: /* @__PURE__ */ __name(() => {
      clearActiveButton(true);
      hapticSelectionEnd();
      initialTouchedButton = void 0;
    }, "onEnd")
  });
}, "createButtonActiveGesture");

export {
  createButtonActiveGesture
};
/*! Bundled license information:

@ionic/core/dist/esm/button-active-DBUPuLNw.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-C275NHQL.js.map
