import {
  Keyboard,
  KeyboardResize
} from "./chunk-KFKELYPZ.js";
import {
  doc,
  win
} from "./chunk-LCMILTBF.js";
import {
  __async,
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/keyboard-controller-BaaVITYt.js
var getResizeContainer = /* @__PURE__ */ __name((resizeMode) => {
  if (doc === void 0 || resizeMode === KeyboardResize.None || resizeMode === void 0) {
    return null;
  }
  const ionApp = doc.querySelector("ion-app");
  return ionApp !== null && ionApp !== void 0 ? ionApp : doc.body;
}, "getResizeContainer");
var getResizeContainerHeight = /* @__PURE__ */ __name((resizeMode) => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
}, "getResizeContainerHeight");
var createKeyboardController = /* @__PURE__ */ __name((keyboardChangeCallback) => __async(null, null, function* () {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;
  let initialResizeContainerHeight;
  const init = /* @__PURE__ */ __name(() => __async(null, null, function* () {
    const resizeOptions = yield Keyboard.getResizeMode();
    const resizeMode = resizeOptions === void 0 ? void 0 : resizeOptions.mode;
    keyboardWillShowHandler = /* @__PURE__ */ __name(() => {
      if (initialResizeContainerHeight === void 0) {
        initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
      }
      keyboardVisible = true;
      fireChangeCallback(keyboardVisible, resizeMode);
    }, "keyboardWillShowHandler");
    keyboardWillHideHandler = /* @__PURE__ */ __name(() => {
      keyboardVisible = false;
      fireChangeCallback(keyboardVisible, resizeMode);
    }, "keyboardWillHideHandler");
    win === null || win === void 0 ? void 0 : win.addEventListener("keyboardWillShow", keyboardWillShowHandler);
    win === null || win === void 0 ? void 0 : win.addEventListener("keyboardWillHide", keyboardWillHideHandler);
  }), "init");
  const fireChangeCallback = /* @__PURE__ */ __name((state, resizeMode) => {
    if (keyboardChangeCallback) {
      keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
    }
  }, "fireChangeCallback");
  const createResizePromiseIfNeeded = /* @__PURE__ */ __name((resizeMode) => {
    if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      initialResizeContainerHeight === 0 || /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      initialResizeContainerHeight === getResizeContainerHeight(resizeMode)
    ) {
      return;
    }
    const containerElement = getResizeContainer(resizeMode);
    if (containerElement === null) {
      return;
    }
    return new Promise((resolve) => {
      const callback = /* @__PURE__ */ __name(() => {
        if (containerElement.clientHeight === initialResizeContainerHeight) {
          ro.disconnect();
          resolve();
        }
      }, "callback");
      const ro = new ResizeObserver(callback);
      ro.observe(containerElement);
    });
  }, "createResizePromiseIfNeeded");
  const destroy = /* @__PURE__ */ __name(() => {
    win === null || win === void 0 ? void 0 : win.removeEventListener("keyboardWillShow", keyboardWillShowHandler);
    win === null || win === void 0 ? void 0 : win.removeEventListener("keyboardWillHide", keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = void 0;
  }, "destroy");
  const isKeyboardVisible = /* @__PURE__ */ __name(() => keyboardVisible, "isKeyboardVisible");
  yield init();
  return { init, destroy, isKeyboardVisible };
}), "createKeyboardController");

export {
  createKeyboardController
};
/*! Bundled license information:

@ionic/core/dist/esm/keyboard-controller-BaaVITYt.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-DJXVYWZD.js.map
