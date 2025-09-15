import {
  MENU_BACK_BUTTON_PRIORITY
} from "./chunk-OVWLXMXN.js";
import {
  createAnimation
} from "./chunk-5IFA5FWG.js";
import {
  doc
} from "./chunk-LCMILTBF.js";
import {
  getIonMode
} from "./chunk-AUXFAMU7.js";
import {
  componentOnReady
} from "./chunk-B346ZSWA.js";
import {
  printIonWarning
} from "./chunk-RVN4HUSD.js";
import {
  __async,
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/index-CXSTcaAW.js
var baseAnimation = /* @__PURE__ */ __name((isIos) => {
  return createAnimation().duration(isIos ? 400 : 300);
}, "baseAnimation");
var menuOverlayAnimation = /* @__PURE__ */ __name((menu) => {
  let closedX;
  let openedX;
  const width = menu.width + 8;
  const menuAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  if (menu.isEndSide) {
    closedX = width + "px";
    openedX = "0px";
  } else {
    closedX = -width + "px";
    openedX = "0px";
  }
  menuAnimation.addElement(menu.menuInnerEl).fromTo("transform", `translateX(${closedX})`, `translateX(${openedX})`);
  const mode = getIonMode(menu);
  const isIos = mode === "ios";
  const opacity = isIos ? 0.2 : 0.25;
  backdropAnimation.addElement(menu.backdropEl).fromTo("opacity", 0.01, opacity);
  return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
}, "menuOverlayAnimation");
var menuPushAnimation = /* @__PURE__ */ __name((menu) => {
  let contentOpenedX;
  let menuClosedX;
  const mode = getIonMode(menu);
  const width = menu.width;
  if (menu.isEndSide) {
    contentOpenedX = -width + "px";
    menuClosedX = width + "px";
  } else {
    contentOpenedX = width + "px";
    menuClosedX = -width + "px";
  }
  const menuAnimation = createAnimation().addElement(menu.menuInnerEl).fromTo("transform", `translateX(${menuClosedX})`, "translateX(0px)");
  const contentAnimation = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${contentOpenedX})`);
  const backdropAnimation = createAnimation().addElement(menu.backdropEl).fromTo("opacity", 0.01, 0.32);
  return baseAnimation(mode === "ios").addAnimation([menuAnimation, contentAnimation, backdropAnimation]);
}, "menuPushAnimation");
var menuRevealAnimation = /* @__PURE__ */ __name((menu) => {
  const mode = getIonMode(menu);
  const openedX = menu.width * (menu.isEndSide ? -1 : 1) + "px";
  const contentOpen = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${openedX})`);
  return baseAnimation(mode === "ios").addAnimation(contentOpen);
}, "menuRevealAnimation");
var createMenuController = /* @__PURE__ */ __name(() => {
  const menuAnimations = /* @__PURE__ */ new Map();
  const menus = [];
  const open = /* @__PURE__ */ __name((menu) => __async(null, null, function* () {
    const menuEl = yield get(menu, true);
    if (menuEl) {
      return menuEl.open();
    }
    return false;
  }), "open");
  const close = /* @__PURE__ */ __name((menu) => __async(null, null, function* () {
    const menuEl = yield menu !== void 0 ? get(menu, true) : getOpen();
    if (menuEl !== void 0) {
      return menuEl.close();
    }
    return false;
  }), "close");
  const toggle = /* @__PURE__ */ __name((menu) => __async(null, null, function* () {
    const menuEl = yield get(menu, true);
    if (menuEl) {
      return menuEl.toggle();
    }
    return false;
  }), "toggle");
  const enable = /* @__PURE__ */ __name((shouldEnable, menu) => __async(null, null, function* () {
    const menuEl = yield get(menu);
    if (menuEl) {
      menuEl.disabled = !shouldEnable;
    }
    return menuEl;
  }), "enable");
  const swipeGesture = /* @__PURE__ */ __name((shouldEnable, menu) => __async(null, null, function* () {
    const menuEl = yield get(menu);
    if (menuEl) {
      menuEl.swipeGesture = shouldEnable;
    }
    return menuEl;
  }), "swipeGesture");
  const isOpen = /* @__PURE__ */ __name((menu) => __async(null, null, function* () {
    if (menu != null) {
      const menuEl = yield get(menu);
      return menuEl !== void 0 && menuEl.isOpen();
    } else {
      const menuEl = yield getOpen();
      return menuEl !== void 0;
    }
  }), "isOpen");
  const isEnabled = /* @__PURE__ */ __name((menu) => __async(null, null, function* () {
    const menuEl = yield get(menu);
    if (menuEl) {
      return !menuEl.disabled;
    }
    return false;
  }), "isEnabled");
  const get = /* @__PURE__ */ __name((menu, logOnMultipleSideMenus = false) => __async(null, null, function* () {
    yield waitUntilReady();
    if (menu === "start" || menu === "end") {
      const menuRefs = menus.filter((m) => m.side === menu && !m.disabled);
      if (menuRefs.length >= 1) {
        if (menuRefs.length > 1 && logOnMultipleSideMenus) {
          printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, menuRefs.map((m) => m.el));
        }
        return menuRefs[0].el;
      }
      const sideMenuRefs = menus.filter((m) => m.side === menu);
      if (sideMenuRefs.length >= 1) {
        if (sideMenuRefs.length > 1 && logOnMultipleSideMenus) {
          printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, sideMenuRefs.map((m) => m.el));
        }
        return sideMenuRefs[0].el;
      }
    } else if (menu != null) {
      return find((m) => m.menuId === menu);
    }
    const menuEl = find((m) => !m.disabled);
    if (menuEl) {
      return menuEl;
    }
    return menus.length > 0 ? menus[0].el : void 0;
  }), "get");
  const getOpen = /* @__PURE__ */ __name(() => __async(null, null, function* () {
    yield waitUntilReady();
    return _getOpenSync();
  }), "getOpen");
  const getMenus = /* @__PURE__ */ __name(() => __async(null, null, function* () {
    yield waitUntilReady();
    return getMenusSync();
  }), "getMenus");
  const isAnimating = /* @__PURE__ */ __name(() => __async(null, null, function* () {
    yield waitUntilReady();
    return isAnimatingSync();
  }), "isAnimating");
  const registerAnimation = /* @__PURE__ */ __name((name, animation) => {
    menuAnimations.set(name, animation);
  }, "registerAnimation");
  const _register = /* @__PURE__ */ __name((menu) => {
    if (menus.indexOf(menu) < 0) {
      menus.push(menu);
    }
  }, "_register");
  const _unregister = /* @__PURE__ */ __name((menu) => {
    const index = menus.indexOf(menu);
    if (index > -1) {
      menus.splice(index, 1);
    }
  }, "_unregister");
  const _setOpen = /* @__PURE__ */ __name((menu, shouldOpen, animated, role) => __async(null, null, function* () {
    if (isAnimatingSync()) {
      return false;
    }
    if (shouldOpen) {
      const openedMenu = yield getOpen();
      if (openedMenu && menu.el !== openedMenu) {
        yield openedMenu.setOpen(false, false);
      }
    }
    return menu._setOpen(shouldOpen, animated, role);
  }), "_setOpen");
  const _createAnimation = /* @__PURE__ */ __name((type, menuCmp) => {
    const animationBuilder = menuAnimations.get(type);
    if (!animationBuilder) {
      throw new Error("animation not registered");
    }
    const animation = animationBuilder(menuCmp);
    return animation;
  }, "_createAnimation");
  const _getOpenSync = /* @__PURE__ */ __name(() => {
    return find((m) => m._isOpen);
  }, "_getOpenSync");
  const getMenusSync = /* @__PURE__ */ __name(() => {
    return menus.map((menu) => menu.el);
  }, "getMenusSync");
  const isAnimatingSync = /* @__PURE__ */ __name(() => {
    return menus.some((menu) => menu.isAnimating);
  }, "isAnimatingSync");
  const find = /* @__PURE__ */ __name((predicate) => {
    const instance = menus.find(predicate);
    if (instance !== void 0) {
      return instance.el;
    }
    return void 0;
  }, "find");
  const waitUntilReady = /* @__PURE__ */ __name(() => {
    return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu) => new Promise((resolve) => componentOnReady(menu, resolve))));
  }, "waitUntilReady");
  registerAnimation("reveal", menuRevealAnimation);
  registerAnimation("push", menuPushAnimation);
  registerAnimation("overlay", menuOverlayAnimation);
  doc === null || doc === void 0 ? void 0 : doc.addEventListener("ionBackButton", (ev) => {
    const openMenu = _getOpenSync();
    if (openMenu) {
      ev.detail.register(MENU_BACK_BUTTON_PRIORITY, () => {
        return openMenu.close();
      });
    }
  });
  return {
    registerAnimation,
    get,
    getMenus,
    getOpen,
    isEnabled,
    swipeGesture,
    isAnimating,
    isOpen,
    enable,
    toggle,
    close,
    open,
    _getOpenSync,
    _createAnimation,
    _register,
    _unregister,
    _setOpen
  };
}, "createMenuController");
var menuController = createMenuController();

export {
  menuController
};
/*! Bundled license information:

@ionic/core/dist/esm/index-CXSTcaAW.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-43JF4DZ5.js.map
