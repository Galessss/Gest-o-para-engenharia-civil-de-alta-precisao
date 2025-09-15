import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js
var compareOptions = /* @__PURE__ */ __name((currentValue, compareValue, compareWith) => {
  if (typeof compareWith === "function") {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === "string") {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
}, "compareOptions");
var isOptionSelected = /* @__PURE__ */ __name((currentValue, compareValue, compareWith) => {
  if (currentValue === void 0) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
}, "isOptionSelected");

export {
  compareOptions,
  isOptionSelected
};
/*! Bundled license information:

@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-FC7U4PBR.js.map
