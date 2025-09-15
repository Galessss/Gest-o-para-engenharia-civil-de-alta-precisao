import {
  win
} from "./chunk-LCMILTBF.js";
import {
  printIonError
} from "./chunk-RVN4HUSD.js";
import {
  __name
} from "./chunk-EXLSCMNP.js";

// node_modules/@ionic/core/dist/esm/animation-BvhAtgca.js
var animationPrefix;
var getAnimationPrefix = /* @__PURE__ */ __name((el) => {
  if (animationPrefix === void 0) {
    const supportsUnprefixed = el.style.animationName !== void 0;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== void 0;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? "-webkit-" : "";
  }
  return animationPrefix;
}, "getAnimationPrefix");
var setStyleProperty = /* @__PURE__ */ __name((element, propertyName, value) => {
  const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
  element.style.setProperty(prefix + propertyName, value);
}, "setStyleProperty");
var addClassToArray = /* @__PURE__ */ __name((classes = [], className) => {
  if (className !== void 0) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
}, "addClassToArray");
var createAnimation = /* @__PURE__ */ __name((animationId) => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
  const supportsWebAnimations = typeof Element === "function" && typeof Element.prototype.animate === "function" && supportsAnimationEffect;
  const getWebAnimations = /* @__PURE__ */ __name(() => {
    return webAnimations;
  }, "getWebAnimations");
  const destroy = /* @__PURE__ */ __name((clearStyleSheets) => {
    childAnimations.forEach((childAnimation) => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  }, "destroy");
  const cleanUp = /* @__PURE__ */ __name((clearStyleSheets) => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  }, "cleanUp");
  const resetFlags = /* @__PURE__ */ __name(() => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = void 0;
    forceDurationValue = void 0;
    forceDelayValue = void 0;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  }, "resetFlags");
  const isRunning = /* @__PURE__ */ __name(() => {
    return numAnimationsRunning !== 0 && !paused;
  }, "isRunning");
  const clearCallback = /* @__PURE__ */ __name((callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex((callbackObject) => callbackObject.c === callbackToRemove);
    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  }, "clearCallback");
  const onStop = /* @__PURE__ */ __name((callback, opts) => {
    onStopOneTimeCallbacks.push({ c: callback, o: opts });
    return ani;
  }, "onStop");
  const onFinish = /* @__PURE__ */ __name((callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({ c: callback, o: opts });
    return ani;
  }, "onFinish");
  const clearOnFinish = /* @__PURE__ */ __name(() => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  }, "clearOnFinish");
  const cleanUpElements = /* @__PURE__ */ __name(() => {
    if (supportsWebAnimations) {
      webAnimations.forEach((animation) => {
        animation.cancel();
      });
      webAnimations.length = 0;
    }
  }, "cleanUpElements");
  const cleanUpStyleSheets = /* @__PURE__ */ __name(() => {
    stylesheets.forEach((stylesheet) => {
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  }, "cleanUpStyleSheets");
  const beforeAddRead = /* @__PURE__ */ __name((readFn) => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  }, "beforeAddRead");
  const beforeAddWrite = /* @__PURE__ */ __name((writeFn) => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  }, "beforeAddWrite");
  const afterAddRead = /* @__PURE__ */ __name((readFn) => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  }, "afterAddRead");
  const afterAddWrite = /* @__PURE__ */ __name((writeFn) => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  }, "afterAddWrite");
  const beforeAddClass = /* @__PURE__ */ __name((className) => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  }, "beforeAddClass");
  const beforeRemoveClass = /* @__PURE__ */ __name((className) => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  }, "beforeRemoveClass");
  const beforeStyles = /* @__PURE__ */ __name((styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  }, "beforeStyles");
  const beforeClearStyles = /* @__PURE__ */ __name((propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = "";
    }
    return ani;
  }, "beforeClearStyles");
  const afterAddClass = /* @__PURE__ */ __name((className) => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  }, "afterAddClass");
  const afterRemoveClass = /* @__PURE__ */ __name((className) => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  }, "afterRemoveClass");
  const afterStyles = /* @__PURE__ */ __name((styles = {}) => {
    afterStylesValue = styles;
    return ani;
  }, "afterStyles");
  const afterClearStyles = /* @__PURE__ */ __name((propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = "";
    }
    return ani;
  }, "afterClearStyles");
  const getFill = /* @__PURE__ */ __name(() => {
    if (_fill !== void 0) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return "both";
  }, "getFill");
  const getDirection = /* @__PURE__ */ __name(() => {
    if (forceDirectionValue !== void 0) {
      return forceDirectionValue;
    }
    if (_direction !== void 0) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return "normal";
  }, "getDirection");
  const getEasing = /* @__PURE__ */ __name(() => {
    if (shouldForceLinearEasing) {
      return "linear";
    }
    if (_easing !== void 0) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return "linear";
  }, "getEasing");
  const getDuration = /* @__PURE__ */ __name(() => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== void 0) {
      return forceDurationValue;
    }
    if (_duration !== void 0) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  }, "getDuration");
  const getIterations = /* @__PURE__ */ __name(() => {
    if (_iterations !== void 0) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  }, "getIterations");
  const getDelay = /* @__PURE__ */ __name(() => {
    if (forceDelayValue !== void 0) {
      return forceDelayValue;
    }
    if (_delay !== void 0) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  }, "getDelay");
  const getKeyframes = /* @__PURE__ */ __name(() => {
    return _keyframes;
  }, "getKeyframes");
  const direction = /* @__PURE__ */ __name((animationDirection) => {
    _direction = animationDirection;
    update(true);
    return ani;
  }, "direction");
  const fill = /* @__PURE__ */ __name((animationFill) => {
    _fill = animationFill;
    update(true);
    return ani;
  }, "fill");
  const delay = /* @__PURE__ */ __name((animationDelay) => {
    _delay = animationDelay;
    update(true);
    return ani;
  }, "delay");
  const easing = /* @__PURE__ */ __name((animationEasing) => {
    _easing = animationEasing;
    update(true);
    return ani;
  }, "easing");
  const duration = /* @__PURE__ */ __name((animationDuration) => {
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  }, "duration");
  const iterations = /* @__PURE__ */ __name((animationIterations) => {
    _iterations = animationIterations;
    update(true);
    return ani;
  }, "iterations");
  const parent = /* @__PURE__ */ __name((animation) => {
    parentAnimation = animation;
    return ani;
  }, "parent");
  const addElement = /* @__PURE__ */ __name((el) => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        printIonError("createAnimation - Invalid addElement value.");
      }
    }
    return ani;
  }, "addElement");
  const addAnimation = /* @__PURE__ */ __name((animationToAdd) => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  }, "addAnimation");
  const keyframes = /* @__PURE__ */ __name((keyframeValues) => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  }, "keyframes");
  const updateKeyframes = /* @__PURE__ */ __name((keyframeValues) => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach((animation) => {
        const keyframeEffect = animation.effect;
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation.effect = newEffect;
        }
      });
    }
  }, "updateKeyframes");
  const beforeAnimation = /* @__PURE__ */ __name(() => {
    _beforeAddReadFunctions.forEach((callback) => callback());
    _beforeAddWriteFunctions.forEach((callback) => callback());
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  }, "beforeAnimation");
  const afterAnimation = /* @__PURE__ */ __name(() => {
    _afterAddReadFunctions.forEach((callback) => callback());
    _afterAddWriteFunctions.forEach((callback) => callback());
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    forceDurationValue = void 0;
    forceDirectionValue = void 0;
    forceDelayValue = void 0;
    onFinishCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  }, "afterAnimation");
  const animationFinish = /* @__PURE__ */ __name(() => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  }, "animationFinish");
  const initializeWebAnimation = /* @__PURE__ */ __name(() => {
    elements.forEach((element) => {
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  }, "initializeWebAnimation");
  const initializeAnimation = /* @__PURE__ */ __name(() => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
    }
    initialized = true;
  }, "initializeAnimation");
  const setAnimationStep = /* @__PURE__ */ __name((step) => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach((animation) => {
        animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
        animation.pause();
      });
    }
  }, "setAnimationStep");
  const updateWebAnimation = /* @__PURE__ */ __name((step) => {
    webAnimations.forEach((animation) => {
      animation.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== void 0) {
      setAnimationStep(step);
    }
  }, "updateWebAnimation");
  const update = /* @__PURE__ */ __name((deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach((animation) => {
        animation.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  }, "update");
  const progressStart = /* @__PURE__ */ __name((forceLinearEasing = false, step) => {
    childAnimations.forEach((animation) => {
      animation.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  }, "progressStart");
  const progressStep = /* @__PURE__ */ __name((step) => {
    childAnimations.forEach((animation) => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  }, "progressStep");
  const progressEnd = /* @__PURE__ */ __name((playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach((animation) => {
      animation.progressEnd(playTo, step, dur);
    });
    if (dur !== void 0) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === "reverse" ? "normal" : "reverse";
      if (forceDirectionValue === "reverse") {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== void 0 && !parentAnimation) {
      play();
    }
    return ani;
  }, "progressEnd");
  const pauseAnimation = /* @__PURE__ */ __name(() => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach((animation) => {
          animation.pause();
        });
      } else {
        elements.forEach((element) => {
          setStyleProperty(element, "animation-play-state", "paused");
        });
      }
      paused = true;
    }
  }, "pauseAnimation");
  const pause = /* @__PURE__ */ __name(() => {
    childAnimations.forEach((animation) => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  }, "pause");
  const playCSSAnimations = /* @__PURE__ */ __name(() => {
    animationFinish();
  }, "playCSSAnimations");
  const playWebAnimations = /* @__PURE__ */ __name(() => {
    webAnimations.forEach((animation) => {
      animation.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  }, "playWebAnimations");
  const resetAnimation = /* @__PURE__ */ __name(() => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
  }, "resetAnimation");
  const play = /* @__PURE__ */ __name((opts) => {
    return new Promise((resolve) => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, { oneTimeCallback: true });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      const onStopCallback = /* @__PURE__ */ __name(() => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      }, "onStopCallback");
      const onFinishCallback = /* @__PURE__ */ __name(() => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      }, "onFinishCallback");
      onFinish(onFinishCallback, { oneTimeCallback: true });
      onStop(onStopCallback, { oneTimeCallback: true });
      childAnimations.forEach((animation) => {
        animation.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  }, "play");
  const stop = /* @__PURE__ */ __name(() => {
    childAnimations.forEach((animation) => {
      animation.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
    onStopOneTimeCallbacks.forEach((onStopCallback) => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  }, "stop");
  const from = /* @__PURE__ */ __name((property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== void 0 && (firstFrame.offset === void 0 || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{ offset: 0, [property]: value }, ..._keyframes];
    }
    return ani;
  }, "from");
  const to = /* @__PURE__ */ __name((property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== void 0 && (lastFrame.offset === void 0 || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, { offset: 1, [property]: value }];
    }
    return ani;
  }, "to");
  const fromTo = /* @__PURE__ */ __name((property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  }, "fromTo");
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
}, "createAnimation");

export {
  createAnimation
};
/*! Bundled license information:

@ionic/core/dist/esm/animation-BvhAtgca.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-5IFA5FWG.js.map
