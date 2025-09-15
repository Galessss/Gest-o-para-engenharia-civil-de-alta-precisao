import {
  __async,
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/lock-controller-B-hirT0v.js
var createLockController = /* @__PURE__ */ __name(() => {
  let waitPromise;
  const lock = /* @__PURE__ */ __name(() => __async(null, null, function* () {
    const p = waitPromise;
    let resolve;
    waitPromise = new Promise((r) => resolve = r);
    if (p !== void 0) {
      yield p;
    }
    return resolve;
  }), "lock");
  return {
    lock
  };
}, "createLockController");

export {
  createLockController
};
/*! Bundled license information:

@ionic/core/dist/esm/lock-controller-B-hirT0v.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-IZNJAGHE.js.map
