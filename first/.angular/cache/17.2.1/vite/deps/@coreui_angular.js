import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-IQIH3O6O.js";
import {
  DomSanitizer
} from "./chunk-JNDQUUPY.js";
import "./chunk-SRTSTNPN.js";
import {
  AnimationBuilder,
  animate,
  animation,
  group,
  query,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-3YVAURZQ.js";
import {
  A11yModule,
  BreakpointObserver,
  CdkTrapFocus,
  FocusMonitor
} from "./chunk-APH77TCW.js";
import "./chunk-G5DC4RTK.js";
import {
  coerceBooleanProperty,
  coerceNumberProperty
} from "./chunk-UY6TB2NV.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-AUHK73OU.js";
import {
  AfterRenderPhase,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RendererFactory2,
  SkipSelf,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  afterNextRender,
  assertInInjectionContext,
  booleanAttribute,
  debounceTime,
  effect,
  filter,
  finalize,
  forwardRef,
  fromEvent,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  takeUntil,
  withLatestFrom,
  zipWith,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QIQLIHZ4.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk-2AF3527K.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state2 = _ref.state;
  Object.keys(state2.elements).forEach(function(name) {
    var style2 = state2.styles[name] || {};
    var attributes = state2.attributes[name] || {};
    var element = state2.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style2);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state2 = _ref2.state;
  var initialStyles = {
    popper: {
      position: state2.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state2.elements.popper.style, initialStyles.popper);
  state2.styles = initialStyles;
  if (state2.elements.arrow) {
    Object.assign(state2.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state2.elements).forEach(function(name) {
      var element = state2.elements[name];
      var attributes = state2.attributes[name] || {};
      var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
      var style2 = styleProperties.reduce(function(style3, property) {
        style3[property] = "";
        return style3;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state2) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state2 = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state2.elements.arrow;
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state2.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state2);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state2 = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state2.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state2.elements.popper, arrowElement)) {
    return;
  }
  state2.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state2 = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state2.placement),
    variation: getVariation(state2.placement),
    popper: state2.elements.popper,
    popperRect: state2.rects.popper,
    gpuAcceleration,
    isFixed: state2.options.strategy === "fixed"
  };
  if (state2.modifiersData.popperOffsets != null) {
    state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.popperOffsets,
      position: state2.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state2.modifiersData.arrow != null) {
    state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-placement": state2.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect4(_ref) {
  var state2 = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state2.elements.popper);
  var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state2.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state2.rects.popper;
  var element = state2.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state2.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state2.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state2 = _ref.state, options = _ref.options, name = _ref.name;
  if (state2.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state2.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state2, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state2.placement !== firstFittingPlacement) {
    state2.modifiersData[name]._skip = true;
    state2.placement = firstFittingPlacement;
    state2.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state2 = _ref.state, name = _ref.name;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var preventedOffsets = state2.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state2, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state2, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state2.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state2.modifiersData.popperOffsets != null) {
    state2.modifiersData.popperOffsets.x += x;
    state2.modifiersData.popperOffsets.y += y;
  }
  state2.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state2 = _ref.state, name = _ref.name;
  state2.modifiersData[name] = computeOffsets({
    reference: state2.rects.reference,
    element: state2.rects.popper,
    strategy: "absolute",
    placement: state2.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state2 = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state2, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state2.placement);
  var variation = getVariation(state2.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state2.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state2.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state2,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
        cleanupModifierEffects();
        state2.options = Object.assign({}, defaultOptions, state2.options, options2);
        state2.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state2.options.modifiers)));
        state2.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state2.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state2.reset = false;
        state2.placement = state2.options.placement;
        state2.orderedModifiers.forEach(function(modifier) {
          return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state2.orderedModifiers.length; index++) {
          if (state2.reset === true) {
            state2.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state2.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state2 = fn2({
              state: state2,
              options: _options,
              name,
              instance
            }) || state2;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state2);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state3) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state3);
      }
    });
    function runModifierEffects() {
      state2.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state: state2,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@coreui/icons-angular/fesm2022/coreui-icons-angular.mjs
var _c0 = ["svgElement"];
function IconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 2, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r0.innerHtml, ɵɵsanitizeHtml)("ngClass", ctx_r0.computedClasses)("cHtmlAttr", ctx_r0.attributes);
    ɵɵattribute("width", ctx_r0.width)("height", ctx_r0.height || ctx_r0.width)("viewBox", ctx_r0.viewBox);
  }
}
function IconComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 4);
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.computedClasses)("cHtmlAttr", ctx_r1.attributes);
    ɵɵattribute("width", ctx_r1.width)("height", ctx_r1.height || ctx_r1.width);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r1.use);
  }
}
function toCamelCase(str) {
  return str.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase().replace("-", "");
  });
}
var _IconSetService = class _IconSetService {
  constructor() {
    this._iconNames = {};
    this._icons = {};
  }
  get iconNames() {
    return this._iconNames;
  }
  get icons() {
    return this._icons;
  }
  set icons(iconSet) {
    for (const iconsKey in iconSet) {
      this._iconNames[iconsKey] = iconsKey;
    }
    this._icons = iconSet;
  }
  getIcon(name) {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
};
_IconSetService.ɵfac = function IconSetService_Factory(t) {
  return new (t || _IconSetService)();
};
_IconSetService.ɵprov = ɵɵdefineInjectable({
  token: _IconSetService,
  factory: _IconSetService.ɵfac,
  providedIn: "root"
});
var IconSetService = _IconSetService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _IconSetModule = class _IconSetModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error("CoreUI IconSetModule is already loaded. Import it in the AppModule only");
    }
  }
  static forRoot() {
    return {
      ngModule: _IconSetModule,
      providers: [{
        provide: IconSetService
      }]
    };
  }
};
_IconSetModule.ɵfac = function IconSetModule_Factory(t) {
  return new (t || _IconSetModule)(ɵɵinject(_IconSetModule, 12));
};
_IconSetModule.ɵmod = ɵɵdefineNgModule({
  type: _IconSetModule
});
_IconSetModule.ɵinj = ɵɵdefineInjector({
  providers: [IconSetService]
});
var IconSetModule = _IconSetModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSetModule, [{
    type: NgModule,
    args: [{
      providers: [IconSetService]
    }]
  }], () => [{
    type: IconSetModule,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], null);
})();
var _IconDirective = class _IconDirective {
  set viewBox(viewBox) {
    this._viewBox = viewBox;
  }
  get viewBox() {
    return this._viewBox ?? this.scale;
  }
  get hostClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return this.customClasses ?? classes;
  }
  // @HostBinding('innerHtml')
  get innerHtml() {
    const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? "";
    return this.sanitizer.bypassSecurityTrustHtml(this.titleCode + code);
  }
  constructor(renderer, elementRef, sanitizer, iconSet) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.sanitizer = sanitizer;
    this.iconSet = iconSet;
    this.size = "";
    this.xmlns = "http://www.w3.org/2000/svg";
    this.pointerEvents = "none";
    this.role = "img";
    afterNextRender(() => {
      this.elementRef.nativeElement.innerHTML = this.innerHtml;
    }, {
      phase: AfterRenderPhase.Write
    });
  }
  get titleCode() {
    return this.title ? `<title>${this.title}</title>` : "";
  }
  get code() {
    if (this.content) {
      return this.content;
    }
    if (this.iconSet && this.name) {
      return this.iconSet.getIcon(this.name);
    }
    if (this.name && !this.iconSet?.icons[this.name]) {
      console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. To use icon by 'name' prop you need to add it to IconSet service. 
`, this.name);
    }
    return void 0;
  }
  get scale() {
    return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : "0 0 64 64";
  }
  get computedSize() {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === "custom" || addCustom ? "custom-size" : this.size;
  }
  get computedClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return !this.customClasses ? classes : this.customClasses;
  }
  toCamelCase(str) {
    return toCamelCase(str);
  }
};
_IconDirective.ɵfac = function IconDirective_Factory(t) {
  return new (t || _IconDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(IconSetService));
};
_IconDirective.ɵdir = ɵɵdefineDirective({
  type: _IconDirective,
  selectors: [["svg", "cIcon", ""]],
  hostVars: 6,
  hostBindings: function IconDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("viewBox", ctx.viewBox)("xmlns", ctx.xmlns)("pointer-events", ctx.pointerEvents)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    content: [InputFlags.None, "cIcon", "content"],
    size: "size",
    title: "title",
    customClasses: "customClasses",
    width: "width",
    height: "height",
    name: [InputFlags.HasDecoratorInputTransform, "name", "name", (value) => value && value.includes("-") ? toCamelCase(value) : value],
    viewBox: "viewBox",
    xmlns: "xmlns",
    pointerEvents: [InputFlags.None, "pointer-events", "pointerEvents"],
    role: "role"
  },
  exportAs: ["cIcon"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var IconDirective = _IconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDirective, [{
    type: Directive,
    args: [{
      selector: "svg[cIcon]",
      exportAs: "cIcon",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DomSanitizer
  }, {
    type: IconSetService
  }], {
    content: [{
      type: Input,
      args: ["cIcon"]
    }],
    size: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: [{
        transform: (value) => value && value.includes("-") ? toCamelCase(value) : value
      }]
    }],
    viewBox: [{
      type: HostBinding,
      args: ["attr.viewBox"]
    }, {
      type: Input
    }],
    xmlns: [{
      type: HostBinding,
      args: ["attr.xmlns"]
    }, {
      type: Input
    }],
    pointerEvents: [{
      type: HostBinding,
      args: ["attr.pointer-events"]
    }, {
      type: Input,
      args: ["pointer-events"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _HtmlAttributesDirective = class _HtmlAttributesDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  ngOnInit() {
    const attribs = this.cHtmlAttr;
    for (const attr in attribs) {
      if (attr === "style" && typeof attribs[attr] === "object") {
        this.setStyle(attribs[attr]);
      } else if (attr === "class") {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }
  setStyle(styles) {
    for (const style2 in styles) {
      if (style2) {
        this.renderer.setStyle(this.el.nativeElement, style2, styles[style2]);
      }
    }
  }
  addClass(classes) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.renderer.addClass(this.el.nativeElement, element);
    });
  }
  setAttrib(key, value) {
    value !== null ? this.renderer.setAttribute(this.el.nativeElement, key, value) : this.renderer.removeAttribute(this.el.nativeElement, key);
  }
};
_HtmlAttributesDirective.ɵfac = function HtmlAttributesDirective_Factory(t) {
  return new (t || _HtmlAttributesDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_HtmlAttributesDirective.ɵdir = ɵɵdefineDirective({
  type: _HtmlAttributesDirective,
  selectors: [["", "cHtmlAttr", ""]],
  inputs: {
    cHtmlAttr: "cHtmlAttr"
  },
  exportAs: ["cHtmlAttr"],
  standalone: true
});
var HtmlAttributesDirective = _HtmlAttributesDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlAttributesDirective, [{
    type: Directive,
    args: [{
      selector: "[cHtmlAttr]",
      exportAs: "cHtmlAttr",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    cHtmlAttr: [{
      type: Input
    }]
  });
})();
var _IconComponent = class _IconComponent {
  set viewBox(viewBox) {
    this._viewBox = viewBox;
  }
  get viewBox() {
    return this._viewBox ?? this.scale;
  }
  get innerHtml() {
    const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? "";
    return this.sanitizer.bypassSecurityTrustHtml(this.titleCode + code);
  }
  constructor(renderer, elementRef, sanitizer, iconSet) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.sanitizer = sanitizer;
    this.iconSet = iconSet;
    this.attributes = {
      role: "img"
    };
    this.size = "";
    this.use = "";
    this.customClasses = "";
    this.renderer.setStyle(this.elementRef.nativeElement, "display", "none");
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.classList.forEach((item) => {
      this.renderer.addClass(this.svgElementRef.nativeElement, item);
    });
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    const svgElement = this.svgElementRef.nativeElement;
    this.renderer.insertBefore(parentElement, svgElement, this.elementRef.nativeElement);
    this.renderer.removeChild(parentElement, this.elementRef.nativeElement);
  }
  get titleCode() {
    return this.title ? `<title>${this.title}</title>` : "";
  }
  get code() {
    if (this.content) {
      return this.content;
    }
    if (this.iconSet && this.name) {
      return this.iconSet.getIcon(this.name);
    }
    if (this.name && !this.iconSet?.icons[this.name]) {
      console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. To use icon by 'name' prop you need to add it to IconSet service. 
`, this.name);
    }
    return void 0;
  }
  get scale() {
    return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : "0 0 64 64";
  }
  get computedSize() {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === "custom" || addCustom ? "custom-size" : this.size;
  }
  get computedClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return !this.customClasses ? classes : this.customClasses;
  }
  toCamelCase(str) {
    return toCamelCase(str);
  }
};
_IconComponent.ɵfac = function IconComponent_Factory(t) {
  return new (t || _IconComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(IconSetService));
};
_IconComponent.ɵcmp = ɵɵdefineComponent({
  type: _IconComponent,
  selectors: [["c-icon"]],
  viewQuery: function IconComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.svgElementRef = _t.first);
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  inputs: {
    attributes: "attributes",
    content: "content",
    size: "size",
    title: "title",
    use: "use",
    customClasses: "customClasses",
    width: "width",
    height: "height",
    name: [InputFlags.HasDecoratorInputTransform, "name", "name", (value) => value && value.includes("-") ? toCamelCase(value) : value],
    viewBox: "viewBox"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "innerHtml", "ngClass", "cHtmlAttr", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "ngClass", "cHtmlAttr", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "innerHtml", "ngClass", "cHtmlAttr"], ["svgElement", ""], ["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "ngClass", "cHtmlAttr"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconComponent__svg_svg_0_Template, 2, 6, "svg", 0)(1, IconComponent__svg_svg_1_Template, 2, 5, "svg", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.use && !!ctx.code);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.use);
    }
  },
  dependencies: [NgClass, NgIf, HtmlAttributesDirective],
  styles: [".icon[_ngcontent-%COMP%]{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}"]
});
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "c-icon",
      standalone: true,
      imports: [NgClass, NgIf, HtmlAttributesDirective],
      host: {
        ngSkipHydration: "true"
      },
      template: '<svg *ngIf="(!use) && (!!code)"\n     xmlns="http://www.w3.org/2000/svg"\n     [attr.width]="width"\n     [attr.height]="height || width"\n     [attr.viewBox]="viewBox"\n     [innerHtml]="innerHtml"\n     [ngClass]="computedClasses"\n     [cHtmlAttr]="attributes"\n     role="img"\n     pointer-events="none"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf="use"\n     xmlns="http://www.w3.org/2000/svg"\n     [attr.width]="width"\n     [attr.height]="height || width"\n     [ngClass]="computedClasses"\n     [cHtmlAttr]="attributes"\n     role="img"\n     pointer-events="none"\n>\n  <use [attr.href]="use"></use>\n</svg>\n',
      styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DomSanitizer
  }, {
    type: IconSetService
  }], {
    attributes: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    use: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: [{
        transform: (value) => value && value.includes("-") ? toCamelCase(value) : value
      }]
    }],
    viewBox: [{
      type: Input
    }],
    svgElementRef: [{
      type: ViewChild,
      args: ["svgElement", {
        read: ElementRef
      }]
    }]
  });
})();
var _IconModule = class _IconModule {
};
_IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || _IconModule)();
};
_IconModule.ɵmod = ɵɵdefineNgModule({
  type: _IconModule,
  imports: [IconComponent, IconDirective],
  exports: [IconComponent, IconDirective]
});
_IconModule.ɵinj = ɵɵdefineInjector({});
var IconModule = _IconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      imports: [IconComponent, IconDirective],
      exports: [IconComponent, IconDirective]
    }]
  }], null, null);
})();

// node_modules/@coreui/angular/fesm2022/coreui-angular.mjs
var _c02 = ["*"];
function AccordionItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function AccordionItemComponent_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.toggleItem());
    });
    ɵɵtemplate(1, AccordionItemComponent_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r5 = ɵɵreference(8);
    ɵɵproperty("collapsed", !ctx_r2.visible);
    ɵɵattribute("aria-controls", ctx_r2.contentId);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.templates["accordionHeader"] || _r5)("ngTemplateOutletContext", ctx_r2.itemContext);
  }
}
function AccordionItemComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function AccordionItemComponent_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, AccordionItemComponent_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const _r9 = ɵɵreference(12);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.templates["accordionBody"] || _r9)("ngTemplateOutletContext", ctx_r6.itemContext);
  }
}
function AccordionItemComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c1 = ["*", "*"];
function AlertComponent_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AlertComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AlertComponent_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", (ctx_r3.templates == null ? null : ctx_r3.templates.alertButtonCloseTemplate) || _r2);
  }
}
function AlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AlertComponent_Conditional_0_Conditional_0_Template, 1, 1, "ng-container");
    ɵɵprojection(1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.dismissible ? 0 : -1);
  }
}
function AlertComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function AlertComponent_ng_template_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.visible = false);
    });
    ɵɵelementEnd();
  }
}
function AvatarComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.statusClass);
  }
}
function AvatarComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r4.src, ɵɵsanitizeUrl);
  }
}
function AvatarComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function AvatarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AvatarComponent_ng_template_3_Conditional_0_Template, 1, 1, "img", 3)(1, AvatarComponent_ng_template_3_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, !!ctx_r2.src ? 0 : 1);
  }
}
function BreadcrumbItemComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c2 = () => ({});
function BreadcrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 0);
    ɵɵtemplate(1, BreadcrumbItemComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    let tmp_1_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    ɵɵproperty("routerLink", ctx_r0.url)("cHtmlAttr", (tmp_1_0 = ctx_r0.attributes) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ɵɵpureFunction0(11, _c2))("target", ctx_r0.attributes == null ? null : ctx_r0.attributes["target"])("queryParams", (tmp_3_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.queryParams) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : null)("fragment", ctx_r0.linkProps == null ? null : ctx_r0.linkProps.fragment)("queryParamsHandling", (tmp_5_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.queryParamsHandling) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : null)("preserveFragment", (tmp_6_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.preserveFragment) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("skipLocationChange", (tmp_7_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.skipLocationChange) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false)("replaceUrl", (tmp_8_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.replaceUrl) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : false)("state", (tmp_9_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.state) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : ɵɵpureFunction0(12, _c2));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function BreadcrumbItemComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, BreadcrumbItemComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    let tmp_0_0;
    ɵɵproperty("cHtmlAttr", (tmp_0_0 = ctx_r1.attributes) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ɵɵpureFunction0(2, _c2));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function BreadcrumbItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function BreadcrumbRouterComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "c-breadcrumb-item", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const ɵ$index_1_r3 = ctx_r7.$index;
    const ɵ$count_1_r5 = ctx_r7.$count;
    const breadcrumb_r1 = ctx_r7.$implicit;
    ɵɵproperty("active", ɵ$index_1_r3 === ɵ$count_1_r5 - 1)("url", breadcrumb_r1 == null ? null : breadcrumb_r1.url)("attributes", breadcrumb_r1 == null ? null : breadcrumb_r1.attributes)("linkProps", breadcrumb_r1 == null ? null : breadcrumb_r1.linkProps);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", breadcrumb_r1 == null ? null : breadcrumb_r1.label, " ");
  }
}
function BreadcrumbRouterComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadcrumbRouterComponent_For_2_Conditional_0_Template, 2, 5, "c-breadcrumb-item", 1);
  }
  if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const $count_r4 = ctx.$count;
    ɵɵconditional(0, (breadcrumb_r1 == null ? null : breadcrumb_r1.label) && ((breadcrumb_r1 == null ? null : breadcrumb_r1.url == null ? null : breadcrumb_r1.url.slice(-1)) === "/" || $index_r2 === $count_r4 - 1) ? 0 : -1);
  }
}
var _c3 = ["content"];
function CarouselControlComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 0);
    ɵɵprojection(2);
    ɵɵelementEnd();
  }
}
function CarouselControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
    ɵɵelementStart(1, "span", 1);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.carouselControlIconClass);
    ɵɵattribute("aria-label", ctx_r1.direction)("aria-hidden", true);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.caption);
  }
}
var _c4 = (a0) => ({
  active: a0
});
function CarouselIndicatorsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function CarouselIndicatorsComponent_For_2_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r7);
      const i_r2 = restoredCtx.$index;
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onClick(i_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.$index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ɵɵpureFunction1(4, _c4, ctx_r0.active === i_r2));
    ɵɵattribute("data-coreui-target", i_r2)("aria-current", ctx_r0.active === i_r2);
  }
}
function CarouselItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function HeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.headerClasses);
  }
}
function HeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function NavbarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.containerClass);
  }
}
function NavbarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c5 = ["modalContentRef"];
var _c6 = "[_nghost-%COMP%]{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}";
var _c7 = ["popoverTemplate"];
var _c8 = (a0) => ({
  "popover-arrow": a0
});
function SidebarBrandComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("cHtmlAttr", ctx_r2.brandFull)("ngClass", "sidebar-brand-full");
  }
}
function SidebarBrandComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("cHtmlAttr", ctx_r3.brandNarrow)("ngClass", "sidebar-brand-narrow");
  }
}
function SidebarBrandComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 0);
    ɵɵtemplate(1, SidebarBrandComponent_Conditional_0_Conditional_1_Template, 1, 2, "img", 1)(2, SidebarBrandComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r0.routerLink);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.brandFull ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.brandNarrow ? 2 : -1);
  }
}
function SidebarBrandComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function SidebarNavLinkContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    let tmp_0_0;
    ɵɵadvance();
    ɵɵtextInterpolate((tmp_0_0 = ctx_r0.item == null ? null : ctx_r0.item.name) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "");
  }
}
function SidebarNavLinkComponent_Case_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r6.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r6.item.badge == null ? null : ctx_r6.item.badge.text);
  }
}
var _c9 = (a0) => ({
  $implicit: a0
});
function SidebarNavLinkComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵpipe(1, "cSidebarNavLink");
    ɵɵtemplate(2, SidebarNavLinkComponent_Case_0_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelement(3, "c-sidebar-nav-link-content", 3);
    ɵɵtemplate(4, SidebarNavLinkComponent_Case_0_Conditional_4_Template, 3, 4, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    let tmp_1_0;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 6, ctx_r0.item))("cHtmlAttr", (tmp_1_0 = ctx_r0.item.attributes) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ɵɵpureFunction0(8, _c2));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c9, ctx_r0.item));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r0.item);
    ɵɵadvance();
    ɵɵconditional(4, ctx_r0.item.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_Case_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r8.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r8.item.badge == null ? null : ctx_r8.item.badge.text);
  }
}
function SidebarNavLinkComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function SidebarNavLinkComponent_Case_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.linkClicked());
    });
    ɵɵpipe(1, "cSidebarNavLink");
    ɵɵtemplate(2, SidebarNavLinkComponent_Case_1_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelement(3, "c-sidebar-nav-link-content", 3);
    ɵɵtemplate(4, SidebarNavLinkComponent_Case_1_Conditional_4_Template, 3, 4, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    let tmp_2_0;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 7, ctx_r1.item))("href", ctx_r1.href, ɵɵsanitizeUrl)("cHtmlAttr", (tmp_2_0 = ctx_r1.item.attributes) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ɵɵpureFunction0(9, _c2));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c9, ctx_r1.item));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r1.item);
    ɵɵadvance();
    ɵɵconditional(4, ctx_r1.item.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_Case_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r12.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r12.item.badge == null ? null : ctx_r12.item.badge.text);
  }
}
var _c10 = () => ({
  exact: false
});
function SidebarNavLinkComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 6);
    ɵɵlistener("click", function SidebarNavLinkComponent_Case_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.linkClicked());
    });
    ɵɵpipe(1, "cSidebarNavLink");
    ɵɵtemplate(2, SidebarNavLinkComponent_Case_2_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelement(3, "c-sidebar-nav-link-content", 3);
    ɵɵtemplate(4, SidebarNavLinkComponent_Case_2_Conditional_4_Template, 3, 4, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    let tmp_1_0;
    let tmp_3_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 16, ctx_r2.item))("cHtmlAttr", (tmp_1_0 = ctx_r2.item.attributes) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ɵɵpureFunction0(18, _c2))("target", ctx_r2.item.attributes == null ? null : ctx_r2.item.attributes["target"])("queryParams", (tmp_3_0 = ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.queryParams) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : null)("fragment", ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.fragment)("queryParamsHandling", ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.queryParamsHandling)("preserveFragment", (tmp_6_0 = ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.preserveFragment) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("skipLocationChange", (tmp_7_0 = ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.skipLocationChange) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false)("replaceUrl", (tmp_8_0 = ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.replaceUrl) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : false)("state", (tmp_9_0 = ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.state) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : ɵɵpureFunction0(19, _c2))("routerLink", ctx_r2.item.url)("routerLinkActiveOptions", (tmp_11_0 = ctx_r2.item.linkProps == null ? null : ctx_r2.item.linkProps.routerLinkActiveOptions) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ɵɵpureFunction0(20, _c10));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵɵpureFunction1(21, _c9, ctx_r2.item));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r2.item);
    ɵɵadvance();
    ɵɵconditional(4, ctx_r2.item.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 4);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 1, item_r15));
  }
}
function SidebarNavLinkComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().$implicit;
    ɵɵproperty("cIcon", item_r15.iconComponent == null ? null : item_r15.iconComponent.content)("name", item_r15.iconComponent == null ? null : item_r15.iconComponent.name)("customClasses", ɵɵpipeBind1(1, 3, item_r15));
  }
}
function SidebarNavLinkComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 1, item_r15));
  }
}
function SidebarNavLinkComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SidebarNavLinkComponent_ng_template_3_Conditional_0_Template, 2, 3, "i", 4)(1, SidebarNavLinkComponent_ng_template_3_Conditional_1_Template, 2, 5, ":svg:svg", 7)(2, SidebarNavLinkComponent_ng_template_3_Conditional_2_Template, 2, 3, "span", 4);
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    ɵɵconditional(0, (item_r15 == null ? null : item_r15.icon) ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(1, (item_r15 == null ? null : item_r15.iconComponent) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, !(item_r15 == null ? null : item_r15.icon) && !(item_r15 == null ? null : item_r15.iconComponent) ? 2 : -1);
  }
}
function SidebarNavLabelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.getLabelIconClass());
  }
}
function SidebarNavLabelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r1.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.item.badge.text);
  }
}
function SidebarNavGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavGroupComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r1.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.item.badge.text);
  }
}
function SidebarNavGroupComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 2);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 1, item_r4));
  }
}
function SidebarNavGroupComponent_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 5);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("cIcon", item_r4.iconComponent == null ? null : item_r4.iconComponent.content)("customClasses", ɵɵpipeBind1(1, 3, item_r4))("name", item_r4.iconComponent == null ? null : item_r4.iconComponent.name);
  }
}
function SidebarNavGroupComponent_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 1, item_r4));
  }
}
function SidebarNavGroupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SidebarNavGroupComponent_ng_template_6_Conditional_0_Template, 2, 3, "i", 2)(1, SidebarNavGroupComponent_ng_template_6_Conditional_1_Template, 2, 5, ":svg:svg", 5)(2, SidebarNavGroupComponent_ng_template_6_Conditional_2_Template, 2, 3, "span", 2);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵconditional(0, (item_r4 == null ? null : item_r4.icon) ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(1, (item_r4 == null ? null : item_r4.iconComponent) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, !(item_r4 == null ? null : item_r4.icon) && !(item_r4 == null ? null : item_r4.iconComponent) ? 2 : -1);
  }
}
var _c11 = () => ({
  exact: true
});
function SidebarNavComponent_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-group", 0, 1);
    ɵɵpipe(2, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("dropdownMode", ctx_r6.dropdownMode)("item", item_r1)("ngClass", ɵɵpipeBind1(2, 4, item_r1))("routerLinkActiveOptions", ɵɵpureFunction0(6, _c11));
  }
}
function SidebarNavComponent_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-divider", 2);
    ɵɵpipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    let tmp_0_0;
    ɵɵproperty("cHtmlAttr", (tmp_0_0 = item_r1.attributes) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ɵɵpureFunction0(5, _c2))("item", item_r1)("ngClass", ɵɵpipeBind1(1, 3, item_r1));
  }
}
function SidebarNavComponent_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-title", 2);
    ɵɵpipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    let tmp_0_0;
    ɵɵproperty("cHtmlAttr", (tmp_0_0 = item_r1.attributes) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ɵɵpureFunction0(5, _c2))("item", item_r1)("ngClass", ɵɵpipeBind1(1, 3, item_r1));
  }
}
function SidebarNavComponent_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-label", 3);
    ɵɵpipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("item", item_r1)("ngClass", ɵɵpipeBind1(1, 2, item_r1));
  }
}
function SidebarNavComponent_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavComponent_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "c-sidebar-nav-link", 4);
    ɵɵlistener("linkClick", function SidebarNavComponent_For_1_Case_5_Template_c_sidebar_nav_link_linkClick_0_listener() {
      ɵɵrestoreView(_r18);
      const ctx_r17 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r17.hideMobile());
    });
    ɵɵpipe(1, "cSidebarNavItemClass");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("item", item_r1)("ngClass", ɵɵpipeBind1(1, 2, item_r1));
  }
}
function SidebarNavComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SidebarNavComponent_For_1_Case_0_Template, 3, 7)(1, SidebarNavComponent_For_1_Case_1_Template, 2, 6)(2, SidebarNavComponent_For_1_Case_2_Template, 2, 6)(3, SidebarNavComponent_For_1_Case_3_Template, 2, 4)(4, SidebarNavComponent_For_1_Case_4_Template, 1, 0)(5, SidebarNavComponent_For_1_Case_5_Template, 2, 4);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    let SidebarNavComponent_For_1_contFlowTmp;
    ɵɵconditional(0, (SidebarNavComponent_For_1_contFlowTmp = ctx_r0.helper.itemType(item_r1)) === "group" ? 0 : SidebarNavComponent_For_1_contFlowTmp === "divider" ? 1 : SidebarNavComponent_For_1_contFlowTmp === "title" ? 2 : SidebarNavComponent_For_1_contFlowTmp === "label" ? 3 : SidebarNavComponent_For_1_contFlowTmp === "empty" ? 4 : 5);
  }
}
var _c12 = () => ({
  outline: 0
});
function ToastHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction0(3, _c12));
    ɵɵproperty("cToastClose", ctx_r0.toast);
  }
}
function ToasterComponent_ng_template_0_Template(rf, ctx) {
}
var _c13 = ["tooltipTemplate"];
function WidgetStatAComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, WidgetStatAComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r7 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetValueTemplate) || _r7);
  }
}
function WidgetStatAComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, WidgetStatAComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r5 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r1.templates == null ? null : ctx_r1.templates.widgetTitleTemplate) || _r5);
  }
}
function WidgetStatAComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r4.title, "\n");
  }
}
function WidgetStatAComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r6.value, "\n");
  }
}
function WidgetStatAComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function WidgetStatAComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c14 = [[["", 8, "chart-wrapper"]], "*"];
var _c15 = [".chart-wrapper", "*"];
function WidgetStatBComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function WidgetStatBComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.title);
  }
}
function WidgetStatBComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.inverse ? "text-medium-emphasis-inverse" : "text-medium-emphasis");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.text, " ");
  }
}
function WidgetStatCComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatCComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtemplate(1, WidgetStatCComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r5 = ɵɵreference(6);
    ɵɵproperty("ngClass", ctx_r0.iconClasses);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetIconTemplate) || _r5);
  }
}
function WidgetStatCComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.valueClasses);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.value, " ");
  }
}
function WidgetStatCComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.titleClasses);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.title, " ");
  }
}
function WidgetStatCComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatCComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WidgetStatCComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r7 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", (ctx_r3.templates == null ? null : ctx_r3.templates.widgetProgressTemplate) || _r7);
  }
}
function WidgetStatCComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r4.icon, "\n");
  }
}
function WidgetStatCComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function WidgetStatDComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
}
function WidgetStatDComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WidgetStatDComponent_For_4_Conditional_0_Template, 1, 0, "div", 2);
    ɵɵelementStart(1, "c-col")(2, "div", 3);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    ɵɵconditional(0, i_r2 % 2 !== 0 ? 0 : -1);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r1.value);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r1.title);
  }
}
function WidgetStatEComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.titleClasses);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function WidgetStatEComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.value);
  }
}
function WidgetStatFComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatFComponent_Conditional_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatFComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "c-card-footer");
    ɵɵtemplate(1, WidgetStatFComponent_Conditional_9_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r5 = ɵɵreference(13);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r1.templates == null ? null : ctx_r1.templates.widgetFooterTemplate) || _r5);
  }
}
function WidgetStatFComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.icon);
  }
}
function WidgetStatFComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.footer);
  }
}
var BreakpointInfix;
(function(BreakpointInfix2) {
  BreakpointInfix2["xs"] = "xs";
  BreakpointInfix2["sm"] = "sm";
  BreakpointInfix2["md"] = "md";
  BreakpointInfix2["lg"] = "lg";
  BreakpointInfix2["xl"] = "xl";
  BreakpointInfix2["xxl"] = "xxl";
})(BreakpointInfix || (BreakpointInfix = {}));
var _HtmlAttributesDirective2 = class _HtmlAttributesDirective2 {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  ngOnInit() {
    const attribs = this.cHtmlAttr;
    for (const attr in attribs) {
      if (attr === "style" && typeof attribs[attr] === "object") {
        this.setStyle(attribs[attr]);
      } else if (attr === "class") {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }
  setStyle(styles) {
    for (const style2 in styles) {
      if (style2) {
        this.renderer.setStyle(this.el.nativeElement, style2, styles[style2]);
      }
    }
  }
  addClass(classes) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.renderer.addClass(this.el.nativeElement, element);
    });
  }
  setAttrib(key, value) {
    value !== null ? this.renderer.setAttribute(this.el.nativeElement, key, value) : this.renderer.removeAttribute(this.el.nativeElement, key);
  }
};
_HtmlAttributesDirective2.ɵfac = function HtmlAttributesDirective_Factory(t) {
  return new (t || _HtmlAttributesDirective2)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_HtmlAttributesDirective2.ɵdir = ɵɵdefineDirective({
  type: _HtmlAttributesDirective2,
  selectors: [["", "cHtmlAttr", ""]],
  inputs: {
    cHtmlAttr: "cHtmlAttr"
  },
  exportAs: ["cHtmlAttr"],
  standalone: true
});
var HtmlAttributesDirective2 = _HtmlAttributesDirective2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlAttributesDirective2, [{
    type: Directive,
    args: [{
      selector: "[cHtmlAttr]",
      exportAs: "cHtmlAttr",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    cHtmlAttr: [{
      type: Input
    }]
  });
})();
var _TemplateIdDirective = class _TemplateIdDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
_TemplateIdDirective.ɵfac = function TemplateIdDirective_Factory(t) {
  return new (t || _TemplateIdDirective)(ɵɵdirectiveInject(TemplateRef));
};
_TemplateIdDirective.ɵdir = ɵɵdefineDirective({
  type: _TemplateIdDirective,
  selectors: [["", "cTemplateId", ""]],
  inputs: {
    id: [InputFlags.None, "cTemplateId", "id"]
  },
  standalone: true
});
var TemplateIdDirective = _TemplateIdDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateIdDirective, [{
    type: Directive,
    args: [{
      selector: "[cTemplateId]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    id: [{
      type: Input,
      args: ["cTemplateId"]
    }]
  });
})();
var _SharedModule = class _SharedModule {
  static forRoot() {
    return {
      ngModule: _SharedModule
    };
  }
};
_SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || _SharedModule)();
};
_SharedModule.ɵmod = ɵɵdefineNgModule({
  type: _SharedModule,
  imports: [HtmlAttributesDirective2, TemplateIdDirective],
  exports: [HtmlAttributesDirective2, TemplateIdDirective]
});
_SharedModule.ɵinj = ɵɵdefineInjector({});
var SharedModule = _SharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [HtmlAttributesDirective2, TemplateIdDirective],
      exports: [HtmlAttributesDirective2, TemplateIdDirective]
    }]
  }], null, null);
})();
var _AccordionButtonDirective = class _AccordionButtonDirective {
  constructor() {
    this.type = "button";
  }
  get hostClasses() {
    return {
      "accordion-button": true,
      collapsed: this.collapsed
    };
  }
  get ariaExpanded() {
    return !this.collapsed;
  }
};
_AccordionButtonDirective.ɵfac = function AccordionButtonDirective_Factory(t) {
  return new (t || _AccordionButtonDirective)();
};
_AccordionButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _AccordionButtonDirective,
  selectors: [["", "cAccordionButton", ""]],
  hostVars: 4,
  hostBindings: function AccordionButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-expanded", ctx.ariaExpanded);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    collapsed: "collapsed",
    type: "type"
  },
  standalone: true
});
var AccordionButtonDirective = _AccordionButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[cAccordionButton]",
      standalone: true
    }]
  }], null, {
    collapsed: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }]
  });
})();
var _AccordionService = class _AccordionService {
  constructor() {
    this.items = [];
    this.alwaysOpen = false;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  toggleItem(item) {
    item.visible = !item.visible;
    this.closeOtherItems(item);
  }
  closeOtherItems(openItem) {
    if (!this.alwaysOpen) {
      this.items.forEach((item) => {
        if (item !== openItem) {
          item.visible = false;
        }
      });
    }
  }
};
_AccordionService.ɵfac = function AccordionService_Factory(t) {
  return new (t || _AccordionService)();
};
_AccordionService.ɵprov = ɵɵdefineInjectable({
  token: _AccordionService,
  factory: _AccordionService.ɵfac
});
var AccordionService = _AccordionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionService, [{
    type: Injectable
  }], () => [], null);
})();
var _AccordionComponent = class _AccordionComponent {
  /**
   * Make accordion items stay open when another item is opened
   * @type boolean
   */
  set alwaysOpen(value) {
    this.accordionService.alwaysOpen = coerceBooleanProperty(value);
  }
  get alwaysOpen() {
    return this.accordionService.alwaysOpen;
  }
  get hostClasses() {
    return {
      accordion: true,
      "accordion-flush": !!this.flush
    };
  }
  constructor(accordionService) {
    this.accordionService = accordionService;
  }
};
_AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
  return new (t || _AccordionComponent)(ɵɵdirectiveInject(AccordionService));
};
_AccordionComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccordionComponent,
  selectors: [["c-accordion"]],
  hostVars: 2,
  hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    flush: "flush",
    alwaysOpen: "alwaysOpen"
  },
  exportAs: ["cAccordionItem"],
  standalone: true,
  features: [ɵɵProvidersFeature([AccordionService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function AccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var AccordionComponent = _AccordionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{
      selector: "c-accordion",
      template: `<ng-content></ng-content>`,
      exportAs: "cAccordionItem",
      providers: [AccordionService],
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: AccordionService
  }], {
    flush: [{
      type: Input
    }],
    alwaysOpen: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var expandAnimation = animation([animate("{{ time }} {{ easing }}")]);
var collapseAnimation = animation([style({
  height: "*",
  minHeight: "*"
}), animate("{{ time }} {{ easing }}", style({
  height: 0,
  minHeight: 0
}))]);
var expandHorizontalAnimation = animation([animate("{{ time }} {{ easing }}")]);
var collapseHorizontalAnimation = animation([
  // style({ opacity: '*' }),
  animate(
    "{{ time }} {{ easing }}"
    // style({ opacity: 0 })
  )
]);
var _CollapseDirective = class _CollapseDirective {
  /**
   * @ignore
   */
  set animate(value) {
    this._animate = value;
  }
  get animate() {
    return this._animate;
  }
  /**
   * Set horizontal collapsing to transition the width instead of height.
   */
  set horizontal(value) {
    this._horizontal = coerceBooleanProperty(value);
  }
  get horizontal() {
    return this._horizontal;
  }
  /**
   * Toggle the visibility of collapsible element.
   */
  set visible(value) {
    this._visible = coerceBooleanProperty(value);
  }
  get visible() {
    return this._visible;
  }
  /**
   * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
   */
  set navbar(value) {
    this._navbar = coerceBooleanProperty(value);
  }
  get navbar() {
    return this._navbar;
  }
  constructor(hostElement, renderer, animationBuilder) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.animationBuilder = animationBuilder;
    this._animate = true;
    this._horizontal = false;
    this._visible = false;
    this._navbar = false;
    this.duration = "350ms";
    this.transition = "ease";
    this.collapseChange = new EventEmitter();
    this.collapsing = false;
    this.host = this.hostElement.nativeElement;
    this.renderer.setStyle(this.host, "display", "none");
  }
  get hostClasses() {
    return {
      "navbar-collapse": this.navbar,
      "collapse-horizontal": this.horizontal
    };
  }
  ngAfterViewInit() {
    if (this.visible) {
      this.toggle();
    }
  }
  ngOnDestroy() {
    this.destroyPlayer();
  }
  ngOnChanges(changes) {
    if (changes["visible"]) {
      if (!changes["visible"].firstChange || !changes["visible"].currentValue) {
        this.toggle(changes["visible"].currentValue);
      }
    }
  }
  ngDoCheck() {
    if (this._visible !== this.visible) {
      this.toggle();
    }
  }
  toggle(visible = this.visible) {
    this.createPlayer(visible);
    this.player?.play();
  }
  destroyPlayer() {
    this.player?.destroy();
  }
  createPlayer(visible = this.visible) {
    if (this.player?.hasStarted()) {
      this.destroyPlayer();
    }
    if (visible) {
      this.renderer.removeStyle(this.host, "display");
    }
    const duration = this.animate ? this.duration : "0ms";
    const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;
    const dimension = this.horizontal ? "width" : "height";
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    const animationFactory = this.animationBuilder.build(useAnimation(visible ? expand : collapse, {
      params: {
        time: duration,
        easing: this.transition
      }
    }));
    this.player = animationFactory.create(this.host);
    this.renderer.setStyle(this.host, dimension, visible ? 0 : `${this.host.getBoundingClientRect()[dimension]}px`);
    !visible && this.host.offsetHeight;
    this.player.onStart(() => {
      this.setMaxSize();
      this.renderer.removeClass(this.host, "collapse");
      this.renderer.addClass(this.host, "collapsing");
      this.renderer.removeClass(this.host, "show");
      this.collapsing = true;
      if (visible) {
        this.renderer.setStyle(this.host, dimension, `${this.host[scrollSize]}px`);
      } else {
        this.renderer.setStyle(this.host, dimension, "");
      }
      this.collapseChange.emit(visible ? "opening" : "collapsing");
    });
    this.player.onDone(() => {
      this.visible = visible;
      this.collapsing = false;
      this.renderer.removeClass(this.host, "collapsing");
      this.renderer.addClass(this.host, "collapse");
      if (visible) {
        this.renderer.addClass(this.host, "show");
        this.renderer.setStyle(this.host, dimension, "");
      } else {
        this.renderer.removeClass(this.host, "show");
      }
      this.collapseChange.emit(visible ? "open" : "collapsed");
    });
  }
  setMaxSize() {
    if (this.horizontal) {
      this.scrollWidth = this.host.scrollWidth;
      this.scrollWidth > 0 && this.renderer.setStyle(this.host, "maxWidth", `${this.scrollWidth}px`);
    }
  }
};
_CollapseDirective.ɵfac = function CollapseDirective_Factory(t) {
  return new (t || _CollapseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AnimationBuilder));
};
_CollapseDirective.ɵdir = ɵɵdefineDirective({
  type: _CollapseDirective,
  selectors: [["", "cCollapse", ""]],
  hostVars: 2,
  hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    animate: "animate",
    horizontal: "horizontal",
    visible: "visible",
    navbar: "navbar",
    duration: "duration",
    transition: "transition"
  },
  outputs: {
    collapseChange: "collapseChange"
  },
  exportAs: ["cCollapse"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var CollapseDirective = _CollapseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseDirective, [{
    type: Directive,
    args: [{
      selector: "[cCollapse]",
      exportAs: "cCollapse",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: AnimationBuilder
  }], {
    animate: [{
      type: Input
    }],
    horizontal: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    navbar: [{
      type: Input
    }],
    duration: [{
      type: Input
    }],
    transition: [{
      type: Input
    }],
    collapseChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CollapseModule = class _CollapseModule {
  static forRoot() {
    return {
      ngModule: _CollapseModule,
      providers: []
    };
  }
};
_CollapseModule.ɵfac = function CollapseModule_Factory(t) {
  return new (t || _CollapseModule)();
};
_CollapseModule.ɵmod = ɵɵdefineNgModule({
  type: _CollapseModule,
  imports: [CollapseDirective],
  exports: [CollapseDirective]
});
_CollapseModule.ɵinj = ɵɵdefineInjector({});
var CollapseModule = _CollapseModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseModule, [{
    type: NgModule,
    args: [{
      exports: [CollapseDirective],
      imports: [CollapseDirective]
    }]
  }], null, null);
})();
var nextId$1 = 0;
var _AccordionItemComponent = class _AccordionItemComponent {
  constructor(accordionService) {
    this.accordionService = accordionService;
    this.visible = false;
    this.contentId = `accordion-item-${nextId$1++}`;
    this.itemContext = {
      $implicit: this.visible
    };
    this.templates = {};
  }
  set open(value) {
    console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
    this.visible = value || this.visible;
  }
  get open() {
    return this.visible;
  }
  get hostClasses() {
    return {
      "accordion-item": true
    };
  }
  ngOnInit() {
    this.accordionService.addItem(this);
  }
  ngOnDestroy() {
    this.accordionService.removeItem(this);
  }
  toggleItem() {
    this.accordionService.toggleItem(this);
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_AccordionItemComponent.ɵfac = function AccordionItemComponent_Factory(t) {
  return new (t || _AccordionItemComponent)(ɵɵdirectiveInject(AccordionService));
};
_AccordionItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccordionItemComponent,
  selectors: [["c-accordion-item"]],
  contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 2,
  hostBindings: function AccordionItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    visible: [InputFlags.HasDecoratorInputTransform, "visible", "visible", booleanAttribute],
    open: "open"
  },
  exportAs: ["cAccordionItem"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 13,
  vars: 7,
  consts: [[1, "accordion-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cCollapse", "", 1, "accordion-collapse", 3, "visible", "id"], ["defaultAccordionHeaderTemplate", ""], ["defaultAccordionHeaderContentTemplate", ""], ["defaultAccordionBodyTemplate", ""], ["defaultAccordionBodyContentTemplate", ""], ["cAccordionButton", "", 3, "collapsed", "click"], [1, "accordion-body"]],
  template: function AccordionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "div", 0);
      ɵɵtemplate(2, AccordionItemComponent_ng_container_2_Template, 1, 0, "ng-container", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2);
      ɵɵtemplate(4, AccordionItemComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
      ɵɵtemplate(5, AccordionItemComponent_ng_template_5_Template, 2, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor)(7, AccordionItemComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor)(9, AccordionItemComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor)(11, AccordionItemComponent_ng_template_11_Template, 1, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(6);
      const _r7 = ɵɵreference(10);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.templates["accordionHeaderTemplate"] || _r3)("ngTemplateOutletContext", ctx.itemContext);
      ɵɵadvance();
      ɵɵproperty("visible", ctx.visible)("id", ctx.contentId);
      ɵɵattribute("aria-expanded", ctx.visible);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.templates["accordionBodyTemplate"] || _r7)("ngTemplateOutletContext", ctx.itemContext);
    }
  },
  dependencies: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
  styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"]
});
var AccordionItemComponent = _AccordionItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionItemComponent, [{
    type: Component,
    args: [{
      selector: "c-accordion-item",
      exportAs: "cAccordionItem",
      standalone: true,
      imports: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
      template: `<ng-container>
  <div class="accordion-header">
    <ng-container *ngTemplateOutlet="templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext"></ng-container>
  </div>
  <div class="accordion-collapse" cCollapse [visible]="visible" [attr.aria-expanded]="visible" [id]="contentId">
    <ng-container *ngTemplateOutlet="templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext"></ng-container>
  </div>
</ng-container>

<ng-template #defaultAccordionHeaderTemplate>
  <button cAccordionButton [collapsed]="!visible" [attr.aria-controls]="contentId" (click)="toggleItem()">
    <ng-container
      *ngTemplateOutlet="templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext">
    </ng-container>
  </button>
</ng-template>

<ng-template #defaultAccordionHeaderContentTemplate>
  <ng-content></ng-content>
</ng-template>

<ng-template #defaultAccordionBodyTemplate>
  <div class="accordion-body">
    <ng-container
      *ngTemplateOutlet="templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext">
    </ng-container>
  </div>
</ng-template>

<ng-template #defaultAccordionBodyContentTemplate>
  <ng-content></ng-content>
</ng-template>
`,
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], () => [{
    type: AccordionService
  }], {
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    open: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }]
  });
})();
var _AccordionModule = class _AccordionModule {
};
_AccordionModule.ɵfac = function AccordionModule_Factory(t) {
  return new (t || _AccordionModule)();
};
_AccordionModule.ɵmod = ɵɵdefineNgModule({
  type: _AccordionModule,
  imports: [AccordionButtonDirective, AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent, AccordionButtonDirective, AccordionItemComponent]
});
_AccordionModule.ɵinj = ɵɵdefineInjector({
  providers: [AccordionService]
});
var AccordionModule = _AccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [AccordionButtonDirective, AccordionComponent, AccordionItemComponent],
      exports: [AccordionComponent, AccordionButtonDirective, AccordionItemComponent],
      providers: [AccordionService]
    }]
  }], null, null);
})();
var _AlertHeadingDirective = class _AlertHeadingDirective {
  get hostClasses() {
    return {
      "alert-heading": true
    };
  }
  constructor() {
  }
};
_AlertHeadingDirective.ɵfac = function AlertHeadingDirective_Factory(t) {
  return new (t || _AlertHeadingDirective)();
};
_AlertHeadingDirective.ɵdir = ɵɵdefineDirective({
  type: _AlertHeadingDirective,
  selectors: [["", "cAlertHeading", ""]],
  hostVars: 2,
  hostBindings: function AlertHeadingDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var AlertHeadingDirective = _AlertHeadingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertHeadingDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlertHeading]",
      standalone: true
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _AlertLinkDirective = class _AlertLinkDirective {
  get hostClasses() {
    return {
      "alert-link": true
    };
  }
  constructor() {
  }
};
_AlertLinkDirective.ɵfac = function AlertLinkDirective_Factory(t) {
  return new (t || _AlertLinkDirective)();
};
_AlertLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _AlertLinkDirective,
  selectors: [["", "cAlertLink", ""]],
  hostVars: 2,
  hostBindings: function AlertLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var AlertLinkDirective = _AlertLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlertLink]",
      standalone: true
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ButtonDirective = class _ButtonDirective {
  constructor() {
    this.active = false;
    this.color = "primary";
    this.disabled = false;
    this.size = "";
    this.type = "button";
  }
  get hostClasses() {
    return {
      btn: true,
      [`btn-${this.color}`]: !!this.color && !this.variant,
      [`btn-${this.variant}`]: !!this.variant && !this.color,
      [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
      [`btn-${this.size}`]: !!this.size,
      [`${this.shape}`]: !!this.shape,
      disabled: this.disabled,
      active: this.active
    };
  }
  get ariaDisabled() {
    return this.disabled || null;
  }
  get isActive() {
    return this.active || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get tabIndex() {
    return this.disabled ? "-1" : null;
  }
};
_ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
  return new (t || _ButtonDirective)();
};
_ButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _ButtonDirective,
  selectors: [["", "cButton", ""]],
  hostVars: 7,
  hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-disabled", ctx.ariaDisabled)("aria-pressed", ctx.isActive)("disabled", ctx.attrDisabled)("tabindex", ctx.tabIndex);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: [InputFlags.HasDecoratorInputTransform, "active", "active", booleanAttribute],
    color: "color",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    shape: "shape",
    size: "size",
    type: "type",
    variant: "variant"
  },
  exportAs: ["cButton"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ButtonDirective = _ButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[cButton]",
      exportAs: "cButton",
      standalone: true
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    variant: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    isActive: [{
      type: HostBinding,
      args: ["attr.aria-pressed"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var _ButtonCloseDirective = class _ButtonCloseDirective extends ButtonDirective {
  constructor() {
    super(...arguments);
    this.white = false;
  }
  get hostClasses() {
    return {
      btn: true,
      "btn-close": true,
      "btn-close-white": this.white,
      [`btn-${this.size}`]: !!this.size,
      disabled: this.disabled,
      active: this.active
    };
  }
};
_ButtonCloseDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵButtonCloseDirective_BaseFactory;
  return function ButtonCloseDirective_Factory(t) {
    return (ɵButtonCloseDirective_BaseFactory || (ɵButtonCloseDirective_BaseFactory = ɵɵgetInheritedFactory(_ButtonCloseDirective)))(t || _ButtonCloseDirective);
  };
})();
_ButtonCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _ButtonCloseDirective,
  selectors: [["", "cButtonClose", ""]],
  hostVars: 2,
  hostBindings: function ButtonCloseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    white: [InputFlags.HasDecoratorInputTransform, "white", "white", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var ButtonCloseDirective = _ButtonCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cButtonClose]",
      standalone: true
    }]
  }], null, {
    white: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ButtonModule = class _ButtonModule {
};
_ButtonModule.ɵfac = function ButtonModule_Factory(t) {
  return new (t || _ButtonModule)();
};
_ButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _ButtonModule,
  imports: [ButtonDirective, ButtonCloseDirective],
  exports: [ButtonDirective, ButtonCloseDirective]
});
_ButtonModule.ɵinj = ɵɵdefineInjector({});
var ButtonModule = _ButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonDirective, ButtonCloseDirective],
      exports: [ButtonDirective, ButtonCloseDirective]
    }]
  }], null, null);
})();
var _AlertComponent = class _AlertComponent {
  constructor() {
    this.color = "primary";
    this.role = "alert";
    this.visibleChange = new EventEmitter();
    this.templates = {};
    this._dismissible = false;
    this._fade = false;
    this._visible = true;
  }
  /**
   * Optionally adds a close button to alert and allow it to self dismiss.
   * @type boolean
   */
  get dismissible() {
    return this._dismissible;
  }
  set dismissible(value) {
    this._dismissible = coerceBooleanProperty(value);
  }
  /**
   * Adds animation for dismissible alert.
   * @type boolean
   */
  get fade() {
    return this._fade;
  }
  set fade(value) {
    this._fade = coerceBooleanProperty(value);
  }
  get visible() {
    return this._visible;
  }
  /**
   * Toggle the visibility of alert component.
   * @type boolean
   */
  set visible(value) {
    if (this._visible !== value) {
      this._visible = coerceBooleanProperty(value);
      this.visibleChange.emit(value);
    }
  }
  get animationDisabled() {
    return !this.fade;
  }
  get animateType() {
    return this.visible ? "show" : "hide";
  }
  get hostClasses() {
    return {
      alert: true,
      "alert-dismissible": this.dismissible,
      fade: this.fade,
      show: !this.hide,
      [`alert-${this.color}`]: !!this.color && this.variant !== "solid",
      [`bg-${this.color}`]: !!this.color && this.variant === "solid",
      "text-white": !!this.color && this.variant === "solid"
    };
  }
  onAnimationStart($event) {
    this.onAnimationEvent($event);
  }
  onAnimationDone($event) {
    this.onAnimationEvent($event);
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
  onAnimationEvent(event) {
    this.hide = event.phaseName === "start" && event.toState === "show";
    if (event.phaseName === "done") {
      this.hide = event.toState === "hide" || event.toState === "void";
      if (event.toState === "show") {
        this.hide = false;
      }
    }
  }
};
_AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || _AlertComponent)();
};
_AlertComponent.ɵcmp = ɵɵdefineComponent({
  type: _AlertComponent,
  selectors: [["c-alert"]],
  contentQueries: function AlertComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 5,
  hostBindings: function AlertComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@fadeInOut.start", function AlertComponent_animation_fadeInOut_start_HostBindingHandler($event) {
        return ctx.onAnimationStart($event);
      })("@fadeInOut.done", function AlertComponent_animation_fadeInOut_done_HostBindingHandler($event) {
        return ctx.onAnimationDone($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵsyntheticHostProperty("@.disabled", ctx.animationDisabled)("@fadeInOut", ctx.animateType);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    role: "role",
    variant: "variant",
    dismissible: "dismissible",
    fade: "fade",
    visible: "visible"
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cAlert"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 1,
  consts: [["defaultAlertButtonCloseTemplate", ""], [4, "ngTemplateOutlet"], ["aria-label", "Close", "cButtonClose", "", 3, "click"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AlertComponent_Conditional_0_Template, 2, 1)(1, AlertComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.visible || !ctx.hide ? 0 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, ButtonCloseDirective],
  styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"],
  data: {
    animation: [trigger("fadeInOut", [state("show", style({
      opacity: 1,
      height: "*",
      padding: "*",
      border: "*",
      margin: "*"
    })), state("hide", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), state("void", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), transition("show => hide", [animate(".3s ease-out")]), transition("hide => show", [animate(".3s ease-in")]), transition("show => void", [animate(".3s ease-out")]), transition("void => show", [animate(".3s ease-in")])])]
  }
});
var AlertComponent = _AlertComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "c-alert",
      exportAs: "cAlert",
      standalone: true,
      imports: [NgTemplateOutlet, ButtonCloseDirective],
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate(".3s ease-out")]), transition("hide => show", [animate(".3s ease-in")]), transition("show => void", [animate(".3s ease-out")]), transition("void => show", [animate(".3s ease-in")])])],
      template: '@if (visible || !hide) {\n  @if (dismissible) {\n    <ng-container *ngTemplateOutlet="templates?.alertButtonCloseTemplate || defaultAlertButtonCloseTemplate" />\n  }\n  <ng-content />\n}\n\n<ng-template #defaultAlertButtonCloseTemplate>\n  <button (click)="visible=false" aria-label="Close" cButtonClose></button>\n</ng-template>\n',
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    variant: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    dismissible: [{
      type: Input
    }],
    fade: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    animationDisabled: [{
      type: HostBinding,
      args: ["@.disabled"]
    }],
    animateType: [{
      type: HostBinding,
      args: ["@fadeInOut"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    onAnimationStart: [{
      type: HostListener,
      args: ["@fadeInOut.start", ["$event"]]
    }],
    onAnimationDone: [{
      type: HostListener,
      args: ["@fadeInOut.done", ["$event"]]
    }]
  });
})();
var _AlertModule = class _AlertModule {
};
_AlertModule.ɵfac = function AlertModule_Factory(t) {
  return new (t || _AlertModule)();
};
_AlertModule.ɵmod = ɵɵdefineNgModule({
  type: _AlertModule,
  imports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective],
  exports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective]
});
_AlertModule.ɵinj = ɵɵdefineInjector({});
var AlertModule = _AlertModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertModule, [{
    type: NgModule,
    args: [{
      imports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective],
      exports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective]
    }]
  }], null, null);
})();
var _AvatarComponent = class _AvatarComponent {
  constructor() {
    this.size = "md";
  }
  get statusClass() {
    return {
      "avatar-status": true,
      [`bg-${this.status}`]: !!this.status
    };
  }
  get hostClasses() {
    return {
      avatar: true,
      [`avatar-${this.size}`]: !!this.size,
      [`bg-${this.color}`]: !!this.color,
      [`${this.shape}`]: !!this.shape,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
};
_AvatarComponent.ɵfac = function AvatarComponent_Factory(t) {
  return new (t || _AvatarComponent)();
};
_AvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _AvatarComponent,
  selectors: [["c-avatar"]],
  hostVars: 2,
  hostBindings: function AvatarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    shape: "shape",
    size: "size",
    src: "src",
    status: "status",
    textColor: "textColor"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 2,
  consts: [[4, "ngTemplateOutlet"], [3, "ngClass"], ["defaultImageTemplate", ""], ["class", "avatar-img", 3, "src"], [1, "avatar-img", 3, "src"]],
  template: function AvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0);
      ɵɵtemplate(1, AvatarComponent_ng_container_1_Template, 1, 0, "ng-container", 0)(2, AvatarComponent_Conditional_2_Template, 1, 1, "span", 1);
      ɵɵelementContainerEnd();
      ɵɵtemplate(3, AvatarComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(4);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", _r3);
      ɵɵadvance();
      ɵɵconditional(2, !!ctx.status ? 2 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NgClass],
  encapsulation: 2
});
var AvatarComponent = _AvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      selector: "c-avatar",
      standalone: true,
      imports: [NgTemplateOutlet, NgClass],
      template: '<ng-container>\n  <ng-container *ngTemplateOutlet="defaultImageTemplate" />\n  @if (!!status) {\n    <span [ngClass]="statusClass"></span>\n  }\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  @if (!!src) {\n    <img [src]="src" class="avatar-img" />\n  } @else {\n    <ng-content />\n  }\n</ng-template>\n'
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    status: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _AvatarModule = class _AvatarModule {
};
_AvatarModule.ɵfac = function AvatarModule_Factory(t) {
  return new (t || _AvatarModule)();
};
_AvatarModule.ɵmod = ɵɵdefineNgModule({
  type: _AvatarModule,
  imports: [AvatarComponent],
  exports: [AvatarComponent]
});
_AvatarModule.ɵinj = ɵɵdefineInjector({});
var AvatarModule = _AvatarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [AvatarComponent],
      exports: [AvatarComponent]
    }]
  }], null, null);
})();
var _BadgeComponent = class _BadgeComponent {
  constructor() {
  }
  get hostClasses() {
    const positionClasses = {
      "position-absolute": !!this.position,
      "translate-middle": !!this.position,
      "top-0": this.position?.includes("top"),
      "top-100": this.position?.includes("bottom"),
      "start-100": this.position?.includes("end"),
      "start-0": this.position?.includes("start")
    };
    return Object.assign({
      badge: true,
      [`bg-${this.color}`]: !!this.color,
      [`text-${this.textColor}`]: !!this.textColor,
      [`badge-${this.size}`]: !!this.size,
      [`${this.shape}`]: !!this.shape
    }, !!this.position ? positionClasses : {});
  }
};
_BadgeComponent.ɵfac = function BadgeComponent_Factory(t) {
  return new (t || _BadgeComponent)();
};
_BadgeComponent.ɵcmp = ɵɵdefineComponent({
  type: _BadgeComponent,
  selectors: [["c-badge"]],
  hostVars: 2,
  hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    position: "position",
    shape: "shape",
    size: "size",
    textColor: "textColor"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var BadgeComponent = _BadgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "c-badge",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BadgeModule = class _BadgeModule {
};
_BadgeModule.ɵfac = function BadgeModule_Factory(t) {
  return new (t || _BadgeModule)();
};
_BadgeModule.ɵmod = ɵɵdefineNgModule({
  type: _BadgeModule,
  imports: [BadgeComponent],
  exports: [BadgeComponent]
});
_BadgeModule.ɵinj = ɵɵdefineInjector({});
var BadgeModule = _BadgeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [BadgeComponent],
      exports: [BadgeComponent]
    }]
  }], null, null);
})();
var _backdropClick, _document, _rendererFactory, _renderer, _unListen, _scrollbarWidth, scrollbarWidth_get, _isRTL, isRTL_get, _scrollBarVisible;
var _BackdropService = class _BackdropService {
  constructor() {
    __privateAdd(this, _scrollbarWidth);
    __privateAdd(this, _isRTL);
    __privateAdd(this, _backdropClick, void 0);
    __privateAdd(this, _document, void 0);
    __privateAdd(this, _rendererFactory, void 0);
    __privateAdd(this, _renderer, void 0);
    __privateAdd(this, _unListen, void 0);
    __privateAdd(this, _scrollBarVisible, void 0);
    __privateSet(this, _backdropClick, new Subject());
    this.backdropClick$ = __privateGet(this, _backdropClick).asObservable();
    __privateSet(this, _document, inject(DOCUMENT));
    __privateSet(this, _rendererFactory, inject(RendererFactory2));
    __privateSet(this, _renderer, __privateGet(this, _rendererFactory).createRenderer(null, null));
    this.scrollbarWidth = __privateGet(this, _scrollbarWidth, scrollbarWidth_get);
    __privateSet(this, _scrollBarVisible, true);
  }
  setBackdrop(type = "modal") {
    const backdropElement = __privateGet(this, _renderer).createElement("div");
    __privateGet(this, _renderer).addClass(backdropElement, `${type}-backdrop`);
    __privateGet(this, _renderer).addClass(backdropElement, "fade");
    __privateGet(this, _renderer).appendChild(__privateGet(this, _document).body, backdropElement);
    __privateSet(this, _unListen, __privateGet(this, _renderer).listen(backdropElement, "click", (e) => {
      this.onClickHandler();
    }));
    this.scrollbarWidth = __privateGet(this, _scrollbarWidth, scrollbarWidth_get);
    setTimeout(() => {
      __privateGet(this, _renderer).addClass(backdropElement, "show");
    });
    this.activeBackdrop = backdropElement;
    return backdropElement;
  }
  clearBackdrop(backdropElement) {
    if (backdropElement) {
      __privateGet(this, _unListen).call(this);
      __privateGet(this, _renderer).removeClass(backdropElement, "show");
      setTimeout(() => {
        __privateGet(this, _renderer).removeChild(__privateGet(this, _document).body, backdropElement);
        if (this.activeBackdrop === backdropElement) {
          this.resetScrollbar();
        }
        backdropElement = void 0;
      }, 300);
    }
    return void 0;
  }
  hideScrollbar() {
    if (__privateGet(this, _scrollBarVisible)) {
      __privateGet(this, _renderer).setStyle(__privateGet(this, _document).body, "overflow", "hidden");
      __privateGet(this, _renderer).setStyle(__privateGet(this, _document).body, `padding-${__privateGet(this, _isRTL, isRTL_get) ? "left" : "right"}`, this.scrollbarWidth);
      __privateSet(this, _scrollBarVisible, false);
    }
  }
  resetScrollbar() {
    __privateGet(this, _renderer).removeStyle(__privateGet(this, _document).body, "overflow");
    __privateGet(this, _renderer).removeStyle(__privateGet(this, _document).body, `padding-${__privateGet(this, _isRTL, isRTL_get) ? "left" : "right"}`);
    __privateSet(this, _scrollBarVisible, true);
  }
  onClickHandler() {
    __privateGet(this, _backdropClick).next(true);
  }
};
_backdropClick = new WeakMap();
_document = new WeakMap();
_rendererFactory = new WeakMap();
_renderer = new WeakMap();
_unListen = new WeakMap();
_scrollbarWidth = new WeakSet();
scrollbarWidth_get = function() {
  const documentWidth = __privateGet(this, _document).documentElement.clientWidth;
  const scrollbarWidth = Math.abs((__privateGet(this, _document).defaultView?.innerWidth ?? documentWidth) - documentWidth);
  return `${scrollbarWidth}px`;
};
_isRTL = new WeakSet();
isRTL_get = function() {
  return __privateGet(this, _document).documentElement.dir === "rtl" || __privateGet(this, _document).body.dir === "rtl";
};
_scrollBarVisible = new WeakMap();
_BackdropService.ɵfac = function BackdropService_Factory(t) {
  return new (t || _BackdropService)();
};
_BackdropService.ɵprov = ɵɵdefineInjectable({
  token: _BackdropService,
  factory: _BackdropService.ɵfac,
  providedIn: "root"
});
var BackdropService = _BackdropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackdropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BreadcrumbItemComponent = class _BreadcrumbItemComponent {
  get ariaCurrent() {
    return this.active ? "page" : null;
  }
  get hostClasses() {
    return {
      "breadcrumb-item": true,
      active: this.active
    };
  }
};
_BreadcrumbItemComponent.ɵfac = function BreadcrumbItemComponent_Factory(t) {
  return new (t || _BreadcrumbItemComponent)();
};
_BreadcrumbItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbItemComponent,
  selectors: [["c-breadcrumb-item"]],
  hostVars: 3,
  hostBindings: function BreadcrumbItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    url: "url",
    attributes: "attributes",
    linkProps: "linkProps"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 4,
  vars: 1,
  consts: [[3, "routerLink", "cHtmlAttr", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["defaultBreadcrumbItemContentTemplate", ""], [4, "ngTemplateOutlet"], [3, "cHtmlAttr"]],
  template: function BreadcrumbItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, BreadcrumbItemComponent_Conditional_0_Template, 2, 13, "a", 0)(1, BreadcrumbItemComponent_Conditional_1_Template, 2, 3)(2, BreadcrumbItemComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, !ctx.active ? 0 : 1);
    }
  },
  dependencies: [RouterModule, RouterLink, NgTemplateOutlet, HtmlAttributesDirective2],
  styles: ["[_nghost-%COMP%]{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}"]
});
var BreadcrumbItemComponent = _BreadcrumbItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbItemComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb-item",
      standalone: true,
      imports: [RouterModule, NgTemplateOutlet, HtmlAttributesDirective2],
      template: `@if (!active) {
  <a [routerLink]="url"
     [cHtmlAttr]="attributes ?? {}"
     [target]="attributes?.['target']"
     [queryParams]="linkProps?.queryParams ?? null"
     [fragment]="linkProps?.fragment"
     [queryParamsHandling]="linkProps?.queryParamsHandling ?? null"
     [preserveFragment]="linkProps?.preserveFragment ?? false"
     [skipLocationChange]="linkProps?.skipLocationChange ?? false"
     [replaceUrl]="linkProps?.replaceUrl ?? false"
     [state]="linkProps?.state ?? {}"
  >
    <ng-container *ngTemplateOutlet="defaultBreadcrumbItemContentTemplate" />
  </a>
} @else {
  <span [cHtmlAttr]="attributes ?? {}">
      <ng-container *ngTemplateOutlet="defaultBreadcrumbItemContentTemplate" />
  </span>
}

<ng-template #defaultBreadcrumbItemContentTemplate>
  <ng-content />
</ng-template>
`,
      styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"]
    }]
  }], null, {
    active: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    linkProps: [{
      type: Input
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BreadcrumbComponent = class _BreadcrumbComponent {
  get hostClasses() {
    return {
      breadcrumb: true
    };
  }
  constructor() {
    this.ariaLabel = "breadcrumb";
    this.role = "navigation";
  }
};
_BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || _BreadcrumbComponent)();
};
_BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbComponent,
  selectors: [["c-breadcrumb"]],
  hostVars: 4,
  hostBindings: function BreadcrumbComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-label", ctx.ariaLabel)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    ariaLabel: "ariaLabel",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var BreadcrumbComponent = _BreadcrumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], () => [], {
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }, {
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BreadcrumbRouterService = class _BreadcrumbRouterService {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.outlet = "primary";
    this.breadcrumbsBehaviorSubject = new BehaviorSubject(new Array());
    this.breadcrumbs$ = this.breadcrumbsBehaviorSubject.asObservable();
    this.router.events.pipe(takeUntilDestroyed(), filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const breadcrumbs = [];
      let currentRoute = this.route.root;
      let url = "";
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach((childRoute) => {
          if (childRoute.outlet === this.outlet) {
            const routeSnapshot = childRoute.snapshot;
            url += "/" + routeSnapshot.url.map((segment) => segment.path).join("/");
            breadcrumbs.push({
              label: childRoute.snapshot.data["title"] || "",
              url,
              queryParams: routeSnapshot.queryParams
            });
            currentRoute = childRoute;
          }
        });
      } while (currentRoute);
      this.breadcrumbsBehaviorSubject.next(Object.assign([], breadcrumbs));
      return breadcrumbs;
    });
  }
};
_BreadcrumbRouterService.ɵfac = function BreadcrumbRouterService_Factory(t) {
  return new (t || _BreadcrumbRouterService)(ɵɵinject(Router), ɵɵinject(ActivatedRoute));
};
_BreadcrumbRouterService.ɵprov = ɵɵdefineInjectable({
  token: _BreadcrumbRouterService,
  factory: _BreadcrumbRouterService.ɵfac,
  providedIn: "root"
});
var BreadcrumbRouterService = _BreadcrumbRouterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }], null);
})();
var _BreadcrumbRouterComponent = class _BreadcrumbRouterComponent {
  constructor(service) {
    this.service = service;
  }
  ngOnInit() {
    this.breadcrumbs = this.service.breadcrumbs$;
  }
  ngOnChanges(changes) {
    if (changes["items"]) {
      this.setup();
    }
  }
  setup() {
    if (this.items && this.items.length > 0) {
      this.breadcrumbs = new Observable((observer) => {
        if (this.items) {
          observer.next(this.items);
        }
      });
    }
  }
  ngOnDestroy() {
    this.breadcrumbs = void 0;
  }
};
_BreadcrumbRouterComponent.ɵfac = function BreadcrumbRouterComponent_Factory(t) {
  return new (t || _BreadcrumbRouterComponent)(ɵɵdirectiveInject(BreadcrumbRouterService));
};
_BreadcrumbRouterComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbRouterComponent,
  selectors: [["c-breadcrumb-router"], ["", "cBreadcrumbRouter", ""]],
  inputs: {
    items: "items"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 2,
  consts: [[1, "m-0"], [3, "active", "url", "attributes", "linkProps"]],
  template: function BreadcrumbRouterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "c-breadcrumb", 0);
      ɵɵrepeaterCreate(1, BreadcrumbRouterComponent_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵpipe(3, "async");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx.breadcrumbs));
    }
  },
  dependencies: [BreadcrumbComponent, BreadcrumbItemComponent, AsyncPipe],
  encapsulation: 2
});
var BreadcrumbRouterComponent = _BreadcrumbRouterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouterComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb-router, [cBreadcrumbRouter]",
      standalone: true,
      imports: [BreadcrumbComponent, BreadcrumbItemComponent, AsyncPipe],
      template: `<c-breadcrumb class="m-0">
  @for (breadcrumb of breadcrumbs | async; track breadcrumb; let last = $last) {
    @if (breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)) {
      <c-breadcrumb-item
        [active]="last"
        [url]="breadcrumb?.url"
        [attributes]="breadcrumb?.attributes"
        [linkProps]="breadcrumb?.linkProps"
      >
        {{ breadcrumb?.label }}
      </c-breadcrumb-item>
    }
  }
</c-breadcrumb>
`
    }]
  }], () => [{
    type: BreadcrumbRouterService
  }], {
    items: [{
      type: Input
    }]
  });
})();
var _BreadcrumbModule = class _BreadcrumbModule {
};
_BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || _BreadcrumbModule)();
};
_BreadcrumbModule.ɵmod = ɵɵdefineNgModule({
  type: _BreadcrumbModule,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
  exports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent]
});
_BreadcrumbModule.ɵinj = ɵɵdefineInjector({
  providers: [BreadcrumbRouterService],
  imports: [BreadcrumbItemComponent, BreadcrumbRouterComponent]
});
var BreadcrumbModule = _BreadcrumbModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
      exports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
      providers: [BreadcrumbRouterService]
    }]
  }], null, null);
})();
var _ButtonGroupComponent = class _ButtonGroupComponent {
  get hostClasses() {
    return {
      "btn-group": !this.vertical,
      "btn-group-vertical": this.vertical,
      [`btn-group-${this.size}`]: !!this.size
    };
  }
  constructor() {
    this.role = "group";
  }
};
_ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(t) {
  return new (t || _ButtonGroupComponent)();
};
_ButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _ButtonGroupComponent,
  selectors: [["c-button-group"]],
  hostVars: 3,
  hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    size: "size",
    vertical: "vertical",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ButtonGroupComponent = _ButtonGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-button-group",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [], {
    size: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ButtonToolbarComponent = class _ButtonToolbarComponent {
  get hostClasses() {
    return {
      "btn-toolbar": true
    };
  }
  constructor() {
    this.role = "toolbar";
  }
};
_ButtonToolbarComponent.ɵfac = function ButtonToolbarComponent_Factory(t) {
  return new (t || _ButtonToolbarComponent)();
};
_ButtonToolbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _ButtonToolbarComponent,
  selectors: [["c-button-toolbar"]],
  hostVars: 3,
  hostBindings: function ButtonToolbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ButtonToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ButtonToolbarComponent = _ButtonToolbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonToolbarComponent, [{
    type: Component,
    args: [{
      selector: "c-button-toolbar",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [], {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ButtonGroupModule = class _ButtonGroupModule {
};
_ButtonGroupModule.ɵfac = function ButtonGroupModule_Factory(t) {
  return new (t || _ButtonGroupModule)();
};
_ButtonGroupModule.ɵmod = ɵɵdefineNgModule({
  type: _ButtonGroupModule,
  imports: [ButtonGroupComponent, ButtonToolbarComponent],
  exports: [ButtonGroupComponent, ButtonToolbarComponent]
});
_ButtonGroupModule.ɵinj = ɵɵdefineInjector({});
var ButtonGroupModule = _ButtonGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonGroupComponent, ButtonToolbarComponent],
      exports: [ButtonGroupComponent, ButtonToolbarComponent]
    }]
  }], null, null);
})();
var _CalloutComponent = class _CalloutComponent {
  get hostClasses() {
    return {
      callout: true,
      [`callout-${this.color}`]: !!this.color
    };
  }
  constructor() {
  }
};
_CalloutComponent.ɵfac = function CalloutComponent_Factory(t) {
  return new (t || _CalloutComponent)();
};
_CalloutComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalloutComponent,
  selectors: [["c-callout"], ["", "cCallout", ""]],
  hostVars: 2,
  hostBindings: function CalloutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CalloutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CalloutComponent = _CalloutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalloutComponent, [{
    type: Component,
    args: [{
      selector: "c-callout, [cCallout]",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CalloutModule = class _CalloutModule {
};
_CalloutModule.ɵfac = function CalloutModule_Factory(t) {
  return new (t || _CalloutModule)();
};
_CalloutModule.ɵmod = ɵɵdefineNgModule({
  type: _CalloutModule,
  imports: [CalloutComponent],
  exports: [CalloutComponent]
});
_CalloutModule.ɵinj = ɵɵdefineInjector({});
var CalloutModule = _CalloutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalloutModule, [{
    type: NgModule,
    args: [{
      exports: [CalloutComponent],
      imports: [CalloutComponent]
    }]
  }], null, null);
})();
var _CardComponent = class _CardComponent {
  get hostClasses() {
    return {
      card: true,
      [`bg-${this.color}`]: !!this.color,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  constructor() {
  }
};
_CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || _CardComponent)();
};
_CardComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardComponent,
  selectors: [["c-card"], ["", "c-card", ""]],
  hostVars: 2,
  hostBindings: function CardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    textColor: "textColor"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardComponent = _CardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "c-card, [c-card]",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardBodyComponent = class _CardBodyComponent {
  get hostClasses() {
    return {
      "card-body": true
    };
  }
};
_CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) {
  return new (t || _CardBodyComponent)();
};
_CardBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardBodyComponent,
  selectors: [["c-card-body"], ["", "c-card-body", ""]],
  hostVars: 2,
  hostBindings: function CardBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardBodyComponent = _CardBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-card-body, [c-card-body]",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardFooterComponent = class _CardFooterComponent {
  get hostClasses() {
    return {
      "card-footer": true
    };
  }
};
_CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) {
  return new (t || _CardFooterComponent)();
};
_CardFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardFooterComponent,
  selectors: [["c-card-footer"], ["", "c-card-footer", ""]],
  hostVars: 2,
  hostBindings: function CardFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardFooterComponent = _CardFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-card-footer, [c-card-footer]",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardGroupComponent = class _CardGroupComponent {
  get hostClasses() {
    return {
      "card-group": true
    };
  }
};
_CardGroupComponent.ɵfac = function CardGroupComponent_Factory(t) {
  return new (t || _CardGroupComponent)();
};
_CardGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardGroupComponent,
  selectors: [["c-card-group"], ["", "c-card-group", ""]],
  hostVars: 2,
  hostBindings: function CardGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardGroupComponent = _CardGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-card-group, [c-card-group]",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardHeaderComponent = class _CardHeaderComponent {
  get hostClasses() {
    return {
      "card-header": true
    };
  }
};
_CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) {
  return new (t || _CardHeaderComponent)();
};
_CardHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardHeaderComponent,
  selectors: [["c-card-header"], ["", "c-card-header", ""]],
  hostVars: 2,
  hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardHeaderComponent = _CardHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-card-header, [c-card-header]",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardHeaderActionsComponent = class _CardHeaderActionsComponent {
  constructor() {
    this.cardHeaderActions = true;
  }
};
_CardHeaderActionsComponent.ɵfac = function CardHeaderActionsComponent_Factory(t) {
  return new (t || _CardHeaderActionsComponent)();
};
_CardHeaderActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardHeaderActionsComponent,
  selectors: [["c-card-header-actions"], ["", "c-card-header-actions", ""]],
  hostVars: 2,
  hostBindings: function CardHeaderActionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("card-header-actions", ctx.cardHeaderActions);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardHeaderActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardHeaderActionsComponent = _CardHeaderActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderActionsComponent, [{
    type: Component,
    args: [{
      selector: "c-card-header-actions, [c-card-header-actions]",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    cardHeaderActions: [{
      type: HostBinding,
      args: ["class.card-header-actions"]
    }]
  });
})();
var _CardImgDirective = class _CardImgDirective {
  get hostClasses() {
    const suffix = !!this.orientation ? `-${this.orientation}` : "";
    return {
      [`card-img${suffix}`]: true
    };
  }
};
_CardImgDirective.ɵfac = function CardImgDirective_Factory(t) {
  return new (t || _CardImgDirective)();
};
_CardImgDirective.ɵdir = ɵɵdefineDirective({
  type: _CardImgDirective,
  selectors: [["", "cCardImg", ""]],
  hostVars: 2,
  hostBindings: function CardImgDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    orientation: [InputFlags.None, "cCardImg", "orientation"]
  },
  standalone: true
});
var CardImgDirective = _CardImgDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardImg]",
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input,
      args: ["cCardImg"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardImgOverlayComponent = class _CardImgOverlayComponent {
  get hostClasses() {
    return {
      "card-img-overlay": true
    };
  }
};
_CardImgOverlayComponent.ɵfac = function CardImgOverlayComponent_Factory(t) {
  return new (t || _CardImgOverlayComponent)();
};
_CardImgOverlayComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardImgOverlayComponent,
  selectors: [["c-card-img-overlay"]],
  hostVars: 2,
  hostBindings: function CardImgOverlayComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CardImgOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CardImgOverlayComponent = _CardImgOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgOverlayComponent, [{
    type: Component,
    args: [{
      selector: "c-card-img-overlay",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardLinkDirective = class _CardLinkDirective {
  get hostClasses() {
    return {
      "card-link": true
    };
  }
};
_CardLinkDirective.ɵfac = function CardLinkDirective_Factory(t) {
  return new (t || _CardLinkDirective)();
};
_CardLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _CardLinkDirective,
  selectors: [["", "cCardLink", ""]],
  hostVars: 2,
  hostBindings: function CardLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var CardLinkDirective = _CardLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardLink]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardSubtitleDirective = class _CardSubtitleDirective {
  get hostClasses() {
    return {
      "card-subtitle": true
    };
  }
};
_CardSubtitleDirective.ɵfac = function CardSubtitleDirective_Factory(t) {
  return new (t || _CardSubtitleDirective)();
};
_CardSubtitleDirective.ɵdir = ɵɵdefineDirective({
  type: _CardSubtitleDirective,
  selectors: [["", "cCardSubtitle", ""]],
  hostVars: 2,
  hostBindings: function CardSubtitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var CardSubtitleDirective = _CardSubtitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardSubtitle]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardTextDirective = class _CardTextDirective {
  get hostClasses() {
    return {
      "card-text": true
    };
  }
};
_CardTextDirective.ɵfac = function CardTextDirective_Factory(t) {
  return new (t || _CardTextDirective)();
};
_CardTextDirective.ɵdir = ɵɵdefineDirective({
  type: _CardTextDirective,
  selectors: [["", "cCardText", ""]],
  hostVars: 2,
  hostBindings: function CardTextDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var CardTextDirective = _CardTextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardText]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardTitleDirective = class _CardTitleDirective {
  get hostClasses() {
    return {
      "card-title": true
    };
  }
};
_CardTitleDirective.ɵfac = function CardTitleDirective_Factory(t) {
  return new (t || _CardTitleDirective)();
};
_CardTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _CardTitleDirective,
  selectors: [["", "cCardTitle", ""]],
  hostVars: 2,
  hostBindings: function CardTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var CardTitleDirective = _CardTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardTitle]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardModule = class _CardModule {
};
_CardModule.ɵfac = function CardModule_Factory(t) {
  return new (t || _CardModule)();
};
_CardModule.ɵmod = ɵɵdefineNgModule({
  type: _CardModule,
  imports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective],
  exports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective]
});
_CardModule.ɵinj = ɵɵdefineInjector({});
var CardModule = _CardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective],
      exports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective]
    }]
  }], null, null);
})();
var _intersecting;
var _IntersectionService = class _IntersectionService {
  constructor() {
    __privateAdd(this, _intersecting, void 0);
    this.platformId = inject(PLATFORM_ID);
    __privateSet(this, _intersecting, new BehaviorSubject({
      isIntersecting: false
    }));
    this.intersecting$ = __privateGet(this, _intersecting).asObservable();
    this.defaultObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };
    this.hostElementRefs = /* @__PURE__ */ new Map();
  }
  createIntersectionObserver(hostElement, observerOptions = this.defaultObserverOptions) {
    if (isPlatformServer(this.platformId)) {
      __privateGet(this, _intersecting).next({
        isIntersecting: true,
        hostElement
      });
      return;
    }
    const options = __spreadValues(__spreadValues({}, this.defaultObserverOptions), observerOptions);
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        __privateGet(this, _intersecting).next({
          isIntersecting: entry.isIntersecting,
          hostElement
        });
      });
    };
    this.hostElementRefs.set(hostElement, new IntersectionObserver(handleIntersect, options));
    this.hostElementRefs.get(hostElement)?.observe(hostElement.nativeElement);
  }
  unobserve(elementRef) {
    this.hostElementRefs.get(elementRef)?.unobserve(elementRef.nativeElement);
    this.hostElementRefs.set(elementRef, null);
    this.hostElementRefs.delete(elementRef);
  }
  ngOnDestroy() {
    this.hostElementRefs.forEach((observer, elementRef) => {
      observer?.unobserve(elementRef.nativeElement);
    });
  }
};
_intersecting = new WeakMap();
_IntersectionService.ɵfac = function IntersectionService_Factory(t) {
  return new (t || _IntersectionService)();
};
_IntersectionService.ɵprov = ɵɵdefineInjectable({
  token: _IntersectionService,
  factory: _IntersectionService.ɵfac,
  providedIn: "root"
});
var IntersectionService = _IntersectionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ListenersService = class _ListenersService {
  constructor(renderer) {
    this.renderer = renderer;
    this.listeners = /* @__PURE__ */ new Map();
  }
  setListeners({
    hostElement,
    trigger: trigger2,
    callbackOn,
    callbackOff,
    callbackToggle
  }) {
    const host = hostElement.nativeElement;
    const triggers = Array.isArray(trigger2) ? trigger2 : trigger2?.split(" ") ?? [];
    if (triggers?.includes("click")) {
      typeof callbackToggle === "function" && this.listeners.set("click", this.renderer.listen(host, "click", callbackToggle));
    }
    if (triggers?.includes("focus")) {
      typeof callbackOn === "function" && this.listeners.set("focus", this.renderer.listen(host, "focus", callbackOn));
    }
    if (triggers?.includes("click") || triggers?.includes("focus")) {
      typeof callbackOff === "function" && this.listeners.set("blur", this.renderer.listen(host, "blur", callbackOff));
    }
    if (triggers?.includes("hover")) {
      typeof callbackOn === "function" && this.listeners.set("mouseenter", this.renderer.listen(host, "mouseenter", callbackOn));
      typeof callbackOff === "function" && this.listeners.set("mouseleave", this.renderer.listen(host, "mouseleave", callbackOff));
    }
  }
  clearListeners() {
    this.listeners.forEach((unListen, key) => {
      unListen();
    });
    this.listeners.forEach((unListen, key) => {
      this.listeners.set(key, null);
    });
    this.listeners.clear();
  }
};
_ListenersService.ɵfac = function ListenersService_Factory(t) {
  return new (t || _ListenersService)(ɵɵinject(Renderer2));
};
_ListenersService.ɵprov = ɵɵdefineInjectable({
  token: _ListenersService,
  factory: _ListenersService.ɵfac
});
var ListenersService = _ListenersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListenersService, [{
    type: Injectable
  }], () => [{
    type: Renderer2
  }], null);
})();
var _ClassToggleService = class _ClassToggleService {
  constructor(document2, rendererFactory) {
    this.document = document2;
    this.rendererFactory = rendererFactory;
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  toggle(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.contains(className) ? this.renderer.removeClass(element, className) : this.renderer.addClass(element, className);
    }
  }
};
_ClassToggleService.ɵfac = function ClassToggleService_Factory(t) {
  return new (t || _ClassToggleService)(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2));
};
_ClassToggleService.ɵprov = ɵɵdefineInjectable({
  token: _ClassToggleService,
  factory: _ClassToggleService.ɵfac,
  providedIn: "root"
});
var ClassToggleService = _ClassToggleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassToggleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: RendererFactory2
  }], null);
})();
var _CarouselService = class _CarouselService {
  constructor() {
    this.carouselIndex = new BehaviorSubject({});
    this.carouselIndex$ = this.carouselIndex.asObservable();
  }
  setIndex(index) {
    this.carouselIndex.next(index);
  }
};
_CarouselService.ɵfac = function CarouselService_Factory(t) {
  return new (t || _CarouselService)();
};
_CarouselService.ɵprov = ɵɵdefineInjectable({
  token: _CarouselService,
  factory: _CarouselService.ɵfac
});
var CarouselService = _CarouselService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], () => [], null);
})();
var _CarouselState = class _CarouselState {
  constructor(carouselService) {
    this.carouselService = carouselService;
    this._state = {
      activeItemIndex: -1,
      animate: true,
      items: [],
      direction: "next",
      transition: "slide"
    };
  }
  get state() {
    return this._state;
  }
  set state(state2) {
    const prevState = __spreadValues({}, this._state);
    const nextState = __spreadValues(__spreadValues({}, this._state), state2);
    this._state = nextState;
    if (prevState.activeItemIndex !== nextState.activeItemIndex) {
      const activeItemIndex = this.state.activeItemIndex || 0;
      const itemInterval = this.state.items && this.state.items[activeItemIndex]?.interval || -1;
      this.carouselService.setIndex({
        active: nextState.activeItemIndex,
        interval: itemInterval,
        lastItemIndex: (nextState.items?.length ?? 0) - 1
      });
    }
  }
  setItems(newItems) {
    if (newItems.length) {
      const itemsArray = newItems.toArray();
      itemsArray.forEach((item, i) => {
        item.index = i;
      });
      this.state = {
        items: itemsArray
      };
    } else {
      this.reset();
    }
  }
  setNextIndex(nextIndex) {
    this.carouselService.setIndex(nextIndex);
  }
  direction(direction = "next") {
    this.state = {
      direction
    };
    const {
      activeItemIndex = -1,
      items
    } = this.state;
    const itemsCount = items?.length ?? 0;
    if (itemsCount > 0) {
      return direction === "next" ? activeItemIndex === itemsCount - 1 ? 0 : activeItemIndex + 1 : activeItemIndex === 0 ? itemsCount - 1 : activeItemIndex - 1;
    } else {
      return 0;
    }
  }
  reset() {
    this.state = {
      activeItemIndex: -1,
      animate: true,
      items: [],
      direction: "next",
      transition: "slide"
    };
  }
};
_CarouselState.ɵfac = function CarouselState_Factory(t) {
  return new (t || _CarouselState)(ɵɵinject(CarouselService));
};
_CarouselState.ɵprov = ɵɵdefineInjectable({
  token: _CarouselState,
  factory: _CarouselState.ɵfac
});
var CarouselState = _CarouselState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselState, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var _CarouselConfig = class _CarouselConfig {
  constructor() {
    this.activeIndex = 0;
    this.animate = true;
    this.dark = false;
    this.direction = "next";
    this.interval = 3e3;
  }
};
_CarouselConfig.ɵfac = function CarouselConfig_Factory(t) {
  return new (t || _CarouselConfig)();
};
_CarouselConfig.ɵprov = ɵɵdefineInjectable({
  token: _CarouselConfig,
  factory: _CarouselConfig.ɵfac
});
var CarouselConfig = _CarouselConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselConfig, [{
    type: Injectable
  }], null, null);
})();
var _destroyRef;
var _CarouselComponent = class _CarouselComponent {
  constructor(config, hostElement, carouselService, carouselState, intersectionService, listenersService) {
    __privateAdd(this, _destroyRef, void 0);
    this.config = config;
    this.hostElement = hostElement;
    this.carouselService = carouselService;
    this.carouselState = carouselState;
    this.intersectionService = intersectionService;
    this.listenersService = listenersService;
    this.activeIndex = 0;
    this.animate = true;
    this.direction = "next";
    this.interval = 0;
    this.pause = "hover";
    this.touch = true;
    this.transition = "slide";
    this.wrap = true;
    this.itemChange = new EventEmitter();
    this.activeItemInterval = 0;
    __privateSet(this, _destroyRef, inject(DestroyRef));
    this._visible = true;
    Object.assign(this, config);
  }
  get hostClasses() {
    return {
      carousel: true,
      slide: true,
      "carousel-dark": !!this.dark,
      "carousel-fade": this.transition === "crossfade"
    };
  }
  ngOnInit() {
    this.carouselStateSubscribe();
  }
  ngOnDestroy() {
    this.resetTimer();
    this.clearListeners();
    this.swipeSubscribe(false);
  }
  ngAfterContentInit() {
    this.intersectionServiceSubscribe();
    this.carouselState.state = {
      activeItemIndex: this.activeIndex,
      animate: this.animate
    };
    this.setListeners();
    this.swipeSubscribe();
  }
  setListeners() {
    const config = {
      hostElement: this.hostElement,
      trigger: this.pause || [],
      callbackOff: () => {
        this.setTimer();
      },
      callbackOn: () => {
        this.resetTimer();
      }
    };
    this.listenersService.setListeners(config);
  }
  clearListeners() {
    this.listenersService.clearListeners();
  }
  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  setTimer() {
    const interval = this.activeItemInterval || 0;
    this.resetTimer();
    if (interval > 0) {
      this.timerId = setTimeout(() => {
        const nextIndex = this.carouselState.direction(this.direction);
        this.carouselState.state = {
          activeItemIndex: nextIndex
        };
      }, interval);
    }
  }
  resetTimer() {
    clearTimeout(this.timerId);
    this.timerId = void 0;
  }
  carouselStateSubscribe() {
    this.carouselService.carouselIndex$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe((nextItem) => {
      if ("active" in nextItem) {
        this.itemChange.emit(nextItem.active);
      }
      this.activeItemInterval = typeof nextItem.interval === "number" && nextItem.interval > -1 ? nextItem.interval : this.interval;
      const isLastItem = nextItem.active === nextItem.lastItemIndex && this.direction === "next" || nextItem.active === 0 && this.direction === "prev";
      !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
    });
  }
  intersectionServiceSubscribe() {
    this.intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.hostElement), finalize(() => {
      this.intersectionService.unobserve(this.hostElement);
    }), takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe((next) => {
      this.visible = next.isIntersecting;
      next.isIntersecting ? this.setTimer() : this.resetTimer();
    });
    this.intersectionService.createIntersectionObserver(this.hostElement);
  }
  swipeSubscribe(subscribe = true) {
    if (this.touch && subscribe) {
      const carouselElement = this.hostElement.nativeElement;
      const touchStart$ = fromEvent(carouselElement, "touchstart");
      const touchEnd$ = fromEvent(carouselElement, "touchend");
      const touchMove$ = fromEvent(carouselElement, "touchmove");
      this.swipeSubscription = touchStart$.pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))), takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe(([touchstart, [touchend, touchmove]]) => {
        touchstart.stopPropagation();
        touchmove.stopPropagation();
        const distanceX = touchstart.touches[0].clientX - touchmove.touches[0].clientX;
        if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
          const nextIndex = this.carouselState.direction(distanceX > 0 ? "next" : "prev");
          this.carouselState.state = {
            activeItemIndex: nextIndex
          };
        }
      });
    } else {
      this.swipeSubscription?.unsubscribe();
    }
  }
};
_destroyRef = new WeakMap();
_CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || _CarouselComponent)(ɵɵdirectiveInject(CarouselConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(CarouselState), ɵɵdirectiveInject(IntersectionService), ɵɵdirectiveInject(ListenersService));
};
_CarouselComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselComponent,
  selectors: [["c-carousel"]],
  hostVars: 2,
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    activeIndex: "activeIndex",
    animate: "animate",
    dark: "dark",
    direction: "direction",
    interval: "interval",
    pause: "pause",
    touch: "touch",
    transition: "transition",
    wrap: "wrap"
  },
  outputs: {
    itemChange: "itemChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([CarouselService, CarouselState, CarouselConfig, ListenersService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CarouselComponent = _CarouselComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel",
      template: "<ng-content></ng-content>",
      providers: [CarouselService, CarouselState, CarouselConfig, ListenersService],
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: CarouselConfig,
    decorators: [{
      type: Inject,
      args: [CarouselConfig]
    }]
  }, {
    type: ElementRef
  }, {
    type: CarouselService
  }, {
    type: CarouselState
  }, {
    type: IntersectionService
  }, {
    type: ListenersService
  }], {
    activeIndex: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    dark: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    pause: [{
      type: Input
    }],
    touch: [{
      type: Input
    }],
    transition: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    itemChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CarouselCaptionComponent = class _CarouselCaptionComponent {
  constructor() {
    this.carouselCaptionClass = true;
  }
};
_CarouselCaptionComponent.ɵfac = function CarouselCaptionComponent_Factory(t) {
  return new (t || _CarouselCaptionComponent)();
};
_CarouselCaptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselCaptionComponent,
  selectors: [["c-carousel-caption"]],
  hostVars: 2,
  hostBindings: function CarouselCaptionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("carousel-caption", ctx.carouselCaptionClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CarouselCaptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CarouselCaptionComponent = _CarouselCaptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselCaptionComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-caption",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [], {
    carouselCaptionClass: [{
      type: HostBinding,
      args: ["class.carousel-caption"]
    }]
  });
})();
var _CarouselControlComponent = class _CarouselControlComponent {
  constructor(changeDetectorRef, carouselState) {
    this.changeDetectorRef = changeDetectorRef;
    this.carouselState = carouselState;
    this.direction = "next";
    this.hasContent = true;
  }
  /**
   * Carousel control caption. [docs]
   * @type string
   */
  set caption(value) {
    this._caption = value;
  }
  get caption() {
    return !!this._caption ? this._caption : this.direction === "prev" ? "Previous" : "Next";
  }
  get hostRole() {
    return "button";
  }
  get hostClasses() {
    return `carousel-control-${this.direction}`;
  }
  get carouselControlIconClass() {
    return `carousel-control-${this.direction}-icon`;
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      this.play();
    }
    if ($event.key === "ArrowLeft") {
      this.play("prev");
    }
    if ($event.key === "ArrowRight") {
      this.play("next");
    }
  }
  onClick($event) {
    this.play();
  }
  ngAfterViewInit() {
    this.hasContent = this.content?.nativeElement.childNodes.length ?? false;
    this.changeDetectorRef.detectChanges();
  }
  play(direction = this.direction) {
    const nextIndex = this.carouselState.direction(direction);
    this.carouselState.state = {
      activeItemIndex: nextIndex
    };
  }
};
_CarouselControlComponent.ɵfac = function CarouselControlComponent_Factory(t) {
  return new (t || _CarouselControlComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CarouselState));
};
_CarouselControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselControlComponent,
  selectors: [["c-carousel-control"]],
  viewQuery: function CarouselControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function CarouselControlComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keyup", function CarouselControlComponent_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      })("click", function CarouselControlComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.hostRole);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    caption: "caption",
    direction: "direction"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [["content", ""], [1, "visually-hidden"]],
  template: function CarouselControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CarouselControlComponent_Conditional_0_Template, 3, 0, "div")(1, CarouselControlComponent_Conditional_1_Template, 3, 5);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.hasContent ? 0 : 1);
    }
  },
  encapsulation: 2
});
var CarouselControlComponent = _CarouselControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselControlComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-control",
      standalone: true,
      template: '@if (hasContent) {\n  <div #content>\n    <ng-content />\n  </div>\n} @else {\n  <span [class]="carouselControlIconClass" [attr.aria-label]="direction" [attr.aria-hidden]="true"></span>\n  <span class="visually-hidden">{{ caption }}</span>\n}\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: CarouselState
  }], {
    caption: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _CarouselIndicatorsComponent = class _CarouselIndicatorsComponent {
  constructor(carouselService, carouselState) {
    this.carouselService = carouselService;
    this.carouselState = carouselState;
    this.items = [];
    this.active = 0;
  }
  ngOnInit() {
    this.carouselStateSubscribe();
  }
  ngOnDestroy() {
    this.carouselStateSubscribe(false);
  }
  onClick(index) {
    if (index !== this.active) {
      const direction = index < this.active ? "prev" : "next";
      this.carouselState.state = {
        direction,
        activeItemIndex: index
      };
    }
  }
  carouselStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        this.items = this.carouselState?.state?.items?.map((item) => item.index) ?? [];
        if ("active" in nextIndex) {
          this.active = nextIndex.active ?? 0;
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
};
_CarouselIndicatorsComponent.ɵfac = function CarouselIndicatorsComponent_Factory(t) {
  return new (t || _CarouselIndicatorsComponent)(ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(CarouselState));
};
_CarouselIndicatorsComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselIndicatorsComponent,
  selectors: [["c-carousel-indicators"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [[1, "carousel-indicators"], ["type", "button", 3, "click"], ["type", "button", 3, "class"]],
  template: function CarouselIndicatorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵrepeaterCreate(1, CarouselIndicatorsComponent_For_2_Template, 1, 6, "button", 2, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ctx.items);
    }
  },
  encapsulation: 2
});
var CarouselIndicatorsComponent = _CarouselIndicatorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselIndicatorsComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-indicators",
      standalone: true,
      template: '<div class="carousel-indicators">\n  @for (item of items; track item; let i = $index) {\n    <button\n      [attr.data-coreui-target]="i"\n      type="button"\n      (click)="onClick(i)"\n      [class]="{ active: active === i }"\n      [attr.aria-current]="active === i"\n    ></button>\n  }\n</div>\n'
    }]
  }], () => [{
    type: CarouselService
  }, {
    type: CarouselState
  }], null);
})();
function toLeft(fromState, toState) {
  return toState.left === true;
}
function toRight(fromState, toState) {
  return toState.left === false;
}
var slideAnimation = trigger("slideAnimation", [state("*", style({
  transform: "translateX(0)",
  display: "block",
  opacity: 1
})), transition(toLeft, group([query(":leave", [animate("0.6s ease-in-out", style({
  transform: "translateX(-100%)"
}))], {
  optional: true
}), query(":enter", [style({
  transform: "translateX(100%)"
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
})])), transition(toRight, group([query(":enter", [style({
  transform: "translateX(-100%)"
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
}), query(":leave", [animate("0.6s ease-in-out", style({
  transform: "translateX(100%)"
}))], {
  optional: true
})]))]);
var fadeAnimation = trigger("fadeAnimation", [state("*", style({
  zIndex: 1,
  opacity: 1
})), transition(toLeft, group([query(":leave", [animate("0.6s ease-in-out", style({
  zIndex: 0,
  opacity: 0
}))], {
  optional: true
}), query(":enter", [style({
  zIndex: 1,
  opacity: 1
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
})])), transition(toRight, group([query(":enter", [style({
  zIndex: 1,
  opacity: 1
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
}), query(":leave", [animate("0.6s ease-in-out", style({
  zIndex: 0,
  opacity: 0
}))], {
  optional: true
})]))]);
var _CarouselItemComponent = class _CarouselItemComponent {
  /**
   * @ignore
   */
  set active(value) {
    this._active = coerceBooleanProperty(value);
    this.changeDetectorRef.markForCheck();
  }
  get active() {
    return this._active;
  }
  get hostClasses() {
    return {
      "carousel-item": true,
      active: this.active
    };
  }
  constructor(carouselService, changeDetectorRef) {
    this.carouselService = carouselService;
    this.changeDetectorRef = changeDetectorRef;
    this._active = false;
    this.interval = -1;
  }
  ngOnDestroy() {
    this.carouselStateSubscribe(false);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.carouselStateSubscribe();
    });
  }
  carouselStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        if ("active" in nextIndex) {
          this.active = nextIndex.active === this.index;
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
};
_CarouselItemComponent.ɵfac = function CarouselItemComponent_Factory(t) {
  return new (t || _CarouselItemComponent)(ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_CarouselItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselItemComponent,
  selectors: [["c-carousel-item"]],
  hostVars: 2,
  hostBindings: function CarouselItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    interval: "interval"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 1,
  template: function CarouselItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CarouselItemComponent_Conditional_0_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.active ? 0 : -1);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CarouselItemComponent = _CarouselItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselItemComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-item",
      standalone: true,
      template: "@if (active) {\n  <ng-content />\n}\n\n",
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: CarouselService
  }, {
    type: ChangeDetectorRef
  }], {
    active: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CarouselInnerComponent = class _CarouselInnerComponent {
  constructor(carouselState) {
    this.carouselState = carouselState;
    this.carouselInnerClass = true;
    this.slide = {
      left: true
    };
    this.transition = "slide";
  }
  ngAfterContentInit() {
    this.setItems();
  }
  ngAfterContentChecked() {
    this.setItems();
    const state2 = this.carouselState?.state;
    const nextIndex = state2?.activeItemIndex;
    const nextDirection = state2?.direction;
    if (this.activeIndex !== nextIndex) {
      this.animate = state2?.animate;
      this.slide = {
        left: nextDirection === "next"
      };
      this.activeIndex = state2?.activeItemIndex;
      this.transition = state2?.transition ?? "slide";
    }
  }
  setItems() {
    if (this.prevContentItems !== this.contentItems) {
      this.prevContentItems = this.contentItems;
      this.carouselState.setItems(this.contentItems);
    }
  }
};
_CarouselInnerComponent.ɵfac = function CarouselInnerComponent_Factory(t) {
  return new (t || _CarouselInnerComponent)(ɵɵdirectiveInject(CarouselState));
};
_CarouselInnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselInnerComponent,
  selectors: [["c-carousel-inner"]],
  contentQueries: function CarouselInnerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CarouselItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentItems = _t);
    }
  },
  hostVars: 2,
  hostBindings: function CarouselInnerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("carousel-inner", ctx.carouselInnerClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 2,
  template: function CarouselInnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@slideAnimation", ctx.slide)("@.disabled", !ctx.animate);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"],
  data: {
    animation: [slideAnimation, fadeAnimation]
  }
});
var CarouselInnerComponent = _CarouselInnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselInnerComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-inner",
      animations: [slideAnimation, fadeAnimation],
      standalone: true,
      template: '<div [@slideAnimation]="slide" [@.disabled]="!animate">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]="slide" [@.disabled]="!animate" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n',
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: CarouselState
  }], {
    carouselInnerClass: [{
      type: HostBinding,
      args: ["class.carousel-inner"]
    }],
    contentItems: [{
      type: ContentChildren,
      args: [CarouselItemComponent]
    }]
  });
})();
var _CarouselModule = class _CarouselModule {
  static forRoot() {
    return {
      ngModule: _CarouselModule,
      providers: []
    };
  }
};
_CarouselModule.ɵfac = function CarouselModule_Factory(t) {
  return new (t || _CarouselModule)();
};
_CarouselModule.ɵmod = ɵɵdefineNgModule({
  type: _CarouselModule,
  imports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent],
  exports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
});
_CarouselModule.ɵinj = ɵɵdefineInjector({
  providers: [CarouselService, CarouselState, CarouselConfig]
});
var CarouselModule = _CarouselModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent],
      providers: [CarouselService, CarouselState, CarouselConfig],
      exports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
    }]
  }], null, null);
})();
var _DropdownDividerDirective = class _DropdownDividerDirective {
  get hostClasses() {
    return {
      "dropdown-divider": true
    };
  }
};
_DropdownDividerDirective.ɵfac = function DropdownDividerDirective_Factory(t) {
  return new (t || _DropdownDividerDirective)();
};
_DropdownDividerDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownDividerDirective,
  selectors: [["", "cDropdownDivider", ""]],
  hostVars: 2,
  hostBindings: function DropdownDividerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var DropdownDividerDirective = _DropdownDividerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownDivider]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _DropdownHeaderDirective = class _DropdownHeaderDirective {
  get hostClasses() {
    return {
      "dropdown-header": true
    };
  }
};
_DropdownHeaderDirective.ɵfac = function DropdownHeaderDirective_Factory(t) {
  return new (t || _DropdownHeaderDirective)();
};
_DropdownHeaderDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownHeaderDirective,
  selectors: [["", "cDropdownHeader", ""]],
  hostVars: 2,
  hostBindings: function DropdownHeaderDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var DropdownHeaderDirective = _DropdownHeaderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownHeader]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _DropdownService = class _DropdownService {
  constructor() {
    this.dropdownState = new BehaviorSubject({});
    this.dropdownState$ = this.dropdownState.asObservable();
  }
  toggle(state2) {
    this.dropdownState.next(state2);
  }
};
_DropdownService.ɵfac = function DropdownService_Factory(t) {
  return new (t || _DropdownService)();
};
_DropdownService.ɵprov = ɵɵdefineInjectable({
  token: _DropdownService,
  factory: _DropdownService.ɵfac
});
var DropdownService = _DropdownService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownService, [{
    type: Injectable
  }], () => [], null);
})();
var _DropdownMenuDirective = class _DropdownMenuDirective {
  constructor(elementRef, dropdownService) {
    this.elementRef = elementRef;
    this.dropdownService = dropdownService;
    this.visible = false;
    this.dark = false;
  }
  get hostClasses() {
    return {
      "dropdown-menu": true,
      "dropdown-menu-dark": this.dark,
      [`dropdown-menu-${this.alignment}`]: !!this.alignment,
      show: this.visible
    };
  }
  get hostStyles() {
    return {
      visibility: this.visible ? null : "",
      display: this.visible ? null : ""
    };
  }
  ngOnInit() {
    this.dropdownStateSubscribe();
  }
  ngOnDestroy() {
    this.dropdownStateSubscribe(false);
  }
  dropdownStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.dropdownStateSubscription = this.dropdownService.dropdownState$.subscribe((state2) => {
        if ("visible" in state2) {
          this.visible = state2.visible === "toggle" ? !this.visible : state2.visible;
        }
      });
    } else {
      this.dropdownStateSubscription?.unsubscribe();
    }
  }
};
_DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) {
  return new (t || _DropdownMenuDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DropdownService));
};
_DropdownMenuDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownMenuDirective,
  selectors: [["", "cDropdownMenu", ""]],
  hostVars: 4,
  hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.hostStyles);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    visible: "visible",
    dark: [InputFlags.HasDecoratorInputTransform, "dark", "dark", booleanAttribute]
  },
  exportAs: ["cDropdownMenu"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var DropdownMenuDirective = _DropdownMenuDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownMenu]",
      exportAs: "cDropdownMenu",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DropdownService
  }], {
    alignment: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    dark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyles: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var DropdownToken = class {
};
var _DropdownToggleDirective = class _DropdownToggleDirective {
  constructor(elementRef, dropdownService, dropdown) {
    this.elementRef = elementRef;
    this.dropdownService = dropdownService;
    this.dropdown = dropdown;
    this.disabled = false;
    this.caret = true;
    this._split = false;
  }
  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
   * @type boolean
   */
  set split(value) {
    this._split = coerceBooleanProperty(value);
  }
  get split() {
    return this._split;
  }
  get hostClasses() {
    return {
      "dropdown-toggle": this.caret,
      "dropdown-toggle-split": this.split,
      disabled: this.disabled
    };
  }
  onClick($event) {
    $event.preventDefault();
    !this.disabled && this.dropdownService.toggle({
      visible: "toggle",
      dropdown: this.dropdown
    });
  }
  ngAfterViewInit() {
    if (this.dropdownComponent) {
      this.dropdown = this.dropdownComponent;
      this.dropdownService = this.dropdownComponent?.dropdownService;
    }
  }
};
_DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) {
  return new (t || _DropdownToggleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DropdownService), ɵɵdirectiveInject(DropdownToken, 8));
};
_DropdownToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownToggleDirective,
  selectors: [["", "cDropdownToggle", ""]],
  hostVars: 2,
  hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    dropdownComponent: "dropdownComponent",
    disabled: "disabled",
    caret: "caret",
    split: "split"
  },
  exportAs: ["cDropdownToggle"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: DropdownToken,
    useExisting: forwardRef(() => DropdownComponent)
  }])]
});
var DropdownToggleDirective = _DropdownToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownToggle]",
      providers: [{
        provide: DropdownToken,
        useExisting: forwardRef(() => DropdownComponent)
      }],
      exportAs: "cDropdownToggle",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DropdownService
  }, {
    type: DropdownToken,
    decorators: [{
      type: Optional
    }]
  }], {
    dropdownComponent: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    caret: [{
      type: Input
    }],
    split: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _DropdownComponent = class _DropdownComponent {
  constructor(document2, elementRef, renderer, ngZone, changeDetectorRef, dropdownService) {
    this.document = document2;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.dropdownService = dropdownService;
    this.autoClose = true;
    this._dark = false;
    this.placement = "bottom-start";
    this._popper = true;
    this._popperOptions = {
      placement: this.placement,
      modifiers: [],
      strategy: "absolute"
    };
    this.variant = "dropdown";
    this._visible = false;
    this.visibleChange = new EventEmitter();
    this.dropdownContext = {
      $implicit: this.visible
    };
    this.activeTrap = false;
    this.listeners = [];
    this.dropdownStateSubscribe();
  }
  /**
   * Sets a darker color scheme to match a dark navbar.
   * @type boolean
   * @default false
   */
  set dark(value) {
    this._dark = coerceBooleanProperty(value);
  }
  get dark() {
    return this._dark;
  }
  /**
   * If you want to disable dynamic positioning set this property to `false`.
   * @type boolean
   * @default true
   */
  set popper(value) {
    this._popper = coerceBooleanProperty(value);
  }
  get popper() {
    return this._popper;
  }
  /**
   * Optional popper Options object, placement prop takes precedence over
   * @type Partial<Options>
   */
  set popperOptions(value) {
    this._popperOptions = __spreadValues(__spreadValues({}, this._popperOptions), value);
  }
  get popperOptions() {
    let placement = this.placement;
    switch (this.direction) {
      case "dropup": {
        placement = "top-start";
        break;
      }
      case "dropend": {
        placement = "right-start";
        break;
      }
      case "dropstart": {
        placement = "left-start";
        break;
      }
      case "center": {
        placement = "bottom";
        break;
      }
      case "dropup-center": {
        placement = "top";
        break;
      }
    }
    if (this.alignment === "end") {
      placement = "bottom-end";
    }
    this._popperOptions = __spreadProps(__spreadValues({}, this._popperOptions), {
      placement
    });
    return this._popperOptions;
  }
  /**
   * Toggle the visibility of dropdown menu component.
   * @type boolean
   * @default false
   */
  set visible(value) {
    const _value = coerceBooleanProperty(value);
    if (_value !== this._visible) {
      this.activeTrap = _value;
      this._visible = _value;
      _value ? this.createPopperInstance() : this.destroyPopperInstance();
      this.visibleChange.emit(_value);
    }
  }
  get visible() {
    return this._visible;
  }
  get hostClasses() {
    return {
      dropdown: (this.variant === "dropdown" || this.variant === "nav-item") && !this.direction,
      [`${this.direction}`]: !!this.direction,
      [`${this.variant}`]: !!this.variant,
      "dropup": this.direction === "dropup" || this.direction === "dropup-center",
      show: this.visible
    };
  }
  // todo: find better solution
  get hostStyle() {
    return this.variant === "input-group" ? {
      display: "contents"
    } : {};
  }
  onHostClick($event) {
    this.clickedTarget = $event.target;
  }
  dropdownStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.dropdownStateSubscription = this.dropdownService.dropdownState$.pipe(filter((state2) => {
        return this === state2.dropdown;
      })).subscribe((state2) => {
        if ("visible" in state2) {
          state2?.visible === "toggle" ? this.toggleDropdown() : this.visible = state2.visible;
        }
      });
    } else {
      this.dropdownStateSubscription?.unsubscribe();
    }
  }
  toggleDropdown() {
    this.visible = !this.visible;
  }
  onClick(event) {
    if (!this._toggler?.elementRef.nativeElement.contains(event.target?.closest("[cDropdownToggle]"))) {
      this.toggleDropdown();
    }
  }
  ngAfterContentInit() {
    if (this.variant === "nav-item") {
      this.renderer.addClass(this._toggler.elementRef.nativeElement, "nav-link");
    }
  }
  ngOnInit() {
    this.setVisibleState(this.visible);
  }
  ngOnChanges(changes) {
    if (changes["visible"] && !changes["visible"].firstChange) {
      this.setVisibleState(changes["visible"].currentValue);
    }
  }
  ngOnDestroy() {
    this.clearListeners();
    this.dropdownStateSubscribe(false);
    this.destroyPopperInstance();
  }
  setVisibleState(value) {
    this.dropdownService.toggle({
      visible: value,
      dropdown: this
    });
  }
  // todo: turn off popper in navbar-nav
  createPopperInstance() {
    if (this._toggler && this._menu) {
      this.ngZone.runOutsideAngular(() => {
        this._menu.elementRef.nativeElement.style.visibility = "hidden";
        this._menu.elementRef.nativeElement.style.display = "block";
        if (this.popper) {
          this.popperInstance = createPopper3(this._toggler.elementRef.nativeElement, this._menu.elementRef.nativeElement, __spreadValues({}, this.popperOptions));
        }
        this.ngZone.run(() => {
          this.setListeners();
          this.changeDetectorRef.markForCheck();
          this.changeDetectorRef.detectChanges();
        });
      });
    }
  }
  destroyPopperInstance() {
    this.clearListeners();
    this.popperInstance?.destroy();
    this.popperInstance = void 0;
    this.changeDetectorRef.markForCheck();
  }
  setListeners() {
    this.listeners.push(this.renderer.listen(this.document, "click", (event) => {
      const target = event.target;
      if (this._menuElementRef?.nativeElement.contains(event.target)) {
        this.clickedTarget = target;
      }
      if (this._toggler?.elementRef.nativeElement.contains(event.target)) {
        return;
      }
      if (this.autoClose === true) {
        this.setVisibleState(false);
        return;
      }
      if (this.clickedTarget === target && this.autoClose === "inside") {
        this.setVisibleState(false);
        return;
      }
      if (this.clickedTarget !== target && this.autoClose === "outside") {
        this.setVisibleState(false);
        return;
      }
    }));
    this.listeners.push(this.renderer.listen(this.elementRef.nativeElement, "keyup", (event) => {
      if (event.key === "Escape" && this.autoClose !== false) {
        event.stopPropagation();
        this.setVisibleState(false);
        return;
      }
    }));
    this.listeners.push(this.renderer.listen(this.document, "keyup", (event) => {
      if (event.key === "Tab" && this.autoClose !== false && !this.elementRef.nativeElement.contains(event.target)) {
        this.setVisibleState(false);
        return;
      }
    }));
  }
  clearListeners() {
    this.listeners.forEach((unListen) => {
      unListen();
    });
    this.listeners.fill(void 0);
    this.listeners = [];
  }
};
_DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
  return new (t || _DropdownComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DropdownService));
};
_DropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: _DropdownComponent,
  selectors: [["c-dropdown"]],
  contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DropdownToggleDirective, 5);
      ɵɵcontentQuery(dirIndex, DropdownMenuDirective, 5);
      ɵɵcontentQuery(dirIndex, DropdownMenuDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._toggler = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menuElementRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownComponent_click_HostBindingHandler($event) {
        return ctx.onHostClick($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleMap(ctx.hostStyle);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    autoClose: "autoClose",
    dark: "dark",
    direction: "direction",
    placement: "placement",
    popper: "popper",
    popperOptions: "popperOptions",
    variant: "variant",
    visible: "visible"
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cDropdown"],
  standalone: true,
  features: [ɵɵProvidersFeature([DropdownService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function DropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: [".dropdown[_nghost-%COMP%]:not(.btn-group), .dropdown   [_nghost-%COMP%]:not(.btn-group), .dropup[_nghost-%COMP%]:not(.btn-group), .dropup   [_nghost-%COMP%]:not(.btn-group){display:block;min-width:fit-content}.dropstart[_nghost-%COMP%]:not(.btn-group), .dropstart   [_nghost-%COMP%]:not(.btn-group), .dropend[_nghost-%COMP%]:not(.btn-group), .dropend   [_nghost-%COMP%]:not(.btn-group){display:inline-flex}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:first-child  :first-child, html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:first-child  :first-child, .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:first-child  :first-child{border-top-right-radius:0;border-bottom-right-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:last-child  :first-child, html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:last-child  :first-child, .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:last-child  :first-child{border-top-left-radius:0;border-bottom-left-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]{direction:rtl}[dir=rtl]   .input-group   [_nghost-%COMP%]:first-child  :first-child{border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:last-child  :first-child{border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}"]
});
var DropdownComponent = _DropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{
      selector: "c-dropdown",
      template: "<ng-content></ng-content>",
      exportAs: "cDropdown",
      providers: [DropdownService],
      standalone: true,
      styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: DropdownService
  }], {
    alignment: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    dark: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popper: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    _toggler: [{
      type: ContentChild,
      args: [DropdownToggleDirective]
    }],
    _menu: [{
      type: ContentChild,
      args: [DropdownMenuDirective]
    }],
    _menuElementRef: [{
      type: ContentChild,
      args: [DropdownMenuDirective, {
        read: ElementRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _DropdownItemDirective = class _DropdownItemDirective {
  constructor(dropdownService, dropdown) {
    this.dropdownService = dropdownService;
    this.dropdown = dropdown;
    this.autoClose = true;
    this._tabIndex = null;
  }
  get ariaCurrent() {
    return this.active ? "true" : null;
  }
  get hostClasses() {
    return {
      "dropdown-item": true,
      active: this.active,
      disabled: this.disabled
    };
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  get tabIndex() {
    return this.disabled ? "-1" : this._tabIndex;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  onClick($event) {
    if (this.autoClose) {
      this.dropdownService.toggle({
        visible: "toggle",
        dropdown: this.dropdown
      });
    }
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      if (this.autoClose) {
        this.dropdownService.toggle({
          visible: false,
          dropdown: this.dropdown
        });
      }
    }
  }
};
_DropdownItemDirective.ɵfac = function DropdownItemDirective_Factory(t) {
  return new (t || _DropdownItemDirective)(ɵɵdirectiveInject(DropdownService), ɵɵdirectiveInject(DropdownComponent, 8));
};
_DropdownItemDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownItemDirective,
  selectors: [["", "cDropdownItem", ""]],
  hostVars: 5,
  hostBindings: function DropdownItemDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownItemDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keyup", function DropdownItemDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent)("tabindex", ctx.tabIndex)("aria-disabled", ctx.isDisabled);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    autoClose: "autoClose",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  exportAs: ["cDropdownItem"],
  standalone: true
});
var DropdownItemDirective = _DropdownItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownItem]",
      exportAs: "cDropdownItem",
      standalone: true
    }]
  }], () => [{
    type: DropdownService
  }, {
    type: DropdownComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    active: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }, {
      type: Input
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var _DropdownItemPlainDirective = class _DropdownItemPlainDirective {
  get hostClasses() {
    return {
      "dropdown-item-text": true
    };
  }
};
_DropdownItemPlainDirective.ɵfac = function DropdownItemPlainDirective_Factory(t) {
  return new (t || _DropdownItemPlainDirective)();
};
_DropdownItemPlainDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownItemPlainDirective,
  selectors: [["", "cDropdownItemPlain", ""]],
  hostVars: 2,
  hostBindings: function DropdownItemPlainDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var DropdownItemPlainDirective = _DropdownItemPlainDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemPlainDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownItemPlain]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _DropdownCloseDirective = class _DropdownCloseDirective {
  constructor(dropdownService, dropdown) {
    this.dropdownService = dropdownService;
    this.dropdown = dropdown;
    this._tabIndex = null;
  }
  ngAfterViewInit() {
    if (this.dropdownComponent) {
      this.dropdown = this.dropdownComponent;
      this.dropdownService = this.dropdownComponent?.dropdownService;
    }
  }
  get hostClasses() {
    return {
      disabled: this.disabled
    };
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  get tabIndex() {
    return this.disabled ? "-1" : this._tabIndex;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  onClick($event) {
    !this.disabled && this.dropdownService.toggle({
      visible: false,
      dropdown: this.dropdown
    });
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      !this.disabled && this.dropdownService.toggle({
        visible: false,
        dropdown: this.dropdown
      });
    }
  }
};
_DropdownCloseDirective.ɵfac = function DropdownCloseDirective_Factory(t) {
  return new (t || _DropdownCloseDirective)(ɵɵdirectiveInject(DropdownService), ɵɵdirectiveInject(DropdownComponent, 8));
};
_DropdownCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownCloseDirective,
  selectors: [["", "cDropdownClose", ""]],
  hostVars: 4,
  hostBindings: function DropdownCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownCloseDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keyup", function DropdownCloseDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.isDisabled);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    disabled: "disabled",
    dropdownComponent: "dropdownComponent",
    tabIndex: "tabIndex"
  },
  exportAs: ["cDropdownClose"],
  standalone: true
});
var DropdownCloseDirective = _DropdownCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownClose]",
      exportAs: "cDropdownClose",
      standalone: true
    }]
  }], () => [{
    type: DropdownService
  }, {
    type: DropdownComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    disabled: [{
      type: Input
    }],
    dropdownComponent: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }, {
      type: Input
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var _DropdownModule = class _DropdownModule {
};
_DropdownModule.ɵfac = function DropdownModule_Factory(t) {
  return new (t || _DropdownModule)();
};
_DropdownModule.ɵmod = ɵɵdefineNgModule({
  type: _DropdownModule,
  imports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
  exports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective]
});
_DropdownModule.ɵinj = ɵɵdefineInjector({
  providers: [DropdownService]
});
var DropdownModule = _DropdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
      exports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
      providers: [DropdownService]
    }]
  }], null, null);
})();
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.role = "footer";
  }
  get getClasses() {
    return {
      footer: true,
      [`footer-${this.position}`]: !!this.position
    };
  }
};
_FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _FooterComponent,
  selectors: [["c-footer"], ["", "cFooter", ""]],
  hostVars: 3,
  hostBindings: function FooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.getClasses);
    }
  },
  inputs: {
    position: "position",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "c-footer, [cFooter]",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    position: [{
      type: Input
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    getClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FooterModule = class _FooterModule {
};
_FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || _FooterModule)();
};
_FooterModule.ɵmod = ɵɵdefineNgModule({
  type: _FooterModule,
  imports: [FooterComponent],
  exports: [FooterComponent]
});
_FooterModule.ɵinj = ɵɵdefineInjector({});
var FooterModule = _FooterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterModule, [{
    type: NgModule,
    args: [{
      imports: [FooterComponent],
      exports: [FooterComponent]
    }]
  }], null, null);
})();
var _FormDirective = class _FormDirective {
  constructor() {
    this.validated = false;
  }
  get hostClasses() {
    return {
      "was-validated": this.validated
    };
  }
};
_FormDirective.ɵfac = function FormDirective_Factory(t) {
  return new (t || _FormDirective)();
};
_FormDirective.ɵdir = ɵɵdefineDirective({
  type: _FormDirective,
  selectors: [["form", "cForm", ""]],
  hostVars: 2,
  hostBindings: function FormDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    validated: [InputFlags.HasDecoratorInputTransform, "validated", "validated", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormDirective = _FormDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDirective, [{
    type: Directive,
    args: [{
      selector: "form[cForm]",
      standalone: true
    }]
  }], null, {
    validated: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormFeedbackComponent = class _FormFeedbackComponent {
  constructor() {
    this.tooltip = false;
  }
  get hostClasses() {
    return {
      "valid-feedback": this.valid === true && !this.tooltip,
      "valid-tooltip": this.valid === true && this.tooltip,
      "invalid-feedback": this.valid !== true && !this.tooltip,
      "invalid-tooltip": this.valid !== true && this.tooltip
    };
  }
};
_FormFeedbackComponent.ɵfac = function FormFeedbackComponent_Factory(t) {
  return new (t || _FormFeedbackComponent)();
};
_FormFeedbackComponent.ɵcmp = ɵɵdefineComponent({
  type: _FormFeedbackComponent,
  selectors: [["c-form-feedback"]],
  hostVars: 2,
  hostBindings: function FormFeedbackComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    tooltip: [InputFlags.HasDecoratorInputTransform, "tooltip", "tooltip", booleanAttribute],
    valid: "valid"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function FormFeedbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FormFeedbackComponent = _FormFeedbackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFeedbackComponent, [{
    type: Component,
    args: [{
      selector: "c-form-feedback",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    tooltip: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valid: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _InputGroupComponent = class _InputGroupComponent {
  get hostClasses() {
    return {
      "input-group": true,
      [`input-group-${this.sizing}`]: !!this.sizing
    };
  }
  constructor() {
    this.sizing = "";
  }
};
_InputGroupComponent.ɵfac = function InputGroupComponent_Factory(t) {
  return new (t || _InputGroupComponent)();
};
_InputGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _InputGroupComponent,
  selectors: [["c-input-group"]],
  hostVars: 2,
  hostBindings: function InputGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    sizing: "sizing"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function InputGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var InputGroupComponent = _InputGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-input-group",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [], {
    sizing: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormSelectDirective = class _FormSelectDirective {
  get hostClasses() {
    return {
      "form-select": true,
      [`form-select-${this.sizing}`]: !!this.sizing,
      "is-valid": this.valid === true,
      "is-invalid": this.valid === false
    };
  }
  constructor() {
    this.sizing = "";
  }
};
_FormSelectDirective.ɵfac = function FormSelectDirective_Factory(t) {
  return new (t || _FormSelectDirective)();
};
_FormSelectDirective.ɵdir = ɵɵdefineDirective({
  type: _FormSelectDirective,
  selectors: [["select", "cSelect", ""]],
  hostVars: 2,
  hostBindings: function FormSelectDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    sizing: "sizing",
    valid: "valid"
  },
  standalone: true
});
var FormSelectDirective = _FormSelectDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSelectDirective, [{
    type: Directive,
    args: [{
      selector: "select[cSelect]",
      standalone: true
    }]
  }], () => [], {
    sizing: [{
      type: Input
    }],
    valid: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormLabelDirective = class _FormLabelDirective {
  get hostClasses() {
    return {
      "form-label": true,
      "col-form-label": this.col === "col",
      [`col-form-label-${this.sizing}`]: !!this.sizing && this.col === "col"
    };
  }
  constructor() {
    this.col = "";
    this.sizing = "";
  }
};
_FormLabelDirective.ɵfac = function FormLabelDirective_Factory(t) {
  return new (t || _FormLabelDirective)();
};
_FormLabelDirective.ɵdir = ɵɵdefineDirective({
  type: _FormLabelDirective,
  selectors: [["", "cLabel", ""]],
  hostVars: 2,
  hostBindings: function FormLabelDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    col: [InputFlags.None, "cLabel", "col"],
    sizing: "sizing"
  },
  standalone: true
});
var FormLabelDirective = _FormLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[cLabel]",
      standalone: true
    }]
  }], () => [], {
    col: [{
      type: Input,
      args: ["cLabel"]
    }],
    sizing: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormCheckLabelDirective = class _FormCheckLabelDirective {
  get hostClasses() {
    return {
      "form-check-label": true
    };
  }
};
_FormCheckLabelDirective.ɵfac = function FormCheckLabelDirective_Factory(t) {
  return new (t || _FormCheckLabelDirective)();
};
_FormCheckLabelDirective.ɵdir = ɵɵdefineDirective({
  type: _FormCheckLabelDirective,
  selectors: [["label", "cFormCheckLabel", ""]],
  hostVars: 2,
  hostBindings: function FormCheckLabelDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var FormCheckLabelDirective = _FormCheckLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckLabelDirective, [{
    type: Directive,
    args: [{
      selector: "label[cFormCheckLabel]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _formCheckClass;
var _FormCheckComponent = class _FormCheckComponent {
  constructor() {
    __privateAdd(this, _formCheckClass, void 0);
    this.inline = false;
    this.reverse = false;
    this.sizing = "";
    this.switch = false;
    __privateSet(this, _formCheckClass, true);
  }
  get hostClasses() {
    return {
      "form-check": this.formCheckClass,
      "form-switch": this.switch,
      [`form-switch-${this.sizing}`]: this.switch && !!this.sizing,
      "form-check-inline": this.inline,
      "form-check-reverse": this.reverse
    };
  }
  get formCheckClass() {
    return __privateGet(this, _formCheckClass);
  }
  ngAfterContentInit() {
    __privateSet(this, _formCheckClass, !!this.formCheckLabel);
  }
};
_formCheckClass = new WeakMap();
_FormCheckComponent.ɵfac = function FormCheckComponent_Factory(t) {
  return new (t || _FormCheckComponent)();
};
_FormCheckComponent.ɵcmp = ɵɵdefineComponent({
  type: _FormCheckComponent,
  selectors: [["c-form-check"]],
  contentQueries: function FormCheckComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, FormCheckLabelDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formCheckLabel = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function FormCheckComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    inline: [InputFlags.HasDecoratorInputTransform, "inline", "inline", booleanAttribute],
    reverse: [InputFlags.HasDecoratorInputTransform, "reverse", "reverse", booleanAttribute],
    sizing: "sizing",
    switch: [InputFlags.HasDecoratorInputTransform, "switch", "switch", booleanAttribute]
  },
  exportAs: ["cFormCheck"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function FormCheckComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FormCheckComponent = _FormCheckComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckComponent, [{
    type: Component,
    args: [{
      selector: "c-form-check",
      template: "<ng-content></ng-content>",
      exportAs: "cFormCheck",
      standalone: true
    }]
  }], null, {
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sizing: [{
      type: Input
    }],
    switch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    formCheckLabel: [{
      type: ContentChild,
      args: [FormCheckLabelDirective]
    }]
  });
})();
var _FormCheckInputDirective = class _FormCheckInputDirective {
  /**
   * Set component indeterminate state.
   * @type boolean
   */
  set indeterminate(value) {
    const indeterminate = coerceBooleanProperty(value);
    if (this._indeterminate !== indeterminate) {
      this._indeterminate = indeterminate;
      const htmlInputElement = this.hostElement.nativeElement;
      if (indeterminate) {
        this.renderer.setProperty(htmlInputElement, "checked", false);
      }
      this.renderer.setProperty(htmlInputElement, "indeterminate", indeterminate);
    }
  }
  get indeterminate() {
    return this._indeterminate;
  }
  get hostClasses() {
    return {
      "form-check-input": true,
      "is-valid": this.valid === true,
      "is-invalid": this.valid === false
    };
  }
  set checked(value) {
    const checked = coerceBooleanProperty(value);
    const htmlInputElement = this.hostElement?.nativeElement;
    if (htmlInputElement) {
      this.renderer.setProperty(htmlInputElement, "checked", checked);
    }
  }
  get checked() {
    return this.hostElement?.nativeElement?.checked;
  }
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.type = "checkbox";
    this._indeterminate = false;
  }
};
_FormCheckInputDirective.ɵfac = function FormCheckInputDirective_Factory(t) {
  return new (t || _FormCheckInputDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_FormCheckInputDirective.ɵdir = ɵɵdefineDirective({
  type: _FormCheckInputDirective,
  selectors: [["input", "cFormCheckInput", ""]],
  hostVars: 3,
  hostBindings: function FormCheckInputDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    type: "type",
    indeterminate: "indeterminate",
    valid: "valid",
    checked: "checked"
  },
  standalone: true
});
var FormCheckInputDirective = _FormCheckInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[cFormCheckInput]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    valid: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    checked: [{
      type: Input
    }]
  });
})();
var _FormControlDirective = class _FormControlDirective {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.sizing = "";
    this.type = "text";
    this.plaintext = false;
  }
  get hostClasses() {
    const isRangeType = this.type === "range";
    return {
      "form-control": !isRangeType && !this.plaintext,
      "form-control-plaintext": !isRangeType && this.plaintext,
      "form-control-color": this.type === "color",
      "form-range": isRangeType,
      [`form-control-${this.sizing}`]: !!this.sizing && !isRangeType,
      "is-valid": this.valid === true,
      "is-invalid": this.valid === false
    };
  }
  get hostTag() {
    return this.hostElement.nativeElement.tagName;
  }
  ngOnInit() {
    const hostTag = this.hostTag.toLowerCase();
    if (hostTag !== "input" && hostTag !== "textarea") {
      console.warn(`CoreUI [cFormControl] works with '<input>' and '<textarea>' - not with '<${hostTag}>'`);
    }
  }
};
_FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(ɵɵdirectiveInject(ElementRef));
};
_FormControlDirective.ɵdir = ɵɵdefineDirective({
  type: _FormControlDirective,
  selectors: [["input", "cFormControl", ""], ["textarea", "cFormControl", ""]],
  hostVars: 3,
  hostBindings: function FormControlDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    sizing: "sizing",
    valid: "valid",
    type: "type",
    plaintext: [InputFlags.HasDecoratorInputTransform, "plaintext", "plaintext", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "input[cFormControl], textarea[cFormControl]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    sizing: [{
      type: Input
    }],
    valid: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    plaintext: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormTextDirective = class _FormTextDirective {
  get hostClasses() {
    return {
      "form-text": true
    };
  }
};
_FormTextDirective.ɵfac = function FormTextDirective_Factory(t) {
  return new (t || _FormTextDirective)();
};
_FormTextDirective.ɵdir = ɵɵdefineDirective({
  type: _FormTextDirective,
  selectors: [["", "cFormText", ""]],
  hostVars: 2,
  hostBindings: function FormTextDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var FormTextDirective = _FormTextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cFormText]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormFloatingDirective = class _FormFloatingDirective {
  constructor() {
    this.floating = true;
  }
  get hostClasses() {
    return {
      "form-floating": this.floating
    };
  }
};
_FormFloatingDirective.ɵfac = function FormFloatingDirective_Factory(t) {
  return new (t || _FormFloatingDirective)();
};
_FormFloatingDirective.ɵdir = ɵɵdefineDirective({
  type: _FormFloatingDirective,
  selectors: [["", "cFormFloating", ""]],
  hostVars: 2,
  hostBindings: function FormFloatingDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    floating: [InputFlags.HasDecoratorInputTransform, "cFormFloating", "floating", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormFloatingDirective = _FormFloatingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFloatingDirective, [{
    type: Directive,
    args: [{
      selector: "[cFormFloating]",
      standalone: true
    }]
  }], null, {
    floating: [{
      type: Input,
      args: [{
        alias: "cFormFloating",
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _InputGroupTextDirective = class _InputGroupTextDirective {
  get hostClasses() {
    return {
      "input-group-text": true
    };
  }
  constructor() {
  }
};
_InputGroupTextDirective.ɵfac = function InputGroupTextDirective_Factory(t) {
  return new (t || _InputGroupTextDirective)();
};
_InputGroupTextDirective.ɵdir = ɵɵdefineDirective({
  type: _InputGroupTextDirective,
  selectors: [["", "cInputGroupText", ""]],
  hostVars: 2,
  hostBindings: function InputGroupTextDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var InputGroupTextDirective = _InputGroupTextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cInputGroupText]",
      standalone: true
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormModule = class _FormModule {
};
_FormModule.ɵfac = function FormModule_Factory(t) {
  return new (t || _FormModule)();
};
_FormModule.ɵmod = ɵɵdefineNgModule({
  type: _FormModule,
  imports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective],
  exports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective]
});
_FormModule.ɵinj = ɵɵdefineInjector({});
var FormModule = _FormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      imports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective],
      exports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective]
    }]
  }], null, null);
})();
var _ContainerComponent = class _ContainerComponent {
  constructor() {
    this.breakpoint = "";
    this.fluid = false;
  }
  get hostClasses() {
    return {
      container: !this.fluid && !this.breakpoint,
      "container-fluid": !!this.fluid,
      [`container-${this.breakpoint}`]: !!this.breakpoint
    };
  }
};
_ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
  return new (t || _ContainerComponent)();
};
_ContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ContainerComponent,
  selectors: [["c-container"], ["", "cContainer", ""]],
  hostVars: 2,
  hostBindings: function ContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    breakpoint: "breakpoint",
    fluid: [InputFlags.HasDecoratorInputTransform, "fluid", "fluid", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ContainerComponent = _ContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerComponent, [{
    type: Component,
    args: [{
      selector: "c-container, [cContainer]",
      template: "<ng-content></ng-content>",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    breakpoint: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ColDirective = class _ColDirective {
  constructor() {
    this._xs = false;
    this._sm = false;
    this._md = false;
    this._lg = false;
    this._xl = false;
    this._xxl = false;
  }
  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @type { 'auto' | number |  boolean }
   */
  set cCol(value) {
    this.xs = this.xs || this.coerceInput(value);
  }
  set xs(value) {
    this._xs = this.coerceInput(value);
  }
  get xs() {
    return this._xs;
  }
  /**
   * The number of columns/offset/order on small devices (<768px).
   * @type { 'auto' | number |  boolean }
   */
  set sm(value) {
    this._sm = this.coerceInput(value);
  }
  get sm() {
    return this._sm;
  }
  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @type { 'auto' | number |  boolean }
   */
  set md(value) {
    this._md = this.coerceInput(value);
  }
  get md() {
    return this._md;
  }
  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @type { 'auto' | number |  boolean }
   */
  set lg(value) {
    this._lg = this.coerceInput(value);
  }
  get lg() {
    return this._lg;
  }
  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @type { 'auto' | number |  boolean }
   */
  set xl(value) {
    this._xl = this.coerceInput(value);
  }
  get xl() {
    return this._xl;
  }
  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @type { 'auto' | number |  boolean }
   */
  set xxl(value) {
    this._xxl = this.coerceInput(value);
  }
  get xxl() {
    return this._xxl;
  }
  get hostClasses() {
    const classes = {
      col: true
    };
    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = this[breakpoint];
      const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
      classes[`col${infix}`] = value === true;
      classes[`col${infix}-${value}`] = typeof value === "number" || typeof value === "string";
    });
    if (typeof this.offset === "object") {
      const offset2 = __spreadValues({}, this.offset);
      Object.entries(offset2).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
      });
    } else {
      classes[`offset-${this.offset}`] = typeof this.offset === "number" && this.offset > 0 && this.offset <= 11;
    }
    if (typeof this.order === "object") {
      const order2 = __spreadValues({}, this.order);
      Object.entries(order2).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`order${infix}-${value}`] = value;
      });
    } else {
      classes[`order-${this.order}`] = !!this.order;
    }
    classes.col = !Object.entries(classes).filter((i) => i[0].startsWith("col-") && i[1]).length || this.xs === true;
    return classes;
  }
  coerceInput(value) {
    if (value === "auto") {
      return value;
    }
    if (value === "" || value === void 0 || value === null) {
      return coerceBooleanProperty(value);
    }
    if (typeof value === "boolean") {
      return value;
    }
    return coerceNumberProperty(value);
  }
};
_ColDirective.ɵfac = function ColDirective_Factory(t) {
  return new (t || _ColDirective)();
};
_ColDirective.ɵdir = ɵɵdefineDirective({
  type: _ColDirective,
  selectors: [["", "cCol", ""]],
  hostVars: 2,
  hostBindings: function ColDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    cCol: "cCol",
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "xxl",
    offset: "offset",
    order: "order"
  },
  standalone: true
});
var ColDirective = _ColDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColDirective, [{
    type: Directive,
    args: [{
      selector: "[cCol]",
      standalone: true
    }]
  }], null, {
    cCol: [{
      type: Input
    }],
    xs: [{
      type: Input
    }],
    sm: [{
      type: Input
    }],
    md: [{
      type: Input
    }],
    lg: [{
      type: Input
    }],
    xl: [{
      type: Input
    }],
    xxl: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ColComponent = class _ColComponent extends ColDirective {
};
_ColComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵColComponent_BaseFactory;
  return function ColComponent_Factory(t) {
    return (ɵColComponent_BaseFactory || (ɵColComponent_BaseFactory = ɵɵgetInheritedFactory(_ColComponent)))(t || _ColComponent);
  };
})();
_ColComponent.ɵcmp = ɵɵdefineComponent({
  type: _ColComponent,
  selectors: [["c-col"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ColComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ColComponent = _ColComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColComponent, [{
    type: Component,
    args: [{
      selector: "c-col",
      template: "<ng-content></ng-content>",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var _RowDirective = class _RowDirective {
  get hostClasses() {
    const cols = this.xs;
    const classes = {
      row: true,
      [`row-cols-${cols}`]: !!cols
    };
    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = this[breakpoint];
      if (typeof value === "number" || typeof value === "string") {
        const infix = breakpoint === "xs" ? "" : breakpoint;
        classes[`row-cols-${infix}-${value}`] = !!value;
      }
    });
    return classes;
  }
};
_RowDirective.ɵfac = function RowDirective_Factory(t) {
  return new (t || _RowDirective)();
};
_RowDirective.ɵdir = ɵɵdefineDirective({
  type: _RowDirective,
  selectors: [["", "cRow", ""]],
  hostVars: 2,
  hostBindings: function RowDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "xxl"
  },
  standalone: true
});
var RowDirective = _RowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowDirective, [{
    type: Directive,
    args: [{
      selector: "[cRow]",
      standalone: true
    }]
  }], null, {
    xs: [{
      type: Input
    }],
    sm: [{
      type: Input
    }],
    md: [{
      type: Input
    }],
    lg: [{
      type: Input
    }],
    xl: [{
      type: Input
    }],
    xxl: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _RowComponent = class _RowComponent extends RowDirective {
};
_RowComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵRowComponent_BaseFactory;
  return function RowComponent_Factory(t) {
    return (ɵRowComponent_BaseFactory || (ɵRowComponent_BaseFactory = ɵɵgetInheritedFactory(_RowComponent)))(t || _RowComponent);
  };
})();
_RowComponent.ɵcmp = ɵɵdefineComponent({
  type: _RowComponent,
  selectors: [["c-row"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function RowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var RowComponent = _RowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowComponent, [{
    type: Component,
    args: [{
      selector: "c-row",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, null);
})();
var _GutterDirective = class _GutterDirective {
  constructor() {
    this.gutter = {};
  }
  get hostClasses() {
    let gutterClass;
    if (typeof this.gutter === "number") {
      gutterClass = _GutterDirective.getGutterClasses({
        g: this.gutter
      });
      return gutterClass;
    }
    {
      const {
        g,
        gx,
        gy
      } = __spreadValues({}, this.gutter);
      gutterClass = _GutterDirective.getGutterClasses({
        g,
        gx,
        gy
      });
    }
    Object.keys(BreakpointInfix).forEach((key) => {
      const gutter = this.gutter[key] ? __spreadValues({}, this.gutter[key]) : void 0;
      if (gutter) {
        const classes = _GutterDirective.getGutterClasses(gutter, key);
        gutterClass = __spreadValues(__spreadValues({}, gutterClass), classes);
      }
    });
    return gutterClass;
  }
  static getGutterClasses(gutter, breakpoint) {
    const {
      g,
      gx,
      gy
    } = __spreadValues({}, gutter);
    const infix = breakpoint ? `-${breakpoint}` : "";
    return {
      [`g${infix}-${g}`]: typeof g === "number",
      [`gx${infix}-${gx}`]: typeof gx === "number",
      [`gy${infix}-${gy}`]: typeof gy === "number"
    };
  }
};
_GutterDirective.ɵfac = function GutterDirective_Factory(t) {
  return new (t || _GutterDirective)();
};
_GutterDirective.ɵdir = ɵɵdefineDirective({
  type: _GutterDirective,
  selectors: [["", "gutter", ""]],
  hostVars: 2,
  hostBindings: function GutterDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    gutter: "gutter"
  },
  standalone: true
});
var GutterDirective = _GutterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GutterDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[gutter]",
      standalone: true
    }]
  }], () => [], {
    gutter: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _GridModule = class _GridModule {
};
_GridModule.ɵfac = function GridModule_Factory(t) {
  return new (t || _GridModule)();
};
_GridModule.ɵmod = ɵɵdefineNgModule({
  type: _GridModule,
  imports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective],
  exports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective]
});
_GridModule.ɵinj = ɵɵdefineInjector({});
var GridModule = _GridModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective],
      exports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective]
    }]
  }], null, null);
})();
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    this.role = "header";
  }
  get getClasses() {
    return !!this.container ? this.containerClasses : this.headerClasses;
  }
  get headerClasses() {
    return {
      header: true,
      [`header-${this.position}`]: !!this.position
    };
  }
  get containerClasses() {
    return {
      container: this.container === true,
      [`container-${this.container}`]: typeof this.container === "string"
    };
  }
};
_HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderComponent,
  selectors: [["c-header"], ["", "c-header", ""]],
  hostVars: 3,
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.getClasses);
    }
  },
  inputs: {
    container: "container",
    position: "position",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "ngClass"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵtemplate(0, HeaderComponent_Conditional_0_Template, 2, 1, "div", 0)(1, HeaderComponent_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, !!ctx.container ? 0 : 1);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-header, [c-header]",
      standalone: true,
      imports: [NgClass],
      template: '@if (!!container) {\n  <div [ngClass]="headerClasses">\n    <ng-content />\n  </div>\n} @else {\n  <ng-content />\n}\n\n\n'
    }]
  }], null, {
    container: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    getClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _HeaderBrandComponent = class _HeaderBrandComponent {
  constructor() {
    this.role = "button";
    this.headerBrandClass = true;
  }
};
_HeaderBrandComponent.ɵfac = function HeaderBrandComponent_Factory(t) {
  return new (t || _HeaderBrandComponent)();
};
_HeaderBrandComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderBrandComponent,
  selectors: [["c-header-brand"]],
  hostVars: 3,
  hostBindings: function HeaderBrandComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("header-brand", ctx.headerBrandClass);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function HeaderBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var HeaderBrandComponent = _HeaderBrandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderBrandComponent, [{
    type: Component,
    args: [{
      selector: "c-header-brand",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    headerBrandClass: [{
      type: HostBinding,
      args: ["class.header-brand"]
    }]
  });
})();
var _HeaderDividerComponent = class _HeaderDividerComponent {
  constructor() {
    this.headerDividerClass = true;
  }
};
_HeaderDividerComponent.ɵfac = function HeaderDividerComponent_Factory(t) {
  return new (t || _HeaderDividerComponent)();
};
_HeaderDividerComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderDividerComponent,
  selectors: [["c-header-divider"], ["", "cHeaderDivider", ""]],
  hostVars: 2,
  hostBindings: function HeaderDividerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("header-divider", ctx.headerDividerClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function HeaderDividerComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var HeaderDividerComponent = _HeaderDividerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderDividerComponent, [{
    type: Component,
    args: [{
      selector: "c-header-divider, [cHeaderDivider]",
      template: ``,
      standalone: true
    }]
  }], null, {
    headerDividerClass: [{
      type: HostBinding,
      args: ["class.header-divider"]
    }]
  });
})();
var _HeaderNavComponent = class _HeaderNavComponent {
  constructor() {
    this.role = "navigation";
    this.headerNavClass = true;
  }
};
_HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(t) {
  return new (t || _HeaderNavComponent)();
};
_HeaderNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderNavComponent,
  selectors: [["c-header-nav"]],
  hostVars: 3,
  hostBindings: function HeaderNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("header-nav", ctx.headerNavClass);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function HeaderNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }
});
var HeaderNavComponent = _HeaderNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderNavComponent, [{
    type: Component,
    args: [{
      selector: "c-header-nav",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    headerNavClass: [{
      type: HostBinding,
      args: ["class.header-nav"]
    }]
  });
})();
var _HeaderTextComponent = class _HeaderTextComponent {
  constructor() {
    this.headerTextClass = true;
  }
};
_HeaderTextComponent.ɵfac = function HeaderTextComponent_Factory(t) {
  return new (t || _HeaderTextComponent)();
};
_HeaderTextComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderTextComponent,
  selectors: [["c-header-text"], ["", "cHeaderText", ""]],
  hostVars: 2,
  hostBindings: function HeaderTextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("header-text", ctx.headerTextClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function HeaderTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var HeaderTextComponent = _HeaderTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTextComponent, [{
    type: Component,
    args: [{
      selector: "c-header-text, [cHeaderText]",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    headerTextClass: [{
      type: HostBinding,
      args: ["class.header-text"]
    }]
  });
})();
var _HeaderTogglerDirective = class _HeaderTogglerDirective {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.headerToggler = true;
    this.type = "button";
    this.ariaLabel = "Toggle navigation";
  }
  addDefaultIcon() {
    const span = this.renderer.createElement("span");
    this.renderer.addClass(span, "header-toggler-icon");
    this.renderer.appendChild(this.hostElement.nativeElement, span);
  }
  ngAfterContentInit() {
    this.hasContent = this.hostElement.nativeElement.childNodes.length > 0;
    if (!this.hasContent) {
      this.addDefaultIcon();
    }
  }
};
_HeaderTogglerDirective.ɵfac = function HeaderTogglerDirective_Factory(t) {
  return new (t || _HeaderTogglerDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_HeaderTogglerDirective.ɵdir = ɵɵdefineDirective({
  type: _HeaderTogglerDirective,
  selectors: [["", "cHeaderToggler", ""]],
  hostVars: 4,
  hostBindings: function HeaderTogglerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-label", ctx.ariaLabel);
      ɵɵclassProp("header-toggler", ctx.headerToggler);
    }
  },
  inputs: {
    type: "type",
    ariaLabel: "ariaLabel"
  },
  standalone: true
});
var HeaderTogglerDirective = _HeaderTogglerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cHeaderToggler]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    headerToggler: [{
      type: HostBinding,
      args: ["class.header-toggler"]
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }, {
      type: Input
    }]
  });
})();
var _HeaderModule = class _HeaderModule {
};
_HeaderModule.ɵfac = function HeaderModule_Factory(t) {
  return new (t || _HeaderModule)();
};
_HeaderModule.ɵmod = ɵɵdefineNgModule({
  type: _HeaderModule,
  imports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective],
  exports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective]
});
_HeaderModule.ɵinj = ɵɵdefineInjector({});
var HeaderModule = _HeaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderModule, [{
    type: NgModule,
    args: [{
      imports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective],
      exports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective]
    }]
  }], null, null);
})();
var _ImgDirective = class _ImgDirective {
  constructor() {
    this.align = "";
    this.fluid = false;
    this.rounded = false;
    this.thumbnail = false;
    this.placeholderColor = "transparent";
  }
  get getStyles() {
    return {
      backgroundColor: this.placeholderColor
    };
  }
  get hostClasses() {
    const align = this.align;
    return {
      [`float-${align}`]: align === "start" || align === "end",
      "d-block": align === "center",
      "mx-auto": align === "center",
      "img-fluid": this.fluid,
      "rounded": this.rounded,
      "img-thumbnail": this.thumbnail
    };
  }
};
_ImgDirective.ɵfac = function ImgDirective_Factory(t) {
  return new (t || _ImgDirective)();
};
_ImgDirective.ɵdir = ɵɵdefineDirective({
  type: _ImgDirective,
  selectors: [["", "cImg", ""]],
  hostVars: 4,
  hostBindings: function ImgDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.getStyles);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    align: "align",
    fluid: [InputFlags.HasDecoratorInputTransform, "fluid", "fluid", booleanAttribute],
    rounded: [InputFlags.HasDecoratorInputTransform, "rounded", "rounded", booleanAttribute],
    thumbnail: [InputFlags.HasDecoratorInputTransform, "thumbnail", "thumbnail", booleanAttribute],
    placeholderColor: "placeholderColor"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ImgDirective = _ImgDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgDirective, [{
    type: Directive,
    args: [{
      selector: "[cImg]",
      standalone: true
    }]
  }], null, {
    align: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbnail: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholderColor: [{
      type: Input
    }],
    getStyles: [{
      type: HostBinding,
      args: ["style"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ImgModule = class _ImgModule {
};
_ImgModule.ɵfac = function ImgModule_Factory(t) {
  return new (t || _ImgModule)();
};
_ImgModule.ɵmod = ɵɵdefineNgModule({
  type: _ImgModule,
  imports: [ImgDirective],
  exports: [ImgDirective]
});
_ImgModule.ɵinj = ɵɵdefineInjector({});
var ImgModule = _ImgModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgModule, [{
    type: NgModule,
    args: [{
      imports: [ImgDirective],
      exports: [ImgDirective]
    }]
  }], null, null);
})();
var _ListGroupDirective = class _ListGroupDirective {
  constructor() {
    this.flush = false;
  }
  get hostClasses() {
    return {
      "list-group": true,
      "list-group-horizontal": this.horizontal === true || this.horizontal === "",
      [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== "boolean",
      "list-group-flush": this.flush
    };
  }
};
_ListGroupDirective.ɵfac = function ListGroupDirective_Factory(t) {
  return new (t || _ListGroupDirective)();
};
_ListGroupDirective.ɵdir = ɵɵdefineDirective({
  type: _ListGroupDirective,
  selectors: [["", "cListGroup", ""]],
  hostVars: 2,
  hostBindings: function ListGroupDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    flush: [InputFlags.HasDecoratorInputTransform, "flush", "flush", booleanAttribute],
    horizontal: "horizontal"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ListGroupDirective = _ListGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[cListGroup]",
      standalone: true
    }]
  }], null, {
    flush: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    horizontal: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ListGroupItemDirective = class _ListGroupItemDirective {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.disabled = false;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  get ariaCurrent() {
    return !!this.active;
  }
  get hostClasses() {
    const host = this.hostElement.nativeElement;
    return {
      "list-group-item": true,
      "list-group-item-action": host.nodeName === "A" || host.nodeName === "BUTTON",
      active: !!this.active,
      disabled: this.isDisabled,
      [`list-group-item-${this.color}`]: !!this.color
    };
  }
};
_ListGroupItemDirective.ɵfac = function ListGroupItemDirective_Factory(t) {
  return new (t || _ListGroupItemDirective)(ɵɵdirectiveInject(ElementRef));
};
_ListGroupItemDirective.ɵdir = ɵɵdefineDirective({
  type: _ListGroupItemDirective,
  selectors: [["", "cListGroupItem", ""], ["c-list-group-item"]],
  hostVars: 6,
  hostBindings: function ListGroupItemDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("tabindex", ctx.getTabindex)("aria-current", ctx.ariaCurrent);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    color: "color",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["cListGroupItem"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ListGroupItemDirective = _ListGroupItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cListGroupItem], c-list-group-item",
      exportAs: "cListGroupItem",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    active: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ListGroupModule = class _ListGroupModule {
};
_ListGroupModule.ɵfac = function ListGroupModule_Factory(t) {
  return new (t || _ListGroupModule)();
};
_ListGroupModule.ɵmod = ɵɵdefineNgModule({
  type: _ListGroupModule,
  imports: [ListGroupDirective, ListGroupItemDirective],
  exports: [ListGroupDirective, ListGroupItemDirective]
});
_ListGroupModule.ɵinj = ɵɵdefineInjector({});
var ListGroupModule = _ListGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupModule, [{
    type: NgModule,
    args: [{
      exports: [ListGroupDirective, ListGroupItemDirective],
      imports: [ListGroupDirective, ListGroupItemDirective]
    }]
  }], null, null);
})();
var _NavLinkDirective = class _NavLinkDirective {
  constructor() {
    this.cNavLink = true;
    this.disabled = false;
  }
  get ariaCurrent() {
    return this.active ? "page" : null;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  get getCursorStyle() {
    return this.disabled ? null : "pointer";
  }
  get hostClasses() {
    return {
      "nav-link": this.cNavLink,
      disabled: this.disabled,
      active: this.active
    };
  }
};
_NavLinkDirective.ɵfac = function NavLinkDirective_Factory(t) {
  return new (t || _NavLinkDirective)();
};
_NavLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _NavLinkDirective,
  selectors: [["", "cNavLink", ""]],
  hostVars: 8,
  hostBindings: function NavLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent)("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("tabindex", ctx.getTabindex);
      ɵɵclassMap(ctx.hostClasses);
      ɵɵstyleProp("cursor", ctx.getCursorStyle);
    }
  },
  inputs: {
    cNavLink: [InputFlags.HasDecoratorInputTransform, "cNavLink", "cNavLink", booleanAttribute],
    active: "active",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var NavLinkDirective = _NavLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavLink]",
      standalone: true
    }]
  }], null, {
    cNavLink: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    active: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    getCursorStyle: [{
      type: HostBinding,
      args: ["style.cursor"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavItemComponent = class _NavItemComponent {
  get hostClasses() {
    return {
      "nav-item": true
    };
  }
};
_NavItemComponent.ɵfac = function NavItemComponent_Factory(t) {
  return new (t || _NavItemComponent)();
};
_NavItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavItemComponent,
  selectors: [["c-nav-item"]],
  hostVars: 2,
  hostBindings: function NavItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NavItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}"]
});
var NavItemComponent = _NavItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemComponent, [{
    type: Component,
    args: [{
      selector: "c-nav-item",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"]
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavComponent = class _NavComponent {
  get hostClasses() {
    return {
      nav: true,
      [`nav-${this.layout}`]: !!this.layout,
      [`nav-${this.variant}`]: !!this.variant
    };
  }
};
_NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || _NavComponent)();
};
_NavComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavComponent,
  selectors: [["c-nav"]],
  hostVars: 2,
  hostBindings: function NavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    layout: "layout",
    variant: "variant"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus{outline:0}"]
});
var NavComponent = _NavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavComponent, [{
    type: Component,
    args: [{
      selector: "c-nav",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host .nav-link:focus{outline:0}\n"]
    }]
  }], null, {
    layout: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavModule = class _NavModule {
};
_NavModule.ɵfac = function NavModule_Factory(t) {
  return new (t || _NavModule)();
};
_NavModule.ɵmod = ɵɵdefineNgModule({
  type: _NavModule,
  imports: [NavComponent, NavItemComponent, NavLinkDirective],
  exports: [NavComponent, NavItemComponent, NavLinkDirective]
});
_NavModule.ɵinj = ɵɵdefineInjector({});
var NavModule = _NavModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavModule, [{
    type: NgModule,
    args: [{
      imports: [NavComponent, NavItemComponent, NavLinkDirective],
      exports: [NavComponent, NavItemComponent, NavLinkDirective]
    }]
  }], null, null);
})();
var _NavbarComponent = class _NavbarComponent {
  constructor(hostElement, breakpointObserver) {
    this.hostElement = hostElement;
    this.breakpointObserver = breakpointObserver;
    this.colorScheme = "light";
    this.role = "navigation";
  }
  get hostClasses() {
    const expandClassSuffix = this.expand === true ? "" : `-${this.expand}`;
    return {
      navbar: true,
      "navbar-light": this.colorScheme === "light",
      "navbar-dark": this.colorScheme === "dark",
      [`navbar-expand${expandClassSuffix}`]: !!this.expand,
      [`bg-${this.color}`]: !!this.color,
      [`${this.placement}`]: !!this.placement
    };
  }
  get containerClass() {
    return `container${this.container !== true ? "-" + this.container : ""}`;
  }
  get breakpoint() {
    if (typeof this.expand === "string") {
      return getComputedStyle(this.hostElement.nativeElement)?.getPropertyValue(`--cui-breakpoint-${this.expand}`) ?? false;
    }
    return false;
  }
  ngAfterContentInit() {
    if (this.breakpoint) {
      const onBreakpoint = `(min-width: ${this.breakpoint})`;
      this.breakpointObserver.observe([onBreakpoint]).subscribe((result) => {
        if (this.collapse) {
          const animate2 = this.collapse.animate;
          this.collapse.toggle(false);
          this.collapse.animate = false;
          setTimeout(() => {
            this.collapse.toggle(result.matches);
            setTimeout(() => {
              this.collapse.animate = animate2;
            });
          });
        }
      });
    }
  }
};
_NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || _NavbarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BreakpointObserver));
};
_NavbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarComponent,
  selectors: [["c-navbar"]],
  contentQueries: function NavbarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CollapseDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collapse = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    colorScheme: "colorScheme",
    container: "container",
    expand: "expand",
    placement: "placement",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 1,
  consts: [[4, "ngTemplateOutlet"], ["withContainerTemplate", ""], ["noContainerTemplate", ""], [3, "ngClass"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵtemplate(0, NavbarComponent_ng_container_0_Template, 1, 0, "ng-container", 0)(1, NavbarComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, NavbarComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      const _r4 = ɵɵreference(4);
      ɵɵproperty("ngTemplateOutlet", ctx.container ? _r2 : _r4);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar",
      standalone: true,
      imports: [NgClass, NgTemplateOutlet],
      template: '<ng-container *ngTemplateOutlet="container ? withContainerTemplate : noContainerTemplate"></ng-container>\n\n<ng-template #withContainerTemplate>\n  <div [ngClass]="containerClass">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content></ng-content>\n</ng-template>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: BreakpointObserver
  }], {
    color: [{
      type: Input
    }],
    colorScheme: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    expand: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    collapse: [{
      type: ContentChild,
      args: [CollapseDirective]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavbarBrandDirective = class _NavbarBrandDirective {
  constructor() {
    this.navbarBrand = true;
    this.role = "button";
  }
};
_NavbarBrandDirective.ɵfac = function NavbarBrandDirective_Factory(t) {
  return new (t || _NavbarBrandDirective)();
};
_NavbarBrandDirective.ɵdir = ɵɵdefineDirective({
  type: _NavbarBrandDirective,
  selectors: [["", "cNavbarBrand", ""]],
  hostVars: 3,
  hostBindings: function NavbarBrandDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("navbar-brand", ctx.navbarBrand);
    }
  },
  standalone: true
});
var NavbarBrandDirective = _NavbarBrandDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarBrandDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavbarBrand]",
      standalone: true
    }]
  }], null, {
    navbarBrand: [{
      type: HostBinding,
      args: ["class.navbar-brand"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var _NavbarNavComponent = class _NavbarNavComponent {
  constructor() {
    this.scroll = false;
  }
  get hostClasses() {
    return {
      "navbar-nav": true,
      "navbar-nav-scroll": this.scroll
    };
  }
};
_NavbarNavComponent.ɵfac = function NavbarNavComponent_Factory(t) {
  return new (t || _NavbarNavComponent)();
};
_NavbarNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarNavComponent,
  selectors: [["c-navbar-nav"]],
  hostVars: 2,
  hostBindings: function NavbarNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    scroll: [InputFlags.HasDecoratorInputTransform, "scroll", "scroll", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NavbarNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NavbarNavComponent = _NavbarNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarNavComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar-nav",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    scroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavbarTextComponent = class _NavbarTextComponent {
  constructor() {
    this.navbarTextClass = true;
  }
};
_NavbarTextComponent.ɵfac = function NavbarTextComponent_Factory(t) {
  return new (t || _NavbarTextComponent)();
};
_NavbarTextComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarTextComponent,
  selectors: [["c-navbar-text"]],
  hostVars: 2,
  hostBindings: function NavbarTextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("navbar-text", ctx.navbarTextClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NavbarTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NavbarTextComponent = _NavbarTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarTextComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar-text",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    navbarTextClass: [{
      type: HostBinding,
      args: ["class.navbar-text"]
    }]
  });
})();
var _NavbarTogglerDirective = class _NavbarTogglerDirective {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.navbarToggler = true;
    this.type = "button";
    this.ariaLabel = "Toggle navigation";
  }
  handleClick() {
    this.collapseRef?.toggle(!this.collapseRef?.visible);
  }
  addDefaultIcon() {
    const span = this.renderer.createElement("span");
    this.renderer.addClass(span, "navbar-toggler-icon");
    this.renderer.appendChild(this.hostElement.nativeElement, span);
  }
  ngAfterContentInit() {
    this.hasContent = this.hostElement.nativeElement.childNodes.length;
    if (!this.hasContent) {
      this.addDefaultIcon();
    }
  }
};
_NavbarTogglerDirective.ɵfac = function NavbarTogglerDirective_Factory(t) {
  return new (t || _NavbarTogglerDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NavbarTogglerDirective.ɵdir = ɵɵdefineDirective({
  type: _NavbarTogglerDirective,
  selectors: [["", "cNavbarToggler", ""]],
  hostVars: 4,
  hostBindings: function NavbarTogglerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NavbarTogglerDirective_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-label", ctx.ariaLabel);
      ɵɵclassProp("navbar-toggler", ctx.navbarToggler);
    }
  },
  inputs: {
    collapseRef: [InputFlags.None, "cNavbarToggler", "collapseRef"],
    type: "type",
    ariaLabel: "ariaLabel"
  },
  standalone: true
});
var NavbarTogglerDirective = _NavbarTogglerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavbarToggler]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    collapseRef: [{
      type: Input,
      args: ["cNavbarToggler"]
    }],
    navbarToggler: [{
      type: HostBinding,
      args: ["class.navbar-toggler"]
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }, {
      type: Input
    }],
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _NavbarModule = class _NavbarModule {
};
_NavbarModule.ɵfac = function NavbarModule_Factory(t) {
  return new (t || _NavbarModule)();
};
_NavbarModule.ɵmod = ɵɵdefineNgModule({
  type: _NavbarModule,
  imports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective],
  exports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective]
});
_NavbarModule.ɵinj = ɵɵdefineInjector({});
var NavbarModule = _NavbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarModule, [{
    type: NgModule,
    args: [{
      exports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective],
      imports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective]
    }]
  }], null, null);
})();
var _ModalBodyComponent = class _ModalBodyComponent {
  get hostClasses() {
    return {
      "modal-body": true
    };
  }
};
_ModalBodyComponent.ɵfac = function ModalBodyComponent_Factory(t) {
  return new (t || _ModalBodyComponent)();
};
_ModalBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalBodyComponent,
  selectors: [["c-modal-body"]],
  hostVars: 2,
  hostBindings: function ModalBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ModalBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ModalBodyComponent = _ModalBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-body",
      template: "<ng-content></ng-content>",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ModalContentComponent = class _ModalContentComponent {
  get hostClasses() {
    return {
      "modal-content": true
    };
  }
};
_ModalContentComponent.ɵfac = function ModalContentComponent_Factory(t) {
  return new (t || _ModalContentComponent)();
};
_ModalContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalContentComponent,
  selectors: [["c-modal-content"]],
  hostVars: 2,
  hostBindings: function ModalContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ModalContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ModalContentComponent = _ModalContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalContentComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-content",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ModalDialogComponent = class _ModalDialogComponent {
  get hostClasses() {
    return {
      "modal-dialog": true,
      "modal-dialog-centered": this.alignment === "center",
      "modal-fullscreen": this.fullscreen === true,
      [`modal-fullscreen-${this.fullscreen}-down`]: this.fullscreen,
      "modal-dialog-scrollable": this.scrollable,
      [`modal-${this.size}`]: this.size
    };
  }
};
_ModalDialogComponent.ɵfac = function ModalDialogComponent_Factory(t) {
  return new (t || _ModalDialogComponent)();
};
_ModalDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalDialogComponent,
  selectors: [["c-modal-dialog"]],
  hostVars: 2,
  hostBindings: function ModalDialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    fullscreen: "fullscreen",
    scrollable: "scrollable",
    size: "size"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ModalDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}.modal-dialog-centered[_nghost-%COMP%]{display:flex}"]
});
var ModalDialogComponent = _ModalDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalDialogComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-dialog",
      template: "<ng-content></ng-content>",
      standalone: true,
      styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"]
    }]
  }], null, {
    alignment: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ModalService = class _ModalService {
  constructor() {
    this.modalState = new Subject();
    this.modalState$ = this.modalState.asObservable();
  }
  toggle(action) {
    this.modalState.next(action);
  }
};
_ModalService.ɵfac = function ModalService_Factory(t) {
  return new (t || _ModalService)();
};
_ModalService.ɵprov = ɵɵdefineInjectable({
  token: _ModalService,
  factory: _ModalService.ɵfac,
  providedIn: "root"
});
var ModalService = _ModalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _ModalToggleDirective = class _ModalToggleDirective {
  constructor(modalService) {
    this.modalService = modalService;
  }
  dismiss($event) {
    $event.preventDefault();
    this.modalService.toggle({
      show: "toggle",
      id: this.id
    });
  }
};
_ModalToggleDirective.ɵfac = function ModalToggleDirective_Factory(t) {
  return new (t || _ModalToggleDirective)(ɵɵdirectiveInject(ModalService));
};
_ModalToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _ModalToggleDirective,
  selectors: [["", "cModalToggle", ""]],
  hostBindings: function ModalToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ModalToggleDirective_click_HostBindingHandler($event) {
        return ctx.dismiss($event);
      });
    }
  },
  inputs: {
    id: [InputFlags.None, "cModalToggle", "id"]
  },
  standalone: true
});
var ModalToggleDirective = _ModalToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cModalToggle]",
      standalone: true
    }]
  }], () => [{
    type: ModalService
  }], {
    id: [{
      type: Input,
      args: ["cModalToggle"]
    }],
    dismiss: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ModalFooterComponent = class _ModalFooterComponent {
  get hostClasses() {
    return {
      "modal-footer": true
    };
  }
};
_ModalFooterComponent.ɵfac = function ModalFooterComponent_Factory(t) {
  return new (t || _ModalFooterComponent)();
};
_ModalFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalFooterComponent,
  selectors: [["c-modal-footer"]],
  hostVars: 2,
  hostBindings: function ModalFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ModalFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ModalFooterComponent = _ModalFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-footer",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ModalHeaderComponent = class _ModalHeaderComponent {
  get hostClasses() {
    return {
      "modal-header": true
    };
  }
};
_ModalHeaderComponent.ɵfac = function ModalHeaderComponent_Factory(t) {
  return new (t || _ModalHeaderComponent)();
};
_ModalHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalHeaderComponent,
  selectors: [["c-modal-header"]],
  hostVars: 2,
  hostBindings: function ModalHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ModalHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ModalHeaderComponent = _ModalHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-header",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ModalTitleDirective = class _ModalTitleDirective {
  get hostClasses() {
    return {
      "modal-title": true
    };
  }
};
_ModalTitleDirective.ɵfac = function ModalTitleDirective_Factory(t) {
  return new (t || _ModalTitleDirective)();
};
_ModalTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _ModalTitleDirective,
  selectors: [["", "cModalTitle", ""]],
  hostVars: 2,
  hostBindings: function ModalTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var ModalTitleDirective = _ModalTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cModalTitle]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _destroyRef2, _focusMonitor, _ariaModal, _visible, _activeElement, _visibleEffect, _activeBackdrop, _afterViewInit;
var _ModalComponent = class _ModalComponent {
  constructor(document2, renderer, hostElement, modalService, backdropService) {
    __privateAdd(this, _destroyRef2, void 0);
    __privateAdd(this, _focusMonitor, void 0);
    __privateAdd(this, _ariaModal, void 0);
    __privateAdd(this, _visible, void 0);
    __privateAdd(this, _activeElement, void 0);
    __privateAdd(this, _visibleEffect, void 0);
    __privateAdd(this, _activeBackdrop, void 0);
    __privateAdd(this, _afterViewInit, void 0);
    this.document = document2;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.modalService = modalService;
    this.backdropService = backdropService;
    __privateSet(this, _destroyRef2, inject(DestroyRef));
    __privateSet(this, _focusMonitor, inject(FocusMonitor));
    this.alignment = "top";
    this.backdrop = true;
    this.keyboard = true;
    this.transition = true;
    this.role = "dialog";
    __privateSet(this, _ariaModal, null);
    this.scrollable = false;
    __privateSet(this, _visible, signal(false));
    __privateSet(this, _activeElement, null);
    __privateSet(this, _visibleEffect, effect(() => {
      if (__privateGet(this, _visible).call(this) && __privateGet(this, _afterViewInit).call(this)) {
        __privateSet(this, _activeElement, this.document.activeElement);
        setTimeout(() => {
          const focusable = this.modalContentRef.nativeElement.querySelectorAll('[tabindex]:not([tabindex="-1"]), button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
          __privateGet(this, _focusMonitor).focusVia(focusable[0], "keyboard");
        });
      } else {
        if (this.document.contains(__privateGet(this, _activeElement))) {
          setTimeout(() => {
            __privateGet(this, _activeElement)?.focus();
            __privateSet(this, _activeElement, null);
          });
        }
      }
    }));
    this.visibleChange = new EventEmitter();
    this._show = true;
    this.mouseDownTarget = null;
    __privateSet(this, _afterViewInit, signal(false));
  }
  /**
   * Set aria-modal html attr for modal. [docs]
   * @type boolean
   * @default null
   */
  set ariaModal(value) {
    __privateSet(this, _ariaModal, value);
  }
  get ariaModal() {
    return this.visible || __privateGet(this, _ariaModal) ? true : null;
  }
  /**
   * Toggle the visibility of modal component.
   * @type boolean
   */
  set visible(value) {
    if (__privateGet(this, _visible).call(this) !== value) {
      __privateGet(this, _visible).set(value);
      this.setBackdrop(this.backdrop !== false && value);
      this.setBodyStyles(value);
      this.visibleChange.emit(value);
    }
  }
  get visible() {
    return __privateGet(this, _visible).call(this);
  }
  // private inBoundingClientRect!: boolean;
  get hostClasses() {
    return {
      modal: true,
      fade: this.transition,
      show: this.show
    };
  }
  get ariaHidden() {
    return this.visible ? null : true;
  }
  get tabIndex() {
    return "-1";
  }
  get animateTrigger() {
    return this.visible ? "visible" : "hidden";
  }
  get show() {
    return this.visible && this._show;
  }
  set show(value) {
    this._show = value;
  }
  animateStart(event) {
    if (event.toState === "visible") {
      this.backdropService.hideScrollbar();
      this.renderer.setStyle(this.hostElement.nativeElement, "display", "block");
    } else {
      if (!this.transition) {
        this.renderer.setStyle(this.hostElement.nativeElement, "display", "none");
      }
    }
  }
  animateDone(event) {
    setTimeout(() => {
      if (event.toState === "hidden") {
        this.renderer.setStyle(this.hostElement.nativeElement, "display", "none");
      }
    });
    this.show = this.visible;
  }
  onKeyDownHandler(event) {
    if (event.key === "Escape" && this.keyboard && this.visible) {
      if (this.backdrop === "static") {
        this.setStaticBackdrop();
      } else {
        this.modalService.toggle({
          show: false,
          modal: this
        });
      }
    }
  }
  onMouseDownHandler($event) {
    this.mouseDownTarget = $event.target;
  }
  onClickHandler($event) {
    if (this.mouseDownTarget !== $event.target) {
      this.mouseDownTarget = null;
      return;
    }
    const targetElement = $event.target;
    if (targetElement === this.hostElement.nativeElement) {
      if (this.backdrop === "static") {
        this.setStaticBackdrop();
        return;
      }
      this.modalService.toggle({
        show: false,
        modal: this
      });
    }
  }
  ngOnInit() {
    this.stateToggleSubscribe();
  }
  ngAfterViewInit() {
    __privateGet(this, _afterViewInit).set(true);
  }
  ngOnDestroy() {
    this.modalService.toggle({
      show: false,
      modal: this
    });
    __privateGet(this, _afterViewInit).set(false);
  }
  stateToggleSubscribe() {
    this.modalService.modalState$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef2))).subscribe((action) => {
      if (this === action.modal || this.id === action.id) {
        if ("show" in action) {
          this.visible = action?.show === "toggle" ? !this.visible : action.show;
        }
      } else {
        if (this.visible) {
          this.visible = false;
        }
      }
    });
  }
  setBackdrop(setBackdrop) {
    __privateSet(this, _activeBackdrop, setBackdrop ? this.backdropService.setBackdrop("modal") : this.backdropService.clearBackdrop(__privateGet(this, _activeBackdrop)));
  }
  setBodyStyles(open) {
    if (open) {
      if (this.backdrop === true) {
        this.renderer.addClass(this.document.body, "modal-open");
      }
    } else {
      this.renderer.removeClass(this.document.body, "modal-open");
    }
  }
  setStaticBackdrop() {
    if (this.transition) {
      this.renderer.addClass(this.hostElement.nativeElement, "modal-static");
      this.renderer.setStyle(this.hostElement.nativeElement, "overflow-y", "hidden");
      setTimeout(() => {
        this.renderer.removeClass(this.hostElement.nativeElement, "modal-static");
        this.renderer.removeStyle(this.hostElement.nativeElement, "overflow-y");
      }, 300);
    }
  }
};
_destroyRef2 = new WeakMap();
_focusMonitor = new WeakMap();
_ariaModal = new WeakMap();
_visible = new WeakMap();
_activeElement = new WeakMap();
_visibleEffect = new WeakMap();
_activeBackdrop = new WeakMap();
_afterViewInit = new WeakMap();
_ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || _ModalComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(BackdropService));
};
_ModalComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalComponent,
  selectors: [["c-modal"]],
  viewQuery: function ModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ModalContentComponent, 5, ElementRef);
      ɵɵviewQuery(_c5, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContentRef = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function ModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@showHide.start", function ModalComponent_animation_showHide_start_HostBindingHandler($event) {
        return ctx.animateStart($event);
      })("@showHide.done", function ModalComponent_animation_showHide_done_HostBindingHandler($event) {
        return ctx.animateDone($event);
      });
      ɵɵlistener("keyup", function ModalComponent_keyup_HostBindingHandler($event) {
        return ctx.onKeyDownHandler($event);
      }, false, ɵɵresolveDocument)("mousedown", function ModalComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDownHandler($event);
      })("click", function ModalComponent_click_HostBindingHandler($event) {
        return ctx.onClickHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("aria-modal", ctx.ariaModal)("aria-hidden", ctx.ariaHidden)("tabindex", ctx.tabIndex);
      ɵɵsyntheticHostProperty("@showHide", ctx.animateTrigger);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    backdrop: "backdrop",
    fullscreen: "fullscreen",
    keyboard: [InputFlags.HasDecoratorInputTransform, "keyboard", "keyboard", booleanAttribute],
    id: "id",
    size: "size",
    transition: [InputFlags.HasDecoratorInputTransform, "transition", "transition", booleanAttribute],
    role: "role",
    ariaModal: "ariaModal",
    scrollable: [InputFlags.HasDecoratorInputTransform, "scrollable", "scrollable", booleanAttribute],
    visible: [InputFlags.HasDecoratorInputTransform, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cModal"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 6,
  consts: [[3, "alignment", "fullscreen", "scrollable", "size"], [2, "display", "contents", 3, "cdkTrapFocus", "cdkTrapFocusAutoCapture"], ["modalContentRef", ""]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-modal-dialog", 0)(1, "c-modal-content")(2, "div", 1, 2);
      ɵɵprojection(4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("alignment", ctx.alignment)("fullscreen", ctx.fullscreen)("scrollable", ctx.scrollable)("size", ctx.size);
      ɵɵadvance(2);
      ɵɵproperty("cdkTrapFocus", ctx.visible)("cdkTrapFocusAutoCapture", ctx.visible);
    }
  },
  dependencies: [ModalDialogComponent, ModalContentComponent, A11yModule, CdkTrapFocus],
  encapsulation: 2,
  data: {
    animation: [trigger("showHide", [state("visible", style({
      // display: 'block'
    })), state("hidden", style({
      // display: 'none'
    })), transition("visible <=> *", [animate("150ms")])])]
  }
});
var ModalComponent = _ModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "c-modal",
      animations: [trigger("showHide", [state("visible", style({
        // display: 'block'
      })), state("hidden", style({
        // display: 'none'
      })), transition("visible <=> *", [animate("150ms")])])],
      exportAs: "cModal",
      standalone: true,
      imports: [ModalDialogComponent, ModalContentComponent, A11yModule],
      template: '<c-modal-dialog\n  [alignment]="alignment"\n  [fullscreen]="fullscreen"\n  [scrollable]="scrollable"\n  [size]="size">\n  <c-modal-content>\n    <div [cdkTrapFocus]="visible" [cdkTrapFocusAutoCapture]="visible" style="display: contents;" #modalContentRef>\n      <ng-content></ng-content>\n    </div>\n  </c-modal-content>\n</c-modal-dialog>\n'
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ModalService
  }, {
    type: BackdropService
  }], {
    alignment: [{
      type: Input
    }],
    backdrop: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    keyboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    id: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    transition: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaModal: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-modal"]
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    modalContent: [{
      type: ViewChild,
      args: [ModalContentComponent, {
        read: ElementRef
      }]
    }],
    modalContentRef: [{
      type: ViewChild,
      args: ["modalContentRef", {
        read: ElementRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    animateTrigger: [{
      type: HostBinding,
      args: ["@showHide"]
    }],
    animateStart: [{
      type: HostListener,
      args: ["@showHide.start", ["$event"]]
    }],
    animateDone: [{
      type: HostListener,
      args: ["@showHide.done", ["$event"]]
    }],
    onKeyDownHandler: [{
      type: HostListener,
      args: ["document:keyup", ["$event"]]
    }],
    onMouseDownHandler: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onClickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ModalModule = class _ModalModule {
};
_ModalModule.ɵfac = function ModalModule_Factory(t) {
  return new (t || _ModalModule)();
};
_ModalModule.ɵmod = ɵɵdefineNgModule({
  type: _ModalModule,
  imports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
  exports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective]
});
_ModalModule.ɵinj = ɵɵdefineInjector({
  providers: [ModalService],
  imports: [ModalComponent]
});
var ModalModule = _ModalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalModule, [{
    type: NgModule,
    args: [{
      exports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
      imports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
      providers: [ModalService]
    }]
  }], null, null);
})();
var _OffcanvasService = class _OffcanvasService {
  constructor() {
    this.offcanvasState = new Subject();
    this.offcanvasState$ = this.offcanvasState.asObservable();
  }
  toggle(action) {
    this.offcanvasState.next(action);
  }
};
_OffcanvasService.ɵfac = function OffcanvasService_Factory(t) {
  return new (t || _OffcanvasService)();
};
_OffcanvasService.ɵprov = ɵɵdefineInjectable({
  token: _OffcanvasService,
  factory: _OffcanvasService.ɵfac,
  providedIn: "root"
});
var OffcanvasService = _OffcanvasService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var nextId = 0;
var _destroyRef3, _activeBackdrop2, _backdropClickSubscription, _layoutChangeSubscription, _show, _visible2;
var _OffcanvasComponent = class _OffcanvasComponent {
  constructor(document2, platformId, renderer, hostElement, offcanvasService, backdropService, breakpointObserver) {
    __privateAdd(this, _destroyRef3, void 0);
    __privateAdd(this, _activeBackdrop2, void 0);
    __privateAdd(this, _backdropClickSubscription, void 0);
    __privateAdd(this, _layoutChangeSubscription, void 0);
    __privateAdd(this, _show, void 0);
    __privateAdd(this, _visible2, void 0);
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.offcanvasService = offcanvasService;
    this.backdropService = backdropService;
    this.breakpointObserver = breakpointObserver;
    __privateSet(this, _destroyRef3, inject(DestroyRef));
    this.backdrop = true;
    this.keyboard = true;
    this.placement = "start";
    this.responsive = true;
    this.id = `offcanvas-${this.placement}-${nextId++}`;
    this.role = "dialog";
    this.ariaModal = true;
    __privateSet(this, _show, false);
    this.scroll = false;
    __privateSet(this, _visible2, false);
    this.visibleChange = new EventEmitter();
  }
  /**
   * Toggle the visibility of offcanvas component.
   * @type boolean
   * @default false
   */
  set visible(value) {
    __privateSet(this, _visible2, value);
    if (__privateGet(this, _visible2)) {
      this.setBackdrop(this.backdrop);
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.layoutChangeSubscribe(__privateGet(this, _visible2));
    this.visibleChange.emit(value);
  }
  get visible() {
    return __privateGet(this, _visible2);
  }
  get hostClasses() {
    return {
      offcanvas: typeof this.responsive === "boolean",
      [`offcanvas-${this.responsive}`]: typeof this.responsive !== "boolean",
      [`offcanvas-${this.placement}`]: !!this.placement,
      show: this.show
    };
  }
  get ariaHidden() {
    return this.visible ? null : true;
  }
  get tabIndex() {
    return "-1";
  }
  get animateTrigger() {
    return this.visible ? "visible" : "hidden";
  }
  get show() {
    return this.visible && __privateGet(this, _show);
  }
  set show(value) {
    __privateSet(this, _show, value);
  }
  get responsiveBreakpoint() {
    if (typeof this.responsive !== "string") {
      return false;
    }
    const element = this.document.documentElement;
    const responsiveBreakpoint = this.responsive;
    const breakpointValue = getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${responsiveBreakpoint.trim()}`) ?? false;
    return breakpointValue ? `${parseFloat(breakpointValue.trim()) - 0.02}px` : false;
  }
  animateStart(event) {
    if (event.toState === "visible") {
      if (!this.scroll) {
        this.backdropService.hideScrollbar();
      }
      this.renderer.addClass(this.hostElement.nativeElement, "showing");
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, "hiding");
    }
  }
  animateDone(event) {
    setTimeout(() => {
      if (event.toState === "visible") {
        this.renderer.removeClass(this.hostElement.nativeElement, "showing");
      }
      if (event.toState === "hidden") {
        this.renderer.removeClass(this.hostElement.nativeElement, "hiding");
        this.renderer.removeStyle(this.document.body, "overflow");
        this.renderer.removeStyle(this.document.body, "paddingRight");
      }
    });
    this.show = this.visible;
  }
  onKeyDownHandler(event) {
    if (event.key === "Escape" && this.keyboard && this.visible && this.backdrop !== "static") {
      this.offcanvasService.toggle({
        show: false,
        id: this.id
      });
    }
  }
  ngOnInit() {
    this.stateToggleSubscribe();
    setTimeout(() => {
      this.renderer.setStyle(this.hostElement.nativeElement, "display", "flex");
    });
  }
  ngOnDestroy() {
    this.offcanvasService.toggle({
      show: false,
      id: this.id
    });
  }
  setFocus() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.hostElement.nativeElement.focus());
    }
  }
  stateToggleSubscribe() {
    this.offcanvasService.offcanvasState$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef3))).subscribe((action) => {
      if (this === action.offcanvas || this.id === action.id) {
        if ("show" in action) {
          this.visible = action?.show === "toggle" ? !this.visible : action.show;
        }
      }
    });
  }
  backdropClickSubscribe(subscribe = true) {
    if (subscribe) {
      __privateSet(this, _backdropClickSubscription, this.backdropService.backdropClick$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef3))).subscribe((clicked) => {
        this.offcanvasService.toggle({
          show: !clicked,
          id: this.id
        });
      }));
    } else {
      __privateGet(this, _backdropClickSubscription)?.unsubscribe();
    }
  }
  setBackdrop(setBackdrop) {
    __privateSet(this, _activeBackdrop2, !!setBackdrop ? this.backdropService.setBackdrop("offcanvas") : this.backdropService.clearBackdrop(__privateGet(this, _activeBackdrop2)));
    setBackdrop === true ? this.backdropClickSubscribe() : this.backdropClickSubscribe(false);
  }
  layoutChangeSubscribe(subscribe = true) {
    if (subscribe) {
      if (!this.responsiveBreakpoint) {
        return;
      }
      const responsiveBreakpoint = `(max-width: ${this.responsiveBreakpoint})`;
      const layoutChanges = this.breakpointObserver.observe([responsiveBreakpoint]);
      __privateSet(this, _layoutChangeSubscription, layoutChanges.pipe(filter((breakpointState) => !breakpointState.matches), takeUntilDestroyed(__privateGet(this, _destroyRef3))).subscribe((breakpointState) => {
        this.visible = breakpointState.matches;
      }));
    } else {
      __privateGet(this, _layoutChangeSubscription)?.unsubscribe();
    }
  }
};
_destroyRef3 = new WeakMap();
_activeBackdrop2 = new WeakMap();
_backdropClickSubscription = new WeakMap();
_layoutChangeSubscription = new WeakMap();
_show = new WeakMap();
_visible2 = new WeakMap();
_OffcanvasComponent.ɵfac = function OffcanvasComponent_Factory(t) {
  return new (t || _OffcanvasComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OffcanvasService), ɵɵdirectiveInject(BackdropService), ɵɵdirectiveInject(BreakpointObserver));
};
_OffcanvasComponent.ɵcmp = ɵɵdefineComponent({
  type: _OffcanvasComponent,
  selectors: [["c-offcanvas"]],
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 7,
  hostBindings: function OffcanvasComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@showHide.start", function OffcanvasComponent_animation_showHide_start_HostBindingHandler($event) {
        return ctx.animateStart($event);
      })("@showHide.done", function OffcanvasComponent_animation_showHide_done_HostBindingHandler($event) {
        return ctx.animateDone($event);
      });
      ɵɵlistener("keydown", function OffcanvasComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDownHandler($event);
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("aria-modal", ctx.ariaModal)("aria-hidden", ctx.ariaHidden)("tabindex", ctx.tabIndex);
      ɵɵsyntheticHostProperty("@showHide", ctx.animateTrigger);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    backdrop: "backdrop",
    keyboard: [InputFlags.HasDecoratorInputTransform, "keyboard", "keyboard", booleanAttribute],
    placement: "placement",
    responsive: "responsive",
    id: "id",
    role: "role",
    ariaModal: [InputFlags.HasDecoratorInputTransform, "ariaModal", "ariaModal", booleanAttribute],
    scroll: [InputFlags.HasDecoratorInputTransform, "scroll", "scroll", booleanAttribute],
    visible: [InputFlags.HasDecoratorInputTransform, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cOffcanvas"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 0,
  consts: [["cdkTrapFocus", "", "cdkTrapFocusAutoCapture", ""]],
  template: function OffcanvasComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  dependencies: [A11yModule, CdkTrapFocus],
  styles: ["[_nghost-%COMP%]{display:none}"],
  data: {
    animation: [trigger("showHide", [state("visible", style({
      // visibility: 'visible'
    })), state("hidden", style({
      // visibility: 'hidden'
    })), transition("visible <=> *", [animate("300ms")])])]
  }
});
var OffcanvasComponent = _OffcanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas",
      animations: [trigger("showHide", [state("visible", style({
        // visibility: 'visible'
      })), state("hidden", style({
        // visibility: 'hidden'
      })), transition("visible <=> *", [animate("300ms")])])],
      exportAs: "cOffcanvas",
      standalone: true,
      imports: [A11yModule],
      host: {
        ngSkipHydration: "true"
      },
      template: "<div cdkTrapFocus cdkTrapFocusAutoCapture>\n  <ng-content></ng-content>\n</div>\n\n",
      styles: [":host{display:none}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: OffcanvasService
  }, {
    type: BackdropService
  }, {
    type: BreakpointObserver
  }], {
    backdrop: [{
      type: Input
    }],
    keyboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placement: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaModal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["attr.aria-modal"]
    }],
    scroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    animateTrigger: [{
      type: HostBinding,
      args: ["@showHide"]
    }],
    animateStart: [{
      type: HostListener,
      args: ["@showHide.start", ["$event"]]
    }],
    animateDone: [{
      type: HostListener,
      args: ["@showHide.done", ["$event"]]
    }],
    onKeyDownHandler: [{
      type: HostListener,
      args: ["document:keydown", ["$event"]]
    }]
  });
})();
var _OffcanvasBodyComponent = class _OffcanvasBodyComponent {
  get hostClasses() {
    return {
      "offcanvas-body": true
    };
  }
};
_OffcanvasBodyComponent.ɵfac = function OffcanvasBodyComponent_Factory(t) {
  return new (t || _OffcanvasBodyComponent)();
};
_OffcanvasBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _OffcanvasBodyComponent,
  selectors: [["c-offcanvas-body"]],
  hostVars: 2,
  hostBindings: function OffcanvasBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function OffcanvasBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var OffcanvasBodyComponent = _OffcanvasBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas-body",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _OffcanvasHeaderComponent = class _OffcanvasHeaderComponent {
  get hostClasses() {
    return {
      "offcanvas-header": true
    };
  }
};
_OffcanvasHeaderComponent.ɵfac = function OffcanvasHeaderComponent_Factory(t) {
  return new (t || _OffcanvasHeaderComponent)();
};
_OffcanvasHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _OffcanvasHeaderComponent,
  selectors: [["c-offcanvas-header"]],
  hostVars: 2,
  hostBindings: function OffcanvasHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function OffcanvasHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var OffcanvasHeaderComponent = _OffcanvasHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas-header",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _OffcanvasTitleDirective = class _OffcanvasTitleDirective {
  get hostClasses() {
    return {
      "offcanvas-title": true
    };
  }
};
_OffcanvasTitleDirective.ɵfac = function OffcanvasTitleDirective_Factory(t) {
  return new (t || _OffcanvasTitleDirective)();
};
_OffcanvasTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _OffcanvasTitleDirective,
  selectors: [["", "cOffcanvasTitle", ""]],
  hostVars: 2,
  hostBindings: function OffcanvasTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var OffcanvasTitleDirective = _OffcanvasTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cOffcanvasTitle]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _OffcanvasToggleDirective = class _OffcanvasToggleDirective {
  constructor(offcanvasService) {
    this.offcanvasService = offcanvasService;
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.offcanvasService.toggle({
      show: "toggle",
      id: this.id
    });
  }
};
_OffcanvasToggleDirective.ɵfac = function OffcanvasToggleDirective_Factory(t) {
  return new (t || _OffcanvasToggleDirective)(ɵɵdirectiveInject(OffcanvasService));
};
_OffcanvasToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _OffcanvasToggleDirective,
  selectors: [["", "cOffcanvasToggle", ""]],
  hostBindings: function OffcanvasToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function OffcanvasToggleDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
  },
  inputs: {
    id: [InputFlags.None, "cOffcanvasToggle", "id"]
  },
  standalone: true
});
var OffcanvasToggleDirective = _OffcanvasToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cOffcanvasToggle]",
      standalone: true
    }]
  }], () => [{
    type: OffcanvasService
  }], {
    id: [{
      type: Input,
      args: ["cOffcanvasToggle"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _OffcanvasModule = class _OffcanvasModule {
};
_OffcanvasModule.ɵfac = function OffcanvasModule_Factory(t) {
  return new (t || _OffcanvasModule)();
};
_OffcanvasModule.ɵmod = ɵɵdefineNgModule({
  type: _OffcanvasModule,
  imports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
  exports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective]
});
_OffcanvasModule.ɵinj = ɵɵdefineInjector({
  providers: [OffcanvasService, BackdropService],
  imports: [OffcanvasComponent]
});
var OffcanvasModule = _OffcanvasModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasModule, [{
    type: NgModule,
    args: [{
      exports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
      imports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
      providers: [OffcanvasService, BackdropService]
    }]
  }], null, null);
})();
var _PageLinkDirective = class _PageLinkDirective {
  get hostClasses() {
    return {
      "page-link": true
    };
  }
};
_PageLinkDirective.ɵfac = function PageLinkDirective_Factory(t) {
  return new (t || _PageLinkDirective)();
};
_PageLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _PageLinkDirective,
  selectors: [["", "cPageLink", ""]],
  hostVars: 2,
  hostBindings: function PageLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true
});
var PageLinkDirective = _PageLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cPageLink]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _PageItemDirective = class _PageItemDirective {
  get ariaCurrent() {
    return this.active ? "page" : null;
  }
  get hostClasses() {
    return {
      "page-item": true,
      disabled: this.disabled,
      active: this.active
    };
  }
  constructor(renderer) {
    this.renderer = renderer;
  }
  ngAfterContentInit() {
    this.setAttributes();
  }
  ngOnChanges(changes) {
    if (changes["disabled"]) {
      this.setAttributes();
    }
  }
  setAttributes() {
    if (!this.pageLinkElementRef) {
      return;
    }
    const pageLinkElement = this.pageLinkElementRef.nativeElement;
    if (this.disabled) {
      this.renderer.setAttribute(pageLinkElement, "aria-disabled", "true");
      this.renderer.setAttribute(pageLinkElement, "tabindex", "-1");
    } else {
      this.renderer.removeAttribute(pageLinkElement, "aria-disabled");
      this.renderer.removeAttribute(pageLinkElement, "tabindex");
    }
  }
};
_PageItemDirective.ɵfac = function PageItemDirective_Factory(t) {
  return new (t || _PageItemDirective)(ɵɵdirectiveInject(Renderer2));
};
_PageItemDirective.ɵdir = ɵɵdefineDirective({
  type: _PageItemDirective,
  selectors: [["", "cPageItem", ""]],
  contentQueries: function PageItemDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PageLinkDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageLinkElementRef = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function PageItemDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    disabled: "disabled"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var PageItemDirective = _PageItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cPageItem]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }], {
    active: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    pageLinkElementRef: [{
      type: ContentChild,
      args: [PageLinkDirective, {
        read: ElementRef
      }]
    }]
  });
})();
var _PageItemComponent = class _PageItemComponent extends PageItemDirective {
};
_PageItemComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPageItemComponent_BaseFactory;
  return function PageItemComponent_Factory(t) {
    return (ɵPageItemComponent_BaseFactory || (ɵPageItemComponent_BaseFactory = ɵɵgetInheritedFactory(_PageItemComponent)))(t || _PageItemComponent);
  };
})();
_PageItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageItemComponent,
  selectors: [["c-page-item"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function PageItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: [_c6]
});
var PageItemComponent = _PageItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageItemComponent, [{
    type: Component,
    args: [{
      selector: "c-page-item",
      template: `<ng-content></ng-content>`,
      standalone: true,
      styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"]
    }]
  }], null, null);
})();
var _PaginationComponent = class _PaginationComponent {
  constructor() {
    this.align = "";
    this.role = "navigation";
  }
  get paginationClass() {
    return {
      pagination: true,
      [`pagination-${this.size}`]: !!this.size,
      [`justify-content-${this.align}`]: !!this.align
    };
  }
};
_PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || _PaginationComponent)();
};
_PaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _PaginationComponent,
  selectors: [["c-pagination"]],
  hostVars: 1,
  hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
    }
  },
  inputs: {
    align: "align",
    size: "size",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [[3, "ngClass"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "ul", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.paginationClass);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var PaginationComponent = _PaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "c-pagination",
      standalone: true,
      imports: [NgClass],
      template: '<ul [ngClass]="paginationClass">\n  <ng-content></ng-content>\n</ul>\n'
    }]
  }], null, {
    align: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }]
  });
})();
var _PaginationModule = class _PaginationModule {
};
_PaginationModule.ɵfac = function PaginationModule_Factory(t) {
  return new (t || _PaginationModule)();
};
_PaginationModule.ɵmod = ɵɵdefineNgModule({
  type: _PaginationModule,
  imports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent],
  exports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent]
});
_PaginationModule.ɵinj = ɵɵdefineInjector({});
var PaginationModule = _PaginationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      exports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent],
      imports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent]
    }]
  }], null, null);
})();
var _PlaceholderDirective = class _PlaceholderDirective {
  constructor() {
    this._visible = false;
  }
  /**
   * placeholder toggler
   * @type boolean
   * @default false
   */
  set visible(value) {
    this._visible = coerceBooleanProperty(value);
  }
  get visible() {
    return this._visible;
  }
  get ariaHidden() {
    return this.visible ? null : true;
  }
  get hostClasses() {
    return {
      "placeholder": this.visible,
      [`placeholder-${this.size}`]: !!this.size
    };
  }
};
_PlaceholderDirective.ɵfac = function PlaceholderDirective_Factory(t) {
  return new (t || _PlaceholderDirective)();
};
_PlaceholderDirective.ɵdir = ɵɵdefineDirective({
  type: _PlaceholderDirective,
  selectors: [["", "cPlaceholder", ""]],
  hostVars: 3,
  hostBindings: function PlaceholderDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.ariaHidden);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    visible: [InputFlags.None, "cPlaceholder", "visible"],
    size: [InputFlags.None, "cPlaceholderSize", "size"]
  },
  exportAs: ["cPlaceholder"],
  standalone: true
});
var PlaceholderDirective = _PlaceholderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderDirective, [{
    type: Directive,
    args: [{
      selector: "[cPlaceholder]",
      exportAs: "cPlaceholder",
      standalone: true
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: ["cPlaceholder"]
    }],
    size: [{
      type: Input,
      args: ["cPlaceholderSize"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _animate;
var _PlaceholderAnimationDirective = class _PlaceholderAnimationDirective {
  constructor() {
    __privateAdd(this, _animate, false);
  }
  get hostClasses() {
    return {
      [`placeholder-${this.animation}`]: __privateGet(this, _animate) && !!this.animation
    };
  }
  ngAfterContentInit() {
    __privateSet(this, _animate, this.placeholder?.visible);
  }
};
_animate = new WeakMap();
_PlaceholderAnimationDirective.ɵfac = function PlaceholderAnimationDirective_Factory(t) {
  return new (t || _PlaceholderAnimationDirective)();
};
_PlaceholderAnimationDirective.ɵdir = ɵɵdefineDirective({
  type: _PlaceholderAnimationDirective,
  selectors: [["", "cPlaceholderAnimation", ""]],
  contentQueries: function PlaceholderAnimationDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PlaceholderDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.placeholder = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function PlaceholderAnimationDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    animation: [InputFlags.None, "cPlaceholderAnimation", "animation"]
  },
  standalone: true
});
var PlaceholderAnimationDirective = _PlaceholderAnimationDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[cPlaceholderAnimation]",
      standalone: true
    }]
  }], null, {
    animation: [{
      type: Input,
      args: ["cPlaceholderAnimation"]
    }],
    placeholder: [{
      type: ContentChild,
      args: [PlaceholderDirective]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _PlaceholderModule = class _PlaceholderModule {
};
_PlaceholderModule.ɵfac = function PlaceholderModule_Factory(t) {
  return new (t || _PlaceholderModule)();
};
_PlaceholderModule.ɵmod = ɵɵdefineNgModule({
  type: _PlaceholderModule,
  imports: [PlaceholderDirective, PlaceholderAnimationDirective],
  exports: [PlaceholderDirective, PlaceholderAnimationDirective]
});
_PlaceholderModule.ɵinj = ɵɵdefineInjector({});
var PlaceholderModule = _PlaceholderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderModule, [{
    type: NgModule,
    args: [{
      imports: [PlaceholderDirective, PlaceholderAnimationDirective],
      exports: [PlaceholderDirective, PlaceholderAnimationDirective]
    }]
  }], null, null);
})();
var _PopoverComponent = class _PopoverComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.content = "";
    this.visible = false;
    this.role = "tooltip";
  }
  get hostClasses() {
    return {
      popover: true,
      fade: true,
      show: this.visible,
      "bs-popover-auto": true
    };
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateView(this.content);
    });
  }
  ngOnChanges(changes) {
    if (changes["content"]) {
      setTimeout(() => {
        this.updateView(this.content);
      });
    }
  }
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.viewContainerRef?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
  updateView(content) {
    this.clear();
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      this.viewContainerRef.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);
      const popoverBody = this.renderer.createElement("div");
      this.renderer.addClass(popoverBody, "popover-body");
      this.renderer.appendChild(popoverBody, this.textNode);
      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, popoverBody);
    }
  }
};
_PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
  return new (t || _PopoverComponent)(ɵɵdirectiveInject(Renderer2));
};
_PopoverComponent.ɵcmp = ɵɵdefineComponent({
  type: _PopoverComponent,
  selectors: [["c-popover"]],
  viewQuery: function PopoverComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function PopoverComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    content: "content",
    visible: "visible",
    id: "id",
    role: "role"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 3,
  consts: [["data-popper-arrow", "", 3, "ngClass"], ["popoverTemplate", ""]],
  template: function PopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelement(1, "div", 0);
      ɵɵelementContainer(2, null, 1);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c8, !!ctx.content));
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var PopoverComponent = _PopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{
      selector: "c-popover",
      standalone: true,
      imports: [NgClass],
      template: `<ng-container>
  <div [ngClass]="{'popover-arrow': !!content}" data-popper-arrow></div>
  <ng-container #popoverTemplate></ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: Renderer2
  }], {
    content: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    id: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.id"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["popoverTemplate", {
        read: ViewContainerRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _destroyRef4;
var _PopoverDirective = class _PopoverDirective {
  constructor(document2, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef, intersectionService) {
    __privateAdd(this, _destroyRef4, void 0);
    this.document = document2;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.viewContainerRef = viewContainerRef;
    this.listenersService = listenersService;
    this.changeDetectorRef = changeDetectorRef;
    this.intersectionService = intersectionService;
    this.content = "";
    this.placement = "top";
    this.trigger = "hover";
    this._visible = false;
    this._popperOptions = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 8]
        }
      }]
    };
    __privateSet(this, _destroyRef4, inject(DestroyRef));
  }
  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @type Partial<Options>
   */
  set popperOptions(value) {
    this._popperOptions = __spreadValues(__spreadProps(__spreadValues({}, this._popperOptions), {
      placement: this.placement
    }), value);
  }
  get popperOptions() {
    return __spreadValues({
      placement: this.placement
    }, this._popperOptions);
  }
  /**
   * Toggle the visibility of popover component.
   */
  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  get ariaDescribedBy() {
    return this.popoverId ? this.popoverId : null;
  }
  ngAfterViewInit() {
    this.intersectionServiceSubscribe();
  }
  ngOnChanges(changes) {
    if (changes["visible"]) {
      changes["visible"].currentValue ? this.addPopoverElement() : this.removePopoverElement();
    }
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyPopoverElement();
  }
  ngOnInit() {
    this.setListeners();
  }
  setListeners() {
    const config = {
      hostElement: this.hostElement,
      trigger: this.trigger,
      callbackToggle: () => {
        this.visible = !this.visible;
        this.visible ? this.addPopoverElement() : this.removePopoverElement();
      },
      callbackOff: () => {
        this.visible = false;
        this.removePopoverElement();
      },
      callbackOn: () => {
        this.visible = true;
        this.addPopoverElement();
      }
    };
    this.listenersService.setListeners(config);
  }
  clearListeners() {
    this.listenersService.clearListeners();
  }
  intersectionServiceSubscribe() {
    this.intersectionService.createIntersectionObserver(this.hostElement);
    this.intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.hostElement), debounceTime(100), finalize(() => {
      this.intersectionService.unobserve(this.hostElement);
    }), takeUntilDestroyed(__privateGet(this, _destroyRef4))).subscribe((next) => {
      this.visible = next.isIntersecting ? this.visible : false;
      !this.visible && this.removePopoverElement();
    });
  }
  getUID(prefix) {
    let uid = prefix ?? "random-id";
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.document.getElementById(uid));
    return uid;
  }
  createPopoverElement() {
    if (!this.popoverRef) {
      this.popoverRef = this.viewContainerRef.createComponent(PopoverComponent);
    }
  }
  destroyPopoverElement() {
    this.popover?.remove();
    this.popoverRef?.destroy();
    this.popoverRef = void 0;
    this.popperInstance?.destroy();
    this.viewContainerRef?.detach();
    this.viewContainerRef?.clear();
  }
  addPopoverElement() {
    if (!this.popoverRef) {
      this.createPopoverElement();
    }
    this.popoverRef.instance.content = this.content;
    this.popover = this.popoverRef.location.nativeElement;
    this.renderer.addClass(this.popover, "d-none");
    this.renderer.addClass(this.popover, "fade");
    this.popperInstance?.destroy();
    setTimeout(() => {
      this.popperInstance = createPopper3(this.hostElement.nativeElement, this.popover, __spreadValues({}, this.popperOptions));
      this.viewContainerRef.insert(this.popoverRef.hostView);
      this.renderer.appendChild(this.document.body, this.popover);
      if (!this.visible) {
        this.removePopoverElement();
        return;
      }
      setTimeout(() => {
        this.popoverId = this.getUID("popover");
        this.popoverRef.instance.id = this.popoverId;
        if (!this.visible) {
          this.removePopoverElement();
          return;
        }
        this.renderer.removeClass(this.popover, "d-none");
        this.popoverRef.instance.visible = this.visible;
        this.popperInstance.forceUpdate();
        this.changeDetectorRef.markForCheck();
      }, 100);
    });
  }
  removePopoverElement() {
    this.popoverId = "";
    if (!this.popoverRef) {
      return;
    }
    this.popoverRef.instance.visible = false;
    this.popoverRef.instance.id = void 0;
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef?.detach();
    }, 300);
  }
};
_destroyRef4 = new WeakMap();
_PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
  return new (t || _PopoverDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ListenersService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IntersectionService));
};
_PopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _PopoverDirective,
  selectors: [["", "cPopover", ""]],
  hostVars: 1,
  hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-describedby", ctx.ariaDescribedBy);
    }
  },
  inputs: {
    content: [InputFlags.None, "cPopover", "content"],
    popperOptions: [InputFlags.None, "cPopoverOptions", "popperOptions"],
    placement: [InputFlags.None, "cPopoverPlacement", "placement"],
    trigger: [InputFlags.None, "cPopoverTrigger", "trigger"],
    visible: [InputFlags.None, "cPopoverVisible", "visible"]
  },
  exportAs: ["cPopover"],
  standalone: true,
  features: [ɵɵProvidersFeature([ListenersService]), ɵɵNgOnChangesFeature]
});
var PopoverDirective = _PopoverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[cPopover]",
      exportAs: "cPopover",
      providers: [ListenersService],
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ListenersService
  }, {
    type: ChangeDetectorRef
  }, {
    type: IntersectionService
  }], {
    content: [{
      type: Input,
      args: ["cPopover"]
    }],
    popperOptions: [{
      type: Input,
      args: ["cPopoverOptions"]
    }],
    placement: [{
      type: Input,
      args: ["cPopoverPlacement"]
    }],
    trigger: [{
      type: Input,
      args: ["cPopoverTrigger"]
    }],
    visible: [{
      type: Input,
      args: ["cPopoverVisible"]
    }],
    ariaDescribedBy: [{
      type: HostBinding,
      args: ["attr.aria-describedby"]
    }]
  });
})();
var _PopoverModule = class _PopoverModule {
};
_PopoverModule.ɵfac = function PopoverModule_Factory(t) {
  return new (t || _PopoverModule)();
};
_PopoverModule.ɵmod = ɵɵdefineNgModule({
  type: _PopoverModule,
  imports: [PopoverDirective, PopoverComponent],
  exports: [PopoverDirective, PopoverComponent]
});
_PopoverModule.ɵinj = ɵɵdefineInjector({});
var PopoverModule = _PopoverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      exports: [PopoverDirective, PopoverComponent],
      imports: [PopoverDirective, PopoverComponent]
    }]
  }], null, null);
})();
var _ProgressComponent = class _ProgressComponent {
  constructor() {
    this.height = 0;
    this.thin = false;
    this.white = false;
  }
  get hostClasses() {
    return {
      progress: true,
      "progress-thin": this.thin,
      "progress-white": this.white
    };
  }
  get hostStyle() {
    return !!this.height ? `${this.height}px` : "";
  }
};
_ProgressComponent.ɵfac = function ProgressComponent_Factory(t) {
  return new (t || _ProgressComponent)();
};
_ProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressComponent,
  selectors: [["c-progress"]],
  hostVars: 4,
  hostBindings: function ProgressComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
      ɵɵstyleProp("height", ctx.hostStyle);
    }
  },
  inputs: {
    height: [InputFlags.HasDecoratorInputTransform, "height", "height", numberAttribute],
    thin: [InputFlags.HasDecoratorInputTransform, "thin", "thin", booleanAttribute],
    white: [InputFlags.HasDecoratorInputTransform, "white", "white", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ProgressComponent = _ProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressComponent, [{
    type: Component,
    args: [{
      selector: "c-progress",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], null, {
    height: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    thin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    white: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style.height"]
    }]
  });
})();
var _ProgressBarComponent = class _ProgressBarComponent {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.animated = false;
    this.precision = 0;
    this.value = 0;
    this.role = "progressbar";
    this.state = {
      percent: 0,
      min: 0,
      max: 100
    };
  }
  get min() {
    return this.state.min;
  }
  set min(value) {
    this.state.min = isNaN(value) ? 0 : value;
  }
  get max() {
    return this.state.max;
  }
  set max(value) {
    this.state.max = isNaN(value) || value <= 0 || value === this.min ? 100 : value;
  }
  get hostClasses() {
    return {
      "progress-bar": true,
      "progress-bar-animated": this.animated,
      [`progress-bar-${this.variant}`]: !!this.variant,
      [`bg-${this.color}`]: !!this.color
    };
  }
  ngOnInit() {
    this.setValues();
  }
  setPercent() {
    this.state.percent = +(this.value / (this.max - this.min) * 100).toFixed(this.precision);
  }
  setValues() {
    this.setPercent();
    const host = this.hostElement.nativeElement;
    this.renderer.setStyle(host, "width", `${this.state.percent}%`);
    this.renderer.setAttribute(host, "aria-valuenow", String(this.value));
    this.renderer.setAttribute(host, "aria-valuemin", String(this.min));
    this.renderer.setAttribute(host, "aria-valuemax", String(this.max));
  }
  ngOnChanges(changes) {
    this.setValues();
  }
};
_ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || _ProgressBarComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_ProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressBarComponent,
  selectors: [["c-progress-bar"]],
  hostVars: 3,
  hostBindings: function ProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    animated: [InputFlags.HasDecoratorInputTransform, "animated", "animated", booleanAttribute],
    color: "color",
    precision: [InputFlags.HasDecoratorInputTransform, "precision", "precision", numberAttribute],
    value: [InputFlags.HasDecoratorInputTransform, "value", "value", numberAttribute],
    variant: "variant",
    role: "role",
    min: "min",
    max: "max"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ProgressBarComponent = _ProgressBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      selector: "c-progress-bar",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    animated: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    precision: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ProgressModule = class _ProgressModule {
};
_ProgressModule.ɵfac = function ProgressModule_Factory(t) {
  return new (t || _ProgressModule)();
};
_ProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _ProgressModule,
  imports: [ProgressComponent, ProgressBarComponent],
  exports: [ProgressComponent, ProgressBarComponent]
});
_ProgressModule.ɵinj = ɵɵdefineInjector({});
var ProgressModule = _ProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressModule, [{
    type: NgModule,
    args: [{
      exports: [ProgressComponent, ProgressBarComponent],
      imports: [ProgressComponent, ProgressBarComponent]
    }]
  }], null, null);
})();
var _SpinnerComponent = class _SpinnerComponent {
  constructor() {
    this.label = "Loading...";
    this.variant = "border";
    this.role = "status";
  }
  get hostClasses() {
    return {
      [`spinner-${this.variant}`]: true,
      [`text-${this.color}`]: !!this.color,
      [`spinner-${this.variant}-${this.size}`]: !!this.size
    };
  }
};
_SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || _SpinnerComponent)();
};
_SpinnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SpinnerComponent,
  selectors: [["c-spinner"]],
  hostVars: 3,
  hostBindings: function SpinnerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    label: "label",
    size: "size",
    variant: "variant",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "visually-hidden"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.label);
    }
  },
  encapsulation: 2
});
var SpinnerComponent = _SpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{
      selector: "c-spinner",
      standalone: true,
      template: '<span class="visually-hidden">{{label}}</span>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _SpinnerModule = class _SpinnerModule {
};
_SpinnerModule.ɵfac = function SpinnerModule_Factory(t) {
  return new (t || _SpinnerModule)();
};
_SpinnerModule.ɵmod = ɵɵdefineNgModule({
  type: _SpinnerModule,
  imports: [SpinnerComponent],
  exports: [SpinnerComponent]
});
_SpinnerModule.ɵinj = ɵɵdefineInjector({});
var SpinnerModule = _SpinnerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerModule, [{
    type: NgModule,
    args: [{
      exports: [SpinnerComponent],
      imports: [SpinnerComponent]
    }]
  }], null, null);
})();
var _SidebarService = class _SidebarService {
  constructor() {
    this.sidebarState = new BehaviorSubject({});
    this.sidebarState$ = this.sidebarState.asObservable();
  }
  toggle(action) {
    this.sidebarState.next(action);
  }
};
_SidebarService.ɵfac = function SidebarService_Factory(t) {
  return new (t || _SidebarService)();
};
_SidebarService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarService,
  factory: _SidebarService.ɵfac,
  providedIn: "root"
});
var SidebarService = _SidebarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _SidebarBackdropService = class _SidebarBackdropService {
  constructor(document2, sidebarService) {
    this.document = document2;
    this.sidebarService = sidebarService;
    this.clickListener = () => {
    };
  }
  setBackdrop(sidebar) {
    const backdrop = this.document.getElementsByClassName("sidebar-backdrop");
    if (backdrop.length === 0) {
      this.backdrop = this.renderer.createElement("div");
      this.renderer.addClass(this.backdrop, "sidebar-backdrop");
      this.renderer.appendChild(this.document.body, this.backdrop);
      this.clickListener = this.renderer.listen(this.backdrop, "click", (e) => {
        this.sidebarService.toggle({
          toggle: "visible",
          sidebar
        });
      });
    }
    if (this.backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
      this.renderer.addClass(this.backdrop, "fade");
      this.renderer.addClass(this.backdrop, "show");
    } else {
      this.renderer.removeClass(this.backdrop, "show");
      this.renderer.removeClass(this.backdrop, "fade");
    }
  }
  clearBackdrop() {
    if (this.backdrop) {
      this.clickListener();
      this.renderer.removeChild(this.document.body, this.backdrop);
      this.backdrop = void 0;
    }
  }
};
_SidebarBackdropService.ɵfac = function SidebarBackdropService_Factory(t) {
  return new (t || _SidebarBackdropService)(ɵɵinject(DOCUMENT), ɵɵinject(SidebarService));
};
_SidebarBackdropService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarBackdropService,
  factory: _SidebarBackdropService.ɵfac,
  providedIn: "root"
});
var SidebarBackdropService = _SidebarBackdropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarBackdropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: SidebarService
  }], null);
})();
var _narrow, _overlaid, _unfoldable, _visible3, _onMobile, _layoutChangeSubscription2, _stateToggleSubscription, _stateInitial;
var _SidebarComponent = class _SidebarComponent {
  constructor(document2, renderer, breakpointObserver, sidebarService, backdropService) {
    __privateAdd(this, _narrow, void 0);
    __privateAdd(this, _overlaid, void 0);
    __privateAdd(this, _unfoldable, void 0);
    __privateAdd(this, _visible3, void 0);
    __privateAdd(this, _onMobile, void 0);
    __privateAdd(this, _layoutChangeSubscription2, void 0);
    __privateAdd(this, _stateToggleSubscription, void 0);
    __privateAdd(this, _stateInitial, void 0);
    this.document = document2;
    this.renderer = renderer;
    this.breakpointObserver = breakpointObserver;
    this.sidebarService = sidebarService;
    this.backdropService = backdropService;
    __privateSet(this, _narrow, false);
    __privateSet(this, _overlaid, false);
    __privateSet(this, _unfoldable, false);
    __privateSet(this, _visible3, false);
    __privateSet(this, _onMobile, false);
    this.state = {
      sidebar: this
    };
    __privateSet(this, _stateInitial, {
      narrow: false,
      visible: false,
      unfoldable: false
    });
    this.position = "fixed";
    this.visibleChange = new EventEmitter();
    this.backdropService.renderer = renderer;
  }
  /**
   * Make sidebar narrow. [docs]
   * @type boolean
   */
  set narrow(value) {
    __privateSet(this, _narrow, coerceBooleanProperty(value));
  }
  get narrow() {
    return __privateGet(this, _narrow);
  }
  /**
   * Set sidebar to overlaid variant.
   * @type boolean
   */
  set overlaid(value) {
    __privateSet(this, _overlaid, coerceBooleanProperty(value));
  }
  get overlaid() {
    return __privateGet(this, _overlaid);
  }
  /**
   * Expand narrowed sidebar on hover. [docs]
   */
  set unfoldable(value) {
    __privateSet(this, _unfoldable, coerceBooleanProperty(value));
  }
  get unfoldable() {
    return __privateGet(this, _unfoldable);
  }
  /**
   * Toggle the visibility of sidebar component. [docs]
   */
  set visible(value) {
    const visible = coerceBooleanProperty(value);
    if (__privateGet(this, _visible3) !== visible) {
      __privateSet(this, _visible3, visible);
      this.visibleChange.emit(__privateGet(this, _visible3));
    }
  }
  get visible() {
    return __privateGet(this, _visible3);
  }
  set sidebarState(value) {
    const newState = value;
    if ("toggle" in newState) {
      if (newState.toggle === "visible") {
        newState.visible = !this.state.visible;
        this.visible = newState.visible;
      } else if (newState.toggle === "unfoldable") {
        newState.unfoldable = !this.state.unfoldable;
        this.unfoldable = newState.unfoldable;
      }
    } else {
      this.visible = (newState.visible ?? this.visible) && !this.overlaid;
    }
    this.state = __spreadValues(__spreadValues({}, this.state), newState);
    this.state.mobile && this.state.visible ? this.backdropService.setBackdrop(this) : this.backdropService.clearBackdrop();
  }
  get sidebarState() {
    return this.state;
  }
  get getMobileBreakpoint() {
    const element = this.document.documentElement;
    const mobileBreakpoint = this.document.defaultView?.getComputedStyle(element)?.getPropertyValue("--cui-mobile-breakpoint") ?? "md";
    const breakpointValue = this.document.defaultView?.getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) ?? "768px";
    return `${parseFloat(breakpointValue.trim()) - 0.02}px` || "767.98px";
  }
  get getClasses() {
    const {
      mobile,
      visible
    } = this.sidebarState;
    return {
      sidebar: true,
      "sidebar-fixed": this.position === "fixed" && !mobile,
      "sidebar-narrow": this.narrow && !this.unfoldable,
      "sidebar-narrow-unfoldable": this.unfoldable,
      "sidebar-overlaid": this.overlaid,
      [`sidebar-${this.size}`]: !!this.size,
      show: visible && __privateGet(this, _onMobile),
      hide: !visible
    };
  }
  ngOnInit() {
    this.setInitialState();
    this.layoutChangeSubscribe();
    this.stateToggleSubscribe();
  }
  ngOnDestroy() {
    this.stateToggleSubscribe(false);
    this.layoutChangeSubscribe(false);
  }
  ngOnChanges(changes) {
    const oldStateMap = new Map(Object.entries(this.state));
    const newStateMap = /* @__PURE__ */ new Map();
    newStateMap.set("sidebar", this);
    const propList = ["visible", "unfoldable", "narrow"];
    for (const propName in changes) {
      if (propList.includes(propName)) {
        if (changes[propName] && !changes[propName].firstChange) {
          const value = coerceBooleanProperty(changes[propName].currentValue);
          if (oldStateMap.get(propName) !== value) {
            newStateMap.set(propName, value);
          }
        }
      }
    }
    if (newStateMap.size > 1) {
      const state2 = Object.fromEntries(newStateMap.entries());
      this.sidebarService.toggle(state2);
    }
  }
  setInitialState() {
    __privateSet(this, _stateInitial, {
      narrow: this.narrow,
      visible: this.visible,
      unfoldable: this.unfoldable
    });
    this.sidebarService.toggle(__spreadProps(__spreadValues({}, __privateGet(this, _stateInitial)), {
      sidebar: this
    }));
  }
  stateToggleSubscribe(subscribe = true) {
    if (subscribe) {
      __privateSet(this, _stateToggleSubscription, this.sidebarService.sidebarState$.subscribe((state2) => {
        if (this === state2.sidebar || this.id === state2.id) {
          this.sidebarState = state2;
        }
      }));
    } else {
      __privateGet(this, _stateToggleSubscription)?.unsubscribe();
    }
  }
  layoutChangeSubscribe(subscribe = true) {
    const onMobile = `(max-width: ${this.getMobileBreakpoint})`;
    if (subscribe) {
      const layoutChanges = this.breakpointObserver.observe([onMobile]);
      __privateSet(this, _layoutChangeSubscription2, layoutChanges.subscribe((result) => {
        const isOnMobile = result.breakpoints[onMobile];
        const isUnfoldable = isOnMobile ? false : this.unfoldable;
        if (__privateGet(this, _onMobile) !== isOnMobile) {
          __privateSet(this, _onMobile, isOnMobile);
          this.sidebarService.toggle({
            mobile: isOnMobile,
            unfoldable: isUnfoldable,
            visible: isOnMobile ? !isOnMobile : __privateGet(this, _stateInitial).visible,
            sidebar: this
          });
        }
      }));
    } else {
      __privateGet(this, _layoutChangeSubscription2)?.unsubscribe();
    }
  }
};
_narrow = new WeakMap();
_overlaid = new WeakMap();
_unfoldable = new WeakMap();
_visible3 = new WeakMap();
_onMobile = new WeakMap();
_layoutChangeSubscription2 = new WeakMap();
_stateToggleSubscription = new WeakMap();
_stateInitial = new WeakMap();
_SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || _SidebarComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(SidebarService), ɵɵdirectiveInject(SidebarBackdropService));
};
_SidebarComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarComponent,
  selectors: [["c-sidebar"]],
  hostVars: 2,
  hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.getClasses);
    }
  },
  inputs: {
    colorScheme: "colorScheme",
    id: "id",
    narrow: "narrow",
    overlaid: "overlaid",
    placement: "placement",
    position: "position",
    size: "size",
    unfoldable: "unfoldable",
    visible: "visible"
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cSidebar"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var SidebarComponent = _SidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar",
      exportAs: "cSidebar",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: BreakpointObserver
  }, {
    type: SidebarService
  }, {
    type: SidebarBackdropService
  }], {
    colorScheme: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    narrow: [{
      type: Input
    }],
    overlaid: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    unfoldable: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    getClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _SidebarBrandComponent = class _SidebarBrandComponent {
  constructor() {
    this.sidebarBrandClass = true;
    this.brandImg = false;
  }
  ngOnInit() {
    this.brandImg = Boolean(this.brandFull || this.brandNarrow);
  }
};
_SidebarBrandComponent.ɵfac = function SidebarBrandComponent_Factory(t) {
  return new (t || _SidebarBrandComponent)();
};
_SidebarBrandComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarBrandComponent,
  selectors: [["c-sidebar-brand"]],
  hostVars: 2,
  hostBindings: function SidebarBrandComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("sidebar-brand", ctx.sidebarBrandClass);
    }
  },
  inputs: {
    brandFull: "brandFull",
    brandNarrow: "brandNarrow",
    routerLink: "routerLink"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [[3, "routerLink"], [3, "cHtmlAttr", "ngClass"]],
  template: function SidebarBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, SidebarBrandComponent_Conditional_0_Template, 3, 3, "a", 0)(1, SidebarBrandComponent_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.brandImg ? 0 : 1);
    }
  },
  dependencies: [RouterLink, HtmlAttributesDirective2, NgClass],
  encapsulation: 2
});
var SidebarBrandComponent = _SidebarBrandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarBrandComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-brand",
      standalone: true,
      imports: [RouterLink, HtmlAttributesDirective2, NgClass],
      template: `@if (brandImg) {
  <a [routerLink]="routerLink">
    @if (brandFull) {
      <img [cHtmlAttr]="brandFull"
           [ngClass]="'sidebar-brand-full'">
    }
    @if (brandNarrow) {
      <img [cHtmlAttr]="brandNarrow"
           [ngClass]="'sidebar-brand-narrow'">
    }
  </a>
} @else {
  <ng-content />
}
`
    }]
  }], null, {
    brandFull: [{
      type: Input
    }],
    brandNarrow: [{
      type: Input
    }],
    routerLink: [{
      type: Input
    }],
    sidebarBrandClass: [{
      type: HostBinding,
      args: ["class.sidebar-brand"]
    }]
  });
})();
var _SidebarToggleDirective = class _SidebarToggleDirective {
  constructor(sidebarService) {
    this.sidebarService = sidebarService;
    this.toggle = "visible";
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.sidebarService.toggle({
      toggle: this.toggle,
      id: this.id
    });
  }
};
_SidebarToggleDirective.ɵfac = function SidebarToggleDirective_Factory(t) {
  return new (t || _SidebarToggleDirective)(ɵɵdirectiveInject(SidebarService));
};
_SidebarToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _SidebarToggleDirective,
  selectors: [["", "cSidebarToggle", ""]],
  hostBindings: function SidebarToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SidebarToggleDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
  },
  inputs: {
    id: [InputFlags.None, "cSidebarToggle", "id"],
    toggle: "toggle"
  },
  exportAs: ["cSidebarToggle"],
  standalone: true
});
var SidebarToggleDirective = _SidebarToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cSidebarToggle]",
      exportAs: "cSidebarToggle",
      standalone: true
    }]
  }], () => [{
    type: SidebarService
  }], {
    id: [{
      type: Input,
      args: ["cSidebarToggle"]
    }],
    toggle: [{
      type: Input
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _SidebarTogglerComponent = class _SidebarTogglerComponent {
  constructor() {
    this.role = "button";
    this.sidebarTogglerClass = true;
  }
};
_SidebarTogglerComponent.ɵfac = function SidebarTogglerComponent_Factory(t) {
  return new (t || _SidebarTogglerComponent)();
};
_SidebarTogglerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarTogglerComponent,
  selectors: [["c-sidebar-toggler"]],
  hostVars: 3,
  hostBindings: function SidebarTogglerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("sidebar-toggler", ctx.sidebarTogglerClass);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SidebarTogglerComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var SidebarTogglerComponent = _SidebarTogglerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarTogglerComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-toggler",
      template: ``,
      standalone: true
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    sidebarTogglerClass: [{
      type: HostBinding,
      args: ["class.sidebar-toggler"]
    }]
  });
})();
var _SidebarHeaderComponent = class _SidebarHeaderComponent {
  get hostClasses() {
    return {
      "sidebar-header": true
    };
  }
};
_SidebarHeaderComponent.ɵfac = function SidebarHeaderComponent_Factory(t) {
  return new (t || _SidebarHeaderComponent)();
};
_SidebarHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarHeaderComponent,
  selectors: [["c-sidebar-header"]],
  hostVars: 2,
  hostBindings: function SidebarHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function SidebarHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var SidebarHeaderComponent = _SidebarHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-header",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _SidebarFooterComponent = class _SidebarFooterComponent {
  constructor() {
  }
  get hostClasses() {
    return {
      "sidebar-footer": true
    };
  }
};
_SidebarFooterComponent.ɵfac = function SidebarFooterComponent_Factory(t) {
  return new (t || _SidebarFooterComponent)();
};
_SidebarFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarFooterComponent,
  selectors: [["c-sidebar-footer"]],
  hostVars: 2,
  hostBindings: function SidebarFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function SidebarFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var SidebarFooterComponent = _SidebarFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-footer",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _SidebarNavService = class _SidebarNavService {
};
_SidebarNavService.ɵfac = function SidebarNavService_Factory(t) {
  return new (t || _SidebarNavService)();
};
_SidebarNavService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarNavService,
  factory: _SidebarNavService.ɵfac
});
var SidebarNavService = _SidebarNavService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavService, [{
    type: Injectable
  }], null, null);
})();
var _SidebarNavHelper = class _SidebarNavHelper {
  constructor() {
    this.hasBadge = (item) => Boolean(item.badge);
    this.hasIcon = (item) => Boolean(item.icon) || item.icon === "";
    this.hasIconComponent = (item) => Boolean(item.iconComponent);
  }
  itemType(item) {
    if (item.divider) {
      return "divider";
    } else if (item.title) {
      return "title";
    } else if (item.children && item.children.length > 0) {
      return "group";
    } else if (item.label) {
      return "label";
    } else if (!Object.keys(item).length) {
      return "empty";
    } else {
      return "link";
    }
  }
  isActive(router, item) {
    return router.isActive(item.url, false);
  }
  getIconClass(item) {
    const classes = {
      "nav-icon": true
    };
    const icon = item.icon;
    classes[icon] = this.hasIcon(item);
    return classes;
  }
};
_SidebarNavHelper.ɵfac = function SidebarNavHelper_Factory(t) {
  return new (t || _SidebarNavHelper)();
};
_SidebarNavHelper.ɵprov = ɵɵdefineInjectable({
  token: _SidebarNavHelper,
  factory: _SidebarNavHelper.ɵfac
});
var SidebarNavHelper = _SidebarNavHelper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavHelper, [{
    type: Injectable
  }], null, null);
})();
var _SidebarNavGroupService = class _SidebarNavGroupService {
  constructor() {
    this.sidebarNavGroupState = new BehaviorSubject({});
    this.sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();
  }
  toggle(action) {
    this.sidebarNavGroupState.next(action);
  }
};
_SidebarNavGroupService.ɵfac = function SidebarNavGroupService_Factory(t) {
  return new (t || _SidebarNavGroupService)();
};
_SidebarNavGroupService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarNavGroupService,
  factory: _SidebarNavGroupService.ɵfac
});
var SidebarNavGroupService = _SidebarNavGroupService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavGroupService, [{
    type: Injectable
  }], () => [], null);
})();
var _SidebarNavIconPipe = class _SidebarNavIconPipe {
  transform(item, args) {
    const icon = item.icon;
    return {
      "nav-icon": true,
      [`${icon}`]: !!icon
    };
  }
};
_SidebarNavIconPipe.ɵfac = function SidebarNavIconPipe_Factory(t) {
  return new (t || _SidebarNavIconPipe)();
};
_SidebarNavIconPipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavIcon",
  type: _SidebarNavIconPipe,
  pure: true,
  standalone: true
});
var SidebarNavIconPipe = _SidebarNavIconPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavIconPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavIcon",
      standalone: true
    }]
  }], null, null);
})();
var _SidebarNavBadgePipe = class _SidebarNavBadgePipe {
  transform(item, args) {
    const badge = item.badge;
    return {
      badge: true,
      "ms-auto": true,
      "badge-sm": !badge.size,
      [`badge-${badge.size}`]: !!badge.size,
      [`bg-${badge.color}`]: !!badge.color,
      [`${badge.class}`]: !!badge.class
    };
  }
};
_SidebarNavBadgePipe.ɵfac = function SidebarNavBadgePipe_Factory(t) {
  return new (t || _SidebarNavBadgePipe)();
};
_SidebarNavBadgePipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavBadge",
  type: _SidebarNavBadgePipe,
  pure: true,
  standalone: true
});
var SidebarNavBadgePipe = _SidebarNavBadgePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavBadgePipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavBadge",
      standalone: true
    }]
  }], null, null);
})();
var _SidebarNavLinkPipe = class _SidebarNavLinkPipe {
  transform(item) {
    const disabled = item?.attributes?.disabled;
    return {
      "nav-link": true,
      disabled,
      "btn-link": disabled,
      [`nav-link-${item.variant}`]: !!item.variant
    };
  }
};
_SidebarNavLinkPipe.ɵfac = function SidebarNavLinkPipe_Factory(t) {
  return new (t || _SidebarNavLinkPipe)();
};
_SidebarNavLinkPipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavLink",
  type: _SidebarNavLinkPipe,
  pure: true,
  standalone: true
});
var SidebarNavLinkPipe = _SidebarNavLinkPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavLink",
      standalone: true
    }]
  }], null, null);
})();
var _SidebarNavLinkContentComponent = class _SidebarNavLinkContentComponent {
  constructor(helper) {
    this.helper = helper;
  }
};
_SidebarNavLinkContentComponent.ɵfac = function SidebarNavLinkContentComponent_Factory(t) {
  return new (t || _SidebarNavLinkContentComponent)(ɵɵdirectiveInject(SidebarNavHelper));
};
_SidebarNavLinkContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavLinkContentComponent,
  selectors: [["c-sidebar-nav-link-content"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SidebarNavHelper]), ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  template: function SidebarNavLinkContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SidebarNavLinkContentComponent_Conditional_0_Template, 2, 1, "ng-container");
    }
    if (rf & 2) {
      ɵɵconditional(0, true ? 0 : -1);
    }
  },
  encapsulation: 2
});
var SidebarNavLinkContentComponent = _SidebarNavLinkContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkContentComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-link-content",
      template: `
    @if (true) {
      <ng-container>{{ item?.name ?? '' }}</ng-container>
    }
  `,
      providers: [SidebarNavHelper],
      standalone: true
    }]
  }], () => [{
    type: SidebarNavHelper
  }], {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavLinkComponent = class _SidebarNavLinkComponent {
  set item(item) {
    this._item = JSON.parse(JSON.stringify(item));
  }
  get item() {
    return this._item;
  }
  constructor(router) {
    this.router = router;
    this._item = {};
    this.linkClick = new EventEmitter();
    this.navigationEndObservable = router.events.pipe(filter((event) => {
      return event instanceof NavigationEnd;
    }));
  }
  ngOnInit() {
    this.url = typeof this.item.url === "string" ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? "" : this.item.href || this.url;
    this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      const itemUrlArray = this.href.split(/[?#(;]/)[0].split("/");
      const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split("/");
      this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
    });
  }
  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }
  getLinkType() {
    return this.isDisabled() ? "disabled" : this.isExternalLink() ? "external" : "link";
  }
  isDisabled() {
    return this.item?.attributes?.["disabled"];
  }
  isExternalLink() {
    const linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
    return !!this.item.href || linkPath.substring(0, 4) === "http";
  }
  linkClicked() {
    this.linkClick.emit();
  }
};
_SidebarNavLinkComponent.ɵfac = function SidebarNavLinkComponent_Factory(t) {
  return new (t || _SidebarNavLinkComponent)(ɵɵdirectiveInject(Router));
};
_SidebarNavLinkComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavLinkComponent,
  selectors: [["c-sidebar-nav-link"]],
  inputs: {
    item: "item"
  },
  outputs: {
    linkClick: "linkClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SidebarNavHelper]), ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["iconTemplate", ""], [3, "ngClass", "cHtmlAttr"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "item"], [3, "ngClass"], [3, "ngClass", "href", "cHtmlAttr", "click"], ["routerLinkActive", "active", 3, "ngClass", "cHtmlAttr", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "routerLink", "routerLinkActiveOptions", "click"], [3, "cIcon", "name", "customClasses"]],
  template: function SidebarNavLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SidebarNavLinkComponent_Case_0_Template, 5, 11)(1, SidebarNavLinkComponent_Case_1_Template, 5, 12)(2, SidebarNavLinkComponent_Case_2_Template, 5, 23)(3, SidebarNavLinkComponent_ng_template_3_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      let SidebarNavLinkComponent_contFlowTmp;
      ɵɵconditional(0, (SidebarNavLinkComponent_contFlowTmp = ctx.linkType) === "disabled" ? 0 : SidebarNavLinkComponent_contFlowTmp === "external" ? 1 : 2);
    }
  },
  dependencies: [RouterModule, RouterLink, RouterLinkActive, HtmlAttributesDirective2, IconDirective, NgClass, NgTemplateOutlet, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe],
  encapsulation: 2
});
var SidebarNavLinkComponent = _SidebarNavLinkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-link",
      providers: [SidebarNavHelper],
      standalone: true,
      imports: [RouterModule, HtmlAttributesDirective2, IconDirective, NgClass, NgTemplateOutlet, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe],
      template: `@switch (linkType) {
  @case ('disabled') {
    <a [ngClass]="item | cSidebarNavLink"
       [cHtmlAttr]="item.attributes ?? {}"
    >
      <ng-container *ngTemplateOutlet="iconTemplate; context: {$implicit: item}" />
      <c-sidebar-nav-link-content [item]="item" />
      @if (item.badge) {
        <span [ngClass]="item | cSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
  }
  @case ('external') {
    <a [ngClass]="item | cSidebarNavLink"
       [href]="href"
       [cHtmlAttr]="item.attributes ?? {}"
       (click)="linkClicked()"
    >
      <ng-container *ngTemplateOutlet="iconTemplate; context: {$implicit: item}" />
      <c-sidebar-nav-link-content [item]="item" />
      @if (item.badge) {
        <span [ngClass]="item | cSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
  }
  @default {
    <a [ngClass]="item | cSidebarNavLink"
       [cHtmlAttr]="item.attributes ?? {}"
       [target]="item.attributes?.['target']"
       [queryParams]="item.linkProps?.queryParams ?? null"
       [fragment]="item.linkProps?.fragment"
       [queryParamsHandling]="item.linkProps?.queryParamsHandling"
       [preserveFragment]="item.linkProps?.preserveFragment ?? false"
       [skipLocationChange]="item.linkProps?.skipLocationChange ?? false"
       [replaceUrl]="item.linkProps?.replaceUrl ?? false"
       [state]="item.linkProps?.state ?? {}"
       [routerLink]="item.url"
       routerLinkActive="active"
       [routerLinkActiveOptions]="item.linkProps?.routerLinkActiveOptions ?? { exact: false }"
       (click)="linkClicked()"
    >
      <!--    [class.active]="linkActive"-->
      <ng-container *ngTemplateOutlet="iconTemplate ; context: {$implicit: item}" />
      <c-sidebar-nav-link-content [item]="item" />
      @if (item.badge) {
        <span [ngClass]="item | cSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
  }
}

<ng-template #iconTemplate let-item>
  @if (item?.icon) {
    <i [ngClass]="item | cSidebarNavIcon"></i>
  }
  @if (item?.iconComponent) {
    <svg
      [cIcon]="item.iconComponent?.content"
      [name]="item.iconComponent?.name"
      [customClasses]="item | cSidebarNavIcon"
    ></svg>
  }
  @if (!item?.icon && !item?.iconComponent) {
    <span [ngClass]="item | cSidebarNavIcon"></span>
  }
</ng-template>
`
    }]
  }], () => [{
    type: Router
  }], {
    item: [{
      type: Input
    }],
    linkClick: [{
      type: Output
    }]
  });
})();
var _SidebarNavLabelComponent = class _SidebarNavLabelComponent {
  constructor(helper) {
    this.helper = helper;
    this.classes = {
      "c-nav-label": true,
      "c-active": true
    };
    this.iconClasses = {};
  }
  ngOnInit() {
    this.iconClasses = this.helper.getIconClass(this.item);
  }
  getItemClass() {
    const itemClass = this.item.class;
    this.classes[itemClass] = !!itemClass;
    return this.classes;
  }
  getLabelIconClass() {
    const variant = `text-${this.item.label.variant}`;
    this.iconClasses[variant] = !!this.item.label.variant;
    const labelClass = this.item.label.class;
    this.iconClasses[labelClass] = !!labelClass;
    return this.iconClasses;
  }
};
_SidebarNavLabelComponent.ɵfac = function SidebarNavLabelComponent_Factory(t) {
  return new (t || _SidebarNavLabelComponent)(ɵɵdirectiveInject(SidebarNavHelper));
};
_SidebarNavLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavLabelComponent,
  selectors: [["c-sidebar-nav-label"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 6,
  consts: [[3, "ngClass", "href", "cHtmlAttr"], [3, "ngClass"]],
  template: function SidebarNavLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "a", 0);
      ɵɵtemplate(1, SidebarNavLabelComponent_Conditional_1_Template, 1, 1, "i", 1);
      ɵɵelementContainerStart(2);
      ɵɵtext(3);
      ɵɵelementContainerEnd();
      ɵɵtemplate(4, SidebarNavLabelComponent_Conditional_4_Template, 3, 4, "span", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵpropertyInterpolate("href", ctx.item.url, ɵɵsanitizeUrl);
      ɵɵproperty("ngClass", ctx.getItemClass())("cHtmlAttr", ctx.item.attributes);
      ɵɵadvance();
      ɵɵconditional(1, ctx.helper.hasIcon(ctx.item) ? 1 : -1);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.item.name);
      ɵɵadvance();
      ɵɵconditional(4, ctx.helper.hasBadge(ctx.item) ? 4 : -1);
    }
  },
  dependencies: [HtmlAttributesDirective2, SidebarNavBadgePipe, NgClass],
  encapsulation: 2
});
var SidebarNavLabelComponent = _SidebarNavLabelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLabelComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-label",
      standalone: true,
      imports: [HtmlAttributesDirective2, SidebarNavBadgePipe, NgClass],
      template: '<a [ngClass]="getItemClass()"\n   href="{{item.url}}"\n   [cHtmlAttr]="item.attributes">\n  @if (helper.hasIcon(item)) {\n    <i [ngClass]="getLabelIconClass()"></i>\n  }\n  <ng-container>{{ item.name }}</ng-container>\n  @if (helper.hasBadge(item)) {\n    <span [ngClass]="item | cSidebarNavBadge">{{ item.badge.text }}</span>\n  }\n</a>\n'
    }]
  }], () => [{
    type: SidebarNavHelper
  }], {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavTitleComponent = class _SidebarNavTitleComponent {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    const nativeElement = this.el.nativeElement;
    const name = this.renderer.createText(this.item.name);
    if (this.item.class) {
      const classes = this.item.class;
      this.renderer.addClass(nativeElement, classes);
    }
    if (this.item.wrapper) {
      const wrapper = this.renderer.createElement(this.item.wrapper.element);
      this.addAttribs(this.item.wrapper.attributes, wrapper);
      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(nativeElement, wrapper);
    } else {
      this.renderer.appendChild(nativeElement, name);
    }
  }
  addAttribs(attribs, element) {
    if (attribs) {
      for (const attr in attribs) {
        if (attr === "style" && typeof attribs[attr] === "object") {
          this.setStyle(attribs[attr], element);
        } else if (attr === "class") {
          this.addClass(attribs[attr], element);
        } else {
          this.setAttrib(attr, attribs[attr], element);
        }
      }
    }
  }
  setStyle(styles, el) {
    for (const style2 in styles) {
      if (style2) {
        this.renderer.setStyle(el, style2, styles[style2]);
      }
    }
  }
  addClass(classes, el) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.renderer.addClass(el, element);
    });
  }
  setAttrib(key, value, el) {
    this.renderer.setAttribute(el, key, value);
  }
};
_SidebarNavTitleComponent.ɵfac = function SidebarNavTitleComponent_Factory(t) {
  return new (t || _SidebarNavTitleComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_SidebarNavTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavTitleComponent,
  selectors: [["c-sidebar-nav-title"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SidebarNavTitleComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var SidebarNavTitleComponent = _SidebarNavTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavTitleComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-title",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavDividerComponent = class _SidebarNavDividerComponent {
};
_SidebarNavDividerComponent.ɵfac = function SidebarNavDividerComponent_Factory(t) {
  return new (t || _SidebarNavDividerComponent)();
};
_SidebarNavDividerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavDividerComponent,
  selectors: [["c-sidebar-nav-divider"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SidebarNavDividerComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var SidebarNavDividerComponent = _SidebarNavDividerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavDividerComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-divider",
      template: ``,
      standalone: true
    }]
  }], null, {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavItemClassPipe = class _SidebarNavItemClassPipe {
  constructor(helper) {
    this.helper = helper;
  }
  // transform(item: any, ...args: any[]): any {
  transform(item, args) {
    const itemType = this.helper.itemType(item);
    let itemClass;
    if (["divider", "title"].includes(itemType)) {
      itemClass = `nav-${itemType}`;
    } else if (itemType === "group") {
      itemClass = "";
    } else {
      itemClass = "nav-item";
    }
    return item.class ? `${itemClass} ${item.class}` : itemClass;
  }
};
_SidebarNavItemClassPipe.ɵfac = function SidebarNavItemClassPipe_Factory(t) {
  return new (t || _SidebarNavItemClassPipe)(ɵɵdirectiveInject(SidebarNavHelper, 16));
};
_SidebarNavItemClassPipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavItemClass",
  type: _SidebarNavItemClassPipe,
  pure: true,
  standalone: true
});
var SidebarNavItemClassPipe = _SidebarNavItemClassPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavItemClassPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavItemClass",
      standalone: true
    }]
  }], () => [{
    type: SidebarNavHelper
  }], null);
})();
var _SidebarNavGroupComponent = class _SidebarNavGroupComponent {
  constructor(router, renderer, hostElement, helper, sidebarNavGroupService) {
    this.router = router;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.helper = helper;
    this.sidebarNavGroupService = sidebarNavGroupService;
    this.dropdownMode = "path";
    this.navItems = [];
    this.display = {
      display: "block"
    };
    this.navigationEndObservable = router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }
  get hostClasses() {
    return {
      "nav-group": true,
      show: this.open
    };
  }
  ngOnInit() {
    this.navItems = [...this.item.children];
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      if (this.dropdownMode !== "none") {
        const samePath = this.samePath(event.url);
        this.openGroup(samePath);
      }
    });
    if (this.samePath(this.router.routerState.snapshot.url)) {
      this.openGroup(true);
    }
    this.navGroupSubscription = this.sidebarNavGroupService.sidebarNavGroupState$.subscribe((next) => {
      if (this.dropdownMode === "close" && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
        if (next.sidebarNavGroup.item.url.startsWith(this.item.url)) {
          return;
        }
        if (this.samePath(this.router.routerState.snapshot.url)) {
          this.openGroup(true);
          return;
        }
        this.openGroup(false);
      }
    });
  }
  samePath(url) {
    const itemArray = this.item.url?.split("/");
    const urlArray = url.split("/");
    return itemArray?.every((value, index) => {
      return value === urlArray[index];
    });
  }
  openGroup(open) {
    this.open = open;
  }
  toggleGroup($event) {
    $event.preventDefault();
    this.openGroup(!this.open);
    if (this.open) {
      this.sidebarNavGroupService.toggle({
        open: this.open,
        sidebarNavGroup: this
      });
    }
  }
  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }
  onAnimationStart($event) {
    this.display = {
      display: "block"
    };
    if ($event.toState === "open") {
      const host = this.sidebarNav.nativeElement;
      this.renderer.setStyle(host, "height", `${host["scrollHeight"]}px`);
    }
  }
  onAnimationDone($event) {
    if ($event.toState === "open") {
      const host = this.sidebarNav.nativeElement;
      this.renderer.setStyle(host, "height", "auto");
    }
    if ($event.toState === "closed") {
      setTimeout(() => {
        this.display = null;
      });
    }
  }
};
_SidebarNavGroupComponent.ɵfac = function SidebarNavGroupComponent_Factory(t) {
  return new (t || _SidebarNavGroupComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SidebarNavHelper), ɵɵdirectiveInject(SidebarNavGroupService));
};
_SidebarNavGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavGroupComponent,
  selectors: [["c-sidebar-nav-group"]],
  viewQuery: function SidebarNavGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(SidebarNavComponent, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sidebarNav = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function SidebarNavGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    item: "item",
    dropdownMode: "dropdownMode",
    show: "show"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SidebarNavHelper, SidebarNavGroupService]), ɵɵStandaloneFeature],
  decls: 8,
  vars: 12,
  consts: [["href", "", 1, "nav-link", "nav-group-toggle", 3, "cHtmlAttr", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [3, "dropdownMode", "groupItems", "navItems", "ngStyle"], ["iconTemplate", ""], [3, "cIcon", "customClasses", "name"]],
  template: function SidebarNavGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "a", 0);
      ɵɵlistener("click", function SidebarNavGroupComponent_Template_a_click_0_listener($event) {
        return ctx.toggleGroup($event);
      });
      ɵɵtemplate(1, SidebarNavGroupComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
      ɵɵelementContainerStart(2);
      ɵɵtext(3);
      ɵɵelementContainerEnd();
      ɵɵtemplate(4, SidebarNavGroupComponent_Conditional_4_Template, 3, 4, "span", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "c-sidebar-nav", 3);
      ɵɵlistener("@openClose.done", function SidebarNavGroupComponent_Template_c_sidebar_nav_animation_openClose_done_5_listener($event) {
        return ctx.onAnimationDone($event);
      })("@openClose.start", function SidebarNavGroupComponent_Template_c_sidebar_nav_animation_openClose_start_5_listener($event) {
        return ctx.onAnimationStart($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(6, SidebarNavGroupComponent_ng_template_6_Template, 3, 3, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(7);
      ɵɵproperty("cHtmlAttr", ctx.item.attributes);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c9, ctx.item));
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.item.name);
      ɵɵadvance();
      ɵɵconditional(4, ctx.helper.hasBadge(ctx.item) ? 4 : -1);
      ɵɵadvance();
      ɵɵproperty("@openClose", ctx.open ? "open" : "closed")("dropdownMode", ctx.dropdownMode)("groupItems", true)("navItems", ctx.navItems)("ngStyle", ctx.display);
    }
  },
  dependencies: () => [HtmlAttributesDirective2, IconDirective, NgTemplateOutlet, NgClass, SidebarNavIconPipe, SidebarNavBadgePipe, SidebarNavComponent, NgStyle],
  styles: [".nav-group-toggle[_ngcontent-%COMP%]{cursor:pointer}.nav-group-items[_ngcontent-%COMP%]{display:block}"],
  data: {
    animation: [trigger("openClose", [state("open", style({
      height: "*"
    })), state("closed", style({
      height: "0px"
    })), transition("open <=> closed", [animate(".15s ease")])])]
  }
});
var SidebarNavGroupComponent = _SidebarNavGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-group",
      providers: [SidebarNavHelper, SidebarNavGroupService],
      standalone: true,
      imports: [HtmlAttributesDirective2, IconDirective, NgTemplateOutlet, NgClass, SidebarNavIconPipe, SidebarNavBadgePipe, forwardRef(() => SidebarNavComponent), NgStyle],
      animations: [trigger("openClose", [state("open", style({
        height: "*"
      })), state("closed", style({
        height: "0px"
      })), transition("open <=> closed", [animate(".15s ease")])])],
      template: `<a (click)="toggleGroup($event)"
   [cHtmlAttr]="item.attributes"
   class="nav-link nav-group-toggle"
   href>
  <ng-container *ngTemplateOutlet="iconTemplate ; context: {$implicit: item}" />
  <ng-container>{{ item.name }}</ng-container>
  @if (helper.hasBadge(item)) {
    <span [ngClass]="item | cSidebarNavBadge">{{ item.badge.text }}</span>
  }
</a>
<c-sidebar-nav
  (@openClose.done)="onAnimationDone($event)"
  (@openClose.start)="onAnimationStart($event)"
  [@openClose]="open ? 'open' : 'closed'"
  [dropdownMode]="dropdownMode"
  [groupItems]="true"
  [navItems]="navItems"
  [ngStyle]="display"
/>

<ng-template #iconTemplate let-item>
  @if (item?.icon) {
    <i [ngClass]="item | cSidebarNavIcon"></i>
  }
  @if (item?.iconComponent) {
    <svg
      [cIcon]="item.iconComponent?.content"
      [customClasses]="item | cSidebarNavIcon"
      [name]="item.iconComponent?.name"
    />
  }
  @if (!item?.icon && !item?.iconComponent) {
    <span [ngClass]="item | cSidebarNavIcon"></span>
  }
</ng-template>
`,
      styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"]
    }]
  }], () => [{
    type: Router
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: SidebarNavHelper
  }, {
    type: SidebarNavGroupService
  }], {
    item: [{
      type: Input
    }],
    dropdownMode: [{
      type: Input
    }],
    show: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    sidebarNav: [{
      type: ViewChild,
      args: [forwardRef(() => SidebarNavComponent), {
        read: ElementRef
      }]
    }]
  });
})();
var _SidebarNavComponent = class _SidebarNavComponent {
  constructor(sidebar, helper, router, renderer, hostElement, sidebarService) {
    this.sidebar = sidebar;
    this.helper = helper;
    this.router = router;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.sidebarService = sidebarService;
    this.navItems = [];
    this.dropdownMode = "path";
    this.role = "nav";
    this.navItemsArray = [];
  }
  get hostClasses() {
    return {
      "sidebar-nav": !this.groupItems,
      compact: !this.groupItems && !!this.compact
    };
  }
  get sidebarNavGroupItemsClass() {
    return !!this.groupItems;
  }
  ngOnChanges(changes) {
    this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
  }
  hideMobile() {
    if (this.sidebar && this.sidebar.sidebarState.mobile) {
      this.sidebarService.toggle({
        toggle: "visible",
        sidebar: this.sidebar
      });
    }
  }
};
_SidebarNavComponent.ɵfac = function SidebarNavComponent_Factory(t) {
  return new (t || _SidebarNavComponent)(ɵɵdirectiveInject(SidebarComponent, 8), ɵɵdirectiveInject(SidebarNavHelper), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SidebarService));
};
_SidebarNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavComponent,
  selectors: [["c-sidebar-nav"]],
  hostVars: 5,
  hostBindings: function SidebarNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
      ɵɵclassProp("nav-group-items", ctx.sidebarNavGroupItemsClass);
    }
  },
  inputs: {
    navItems: "navItems",
    dropdownMode: "dropdownMode",
    groupItems: "groupItems",
    compact: "compact"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 0,
  consts: [["routerLinkActive", "show", 3, "dropdownMode", "item", "ngClass", "routerLinkActiveOptions"], ["rla", "routerLinkActive"], [3, "cHtmlAttr", "item", "ngClass"], [3, "item", "ngClass"], [3, "item", "ngClass", "linkClick"]],
  template: function SidebarNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵrepeaterCreate(0, SidebarNavComponent_For_1_Template, 6, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.navItemsArray);
    }
  },
  dependencies: [NgClass, HtmlAttributesDirective2, SidebarNavLinkComponent, SidebarNavLabelComponent, SidebarNavTitleComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavItemClassPipe, RouterModule, RouterLinkActive],
  encapsulation: 2
});
var SidebarNavComponent = _SidebarNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav",
      standalone: true,
      imports: [NgClass, HtmlAttributesDirective2, SidebarNavLinkComponent, SidebarNavLabelComponent, SidebarNavTitleComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavItemClassPipe, RouterModule],
      template: `@for (item of navItemsArray; track item) {
  @switch (helper.itemType(item)) {
    @case ('group') {
      <c-sidebar-nav-group
        #rla="routerLinkActive"
        [dropdownMode]="dropdownMode"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="show"
      />
    }
    @case ('divider') {
      <c-sidebar-nav-divider
        [cHtmlAttr]="item.attributes ?? {}"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
    @case ('title') {
      <c-sidebar-nav-title
        [cHtmlAttr]="item.attributes ?? {}"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
    @case ('label') {
      <c-sidebar-nav-label
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
    @case ('empty') {
      <ng-container />
    }
    @default {
      <c-sidebar-nav-link
        (linkClick)="hideMobile()"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
  }
}
<ng-content />
`
    }]
  }], () => [{
    type: SidebarComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: SidebarNavHelper
  }, {
    type: Router
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: SidebarService
  }], {
    navItems: [{
      type: Input
    }],
    dropdownMode: [{
      type: Input
    }],
    groupItems: [{
      type: Input
    }],
    compact: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    sidebarNavGroupItemsClass: [{
      type: HostBinding,
      args: ["class.nav-group-items"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var _SidebarModule = class _SidebarModule {
};
_SidebarModule.ɵfac = function SidebarModule_Factory(t) {
  return new (t || _SidebarModule)();
};
_SidebarModule.ɵmod = ɵɵdefineNgModule({
  type: _SidebarModule,
  imports: [SidebarComponent, SidebarBrandComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavBadgePipe, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent, SidebarToggleDirective, SidebarTogglerComponent],
  exports: [SidebarComponent, SidebarToggleDirective, SidebarTogglerComponent, SidebarBrandComponent, SidebarNavComponent, SidebarHeaderComponent, SidebarFooterComponent]
});
_SidebarModule.ɵinj = ɵɵdefineInjector({
  providers: [SidebarService, SidebarNavHelper, SidebarNavGroupService],
  imports: [SidebarNavComponent, SidebarNavGroupComponent, SidebarNavLinkComponent]
});
var SidebarModule = _SidebarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [SidebarComponent, SidebarBrandComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavBadgePipe, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent, SidebarToggleDirective, SidebarTogglerComponent],
      exports: [SidebarComponent, SidebarToggleDirective, SidebarTogglerComponent, SidebarBrandComponent, SidebarNavComponent, SidebarHeaderComponent, SidebarFooterComponent],
      providers: [SidebarService, SidebarNavHelper, SidebarNavGroupService]
    }]
  }], null, null);
})();
var _TableColorDirective = class _TableColorDirective {
  get hostClasses() {
    return {
      [`table-${this.color}`]: !!this.color
    };
  }
};
_TableColorDirective.ɵfac = function TableColorDirective_Factory(t) {
  return new (t || _TableColorDirective)();
};
_TableColorDirective.ɵdir = ɵɵdefineDirective({
  type: _TableColorDirective,
  selectors: [["", "cTableColor", ""]],
  hostVars: 2,
  hostBindings: function TableColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [InputFlags.None, "cTableColor", "color"]
  },
  standalone: true
});
var TableColorDirective = _TableColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTableColor]",
      standalone: true
    }]
  }], null, {
    color: [{
      type: Input,
      args: ["cTableColor"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TableActiveDirective = class _TableActiveDirective {
  constructor() {
    this.active = false;
  }
  get hostClasses() {
    return {
      "table-active": this.active
    };
  }
};
_TableActiveDirective.ɵfac = function TableActiveDirective_Factory(t) {
  return new (t || _TableActiveDirective)();
};
_TableActiveDirective.ɵdir = ɵɵdefineDirective({
  type: _TableActiveDirective,
  selectors: [["", "cTableActive", ""]],
  hostVars: 2,
  hostBindings: function TableActiveDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: [InputFlags.HasDecoratorInputTransform, "cTableActive", "active", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var TableActiveDirective = _TableActiveDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableActiveDirective, [{
    type: Directive,
    args: [{
      selector: "[cTableActive]",
      standalone: true
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        alias: "cTableActive",
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TableDirective = class _TableDirective {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.bordered = false;
    this.borderless = false;
    this.hover = false;
    this.small = false;
    this.striped = false;
    this.stripedColumns = false;
  }
  get hostClasses() {
    return {
      table: true,
      [`align-${this.align}`]: !!this.align,
      [`caption-${this.caption}`]: !!this.caption,
      [`border-${this.borderColor}`]: !!this.borderColor,
      "table-bordered": this.bordered,
      "table-borderless": this.borderless,
      [`table-${this.color}`]: !!this.color,
      "table-hover": this.hover,
      "table-sm": this.small,
      "table-striped": this.striped,
      "table-striped-columns": this.stripedColumns
    };
  }
  ngOnInit() {
    this.setResponsiveWrapper();
  }
  // todo
  setResponsiveWrapper() {
    if (!!this.responsive) {
      const nativeElement = this.hostElement.nativeElement;
      const wrapper = this.renderer.createElement("div");
      const className = this.responsive === true ? "table-responsive" : `table-responsive-${this.responsive}`;
      this.renderer.addClass(wrapper, className);
      const parentNode = this.renderer.parentNode(nativeElement);
      this.renderer.appendChild(parentNode, wrapper);
      this.renderer.insertBefore(parentNode, wrapper, nativeElement);
      this.renderer.appendChild(wrapper, nativeElement);
    }
  }
};
_TableDirective.ɵfac = function TableDirective_Factory(t) {
  return new (t || _TableDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_TableDirective.ɵdir = ɵɵdefineDirective({
  type: _TableDirective,
  selectors: [["table", "cTable", ""]],
  hostVars: 2,
  hostBindings: function TableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    align: "align",
    borderColor: "borderColor",
    bordered: [InputFlags.HasDecoratorInputTransform, "bordered", "bordered", booleanAttribute],
    borderless: [InputFlags.HasDecoratorInputTransform, "borderless", "borderless", booleanAttribute],
    caption: "caption",
    color: "color",
    hover: [InputFlags.HasDecoratorInputTransform, "hover", "hover", booleanAttribute],
    responsive: "responsive",
    small: [InputFlags.HasDecoratorInputTransform, "small", "small", booleanAttribute],
    striped: [InputFlags.HasDecoratorInputTransform, "striped", "striped", booleanAttribute],
    stripedColumns: [InputFlags.HasDecoratorInputTransform, "stripedColumns", "stripedColumns", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var TableDirective = _TableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDirective, [{
    type: Directive,
    args: [{
      selector: "table[cTable]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    align: [{
      type: Input
    }],
    borderColor: [{
      type: Input
    }],
    bordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    borderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    caption: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    hover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsive: [{
      type: Input
    }],
    small: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    striped: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stripedColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TableModule = class _TableModule {
};
_TableModule.ɵfac = function TableModule_Factory(t) {
  return new (t || _TableModule)();
};
_TableModule.ɵmod = ɵɵdefineNgModule({
  type: _TableModule,
  imports: [TableDirective, TableColorDirective, TableActiveDirective],
  exports: [TableDirective, TableColorDirective, TableActiveDirective]
});
_TableModule.ɵinj = ɵɵdefineInjector({});
var TableModule = _TableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      exports: [TableDirective, TableColorDirective, TableActiveDirective],
      imports: [TableDirective, TableColorDirective, TableActiveDirective]
    }]
  }], null, null);
})();
var _TabService = class _TabService {
  constructor() {
    this.activeTabPaneIdx = new Subject();
    this.activeTabPaneIdx$ = this.activeTabPaneIdx.asObservable();
  }
  setActiveTabIdx(tabContentState) {
    this.activeTabPaneIdx.next(tabContentState);
  }
};
_TabService.ɵfac = function TabService_Factory(t) {
  return new (t || _TabService)();
};
_TabService.ɵprov = ɵɵdefineInjectable({
  token: _TabService,
  factory: _TabService.ɵfac,
  providedIn: "root"
});
var TabService = _TabService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _TabPaneComponent = class _TabPaneComponent {
  constructor(changeDetectorRef, tabService) {
    this.changeDetectorRef = changeDetectorRef;
    this.tabService = tabService;
    this._active = false;
    this.subscribeTabService();
  }
  set active(value) {
    const newValue = coerceBooleanProperty(value);
    if (this._active !== newValue) {
      this._active = newValue;
      this.changeDetectorRef.markForCheck();
    }
  }
  get active() {
    return this._active;
  }
  get hostClasses() {
    return {
      "tab-pane": true,
      fade: true,
      show: this.active,
      active: this.active
    };
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContent) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
};
_TabPaneComponent.ɵfac = function TabPaneComponent_Factory(t) {
  return new (t || _TabPaneComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TabService));
};
_TabPaneComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabPaneComponent,
  selectors: [["c-tab-pane"]],
  hostVars: 2,
  hostBindings: function TabPaneComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  exportAs: ["cTabPane"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function TabPaneComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var TabPaneComponent = _TabPaneComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPaneComponent, [{
    type: Component,
    args: [{
      selector: "c-tab-pane",
      template: `
    <ng-content></ng-content>`,
      exportAs: "cTabPane",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TabService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TabContentComponent = class _TabContentComponent {
  /**
   * Set active tabPane index
   * @type number
   */
  set activeTabPaneIdx(value) {
    const newValue = coerceNumberProperty(value);
    if (this._activeTabPaneIdx != newValue) {
      this._activeTabPaneIdx = newValue;
      this.activeTabPaneIdxChange.emit(newValue);
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    }
  }
  get activeTabPaneIdx() {
    return this._activeTabPaneIdx;
  }
  constructor(changeDetectorRef, tabService) {
    this.changeDetectorRef = changeDetectorRef;
    this.tabService = tabService;
    this._activeTabPaneIdx = -1;
    this.activeTabPaneIdxChange = new EventEmitter();
  }
  get hostClasses() {
    return {
      "tab-content": true
    };
  }
  ngAfterContentInit() {
    this.subscribeTabService();
  }
  ngAfterContentChecked() {
    this.panes?.forEach((tabPane, index) => {
      tabPane.tabContent = this;
      tabPane.tabPaneIdx = index;
    });
    this.refreshTabPaneActive(this.activeTabPaneIdx);
    this.tabService.setActiveTabIdx({
      tabContent: this,
      activeIdx: this.activeTabPaneIdx
    });
  }
  ngOnChanges(changes) {
    if (changes["activeTabPaneIdx"]?.currentValue) {
      this.tabService.setActiveTabIdx({
        tabContent: this,
        activeIdx: changes["activeTabPaneIdx"].currentValue
      });
    }
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (this === tabContentState.tabContent) {
          this.activeTabPaneIdx = tabContentState.activeIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
  refreshTabPaneActive(idx) {
    this.panes?.forEach((tabPane, index) => {
      tabPane.active = idx === index;
    });
  }
};
_TabContentComponent.ɵfac = function TabContentComponent_Factory(t) {
  return new (t || _TabContentComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TabService));
};
_TabContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabContentComponent,
  selectors: [["c-tab-content"]],
  contentQueries: function TabContentComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabPaneComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panes = _t);
    }
  },
  hostVars: 2,
  hostBindings: function TabContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    activeTabPaneIdx: "activeTabPaneIdx"
  },
  outputs: {
    activeTabPaneIdxChange: "activeTabPaneIdxChange"
  },
  exportAs: ["cTabContent"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function TabContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
var TabContentComponent = _TabContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentComponent, [{
    type: Component,
    args: [{
      selector: "c-tab-content",
      template: `<ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "cTabContent",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TabService
  }], {
    activeTabPaneIdx: [{
      type: Input
    }],
    activeTabPaneIdxChange: [{
      type: Output
    }],
    panes: [{
      type: ContentChildren,
      args: [TabPaneComponent]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TabContentRefDirective = class _TabContentRefDirective {
  constructor(changeDetectorRef, tabService) {
    this.changeDetectorRef = changeDetectorRef;
    this.tabService = tabService;
    this._active = false;
    this._disabled = false;
    this.tabPaneIdx = -1;
    this.subscribeTabService();
  }
  /**
   * Set active state of tab content
   * @type boolean
   */
  set active(value) {
    const newValue = coerceBooleanProperty(value);
    if (this._active !== newValue) {
      this._active = newValue;
      this.changeDetectorRef.detectChanges();
    }
  }
  get active() {
    return this._active;
  }
  /**
   * Set disabled state of tab content
   * @type boolean
   */
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled() {
    return this._disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
  }
  get hostClasses() {
    return {
      active: this.active,
      disabled: this.disabled
    };
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  ngOnChanges(changes) {
    if (changes["active"]?.currentValue) {
      this.setActiveTabPane();
    }
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.setActiveTabPane();
  }
  setActiveTabPane() {
    setTimeout(() => {
      if (this.tabPaneIdx < this.tabContentRef.panes.length) {
        this.active = true;
        this.tabService.setActiveTabIdx({
          tabContent: this.tabContentRef,
          activeIdx: this.tabPaneIdx
        });
      } else {
        this.active = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContentRef) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
};
_TabContentRefDirective.ɵfac = function TabContentRefDirective_Factory(t) {
  return new (t || _TabContentRefDirective)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TabService));
};
_TabContentRefDirective.ɵdir = ɵɵdefineDirective({
  type: _TabContentRefDirective,
  selectors: [["", "cTabContent", ""]],
  hostVars: 5,
  hostBindings: function TabContentRefDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TabContentRefDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("tabindex", ctx.getTabindex);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    tabContentRef: [InputFlags.None, "cTabContent", "tabContentRef"],
    active: "active",
    disabled: "disabled",
    tabPaneIdx: "tabPaneIdx"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var TabContentRefDirective = _TabContentRefDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentRefDirective, [{
    type: Directive,
    args: [{
      selector: "[cTabContent]",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TabService
  }], {
    tabContentRef: [{
      type: Input,
      args: ["cTabContent"]
    }],
    active: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabPaneIdx: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _TabsModule = class _TabsModule {
};
_TabsModule.ɵfac = function TabsModule_Factory(t) {
  return new (t || _TabsModule)();
};
_TabsModule.ɵmod = ɵɵdefineNgModule({
  type: _TabsModule,
  imports: [TabContentComponent, TabContentRefDirective, TabPaneComponent],
  exports: [TabContentComponent, TabPaneComponent, TabContentRefDirective]
});
_TabsModule.ɵinj = ɵɵdefineInjector({
  providers: [TabService]
});
var TabsModule = _TabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [TabContentComponent, TabContentRefDirective, TabPaneComponent],
      exports: [TabContentComponent, TabPaneComponent, TabContentRefDirective],
      providers: [TabService]
    }]
  }], null, null);
})();
var _ToasterService = class _ToasterService {
  constructor() {
    this.toasterState = new BehaviorSubject({});
    this.toasterState$ = this.toasterState.asObservable();
  }
  setState(state2) {
    this.toasterState.next(__spreadValues({}, state2));
  }
};
_ToasterService.ɵfac = function ToasterService_Factory(t) {
  return new (t || _ToasterService)();
};
_ToasterService.ɵprov = ɵɵdefineInjectable({
  token: _ToasterService,
  factory: _ToasterService.ɵfac,
  providedIn: "root"
});
var ToasterService = _ToasterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _ToastComponent = class _ToastComponent {
  constructor(hostElement, renderer, toasterService, changeDetectorRef) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.toasterService = toasterService;
    this.changeDetectorRef = changeDetectorRef;
    this.autohide = true;
    this.color = "";
    this.delay = 5e3;
    this.fade = true;
    this._visible = false;
    this.visibleChange = new EventEmitter();
    this.timer = new EventEmitter();
  }
  /**
   * Toggle the visibility of component.
   * @type boolean
   */
  set visible(value) {
    const newValue = coerceBooleanProperty(value);
    if (this._visible !== newValue) {
      this._visible = newValue;
      newValue ? this.setTimer() : this.clearTimer();
      this.visibleChange.emit(newValue);
      this.changeDetectorRef.markForCheck();
    }
  }
  get visible() {
    return this._visible;
  }
  get clock() {
    return this._clock;
  }
  set clock(value) {
    this._clock = value;
    this.timer.emit(this._clock);
    this.changeDetectorRef.markForCheck();
  }
  get animationDisabled() {
    return !this.fade;
  }
  get animateType() {
    return this.visible ? "show" : "hide";
  }
  onMouseOver() {
    this.clearTimer();
  }
  onMouseOut() {
    this.setTimer();
  }
  get hostClasses() {
    return {
      toast: true,
      show: true,
      [`bg-${this.color}`]: !!this.color,
      "border-0": !!this.color
    };
  }
  ngOnInit() {
    if (this.visible) {
      this.toasterService.setState({
        toast: this,
        show: this.visible,
        placement: this.placement
      });
      this.clearTimer();
      this.setTimer();
    }
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  setTimer() {
    this.clearTimer();
    if (this.autohide && this.visible) {
      this.timerId = this.delay > 0 ? setTimeout(() => this.onClose(), this.delay) : void 0;
      this.setClock();
    }
  }
  clearTimer() {
    this.clearClock();
    clearTimeout(this.timerId);
    this.timerId = void 0;
  }
  onClose() {
    this.clearTimer();
    this.toasterService.setState({
      toast: this,
      show: false,
      placement: this.placement
    });
  }
  setClock() {
    this.clearClock();
    this.clock = 0;
    this.clockId = setInterval(() => {
      this.clock += 1;
      this.changeDetectorRef.markForCheck();
    }, 1e3);
    this.clockTimerId = setTimeout(() => {
      this.clearClock();
    }, this.delay);
  }
  clearClock() {
    clearTimeout(this.clockTimerId);
    clearInterval(this.clockId);
    this.clockId = void 0;
  }
};
_ToastComponent.ɵfac = function ToastComponent_Factory(t) {
  return new (t || _ToastComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_ToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastComponent,
  selectors: [["c-toast"]],
  hostVars: 4,
  hostBindings: function ToastComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseover", function ToastComponent_mouseover_HostBindingHandler() {
        return ctx.onMouseOver();
      })("mouseout", function ToastComponent_mouseout_HostBindingHandler() {
        return ctx.onMouseOut();
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.animationDisabled)("@fadeInOut", ctx.animateType);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    autohide: "autohide",
    color: "color",
    delay: "delay",
    fade: "fade",
    visible: "visible",
    index: "index"
  },
  outputs: {
    visibleChange: "visibleChange",
    timer: "timer"
  },
  exportAs: ["cToast"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"],
  data: {
    animation: [trigger("fadeInOut", [state("show", style({
      opacity: 1,
      height: "*",
      padding: "*",
      border: "*",
      margin: "*"
    })), state("hide", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), state("void", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), transition("show => hide", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-out"
      }
    }), transition("hide => show", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-in"
      }
    }), transition("show => void", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-out"
      }
    }), transition("void => show", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-in"
      }
    })])]
  }
});
var ToastComponent = _ToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      selector: "c-toast",
      template: "<ng-content></ng-content>",
      exportAs: "cToast",
      standalone: true,
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("hide => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      }), transition("show => void", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("void => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      })])],
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ToasterService
  }, {
    type: ChangeDetectorRef
  }], {
    autohide: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    fade: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    timer: [{
      type: Output
    }],
    animationDisabled: [{
      type: HostBinding,
      args: ["@.disabled"]
    }],
    animateType: [{
      type: HostBinding,
      args: ["@fadeInOut"]
    }],
    onMouseOver: [{
      type: HostListener,
      args: ["mouseover"]
    }],
    onMouseOut: [{
      type: HostListener,
      args: ["mouseout"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ToastBodyComponent = class _ToastBodyComponent {
  constructor(toast) {
    this.toast = toast;
    this.toastBodyClass = true;
  }
};
_ToastBodyComponent.ɵfac = function ToastBodyComponent_Factory(t) {
  return new (t || _ToastBodyComponent)(ɵɵdirectiveInject(ToastComponent, 8));
};
_ToastBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastBodyComponent,
  selectors: [["c-toast-body"]],
  hostVars: 2,
  hostBindings: function ToastBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("toast-body", ctx.toastBodyClass);
    }
  },
  exportAs: ["cToastBody"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function ToastBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ToastBodyComponent = _ToastBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-toast-body",
      template: "<ng-content></ng-content>",
      exportAs: "cToastBody",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: ToastComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    toastBodyClass: [{
      type: HostBinding,
      args: ["class.toast-body"]
    }]
  });
})();
var _ToastCloseDirective = class _ToastCloseDirective {
  constructor(toasterService) {
    this.toasterService = toasterService;
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.toasterService.setState({
      show: false,
      toast: this.toast
    });
  }
};
_ToastCloseDirective.ɵfac = function ToastCloseDirective_Factory(t) {
  return new (t || _ToastCloseDirective)(ɵɵdirectiveInject(ToasterService));
};
_ToastCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _ToastCloseDirective,
  selectors: [["", "cToastClose", ""]],
  hostBindings: function ToastCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ToastCloseDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
  },
  inputs: {
    toast: [InputFlags.None, "cToastClose", "toast"]
  },
  exportAs: ["cToastClose"],
  standalone: true
});
var ToastCloseDirective = _ToastCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cToastClose]",
      exportAs: "cToastClose",
      standalone: true
    }]
  }], () => [{
    type: ToasterService
  }], {
    toast: [{
      type: Input,
      args: ["cToastClose"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ToastHeaderComponent = class _ToastHeaderComponent {
  constructor(toast) {
    this.toast = toast;
    this.closeButton = true;
    this.toastHeaderClass = true;
  }
};
_ToastHeaderComponent.ɵfac = function ToastHeaderComponent_Factory(t) {
  return new (t || _ToastHeaderComponent)(ɵɵdirectiveInject(ToastComponent, 8));
};
_ToastHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastHeaderComponent,
  selectors: [["c-toast-header"]],
  hostVars: 2,
  hostBindings: function ToastHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("toast-header", ctx.toastHeaderClass);
    }
  },
  inputs: {
    closeButton: "closeButton"
  },
  exportAs: ["cToastHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 1,
  consts: [["aria-label", "close", "cButtonClose", "", "class", "ms-auto", 3, "cToastClose", "style"], ["aria-label", "close", "cButtonClose", "", 1, "ms-auto", 3, "cToastClose"]],
  template: function ToastHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0);
      ɵɵprojection(1);
      ɵɵtemplate(2, ToastHeaderComponent_Conditional_2_Template, 1, 4, "button", 0);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(2, ctx.closeButton ? 2 : -1);
    }
  },
  dependencies: [ToastCloseDirective, ButtonCloseDirective],
  encapsulation: 2
});
var ToastHeaderComponent = _ToastHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-toast-header",
      exportAs: "cToastHeader",
      standalone: true,
      imports: [ToastCloseDirective, ButtonCloseDirective],
      template: '<ng-container>\n  <ng-content />\n  @if (closeButton) {\n    <button [cToastClose]="toast" [style]="{outline: 0}" aria-label="close" cButtonClose class="ms-auto"></button>\n  }\n</ng-container>\n'
    }]
  }], () => [{
    type: ToastComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    closeButton: [{
      type: Input
    }],
    toastHeaderClass: [{
      type: HostBinding,
      args: ["class.toast-header"]
    }]
  });
})();
var _ToasterHostDirective = class _ToasterHostDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
};
_ToasterHostDirective.ɵfac = function ToasterHostDirective_Factory(t) {
  return new (t || _ToasterHostDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
_ToasterHostDirective.ɵdir = ɵɵdefineDirective({
  type: _ToasterHostDirective,
  selectors: [["", "cToasterHost", ""]],
  exportAs: ["cToasterHost"],
  standalone: true
});
var ToasterHostDirective = _ToasterHostDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cToasterHost]",
      exportAs: "cToasterHost",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var ToasterPlacement;
(function(ToasterPlacement2) {
  ToasterPlacement2["Static"] = "static";
  ToasterPlacement2["TopStart"] = "top-start";
  ToasterPlacement2["TopCenter"] = "top-center";
  ToasterPlacement2["TopEnd"] = "top-end";
  ToasterPlacement2["MiddleStart"] = "middle-start";
  ToasterPlacement2["MiddleCenter"] = "middle-center";
  ToasterPlacement2["MiddleEnd"] = "middle-end";
  ToasterPlacement2["BottomStart"] = "bottom-start";
  ToasterPlacement2["BottomCenter"] = "bottom-center";
  ToasterPlacement2["BottomEnd"] = "bottom-end";
})(ToasterPlacement || (ToasterPlacement = {}));
var _destroyRef5;
var _ToasterComponent = class _ToasterComponent {
  constructor(hostElement, renderer, toasterService) {
    __privateAdd(this, _destroyRef5, void 0);
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.toasterService = toasterService;
    __privateSet(this, _destroyRef5, inject(DestroyRef));
    this.placements = Object.values(ToasterPlacement);
    this.toastsDynamic = [];
    this.placement = ToasterPlacement.TopEnd;
    this.position = "absolute";
  }
  get hostClasses() {
    return {
      toaster: true,
      "toast-container": true,
      [`position-${this.position}`]: !!this.position,
      "top-0": this.placement.includes("top"),
      "top-50": this.placement.includes("middle"),
      "bottom-0": this.placement.includes("bottom"),
      "start-0": this.placement.includes("start"),
      "start-50": this.placement.includes("center"),
      "end-0": this.placement.includes("end"),
      "translate-middle-x": this.placement.includes("center") && !this.placement.includes("middle"),
      "translate-middle-y": this.placement.includes("middle") && !this.placement.includes("center"),
      "translate-middle": this.placement.includes("middle") && this.placement.includes("center")
    };
  }
  ngOnInit() {
    this.stateToasterSubscribe();
  }
  ngAfterContentChecked() {
    this.toasts = this.contentToasts;
  }
  addToast(toast, props, options) {
    const componentRef = this.toasterHost.viewContainerRef.createComponent(toast, options);
    this.toastsDynamic.push(componentRef);
    const index = this.toastsDynamic.indexOf(componentRef);
    for (const [key, value] of Object.entries(props)) {
      componentRef.instance[key] = value;
    }
    componentRef.instance["placement"] = this.placement;
    componentRef.instance["dynamic"] = true;
    componentRef.instance["index"] = index;
    componentRef.instance["visible"] = true;
    componentRef.instance["visibleChange"].emit(true);
    componentRef.changeDetectorRef?.detectChanges();
    return componentRef;
  }
  removeToast(state2) {
    this.toastsDynamic?.forEach((item) => {
      if (state2.toast?.dynamic && item.instance === state2.toast) {
        item.instance.visible = false;
        item.instance["visibleChange"].emit(false);
        item.destroy();
      }
    });
    this.toasts?.forEach((item) => {
      if (state2.toast && item.element.nativeElement === state2.toast.hostElement.nativeElement) {
        if (!state2.toast.dynamic) {
          state2.toast.visible = false;
        }
      }
    });
  }
  stateToasterSubscribe() {
    this.toasterService.toasterState$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef5))).subscribe((state2) => {
      if (state2.show === false) {
        this.removeToast(state2);
      }
      if (state2.show === true && state2.toast?.dynamic === void 0) {
      }
    });
  }
};
_destroyRef5 = new WeakMap();
_ToasterComponent.ɵfac = function ToasterComponent_Factory(t) {
  return new (t || _ToasterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ToasterService));
};
_ToasterComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToasterComponent,
  selectors: [["c-toaster"]],
  contentQueries: function ToasterComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ToastComponent, 4, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentToasts = _t);
    }
  },
  viewQuery: function ToasterComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ToasterHostDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toasterHost = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ToasterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    placement: "placement",
    position: "position"
  },
  exportAs: ["cToaster"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 0,
  consts: [["cToasterHost", ""]],
  template: function ToasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ToasterComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      ɵɵprojection(1, 0, ["cToasterHost", ""]);
    }
  },
  dependencies: [ToasterHostDirective],
  encapsulation: 2
});
var ToasterComponent = _ToasterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterComponent, [{
    type: Component,
    args: [{
      selector: "c-toaster",
      exportAs: "cToaster",
      standalone: true,
      imports: [ToasterHostDirective],
      template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ToasterService
  }], {
    placement: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    toasterHost: [{
      type: ViewChild,
      args: [ToasterHostDirective, {
        static: true
      }]
    }],
    contentToasts: [{
      type: ContentChildren,
      args: [ToastComponent, {
        read: ViewContainerRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ToastModule = class _ToastModule {
};
_ToastModule.ɵfac = function ToastModule_Factory(t) {
  return new (t || _ToastModule)();
};
_ToastModule.ɵmod = ɵɵdefineNgModule({
  type: _ToastModule,
  imports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective],
  exports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective]
});
_ToastModule.ɵinj = ɵɵdefineInjector({
  providers: [ToasterService]
});
var ToastModule = _ToastModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective],
      providers: [ToasterService],
      exports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective]
    }]
  }], null, null);
})();
var _TooltipComponent = class _TooltipComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.content = "";
    this.visible = false;
    this.role = "tooltip";
  }
  get hostClasses() {
    return {
      tooltip: true,
      fade: true,
      show: this.visible,
      "bs-tooltip-auto": true
    };
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateView(this.content);
    });
  }
  ngOnChanges(changes) {
    if (changes["content"]) {
      setTimeout(() => {
        this.updateView(this.content);
      });
    }
  }
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.viewContainerRef?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
  updateView(content) {
    this.clear();
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      this.viewContainerRef.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);
      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
};
_TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || _TooltipComponent)(ɵɵdirectiveInject(Renderer2));
};
_TooltipComponent.ɵcmp = ɵɵdefineComponent({
  type: _TooltipComponent,
  selectors: [["c-tooltip"]],
  viewQuery: function TooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c13, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    content: "content",
    visible: "visible",
    id: "id",
    role: "role"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 0,
  consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"], ["tooltipTemplate", ""]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelement(1, "div", 0);
      ɵɵelementStart(2, "div", 1);
      ɵɵelementContainer(3, null, 2);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
  },
  encapsulation: 2
});
var TooltipComponent = _TooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "c-tooltip",
      standalone: true,
      template: '<ng-container>\n  <div class="tooltip-arrow" data-popper-arrow></div>\n  <div class="tooltip-inner">\n    <ng-container #tooltipTemplate></ng-container>\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: Renderer2
  }], {
    content: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    id: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.id"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["tooltipTemplate", {
        read: ViewContainerRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _destroyRef6;
var _TooltipDirective = class _TooltipDirective {
  constructor(document2, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef, intersectionService) {
    __privateAdd(this, _destroyRef6, void 0);
    this.document = document2;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.viewContainerRef = viewContainerRef;
    this.listenersService = listenersService;
    this.changeDetectorRef = changeDetectorRef;
    this.intersectionService = intersectionService;
    this.content = "";
    this.placement = "top";
    this.trigger = "hover";
    this._visible = false;
    this._popperOptions = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 0]
        }
      }]
    };
    __privateSet(this, _destroyRef6, inject(DestroyRef));
  }
  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @type Partial<Options>
   */
  set popperOptions(value) {
    this._popperOptions = __spreadValues(__spreadProps(__spreadValues({}, this._popperOptions), {
      placement: this.placement
    }), value);
  }
  get popperOptions() {
    return __spreadValues({
      placement: this.placement
    }, this._popperOptions);
  }
  /**
   * Toggle the visibility of tooltip component.
   */
  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  get ariaDescribedBy() {
    return this.tooltipId ? this.tooltipId : null;
  }
  ngAfterViewInit() {
    this.intersectionServiceSubscribe();
  }
  ngOnChanges(changes) {
    if (changes["visible"]) {
      changes["visible"].currentValue ? this.addTooltipElement() : this.removeTooltipElement();
    }
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyTooltipElement();
  }
  ngOnInit() {
    this.setListeners();
  }
  setListeners() {
    const config = {
      hostElement: this.hostElement,
      trigger: this.trigger,
      callbackToggle: () => {
        this.visible = !this.visible;
        this.visible ? this.addTooltipElement() : this.removeTooltipElement();
      },
      callbackOff: () => {
        this.visible = false;
        this.removeTooltipElement();
      },
      callbackOn: () => {
        this.visible = true;
        this.addTooltipElement();
      }
    };
    this.listenersService.setListeners(config);
  }
  clearListeners() {
    this.listenersService.clearListeners();
  }
  intersectionServiceSubscribe() {
    this.intersectionService.createIntersectionObserver(this.hostElement);
    this.intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.hostElement), debounceTime(100), finalize(() => {
      this.intersectionService.unobserve(this.hostElement);
    }), takeUntilDestroyed(__privateGet(this, _destroyRef6))).subscribe((next) => {
      this.visible = next.isIntersecting ? this.visible : false;
      !this.visible && this.removeTooltipElement();
    });
  }
  getUID(prefix) {
    let uid = prefix ?? "random-id";
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.document.getElementById(uid));
    return uid;
  }
  createTooltipElement() {
    if (!this.tooltipRef) {
      this.tooltipRef = this.viewContainerRef.createComponent(TooltipComponent);
    }
  }
  destroyTooltipElement() {
    this.tooltip?.remove();
    this.tooltipRef?.destroy();
    this.tooltipRef = void 0;
    this.popperInstance?.destroy();
    this.viewContainerRef?.detach();
    this.viewContainerRef?.clear();
  }
  addTooltipElement() {
    if (!this.tooltipRef) {
      this.createTooltipElement();
    }
    this.tooltipId = this.getUID("tooltip");
    this.tooltipRef.instance.id = this.tooltipId;
    this.tooltipRef.instance.content = this.content;
    this.tooltip = this.tooltipRef.location.nativeElement;
    this.renderer.addClass(this.tooltip, "d-none");
    this.renderer.addClass(this.tooltip, "fade");
    this.popperInstance?.destroy();
    this.viewContainerRef.insert(this.tooltipRef.hostView);
    this.renderer.appendChild(this.document.body, this.tooltip);
    this.popperInstance = createPopper3(this.hostElement.nativeElement, this.tooltip, __spreadValues({}, this.popperOptions));
    if (!this.visible) {
      this.removeTooltipElement();
      return;
    }
    this.renderer.removeClass(this.tooltip, "d-none");
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.tooltipRef.instance.visible = this.visible;
      this.popperInstance.forceUpdate();
      this.changeDetectorRef.markForCheck();
    }, 100);
  }
  removeTooltipElement() {
    this.tooltipId = "";
    if (!this.tooltipRef) {
      return;
    }
    this.tooltipRef.instance.visible = false;
    this.tooltipRef.instance.id = void 0;
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef?.detach();
    }, 300);
  }
};
_destroyRef6 = new WeakMap();
_TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || _TooltipDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ListenersService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IntersectionService));
};
_TooltipDirective.ɵdir = ɵɵdefineDirective({
  type: _TooltipDirective,
  selectors: [["", "cTooltip", ""]],
  hostVars: 1,
  hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-describedby", ctx.ariaDescribedBy);
    }
  },
  inputs: {
    content: [InputFlags.None, "cTooltip", "content"],
    popperOptions: [InputFlags.None, "cTooltipOptions", "popperOptions"],
    placement: [InputFlags.None, "cTooltipPlacement", "placement"],
    trigger: [InputFlags.None, "cTooltipTrigger", "trigger"],
    visible: [InputFlags.None, "cTooltipVisible", "visible"]
  },
  exportAs: ["cTooltip"],
  standalone: true,
  features: [ɵɵProvidersFeature([ListenersService, IntersectionService]), ɵɵNgOnChangesFeature]
});
var TooltipDirective = _TooltipDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[cTooltip]",
      exportAs: "cTooltip",
      providers: [ListenersService, IntersectionService],
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ListenersService
  }, {
    type: ChangeDetectorRef
  }, {
    type: IntersectionService
  }], {
    content: [{
      type: Input,
      args: ["cTooltip"]
    }],
    popperOptions: [{
      type: Input,
      args: ["cTooltipOptions"]
    }],
    placement: [{
      type: Input,
      args: ["cTooltipPlacement"]
    }],
    trigger: [{
      type: Input,
      args: ["cTooltipTrigger"]
    }],
    visible: [{
      type: Input,
      args: ["cTooltipVisible"]
    }],
    ariaDescribedBy: [{
      type: HostBinding,
      args: ["attr.aria-describedby"]
    }]
  });
})();
var _TooltipModule = class _TooltipModule {
};
_TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || _TooltipModule)();
};
_TooltipModule.ɵmod = ɵɵdefineNgModule({
  type: _TooltipModule,
  imports: [TooltipComponent, TooltipDirective],
  exports: [TooltipComponent, TooltipDirective]
});
_TooltipModule.ɵinj = ɵɵdefineInjector({});
var TooltipModule = _TooltipModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      exports: [TooltipComponent, TooltipDirective],
      imports: [TooltipComponent, TooltipDirective]
    }]
  }], null, null);
})();
var _BgColorDirective = class _BgColorDirective {
  get hostClasses() {
    return {
      [`bg-${this.color}`]: !!this.color,
      "bg-gradient": this.gradient
    };
  }
  constructor() {
    this.color = "";
  }
};
_BgColorDirective.ɵfac = function BgColorDirective_Factory(t) {
  return new (t || _BgColorDirective)();
};
_BgColorDirective.ɵdir = ɵɵdefineDirective({
  type: _BgColorDirective,
  selectors: [["", "cBgColor", ""]],
  hostVars: 2,
  hostBindings: function BgColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [InputFlags.None, "cBgColor", "color"],
    gradient: "gradient"
  },
  standalone: true
});
var BgColorDirective = _BgColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BgColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cBgColor]",
      standalone: true
    }]
  }], () => [], {
    color: [{
      type: Input,
      args: ["cBgColor"]
    }],
    gradient: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BorderDirective = class _BorderDirective {
  constructor() {
    this.border = true;
  }
  get hostClasses() {
    if (typeof this.border === "boolean") {
      return {
        border: true
      };
    }
    if (typeof this.border === "number" || typeof this.border === "string") {
      return {
        border: true,
        [`border-${this.border}`]: true
      };
    }
    if (typeof this.border === "object") {
      const borderObj = __spreadValues({
        top: void 0,
        end: void 0,
        bottom: void 0,
        start: void 0,
        color: void 0
      }, this.border);
      const keys = Object.keys(borderObj).filter((key) => borderObj[key] !== void 0);
      const classes = {};
      keys.forEach((key) => {
        const val = borderObj[key];
        if (typeof val === "boolean") {
          classes[`border-${key}`] = true;
        } else if (typeof val === "number" || typeof val === "string") {
          classes[`border-${key}-${val}`] = true;
        } else if (typeof val === "object") {
          if ("color" in val) {
            classes[`border-${key}-${val.color}`] = true;
          }
          if ("width" in val) {
            classes[`border-${key}-${val.width}`] = true;
          }
        }
      });
      return Object.entries(classes).length === 0 ? {
        border: false
      } : classes;
    }
  }
};
_BorderDirective.ɵfac = function BorderDirective_Factory(t) {
  return new (t || _BorderDirective)();
};
_BorderDirective.ɵdir = ɵɵdefineDirective({
  type: _BorderDirective,
  selectors: [["", "cBorder", ""]],
  hostVars: 2,
  hostBindings: function BorderDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    border: [InputFlags.None, "cBorder", "border"]
  },
  standalone: true
});
var BorderDirective = _BorderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BorderDirective, [{
    type: Directive,
    args: [{
      selector: "[cBorder]",
      standalone: true
    }]
  }], null, {
    border: [{
      type: Input,
      args: ["cBorder"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TextColorDirective = class _TextColorDirective {
  get hostClasses() {
    const color = this.color;
    return {
      [`text-${color}`]: !!color
    };
  }
  constructor() {
    this.color = "";
  }
};
_TextColorDirective.ɵfac = function TextColorDirective_Factory(t) {
  return new (t || _TextColorDirective)();
};
_TextColorDirective.ɵdir = ɵɵdefineDirective({
  type: _TextColorDirective,
  selectors: [["", "cTextColor", ""]],
  hostVars: 2,
  hostBindings: function TextColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [InputFlags.None, "cTextColor", "color"]
  },
  standalone: true
});
var TextColorDirective = _TextColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTextColor]",
      standalone: true
    }]
  }], () => [], {
    color: [{
      type: Input,
      args: ["cTextColor"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _RoundedDirective = class _RoundedDirective {
  constructor() {
    this.rounded = true;
  }
  get hostClasses() {
    if (typeof this.rounded === "boolean") {
      return {
        rounded: true
      };
    }
    if (typeof this.rounded === "number" || typeof this.rounded === "string") {
      return {
        [`rounded-${this.rounded}`]: true
      };
    }
    if (typeof this.rounded === "object") {
      const roundedObj = __spreadValues({
        top: void 0,
        end: void 0,
        bottom: void 0,
        start: void 0,
        circle: void 0,
        pill: void 0,
        size: void 0
      }, this.rounded);
      const keys = Object.keys(roundedObj).filter((key) => roundedObj[key] !== void 0);
      const classes = {};
      keys.forEach((key) => {
        const val = roundedObj[key];
        if (typeof val === "boolean") {
          classes[`rounded-${key}`] = val;
        } else {
          classes[`rounded-${val}`] = true;
        }
      });
      return Object.entries(classes).length === 0 ? {
        rounded: false
      } : classes;
    }
  }
};
_RoundedDirective.ɵfac = function RoundedDirective_Factory(t) {
  return new (t || _RoundedDirective)();
};
_RoundedDirective.ɵdir = ɵɵdefineDirective({
  type: _RoundedDirective,
  selectors: [["", "cRounded", ""]],
  hostVars: 2,
  hostBindings: function RoundedDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    rounded: [InputFlags.None, "cRounded", "rounded"]
  },
  standalone: true
});
var RoundedDirective = _RoundedDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundedDirective, [{
    type: Directive,
    args: [{
      selector: "[cRounded]",
      standalone: true
    }]
  }], null, {
    rounded: [{
      type: Input,
      args: ["cRounded"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _AlignDirective = class _AlignDirective {
  get hostClasses() {
    return {
      [`align-${this.align}`]: !!this.align
    };
  }
};
_AlignDirective.ɵfac = function AlignDirective_Factory(t) {
  return new (t || _AlignDirective)();
};
_AlignDirective.ɵdir = ɵɵdefineDirective({
  type: _AlignDirective,
  selectors: [["", "cAlign", ""]],
  hostVars: 2,
  hostBindings: function AlignDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    align: [InputFlags.None, "cAlign", "align"]
  },
  standalone: true
});
var AlignDirective = _AlignDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlign]",
      standalone: true
    }]
  }], null, {
    align: [{
      type: Input,
      args: ["cAlign"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _UtilitiesModule = class _UtilitiesModule {
};
_UtilitiesModule.ɵfac = function UtilitiesModule_Factory(t) {
  return new (t || _UtilitiesModule)();
};
_UtilitiesModule.ɵmod = ɵɵdefineNgModule({
  type: _UtilitiesModule,
  imports: [BgColorDirective, BorderDirective, RoundedDirective, TextColorDirective, AlignDirective],
  exports: [BgColorDirective, BorderDirective, RoundedDirective, TextColorDirective, AlignDirective]
});
_UtilitiesModule.ɵinj = ɵɵdefineInjector({});
var UtilitiesModule = _UtilitiesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilitiesModule, [{
    type: NgModule,
    args: [{
      imports: [BgColorDirective, BorderDirective, RoundedDirective, TextColorDirective, AlignDirective],
      exports: [BgColorDirective, BorderDirective, RoundedDirective, TextColorDirective, AlignDirective]
    }]
  }], null, null);
})();
var _WidgetStatAComponent = class _WidgetStatAComponent {
  constructor() {
    this.templates = {};
  }
  get hostClasses() {
    return {
      "card": true,
      [`bg-${this.color}`]: !!this.color,
      "text-high-emphasis-inverse": !!this.color
    };
  }
  get bodyClasses() {
    return {
      "pb-0": true,
      "d-flex": true,
      "justify-content-between": true,
      "align-items-start": true
    };
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_WidgetStatAComponent.ɵfac = function WidgetStatAComponent_Factory(t) {
  return new (t || _WidgetStatAComponent)();
};
_WidgetStatAComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatAComponent,
  selectors: [["c-widget-stat-a"]],
  contentQueries: function WidgetStatAComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 2,
  hostBindings: function WidgetStatAComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    title: "title",
    value: "value"
  },
  exportAs: ["cWidgetStatA"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c15,
  decls: 15,
  vars: 5,
  consts: [[3, "ngClass"], ["class", "fs-4 fw-semibold"], [4, "ngTemplateOutlet"], ["defaultWidgetTitleTemplate", ""], ["defaultWidgetValueTemplate", ""], ["defaultWidgetChartTemplate", ""], ["defaultWidgetActionTemplate", ""], [1, "fs-4", "fw-semibold"]],
  template: function WidgetStatAComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c14);
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "c-card-body", 0)(2, "div");
      ɵɵtemplate(3, WidgetStatAComponent_Conditional_3_Template, 2, 1, "div", 1)(4, WidgetStatAComponent_Conditional_4_Template, 2, 1, "div");
      ɵɵelementEnd();
      ɵɵtemplate(5, WidgetStatAComponent_ng_container_5_Template, 1, 0, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵtemplate(6, WidgetStatAComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
      ɵɵelementContainerEnd();
      ɵɵtemplate(7, WidgetStatAComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(9, WidgetStatAComponent_ng_template_9_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor)(11, WidgetStatAComponent_ng_template_11_Template, 1, 0, "ng-template", null, 5, ɵɵtemplateRefExtractor)(13, WidgetStatAComponent_ng_template_13_Template, 1, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r9 = ɵɵreference(12);
      const _r11 = ɵɵreference(14);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.bodyClasses);
      ɵɵadvance(2);
      ɵɵconditional(3, !!ctx.value || (ctx.templates == null ? null : ctx.templates.widgetValueTemplate) ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional(4, !!ctx.title || (ctx.templates == null ? null : ctx.templates.widgetTitleTemplate) ? 4 : -1);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates.widgetActionTemplate) || _r11);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates.widgetChartTemplate) || _r9);
    }
  },
  dependencies: [CardBodyComponent, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var WidgetStatAComponent = _WidgetStatAComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatAComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-a",
      exportAs: "cWidgetStatA",
      imports: [CardBodyComponent, NgClass, NgTemplateOutlet],
      standalone: true,
      template: '<ng-container>\n  <c-card-body [ngClass]="bodyClasses">\n    <div>\n      @if (!!value || templates?.widgetValueTemplate) {\n        <div class="fs-4 fw-semibold">\n          <ng-container *ngTemplateOutlet="templates?.widgetValueTemplate || defaultWidgetValueTemplate" />\n        </div>\n      }\n      @if (!!title || templates?.widgetTitleTemplate) {\n        <div>\n          <ng-container *ngTemplateOutlet="templates?.widgetTitleTemplate || defaultWidgetTitleTemplate" />\n        </div>\n      }\n    </div>\n    <ng-container *ngTemplateOutlet="templates?.widgetActionTemplate || defaultWidgetActionTemplate" />\n  </c-card-body>\n  <ng-container *ngTemplateOutlet="templates?.widgetChartTemplate || defaultWidgetChartTemplate" />\n</ng-container>\n\n<ng-template #defaultWidgetTitleTemplate>\n  {{ title }}\n</ng-template>\n\n<ng-template #defaultWidgetValueTemplate>\n  {{ value }}\n</ng-template>\n\n<ng-template #defaultWidgetChartTemplate>\n  <ng-content select=".chart-wrapper" />\n</ng-template>\n\n<ng-template #defaultWidgetActionTemplate>\n  <ng-content />\n</ng-template>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatBComponent = class _WidgetStatBComponent extends CardComponent {
  constructor() {
    super();
    this.inverse = false;
  }
  get hostClasses() {
    return {
      "card": true,
      [`bg-${this.color}`]: !!this.color,
      [`text-${this.textColor}`]: !!this.textColor,
      "text-high-emphasis-inverse": !!this.color
    };
  }
};
_WidgetStatBComponent.ɵfac = function WidgetStatBComponent_Factory(t) {
  return new (t || _WidgetStatBComponent)();
};
_WidgetStatBComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatBComponent,
  selectors: [["c-widget-stat-b"]],
  hostVars: 2,
  hostBindings: function WidgetStatBComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    textColor: "textColor",
    title: "title",
    text: "text",
    value: "value",
    inverse: [InputFlags.HasDecoratorInputTransform, "inverse", "inverse", booleanAttribute]
  },
  exportAs: ["cWidgetStatB"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 3,
  consts: [["class", "fs-4 fw-semibold"], [3, "ngClass"], [1, "fs-4", "fw-semibold"]],
  template: function WidgetStatBComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-body");
      ɵɵtemplate(1, WidgetStatBComponent_Conditional_1_Template, 2, 1, "div", 0)(2, WidgetStatBComponent_Conditional_2_Template, 2, 1, "div");
      ɵɵprojection(3);
      ɵɵtemplate(4, WidgetStatBComponent_Conditional_4_Template, 2, 2, "small", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, !!ctx.value ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(2, !!ctx.title ? 2 : -1);
      ɵɵadvance(2);
      ɵɵconditional(4, ctx.text ? 4 : -1);
    }
  },
  dependencies: [CardBodyComponent, NgClass],
  encapsulation: 2
});
var WidgetStatBComponent = _WidgetStatBComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatBComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-b",
      exportAs: "cWidgetStatB",
      standalone: true,
      imports: [CardBodyComponent, NgClass],
      template: `<c-card-body>
  @if (!!value) {
    <div class="fs-4 fw-semibold">{{ value }}</div>
  }
  @if (!!title) {
    <div>{{ title }}</div>
  }
  <ng-content />
  @if (text) {
    <small [ngClass]="inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'">
      {{ text }}
    </small>
  }
</c-card-body>
`
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    inverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatCComponent = class _WidgetStatCComponent extends CardComponent {
  constructor() {
    super();
    this.inverse = false;
    this.templates = {};
  }
  get hostExtendedClass() {
    return {
      "high-emphasis-inverse": this.inverse
    };
  }
  get iconClasses() {
    return {
      "mb-4": !this.textColor,
      "text-end": true,
      "text-medium-emphasis": !this.inverse,
      "text-medium-emphasis-inverse": this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  get titleClasses() {
    return {
      "text-medium-emphasis": !this.inverse,
      "text-medium-emphasis-inverse": this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  get valueClasses() {
    return {
      "fs-4": !this.textColor,
      "fw-semibold": true,
      "text-high-emphasis": !this.inverse,
      "text-high-emphasis-inverse": this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_WidgetStatCComponent.ɵfac = function WidgetStatCComponent_Factory(t) {
  return new (t || _WidgetStatCComponent)();
};
_WidgetStatCComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatCComponent,
  selectors: [["c-widget-stat-c"]],
  contentQueries: function WidgetStatCComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 2,
  hostBindings: function WidgetStatCComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostExtendedClass);
    }
  },
  inputs: {
    icon: "icon",
    title: "title",
    value: "value",
    inverse: [InputFlags.HasDecoratorInputTransform, "inverse", "inverse", booleanAttribute]
  },
  exportAs: ["cWidgetStatC"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 9,
  vars: 4,
  consts: [[3, "ngClass"], ["defaultWidgetIconTemplate", ""], ["defaultWidgetProgressTemplate", ""], [4, "ngTemplateOutlet"]],
  template: function WidgetStatCComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-body");
      ɵɵtemplate(1, WidgetStatCComponent_Conditional_1_Template, 2, 2, "div", 0)(2, WidgetStatCComponent_Conditional_2_Template, 2, 2, "div", 0)(3, WidgetStatCComponent_Conditional_3_Template, 2, 2, "div", 0)(4, WidgetStatCComponent_Conditional_4_Template, 1, 1, "ng-container");
      ɵɵelementEnd();
      ɵɵtemplate(5, WidgetStatCComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, WidgetStatCComponent_ng_template_7_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.icon || (ctx.templates == null ? null : ctx.templates.widgetIconTemplate) ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(2, !!ctx.value ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(3, !!ctx.title ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional(4, (ctx.templates == null ? null : ctx.templates.widgetProgressTemplate) ? 4 : -1);
    }
  },
  dependencies: [CardBodyComponent, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var WidgetStatCComponent = _WidgetStatCComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatCComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-c",
      exportAs: "cWidgetStatC",
      standalone: true,
      imports: [CardBodyComponent, NgClass, NgTemplateOutlet],
      template: '<c-card-body>\n  @if (icon || templates?.widgetIconTemplate) {\n    <div [ngClass]="iconClasses">\n      <ng-container *ngTemplateOutlet="templates?.widgetIconTemplate || defaultWidgetIconTemplate" />\n    </div>\n  }\n  @if (!!value) {\n    <div [ngClass]="valueClasses">\n      {{ value }}\n    </div>\n  }\n  @if (!!title) {\n    <div [ngClass]="titleClasses">\n      {{ title }}\n    </div>\n  }\n  @if (templates?.widgetProgressTemplate) {\n    <ng-container *ngTemplateOutlet="templates?.widgetProgressTemplate || defaultWidgetProgressTemplate" />\n  }\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{ icon }}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content />\n</ng-template>\n'
    }]
  }], () => [], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    inverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    hostExtendedClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatDComponent = class _WidgetStatDComponent {
  constructor() {
  }
  get hostClasses() {
    return {
      "card": true
    };
  }
  get headerClasses() {
    return {
      "position-relative": true,
      "d-flex": true,
      "justify-content-center": true,
      "align-items-center": true,
      [`bg-${this.color}`]: this.color
    };
  }
};
_WidgetStatDComponent.ɵfac = function WidgetStatDComponent_Factory(t) {
  return new (t || _WidgetStatDComponent)();
};
_WidgetStatDComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatDComponent,
  selectors: [["c-widget-stat-d"]],
  hostVars: 2,
  hostBindings: function WidgetStatDComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    values: "values"
  },
  exportAs: ["cWidgetStatD"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 1,
  consts: [[3, "ngClass"], ["cRow", "", 1, "text-center"], ["class", "vr"], [1, "fs-5", "fw-semibold"], [1, "text-uppercase", "text-medium-emphasis", "small"], [1, "vr"]],
  template: function WidgetStatDComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-header", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "c-card-body", 1);
      ɵɵrepeaterCreate(3, WidgetStatDComponent_For_4_Template, 6, 3, "c-col", null, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.headerClasses);
      ɵɵadvance(3);
      ɵɵrepeater(ctx.values);
    }
  },
  dependencies: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective, NgClass],
  encapsulation: 2
});
var WidgetStatDComponent = _WidgetStatDComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatDComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-d",
      exportAs: "cWidgetStatD",
      standalone: true,
      imports: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective, NgClass],
      template: '<c-card-header [ngClass]="headerClasses">\n  <ng-content />\n</c-card-header>\n<c-card-body cRow class="text-center">\n  @for (item of values; track item; let i = $index) {\n    @if (i % 2 !== 0) {\n      <div class="vr"></div>\n    }\n    <c-col>\n      <div class="fs-5 fw-semibold">{{ item.value }}</div>\n      <div class="text-uppercase text-medium-emphasis small">{{ item.title }}</div>\n    </c-col>\n  }\n</c-card-body>\n'
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    values: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatEComponent = class _WidgetStatEComponent extends CardComponent {
  constructor() {
    super();
  }
  get titleClasses() {
    return {
      "text-medium-emphasis": !this.textColor,
      "small": true,
      "text-uppercase": true,
      "fw-semibold": true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
};
_WidgetStatEComponent.ɵfac = function WidgetStatEComponent_Factory(t) {
  return new (t || _WidgetStatEComponent)();
};
_WidgetStatEComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatEComponent,
  selectors: [["c-widget-stat-e"]],
  inputs: {
    title: "title",
    value: "value"
  },
  exportAs: ["cWidgetStatE"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 4,
  vars: 2,
  consts: [[1, "text-center"], [3, "ngClass"], ["class", "fs-6 fw-semibold py-3"], [1, "fs-6", "fw-semibold", "py-3"]],
  template: function WidgetStatEComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-body", 0);
      ɵɵtemplate(1, WidgetStatEComponent_Conditional_1_Template, 2, 2, "div", 1)(2, WidgetStatEComponent_Conditional_2_Template, 2, 1, "div", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, !!ctx.title ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(2, !!ctx.value ? 2 : -1);
    }
  },
  dependencies: [CardBodyComponent, NgClass],
  encapsulation: 2
});
var WidgetStatEComponent = _WidgetStatEComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatEComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-e",
      exportAs: "cWidgetStatE",
      standalone: true,
      imports: [CardBodyComponent, NgClass],
      template: '<c-card-body class="text-center">\n  @if (!!title) {\n    <div [ngClass]="titleClasses">{{ title }}</div>\n  }\n  @if (!!value) {\n    <div class="fs-6 fw-semibold py-3">{{ value }}</div>\n  }\n  <ng-content />\n</c-card-body>\n'
    }]
  }], () => [], {
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var _WidgetStatFComponent = class _WidgetStatFComponent {
  constructor() {
    this.padding = false;
    this.templates = {};
  }
  get hostClasses() {
    return {
      card: true
    };
  }
  get cardBodyClasses() {
    return {
      "d-flex": true,
      "align-items-center": true,
      "p-0": !this.padding
    };
  }
  get iconClasses() {
    return {
      "me-3": !this.textColor,
      "text-white": true,
      [`bg-${this.color}`]: !!this.color,
      "p-3": this.padding,
      "p-4": !this.padding
    };
  }
  get titleClasses() {
    return {
      "text-medium-emphasis": !this.textColor,
      "small": true,
      "text-uppercase": true,
      "fw-semibold": true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  get valueClasses() {
    return {
      "fs-6": !this.textColor,
      "fw-semibold": true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_WidgetStatFComponent.ɵfac = function WidgetStatFComponent_Factory(t) {
  return new (t || _WidgetStatFComponent)();
};
_WidgetStatFComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatFComponent,
  selectors: [["c-widget-stat-f"]],
  contentQueries: function WidgetStatFComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 2,
  hostBindings: function WidgetStatFComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    textColor: "textColor",
    footer: "footer",
    icon: "icon",
    padding: [InputFlags.HasDecoratorInputTransform, "padding", "padding", booleanAttribute],
    title: "title",
    value: "value"
  },
  exportAs: ["cWidgetStatB"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 14,
  vars: 8,
  consts: [[3, "ngClass"], [4, "ngTemplateOutlet"], ["defaultWidgetIconTemplate", ""], ["defaultFooterIconTemplate", ""]],
  template: function WidgetStatFComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "c-card-body", 0)(2, "div", 0);
      ɵɵtemplate(3, WidgetStatFComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div")(5, "div", 0);
      ɵɵtext(6);
      ɵɵelementEnd();
      ɵɵelementStart(7, "div", 0);
      ɵɵtext(8);
      ɵɵelementEnd()()();
      ɵɵtemplate(9, WidgetStatFComponent_Conditional_9_Template, 2, 1, "c-card-footer");
      ɵɵelementContainerEnd();
      ɵɵtemplate(10, WidgetStatFComponent_ng_template_10_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(12, WidgetStatFComponent_ng_template_12_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(11);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.cardBodyClasses);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.iconClasses);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates.widgetIconTemplate) || _r3);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.valueClasses);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.value);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.titleClasses);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.title);
      ɵɵadvance();
      ɵɵconditional(9, ctx.footer || (ctx.templates == null ? null : ctx.templates.widgetFooterTemplate) ? 9 : -1);
    }
  },
  dependencies: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var WidgetStatFComponent = _WidgetStatFComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatFComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-f",
      exportAs: "cWidgetStatB",
      standalone: true,
      imports: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet],
      template: '<ng-container>\n  <c-card-body [ngClass]="cardBodyClasses">\n    <div [ngClass]="iconClasses">\n      <ng-container *ngTemplateOutlet="templates?.widgetIconTemplate || defaultWidgetIconTemplate" />\n    </div>\n    <div>\n      <div [ngClass]="valueClasses">{{ value }}</div>\n      <div [ngClass]="titleClasses">{{ title }}</div>\n    </div>\n  </c-card-body>\n  @if (footer || templates?.widgetFooterTemplate) {\n    <c-card-footer>\n      <ng-container *ngTemplateOutlet="templates?.widgetFooterTemplate || defaultFooterIconTemplate" />\n    </c-card-footer>\n  }\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{ icon }}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{ footer }}</span>\n</ng-template>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    padding: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetModule = class _WidgetModule {
};
_WidgetModule.ɵfac = function WidgetModule_Factory(t) {
  return new (t || _WidgetModule)();
};
_WidgetModule.ɵmod = ɵɵdefineNgModule({
  type: _WidgetModule,
  imports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent],
  exports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent]
});
_WidgetModule.ɵinj = ɵɵdefineInjector({});
var WidgetModule = _WidgetModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetModule, [{
    type: NgModule,
    args: [{
      imports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent],
      exports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent]
    }]
  }], null, null);
})();
export {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  AccordionModule,
  AlertComponent,
  AlertHeadingDirective,
  AlertLinkDirective,
  AlertModule,
  AlignDirective,
  AvatarComponent,
  AvatarModule,
  BackdropService,
  BadgeComponent,
  BadgeModule,
  BgColorDirective,
  BorderDirective,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbModule,
  BreadcrumbRouterComponent,
  BreadcrumbRouterService,
  BreakpointInfix,
  ButtonCloseDirective,
  ButtonDirective,
  ButtonGroupComponent,
  ButtonGroupModule,
  ButtonModule,
  ButtonToolbarComponent,
  CalloutComponent,
  CalloutModule,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderActionsComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardImgOverlayComponent,
  CardLinkDirective,
  CardModule,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselConfig,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselModule,
  ClassToggleService,
  ColComponent,
  ColDirective,
  CollapseDirective,
  CollapseModule,
  ContainerComponent,
  DropdownCloseDirective,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownItemPlainDirective,
  DropdownMenuDirective,
  DropdownModule,
  DropdownService,
  DropdownToggleDirective,
  FooterComponent,
  FooterModule,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  FormModule,
  FormSelectDirective,
  FormTextDirective,
  GridModule,
  GutterDirective,
  HeaderBrandComponent,
  HeaderComponent,
  HeaderDividerComponent,
  HeaderModule,
  HeaderNavComponent,
  HeaderTextComponent,
  HeaderTogglerDirective,
  HtmlAttributesDirective2 as HtmlAttributesDirective,
  ImgDirective,
  ImgModule,
  InputGroupComponent,
  InputGroupTextDirective,
  IntersectionService,
  ListGroupDirective,
  ListGroupItemDirective,
  ListGroupModule,
  ListenersService,
  ModalBodyComponent,
  ModalComponent,
  ModalContentComponent,
  ModalDialogComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalModule,
  ModalService,
  ModalTitleDirective,
  ModalToggleDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  NavModule,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarModule,
  NavbarNavComponent,
  NavbarTextComponent,
  NavbarTogglerDirective,
  OffcanvasBodyComponent,
  OffcanvasComponent,
  OffcanvasHeaderComponent,
  OffcanvasModule,
  OffcanvasService,
  OffcanvasTitleDirective,
  OffcanvasToggleDirective,
  PageItemComponent,
  PageItemDirective,
  PageLinkDirective,
  PaginationComponent,
  PaginationModule,
  PlaceholderAnimationDirective,
  PlaceholderDirective,
  PlaceholderModule,
  PopoverComponent,
  PopoverDirective,
  PopoverModule,
  ProgressBarComponent,
  ProgressComponent,
  ProgressModule,
  RoundedDirective,
  RowComponent,
  RowDirective,
  SharedModule,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarModule,
  SidebarNavComponent,
  SidebarNavHelper,
  SidebarService,
  SidebarToggleDirective,
  SidebarTogglerComponent,
  SpinnerComponent,
  SpinnerModule,
  TabContentComponent,
  TabContentRefDirective,
  TabPaneComponent,
  TabService,
  TableActiveDirective,
  TableColorDirective,
  TableDirective,
  TableModule,
  TabsModule,
  TemplateIdDirective,
  TextColorDirective,
  ToastBodyComponent,
  ToastCloseDirective,
  ToastComponent,
  ToastHeaderComponent,
  ToastModule,
  ToasterComponent,
  ToasterHostDirective,
  ToasterPlacement,
  ToasterService,
  TooltipComponent,
  TooltipDirective,
  TooltipModule,
  UtilitiesModule,
  WidgetModule,
  WidgetStatAComponent,
  WidgetStatBComponent,
  WidgetStatCComponent,
  WidgetStatDComponent,
  WidgetStatEComponent,
  WidgetStatFComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.2.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@coreui_angular.js.map
