import {
  getCapacitor
} from "./chunk-HJNNBEFY.js";
import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/haptic-DzAMWJuk.js
var ImpactStyle;
(function(ImpactStyle2) {
  ImpactStyle2["Heavy"] = "HEAVY";
  ImpactStyle2["Medium"] = "MEDIUM";
  ImpactStyle2["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function(NotificationType2) {
  NotificationType2["Success"] = "SUCCESS";
  NotificationType2["Warning"] = "WARNING";
  NotificationType2["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
var HapticEngine = {
  getEngine() {
    const capacitor = getCapacitor();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable("Haptics")) {
      return capacitor.Plugins.Haptics;
    }
    return void 0;
  },
  available() {
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    const capacitor = getCapacitor();
    if ((capacitor === null || capacitor === void 0 ? void 0 : capacitor.getPlatform()) === "web") {
      return typeof navigator !== "undefined" && navigator.vibrate !== void 0;
    }
    return true;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.impact({ style: options.style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.notification({ type: options.type });
  },
  selection() {
    this.impact({ style: ImpactStyle.Light });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionStart();
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionChanged();
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionEnd();
  }
};
var hapticAvailable = /* @__PURE__ */ __name(() => {
  return HapticEngine.available();
}, "hapticAvailable");
var hapticSelection = /* @__PURE__ */ __name(() => {
  hapticAvailable() && HapticEngine.selection();
}, "hapticSelection");
var hapticSelectionStart = /* @__PURE__ */ __name(() => {
  hapticAvailable() && HapticEngine.selectionStart();
}, "hapticSelectionStart");
var hapticSelectionChanged = /* @__PURE__ */ __name(() => {
  hapticAvailable() && HapticEngine.selectionChanged();
}, "hapticSelectionChanged");
var hapticSelectionEnd = /* @__PURE__ */ __name(() => {
  hapticAvailable() && HapticEngine.selectionEnd();
}, "hapticSelectionEnd");
var hapticImpact = /* @__PURE__ */ __name((options) => {
  hapticAvailable() && HapticEngine.impact(options);
}, "hapticImpact");

export {
  ImpactStyle,
  hapticSelection,
  hapticSelectionStart,
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticImpact
};
/*! Bundled license information:

@ionic/core/dist/esm/haptic-DzAMWJuk.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-FTYOYGL7.js.map
