import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js
var watchForOptions = /* @__PURE__ */ __name((containerEl, tagName, onChange) => {
  if (typeof MutationObserver === "undefined") {
    return;
  }
  const mutation = new MutationObserver((mutationList) => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
}, "watchForOptions");
var getSelectedOption = /* @__PURE__ */ __name((mutationList, tagName) => {
  let newOption;
  mutationList.forEach((mut) => {
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
}, "getSelectedOption");
var findCheckedOption = /* @__PURE__ */ __name((node, tagName) => {
  if (node.nodeType !== 1) {
    return void 0;
  }
  const el = node;
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find((o) => o.value === el.value);
}, "findCheckedOption");

export {
  watchForOptions
};
/*! Bundled license information:

@ionic/core/dist/esm/watch-options-Dtdm8lKC.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-YAA6TTDC.js.map
