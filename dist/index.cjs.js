'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("image", { width: "32", height: "32", href: "/images/egg/logo.png" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/egg/9.png" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/egg/99.png" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("image", { width: 80, height: 80, href: "/images/ticket.svg" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("image", { width: 48, height: 48, href: "/images/ticket.svg" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$B, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("img", { src: "/images/egg/9.gif" })));
};
var Container$1 = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 170 36" }, props),
        React__default['default'].createElement("image", { width: "170", height: "36", href: isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png' })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React__default['default'].createElement("g", { id: "surface1" },
            React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React__default['default'].createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React__default['default'].createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React__default['default'].createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React__default['default'].createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React__default['default'].createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React__default['default'].createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React__default['default'].createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React__default['default'].createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, { viewBox: "0 0 24 24", width: "24px", color: "text", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("g", { "fill-rule": "evenodd" },
            React__default['default'].createElement("path", { d: "M11.549 18.906c3.81 0 6.906-3.09 6.906-6.906A6.908 6.908 0 006.509 7.278a6.909 6.909 0 005.04 11.628zm-2.41-4.173c.063-.225.122-.455.196-.676.083-.26.152-.294.392-.166.411.215.842.333 1.297.391.294.035.583.005.853-.112.51-.22.587-.808.156-1.166a1.937 1.937 0 00-.484-.284c-.446-.196-.911-.343-1.328-.598-.68-.406-1.117-.97-1.063-1.797.06-.94.588-1.523 1.45-1.837.353-.127.358-.122.358-.495v-.377c.005-.279.054-.328.333-.338.088-.005.171 0 .26 0 .592 0 .592 0 .597.593 0 .421 0 .421.421.485.319.049.627.142.921.274.162.074.225.186.176.358-.073.254-.142.514-.225.769-.078.24-.152.274-.382.161a2.904 2.904 0 00-1.46-.289 1.096 1.096 0 00-.391.079c-.441.19-.515.68-.138.984.191.152.407.265.632.358.392.161.784.318 1.156.524 1.185.656 1.504 2.14.671 3.154a2.25 2.25 0 01-1.15.74c-.202.054-.29.161-.28.367.01.206 0 .407 0 .612 0 .182-.093.28-.274.284-.22.005-.441.005-.657 0-.19-.004-.284-.112-.284-.298 0-.147-.005-.3-.005-.446-.005-.328-.014-.343-.328-.392-.406-.064-.803-.157-1.17-.338-.304-.147-.333-.22-.25-.524z" }),
            React__default['default'].createElement("path", { d: "M19.028 19.484c-3.987 3.987-10.389 4.12-14.537.407h1.332v-1.42H2.042V22.25h1.42v-1.376A11.967 11.967 0 0011.544 24c3.076 0 6.147-1.17 8.488-3.512l.504-.504-1.004-1.004-.504.504zM19.635 1.749v1.376A11.967 11.967 0 0011.553 0C8.478 0 5.407 1.17 3.065 3.512l-.5.5L3.57 5.015l.504-.505C8.061.524 14.463.391 18.611 4.104H17.28v1.42H21.06V1.75h-1.425z" }))));
};

var Icon$13 = function (props) {
    var theme = styled.useTheme();
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props, { width: '19px' }),
        React__default['default'].createElement("image", { width: "19", height: "19", href: theme.isDark ? '/images/mediumDark.svg' : '/images/mediumLight.svg' })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24", width: "24", height: "24", color: "text", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", id: "svg", version: "1.1", width: "24", height: "24", viewBox: "0, 0, 400, 400" }, props),
        React__default['default'].createElement("g", { id: "svgg" },
            React__default['default'].createElement("path", { id: "path0", d: "M182.100 1.095 C 180.203 1.228,180.000 1.333,180.000 2.183 C 180.000 2.926,180.168 3.081,180.796 2.917 C 181.233 2.803,181.505 2.569,181.399 2.398 C 181.115 1.939,183.755 1.497,187.535 1.373 C 189.369 1.313,190.974 1.159,191.102 1.032 C 191.339 0.794,185.851 0.833,182.100 1.095 M208.094 1.028 C 208.220 1.153,210.005 1.313,212.061 1.383 C 217.002 1.551,219.463 2.050,219.005 2.793 C 218.861 3.025,219.025 3.089,219.399 2.945 C 220.961 2.346,219.803 1.401,217.196 1.147 C 213.798 0.815,207.804 0.737,208.094 1.028 M166.667 3.067 C 166.520 3.213,166.406 3.708,166.413 4.167 C 166.425 4.985,166.436 4.986,167.013 4.224 C 167.858 3.106,167.575 2.159,166.667 3.067 M231.200 3.000 C 231.200 3.366,232.794 4.800,233.200 4.800 C 234.017 4.800,233.585 3.289,232.700 3.052 C 231.589 2.754,231.200 2.741,231.200 3.000 M154.938 5.417 C 154.808 5.757,154.809 6.142,154.941 6.274 C 155.226 6.559,156.400 5.655,156.400 5.151 C 156.400 4.547,155.187 4.768,154.938 5.417 M242.108 5.237 C 242.498 5.464,242.720 5.806,242.602 5.997 C 242.484 6.188,242.570 6.458,242.793 6.596 C 243.028 6.741,243.200 6.415,243.200 5.824 C 243.200 5.025,243.002 4.803,242.300 4.812 C 241.489 4.823,241.470 4.865,242.108 5.237 M147.467 7.067 C 147.052 7.482,147.153 8.800,147.600 8.800 C 147.820 8.800,148.000 8.626,148.000 8.413 C 148.000 8.200,148.495 7.757,149.100 7.429 L 150.200 6.832 148.967 6.816 C 148.288 6.807,147.613 6.920,147.467 7.067 M249.700 7.265 C 250.305 7.486,250.800 7.922,250.800 8.233 C 250.800 8.545,251.160 8.800,251.600 8.800 C 252.050 8.800,252.400 8.533,252.400 8.190 C 252.400 7.514,250.826 6.783,249.474 6.832 C 248.707 6.859,248.735 6.912,249.700 7.265 M139.867 9.067 C 138.534 10.399,139.961 11.099,141.362 9.800 L 142.441 8.800 141.287 8.800 C 140.653 8.800,140.013 8.920,139.867 9.067 M257.375 9.431 C 257.719 9.683,258.000 10.093,258.000 10.344 C 258.000 10.839,258.514 10.953,258.919 10.547 C 259.398 10.068,258.396 8.850,257.574 8.912 C 256.855 8.966,256.830 9.032,257.375 9.431 M135.800 10.689 C 134.724 10.954,134.000 11.580,134.000 12.246 C 134.000 13.064,135.523 12.688,136.216 11.699 C 136.550 11.221,137.376 10.780,138.105 10.689 L 139.400 10.528 138.000 10.510 C 137.230 10.501,136.240 10.581,135.800 10.689 M262.970 11.158 C 263.394 11.324,263.876 11.806,264.042 12.230 C 264.294 12.874,264.348 12.819,264.372 11.900 C 264.396 10.953,264.247 10.804,263.300 10.828 C 262.381 10.852,262.326 10.906,262.970 11.158 M130.150 12.987 C 130.026 13.310,130.017 13.805,130.131 14.087 C 130.260 14.409,130.349 14.340,130.368 13.900 C 130.386 13.515,130.580 13.200,130.800 13.200 C 131.020 13.200,131.200 13.020,131.200 12.800 C 131.200 12.185,130.403 12.326,130.150 12.987 M268.000 12.877 C 268.000 13.583,268.794 14.400,269.480 14.400 C 269.766 14.400,270.000 14.040,270.000 13.600 C 270.000 13.160,269.835 12.800,269.633 12.800 C 269.431 12.800,268.981 12.691,268.633 12.557 C 268.241 12.407,268.000 12.528,268.000 12.877 M124.411 14.987 C 123.654 15.898,124.103 16.640,124.918 15.825 C 125.654 15.089,125.814 14.400,125.249 14.400 C 125.056 14.400,124.679 14.664,124.411 14.987 M273.371 15.029 C 273.717 15.374,274.000 15.824,274.000 16.029 C 274.000 16.233,274.360 16.400,274.800 16.400 C 275.855 16.400,275.816 15.796,274.711 15.023 C 273.493 14.169,272.517 14.174,273.371 15.029 M119.756 16.792 C 118.441 17.323,118.211 18.400,119.413 18.400 C 120.150 18.400,120.400 18.187,120.400 17.557 C 120.400 16.972,120.584 16.785,121.000 16.945 C 121.330 17.071,121.600 17.001,121.600 16.787 C 121.600 16.324,120.909 16.326,119.756 16.792 M278.914 17.320 C 279.951 18.397,280.173 18.375,279.810 17.230 C 279.665 16.774,279.205 16.400,278.787 16.400 C 278.079 16.400,278.088 16.461,278.914 17.320 M114.926 19.100 C 114.789 19.485,114.605 19.934,114.516 20.097 C 114.428 20.261,114.816 20.357,115.378 20.310 C 116.040 20.255,116.400 19.986,116.400 19.546 C 116.400 19.172,116.625 18.776,116.900 18.665 C 117.175 18.554,116.899 18.449,116.287 18.432 C 115.570 18.411,115.086 18.648,114.926 19.100 M282.400 18.692 C 282.730 18.817,283.132 19.118,283.294 19.360 C 283.475 19.631,283.590 19.532,283.594 19.100 C 283.598 18.630,283.305 18.410,282.700 18.432 C 282.099 18.453,281.999 18.539,282.400 18.692 M110.800 21.262 C 110.800 22.114,110.811 22.115,111.700 21.366 C 112.195 20.950,112.675 20.562,112.767 20.504 C 112.858 20.447,112.453 20.400,111.867 20.400 C 111.041 20.400,110.800 20.595,110.800 21.262 M287.273 21.400 C 287.523 21.950,287.970 22.400,288.264 22.400 C 289.074 22.400,288.906 21.285,288.026 20.814 C 286.885 20.203,286.769 20.294,287.273 21.400 M108.002 22.357 C 107.453 22.510,106.945 22.942,106.873 23.318 C 106.679 24.326,107.692 24.123,108.519 22.987 C 108.914 22.444,109.184 22.018,109.119 22.040 C 109.053 22.062,108.551 22.205,108.002 22.357 M103.900 24.276 C 102.903 24.536,102.988 26.000,104.000 26.000 C 104.444 26.000,104.800 25.733,104.800 25.400 C 104.800 25.070,104.980 24.800,105.200 24.800 C 105.420 24.800,105.600 24.620,105.600 24.400 C 105.600 23.989,105.128 23.955,103.900 24.276 M293.600 24.371 C 293.600 24.607,293.857 24.800,294.171 24.800 C 294.485 24.800,294.833 25.115,294.945 25.500 C 295.063 25.906,295.117 25.782,295.074 25.204 C 295.003 24.243,293.600 23.450,293.600 24.371 M101.300 26.265 C 101.025 26.376,100.806 26.767,100.813 27.133 C 100.824 27.738,100.870 27.741,101.313 27.165 C 101.581 26.816,102.070 26.425,102.400 26.296 C 102.933 26.089,102.933 26.063,102.400 26.063 C 102.070 26.063,101.575 26.154,101.300 26.265 M297.000 26.262 C 297.440 26.377,298.111 26.861,298.491 27.336 C 298.989 27.959,299.183 28.032,299.185 27.600 C 299.189 26.626,298.676 26.202,297.400 26.124 C 296.686 26.081,296.524 26.137,297.000 26.262 M97.246 29.100 C 97.282 29.943,97.339 30.013,97.493 29.400 C 97.603 28.960,97.897 28.468,98.146 28.306 C 98.434 28.120,98.344 28.010,97.900 28.006 C 97.390 28.002,97.213 28.299,97.246 29.100 M300.812 28.823 C 301.644 30.377,303.102 30.383,302.610 28.830 C 302.437 28.285,302.007 28.000,301.359 28.000 C 300.487 28.000,300.423 28.096,300.812 28.823 M93.414 30.757 C 93.282 31.173,92.806 31.610,92.357 31.727 C 91.908 31.845,91.448 32.293,91.336 32.725 C 91.191 33.276,90.654 33.585,89.525 33.766 C 88.392 33.947,87.858 34.255,87.713 34.811 C 87.580 35.318,87.166 35.600,86.553 35.600 C 85.774 35.600,85.605 35.801,85.625 36.700 C 85.649 37.712,85.678 37.732,85.994 36.950 C 86.219 36.393,86.845 36.006,87.813 35.824 C 88.792 35.640,89.357 35.287,89.491 34.774 C 89.602 34.348,89.988 34.000,90.348 34.000 C 90.708 34.000,91.522 33.450,92.156 32.778 C 92.790 32.106,93.510 31.629,93.755 31.719 C 94.000 31.808,94.611 31.458,95.114 30.941 L 96.028 30.000 94.841 30.000 C 94.028 30.000,93.578 30.238,93.414 30.757 M303.547 30.359 C 303.848 30.550,304.250 30.952,304.441 31.253 C 304.696 31.656,304.789 31.563,304.794 30.900 C 304.798 30.230,304.570 30.002,303.900 30.006 C 303.237 30.011,303.144 30.104,303.547 30.359 M307.186 32.705 C 308.541 33.912,310.400 34.629,310.400 33.945 C 310.400 33.755,309.950 33.600,309.400 33.600 C 308.667 33.600,308.400 33.387,308.400 32.800 C 308.400 32.360,308.145 32.000,307.833 32.000 C 307.521 32.000,306.936 31.881,306.533 31.735 C 306.130 31.589,306.423 32.026,307.186 32.705 M312.903 36.769 C 313.675 37.446,314.674 38.000,315.123 38.000 C 315.573 38.000,316.024 38.315,316.124 38.700 C 316.262 39.227,316.319 39.177,316.354 38.500 C 316.389 37.818,316.181 37.600,315.495 37.600 C 314.940 37.600,314.437 37.252,314.195 36.700 C 313.944 36.129,313.380 35.752,312.650 35.669 L 311.501 35.537 312.903 36.769 M82.700 38.032 C 82.315 38.256,82.000 38.701,82.000 39.020 C 82.000 39.372,81.607 39.600,81.000 39.600 C 80.226 39.600,80.003 39.803,80.012 40.500 C 80.022 41.264,80.082 41.301,80.407 40.745 C 80.618 40.384,81.278 39.967,81.875 39.817 C 83.246 39.473,85.126 37.593,84.081 37.612 C 83.706 37.619,83.085 37.808,82.700 38.032 M318.460 40.572 C 318.718 41.137,319.145 41.600,319.410 41.600 C 319.674 41.600,320.320 42.026,320.845 42.546 C 321.370 43.066,322.193 43.615,322.674 43.765 C 323.155 43.915,323.638 44.344,323.748 44.719 C 323.858 45.093,323.914 44.950,323.874 44.400 C 323.822 43.696,323.534 43.362,322.900 43.272 C 322.322 43.190,322.000 42.868,322.000 42.372 C 322.000 41.821,321.722 41.600,321.028 41.600 C 320.324 41.600,320.020 41.351,319.928 40.700 C 319.845 40.120,319.478 39.754,318.896 39.672 C 318.060 39.553,318.027 39.622,318.460 40.572 M77.100 43.087 C 76.267 43.213,76.011 43.465,76.046 44.127 C 76.082 44.803,76.134 44.842,76.276 44.300 C 76.376 43.915,76.795 43.600,77.206 43.600 C 77.617 43.600,78.064 43.420,78.200 43.200 C 78.336 42.980,78.392 42.827,78.324 42.860 C 78.256 42.893,77.705 42.995,77.100 43.087 M73.035 46.200 C 72.525 46.750,71.724 47.200,71.254 47.200 C 70.594 47.200,70.400 47.444,70.400 48.275 L 70.400 49.350 71.522 48.275 C 72.139 47.684,72.949 47.200,73.322 47.200 C 73.929 47.200,74.075 46.961,73.966 46.145 C 73.947 46.004,74.172 45.737,74.466 45.551 C 74.892 45.281,74.895 45.211,74.481 45.206 C 74.195 45.203,73.545 45.650,73.035 46.200 M324.800 45.590 C 324.800 45.842,324.967 45.944,325.171 45.818 C 325.376 45.691,325.618 45.906,325.711 46.294 C 325.850 46.880,325.872 46.869,325.839 46.231 C 325.798 45.421,324.800 44.805,324.800 45.590 M327.097 47.700 C 327.315 47.975,327.593 48.470,327.715 48.800 C 327.841 49.142,327.950 48.927,327.968 48.300 C 327.990 47.539,327.800 47.200,327.351 47.200 C 326.888 47.200,326.815 47.343,327.097 47.700 M329.700 50.100 C 330.029 50.595,330.456 51.009,330.649 51.020 C 331.720 51.080,332.895 51.778,333.201 52.535 C 333.526 53.342,333.551 53.326,333.575 52.300 C 333.594 51.454,333.413 51.200,332.790 51.200 C 332.294 51.200,331.833 50.812,331.600 50.200 C 331.327 49.481,330.922 49.200,330.161 49.200 C 329.153 49.200,329.131 49.243,329.700 50.100 M67.630 50.751 C 67.096 50.900,66.588 51.235,66.502 51.494 C 66.397 51.808,66.755 51.761,67.572 51.354 C 68.490 50.896,69.395 50.163,68.700 50.440 C 68.645 50.462,68.163 50.602,67.630 50.751 M334.175 53.241 C 334.001 53.522,334.044 53.620,334.280 53.474 C 334.502 53.337,334.878 53.654,335.117 54.178 C 335.356 54.702,335.922 55.248,336.376 55.392 C 336.829 55.536,337.200 55.905,337.200 56.213 C 337.200 56.520,337.522 56.944,337.916 57.155 C 338.310 57.366,338.860 57.965,339.140 58.488 C 339.831 59.778,341.169 60.632,341.008 59.679 C 340.945 59.306,340.684 59.048,340.428 59.106 C 340.172 59.165,339.773 58.670,339.542 58.006 C 339.281 57.256,338.844 56.800,338.389 56.800 C 337.933 56.800,337.607 56.459,337.528 55.900 C 337.447 55.330,337.079 54.954,336.525 54.875 C 335.993 54.800,335.600 54.420,335.525 53.907 C 335.379 52.924,334.607 52.542,334.175 53.241 M60.590 57.630 C 60.212 58.822,60.527 58.915,61.067 57.771 C 61.319 57.237,61.374 56.800,61.189 56.800 C 61.005 56.800,60.735 57.174,60.590 57.630 M341.947 61.159 C 342.248 61.350,342.650 61.752,342.841 62.053 C 343.096 62.456,343.189 62.363,343.194 61.700 C 343.198 61.030,342.970 60.802,342.300 60.806 C 341.637 60.811,341.544 60.904,341.947 61.159 M343.613 62.700 C 343.634 63.174,345.090 64.800,345.493 64.800 C 345.694 64.800,346.242 65.565,346.711 66.500 C 347.181 67.435,347.932 68.427,348.382 68.703 C 348.832 68.980,349.200 69.475,349.200 69.803 C 349.200 70.133,349.558 70.400,350.000 70.400 C 350.440 70.400,350.800 70.233,350.800 70.029 C 350.800 69.548,349.652 68.400,349.171 68.400 C 348.967 68.400,348.800 68.023,348.800 67.563 C 348.800 67.070,348.480 66.641,348.022 66.522 C 347.595 66.410,347.190 65.932,347.122 65.459 C 347.046 64.921,346.663 64.552,346.100 64.472 C 345.542 64.393,345.200 64.067,345.200 63.615 C 345.200 63.214,344.915 62.776,344.567 62.643 C 343.746 62.328,343.597 62.337,343.613 62.700 M50.861 67.596 C 50.569 68.436,50.259 68.721,49.822 68.553 C 49.378 68.383,49.200 68.561,49.200 69.173 C 49.200 69.998,49.228 70.004,49.923 69.316 C 52.581 66.686,52.787 66.400,52.021 66.400 C 51.556 66.400,51.122 66.847,50.861 67.596 M47.200 71.400 C 47.200 72.114,46.984 72.400,46.443 72.400 C 45.588 72.400,45.188 73.165,45.225 74.733 C 45.250 75.770,45.261 75.775,45.612 74.900 C 45.811 74.405,46.250 74.000,46.587 74.000 C 46.924 74.000,47.200 73.738,47.200 73.419 C 47.200 72.411,48.085 70.844,48.756 70.665 C 49.110 70.570,48.905 70.472,48.300 70.446 C 47.381 70.408,47.200 70.565,47.200 71.400 M353.600 74.539 C 354.698 75.117,355.021 75.082,354.616 74.427 C 354.471 74.192,353.958 74.003,353.476 74.006 C 352.636 74.012,352.641 74.033,353.600 74.539 M355.608 76.870 C 356.267 77.528,356.704 78.231,356.580 78.432 C 356.456 78.632,356.793 79.203,357.329 79.699 C 357.865 80.196,358.409 80.962,358.539 81.401 C 358.669 81.840,358.695 81.484,358.598 80.610 C 358.494 79.678,358.100 78.767,357.646 78.410 C 357.220 78.074,356.811 77.453,356.736 77.029 C 356.658 76.587,356.132 76.132,355.505 75.965 L 354.410 75.672 355.608 76.870 M43.200 77.000 C 43.200 77.730,42.986 78.000,42.408 78.000 C 41.896 78.000,41.526 78.354,41.364 79.000 C 41.207 79.626,40.830 80.000,40.357 80.000 C 39.780 80.000,39.600 80.290,39.600 81.219 L 39.600 82.437 40.587 81.719 C 41.131 81.323,41.581 80.700,41.587 80.333 C 41.608 79.224,42.054 78.400,42.633 78.400 C 42.933 78.400,43.459 77.860,43.800 77.200 C 44.354 76.129,44.355 76.000,43.810 76.000 C 43.426 76.000,43.200 76.370,43.200 77.000 M175.400 80.238 C 174.080 80.552,171.290 80.952,169.200 81.128 C 166.739 81.335,165.032 81.689,164.354 82.134 C 163.779 82.512,162.159 83.021,160.754 83.266 C 159.349 83.511,158.094 83.875,157.965 84.075 C 157.835 84.275,156.782 84.688,155.624 84.994 C 154.467 85.299,153.223 85.816,152.860 86.143 C 152.497 86.470,151.660 86.869,151.000 87.030 C 150.340 87.190,149.260 87.743,148.600 88.257 C 147.940 88.772,147.040 89.462,146.600 89.792 C 146.160 90.121,144.956 91.022,143.924 91.795 C 142.892 92.568,141.900 93.200,141.720 93.200 C 141.540 93.200,141.168 93.560,140.893 94.000 C 140.618 94.440,140.239 94.800,140.051 94.800 C 139.605 94.800,135.046 99.316,133.000 101.784 C 132.120 102.846,131.095 104.039,130.721 104.436 C 130.348 104.833,129.754 105.716,129.400 106.399 C 129.047 107.082,128.498 107.741,128.179 107.863 C 127.861 107.986,127.600 108.336,127.600 108.643 C 127.600 108.949,127.277 109.523,126.883 109.917 C 126.488 110.312,125.917 111.257,125.613 112.017 C 125.310 112.778,124.732 113.722,124.331 114.116 C 123.929 114.509,123.600 115.208,123.600 115.668 C 123.600 116.129,123.256 117.067,122.837 117.753 C 122.417 118.439,121.860 119.810,121.599 120.800 C 121.339 121.790,120.889 122.870,120.599 123.200 C 120.310 123.530,119.947 124.880,119.793 126.200 C 119.639 127.520,119.157 129.410,118.722 130.400 C 116.336 135.825,117.760 158.854,120.647 161.543 C 121.296 162.148,121.528 162.998,121.718 165.472 C 121.987 168.950,123.341 173.033,124.417 173.609 C 124.797 173.812,125.230 174.467,125.380 175.063 C 125.530 175.659,126.090 176.667,126.626 177.304 C 127.162 177.940,127.600 178.710,127.600 179.015 C 127.600 179.776,133.775 186.000,134.530 186.000 C 134.865 186.000,135.647 186.425,136.269 186.945 C 136.891 187.465,137.850 188.030,138.400 188.200 C 138.950 188.371,139.829 188.845,140.354 189.255 C 140.879 189.665,141.574 190.000,141.900 190.000 C 142.950 190.000,146.304 192.770,147.571 194.681 C 149.015 196.861,149.330 199.855,148.315 201.757 C 147.615 203.069,143.816 206.400,143.020 206.400 C 142.738 206.400,142.079 206.735,141.554 207.144 C 141.029 207.553,139.700 208.013,138.600 208.167 C 135.474 208.603,135.078 208.771,135.628 209.434 C 136.801 210.848,148.006 209.026,150.400 207.032 C 150.730 206.757,151.630 206.282,152.400 205.977 C 154.515 205.140,158.929 200.501,160.364 197.608 C 161.795 194.726,162.203 188.261,161.030 187.087 C 160.716 186.773,160.183 185.854,159.844 185.044 C 159.506 184.235,158.998 183.327,158.715 183.028 C 158.432 182.729,156.850 181.004,155.200 179.194 C 153.550 177.385,150.549 174.261,148.532 172.252 C 144.604 168.341,141.126 164.232,139.112 161.124 C 138.426 160.066,137.716 159.200,137.533 159.200 C 137.350 159.200,137.200 158.957,137.200 158.660 C 137.200 158.363,136.660 157.375,136.000 156.463 C 135.340 155.552,134.800 154.602,134.800 154.351 C 134.800 154.100,134.450 153.327,134.021 152.634 C 133.593 151.941,133.047 150.480,132.807 149.387 C 132.568 148.294,132.104 146.823,131.776 146.118 C 131.085 144.633,130.862 133.734,131.499 132.595 C 131.822 132.017,131.989 132.115,132.685 133.295 C 134.617 136.569,141.060 136.050,144.824 132.316 C 153.552 123.657,151.308 113.615,140.878 114.662 L 138.356 114.915 138.641 113.757 C 138.798 113.121,139.348 112.043,139.863 111.362 C 140.379 110.681,140.800 109.932,140.800 109.696 C 140.800 108.940,144.596 104.800,145.289 104.800 C 145.460 104.800,145.600 105.046,145.600 105.346 C 145.600 108.437,151.061 109.117,153.689 106.355 C 156.606 103.288,156.726 101.535,154.195 98.931 L 152.391 97.075 153.355 96.437 C 153.886 96.087,155.283 95.142,156.460 94.338 C 157.637 93.534,159.230 92.593,160.000 92.246 C 160.770 91.900,161.670 91.457,162.000 91.261 C 163.419 90.423,167.838 88.400,168.251 88.400 C 168.499 88.400,168.912 88.147,169.168 87.838 C 169.425 87.529,170.826 87.069,172.282 86.815 C 173.737 86.562,175.432 86.094,176.047 85.776 C 176.663 85.457,178.749 85.024,180.683 84.814 C 182.617 84.603,185.280 84.244,186.600 84.017 C 189.760 83.474,198.445 83.484,199.874 84.032 C 200.493 84.270,202.673 84.637,204.717 84.848 C 207.142 85.099,208.880 85.504,209.717 86.015 C 210.423 86.445,211.363 86.798,211.806 86.799 C 212.249 86.799,213.264 87.150,214.062 87.577 C 215.950 88.589,218.600 88.836,218.600 88.000 C 218.600 87.578,218.084 87.363,216.856 87.275 C 215.537 87.180,215.063 86.963,214.912 86.385 C 214.778 85.873,214.230 85.541,213.256 85.383 C 210.038 84.860,209.600 84.714,209.600 84.168 C 209.600 83.856,209.465 83.596,209.300 83.592 C 207.340 83.540,203.281 82.635,202.716 82.124 C 202.171 81.631,200.773 81.397,197.095 81.182 C 194.043 81.004,191.640 80.652,190.713 80.248 C 188.775 79.404,178.937 79.397,175.400 80.238 M37.646 84.500 C 37.679 85.138,37.745 85.203,37.871 84.725 C 37.969 84.353,38.443 83.973,38.925 83.879 C 39.645 83.739,39.606 83.699,38.700 83.654 C 37.797 83.610,37.608 83.762,37.646 84.500 M361.237 84.500 C 362.209 85.408,362.665 85.267,362.250 84.187 C 362.126 83.864,361.631 83.600,361.149 83.600 C 360.274 83.600,360.274 83.601,361.237 84.500 M35.750 86.187 C 35.306 87.343,35.817 87.547,36.742 86.582 C 37.678 85.606,37.678 85.600,36.829 85.600 C 36.359 85.600,35.874 85.864,35.750 86.187 M34.416 88.875 C 33.319 90.052,33.388 90.423,34.597 89.862 C 35.145 89.608,35.595 89.085,35.597 88.700 C 35.601 87.787,35.402 87.817,34.416 88.875 M219.376 89.813 C 219.804 90.136,220.452 90.400,220.818 90.400 C 221.184 90.400,221.969 90.850,222.562 91.400 C 223.736 92.488,225.200 92.734,225.200 91.843 C 225.200 91.240,224.362 90.800,223.214 90.800 C 222.818 90.800,222.399 90.440,222.284 90.000 C 222.115 89.352,221.744 89.202,220.337 89.213 C 218.723 89.225,218.655 89.267,219.376 89.813 M364.860 89.868 C 365.454 90.026,365.861 90.756,366.550 92.900 C 366.674 93.285,367.051 93.600,367.387 93.600 C 367.724 93.600,368.000 93.894,368.000 94.254 C 368.000 94.614,368.450 95.325,369.000 95.835 C 369.942 96.708,370.000 96.717,370.000 95.981 C 370.000 95.551,369.865 95.221,369.700 95.247 C 368.824 95.386,368.477 95.086,368.261 94.006 C 368.130 93.349,367.657 92.499,367.211 92.117 C 366.765 91.735,366.400 91.012,366.400 90.511 C 366.400 89.773,366.192 89.609,365.300 89.646 C 364.695 89.672,364.497 89.772,364.860 89.868 M32.229 91.829 C 31.515 92.542,31.406 93.200,32.000 93.200 C 32.220 93.200,32.400 92.930,32.400 92.600 C 32.400 92.270,32.659 92.000,32.976 92.000 C 33.293 92.000,33.664 91.820,33.800 91.600 C 34.199 90.955,32.916 91.141,32.229 91.829 M225.600 93.056 C 225.600 93.503,226.973 94.374,227.700 94.387 C 228.719 94.406,228.558 93.336,227.500 93.052 C 226.322 92.736,225.600 92.738,225.600 93.056 M30.413 94.776 C 30.053 95.448,30.090 95.600,30.610 95.600 C 30.960 95.600,31.137 95.422,31.003 95.205 C 30.858 94.971,31.035 94.915,31.434 95.068 C 31.894 95.245,32.052 95.156,31.930 94.789 C 31.634 93.903,30.884 93.896,30.413 94.776 M228.800 95.151 C 228.800 95.344,229.054 95.713,229.364 95.970 C 229.991 96.491,230.632 95.900,230.200 95.200 C 229.895 94.707,228.800 94.669,228.800 95.151 M231.260 97.180 C 231.348 97.444,231.550 97.647,231.710 97.630 C 232.188 97.581,232.096 97.032,231.580 96.860 C 231.316 96.772,231.172 96.916,231.260 97.180 M28.150 97.787 C 27.706 98.943,28.217 99.147,29.142 98.182 C 30.078 97.206,30.078 97.200,29.229 97.200 C 28.759 97.200,28.274 97.464,28.150 97.787 M26.500 101.065 C 26.225 101.176,26.003 101.747,26.006 102.333 L 26.012 103.400 26.539 102.400 C 26.828 101.850,27.276 101.445,27.533 101.500 C 27.790 101.555,28.000 101.420,28.000 101.200 C 28.000 100.781,27.349 100.722,26.500 101.065 M372.000 102.023 C 372.000 102.538,372.316 102.958,372.800 103.084 C 373.240 103.199,373.600 103.482,373.600 103.713 C 373.600 103.944,373.706 104.027,373.837 103.897 C 374.250 103.483,373.575 102.015,372.773 101.586 C 372.122 101.237,372.000 101.306,372.000 102.023 M24.040 106.100 C 24.075 107.257,24.109 107.294,24.349 106.437 C 24.497 105.907,24.974 105.335,25.409 105.165 C 26.087 104.900,26.043 104.852,25.100 104.828 C 24.112 104.803,24.004 104.932,24.040 106.100 M374.193 105.211 C 374.053 105.437,374.358 105.964,374.869 106.382 C 375.639 107.010,375.823 107.039,375.933 106.551 C 376.186 105.430,374.744 104.319,374.193 105.211 M376.357 109.664 C 376.710 110.286,377.135 110.796,377.300 110.797 C 377.465 110.799,377.600 111.242,377.600 111.782 C 377.600 112.322,378.050 113.214,378.600 113.764 C 379.150 114.314,379.600 114.982,379.600 115.248 C 379.600 115.515,379.691 115.642,379.803 115.531 C 380.275 115.059,379.470 112.859,378.757 112.673 C 378.288 112.550,377.998 112.118,377.995 111.537 C 377.984 109.808,377.535 108.881,376.620 108.706 C 375.734 108.537,375.728 108.558,376.357 109.664 M22.000 109.200 C 22.000 109.420,22.259 109.600,22.576 109.600 C 22.893 109.600,23.264 109.420,23.400 109.200 C 23.536 108.980,23.277 108.800,22.824 108.800 C 22.371 108.800,22.000 108.980,22.000 109.200 M20.000 115.800 C 20.000 116.130,19.651 116.400,19.225 116.400 C 18.706 116.400,18.469 116.655,18.508 117.172 C 18.540 117.597,18.712 117.855,18.890 117.745 C 19.067 117.635,19.109 117.377,18.983 117.172 C 18.856 116.968,19.123 116.800,19.576 116.800 C 20.133 116.800,20.400 116.541,20.400 116.000 C 20.400 115.560,20.310 115.200,20.200 115.200 C 20.090 115.200,20.000 115.470,20.000 115.800 M380.000 117.613 C 380.000 118.391,381.002 119.132,381.450 118.684 C 381.750 118.383,380.856 116.800,380.386 116.800 C 380.174 116.800,380.000 117.166,380.000 117.613 M16.432 121.500 C 16.450 122.153,16.558 122.356,16.696 122.000 C 16.825 121.670,17.216 121.181,17.565 120.913 C 18.122 120.486,18.089 120.424,17.300 120.413 C 16.574 120.402,16.406 120.613,16.432 121.500 M381.600 121.814 C 381.600 122.162,381.735 122.365,381.900 122.266 C 382.291 122.029,383.226 123.040,382.909 123.357 C 382.776 123.491,382.877 123.600,383.133 123.600 C 383.960 123.600,383.630 122.512,382.600 121.837 C 381.697 121.245,381.600 121.243,381.600 121.814 M248.687 123.900 C 248.598 124.065,248.660 124.650,248.823 125.200 C 249.101 126.135,249.123 126.115,249.160 124.900 C 249.199 123.646,249.022 123.273,248.687 123.900 M14.790 125.426 C 14.277 126.776,14.268 128.652,14.781 127.386 C 14.962 126.938,15.401 126.331,15.755 126.037 C 16.571 125.360,16.591 124.400,15.790 124.400 C 15.455 124.400,15.005 124.862,14.790 125.426 M383.600 126.653 C 383.600 127.012,383.932 127.597,384.337 127.953 C 384.743 128.309,385.179 128.870,385.306 129.200 C 385.433 129.530,385.551 129.161,385.568 128.380 C 385.601 126.923,385.039 126.000,384.120 126.000 C 383.834 126.000,383.600 126.294,383.600 126.653 M12.550 130.587 C 12.119 131.710,12.607 131.877,13.592 130.941 L 14.583 130.000 13.679 130.000 C 13.182 130.000,12.674 130.264,12.550 130.587 M250.697 131.500 C 250.615 131.665,250.666 133.060,250.811 134.600 L 251.074 137.400 251.137 134.300 C 251.195 131.439,251.083 130.727,250.697 131.500 M386.295 132.500 C 386.754 132.995,387.211 133.850,387.310 134.400 C 387.450 135.171,387.504 135.076,387.546 133.980 C 387.603 132.490,387.043 131.600,386.050 131.600 C 385.603 131.600,385.662 131.818,386.295 132.500 M10.800 136.711 C 10.800 137.243,10.975 137.539,11.207 137.396 C 11.430 137.258,11.509 136.976,11.381 136.769 C 11.253 136.562,11.565 136.225,12.074 136.020 C 12.969 135.659,12.963 135.649,11.900 135.711 C 11.031 135.761,10.800 135.971,10.800 136.711 M388.300 138.088 C 388.795 138.327,389.200 138.795,389.200 139.128 C 389.200 139.461,389.306 139.627,389.437 139.497 C 389.967 138.966,389.118 137.601,388.273 137.627 L 387.400 137.654 388.300 138.088 M10.493 139.200 C 10.493 139.970,10.575 140.285,10.676 139.900 C 10.776 139.515,10.776 138.885,10.676 138.500 C 10.575 138.115,10.493 138.430,10.493 139.200 M145.894 139.135 C 143.650 140.614,143.206 141.855,144.068 144.239 C 145.420 147.976,152.000 146.385,152.000 142.321 C 152.000 139.581,148.213 137.605,145.894 139.135 M9.500 141.500 C 9.043 141.603,8.804 142.030,8.812 142.729 C 8.822 143.637,8.885 143.695,9.225 143.113 C 9.445 142.735,9.913 142.265,10.264 142.068 C 11.015 141.648,10.508 141.271,9.500 141.500 M389.600 143.600 C 389.600 143.820,389.960 144.360,390.400 144.800 L 391.200 145.600 391.200 144.643 C 391.200 144.116,390.915 143.576,390.567 143.443 C 389.714 143.115,389.600 143.134,389.600 143.600 M96.833 146.822 C 96.748 149.462,92.402 151.397,90.130 149.806 C 89.339 149.252,89.179 149.315,87.741 150.749 C 85.320 153.164,81.301 153.537,80.343 151.435 C 80.038 150.765,79.680 150.572,78.988 150.704 C 78.334 150.829,78.164 151.024,78.429 151.342 C 78.639 151.594,79.275 152.507,79.841 153.370 L 80.871 154.940 79.936 156.936 C 78.506 159.990,74.453 161.596,72.671 159.814 C 72.157 159.300,72.061 159.325,71.880 160.016 C 71.727 160.602,71.921 160.865,72.637 161.045 C 73.167 161.178,73.600 161.420,73.600 161.582 C 73.600 161.745,73.973 162.308,74.429 162.833 C 74.885 163.359,75.358 164.290,75.481 164.903 C 75.830 166.652,76.241 166.541,77.138 164.456 C 77.595 163.393,78.246 162.294,78.585 162.013 C 78.923 161.732,79.200 161.338,79.200 161.138 C 79.200 160.671,81.860 158.000,82.325 158.000 C 82.518 158.000,82.996 157.647,83.386 157.215 C 83.777 156.783,84.750 156.216,85.548 155.954 C 86.347 155.693,87.442 155.191,87.983 154.839 C 89.367 153.938,97.986 153.927,99.066 154.825 C 99.470 155.160,100.285 155.677,100.879 155.974 C 101.563 156.315,102.002 156.895,102.079 157.556 C 102.151 158.181,102.562 158.759,103.104 158.996 C 103.601 159.214,104.118 159.754,104.253 160.196 C 104.389 160.638,104.835 161.320,105.245 161.711 C 105.655 162.102,106.112 162.912,106.261 163.511 C 106.410 164.110,106.861 165.050,107.263 165.600 C 107.665 166.150,108.107 167.500,108.245 168.600 C 108.611 171.515,110.120 173.423,110.971 172.046 C 112.171 170.105,111.816 161.594,110.456 159.672 C 110.029 159.070,109.569 157.494,109.406 156.078 C 109.134 153.708,109.021 153.493,107.534 152.509 C 106.487 151.816,105.874 151.068,105.719 150.297 C 105.413 148.765,104.666 148.533,103.358 149.562 C 101.316 151.168,98.728 150.130,97.467 147.200 C 96.911 145.906,96.863 145.877,96.833 146.822 M7.429 147.829 C 7.083 148.174,6.805 148.939,6.812 149.529 C 6.823 150.449,6.882 150.502,7.232 149.900 C 7.456 149.515,7.901 149.200,8.220 149.200 C 8.572 149.200,8.800 148.807,8.800 148.200 C 8.800 147.052,8.332 146.925,7.429 147.829 M252.893 149.200 C 252.893 149.970,252.975 150.285,253.076 149.900 C 253.176 149.515,253.176 148.885,253.076 148.500 C 252.975 148.115,252.893 148.430,252.893 149.200 M391.200 150.744 C 391.200 151.164,391.545 151.597,391.966 151.707 C 392.387 151.817,392.813 152.333,392.912 152.854 C 393.057 153.621,393.101 153.563,393.146 152.546 C 393.186 151.614,392.943 151.124,392.200 150.637 C 391.254 150.017,391.200 150.023,391.200 150.744 M233.700 152.702 C 232.985 153.345,232.394 154.125,232.387 154.436 C 232.381 154.746,231.932 155.900,231.391 157.000 C 230.850 158.100,230.407 159.360,230.407 159.800 C 230.407 160.240,230.850 161.500,231.391 162.600 C 231.932 163.700,232.381 165.026,232.387 165.547 C 232.395 166.112,233.066 167.161,234.052 168.147 L 235.704 169.800 239.405 169.937 L 243.105 170.074 244.952 168.226 L 246.800 166.379 246.800 161.851 C 246.800 157.758,246.719 157.251,245.959 156.563 C 245.497 156.144,244.868 155.319,244.563 154.729 C 244.258 154.139,243.602 153.528,243.106 153.370 C 242.609 153.213,241.993 152.797,241.737 152.446 C 240.782 151.141,235.241 151.317,233.700 152.702 M143.121 153.100 C 140.961 155.408,140.131 158.546,141.400 159.600 C 141.730 159.874,142.000 160.325,142.000 160.602 C 142.000 161.321,144.552 163.170,145.924 163.445 C 147.575 163.775,149.836 161.757,150.194 159.633 C 151.108 154.226,146.257 149.747,143.121 153.100 M241.575 153.550 C 246.801 156.408,247.883 162.985,243.803 167.100 L 241.722 169.200 239.015 169.200 C 236.068 169.200,233.481 167.315,232.978 164.800 C 232.868 164.250,232.484 162.858,232.126 161.706 C 231.522 159.767,231.523 159.462,232.137 157.560 C 232.502 156.432,232.798 155.304,232.796 155.054 C 232.777 152.564,238.103 151.652,241.575 153.550 M5.692 156.102 C 5.136 156.694,4.800 157.556,4.800 158.392 C 4.800 160.274,5.365 159.308,5.570 157.076 C 5.587 156.898,5.781 156.865,6.003 157.002 C 6.447 157.276,6.960 156.280,6.730 155.589 C 6.650 155.349,6.183 155.579,5.692 156.102 M273.400 156.375 C 272.520 156.525,271.224 156.953,270.520 157.324 C 269.816 157.696,268.996 158.000,268.698 158.000 C 266.813 158.000,263.794 163.230,264.125 165.924 C 264.375 167.964,265.942 171.522,266.962 172.369 C 267.313 172.660,267.600 173.082,267.600 173.306 C 267.600 173.530,268.431 174.686,269.446 175.875 C 271.367 178.123,271.289 179.521,269.238 179.636 C 268.887 179.655,269.500 179.924,270.600 180.233 C 273.498 181.046,275.927 180.617,277.247 179.058 L 278.294 177.822 277.154 176.757 C 276.527 176.171,275.398 175.576,274.647 175.435 C 273.895 175.294,273.052 174.903,272.772 174.566 C 272.492 174.229,271.665 173.704,270.933 173.398 C 270.167 173.078,269.399 172.366,269.125 171.721 C 268.862 171.104,268.336 170.240,267.956 169.800 C 266.314 167.900,266.940 164.030,269.057 162.990 C 269.529 162.758,270.183 162.346,270.511 162.074 C 271.490 161.261,276.027 161.053,277.200 161.767 C 277.750 162.101,278.662 162.567,279.227 162.801 C 280.511 163.334,283.074 166.358,283.424 167.753 C 283.568 168.329,283.934 168.800,284.236 168.800 C 284.968 168.800,288.396 172.109,288.414 172.831 C 288.421 173.144,288.775 174.120,289.200 175.000 C 290.200 177.071,290.306 182.648,289.379 184.440 C 288.528 186.087,288.958 187.340,290.288 187.085 C 290.842 186.979,291.805 187.185,292.427 187.541 C 293.516 188.166,293.599 188.152,294.679 187.154 C 295.295 186.584,296.117 186.006,296.503 185.870 C 297.857 185.394,298.247 183.714,297.250 182.653 C 295.408 180.693,296.359 176.400,298.636 176.400 C 299.498 176.400,299.334 176.070,297.636 174.389 C 295.639 172.411,295.216 170.716,296.340 169.196 L 297.163 168.082 296.082 167.620 C 293.444 166.494,291.974 164.707,291.728 162.329 L 291.498 160.092 289.625 159.912 C 288.595 159.813,286.953 159.364,285.976 158.915 C 284.201 158.099,282.710 157.653,278.200 156.593 C 275.576 155.975,275.696 155.981,273.400 156.375 M393.565 159.358 C 393.855 159.707,394.339 160.669,394.642 161.496 L 395.192 163.000 395.096 161.000 C 395.010 159.213,394.895 158.985,394.019 158.862 C 393.164 158.741,393.106 158.804,393.565 159.358 M182.879 160.381 C 181.933 161.022,181.033 161.604,180.879 161.674 C 177.870 163.036,176.712 172.824,179.436 173.869 C 179.746 173.988,180.000 174.273,180.000 174.502 C 180.000 175.265,182.746 177.600,183.680 177.630 C 184.186 177.647,185.224 177.886,185.987 178.162 C 187.106 178.566,187.570 178.563,188.387 178.147 C 188.944 177.864,189.879 177.535,190.465 177.417 C 192.218 177.064,194.694 173.588,195.013 171.034 C 195.585 166.455,193.593 160.800,191.408 160.800 C 191.180 160.800,190.768 160.440,190.493 160.000 C 189.644 158.641,185.111 158.868,182.879 160.381 M250.469 161.746 C 249.819 165.275,249.869 167.793,250.600 168.400 C 251.128 168.838,251.200 168.314,251.200 164.049 C 251.200 158.492,251.117 158.231,250.469 161.746 M190.109 160.800 C 190.669 161.240,191.278 161.607,191.463 161.615 C 192.800 161.675,194.192 165.087,194.331 168.641 L 194.473 172.282 192.075 174.787 L 189.677 177.291 186.710 177.142 C 177.829 176.693,175.455 165.175,183.400 161.080 C 185.926 159.778,188.664 159.663,190.109 160.800 M234.900 163.008 C 235.589 163.759,235.611 163.759,236.300 163.008 C 236.967 162.280,236.967 162.269,236.300 162.771 C 235.721 163.207,235.479 163.207,234.900 162.771 C 234.233 162.269,234.233 162.280,234.900 163.008 M2.987 167.240 C 2.543 168.640,3.371 168.896,4.139 167.596 C 4.826 166.432,4.824 166.400,4.050 166.400 C 3.593 166.400,3.140 166.758,2.987 167.240 M85.080 167.493 C 84.584 168.361,84.415 170.880,84.803 171.606 C 85.495 172.899,86.000 172.138,86.000 169.800 C 86.000 167.859,85.536 166.695,85.080 167.493 M73.767 168.588 C 73.621 169.172,73.071 169.706,72.363 169.953 C 71.723 170.176,71.200 170.548,71.200 170.779 C 71.200 171.011,70.499 171.200,69.643 171.200 C 67.268 171.200,67.155 172.237,69.422 173.210 C 70.683 173.750,71.388 174.355,71.745 175.203 C 72.303 176.532,73.600 175.865,73.600 174.249 C 73.600 173.870,73.865 173.048,74.189 172.422 C 75.159 170.545,75.399 168.162,74.646 167.873 C 74.200 167.702,73.936 167.916,73.767 168.588 M395.200 169.584 C 395.200 170.001,395.482 170.625,395.827 170.970 C 396.227 171.370,396.357 171.906,396.184 172.449 C 396.019 172.970,396.068 173.205,396.310 173.056 C 396.545 172.910,396.715 173.475,396.728 174.448 C 396.741 175.348,396.852 176.185,396.976 176.309 C 397.408 176.742,397.195 171.843,396.725 170.542 C 396.181 169.038,395.200 168.421,395.200 169.584 M182.674 169.859 C 182.325 170.208,182.817 172.131,183.342 172.474 C 183.864 172.814,184.402 172.509,184.394 171.876 C 184.390 171.584,184.244 171.627,184.017 171.986 C 183.721 172.454,183.557 172.339,183.207 171.420 C 182.870 170.531,182.887 170.191,183.284 169.939 C 183.578 169.753,183.613 169.610,183.367 169.606 C 183.128 169.603,182.817 169.717,182.674 169.859 M248.500 171.600 C 248.242 172.590,247.923 173.967,247.792 174.661 C 247.661 175.354,247.204 176.608,246.777 177.446 C 246.350 178.284,246.000 179.195,246.000 179.471 C 246.000 179.746,245.724 180.785,245.386 181.779 C 244.500 184.390,247.011 187.351,251.315 188.772 C 253.597 189.525,254.604 191.178,253.355 192.119 C 251.690 193.372,253.471 196.705,255.545 196.215 C 258.107 195.610,258.858 192.734,256.700 191.796 L 255.400 191.231 257.772 191.216 C 261.955 191.188,263.871 192.464,262.527 194.382 C 261.570 195.749,262.458 197.708,264.537 198.810 L 266.243 199.715 269.077 198.838 C 272.132 197.893,272.674 197.461,273.915 194.991 C 274.621 193.585,274.652 193.286,274.161 192.615 C 273.329 191.477,273.467 191.025,274.800 190.522 C 277.325 189.569,275.885 189.302,267.278 189.126 C 259.518 188.967,258.361 188.856,256.778 188.117 C 255.800 187.661,254.407 187.181,253.682 187.050 C 252.342 186.809,249.964 185.253,248.715 183.800 C 247.844 182.788,247.773 179.714,248.599 178.801 C 249.355 177.966,249.748 173.962,249.306 171.600 L 248.969 169.800 248.500 171.600 M285.691 175.800 C 285.686 179.226,285.740 179.558,286.064 178.114 C 286.299 177.065,286.301 175.555,286.069 174.114 C 285.709 171.876,285.696 171.932,285.691 175.800 M108.679 173.357 C 108.515 173.774,108.475 174.209,108.591 174.324 C 108.955 174.689,109.276 174.091,109.124 173.331 C 108.983 172.635,108.962 172.636,108.679 173.357 M224.856 174.013 C 224.336 174.446,223.386 174.800,222.743 174.800 C 222.100 174.800,220.905 175.107,220.087 175.482 C 218.947 176.006,217.005 176.215,211.761 176.382 C 203.326 176.651,202.279 177.323,204.579 181.000 C 204.854 181.440,205.176 182.666,205.293 183.725 C 205.418 184.845,205.842 186.016,206.308 186.525 C 206.748 187.006,207.231 187.805,207.381 188.300 C 207.531 188.795,207.900 189.200,208.200 189.200 C 208.500 189.200,208.857 189.551,208.994 189.980 C 209.130 190.408,209.627 190.882,210.098 191.031 C 210.570 191.181,211.252 191.670,211.615 192.118 C 213.602 194.571,219.540 192.216,222.836 187.669 C 223.366 186.938,224.201 185.881,224.691 185.321 C 225.181 184.761,225.697 183.692,225.837 182.946 C 225.977 182.199,226.386 181.424,226.746 181.223 C 227.700 180.689,228.123 174.419,227.252 173.700 C 226.435 173.025,225.969 173.086,224.856 174.013 M84.808 175.390 C 84.123 176.215,84.485 181.901,85.323 183.471 C 85.654 184.092,86.227 185.455,86.596 186.500 C 86.964 187.545,87.403 188.400,87.570 188.400 C 87.737 188.400,88.079 189.088,88.331 189.929 C 88.619 190.888,89.835 192.562,91.595 194.423 C 93.138 196.054,94.400 197.526,94.400 197.694 C 94.400 197.862,94.760 198.000,95.200 198.000 C 95.665 198.000,96.000 197.733,96.000 197.363 C 96.000 197.012,95.640 196.631,95.200 196.516 C 94.760 196.401,94.400 196.098,94.400 195.842 C 94.400 195.587,93.883 194.812,93.251 194.121 C 92.619 193.429,91.986 192.399,91.844 191.831 C 91.701 191.264,91.332 190.800,91.023 190.800 C 90.715 190.800,90.250 190.157,89.991 189.372 C 89.732 188.587,89.272 187.849,88.971 187.733 C 88.669 187.618,88.311 186.865,88.176 186.061 C 87.769 183.642,87.607 183.295,86.787 183.081 C 86.080 182.896,85.999 182.516,85.994 179.337 C 85.987 175.439,85.663 174.360,84.808 175.390 M226.400 176.551 C 226.400 177.074,226.131 177.725,225.802 177.998 C 225.473 178.272,224.983 179.239,224.714 180.147 C 224.445 181.056,223.814 182.410,223.312 183.156 C 222.811 183.902,222.400 184.847,222.400 185.256 C 222.400 185.665,222.126 186.000,221.791 186.000 C 221.457 186.000,220.979 186.447,220.731 186.992 C 220.482 187.538,219.946 188.090,219.539 188.219 C 219.133 188.348,218.800 188.705,218.800 189.012 C 218.800 189.970,215.701 190.566,213.291 190.071 C 210.068 189.410,206.907 185.603,205.975 181.259 C 205.204 177.662,205.283 177.622,213.117 177.643 C 220.319 177.662,221.673 177.486,223.154 176.339 C 224.590 175.227,226.400 175.345,226.400 176.551 M103.500 178.707 C 101.874 179.820,101.405 181.686,102.633 182.157 C 103.478 182.482,110.738 182.393,111.996 182.043 C 113.686 181.573,112.186 181.095,109.212 181.156 C 106.076 181.221,105.374 180.739,105.796 178.816 C 106.128 177.305,105.585 177.279,103.500 178.707 M71.634 182.658 C 71.193 183.877,71.206 184.177,71.720 184.691 C 72.564 185.536,73.200 184.992,73.200 183.425 C 73.200 181.361,72.268 180.904,71.634 182.658 M283.606 182.700 C 283.611 183.557,283.698 183.668,284.000 183.200 C 284.506 182.417,284.506 181.600,284.000 181.600 C 283.780 181.600,283.603 182.095,283.606 182.700 M1.414 182.377 C 1.121 182.852,0.615 190.671,0.895 190.400 C 1.009 190.290,1.208 189.210,1.337 188.000 C 1.467 186.790,1.655 185.440,1.756 185.000 C 1.856 184.560,1.953 183.964,1.969 183.676 C 1.986 183.388,2.143 183.241,2.317 183.349 C 2.491 183.456,2.660 183.197,2.692 182.772 C 2.752 181.982,1.834 181.698,1.414 182.377 M277.600 187.829 C 277.600 188.202,277.872 188.406,278.267 188.329 C 279.270 188.135,279.408 187.200,278.433 187.200 C 277.942 187.200,277.600 187.458,277.600 187.829 M397.200 194.104 C 397.200 194.413,397.325 194.792,397.478 194.945 C 398.176 195.643,398.620 204.000,397.959 204.000 C 397.761 204.000,397.629 204.135,397.664 204.300 C 397.698 204.465,397.586 204.923,397.414 205.317 C 397.039 206.176,397.349 206.582,398.146 206.276 C 399.600 205.718,399.370 193.954,397.900 193.675 C 397.502 193.599,397.200 193.784,397.200 194.104 M297.800 194.392 C 291.478 194.986,286.800 199.039,286.800 203.923 C 286.800 208.592,287.755 209.682,288.099 205.405 C 288.308 202.801,288.720 202.027,290.949 200.061 C 291.361 199.697,291.991 199.100,292.349 198.732 C 292.707 198.365,293.540 197.945,294.200 197.799 C 294.860 197.653,296.223 197.197,297.230 196.786 C 298.952 196.082,300.443 196.094,301.400 196.819 C 301.620 196.985,302.556 197.324,303.479 197.571 C 305.308 198.060,308.400 199.913,308.400 200.521 C 308.400 200.729,308.910 200.798,309.534 200.673 C 310.630 200.454,315.200 203.949,315.200 205.006 C 315.200 205.194,315.530 205.720,315.934 206.174 C 318.348 208.892,319.416 216.275,318.032 220.684 C 317.574 222.142,317.200 223.533,317.200 223.775 C 317.200 224.016,316.750 224.877,316.200 225.686 C 315.650 226.495,315.200 227.359,315.200 227.604 C 315.200 228.053,313.977 229.482,311.859 231.508 C 307.845 235.347,307.810 235.437,310.007 236.153 C 311.565 236.660,312.385 237.965,312.394 239.949 C 312.399 240.980,312.518 241.201,312.900 240.887 C 313.175 240.661,313.850 240.414,314.400 240.338 C 315.145 240.235,315.366 239.996,315.266 239.400 C 314.253 233.335,317.398 229.456,322.231 230.809 C 323.866 231.266,324.082 231.243,324.602 230.556 C 325.508 229.359,324.973 228.584,322.328 227.263 C 318.694 225.448,321.093 217.674,325.505 216.969 C 327.751 216.610,327.672 216.000,325.380 216.000 C 322.715 216.000,321.331 215.136,320.731 213.098 C 320.456 212.164,319.974 211.204,319.660 210.964 C 319.171 210.592,319.183 210.492,319.744 210.277 C 320.105 210.138,320.400 209.653,320.400 209.198 C 320.400 208.744,320.686 207.936,321.034 207.404 C 321.838 206.178,321.599 205.816,319.178 204.589 C 317.129 203.550,316.903 203.150,316.707 200.200 C 316.601 198.617,316.581 198.598,314.770 198.389 C 313.180 198.206,310.173 196.459,309.200 195.152 C 308.991 194.871,302.244 193.955,301.200 194.066 C 300.870 194.101,299.340 194.248,297.800 194.392 M96.406 198.700 C 96.409 198.865,96.580 199.265,96.784 199.588 C 97.245 200.317,97.786 199.861,97.462 199.017 C 97.223 198.394,96.395 198.145,96.406 198.700 M276.693 199.407 C 270.340 203.025,267.597 208.718,269.427 214.484 C 269.934 216.082,270.600 214.896,270.619 212.361 C 270.663 206.378,270.726 206.008,271.784 205.606 C 272.325 205.400,273.128 204.872,273.568 204.432 C 274.042 203.958,275.188 203.523,276.375 203.366 C 278.309 203.109,278.391 203.046,278.613 201.650 C 278.740 200.852,279.004 199.903,279.200 199.541 C 279.765 198.495,278.421 198.423,276.693 199.407 M98.800 201.153 C 98.800 201.348,99.205 201.615,99.700 201.748 C 101.024 202.103,101.200 202.062,101.200 201.400 C 101.200 201.000,100.800 200.800,100.000 200.800 C 99.340 200.800,98.800 200.959,98.800 201.153 M102.159 203.400 C 102.923 203.978,103.600 203.873,103.600 203.176 C 103.600 202.969,103.105 202.806,102.500 202.813 C 101.458 202.825,101.440 202.856,102.159 203.400 M323.026 204.758 C 322.904 204.955,323.029 205.199,323.302 205.299 C 324.003 205.557,324.849 205.204,324.579 204.766 C 324.289 204.297,323.314 204.292,323.026 204.758 M105.800 205.200 C 105.936 205.420,106.296 205.600,106.600 205.600 C 106.904 205.600,107.264 205.420,107.400 205.200 C 107.541 204.972,107.196 204.800,106.600 204.800 C 106.004 204.800,105.659 204.972,105.800 205.200 M0.840 210.433 C 0.915 216.091,1.266 217.781,2.399 217.941 C 3.337 218.073,3.359 218.037,2.760 217.341 C 1.749 216.167,1.530 215.235,1.380 211.453 C 1.208 207.118,0.785 206.319,0.840 210.433 M116.230 208.751 C 115.955 209.197,118.179 209.660,119.029 209.333 C 119.542 209.137,119.563 209.022,119.134 208.750 C 118.431 208.305,116.506 208.305,116.230 208.751 M288.400 208.757 C 288.400 208.954,288.670 209.218,289.000 209.345 C 289.365 209.485,289.600 209.345,289.600 208.987 C 289.600 208.664,289.330 208.400,289.000 208.400 C 288.670 208.400,288.400 208.561,288.400 208.757 M300.698 210.100 C 300.595 210.375,300.653 210.960,300.827 211.400 C 301.085 212.051,301.149 211.959,301.172 210.900 C 301.201 209.548,301.020 209.242,300.698 210.100 M298.578 214.114 C 298.202 215.094,298.819 215.866,299.297 215.013 C 299.552 214.556,299.538 214.178,299.255 213.895 C 298.950 213.590,298.754 213.654,298.578 214.114 M122.669 215.128 C 121.509 216.338,121.798 217.871,123.445 219.237 C 124.350 219.988,128.326 219.961,128.808 219.200 C 130.937 215.837,125.467 212.208,122.669 215.128 M296.100 215.865 C 295.825 215.976,295.600 216.244,295.600 216.460 C 295.600 217.026,297.707 216.697,297.902 216.100 C 298.066 215.602,297.073 215.472,296.100 215.865 M80.800 216.368 C 78.412 217.020,75.707 218.624,74.338 220.200 C 72.635 222.161,71.581 223.920,71.379 225.142 C 71.246 225.944,70.882 227.397,70.569 228.371 C 69.699 231.080,69.778 239.436,70.678 239.940 C 71.178 240.220,71.401 241.015,71.525 242.960 L 71.693 245.600 72.974 245.600 C 74.443 245.600,77.600 247.790,77.600 248.809 C 77.600 249.160,77.853 249.793,78.162 250.216 C 78.641 250.871,78.643 251.143,78.175 252.048 L 77.625 253.111 80.461 253.271 C 83.992 253.471,85.200 254.529,85.200 257.422 C 85.200 259.566,86.145 259.822,88.073 258.200 C 90.232 256.383,94.309 257.802,94.393 260.400 C 94.446 262.040,95.113 262.127,96.402 260.659 C 98.725 258.013,102.400 258.696,102.400 261.774 C 102.400 262.704,102.549 262.800,104.000 262.800 C 105.566 262.800,105.600 262.770,105.600 261.380 C 105.600 260.134,105.773 259.887,107.000 259.374 C 110.059 258.096,107.253 256.326,101.068 255.632 C 99.473 255.453,97.635 255.037,96.984 254.707 C 96.333 254.377,94.810 253.878,93.600 253.597 C 92.390 253.316,91.256 252.842,91.080 252.543 C 90.904 252.244,90.454 251.997,90.080 251.993 C 89.459 251.986,87.337 250.746,84.813 248.916 C 83.722 248.124,79.902 244.316,78.509 242.630 C 78.019 242.037,77.431 240.888,77.202 240.076 C 76.974 239.264,76.520 238.251,76.194 237.824 C 75.499 236.916,75.413 235.147,76.032 234.528 C 76.341 234.219,76.227 233.577,75.632 232.270 C 74.539 229.872,74.582 228.410,75.823 225.788 C 78.721 219.662,86.899 219.157,88.921 224.979 C 89.154 225.651,89.832 226.688,90.427 227.285 L 91.509 228.371 92.887 227.297 C 96.627 224.381,95.681 219.318,91.270 218.645 C 90.318 218.500,88.478 217.845,87.181 217.190 C 84.840 216.009,82.989 215.770,80.800 216.368 M271.271 216.667 C 271.465 217.670,272.400 217.808,272.400 216.833 C 272.400 216.342,272.142 216.000,271.771 216.000 C 271.398 216.000,271.194 216.272,271.271 216.667 M137.000 218.338 C 133.027 220.290,132.320 221.828,133.274 226.446 C 134.075 230.323,130.940 235.500,127.004 236.799 C 126.271 237.041,125.579 237.477,125.467 237.769 C 125.355 238.060,124.648 238.414,123.896 238.556 C 123.144 238.697,122.096 239.272,121.569 239.833 C 120.808 240.643,120.358 240.806,119.386 240.624 C 117.720 240.311,116.396 241.231,117.170 242.163 C 117.840 242.971,121.072 242.680,123.200 241.620 C 123.970 241.236,125.310 240.790,126.179 240.628 C 127.047 240.467,128.196 239.989,128.733 239.567 C 129.269 239.145,130.089 238.797,130.554 238.794 C 131.019 238.791,131.850 238.534,132.400 238.224 C 132.950 237.914,134.120 237.281,135.000 236.818 C 135.880 236.354,137.320 235.537,138.200 235.002 C 139.080 234.468,140.430 233.656,141.200 233.199 C 142.988 232.138,145.168 230.565,146.226 229.574 C 146.680 229.148,147.183 228.800,147.343 228.800 C 147.940 228.800,151.993 224.312,151.750 223.919 C 151.612 223.695,150.912 223.607,150.196 223.723 C 148.736 223.960,148.000 223.449,148.000 222.198 C 148.000 221.443,146.375 219.445,144.664 218.095 C 143.220 216.957,139.578 217.072,137.000 218.338 M272.800 218.320 C 272.800 218.496,273.016 218.856,273.280 219.120 C 273.985 219.825,274.400 219.707,274.400 218.800 C 274.400 218.267,274.133 218.000,273.600 218.000 C 273.160 218.000,272.800 218.144,272.800 218.320 M310.400 219.782 C 310.400 221.075,310.487 221.226,310.992 220.807 C 311.456 220.422,311.487 220.131,311.137 219.458 C 310.451 218.136,310.400 218.159,310.400 219.782 M275.196 220.596 C 275.696 221.198,276.400 221.069,276.400 220.376 C 276.400 220.169,276.018 220.000,275.551 220.000 C 274.845 220.000,274.785 220.100,275.196 220.596 M396.872 224.281 C 396.790 225.734,396.039 227.600,395.536 227.600 C 395.351 227.600,395.200 228.044,395.200 228.587 C 395.200 229.272,395.373 229.509,395.763 229.359 C 396.671 229.010,397.260 227.067,397.096 224.958 C 397.002 223.748,396.917 223.489,396.872 224.281 M258.900 224.633 C 255.805 227.073,258.405 230.611,262.145 229.049 C 264.068 228.245,264.351 226.290,262.774 224.713 C 261.398 223.337,260.567 223.320,258.900 224.633 M280.881 223.941 C 280.468 224.203,280.492 224.378,280.998 224.798 C 281.717 225.395,282.688 224.789,282.222 224.035 C 281.903 223.519,281.582 223.497,280.881 223.941 M308.400 224.200 C 308.400 224.530,308.580 224.800,308.800 224.800 C 309.020 224.800,309.200 224.530,309.200 224.200 C 309.200 223.870,309.020 223.600,308.800 223.600 C 308.580 223.600,308.400 223.870,308.400 224.200 M285.137 226.039 C 284.310 226.550,285.886 226.973,286.912 226.515 C 287.761 226.137,287.756 226.123,286.716 225.924 C 286.131 225.812,285.420 225.864,285.137 226.039 M290.600 228.216 C 291.067 228.578,291.982 228.787,292.800 228.718 C 295.001 228.533,294.435 227.811,292.000 227.698 C 289.944 227.603,289.852 227.637,290.600 228.216 M300.678 227.856 C 300.230 228.304,300.815 228.800,301.791 228.800 C 303.080 228.800,304.042 228.391,303.774 227.958 C 303.522 227.550,301.065 227.468,300.678 227.856 M272.400 228.220 C 272.070 228.290,271.094 228.463,270.231 228.604 C 268.612 228.870,265.200 231.895,265.200 233.064 C 265.200 233.740,264.956 233.735,262.135 233.000 C 259.531 232.322,253.528 232.196,252.406 232.797 C 250.295 233.927,249.238 246.127,250.742 252.000 C 250.995 252.990,251.445 255.099,251.741 256.687 C 252.038 258.274,252.464 259.804,252.688 260.087 C 252.912 260.369,253.328 261.319,253.611 262.198 C 254.201 264.025,255.522 266.605,256.755 268.337 C 257.220 268.990,257.600 269.694,257.600 269.903 C 257.600 270.112,258.049 270.804,258.598 271.442 C 259.146 272.079,260.001 273.108,260.498 273.729 C 263.184 277.092,269.013 282.086,271.602 283.246 C 272.427 283.615,273.224 284.115,273.374 284.358 C 273.524 284.601,273.934 284.800,274.285 284.800 C 274.636 284.800,275.930 285.291,277.161 285.891 C 280.278 287.411,292.552 287.597,294.600 286.156 C 295.260 285.691,296.475 285.092,297.300 284.825 C 298.125 284.557,298.800 284.213,298.800 284.060 C 298.800 283.907,299.391 283.464,300.112 283.075 C 301.389 282.387,303.429 279.620,304.148 277.600 C 304.344 277.050,304.751 276.315,305.053 275.967 C 305.355 275.619,305.792 274.307,306.024 273.052 C 306.256 271.797,306.710 270.021,307.033 269.107 C 307.980 266.422,308.177 261.033,307.447 257.800 C 307.099 256.260,306.536 253.749,306.197 252.220 C 305.857 250.691,305.313 249.146,304.989 248.788 C 304.665 248.430,304.397 247.881,304.393 247.569 C 304.369 245.696,299.491 241.222,295.942 239.817 C 291.552 238.079,288.938 238.026,284.019 239.575 C 281.809 240.270,280.000 240.989,280.000 241.171 C 280.000 241.354,279.470 241.722,278.823 241.990 C 277.628 242.485,274.800 245.734,274.800 246.612 C 274.800 246.876,274.442 247.548,274.004 248.104 C 273.519 248.721,273.034 250.285,272.763 252.103 C 272.393 254.596,272.095 255.341,270.960 256.617 C 269.250 258.539,269.261 258.834,271.100 260.369 C 271.925 261.057,272.885 261.886,273.234 262.210 C 275.612 264.424,278.319 260.570,277.248 256.494 C 275.456 249.673,278.284 246.356,285.891 246.356 C 291.879 246.356,297.325 251.298,298.773 258.046 C 299.378 260.868,298.667 268.190,297.652 269.600 C 297.256 270.150,296.807 271.101,296.655 271.713 C 296.503 272.326,296.023 273.131,295.589 273.502 C 295.155 273.874,294.800 274.382,294.800 274.630 C 294.800 274.879,294.395 275.532,293.900 276.081 C 292.369 277.779,291.429 278.956,290.691 280.100 C 290.301 280.705,289.814 281.200,289.609 281.200 C 289.403 281.200,288.572 281.650,287.762 282.200 C 285.293 283.876,276.751 283.608,274.941 281.798 C 274.612 281.469,274.081 281.200,273.762 281.200 C 272.810 281.200,263.617 274.661,263.604 273.975 C 263.602 273.852,263.285 273.396,262.900 272.962 C 261.397 271.267,259.600 268.829,259.600 268.485 C 259.600 268.287,259.240 267.798,258.800 267.400 C 258.360 267.002,258.000 266.464,258.000 266.206 C 258.000 265.947,257.557 264.860,257.014 263.789 C 256.472 262.718,255.915 261.293,255.775 260.621 C 255.636 259.949,255.272 259.005,254.966 258.523 C 254.116 257.178,253.429 248.696,253.917 245.561 C 254.457 242.093,256.253 239.339,258.215 238.971 C 260.129 238.612,270.966 239.525,271.897 240.124 C 272.455 240.483,274.400 238.766,274.400 237.914 C 274.400 237.627,274.040 237.168,273.600 236.893 C 272.676 236.316,272.502 234.129,273.300 233.121 C 274.876 231.130,280.367 231.610,281.204 233.811 C 281.629 234.929,283.360 235.202,283.740 234.212 C 284.721 231.657,281.885 229.035,277.484 228.429 C 274.407 228.005,273.575 227.971,272.400 228.220 M2.806 230.717 C 2.803 231.002,3.250 231.720,3.800 232.313 C 4.635 233.214,4.800 233.272,4.800 232.667 C 4.800 231.973,3.606 230.394,3.594 231.071 C 3.591 231.252,3.413 231.130,3.200 230.800 C 2.924 230.373,2.810 230.349,2.806 230.717 M394.800 237.600 C 394.800 237.820,394.813 238.126,394.830 238.280 C 394.846 238.434,394.460 238.708,393.972 238.889 C 392.868 239.297,393.231 239.771,394.370 239.410 C 395.091 239.181,395.656 237.200,395.000 237.200 C 394.890 237.200,394.800 237.380,394.800 237.600 M4.800 240.796 C 4.800 241.986,5.514 243.200,6.214 243.200 C 7.076 243.200,6.930 242.470,5.800 241.127 C 4.881 240.035,4.800 240.008,4.800 240.796 M89.200 241.600 C 89.985 242.107,91.486 242.107,91.800 241.600 C 91.950 241.357,91.372 241.202,90.324 241.206 C 89.063 241.211,88.761 241.316,89.200 241.600 M102.400 243.620 C 104.951 244.074,110.886 244.061,111.600 243.600 C 112.001 243.341,110.275 243.227,106.400 243.256 C 102.152 243.288,101.082 243.386,102.400 243.620 M197.176 244.328 C 196.510 244.618,195.468 245.458,194.681 246.338 C 194.416 246.633,193.765 247.312,193.233 247.846 C 192.237 248.845,192.013 249.179,190.529 251.873 C 190.050 252.742,189.375 253.689,189.029 253.976 C 188.683 254.263,188.400 254.720,188.400 254.992 C 188.400 255.480,185.834 260.625,185.203 261.400 C 184.309 262.501,180.813 269.725,180.584 270.947 C 180.439 271.717,179.979 272.657,179.560 273.036 C 179.142 273.414,178.800 274.122,178.800 274.608 C 178.800 275.094,178.440 275.950,178.000 276.509 C 177.560 277.069,177.200 277.723,177.200 277.963 C 177.200 278.705,178.348 278.445,178.800 277.600 C 179.035 277.160,179.460 276.800,179.743 276.800 C 180.320 276.800,182.400 273.822,182.400 272.995 C 182.400 272.701,182.850 271.927,183.400 271.273 C 183.950 270.619,184.400 269.986,184.400 269.866 C 184.400 269.745,185.295 268.713,186.389 267.572 C 187.483 266.431,188.481 265.205,188.607 264.849 C 188.942 263.895,192.867 260.798,195.669 259.276 C 198.513 257.730,203.580 257.371,205.430 258.583 C 205.948 258.922,206.614 259.200,206.909 259.200 C 208.035 259.200,212.723 261.898,215.599 264.200 C 217.248 265.520,218.840 266.780,219.137 267.000 C 219.615 267.354,222.009 269.538,228.563 275.600 C 229.633 276.590,231.969 278.785,233.754 280.478 C 235.644 282.270,237.702 283.827,238.681 284.204 C 239.632 284.570,240.472 285.197,240.615 285.646 C 241.244 287.628,246.098 291.481,248.420 291.841 C 250.332 292.138,252.226 293.768,252.658 295.488 C 252.784 295.990,253.034 296.400,253.215 296.400 C 253.395 296.400,253.858 296.715,254.243 297.100 C 254.810 297.666,255.654 297.800,258.653 297.800 L 262.361 297.800 263.963 299.364 C 264.844 300.224,265.679 301.450,265.819 302.088 C 266.285 304.208,269.240 304.314,270.751 302.265 C 272.579 299.789,278.943 302.251,279.525 305.659 C 279.983 308.345,282.095 308.302,282.410 305.600 C 283.130 299.442,292.193 298.100,294.574 303.800 L 295.160 305.203 296.103 304.261 C 296.621 303.742,297.257 303.247,297.515 303.159 C 297.865 303.040,297.839 302.519,297.412 301.102 C 296.706 298.762,297.623 295.361,299.361 293.868 C 301.147 292.332,299.464 291.808,297.123 293.170 C 296.395 293.593,294.764 294.127,293.499 294.356 C 292.233 294.586,290.796 294.988,290.306 295.250 C 288.921 295.991,279.132 295.849,277.477 295.063 C 276.757 294.722,274.938 294.246,273.434 294.005 C 271.930 293.765,270.221 293.321,269.636 293.019 C 269.051 292.716,267.859 292.341,266.986 292.185 C 266.114 292.028,264.450 291.473,263.288 290.950 C 262.127 290.428,260.957 289.985,260.688 289.967 C 260.420 289.950,259.120 289.324,257.800 288.578 C 256.480 287.832,254.829 286.950,254.132 286.619 C 249.669 284.497,248.023 282.383,249.806 281.067 C 250.353 280.663,250.800 280.024,250.800 279.647 C 250.800 279.269,250.981 278.779,251.203 278.557 C 252.429 277.331,248.575 273.600,246.083 273.600 C 244.686 273.600,242.078 275.236,241.817 276.275 C 241.621 277.056,241.442 277.202,241.098 276.858 C 240.846 276.606,240.414 276.400,240.138 276.400 C 239.862 276.400,239.223 275.994,238.718 275.498 C 238.213 275.002,237.122 274.043,236.293 273.367 L 234.786 272.139 235.641 271.169 C 241.467 264.561,235.605 255.549,225.408 255.440 C 221.957 255.403,221.638 255.467,220.923 256.350 C 219.885 257.629,218.857 257.081,214.523 252.935 C 212.721 251.211,210.695 249.350,210.020 248.800 C 209.346 248.250,208.473 247.492,208.081 247.115 C 207.689 246.738,206.745 246.142,205.984 245.791 C 205.223 245.439,204.150 244.895,203.600 244.582 C 202.574 243.997,198.322 243.829,197.176 244.328 M218.514 245.390 C 215.829 246.558,216.178 251.927,218.949 252.060 C 222.767 252.244,223.600 251.775,223.600 249.440 C 223.600 247.525,222.841 246.248,221.196 245.398 C 219.837 244.695,220.112 244.696,218.514 245.390 M392.718 246.311 C 392.581 246.813,392.253 247.173,391.989 247.111 C 391.725 247.050,391.441 247.405,391.357 247.900 C 391.136 249.208,392.698 249.144,393.028 247.832 C 393.367 246.482,393.070 245.026,392.718 246.311 M267.904 246.480 C 267.608 247.352,268.069 254.574,268.446 254.980 C 268.760 255.317,268.903 253.378,268.980 247.733 C 268.999 246.305,268.257 245.439,267.904 246.480 M141.410 249.236 C 139.876 249.900,138.526 250.569,138.410 250.724 C 138.295 250.878,137.480 251.541,136.600 252.196 C 134.153 254.017,132.689 255.904,131.221 259.128 C 127.662 266.944,133.503 279.589,141.361 281.079 C 142.043 281.209,143.105 281.568,143.723 281.879 C 146.459 283.256,156.435 283.216,157.975 281.823 C 158.353 281.480,159.029 281.200,159.476 281.200 C 161.317 281.200,164.604 277.862,166.371 274.199 L 167.674 271.496 167.496 266.048 C 167.320 260.687,166.588 257.643,164.791 254.800 C 164.583 254.470,164.160 253.660,163.852 253.000 C 162.303 249.683,159.310 247.886,158.354 249.700 C 157.395 251.520,153.200 251.276,153.200 249.400 C 153.200 247.507,145.649 247.402,141.410 249.236 M6.827 249.500 C 6.805 250.542,6.959 250.800,7.600 250.800 C 8.040 250.800,8.400 250.620,8.400 250.400 C 8.400 250.180,8.248 250.000,8.061 250.000 C 7.875 250.000,7.527 249.595,7.288 249.100 C 6.879 248.251,6.853 248.274,6.827 249.500 M153.072 255.309 C 156.240 257.284,158.974 261.661,159.957 266.331 C 160.203 267.503,160.674 268.731,161.002 269.060 C 161.797 269.854,161.756 270.498,160.844 271.549 C 160.429 272.028,159.874 272.911,159.611 273.510 C 158.962 274.992,155.764 277.600,154.596 277.600 C 154.074 277.600,153.536 277.780,153.400 278.000 C 153.264 278.220,152.634 278.400,152.000 278.400 C 151.366 278.400,150.736 278.220,150.600 278.000 C 150.464 277.780,149.598 277.600,148.676 277.599 C 147.754 277.599,146.370 277.252,145.600 276.827 C 144.830 276.403,143.812 275.874,143.337 275.652 C 142.579 275.297,141.900 274.659,138.888 271.472 C 138.313 270.862,138.200 269.923,138.200 265.736 L 138.200 260.730 140.600 258.547 C 145.777 253.840,149.262 252.935,153.072 255.309 M389.776 254.633 C 389.066 255.212,389.062 255.246,389.733 255.033 C 390.136 254.905,390.631 254.800,390.833 254.800 C 391.035 254.800,391.200 254.620,391.200 254.400 C 391.200 253.821,390.666 253.908,389.776 254.633 M8.800 255.930 C 8.800 256.661,10.291 257.442,10.771 256.962 C 11.091 256.642,9.886 256.023,9.457 256.288 C 9.248 256.418,9.197 256.328,9.345 256.089 C 9.492 255.851,9.430 255.542,9.207 255.404 C 8.983 255.266,8.800 255.502,8.800 255.930 M111.804 257.167 C 109.026 257.437,108.479 258.242,110.282 259.405 C 110.897 259.802,111.544 260.368,111.720 260.663 C 112.530 262.023,116.400 259.534,116.400 257.653 C 116.400 256.723,116.389 256.722,111.804 257.167 M10.631 261.400 C 10.842 263.289,11.713 264.624,12.441 264.174 C 12.853 263.920,12.414 262.724,11.717 262.200 C 11.424 261.979,11.009 261.259,10.796 260.600 C 10.475 259.607,10.446 259.746,10.631 261.400 M388.394 260.462 C 387.847 260.906,387.644 261.142,387.941 260.985 C 388.291 260.802,388.223 261.098,387.750 261.820 L 387.018 262.938 388.067 262.250 C 388.931 261.684,389.827 260.094,389.478 259.745 C 389.429 259.695,388.941 260.018,388.394 260.462 M387.246 264.724 C 387.221 265.232,387.065 265.565,386.900 265.466 C 386.735 265.366,386.368 265.535,386.084 265.842 C 385.656 266.306,385.708 266.400,386.397 266.400 C 387.318 266.400,387.765 265.624,387.480 264.523 C 387.335 263.964,387.282 264.009,387.246 264.724 M12.633 267.100 C 12.199 267.535,12.397 267.970,13.234 268.418 C 14.392 269.038,14.627 268.627,13.667 267.667 C 13.227 267.227,12.762 266.972,12.633 267.100 M385.022 269.964 C 384.899 270.164,384.919 270.644,385.067 271.030 C 385.243 271.488,385.184 271.637,384.896 271.459 C 384.653 271.309,384.342 271.370,384.204 271.593 C 384.065 271.819,384.320 272.000,384.776 272.000 C 385.425 272.000,385.600 271.745,385.600 270.800 C 385.600 269.574,385.422 269.317,385.022 269.964 M14.508 272.400 C 14.585 273.567,14.766 273.819,15.600 273.912 C 16.510 274.014,16.538 273.974,15.911 273.475 C 15.532 273.174,15.040 272.494,14.819 271.964 C 14.451 271.083,14.424 271.120,14.508 272.400 M382.495 276.577 C 381.624 277.578,381.623 277.600,382.415 277.600 C 383.235 277.600,383.796 276.789,383.530 275.990 C 383.450 275.750,382.984 276.014,382.495 276.577 M16.595 277.580 C 16.909 279.579,18.400 280.432,18.400 278.613 C 18.400 277.901,18.233 277.689,17.803 277.854 C 17.424 278.000,17.054 277.739,16.792 277.142 C 16.432 276.321,16.407 276.378,16.595 277.580 M313.493 277.840 C 313.121 278.212,314.084 280.038,314.569 279.880 C 315.398 279.608,315.331 277.600,314.493 277.600 C 314.075 277.600,313.625 277.708,313.493 277.840 M380.689 280.405 C 379.807 281.434,379.822 281.600,380.800 281.600 C 381.387 281.600,381.600 281.333,381.600 280.600 C 381.600 279.393,381.562 279.385,380.689 280.405 M175.140 281.200 C 174.910 281.860,174.465 282.400,174.152 282.400 C 173.839 282.400,173.379 282.847,173.131 283.392 C 172.882 283.938,172.346 284.490,171.939 284.619 C 170.994 284.919,170.972 286.000,171.911 286.000 C 172.793 286.000,175.200 283.852,175.200 283.065 C 175.200 282.746,175.470 282.382,175.800 282.255 C 176.474 281.997,176.633 280.000,175.979 280.000 C 175.748 280.000,175.370 280.540,175.140 281.200 M18.476 282.090 C 18.608 282.973,19.791 283.942,20.217 283.516 C 20.686 283.047,19.985 281.689,19.163 281.474 C 18.519 281.306,18.378 281.433,18.476 282.090 M379.494 283.439 C 379.363 283.571,379.352 283.931,379.470 284.239 C 379.598 284.571,379.433 284.800,379.066 284.800 C 378.726 284.800,378.336 284.980,378.200 285.200 C 378.064 285.420,378.320 285.600,378.769 285.600 C 379.310 285.600,379.671 285.256,379.840 284.581 C 380.099 283.551,379.932 283.001,379.494 283.439 M123.838 285.444 C 123.702 285.799,123.901 286.000,124.389 286.000 C 125.445 286.000,125.761 285.335,124.821 285.090 C 124.378 284.974,123.961 285.124,123.838 285.444 M20.400 286.387 C 20.400 286.805,20.774 287.265,21.230 287.410 C 22.375 287.773,22.397 287.551,21.320 286.514 C 20.461 285.688,20.400 285.679,20.400 286.387 M305.427 288.041 C 304.783 288.723,303.561 289.719,302.713 290.255 C 300.627 291.572,301.093 292.000,304.610 292.000 C 307.162 292.000,307.631 292.111,308.000 292.800 C 308.235 293.240,308.602 293.600,308.814 293.600 C 309.515 293.600,309.215 291.391,308.421 290.711 C 307.993 290.344,307.446 289.314,307.206 288.422 C 306.684 286.485,306.859 286.523,305.427 288.041 M377.600 287.913 C 377.600 288.379,377.285 288.944,376.900 289.168 C 376.241 289.552,376.241 289.576,376.892 289.588 C 377.586 289.600,378.340 287.807,377.848 287.315 C 377.712 287.178,377.600 287.448,377.600 287.913 M22.006 289.624 C 22.016 290.522,22.512 291.049,23.600 291.315 C 24.564 291.551,24.571 291.539,23.800 290.971 C 23.360 290.648,22.775 290.082,22.500 289.715 C 22.108 289.191,22.001 289.172,22.006 289.624 M163.201 292.198 C 162.686 292.748,162.339 293.243,162.432 293.298 C 164.865 294.768,166.086 294.305,165.157 292.265 C 164.559 290.952,164.378 290.946,163.201 292.198 M375.398 292.006 C 375.257 292.449,374.975 292.708,374.771 292.582 C 374.567 292.456,374.400 292.543,374.400 292.776 C 374.400 293.009,374.760 293.200,375.200 293.200 C 375.787 293.200,376.000 292.933,376.000 292.200 C 376.000 290.993,375.746 290.911,375.398 292.006 M24.093 293.400 C 24.193 294.889,26.000 296.242,26.000 294.828 C 26.000 294.593,25.842 294.400,25.650 294.400 C 25.457 294.400,25.004 293.815,24.642 293.100 L 23.985 291.800 24.093 293.400 M136.100 294.412 C 135.099 294.815,134.882 295.600,135.771 295.600 C 136.086 295.600,136.590 295.847,136.891 296.149 C 137.712 296.969,139.535 295.486,138.798 294.598 C 138.244 293.930,137.438 293.875,136.100 294.412 M373.646 295.277 C 373.621 295.650,373.200 296.235,372.711 296.577 L 371.822 297.200 372.724 297.200 C 373.710 297.200,374.172 296.451,373.880 295.323 C 373.717 294.695,373.687 294.689,373.646 295.277 M150.594 296.410 C 149.945 297.459,150.842 299.200,152.032 299.200 C 153.128 299.200,153.200 299.101,153.200 297.600 C 153.200 295.987,151.371 295.152,150.594 296.410 M26.000 297.158 C 26.000 297.967,26.751 298.800,27.480 298.800 C 28.391 298.800,28.032 297.418,26.997 296.938 C 26.143 296.542,26.000 296.573,26.000 297.158 M371.046 299.425 C 370.914 299.769,370.654 299.957,370.469 299.843 C 370.285 299.729,370.133 299.906,370.133 300.237 C 370.133 301.229,371.781 300.736,371.928 299.700 C 372.073 298.680,371.411 298.473,371.046 299.425 M30.013 303.900 C 30.002 304.626,30.213 304.794,31.100 304.768 C 31.753 304.750,31.956 304.642,31.600 304.504 C 31.270 304.375,30.781 303.984,30.513 303.635 C 30.086 303.078,30.024 303.111,30.013 303.900 M367.810 304.700 C 367.640 305.415,367.253 306.000,366.950 306.000 C 366.648 306.000,366.400 306.180,366.400 306.400 C 366.400 306.620,366.664 306.800,366.986 306.800 C 367.761 306.800,368.492 305.382,368.286 304.279 C 368.147 303.538,368.072 303.604,367.810 304.700 M33.641 308.700 C 33.605 310.210,33.701 310.399,34.500 310.394 C 35.154 310.389,35.252 310.294,34.860 310.046 C 34.563 309.857,34.177 309.095,34.001 308.352 L 33.682 307.000 33.641 308.700 M364.046 310.300 C 364.021 310.575,363.640 311.160,363.200 311.600 L 362.400 312.400 363.213 312.400 C 364.119 312.400,364.564 311.618,364.280 310.523 C 364.177 310.126,364.072 310.025,364.046 310.300 M37.672 315.300 C 37.804 316.229,39.600 316.885,39.600 316.004 C 39.600 315.756,39.433 315.656,39.229 315.782 C 39.025 315.908,38.743 315.649,38.602 315.206 C 38.253 314.107,37.513 314.182,37.672 315.300 M359.600 316.320 C 358.979 316.527,358.417 317.177,358.406 317.700 C 358.395 318.258,360.023 318.005,360.250 317.413 C 360.575 316.566,360.292 316.089,359.600 316.320 M39.600 317.991 C 39.600 318.165,40.045 318.392,40.588 318.496 C 41.131 318.599,41.494 318.552,41.394 318.390 C 41.128 317.960,39.600 317.620,39.600 317.991 M358.130 318.663 C 358.275 318.808,358.170 319.197,357.897 319.528 C 357.490 320.021,357.509 320.094,358.000 319.932 C 358.741 319.687,359.045 318.400,358.363 318.400 C 358.090 318.400,357.985 318.518,358.130 318.663 M41.512 320.652 C 41.623 321.231,42.038 321.789,42.434 321.893 C 42.831 321.997,43.210 322.468,43.278 322.941 C 43.353 323.470,43.736 323.848,44.275 323.925 C 44.819 324.002,45.198 324.379,45.275 324.921 C 45.344 325.400,45.736 325.856,46.147 325.934 C 46.618 326.024,46.793 325.912,46.620 325.632 C 46.468 325.387,46.177 325.291,45.972 325.417 C 45.768 325.544,45.600 325.287,45.600 324.846 C 45.600 324.406,45.253 323.802,44.829 323.505 C 44.405 323.208,43.822 322.433,43.534 321.783 C 42.625 319.732,41.182 318.925,41.512 320.652 M354.008 323.995 C 353.694 324.189,353.332 324.282,353.202 324.201 C 353.072 324.121,352.939 324.419,352.905 324.864 C 352.822 325.967,351.653 327.680,351.182 327.389 C 350.972 327.259,350.800 327.343,350.800 327.576 C 350.800 328.055,351.240 328.113,352.167 327.757 C 352.515 327.624,352.800 327.186,352.800 326.784 C 352.800 326.383,353.151 325.943,353.580 325.806 C 354.008 325.670,354.475 325.195,354.616 324.749 C 354.932 323.755,354.753 323.534,354.008 323.995 M47.206 327.300 C 47.202 327.810,47.499 327.987,48.300 327.954 C 49.143 327.918,49.213 327.861,48.600 327.707 C 48.160 327.597,47.668 327.303,47.506 327.054 C 47.320 326.766,47.210 326.856,47.206 327.300 M350.252 329.008 C 350.117 329.362,349.843 329.550,349.645 329.428 C 349.446 329.305,349.188 329.453,349.072 329.757 C 348.921 330.149,349.093 330.248,349.664 330.099 C 350.456 329.892,351.089 328.955,350.699 328.565 C 350.589 328.455,350.388 328.655,350.252 329.008 M49.232 329.430 C 49.214 329.667,49.650 330.283,50.200 330.800 C 50.750 331.317,51.200 332.039,51.200 332.406 C 51.200 332.772,51.650 333.277,52.200 333.527 C 52.750 333.778,53.200 334.245,53.200 334.564 C 53.200 334.884,53.560 335.260,54.000 335.400 C 54.440 335.540,54.800 335.916,54.800 336.236 C 54.800 336.555,55.250 337.022,55.800 337.273 C 56.350 337.523,56.800 338.047,56.800 338.436 C 56.800 338.866,57.154 339.195,57.700 339.272 C 58.278 339.354,58.646 339.722,58.728 340.300 C 58.820 340.951,59.124 341.200,59.828 341.200 C 60.598 341.200,60.800 341.408,60.800 342.200 C 60.800 342.904,61.018 343.200,61.536 343.200 C 61.940 343.200,62.477 343.650,62.727 344.200 C 62.978 344.750,63.436 345.200,63.745 345.200 C 64.054 345.200,64.400 345.558,64.515 345.995 C 64.629 346.433,65.165 346.959,65.707 347.165 C 66.248 347.370,66.790 347.798,66.912 348.114 C 67.033 348.430,67.522 348.791,67.998 348.915 C 68.655 349.087,68.808 348.997,68.632 348.538 C 68.504 348.206,68.400 347.769,68.400 347.567 C 68.400 347.365,68.124 347.200,67.786 347.200 C 66.886 347.200,65.200 345.996,65.200 345.354 C 65.200 345.049,65.019 344.800,64.798 344.800 C 64.577 344.800,63.515 343.900,62.438 342.800 C 61.361 341.700,60.286 340.800,60.050 340.800 C 59.814 340.800,59.341 340.260,59.000 339.600 C 58.659 338.940,58.204 338.400,57.990 338.400 C 57.775 338.400,57.600 338.130,57.600 337.800 C 57.600 337.470,57.410 337.200,57.177 337.200 C 56.593 337.200,54.400 334.742,54.400 334.087 C 54.400 333.793,54.265 333.635,54.100 333.734 C 53.816 333.906,52.487 332.743,52.700 332.510 C 53.051 332.124,52.660 331.652,51.814 331.439 C 51.153 331.273,50.904 330.996,51.057 330.596 C 51.213 330.189,51.029 330.000,50.476 330.000 C 50.031 330.000,49.576 329.775,49.465 329.500 C 49.354 329.225,49.249 329.194,49.232 329.430 M337.200 341.967 C 337.200 342.388,336.975 342.824,336.700 342.935 C 336.401 343.056,336.482 343.150,336.900 343.168 C 337.388 343.190,337.600 342.898,337.600 342.200 C 337.600 341.650,337.510 341.200,337.400 341.200 C 337.290 341.200,337.200 341.545,337.200 341.967 M334.800 344.600 C 334.392 345.091,334.420 345.200,334.951 345.200 C 335.308 345.200,335.600 344.930,335.600 344.600 C 335.600 344.270,335.532 344.000,335.449 344.000 C 335.366 344.000,335.074 344.270,334.800 344.600 M332.399 346.619 C 331.436 347.152,331.431 347.172,332.276 347.186 C 332.758 347.194,333.271 347.008,333.416 346.773 C 333.843 346.083,333.469 346.027,332.399 346.619 M331.054 348.204 C 330.927 348.536,330.670 348.761,330.484 348.704 C 330.130 348.595,327.946 350.426,326.638 351.926 C 325.886 352.789,325.887 352.800,326.710 352.800 C 327.271 352.800,327.586 352.505,327.672 351.900 C 327.753 351.328,328.121 350.954,328.681 350.875 C 329.166 350.806,329.667 350.420,329.794 350.018 C 329.922 349.616,330.381 349.194,330.813 349.081 C 331.246 348.967,331.600 348.588,331.600 348.237 C 331.600 347.434,331.355 347.419,331.054 348.204 M72.098 352.100 C 72.189 352.375,72.642 352.656,73.107 352.725 C 73.620 352.800,74.000 353.193,74.075 353.725 C 74.154 354.279,74.530 354.647,75.100 354.728 C 75.595 354.798,76.000 355.107,76.000 355.414 C 76.000 355.956,77.168 356.800,77.918 356.800 C 78.910 356.800,77.854 354.871,76.740 354.648 C 76.089 354.518,74.960 353.779,74.231 353.006 C 72.921 351.616,71.779 351.131,72.098 352.100 M323.717 353.500 C 323.575 353.885,323.265 354.332,323.029 354.494 C 322.758 354.679,322.821 354.789,323.200 354.791 C 323.530 354.792,324.008 354.345,324.262 353.797 C 324.521 353.239,324.560 352.800,324.350 352.800 C 324.144 352.800,323.859 353.115,323.717 353.500 M320.800 356.400 L 319.800 356.720 320.900 356.760 C 321.505 356.782,322.000 356.620,322.000 356.400 C 322.000 356.180,321.955 356.018,321.900 356.040 C 321.845 356.062,321.350 356.224,320.800 356.400 M319.600 357.569 C 319.600 357.772,318.925 358.158,318.100 358.427 C 316.683 358.889,316.020 359.419,316.006 360.100 C 315.994 360.694,317.166 360.384,317.677 359.657 C 317.965 359.249,318.605 358.787,319.100 358.630 C 319.852 358.393,320.436 357.200,319.800 357.200 C 319.690 357.200,319.600 357.366,319.600 357.569 M83.672 361.300 C 83.764 361.947,84.112 362.236,84.909 362.327 L 86.019 362.455 84.991 361.427 C 83.731 360.167,83.508 360.146,83.672 361.300 M312.080 362.480 C 311.816 362.744,311.600 363.181,311.600 363.451 C 311.600 363.721,311.285 364.024,310.900 364.124 C 310.450 364.242,310.577 364.324,311.255 364.354 C 312.134 364.392,312.338 364.201,312.485 363.200 C 312.582 362.540,312.639 362.000,312.611 362.000 C 312.583 362.000,312.344 362.216,312.080 362.480 M87.606 363.700 C 87.602 364.170,87.895 364.390,88.500 364.368 C 89.101 364.347,89.201 364.261,88.800 364.108 C 88.470 363.983,88.068 363.682,87.906 363.440 C 87.725 363.169,87.610 363.268,87.606 363.700 M89.672 365.300 C 89.769 365.985,90.087 366.217,91.000 366.272 C 91.660 366.311,91.893 366.255,91.519 366.146 C 91.144 366.037,90.727 365.600,90.592 365.174 C 90.251 364.099,89.516 364.200,89.672 365.300 M308.138 365.413 C 307.879 365.965,307.841 366.400,308.050 366.400 C 308.495 366.400,308.934 365.395,308.738 364.826 C 308.662 364.606,308.392 364.870,308.138 365.413 M306.054 366.288 C 305.533 366.387,305.017 366.813,304.907 367.234 C 304.792 367.674,304.358 368.000,303.887 368.000 C 303.436 368.000,303.168 368.102,303.292 368.226 C 303.855 368.788,306.324 367.886,306.743 366.964 C 306.985 366.434,307.142 366.025,307.091 366.054 C 307.041 366.084,306.574 366.190,306.054 366.288 M93.304 367.200 C 93.369 367.880,93.675 368.239,94.259 368.322 C 94.732 368.390,95.210 368.795,95.322 369.222 C 95.440 369.673,95.869 370.000,96.344 370.000 C 97.122 370.000,97.113 369.949,96.164 369.000 C 95.614 368.450,94.896 368.000,94.569 368.000 C 94.242 368.000,93.802 367.595,93.591 367.100 C 93.214 366.213,93.209 366.215,93.304 367.200 M99.200 370.933 C 99.200 371.759,99.395 372.000,100.062 372.000 C 100.914 372.000,100.915 371.989,100.166 371.100 C 99.750 370.605,99.362 370.125,99.304 370.033 C 99.247 369.942,99.200 370.347,99.200 370.933 M298.832 370.667 C 298.814 371.143,298.575 371.624,298.300 371.735 C 297.908 371.893,297.911 371.944,298.313 371.968 C 298.920 372.006,299.361 371.040,299.069 370.313 C 298.956 370.031,298.849 370.190,298.832 370.667 M102.898 373.300 C 102.988 373.575,103.588 373.829,104.231 373.863 C 105.046 373.908,105.128 373.869,104.500 373.736 C 104.005 373.630,103.600 373.377,103.600 373.172 C 103.600 372.967,103.405 372.800,103.167 372.800 C 102.928 372.800,102.807 373.025,102.898 373.300 M106.828 374.900 C 106.804 375.847,106.953 375.996,107.900 375.972 C 108.819 375.948,108.874 375.894,108.230 375.642 C 107.806 375.476,107.324 374.994,107.158 374.570 C 106.906 373.926,106.852 373.981,106.828 374.900 M292.241 374.467 C 292.355 374.650,292.186 374.800,291.866 374.800 C 291.547 374.800,291.182 375.070,291.055 375.400 C 290.813 376.031,291.457 376.183,292.567 375.757 C 293.362 375.452,293.403 374.133,292.618 374.133 C 292.297 374.133,292.128 374.283,292.241 374.467 M288.161 376.733 C 287.699 377.165,286.979 377.621,286.561 377.746 C 286.142 377.872,286.497 377.898,287.350 377.805 C 289.148 377.607,289.318 377.493,289.135 376.605 C 289.015 376.023,288.905 376.037,288.161 376.733 M110.900 377.200 C 110.991 377.538,111.571 377.828,112.231 377.863 C 113.238 377.918,113.261 377.899,112.400 377.723 C 111.850 377.611,111.251 377.312,111.070 377.060 C 110.849 376.752,110.793 376.799,110.900 377.200 M114.400 378.681 C 114.400 379.525,115.117 380.010,116.333 379.988 C 116.879 379.978,116.855 379.896,116.200 379.538 C 115.760 379.297,115.175 378.819,114.900 378.474 C 114.459 377.922,114.400 377.946,114.400 378.681 M284.655 378.600 C 284.529 378.930,284.149 379.200,283.813 379.200 C 283.476 379.200,283.200 379.380,283.200 379.600 C 283.200 380.095,283.297 380.095,284.574 379.610 C 285.138 379.395,285.600 378.945,285.600 378.610 C 285.600 377.826,284.955 377.819,284.655 378.600 M280.486 380.624 L 279.572 381.600 280.586 381.600 C 281.401 381.600,281.600 381.404,281.600 380.600 C 281.600 379.403,281.631 379.402,280.486 380.624 M118.446 380.700 C 118.408 381.438,118.597 381.590,119.500 381.546 C 120.406 381.501,120.445 381.461,119.725 381.321 C 119.243 381.227,118.769 380.847,118.671 380.475 C 118.545 379.997,118.479 380.062,118.446 380.700 M276.398 382.494 C 275.581 383.371,275.876 383.887,276.958 383.472 C 277.563 383.239,278.107 381.600,277.578 381.600 C 277.387 381.600,276.856 382.002,276.398 382.494 M122.074 382.700 C 122.160 383.153,122.629 383.433,123.403 383.494 C 124.497 383.579,124.523 383.555,123.700 383.207 C 123.205 382.997,122.800 382.640,122.800 382.413 C 122.800 382.186,122.607 382.000,122.371 382.000 C 122.135 382.000,122.001 382.315,122.074 382.700 M128.032 384.500 C 128.006 385.375,128.179 385.600,128.876 385.600 C 129.647 385.600,129.677 385.540,129.122 385.100 C 128.776 384.825,128.396 384.330,128.278 384.000 C 128.159 383.668,128.049 383.892,128.032 384.500 M271.467 383.900 C 271.294 384.175,271.298 384.411,271.476 384.425 C 271.654 384.439,271.350 384.647,270.800 384.886 C 269.930 385.265,269.897 385.345,270.542 385.498 C 271.484 385.722,272.118 385.102,271.928 384.142 C 271.822 383.607,271.694 383.539,271.467 383.900 M132.000 386.375 C 132.000 387.155,135.274 388.059,135.885 387.448 C 136.022 387.312,135.742 387.200,135.263 387.200 C 134.784 387.200,134.084 386.840,133.707 386.400 C 132.837 385.383,132.000 385.371,132.000 386.375 M265.710 386.373 C 265.383 386.896,264.659 387.204,263.511 387.307 C 261.871 387.454,261.888 387.463,263.913 387.530 C 265.448 387.581,266.087 387.440,266.250 387.013 C 266.630 386.023,266.227 385.545,265.710 386.373 M260.000 388.153 C 260.000 388.458,259.603 388.811,259.117 388.937 C 258.632 389.064,258.349 389.282,258.487 389.421 C 258.981 389.914,260.400 389.137,260.400 388.373 C 260.400 387.948,260.310 387.600,260.200 387.600 C 260.090 387.600,260.000 387.849,260.000 388.153 M254.000 389.515 C 252.456 390.016,251.892 391.200,253.197 391.200 C 253.907 391.200,254.520 390.953,254.650 390.613 C 254.975 389.767,254.693 389.290,254.000 389.515 M145.200 390.376 C 145.200 391.045,145.445 391.195,146.500 391.172 C 147.565 391.149,147.655 391.086,147.000 390.822 C 146.560 390.645,146.037 390.595,145.838 390.712 C 145.639 390.828,145.597 390.728,145.745 390.489 C 145.892 390.251,145.830 389.942,145.607 389.804 C 145.381 389.665,145.200 389.920,145.200 390.376 M246.499 391.990 C 246.240 392.405,245.527 392.820,244.914 392.912 C 243.984 393.052,244.043 393.090,245.273 393.140 C 246.442 393.188,246.800 393.029,247.010 392.370 C 247.361 391.261,247.083 391.055,246.499 391.990 M153.200 392.400 C 152.542 392.825,152.581 392.858,153.904 392.997 C 154.626 393.072,154.717 392.982,154.355 392.546 C 153.822 391.904,153.944 391.919,153.200 392.400 M237.200 393.532 C 237.200 393.788,236.615 394.254,235.900 394.566 L 234.600 395.135 235.873 395.167 C 237.091 395.199,238.113 393.980,237.437 393.303 C 237.306 393.173,237.200 393.276,237.200 393.532 M162.479 394.444 C 162.579 394.750,163.188 395.061,163.831 395.135 C 164.950 395.265,165.047 394.827,163.937 394.659 C 163.641 394.614,163.152 394.423,162.848 394.233 C 162.463 393.993,162.351 394.056,162.479 394.444 M172.000 395.571 C 172.000 396.609,173.333 397.198,175.529 397.130 C 177.647 397.065,177.680 397.050,176.024 396.903 C 174.917 396.806,173.995 396.455,173.577 395.973 C 172.873 395.161,172.000 394.939,172.000 395.571 M225.632 395.692 C 225.602 396.350,225.095 396.572,222.800 396.934 C 222.250 397.020,222.661 397.116,223.713 397.146 C 225.650 397.201,226.338 396.680,225.869 395.513 C 225.739 395.188,225.652 395.254,225.632 395.692 ", stroke: "none", fill: "#e43645", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path1", d: "M191.069 1.064 C 190.959 1.174,189.369 1.313,187.535 1.373 C 183.628 1.502,181.117 1.942,181.427 2.444 C 181.548 2.640,181.412 2.806,181.124 2.814 C 180.836 2.822,177.697 2.837,174.149 2.847 C 167.723 2.866,167.697 2.869,167.258 3.833 C 166.868 4.688,166.549 4.803,164.509 4.828 C 157.120 4.916,156.668 4.971,155.738 5.900 C 155.018 6.619,154.386 6.800,152.598 6.800 C 150.456 6.800,148.225 7.551,147.936 8.369 C 147.861 8.582,146.563 8.795,145.051 8.842 C 142.860 8.912,142.111 9.106,141.364 9.799 C 140.739 10.378,139.855 10.688,138.713 10.728 C 137.452 10.773,136.789 11.039,136.200 11.735 C 135.528 12.529,135.086 12.663,133.441 12.571 C 131.528 12.463,130.400 12.983,130.400 13.971 C 130.400 14.355,129.181 14.539,126.500 14.561 C 126.005 14.565,125.600 14.698,125.600 14.856 C 125.600 15.585,124.214 16.400,122.971 16.400 C 122.217 16.400,121.600 16.574,121.600 16.787 C 121.600 17.001,121.330 17.071,121.000 16.945 C 120.584 16.785,120.400 16.972,120.400 17.557 C 120.400 18.250,120.156 18.400,119.033 18.400 C 117.191 18.400,116.400 18.750,116.400 19.565 C 116.400 20.082,115.997 20.265,114.700 20.335 C 113.765 20.385,112.512 20.780,111.916 21.213 C 111.320 21.646,110.437 22.060,109.953 22.134 C 109.470 22.208,108.772 22.642,108.402 23.098 C 108.033 23.554,107.296 23.989,106.765 24.064 C 105.702 24.214,104.800 24.906,104.800 25.571 C 104.800 25.955,103.876 26.140,101.940 26.144 C 101.578 26.145,101.361 26.354,101.459 26.608 C 101.709 27.260,100.568 28.107,99.284 28.223 C 98.688 28.277,98.065 28.339,97.900 28.360 C 97.735 28.382,97.600 28.760,97.600 29.200 C 97.600 29.727,97.333 30.000,96.818 30.000 C 96.388 30.000,95.618 30.418,95.107 30.930 C 94.596 31.441,93.980 31.793,93.738 31.713 C 93.497 31.632,92.783 32.114,92.151 32.783 C 91.519 33.452,90.708 34.000,90.348 34.000 C 89.988 34.000,89.602 34.348,89.491 34.774 C 89.356 35.289,88.790 35.641,87.793 35.828 C 86.820 36.010,86.229 36.369,86.102 36.854 C 85.994 37.264,85.649 37.600,85.334 37.600 C 85.019 37.600,84.356 38.038,83.861 38.572 C 83.365 39.107,82.459 39.670,81.847 39.824 C 81.236 39.977,80.647 40.333,80.539 40.615 C 80.431 40.896,79.813 41.346,79.165 41.614 C 78.446 41.912,78.029 42.354,78.094 42.751 C 78.161 43.161,77.869 43.447,77.300 43.528 C 76.805 43.598,76.400 43.922,76.400 44.249 C 76.400 44.575,75.865 45.028,75.212 45.256 C 74.558 45.484,74.039 45.789,74.059 45.935 C 74.174 46.787,73.913 47.200,73.262 47.200 C 72.856 47.200,72.185 47.575,71.770 48.033 C 71.355 48.491,70.415 49.117,69.679 49.425 C 68.944 49.732,68.456 50.167,68.595 50.392 C 68.734 50.617,68.383 50.978,67.814 51.195 C 67.245 51.411,66.675 51.861,66.547 52.194 C 66.419 52.527,65.986 52.800,65.585 52.800 C 65.136 52.800,64.807 53.142,64.728 53.690 C 64.658 54.179,64.150 54.804,63.600 55.077 C 63.050 55.350,62.600 55.756,62.600 55.979 C 62.600 56.202,62.195 56.668,61.700 57.015 C 61.205 57.362,60.800 57.893,60.800 58.195 C 60.800 58.497,60.395 58.802,59.900 58.872 C 59.322 58.954,58.954 59.322,58.872 59.900 C 58.797 60.429,58.465 60.800,58.067 60.800 C 57.695 60.800,57.212 61.205,56.995 61.700 C 56.778 62.195,56.330 62.608,56.000 62.618 C 55.670 62.628,55.445 62.853,55.500 63.118 C 55.555 63.383,55.420 63.600,55.200 63.600 C 54.980 63.600,54.800 63.900,54.800 64.267 C 54.800 64.633,54.686 64.820,54.547 64.681 C 54.198 64.331,52.730 65.163,52.981 65.569 C 53.226 65.966,50.740 68.646,50.271 68.490 C 50.089 68.430,50.055 68.565,50.194 68.790 C 50.333 69.016,50.269 69.200,50.051 69.200 C 49.832 69.200,49.540 69.560,49.400 70.000 C 49.260 70.440,48.917 70.800,48.637 70.800 C 48.099 70.800,47.200 72.438,47.200 73.419 C 47.200 73.738,46.921 74.000,46.579 74.000 C 46.238 74.000,45.770 74.540,45.540 75.200 C 45.310 75.859,44.967 76.303,44.778 76.186 C 44.589 76.070,44.152 76.520,43.807 77.187 C 43.462 77.854,42.933 78.400,42.633 78.400 C 42.061 78.400,41.600 79.236,41.600 80.275 C 41.600 80.610,41.150 81.239,40.600 81.671 C 40.050 82.104,39.600 82.805,39.600 83.229 C 39.600 83.733,39.323 84.000,38.800 84.000 C 38.360 84.000,38.000 84.259,38.000 84.575 C 38.000 84.892,37.460 85.742,36.800 86.464 C 36.140 87.187,35.600 88.145,35.600 88.594 C 35.600 89.057,35.210 89.581,34.700 89.805 C 34.202 90.024,33.800 90.555,33.799 90.995 C 33.799 91.433,33.485 91.850,33.099 91.924 C 32.715 91.998,32.400 92.315,32.400 92.629 C 32.400 92.943,32.200 93.200,31.957 93.200 C 31.685 93.200,31.609 93.583,31.762 94.191 C 31.968 95.013,31.840 95.225,31.005 95.434 C 30.327 95.605,29.998 95.965,29.993 96.543 C 29.989 97.015,29.539 97.824,28.993 98.342 C 28.381 98.922,28.000 99.729,28.000 100.442 C 28.000 101.116,27.805 101.558,27.533 101.500 C 26.961 101.378,26.014 103.086,26.006 104.253 C 26.002 104.767,25.682 105.190,25.200 105.316 C 24.444 105.513,24.202 106.316,24.372 108.058 C 24.410 108.443,23.929 108.941,23.218 109.256 C 22.266 109.677,22.000 110.048,22.000 110.951 C 22.000 111.620,21.653 112.407,21.174 112.823 C 20.719 113.217,20.359 113.643,20.374 113.770 C 20.597 115.726,20.331 116.800,19.624 116.800 C 19.197 116.800,18.719 117.008,18.562 117.262 C 18.371 117.571,18.462 117.618,18.838 117.403 C 19.293 117.144,19.304 117.186,18.900 117.621 C 18.625 117.918,18.400 118.654,18.400 119.257 C 18.400 119.921,18.066 120.589,17.554 120.947 C 16.960 121.364,16.648 122.112,16.505 123.470 C 16.392 124.538,15.971 125.763,15.562 126.213 C 15.156 126.661,14.714 127.741,14.580 128.613 C 14.443 129.509,13.932 130.584,13.407 131.081 C 12.648 131.799,12.488 132.337,12.538 134.002 C 12.590 135.715,12.495 136.014,11.943 135.870 C 11.507 135.755,11.321 135.917,11.391 136.349 C 11.450 136.707,11.358 137.180,11.188 137.400 C 11.018 137.620,10.816 138.687,10.740 139.771 C 10.642 141.148,10.329 142.017,9.700 142.653 C 8.938 143.424,8.800 143.996,8.800 146.382 C 8.800 148.590,8.673 149.200,8.214 149.200 C 7.310 149.200,6.955 150.332,6.833 153.600 C 6.714 156.783,6.569 157.352,5.972 156.983 C 5.768 156.856,5.586 156.898,5.569 157.076 C 5.553 157.254,5.448 157.760,5.337 158.200 C 5.227 158.640,5.056 160.620,4.957 162.600 C 4.788 166.016,3.898 169.032,3.189 168.593 C 3.026 168.492,2.858 171.602,2.817 175.505 C 2.728 183.969,2.750 183.616,2.333 183.359 C 2.150 183.245,1.986 183.388,1.969 183.676 C 1.953 183.964,1.861 184.560,1.767 185.000 C 1.201 187.632,1.082 189.947,1.079 198.400 C 1.074 211.898,1.356 215.606,2.504 217.091 C 2.713 217.361,2.881 220.437,2.878 223.927 C 2.875 227.416,3.034 230.525,3.230 230.835 C 3.427 231.146,3.591 231.252,3.594 231.071 C 3.597 230.891,3.856 230.999,4.169 231.312 C 4.566 231.709,4.789 233.173,4.904 236.145 C 5.046 239.833,5.186 240.533,5.934 241.330 C 6.658 242.100,6.800 242.729,6.800 245.152 C 6.800 247.967,7.151 249.209,8.263 250.320 C 8.558 250.616,8.822 251.654,8.850 252.629 C 8.897 254.284,8.953 254.746,9.197 255.500 C 9.251 255.665,9.273 255.935,9.247 256.100 C 9.221 256.265,9.335 256.379,9.500 256.353 C 10.510 256.193,10.765 256.476,10.555 257.526 C 10.262 258.991,11.046 261.874,11.862 262.331 C 12.329 262.592,12.500 263.296,12.500 264.961 C 12.500 266.211,12.582 267.151,12.683 267.050 C 13.110 266.623,14.400 268.494,14.400 269.540 C 14.400 271.115,15.140 273.091,15.828 273.355 C 16.146 273.477,16.400 274.101,16.400 274.761 C 16.400 276.567,17.107 278.121,17.806 277.853 C 18.277 277.672,18.400 277.997,18.400 279.425 C 18.400 280.774,18.575 281.290,19.100 281.483 C 20.115 281.858,20.387 282.411,20.394 284.118 C 20.398 285.154,20.686 285.921,21.300 286.533 C 21.823 287.054,22.147 287.798,22.073 288.307 C 21.994 288.855,22.366 289.598,23.067 290.291 C 24.181 291.393,24.254 291.521,24.350 292.525 C 24.377 292.813,24.760 293.436,25.200 293.908 C 25.640 294.380,26.059 295.179,26.132 295.683 C 26.205 296.187,26.626 296.766,27.069 296.968 C 27.567 297.195,28.013 297.959,28.237 298.968 C 28.465 299.991,28.824 300.600,29.200 300.600 C 29.542 300.600,29.850 301.030,29.917 301.600 C 30.082 303.014,30.843 304.400,31.455 304.400 C 31.741 304.400,31.877 304.655,31.758 304.966 C 31.629 305.300,32.044 305.904,32.770 306.441 C 33.485 306.970,34.000 307.713,34.000 308.217 C 34.000 308.693,34.450 309.569,35.000 310.162 C 35.550 310.756,36.000 311.400,36.000 311.594 C 36.000 311.787,36.360 312.060,36.800 312.200 C 37.311 312.362,37.600 312.805,37.600 313.427 C 37.600 313.962,37.768 314.400,37.973 314.400 C 38.178 314.400,38.461 314.763,38.602 315.206 C 38.743 315.649,39.025 315.908,39.229 315.782 C 39.433 315.656,39.600 316.018,39.600 316.586 C 39.600 317.319,39.889 317.730,40.592 317.997 C 41.179 318.220,41.500 318.594,41.378 318.912 C 41.262 319.215,41.602 319.680,42.156 319.976 C 42.696 320.266,43.248 320.935,43.380 321.463 C 43.513 321.991,44.066 322.811,44.611 323.284 C 45.155 323.757,45.600 324.482,45.600 324.896 C 45.600 325.309,45.782 325.535,46.004 325.398 C 46.226 325.260,46.721 325.699,47.104 326.372 C 47.487 327.044,48.093 327.596,48.450 327.597 C 48.851 327.599,49.192 328.059,49.340 328.800 C 49.517 329.683,49.805 330.000,50.433 330.000 C 51.024 330.000,51.215 330.183,51.057 330.596 C 50.904 330.996,51.153 331.273,51.814 331.439 C 52.356 331.575,52.800 331.847,52.800 332.043 C 52.800 332.979,53.609 334.031,54.100 333.734 C 54.265 333.635,54.400 333.793,54.400 334.087 C 54.400 334.742,56.593 337.200,57.177 337.200 C 57.410 337.200,57.600 337.470,57.600 337.800 C 57.600 338.130,57.775 338.400,57.990 338.400 C 58.204 338.400,58.659 338.940,59.000 339.600 C 59.341 340.260,59.814 340.800,60.050 340.800 C 60.286 340.800,61.361 341.700,62.438 342.800 C 63.515 343.900,64.577 344.800,64.798 344.800 C 65.019 344.800,65.200 345.049,65.200 345.354 C 65.200 345.981,66.878 347.200,67.743 347.200 C 68.056 347.200,68.425 347.644,68.561 348.186 C 68.725 348.842,69.005 349.096,69.399 348.945 C 69.783 348.798,70.127 349.081,70.385 349.759 C 70.602 350.332,70.978 350.800,71.219 350.800 C 71.840 350.800,72.815 351.851,72.493 352.174 C 72.345 352.321,72.519 352.329,72.878 352.191 C 73.320 352.022,73.825 352.337,74.438 353.166 C 75.000 353.926,75.839 354.484,76.649 354.636 C 77.583 354.811,77.990 355.126,78.077 355.740 C 78.154 356.279,78.536 356.648,79.100 356.728 C 79.678 356.810,80.000 357.132,80.000 357.628 C 80.000 358.182,80.279 358.400,80.987 358.400 C 81.744 358.400,81.915 358.556,81.719 359.066 C 81.548 359.513,81.617 359.636,81.932 359.442 C 82.201 359.276,82.400 359.382,82.400 359.691 C 82.400 359.987,82.739 360.255,83.153 360.287 C 83.568 360.318,84.370 360.806,84.935 361.372 C 85.501 361.937,86.320 362.400,86.755 362.400 C 87.190 362.400,87.656 362.747,87.791 363.172 C 87.927 363.602,88.553 364.058,89.200 364.200 C 89.847 364.342,90.473 364.798,90.609 365.228 C 90.744 365.653,91.112 366.023,91.427 366.050 C 91.742 366.078,92.180 366.145,92.400 366.200 C 92.620 366.255,92.959 366.322,93.153 366.350 C 93.348 366.378,93.601 366.760,93.716 367.200 C 93.831 367.640,94.204 368.000,94.544 368.000 C 94.885 368.000,95.614 368.450,96.164 369.000 C 96.727 369.564,97.626 370.000,98.224 370.000 C 98.879 370.000,99.586 370.383,100.071 371.000 C 100.504 371.550,101.255 372.000,101.741 372.000 C 102.226 372.000,102.879 372.354,103.191 372.787 C 103.526 373.253,104.447 373.678,105.443 373.827 C 106.621 374.004,107.187 374.305,107.323 374.829 C 107.458 375.343,108.030 375.659,109.148 375.838 C 110.200 376.006,110.857 376.349,111.002 376.806 C 111.153 377.281,111.813 377.601,113.013 377.781 C 113.996 377.928,114.800 378.213,114.800 378.414 C 114.800 378.915,116.975 380.000,117.980 380.000 C 118.431 380.000,118.800 380.254,118.800 380.565 C 118.800 380.913,119.421 381.235,120.420 381.403 C 121.312 381.554,122.391 382.053,122.819 382.513 C 123.393 383.129,124.231 383.395,125.999 383.522 C 127.657 383.642,128.400 383.863,128.400 384.234 C 128.400 384.969,129.490 385.449,131.387 385.551 C 132.361 385.604,133.257 385.939,133.703 386.418 C 134.103 386.848,134.739 387.221,135.116 387.246 C 135.492 387.272,136.563 387.347,137.496 387.414 C 139.113 387.528,140.640 388.426,140.114 388.952 C 139.839 389.228,139.762 389.215,142.777 389.423 C 145.274 389.595,146.139 389.852,145.843 390.331 C 145.596 390.731,145.719 390.754,149.700 391.054 C 152.017 391.228,152.800 391.432,152.800 391.861 C 152.800 392.186,153.104 392.384,153.500 392.318 C 153.885 392.253,154.166 392.391,154.125 392.624 C 154.078 392.895,155.517 393.085,158.100 393.150 C 161.275 393.229,162.250 393.390,162.619 393.894 C 163.258 394.767,163.939 394.900,168.777 395.090 C 172.457 395.235,173.043 395.358,173.710 396.127 L 174.467 397.000 198.934 397.000 C 223.405 397.000,225.600 396.901,225.600 395.792 C 225.600 395.310,226.380 395.191,229.800 395.150 C 232.110 395.123,234.135 395.063,234.300 395.017 C 236.359 394.450,236.853 394.238,237.105 393.810 C 237.297 393.483,238.860 393.233,241.586 393.091 C 245.200 392.903,245.866 392.759,246.451 392.037 C 247.003 391.355,247.575 391.200,249.549 391.200 C 251.481 391.200,252.124 391.033,252.740 390.372 C 253.318 389.752,254.099 389.516,255.856 389.430 C 258.638 389.295,260.000 388.893,260.000 388.206 C 260.000 387.706,262.018 387.213,264.097 387.204 C 264.757 387.202,265.392 386.881,265.693 386.400 C 266.062 385.809,266.626 385.600,267.850 385.600 C 269.534 385.600,271.671 384.775,271.617 384.145 C 271.601 383.955,272.446 383.745,273.494 383.678 C 274.899 383.589,275.641 383.299,276.316 382.578 C 276.882 381.974,277.678 381.600,278.398 381.600 C 279.068 381.600,279.954 381.217,280.482 380.700 C 281.022 380.170,281.770 379.853,282.300 379.928 C 282.795 379.998,283.200 379.863,283.200 379.628 C 283.200 379.393,283.476 379.200,283.813 379.200 C 284.149 379.200,284.524 378.941,284.646 378.624 C 284.767 378.308,285.422 377.927,286.100 377.778 C 286.778 377.629,287.697 377.168,288.142 376.754 C 288.587 376.339,289.373 376.000,289.888 376.000 C 290.403 376.000,290.929 375.730,291.055 375.400 C 291.182 375.070,291.547 374.800,291.866 374.800 C 292.186 374.800,292.333 374.616,292.194 374.390 C 292.055 374.165,292.089 374.006,292.270 374.037 C 293.535 374.257,294.470 373.884,294.873 373.000 C 295.198 372.285,295.643 372.000,296.431 372.000 C 298.056 372.000,298.800 371.610,298.800 370.757 C 298.800 370.158,299.093 370.000,300.203 370.000 C 301.200 370.000,301.856 369.711,302.475 369.000 C 302.953 368.450,303.651 368.000,304.025 368.000 C 304.400 368.000,304.801 367.640,304.916 367.200 C 305.034 366.747,305.488 366.378,305.963 366.350 C 306.423 366.322,307.025 366.278,307.300 366.250 C 307.575 366.223,307.970 365.812,308.178 365.339 C 308.427 364.773,309.044 364.399,309.979 364.250 C 310.918 364.100,311.536 363.724,311.800 363.142 C 312.020 362.657,312.542 362.214,312.960 362.157 C 313.789 362.044,314.464 361.228,314.150 360.719 C 314.042 360.544,314.401 360.400,314.949 360.400 C 315.567 360.400,316.035 360.119,316.181 359.661 C 316.314 359.242,317.093 358.719,317.983 358.452 C 318.927 358.169,319.652 357.667,319.803 357.191 C 319.944 356.746,320.408 356.400,320.864 356.400 C 321.334 356.400,321.761 356.069,321.881 355.613 C 321.994 355.181,322.427 354.718,322.843 354.586 C 323.259 354.454,323.600 354.083,323.600 353.760 C 323.600 353.183,324.164 352.823,325.337 352.650 C 325.667 352.602,326.862 351.671,327.994 350.581 C 329.126 349.492,330.223 348.646,330.433 348.702 C 330.643 348.759,331.011 348.374,331.252 347.847 C 331.492 347.319,332.129 346.688,332.667 346.442 C 333.205 346.197,333.534 345.817,333.399 345.598 C 333.264 345.379,333.404 345.200,333.710 345.200 C 334.017 345.200,334.749 344.660,335.337 344.000 C 335.925 343.340,336.585 342.800,336.803 342.800 C 337.021 342.800,337.200 342.452,337.200 342.027 C 337.200 341.480,337.523 341.216,338.300 341.127 C 338.931 341.054,339.356 340.783,339.297 340.491 C 339.240 340.211,339.647 339.810,340.200 339.600 C 340.753 339.390,341.183 339.079,341.156 338.909 C 341.031 338.147,341.227 337.204,341.500 337.247 C 342.316 337.376,342.768 337.131,342.986 336.443 C 343.118 336.027,343.594 335.590,344.043 335.473 C 344.492 335.355,344.957 334.886,345.076 334.430 C 345.196 333.973,345.548 333.600,345.860 333.600 C 346.171 333.600,346.563 333.230,346.730 332.778 C 346.897 332.326,347.476 331.736,348.017 331.467 C 348.558 331.197,349.023 330.757,349.050 330.488 C 349.078 330.220,349.123 329.809,349.150 329.576 C 349.178 329.343,349.383 329.266,349.607 329.405 C 349.832 329.543,350.249 329.101,350.534 328.422 C 350.820 327.742,351.162 327.295,351.295 327.428 C 351.631 327.765,352.831 325.848,352.906 324.854 C 352.940 324.403,353.044 324.110,353.136 324.203 C 353.519 324.586,354.800 323.516,354.800 322.813 C 354.800 322.395,355.160 321.940,355.600 321.800 C 356.321 321.571,356.456 321.354,356.375 320.549 C 356.361 320.412,356.766 320.082,357.275 319.817 C 357.784 319.552,358.155 319.124,358.100 318.867 C 358.045 318.610,358.191 318.400,358.424 318.400 C 358.657 318.400,358.746 318.236,358.622 318.036 C 358.256 317.443,358.798 316.494,359.628 316.277 C 360.052 316.166,360.400 315.741,360.400 315.332 C 360.400 314.924,360.804 314.412,361.298 314.195 C 361.791 313.978,362.258 313.469,362.334 313.064 C 362.410 312.659,362.822 311.978,363.249 311.551 C 363.676 311.124,364.132 310.238,364.264 309.582 C 364.421 308.796,364.716 308.425,365.127 308.494 C 365.530 308.562,365.888 308.139,366.134 307.300 C 366.344 306.585,366.760 306.000,367.058 306.000 C 367.356 306.000,367.600 305.738,367.600 305.419 C 367.600 304.410,368.506 302.800,369.074 302.800 C 369.571 302.800,370.301 300.661,370.075 299.870 C 370.023 299.689,370.133 299.635,370.319 299.750 C 370.784 300.037,372.000 298.549,372.000 297.692 C 372.000 297.307,372.335 296.783,372.745 296.527 C 373.154 296.272,373.699 295.231,373.955 294.214 C 374.211 293.197,374.569 292.457,374.752 292.570 C 375.113 292.794,376.000 291.107,376.000 290.195 C 376.000 289.883,376.349 289.441,376.776 289.213 C 377.290 288.938,377.645 288.174,377.829 286.948 C 378.031 285.598,378.315 285.043,378.876 284.896 C 379.312 284.782,379.556 284.464,379.440 284.160 C 379.327 283.866,379.407 283.519,379.617 283.389 C 379.828 283.259,380.000 282.706,380.000 282.160 C 380.000 281.613,380.360 280.780,380.800 280.308 C 381.240 279.836,381.600 279.025,381.600 278.507 C 381.600 277.989,382.050 277.080,382.600 276.487 C 383.332 275.697,383.600 274.964,383.600 273.753 C 383.600 272.140,384.359 270.909,384.986 271.503 C 385.159 271.667,385.180 271.410,385.033 270.934 C 384.887 270.457,384.955 269.952,385.184 269.810 C 385.413 269.669,385.600 268.831,385.600 267.948 C 385.600 266.430,386.414 264.948,386.952 265.486 C 387.089 265.622,387.218 265.388,387.240 264.967 C 387.354 262.750,387.526 261.970,388.037 261.340 C 388.526 260.737,388.521 260.687,388.000 260.958 C 387.670 261.129,387.838 260.913,388.372 260.478 C 389.205 259.801,389.350 259.328,389.381 257.180 C 389.412 255.037,389.539 254.619,390.259 254.298 C 390.982 253.975,391.109 253.548,391.163 251.261 C 391.239 248.034,391.342 247.316,391.786 246.912 C 391.974 246.740,391.984 246.870,391.808 247.200 C 391.589 247.609,391.728 247.573,392.244 247.086 C 392.852 246.512,393.028 245.664,393.141 242.758 C 393.254 239.866,393.413 239.090,393.941 238.872 C 394.841 238.501,394.916 238.096,395.112 232.600 C 395.206 229.960,395.417 227.710,395.582 227.600 C 396.736 226.827,396.951 225.086,397.085 215.427 C 397.162 209.853,397.393 205.249,397.608 204.990 C 397.820 204.735,397.875 204.408,397.730 204.263 C 397.585 204.118,397.658 204.000,397.892 204.000 C 398.169 204.000,398.283 202.710,398.218 200.300 C 398.122 196.766,398.041 196.168,397.471 194.800 C 397.279 194.341,396.851 180.827,396.801 173.678 C 396.797 173.110,396.626 172.861,396.354 173.028 C 396.056 173.213,396.006 173.010,396.200 172.400 C 396.386 171.813,396.297 171.384,395.943 171.165 C 395.561 170.929,395.335 169.493,395.181 166.314 C 395.009 162.759,394.780 161.457,394.107 160.199 C 393.528 159.114,393.192 157.611,393.065 155.524 C 392.862 152.202,392.665 151.600,391.776 151.600 C 391.326 151.600,391.200 150.945,391.200 148.600 C 391.200 146.173,391.053 145.453,390.430 144.830 C 389.877 144.277,389.606 143.306,389.467 141.377 C 389.288 138.905,389.009 138.298,387.861 137.894 C 387.675 137.828,387.449 136.800,387.359 135.610 C 387.255 134.248,386.919 133.141,386.450 132.623 C 386.041 132.170,385.601 131.109,385.472 130.264 C 385.344 129.419,384.880 128.416,384.441 128.036 C 383.894 127.561,383.614 126.758,383.547 125.472 C 383.494 124.443,383.294 123.600,383.102 123.600 C 382.910 123.600,382.835 123.465,382.934 123.300 C 383.171 122.909,382.160 121.974,381.843 122.291 C 381.709 122.424,381.600 121.714,381.600 120.713 C 381.600 119.277,381.444 118.852,380.858 118.699 C 380.316 118.557,380.061 118.016,379.911 116.687 C 379.771 115.442,379.375 114.538,378.653 113.817 C 378.074 113.238,377.600 112.322,377.600 111.782 C 377.600 111.242,377.449 110.800,377.264 110.800 C 376.833 110.800,375.866 108.823,375.829 107.865 C 375.813 107.460,375.391 106.798,374.891 106.393 C 374.390 105.988,374.021 105.509,374.070 105.328 C 374.270 104.585,373.521 103.273,372.787 103.081 C 372.100 102.901,371.763 101.824,371.934 100.357 C 371.949 100.224,371.538 99.888,371.019 99.610 C 370.154 99.147,369.977 98.690,369.534 95.756 C 369.497 95.511,369.182 95.331,368.834 95.356 C 368.464 95.382,368.147 95.026,368.072 94.500 C 368.002 94.005,367.681 93.600,367.360 93.600 C 367.038 93.600,366.674 93.285,366.550 92.900 C 365.859 90.750,365.446 90.000,364.951 90.000 C 364.648 90.000,364.400 89.636,364.400 89.191 C 364.400 88.717,363.987 88.194,363.400 87.927 C 362.740 87.626,362.400 87.147,362.400 86.517 C 362.400 85.992,361.975 85.165,361.456 84.681 C 360.936 84.196,360.384 83.395,360.229 82.900 C 359.973 82.085,359.545 81.819,358.700 81.953 C 358.535 81.979,358.400 81.706,358.400 81.346 C 358.400 80.986,357.940 80.265,357.377 79.744 C 356.815 79.223,356.452 78.640,356.570 78.449 C 356.688 78.257,356.298 77.583,355.702 76.950 C 355.106 76.318,354.614 75.620,354.609 75.400 C 354.604 75.180,354.210 74.829,353.734 74.620 C 353.255 74.410,352.768 73.739,352.644 73.120 C 352.487 72.336,352.177 72.000,351.610 72.000 C 351.067 72.000,350.800 71.737,350.800 71.200 C 350.800 70.667,350.533 70.400,350.000 70.400 C 349.558 70.400,349.200 70.133,349.200 69.803 C 349.200 69.475,348.832 68.980,348.382 68.703 C 347.932 68.427,347.181 67.435,346.711 66.500 C 346.242 65.565,345.620 64.800,345.329 64.800 C 345.038 64.800,344.800 64.646,344.800 64.458 C 344.800 64.270,343.945 63.236,342.900 62.161 C 341.855 61.085,341.039 60.086,341.087 59.941 C 341.135 59.796,340.876 59.434,340.510 59.138 C 340.043 58.759,339.935 58.748,340.147 59.100 C 340.312 59.375,340.287 59.600,340.091 59.600 C 339.895 59.600,339.487 59.136,339.183 58.569 C 338.880 58.002,338.310 57.366,337.916 57.155 C 337.522 56.944,337.200 56.520,337.200 56.213 C 337.200 55.905,336.838 55.539,336.396 55.399 C 335.953 55.258,335.311 54.601,334.969 53.939 C 334.576 53.180,334.134 52.816,333.773 52.955 C 333.439 53.083,333.200 52.934,333.200 52.598 C 333.200 51.991,331.059 50.675,330.683 51.051 C 330.562 51.171,330.159 50.804,329.786 50.235 C 329.413 49.666,328.790 49.200,328.401 49.200 C 328.012 49.200,327.596 48.827,327.476 48.370 C 327.357 47.914,326.886 47.443,326.430 47.324 C 325.949 47.198,325.600 46.780,325.600 46.330 C 325.600 45.902,325.420 45.664,325.200 45.800 C 324.980 45.936,324.800 45.857,324.800 45.624 C 324.800 45.391,324.530 45.200,324.200 45.200 C 323.870 45.200,323.600 44.942,323.600 44.627 C 323.600 44.312,323.195 43.927,322.700 43.773 C 322.205 43.618,321.370 43.066,320.845 42.546 C 320.320 42.026,319.674 41.600,319.410 41.600 C 319.145 41.600,318.723 41.150,318.473 40.600 C 318.196 39.992,317.685 39.600,317.171 39.600 C 316.662 39.600,316.242 39.282,316.116 38.800 C 315.995 38.336,315.570 38.000,315.106 38.000 C 314.666 38.000,313.691 37.460,312.939 36.800 C 312.187 36.140,311.329 35.600,311.033 35.600 C 310.736 35.600,310.399 35.240,310.284 34.800 C 310.169 34.360,309.741 34.000,309.333 34.000 C 308.926 34.000,308.095 33.539,307.487 32.975 C 306.879 32.412,306.038 31.884,305.619 31.804 C 305.200 31.723,304.484 31.284,304.028 30.828 C 303.573 30.373,302.844 30.000,302.409 30.000 C 301.974 30.000,301.324 29.550,300.963 29.000 C 300.603 28.450,299.975 28.000,299.568 28.000 C 298.759 28.000,297.856 26.696,298.314 26.188 C 298.471 26.014,298.378 25.999,298.107 26.155 C 297.338 26.597,294.800 25.983,294.800 25.355 C 294.800 25.050,294.530 24.800,294.200 24.800 C 293.870 24.800,293.600 24.601,293.600 24.357 C 293.600 24.114,293.317 24.023,292.971 24.156 C 292.311 24.409,290.575 23.692,290.947 23.320 C 291.476 22.790,289.938 21.950,288.869 22.185 C 287.930 22.391,287.666 22.263,287.280 21.416 C 286.898 20.577,286.541 20.400,285.236 20.400 C 284.035 20.400,283.596 20.218,283.414 19.643 C 283.180 18.908,282.110 18.417,280.718 18.405 C 280.343 18.402,279.586 17.950,279.036 17.400 C 278.234 16.598,277.638 16.400,276.018 16.400 C 274.908 16.400,274.000 16.233,274.000 16.029 C 274.000 15.181,272.779 14.548,270.962 14.454 C 268.967 14.351,268.000 13.876,268.000 12.999 C 268.000 12.656,267.373 12.514,266.021 12.551 C 264.500 12.593,264.003 12.455,263.872 11.955 C 263.670 11.181,260.047 10.204,258.823 10.593 C 258.231 10.781,258.000 10.678,258.000 10.227 C 258.000 9.882,257.809 9.600,257.576 9.600 C 257.343 9.600,257.267 9.416,257.406 9.190 C 257.545 8.965,257.511 8.806,257.330 8.837 C 255.512 9.153,250.800 8.722,250.800 8.239 C 250.800 7.436,249.023 6.935,245.824 6.838 C 242.919 6.749,242.245 6.574,242.600 6.000 C 243.021 5.318,241.778 5.059,237.267 4.887 C 233.084 4.728,232.604 4.630,231.810 3.773 C 230.962 2.858,230.776 2.835,224.907 2.916 C 221.590 2.962,218.960 2.864,219.063 2.697 C 219.447 2.077,216.875 1.569,212.000 1.300 C 206.557 1.000,191.305 0.829,191.069 1.064 M213.317 25.790 C 214.903 26.114,218.990 26.652,222.400 26.984 C 225.810 27.317,229.320 27.854,230.200 28.177 C 231.080 28.500,232.559 28.773,233.488 28.782 C 234.416 28.792,236.486 29.224,238.088 29.743 C 239.689 30.261,241.965 30.810,243.144 30.962 C 244.323 31.115,245.673 31.487,246.144 31.789 C 246.615 32.091,248.031 32.526,249.290 32.754 C 250.550 32.982,252.080 33.424,252.690 33.736 C 253.301 34.048,254.407 34.435,255.149 34.594 C 255.892 34.754,257.062 35.209,257.749 35.605 C 258.437 36.000,259.810 36.450,260.800 36.604 C 261.790 36.758,263.161 37.226,263.847 37.642 C 264.533 38.059,265.331 38.400,265.621 38.400 C 265.910 38.400,266.879 38.746,267.774 39.170 C 268.668 39.593,270.030 40.219,270.800 40.562 C 271.570 40.904,272.470 41.363,272.800 41.582 C 273.130 41.801,274.030 42.245,274.800 42.568 C 275.570 42.892,276.650 43.409,277.200 43.718 C 277.750 44.027,279.370 44.886,280.800 45.627 C 288.247 49.486,291.497 51.392,294.901 53.900 C 296.170 54.835,297.279 55.600,297.364 55.600 C 297.559 55.600,301.322 58.125,302.057 58.749 C 302.356 59.002,303.320 59.755,304.200 60.422 C 305.080 61.088,306.075 61.851,306.412 62.117 C 306.748 62.383,307.918 63.306,309.012 64.169 C 310.105 65.031,311.270 66.031,311.600 66.390 C 311.930 66.750,313.364 68.024,314.786 69.222 C 316.208 70.420,317.662 71.670,318.017 72.000 C 321.638 75.366,323.132 76.861,326.457 80.444 C 328.579 82.730,331.770 86.400,333.549 88.600 C 337.855 93.927,338.400 94.658,338.400 95.114 C 338.400 95.328,338.688 95.741,339.039 96.033 C 339.391 96.325,340.453 97.750,341.400 99.200 C 342.347 100.650,343.409 102.075,343.761 102.367 C 344.112 102.659,344.400 103.045,344.400 103.224 C 344.400 103.403,345.222 104.749,346.226 106.216 C 347.230 107.683,348.226 109.269,348.440 109.741 C 348.654 110.214,349.437 111.590,350.180 112.800 C 350.924 114.010,352.216 116.350,353.052 118.000 C 353.888 119.650,354.704 121.057,354.864 121.126 C 355.024 121.195,355.370 121.915,355.633 122.726 C 355.896 123.537,356.413 124.650,356.782 125.200 C 357.944 126.932,361.599 134.874,361.602 135.675 C 361.604 135.964,361.876 136.720,362.207 137.355 C 362.539 137.990,363.099 139.520,363.453 140.755 C 363.807 141.990,364.268 143.215,364.478 143.477 C 364.689 143.740,365.117 145.054,365.430 146.397 C 365.744 147.741,366.249 149.326,366.553 149.920 C 366.857 150.514,367.238 151.990,367.400 153.200 C 367.562 154.410,367.938 155.878,368.237 156.462 C 368.536 157.045,368.984 158.830,369.231 160.428 C 369.479 162.025,369.924 164.018,370.220 164.856 C 370.516 165.695,370.956 168.181,371.198 170.382 C 371.440 172.583,371.898 175.602,372.215 177.092 C 373.788 184.472,373.776 212.457,372.197 219.800 C 371.865 221.340,371.489 224.130,371.359 226.000 C 371.230 227.870,370.788 230.660,370.378 232.200 C 369.967 233.740,369.437 236.238,369.200 237.750 C 368.963 239.263,368.506 241.009,368.184 241.630 C 367.863 242.252,367.600 243.314,367.600 243.990 C 367.600 244.667,367.225 246.250,366.767 247.510 C 366.309 248.769,365.703 250.742,365.421 251.894 C 365.139 253.046,364.730 254.216,364.512 254.494 C 364.294 254.772,363.904 255.865,363.646 256.923 C 363.388 257.981,362.822 259.508,362.388 260.317 C 361.955 261.126,361.600 262.112,361.600 262.507 C 361.600 262.903,361.150 264.115,360.600 265.200 C 360.050 266.285,359.600 267.425,359.600 267.733 C 359.600 268.040,359.266 268.721,358.858 269.246 C 358.450 269.771,357.995 270.857,357.847 271.660 C 357.700 272.463,357.323 273.332,357.010 273.592 C 356.697 273.852,356.226 274.725,355.962 275.532 C 355.699 276.339,355.150 277.429,354.742 277.954 C 354.334 278.479,354.000 279.119,354.000 279.376 C 354.000 279.634,353.550 280.455,353.000 281.200 C 352.450 281.945,352.000 282.858,352.000 283.229 C 352.000 283.599,351.702 284.149,351.338 284.451 C 350.974 284.753,350.426 285.598,350.121 286.329 C 349.815 287.060,348.964 288.513,348.229 289.558 C 347.495 290.603,346.578 292.075,346.193 292.829 C 345.807 293.583,345.246 294.344,344.946 294.520 C 344.646 294.696,344.400 294.993,344.400 295.180 C 344.400 295.549,341.972 299.255,341.124 300.181 C 340.836 300.495,340.184 301.348,339.676 302.076 C 338.066 304.385,335.524 307.793,335.257 308.000 C 335.116 308.110,334.820 308.493,334.600 308.852 C 332.828 311.738,317.984 327.273,314.400 329.993 C 312.422 331.493,312.008 331.830,310.115 333.480 C 305.797 337.245,303.380 339.090,298.609 342.266 C 297.734 342.848,296.776 343.567,296.480 343.863 C 296.185 344.158,295.789 344.400,295.600 344.400 C 295.411 344.400,295.015 344.642,294.720 344.937 C 294.118 345.539,291.132 347.511,289.600 348.317 C 289.050 348.607,287.700 349.373,286.600 350.019 C 285.500 350.665,283.970 351.485,283.200 351.842 C 282.430 352.199,281.350 352.807,280.800 353.193 C 280.250 353.579,279.350 354.030,278.800 354.195 C 278.250 354.360,277.530 354.721,277.200 354.997 C 276.870 355.273,275.939 355.711,275.132 355.970 C 274.325 356.229,273.462 356.684,273.216 356.981 C 272.969 357.278,272.294 357.640,271.715 357.786 C 271.137 357.931,270.220 358.398,269.678 358.825 C 269.136 359.251,268.401 359.602,268.046 359.604 C 267.691 359.606,266.500 360.050,265.400 360.591 C 264.300 361.132,263.037 361.581,262.594 361.587 C 262.151 361.594,261.126 361.955,260.317 362.388 C 259.508 362.822,257.981 363.392,256.923 363.654 C 255.865 363.917,254.640 364.358,254.200 364.636 C 253.760 364.914,252.680 365.271,251.800 365.430 C 250.920 365.589,249.071 366.142,247.691 366.660 C 246.311 367.177,244.781 367.601,244.291 367.602 C 243.801 367.604,242.914 367.859,242.319 368.169 C 241.725 368.479,239.932 368.935,238.334 369.183 C 236.736 369.431,234.084 369.986,232.439 370.417 C 230.795 370.848,228.686 371.200,227.754 371.200 C 226.822 371.200,224.201 371.597,221.929 372.082 C 215.566 373.441,184.350 373.448,178.071 372.092 C 175.799 371.601,173.009 371.196,171.871 371.190 C 170.732 371.185,169.080 370.988,168.200 370.753 C 167.320 370.517,164.800 369.918,162.600 369.420 C 160.400 368.923,158.150 368.335,157.600 368.113 C 157.050 367.891,155.702 367.577,154.605 367.416 C 153.508 367.255,152.142 366.880,151.569 366.584 C 150.996 366.288,149.464 365.780,148.164 365.456 C 145.156 364.705,142.365 363.747,139.691 362.547 C 138.531 362.026,137.338 361.600,137.039 361.600 C 136.406 361.600,133.260 360.246,128.200 357.794 C 126.220 356.835,124.060 355.921,123.400 355.764 C 122.740 355.607,121.771 355.145,121.246 354.739 C 120.721 354.333,120.081 354.000,119.824 354.000 C 119.566 354.000,118.745 353.550,118.000 353.000 C 117.255 352.450,116.432 352.000,116.173 352.000 C 115.636 352.000,110.752 349.162,106.600 346.437 C 105.060 345.427,103.644 344.533,103.453 344.451 C 103.261 344.369,101.911 343.429,100.453 342.362 C 98.994 341.296,97.206 340.013,96.479 339.511 C 94.882 338.409,94.357 337.991,88.000 332.757 C 80.620 326.680,68.041 313.831,63.568 307.800 C 62.426 306.260,60.970 304.370,60.332 303.600 C 58.622 301.536,58.543 301.428,57.827 300.162 C 57.465 299.523,56.630 298.280,55.971 297.400 C 54.326 295.203,52.878 292.983,51.823 291.037 C 51.334 290.137,50.512 288.680,49.996 287.800 C 48.638 285.485,46.958 282.441,46.023 280.600 C 45.576 279.720,45.039 278.730,44.830 278.400 C 44.622 278.070,44.202 277.260,43.899 276.600 C 43.595 275.940,43.147 275.040,42.902 274.600 C 42.658 274.160,42.065 272.900,41.586 271.800 C 40.552 269.428,39.224 266.487,38.064 263.999 C 37.602 263.008,36.879 261.208,36.458 259.999 C 35.574 257.465,35.063 256.021,33.765 252.400 C 33.253 250.970,32.715 248.990,32.570 248.000 C 32.425 247.010,32.117 245.840,31.884 245.400 C 31.651 244.960,31.146 243.160,30.761 241.400 C 30.377 239.640,29.778 237.216,29.431 236.013 C 29.084 234.810,28.792 233.010,28.782 232.013 C 28.773 231.016,28.504 229.480,28.184 228.600 C 27.865 227.720,27.510 226.100,27.396 225.000 C 25.946 211.016,25.800 208.632,25.800 199.000 C 25.800 188.451,26.916 175.014,28.030 172.145 C 28.275 171.515,28.619 169.363,28.795 167.362 C 28.971 165.362,29.409 163.156,29.769 162.461 C 30.128 161.765,30.577 159.968,30.765 158.468 C 30.953 156.967,31.375 155.213,31.702 154.569 C 32.029 153.926,32.427 152.500,32.586 151.400 C 32.746 150.300,33.309 148.370,33.838 147.112 C 34.367 145.854,34.800 144.499,34.800 144.101 C 34.800 143.703,35.060 143.006,35.378 142.552 C 35.696 142.098,36.171 140.843,36.432 139.763 C 36.694 138.684,37.243 137.239,37.654 136.553 C 38.064 135.867,38.406 134.967,38.413 134.553 C 38.419 134.139,38.959 132.725,39.613 131.410 C 40.266 130.096,40.800 128.813,40.800 128.559 C 40.800 128.305,41.065 127.878,41.389 127.609 C 41.714 127.340,42.092 126.518,42.230 125.783 C 42.367 125.048,42.912 123.861,43.440 123.146 C 43.968 122.430,44.400 121.579,44.400 121.254 C 44.400 120.929,44.653 120.379,44.962 120.031 C 45.271 119.684,46.280 117.960,47.204 116.200 C 49.859 111.144,50.825 109.446,51.433 108.769 C 51.745 108.421,52.000 108.021,52.000 107.880 C 52.000 107.459,54.559 103.826,55.100 103.480 C 55.375 103.304,55.600 102.985,55.600 102.770 C 55.600 102.386,58.229 98.389,58.738 98.000 C 58.882 97.890,59.625 96.900,60.388 95.800 C 64.117 90.426,74.114 78.992,79.741 73.665 C 83.238 70.354,83.088 70.485,87.621 66.839 C 89.919 64.990,92.198 63.100,92.685 62.639 C 94.097 61.300,98.857 57.854,103.630 54.716 C 104.857 53.909,106.094 52.968,106.379 52.625 C 106.665 52.281,107.110 52.000,107.369 52.000 C 107.628 52.000,108.063 51.777,108.336 51.504 C 108.887 50.953,113.877 48.204,119.400 45.407 C 121.380 44.405,123.270 43.425,123.600 43.230 C 125.695 41.992,133.551 38.400,134.164 38.400 C 134.572 38.400,135.467 38.064,136.153 37.654 C 136.839 37.243,138.284 36.694,139.363 36.432 C 140.443 36.171,141.698 35.696,142.152 35.378 C 142.606 35.060,143.236 34.800,143.550 34.800 C 143.865 34.800,145.040 34.366,146.161 33.836 C 147.283 33.306,148.920 32.743,149.800 32.585 C 150.680 32.426,151.850 32.051,152.400 31.751 C 152.950 31.451,154.660 30.937,156.200 30.608 C 157.740 30.279,159.984 29.738,161.187 29.405 C 162.390 29.072,163.959 28.800,164.672 28.800 C 165.386 28.800,167.462 28.451,169.285 28.023 C 171.108 27.596,175.300 26.950,178.600 26.587 C 181.900 26.224,185.590 25.790,186.800 25.623 C 191.078 25.030,210.190 25.150,213.317 25.790 M172.400 79.202 C 171.630 79.372,169.150 79.904,166.889 80.385 C 164.628 80.866,162.288 81.514,161.689 81.827 C 161.090 82.139,160.209 82.396,159.730 82.398 C 158.876 82.400,153.177 84.467,152.000 85.201 C 151.670 85.407,150.680 85.912,149.800 86.323 C 148.920 86.734,147.953 87.369,147.651 87.735 C 147.349 88.101,146.914 88.400,146.685 88.400 C 146.455 88.400,145.982 88.671,145.634 89.003 C 145.285 89.334,143.908 90.404,142.574 91.381 C 141.240 92.358,139.440 93.811,138.574 94.612 C 137.708 95.412,136.460 96.549,135.800 97.138 C 135.140 97.728,133.540 99.468,132.245 101.005 C 130.950 102.542,129.645 103.944,129.345 104.120 C 129.045 104.296,128.800 104.627,128.800 104.857 C 128.800 105.086,128.426 105.752,127.968 106.337 C 124.577 110.670,120.085 120.039,118.960 125.124 C 118.653 126.513,118.222 127.985,118.002 128.395 C 116.842 130.564,116.290 142.342,116.870 152.546 C 117.188 158.150,117.125 158.400,115.386 158.400 C 114.256 158.400,113.873 158.128,112.836 156.592 L 111.616 154.784 112.448 153.952 C 113.531 152.869,113.062 152.441,110.454 152.132 C 108.597 151.912,108.251 151.713,107.285 150.315 C 104.991 146.996,105.250 147.127,103.079 148.199 L 101.158 149.148 99.779 148.335 C 98.733 147.717,98.400 147.253,98.400 146.409 C 98.400 144.048,95.951 143.815,95.673 146.150 C 95.376 148.639,92.147 150.098,90.693 148.400 C 90.316 147.960,89.723 147.600,89.374 147.600 C 88.898 147.600,88.772 147.275,88.870 146.300 C 88.981 145.192,88.860 144.980,88.054 144.866 C 86.679 144.672,86.443 145.177,86.963 147.200 C 87.747 150.245,85.129 152.714,82.269 151.626 C 81.681 151.403,81.200 150.980,81.200 150.686 C 81.200 149.270,80.207 148.672,78.942 149.327 C 76.717 150.477,76.574 150.973,77.892 152.963 C 80.487 156.881,76.245 161.628,73.084 158.344 C 72.073 157.292,71.787 157.397,70.872 159.152 C 70.063 160.704,70.263 161.600,71.418 161.600 C 72.155 161.600,73.170 162.952,73.438 164.290 C 74.012 167.159,72.083 169.600,69.243 169.600 C 65.780 169.600,66.069 173.441,69.642 174.915 C 71.938 175.863,72.274 181.097,70.147 182.770 C 68.736 183.880,68.826 185.905,70.300 186.220 C 70.905 186.349,71.797 186.615,72.282 186.811 C 73.252 187.202,74.978 190.560,74.649 191.416 C 74.412 192.033,77.609 195.952,82.140 200.600 C 83.856 202.360,85.381 203.943,85.530 204.118 C 86.264 204.983,88.944 207.200,89.255 207.200 C 89.964 207.200,94.400 210.485,94.400 211.011 C 94.400 211.347,94.968 211.599,95.900 211.676 C 97.003 211.767,97.505 212.038,97.795 212.700 C 98.012 213.195,98.388 213.600,98.631 213.600 C 98.874 213.600,100.226 214.181,101.636 214.890 C 103.046 215.600,104.717 216.210,105.349 216.246 C 106.568 216.315,107.184 216.940,107.194 218.120 C 107.199 218.669,107.356 218.753,107.856 218.473 C 108.287 218.231,108.870 218.292,109.556 218.650 C 110.130 218.950,110.887 219.196,111.237 219.198 C 111.588 219.199,112.892 219.550,114.136 219.978 C 115.379 220.406,118.152 220.950,120.298 221.188 C 126.004 221.819,130.417 223.258,131.928 224.979 L 133.138 226.357 132.918 224.231 C 132.421 219.413,140.790 215.053,144.676 218.106 C 146.369 219.437,148.000 221.444,148.000 222.198 C 148.000 223.449,148.736 223.960,150.196 223.723 C 150.912 223.607,151.612 223.695,151.750 223.919 C 151.993 224.312,147.940 228.800,147.343 228.800 C 147.183 228.800,146.680 229.148,146.226 229.574 C 145.168 230.565,142.988 232.138,141.200 233.199 C 140.430 233.656,139.080 234.468,138.200 235.002 C 137.320 235.537,135.880 236.354,135.000 236.818 C 134.120 237.281,132.950 237.914,132.400 238.224 C 131.850 238.534,131.019 238.791,130.554 238.794 C 130.089 238.797,129.269 239.145,128.733 239.567 C 128.196 239.989,127.047 240.459,126.179 240.612 C 125.310 240.765,124.183 241.151,123.674 241.471 C 121.247 242.995,116.371 242.896,116.969 241.336 C 117.242 240.626,116.633 240.659,115.128 241.437 C 113.419 242.321,97.532 242.309,96.180 241.423 C 95.701 241.110,93.800 240.647,91.955 240.395 C 90.078 240.139,88.050 239.599,87.353 239.169 C 86.667 238.746,85.660 238.400,85.115 238.400 C 84.570 238.400,83.601 237.950,82.962 237.400 C 82.323 236.851,81.576 236.401,81.301 236.400 C 79.112 236.398,76.121 231.243,76.539 228.193 C 77.453 221.522,85.658 219.739,88.017 225.698 C 89.082 228.389,90.661 229.395,92.866 228.786 C 95.190 228.144,96.310 223.319,94.840 220.282 C 94.378 219.328,94.000 218.244,94.000 217.874 C 94.000 217.363,93.637 217.199,92.500 217.194 C 90.293 217.185,89.637 216.664,90.555 215.650 C 91.848 214.221,89.157 212.225,87.501 213.384 C 85.687 214.655,83.147 213.658,83.499 211.814 C 83.681 210.862,83.593 210.800,82.057 210.800 C 80.494 210.800,80.436 210.843,80.785 211.761 C 81.525 213.708,78.438 214.838,76.815 213.215 C 75.938 212.338,75.815 212.434,75.412 214.317 C 75.005 216.211,73.353 217.600,71.504 217.600 C 69.989 217.600,69.248 219.088,70.406 219.804 C 71.078 220.219,68.728 223.139,67.500 223.416 C 66.314 223.683,66.024 224.570,67.000 224.945 C 67.841 225.267,67.797 228.319,66.938 229.269 C 66.320 229.951,66.327 230.056,67.038 230.842 C 67.645 231.514,67.805 232.320,67.823 234.808 C 67.835 236.526,68.038 238.172,68.274 238.466 C 68.509 238.760,68.821 239.388,68.966 239.863 C 69.112 240.338,69.494 240.827,69.815 240.950 C 70.236 241.112,70.400 241.830,70.400 243.507 C 70.400 246.210,70.822 246.796,72.780 246.811 C 75.391 246.831,76.792 248.482,76.937 251.710 C 77.067 254.581,77.627 255.733,78.480 254.880 C 80.344 253.016,84.703 255.262,84.219 257.838 C 83.798 260.085,87.342 261.376,88.612 259.438 C 89.996 257.325,92.800 258.895,92.800 261.784 C 92.800 263.352,94.821 263.899,96.585 262.810 C 97.363 262.328,98.000 261.609,98.000 261.210 C 98.000 259.261,100.936 259.942,101.564 262.037 C 101.821 262.896,102.250 263.618,102.516 263.641 C 104.456 263.803,108.400 263.075,108.400 262.555 C 108.400 262.454,108.119 261.944,107.777 261.420 C 107.194 260.531,107.206 260.452,107.973 260.209 C 109.185 259.824,109.712 260.338,109.450 261.649 C 109.077 263.513,113.761 262.952,115.449 260.931 C 116.455 259.727,117.304 259.873,119.028 261.544 C 119.673 262.169,120.857 262.989,121.660 263.367 C 124.835 264.860,124.161 270.438,120.738 271.005 C 117.970 271.464,117.569 271.793,118.062 273.205 C 118.575 274.677,120.102 275.193,121.148 274.247 C 123.491 272.127,127.209 275.127,127.195 279.126 C 127.184 281.944,126.889 282.364,124.402 283.097 C 122.581 283.633,122.166 283.902,122.408 284.387 C 122.576 284.724,122.909 285.495,123.148 286.100 C 123.729 287.571,125.617 287.619,127.036 286.200 C 129.376 283.860,135.572 286.774,136.053 290.440 C 136.194 291.516,134.721 294.191,133.792 294.548 C 133.466 294.673,133.200 294.957,133.200 295.179 C 133.200 295.724,136.327 297.292,136.814 296.992 C 137.503 296.566,137.224 296.021,136.183 295.760 C 134.857 295.427,135.127 294.708,136.753 294.242 C 138.685 293.688,139.766 294.813,138.380 295.936 C 137.561 296.599,137.502 296.800,137.962 297.354 C 138.823 298.392,139.384 298.117,140.315 296.200 L 141.190 294.400 143.541 294.400 C 146.408 294.400,147.784 295.311,148.406 297.621 C 149.025 299.921,150.822 299.983,150.688 297.700 C 150.605 296.279,150.668 296.193,151.900 296.075 C 153.147 295.954,153.200 296.008,153.200 297.375 C 153.200 298.842,153.513 299.127,154.280 298.360 C 154.574 298.066,154.601 297.502,154.362 296.669 C 153.350 293.141,158.843 291.049,161.540 293.935 C 162.301 294.750,162.952 295.116,163.362 294.959 C 164.246 294.620,164.160 293.967,163.200 293.716 C 162.168 293.446,162.192 293.135,163.326 292.070 C 164.515 290.953,164.607 290.968,165.194 292.386 C 165.674 293.545,165.707 293.556,166.604 292.886 C 167.182 292.454,167.391 292.040,167.169 291.769 C 165.913 290.233,168.898 286.649,171.247 286.873 C 172.502 286.993,172.785 286.852,173.382 285.812 C 174.058 284.635,174.056 284.625,173.304 285.306 C 172.882 285.688,172.236 286.000,171.869 286.000 C 170.962 286.000,171.018 284.912,171.939 284.619 C 172.346 284.490,172.882 283.938,173.131 283.392 C 173.379 282.847,173.839 282.400,174.152 282.400 C 174.465 282.400,174.910 281.860,175.140 281.200 C 175.692 279.616,176.547 279.616,176.315 281.200 C 176.194 282.019,176.307 282.400,176.669 282.400 C 176.961 282.400,177.200 282.144,177.200 281.831 C 177.200 281.518,177.710 280.752,178.333 280.129 C 178.956 279.506,179.389 278.766,179.295 278.485 C 179.201 278.203,179.343 277.709,179.611 277.387 C 179.935 276.996,179.953 276.800,179.663 276.800 C 179.424 276.800,179.035 277.160,178.800 277.600 C 178.348 278.445,177.200 278.705,177.200 277.963 C 177.200 277.723,177.560 277.069,178.000 276.509 C 178.440 275.950,178.800 275.094,178.800 274.608 C 178.800 274.122,179.142 273.414,179.560 273.036 C 179.979 272.657,180.439 271.717,180.584 270.947 C 180.813 269.725,184.309 262.501,185.203 261.400 C 185.834 260.625,188.400 255.480,188.400 254.992 C 188.400 254.720,188.683 254.263,189.029 253.976 C 189.375 253.689,190.050 252.742,190.529 251.873 C 192.013 249.179,192.237 248.845,193.233 247.846 C 193.765 247.312,194.423 246.633,194.695 246.338 C 196.514 244.362,196.848 244.213,199.722 244.091 C 201.731 244.006,202.902 244.148,203.600 244.560 C 204.150 244.886,205.223 245.439,205.984 245.791 C 206.745 246.142,207.689 246.738,208.081 247.115 C 208.473 247.492,209.346 248.250,210.020 248.800 C 210.695 249.350,212.721 251.211,214.523 252.935 C 218.857 257.081,219.885 257.629,220.923 256.350 C 221.638 255.467,221.957 255.403,225.408 255.440 C 235.605 255.549,241.467 264.561,235.641 271.169 L 234.786 272.139 236.293 273.367 C 237.122 274.043,238.213 275.002,238.718 275.498 C 239.223 275.994,239.862 276.400,240.138 276.400 C 240.414 276.400,240.846 276.606,241.098 276.858 C 241.442 277.202,241.621 277.056,241.817 276.275 C 242.078 275.236,244.686 273.600,246.083 273.600 C 248.575 273.600,252.429 277.331,251.203 278.557 C 250.981 278.779,250.800 279.269,250.800 279.647 C 250.800 280.024,250.353 280.663,249.806 281.067 C 248.023 282.383,249.669 284.497,254.132 286.619 C 254.829 286.950,256.480 287.832,257.800 288.578 C 259.120 289.324,260.420 289.950,260.688 289.967 C 260.957 289.985,262.127 290.428,263.288 290.950 C 264.450 291.473,266.114 292.028,266.986 292.185 C 267.859 292.341,269.051 292.716,269.636 293.019 C 270.221 293.321,271.930 293.765,273.434 294.005 C 274.938 294.246,276.757 294.722,277.477 295.063 C 279.132 295.849,288.921 295.991,290.306 295.250 C 290.796 294.988,292.233 294.586,293.499 294.356 C 294.764 294.127,296.395 293.593,297.123 293.170 C 299.464 291.808,301.147 292.332,299.361 293.868 C 297.623 295.361,296.706 298.762,297.412 301.102 C 297.839 302.519,297.865 303.040,297.515 303.159 C 297.257 303.247,296.621 303.742,296.103 304.261 L 295.160 305.203 294.574 303.800 C 292.273 298.292,282.400 299.626,282.400 305.444 C 282.400 306.154,282.298 306.999,282.174 307.323 C 282.004 307.766,282.336 307.948,283.522 308.061 C 285.012 308.203,285.068 308.169,284.589 307.406 C 282.423 303.956,285.498 300.972,290.370 301.795 C 291.732 302.025,292.049 302.291,292.758 303.799 C 293.900 306.230,294.752 306.375,297.434 304.595 L 299.645 303.128 298.946 302.064 C 295.893 297.413,302.767 290.530,307.200 293.800 C 309.976 295.848,312.187 292.892,309.768 290.367 C 308.211 288.742,308.060 286.519,309.326 283.848 C 310.592 281.172,310.725 281.090,314.193 280.819 C 317.605 280.553,318.367 279.053,316.072 277.122 C 312.812 274.379,313.872 268.000,317.588 268.000 C 318.348 268.000,318.920 267.724,319.184 267.229 C 319.827 266.028,319.280 265.200,317.845 265.200 C 313.224 265.200,312.017 256.643,316.508 255.723 C 317.923 255.434,318.153 255.037,317.559 253.908 C 316.887 252.633,316.410 252.412,315.361 252.890 C 314.651 253.214,314.305 253.162,313.796 252.653 C 313.437 252.294,312.910 252.000,312.625 252.000 C 311.930 252.000,310.000 249.035,310.000 247.969 C 310.000 247.502,310.639 246.481,311.420 245.700 C 312.294 244.826,312.697 244.137,312.469 243.909 C 312.264 243.704,312.174 242.426,312.269 241.069 C 312.478 238.051,311.887 236.765,310.007 236.153 C 307.810 235.437,307.845 235.347,311.859 231.508 C 313.977 229.482,315.200 228.053,315.200 227.604 C 315.200 227.359,315.650 226.495,316.200 225.686 C 316.750 224.877,317.200 224.016,317.200 223.775 C 317.200 223.533,317.574 222.142,318.032 220.684 C 319.416 216.275,318.348 208.892,315.934 206.174 C 315.530 205.720,315.200 205.194,315.200 205.006 C 315.200 203.949,310.630 200.454,309.534 200.673 C 308.910 200.798,308.400 200.729,308.400 200.521 C 308.400 199.913,305.308 198.060,303.479 197.571 C 302.556 197.324,301.620 196.985,301.400 196.819 C 300.443 196.094,298.952 196.082,297.230 196.786 C 296.223 197.197,294.874 197.650,294.230 197.792 C 293.110 198.039,291.883 198.937,290.461 200.549 C 290.097 200.961,289.465 201.623,289.056 202.019 C 288.538 202.522,288.249 203.539,288.102 205.370 C 287.756 209.677,286.800 208.614,286.800 203.923 C 286.800 198.754,291.754 194.780,298.807 194.292 C 302.119 194.063,308.801 194.616,309.200 195.152 C 310.173 196.459,313.180 198.206,314.770 198.389 C 316.581 198.598,316.601 198.617,316.707 200.200 C 316.903 203.150,317.129 203.550,319.178 204.589 C 321.599 205.816,321.838 206.178,321.034 207.404 C 320.686 207.936,320.400 208.744,320.400 209.198 C 320.400 209.653,320.105 210.138,319.744 210.277 C 319.183 210.492,319.171 210.592,319.660 210.964 C 319.974 211.204,320.456 212.164,320.731 213.098 C 321.331 215.136,322.715 216.000,325.380 216.000 C 327.672 216.000,327.751 216.610,325.505 216.969 C 321.053 217.681,318.696 225.450,322.375 227.286 C 324.634 228.414,325.368 229.341,324.766 230.306 C 324.347 230.976,324.364 231.222,324.865 231.722 C 325.405 232.263,325.537 232.214,326.096 231.264 C 327.570 228.756,326.893 226.800,324.551 226.800 C 322.619 226.800,321.600 225.636,321.600 223.431 C 321.600 220.566,324.660 217.649,327.039 218.246 C 328.354 218.576,328.786 217.955,328.794 215.724 C 328.801 213.769,328.312 213.306,327.082 214.102 C 323.672 216.310,319.133 211.831,321.506 208.600 C 321.904 208.059,324.034 206.608,324.909 206.282 C 326.062 205.853,326.179 204.842,325.197 203.797 C 324.353 202.898,324.219 202.873,323.166 203.417 C 321.513 204.273,320.219 204.133,318.810 202.947 C 317.116 201.522,317.164 198.909,318.900 198.081 C 320.202 197.460,320.257 197.157,319.236 196.233 C 318.507 195.573,318.394 195.592,316.810 196.641 C 313.892 198.572,309.526 195.005,311.367 192.195 C 311.906 191.371,311.905 191.249,311.349 191.036 C 310.568 190.736,310.000 191.072,310.000 191.834 C 310.000 192.514,308.425 193.201,306.874 193.198 C 305.827 193.195,304.885 192.804,302.432 191.355 C 301.306 190.690,301.187 190.688,300.487 191.321 C 299.095 192.581,296.222 192.659,295.032 191.468 C 293.599 190.035,293.713 189.610,296.022 187.792 C 297.134 186.916,298.475 185.638,299.003 184.952 L 299.962 183.704 298.981 182.782 C 297.677 181.558,297.526 177.804,298.764 177.411 C 300.862 176.746,300.709 175.773,298.042 172.828 C 296.575 171.208,296.504 170.566,297.655 169.341 C 298.846 168.074,298.108 166.175,296.267 165.771 C 292.733 164.995,291.301 161.476,293.730 159.538 C 295.155 158.401,294.033 157.613,291.381 157.887 C 288.129 158.222,286.000 156.761,286.000 154.194 C 286.000 152.385,285.530 151.882,284.897 153.013 C 283.708 155.138,279.183 153.468,278.358 150.600 C 278.011 149.390,277.835 149.174,277.639 149.713 C 276.861 151.856,274.261 152.421,271.804 150.981 C 270.076 149.969,270.064 149.968,269.801 150.796 C 269.316 152.325,266.565 153.726,265.465 153.006 C 264.364 152.284,264.000 152.541,264.000 154.038 C 264.000 155.386,263.197 156.249,261.622 156.595 C 260.402 156.863,260.252 157.122,259.813 159.721 C 259.657 160.641,259.288 161.326,258.878 161.454 C 258.505 161.570,257.770 161.838,257.246 162.049 L 256.291 162.432 257.099 163.316 C 258.683 165.049,259.145 166.467,258.562 167.800 C 257.608 169.979,258.122 172.838,259.263 171.697 C 260.696 170.264,262.289 172.134,261.811 174.685 C 261.533 176.165,262.487 178.400,263.396 178.400 C 263.713 178.400,264.563 178.917,265.286 179.549 C 266.009 180.181,267.230 180.821,268.000 180.970 C 268.770 181.120,270.090 181.537,270.933 181.897 C 272.227 182.449,272.662 182.472,273.733 182.043 C 274.430 181.764,275.540 181.372,276.200 181.171 C 280.346 179.914,279.741 176.601,274.930 174.217 C 267.323 170.447,265.819 165.215,271.765 163.207 C 274.724 162.208,275.051 162.208,277.106 163.200 C 278.016 163.640,278.905 164.003,279.081 164.007 C 280.862 164.047,284.046 171.361,284.100 175.539 C 284.224 185.092,272.889 191.040,260.755 187.790 C 259.350 187.414,257.120 186.843,255.800 186.523 C 254.480 186.202,253.116 185.683,252.769 185.370 C 252.421 185.056,251.935 184.800,251.689 184.800 C 250.550 184.800,249.100 182.062,249.552 180.765 C 249.792 180.077,250.174 178.018,250.401 176.189 C 250.629 174.359,251.058 172.263,251.356 171.531 C 251.654 170.799,252.021 168.767,252.173 167.016 C 252.325 165.264,252.713 162.744,253.036 161.416 C 254.291 156.251,254.134 141.450,252.773 136.705 C 252.570 135.997,252.289 133.974,252.150 132.209 C 252.010 130.444,251.583 128.280,251.201 127.400 C 250.818 126.520,250.387 125.018,250.242 124.063 C 250.097 123.108,249.624 121.630,249.189 120.779 C 248.755 119.928,248.400 119.020,248.400 118.760 C 248.400 118.220,245.643 112.585,244.213 110.200 C 243.685 109.320,242.878 107.925,242.418 107.100 C 241.959 106.275,241.407 105.600,241.192 105.600 C 240.976 105.600,240.800 105.417,240.800 105.194 C 240.800 104.100,233.169 95.614,230.800 94.074 C 230.250 93.716,229.111 92.881,228.268 92.219 C 225.869 90.333,214.866 84.400,213.768 84.400 C 213.499 84.400,212.317 83.952,211.140 83.404 C 209.963 82.856,208.550 82.405,208.000 82.401 C 207.450 82.398,206.486 82.127,205.858 81.800 C 204.723 81.208,202.186 80.681,197.190 80.000 C 195.755 79.805,193.775 79.459,192.790 79.232 C 190.740 78.760,174.508 78.735,172.400 79.202 M190.713 80.248 C 191.640 80.652,194.043 81.004,197.095 81.182 C 200.773 81.397,202.171 81.631,202.716 82.124 C 203.281 82.635,207.340 83.540,209.300 83.592 C 209.465 83.596,209.600 83.856,209.600 84.168 C 209.600 84.714,210.038 84.860,213.256 85.383 C 214.230 85.541,214.778 85.873,214.912 86.385 C 215.063 86.963,215.537 87.180,216.856 87.275 C 218.084 87.363,218.600 87.578,218.600 88.000 C 218.600 88.836,215.950 88.589,214.062 87.577 C 213.264 87.150,212.249 86.799,211.806 86.799 C 211.363 86.798,210.423 86.445,209.717 86.015 C 208.880 85.504,207.142 85.099,204.717 84.848 C 202.673 84.637,200.493 84.270,199.874 84.032 C 198.445 83.484,189.760 83.474,186.600 84.017 C 185.280 84.244,182.617 84.603,180.683 84.814 C 178.749 85.024,176.663 85.457,176.047 85.776 C 175.432 86.094,173.737 86.562,172.282 86.815 C 170.826 87.069,169.425 87.529,169.168 87.838 C 168.912 88.147,168.499 88.400,168.251 88.400 C 167.838 88.400,163.419 90.423,162.000 91.261 C 161.670 91.457,160.770 91.900,160.000 92.246 C 159.230 92.593,157.637 93.534,156.460 94.338 C 155.283 95.142,153.886 96.087,153.355 96.437 L 152.391 97.075 154.195 98.931 C 156.726 101.535,156.606 103.288,153.689 106.355 C 151.061 109.117,145.600 108.437,145.600 105.346 C 145.600 105.046,145.460 104.800,145.289 104.800 C 144.596 104.800,140.800 108.940,140.800 109.696 C 140.800 109.932,140.379 110.681,139.863 111.362 C 139.348 112.043,138.798 113.121,138.641 113.757 L 138.356 114.915 140.878 114.662 C 151.308 113.615,153.552 123.657,144.824 132.316 C 141.060 136.050,134.617 136.569,132.685 133.295 C 131.989 132.115,131.822 132.017,131.499 132.595 C 130.862 133.734,131.085 144.633,131.776 146.118 C 132.104 146.823,132.568 148.294,132.807 149.387 C 133.047 150.480,133.593 151.941,134.021 152.634 C 134.450 153.327,134.800 154.100,134.800 154.351 C 134.800 154.602,135.340 155.552,136.000 156.463 C 136.660 157.375,137.200 158.363,137.200 158.660 C 137.200 158.957,137.350 159.200,137.533 159.200 C 137.716 159.200,138.426 160.066,139.112 161.124 C 141.126 164.232,144.604 168.341,148.532 172.252 C 150.549 174.261,153.550 177.385,155.200 179.194 C 156.850 181.004,158.432 182.729,158.715 183.028 C 158.998 183.327,159.506 184.235,159.844 185.044 C 160.183 185.854,160.716 186.773,161.030 187.087 C 162.203 188.261,161.795 194.726,160.364 197.608 C 158.929 200.501,154.515 205.140,152.400 205.977 C 151.630 206.282,150.730 206.757,150.400 207.032 C 148.006 209.026,136.801 210.848,135.628 209.434 C 135.078 208.771,135.474 208.603,138.600 208.167 C 139.700 208.013,141.029 207.553,141.554 207.144 C 142.079 206.735,142.738 206.400,143.020 206.400 C 143.816 206.400,147.615 203.069,148.315 201.757 C 149.330 199.855,149.015 196.861,147.571 194.681 C 146.304 192.770,142.950 190.000,141.900 190.000 C 141.574 190.000,140.879 189.665,140.354 189.255 C 139.829 188.845,138.950 188.371,138.400 188.200 C 137.850 188.030,136.891 187.465,136.269 186.945 C 135.647 186.425,134.865 186.000,134.530 186.000 C 133.775 186.000,127.600 179.776,127.600 179.015 C 127.600 178.710,127.162 177.940,126.626 177.304 C 126.090 176.667,125.530 175.659,125.380 175.063 C 125.230 174.467,124.797 173.812,124.417 173.609 C 123.341 173.033,121.987 168.950,121.718 165.472 C 121.528 162.998,121.296 162.148,120.647 161.543 C 117.760 158.854,116.336 135.825,118.722 130.400 C 119.157 129.410,119.639 127.520,119.793 126.200 C 119.947 124.880,120.310 123.530,120.599 123.200 C 120.889 122.870,121.339 121.790,121.599 120.800 C 121.860 119.810,122.417 118.439,122.837 117.753 C 123.256 117.067,123.600 116.129,123.600 115.668 C 123.600 115.208,123.929 114.509,124.331 114.116 C 124.732 113.722,125.310 112.778,125.613 112.017 C 125.917 111.257,126.488 110.312,126.883 109.917 C 127.277 109.523,127.600 108.949,127.600 108.643 C 127.600 108.336,127.861 107.986,128.179 107.863 C 128.498 107.741,129.047 107.082,129.400 106.399 C 129.754 105.716,130.348 104.833,130.721 104.436 C 131.095 104.039,132.120 102.846,133.000 101.784 C 135.046 99.316,139.605 94.800,140.051 94.800 C 140.239 94.800,140.618 94.440,140.893 94.000 C 141.168 93.560,141.540 93.200,141.720 93.200 C 141.900 93.200,142.892 92.568,143.924 91.795 C 144.956 91.022,146.160 90.121,146.600 89.792 C 147.040 89.462,147.940 88.772,148.600 88.257 C 149.260 87.743,150.340 87.190,151.000 87.030 C 151.660 86.869,152.497 86.470,152.860 86.143 C 153.223 85.816,154.467 85.299,155.624 84.994 C 156.782 84.688,157.835 84.275,157.965 84.075 C 158.094 83.875,159.349 83.511,160.754 83.266 C 162.159 83.021,163.779 82.512,164.354 82.134 C 165.032 81.689,166.739 81.335,169.200 81.128 C 171.290 80.952,174.080 80.552,175.400 80.238 C 178.937 79.397,188.775 79.404,190.713 80.248 M222.284 90.000 C 222.399 90.440,222.818 90.800,223.214 90.800 C 224.362 90.800,225.200 91.240,225.200 91.843 C 225.200 92.734,223.736 92.488,222.562 91.400 C 221.969 90.850,221.184 90.400,220.818 90.400 C 220.452 90.400,219.804 90.136,219.376 89.813 C 218.655 89.267,218.723 89.225,220.337 89.213 C 221.744 89.202,222.115 89.352,222.284 90.000 M227.500 93.052 C 228.558 93.336,228.719 94.406,227.700 94.387 C 226.973 94.374,225.600 93.503,225.600 93.056 C 225.600 92.738,226.322 92.736,227.500 93.052 M230.200 95.200 C 230.632 95.900,229.991 96.491,229.364 95.970 C 229.054 95.713,228.800 95.344,228.800 95.151 C 228.800 94.669,229.895 94.707,230.200 95.200 M232.030 97.310 C 231.981 97.788,231.432 97.696,231.260 97.180 C 231.172 96.916,231.316 96.772,231.580 96.860 C 231.844 96.948,232.047 97.151,232.030 97.310 M249.160 124.900 C 249.123 126.115,249.101 126.135,248.823 125.200 C 248.660 124.650,248.598 124.065,248.687 123.900 C 249.022 123.273,249.199 123.646,249.160 124.900 M251.137 134.300 L 251.074 137.400 250.811 134.600 C 250.666 133.060,250.615 131.665,250.697 131.500 C 251.083 130.727,251.195 131.439,251.137 134.300 M150.646 139.878 C 153.791 143.312,149.856 147.957,145.487 145.967 C 143.858 145.224,143.105 142.088,144.206 140.632 C 146.160 138.051,148.700 137.753,150.646 139.878 M99.135 149.486 C 100.483 150.607,101.994 150.634,103.358 149.562 C 104.666 148.533,105.413 148.765,105.719 150.297 C 105.874 151.068,106.487 151.816,107.534 152.509 C 109.021 153.493,109.134 153.708,109.406 156.078 C 109.569 157.494,110.029 159.070,110.456 159.672 C 111.816 161.594,112.171 170.105,110.971 172.046 C 110.120 173.423,108.611 171.515,108.245 168.600 C 108.107 167.500,107.665 166.150,107.263 165.600 C 106.861 165.050,106.410 164.110,106.261 163.511 C 106.112 162.912,105.655 162.102,105.245 161.711 C 104.835 161.320,104.389 160.638,104.253 160.196 C 104.118 159.754,103.601 159.214,103.104 158.996 C 102.562 158.759,102.151 158.181,102.079 157.556 C 102.002 156.895,101.563 156.315,100.879 155.974 C 100.285 155.677,99.470 155.160,99.066 154.825 C 97.986 153.927,89.367 153.938,87.983 154.839 C 87.442 155.191,86.347 155.693,85.548 155.954 C 84.750 156.216,83.777 156.783,83.386 157.215 C 82.996 157.647,82.518 158.000,82.325 158.000 C 81.860 158.000,79.200 160.671,79.200 161.138 C 79.200 161.338,78.923 161.732,78.585 162.013 C 78.246 162.294,77.595 163.393,77.138 164.456 C 76.241 166.541,75.830 166.652,75.481 164.903 C 75.358 164.290,74.885 163.359,74.429 162.833 C 73.973 162.308,73.600 161.745,73.600 161.582 C 73.600 161.420,73.167 161.178,72.637 161.045 C 71.921 160.865,71.727 160.602,71.880 160.016 C 72.061 159.325,72.157 159.300,72.671 159.814 C 74.453 161.596,78.506 159.990,79.936 156.936 L 80.871 154.940 79.841 153.370 C 79.275 152.507,78.639 151.594,78.429 151.342 C 78.164 151.024,78.334 150.829,78.988 150.704 C 79.680 150.572,80.038 150.765,80.343 151.435 C 81.301 153.537,85.320 153.164,87.741 150.749 C 89.179 149.315,89.339 149.252,90.130 149.806 C 92.402 151.397,96.748 149.462,96.833 146.822 C 96.863 145.877,96.911 145.906,97.467 147.200 C 97.799 147.970,98.549 148.999,99.135 149.486 M253.076 149.900 C 252.975 150.285,252.893 149.970,252.893 149.200 C 252.893 148.430,252.975 148.115,253.076 148.500 C 253.176 148.885,253.176 149.515,253.076 149.900 M241.737 152.446 C 241.993 152.797,242.609 153.213,243.106 153.370 C 243.602 153.528,244.258 154.139,244.563 154.729 C 244.868 155.319,245.497 156.144,245.959 156.563 C 246.719 157.251,246.800 157.758,246.800 161.851 L 246.800 166.379 244.952 168.226 L 243.105 170.074 239.405 169.937 L 235.704 169.800 234.052 168.147 C 233.066 167.161,232.395 166.112,232.387 165.547 C 232.381 165.026,231.932 163.700,231.391 162.600 C 230.850 161.500,230.407 160.240,230.407 159.800 C 230.407 159.360,230.850 158.100,231.391 157.000 C 231.932 155.900,232.381 154.746,232.387 154.436 C 232.441 152.015,240.213 150.361,241.737 152.446 M148.518 153.328 C 152.814 158.960,148.627 166.160,143.382 162.159 C 142.622 161.579,142.000 160.878,142.000 160.602 C 142.000 160.325,141.730 159.874,141.400 159.600 C 140.131 158.546,140.961 155.408,143.121 153.100 C 144.687 151.425,147.146 151.529,148.518 153.328 M278.200 156.593 C 282.710 157.653,284.201 158.099,285.976 158.915 C 286.953 159.364,288.595 159.813,289.625 159.912 L 291.498 160.092 291.728 162.329 C 291.974 164.707,293.444 166.494,296.082 167.620 L 297.163 168.082 296.340 169.196 C 295.216 170.716,295.639 172.411,297.636 174.389 C 299.334 176.070,299.498 176.400,298.636 176.400 C 296.359 176.400,295.408 180.693,297.250 182.653 C 298.247 183.714,297.857 185.394,296.503 185.870 C 296.117 186.006,295.295 186.584,294.679 187.154 C 293.599 188.152,293.516 188.166,292.427 187.541 C 291.805 187.185,290.842 186.979,290.288 187.085 C 288.958 187.340,288.528 186.087,289.379 184.440 C 290.306 182.648,290.200 177.071,289.200 175.000 C 288.775 174.120,288.421 173.144,288.414 172.831 C 288.396 172.109,284.968 168.800,284.236 168.800 C 283.934 168.800,283.568 168.329,283.424 167.753 C 283.074 166.358,280.511 163.334,279.227 162.801 C 278.662 162.567,277.750 162.101,277.200 161.767 C 276.027 161.053,271.490 161.261,270.511 162.074 C 270.183 162.346,269.529 162.758,269.057 162.990 C 266.940 164.030,266.314 167.900,267.956 169.800 C 268.336 170.240,268.862 171.104,269.125 171.721 C 269.399 172.366,270.167 173.078,270.933 173.398 C 271.665 173.704,272.492 174.229,272.772 174.566 C 273.052 174.903,273.895 175.294,274.647 175.435 C 275.398 175.576,276.527 176.171,277.154 176.757 L 278.294 177.822 277.247 179.058 C 275.927 180.617,273.498 181.046,270.600 180.233 C 269.500 179.924,268.887 179.655,269.238 179.636 C 271.289 179.521,271.367 178.123,269.446 175.875 C 268.431 174.686,267.600 173.530,267.600 173.306 C 267.600 173.082,267.313 172.660,266.962 172.369 C 265.942 171.522,264.375 167.964,264.125 165.924 C 263.794 163.230,266.813 158.000,268.698 158.000 C 268.996 158.000,269.816 157.696,270.520 157.324 C 271.593 156.758,273.682 156.219,275.400 156.064 C 275.620 156.044,276.880 156.282,278.200 156.593 M100.940 159.388 C 102.820 160.341,105.600 163.521,105.600 164.717 C 105.600 165.003,106.050 166.082,106.600 167.115 C 108.770 171.191,107.660 175.965,104.294 177.034 C 100.477 178.245,99.046 181.420,101.730 182.724 C 104.437 184.039,112.988 183.440,114.790 181.809 C 115.160 181.474,115.714 181.200,116.020 181.200 C 116.738 181.200,121.200 176.795,121.200 176.086 C 121.200 173.907,123.974 173.998,124.646 176.200 C 125.605 179.340,131.649 185.844,135.427 187.800 C 136.701 188.460,138.367 189.405,139.128 189.900 C 139.889 190.395,140.736 190.800,141.011 190.800 C 141.729 190.800,145.549 193.322,145.577 193.815 C 145.590 194.043,146.133 194.853,146.784 195.615 C 149.280 198.536,146.864 204.243,142.634 205.420 C 142.175 205.548,140.720 206.133,139.400 206.720 C 135.664 208.383,119.264 208.360,115.091 206.687 C 113.601 206.089,112.034 205.600,111.609 205.600 C 111.183 205.600,110.172 205.150,109.362 204.600 C 108.551 204.050,107.564 203.600,107.168 203.600 C 106.771 203.600,106.334 203.417,106.195 203.192 C 106.057 202.968,105.056 202.335,103.972 201.786 C 102.887 201.236,102.000 200.610,102.000 200.393 C 102.000 200.177,101.748 200.000,101.439 200.000 C 100.609 200.000,93.022 192.302,92.420 190.849 C 92.136 190.162,91.767 189.600,91.600 189.600 C 91.433 189.600,91.062 189.015,90.776 188.300 C 90.489 187.585,89.927 186.571,89.527 186.046 C 89.127 185.521,88.800 184.794,88.800 184.431 C 88.800 184.067,88.409 183.056,87.931 182.185 C 86.765 180.060,86.559 169.276,87.652 167.600 C 88.011 167.050,88.410 166.150,88.539 165.600 C 88.976 163.737,93.240 159.731,95.126 159.413 C 96.044 159.257,96.897 158.966,97.022 158.765 C 97.415 158.129,98.936 158.371,100.940 159.388 M190.493 160.000 C 190.768 160.440,191.180 160.800,191.408 160.800 C 193.593 160.800,195.585 166.455,195.013 171.034 C 194.694 173.588,192.218 177.064,190.465 177.417 C 189.879 177.535,188.944 177.864,188.387 178.147 C 187.570 178.563,187.106 178.566,185.987 178.162 C 185.224 177.886,184.186 177.647,183.680 177.630 C 182.746 177.600,180.000 175.265,180.000 174.502 C 180.000 174.273,179.746 173.988,179.436 173.869 C 176.712 172.824,177.870 163.036,180.879 161.674 C 181.033 161.604,181.933 161.022,182.879 160.381 C 185.111 158.868,189.644 158.641,190.493 160.000 M251.200 164.049 C 251.200 168.314,251.128 168.838,250.600 168.400 C 249.869 167.793,249.819 165.275,250.469 161.746 C 251.117 158.231,251.200 158.492,251.200 164.049 M119.471 162.100 C 121.146 163.962,121.087 165.741,119.333 166.181 C 117.911 166.538,116.400 165.111,116.400 163.410 C 116.400 161.177,118.019 160.487,119.471 162.100 M86.000 169.800 C 86.000 172.138,85.495 172.899,84.803 171.606 C 84.415 170.880,84.584 168.361,85.080 167.493 C 85.536 166.695,86.000 167.859,86.000 169.800 M75.030 169.701 C 74.891 170.572,74.512 171.796,74.189 172.422 C 73.865 173.048,73.600 173.870,73.600 174.249 C 73.600 175.865,72.303 176.532,71.745 175.203 C 71.388 174.355,70.683 173.750,69.422 173.210 C 67.155 172.237,67.268 171.200,69.643 171.200 C 70.499 171.200,71.200 171.011,71.200 170.779 C 71.200 170.548,71.723 170.176,72.363 169.953 C 73.071 169.706,73.621 169.172,73.767 168.588 C 74.207 166.835,75.330 167.824,75.030 169.701 M249.420 175.770 C 249.298 177.073,248.928 178.437,248.599 178.801 C 247.773 179.714,247.844 182.788,248.715 183.800 C 249.964 185.253,252.342 186.809,253.682 187.050 C 254.407 187.181,255.800 187.661,256.778 188.117 C 258.361 188.856,259.518 188.967,267.278 189.126 C 275.885 189.302,277.325 189.569,274.800 190.522 C 273.467 191.025,273.329 191.477,274.161 192.615 C 274.652 193.286,274.621 193.585,273.915 194.991 C 272.674 197.461,272.132 197.893,269.077 198.838 L 266.243 199.715 264.537 198.810 C 262.458 197.708,261.570 195.749,262.527 194.382 C 263.871 192.464,261.955 191.188,257.772 191.216 L 255.400 191.231 256.700 191.796 C 258.858 192.734,258.107 195.610,255.545 196.215 C 253.471 196.705,251.690 193.372,253.355 192.119 C 254.604 191.178,253.597 189.525,251.315 188.772 C 247.011 187.351,244.500 184.390,245.386 181.779 C 245.724 180.785,246.000 179.746,246.000 179.471 C 246.000 179.195,246.350 178.284,246.777 177.446 C 247.204 176.608,247.661 175.354,247.792 174.661 C 247.923 173.967,248.242 172.590,248.500 171.600 L 248.969 169.800 249.306 171.600 C 249.492 172.590,249.543 174.466,249.420 175.770 M286.064 178.114 C 285.740 179.558,285.686 179.226,285.691 175.800 C 285.696 171.932,285.709 171.876,286.069 174.114 C 286.301 175.555,286.299 177.065,286.064 178.114 M109.035 174.298 C 108.605 174.728,108.377 174.126,108.679 173.357 C 108.962 172.636,108.983 172.635,109.124 173.331 C 109.204 173.734,109.165 174.169,109.035 174.298 M227.252 173.700 C 228.123 174.419,227.700 180.689,226.746 181.223 C 226.386 181.424,225.977 182.199,225.837 182.946 C 225.697 183.692,225.181 184.761,224.691 185.321 C 224.201 185.881,223.366 186.938,222.836 187.669 C 219.540 192.216,213.602 194.571,211.615 192.118 C 211.252 191.670,210.570 191.181,210.098 191.031 C 209.627 190.882,209.130 190.408,208.994 189.980 C 208.857 189.551,208.500 189.200,208.200 189.200 C 207.900 189.200,207.531 188.795,207.381 188.300 C 207.231 187.805,206.748 187.006,206.308 186.525 C 205.842 186.016,205.418 184.845,205.293 183.725 C 205.176 182.666,204.854 181.440,204.579 181.000 C 202.279 177.323,203.326 176.651,211.761 176.382 C 217.005 176.215,218.947 176.006,220.087 175.482 C 220.905 175.107,222.100 174.800,222.743 174.800 C 223.386 174.800,224.336 174.446,224.856 174.013 C 225.969 173.086,226.435 173.025,227.252 173.700 M85.994 179.337 C 85.999 182.516,86.080 182.896,86.787 183.081 C 87.607 183.295,87.769 183.642,88.176 186.061 C 88.311 186.865,88.669 187.618,88.971 187.733 C 89.272 187.849,89.732 188.587,89.991 189.372 C 90.250 190.157,90.715 190.800,91.023 190.800 C 91.332 190.800,91.701 191.264,91.844 191.831 C 91.986 192.399,92.619 193.429,93.251 194.121 C 93.883 194.812,94.400 195.587,94.400 195.842 C 94.400 196.098,94.760 196.401,95.200 196.516 C 95.640 196.631,96.000 197.012,96.000 197.363 C 96.000 197.733,95.665 198.000,95.200 198.000 C 94.760 198.000,94.400 197.862,94.400 197.694 C 94.400 197.526,93.138 196.054,91.595 194.423 C 89.835 192.562,88.619 190.888,88.331 189.929 C 88.079 189.088,87.737 188.400,87.570 188.400 C 87.403 188.400,86.964 187.545,86.596 186.500 C 86.227 185.455,85.654 184.092,85.323 183.471 C 84.485 181.901,84.123 176.215,84.808 175.390 C 85.663 174.360,85.987 175.439,85.994 179.337 M105.796 178.816 C 105.374 180.739,106.076 181.221,109.212 181.156 C 112.186 181.095,113.686 181.573,111.996 182.043 C 110.738 182.393,103.478 182.482,102.633 182.157 C 101.405 181.686,101.874 179.820,103.500 178.707 C 105.585 177.279,106.128 177.305,105.796 178.816 M73.200 183.425 C 73.200 184.992,72.564 185.536,71.720 184.691 C 71.206 184.177,71.193 183.877,71.634 182.658 C 72.268 180.904,73.200 181.361,73.200 183.425 M284.394 182.100 C 284.380 183.242,283.612 183.826,283.606 182.700 C 283.603 182.095,283.780 181.600,284.000 181.600 C 284.220 181.600,284.397 181.825,284.394 182.100 M279.100 187.700 C 278.848 188.457,277.600 188.564,277.600 187.829 C 277.600 187.458,277.942 187.200,278.433 187.200 C 278.922 187.200,279.198 187.407,279.100 187.700 M292.194 188.946 C 293.895 190.190,291.429 192.800,288.554 192.800 C 286.109 192.800,286.786 189.731,289.406 188.942 C 291.480 188.317,291.333 188.317,292.194 188.946 M286.557 193.833 C 287.496 196.280,284.971 199.559,282.605 198.965 C 280.966 198.554,280.916 197.150,282.464 195.046 C 283.904 193.090,286.030 192.460,286.557 193.833 M302.800 198.403 C 305.422 199.149,308.812 203.259,309.656 206.715 C 309.910 207.752,310.361 209.086,310.658 209.680 C 311.384 211.126,311.344 213.762,310.574 215.250 C 310.230 215.916,309.782 217.481,309.579 218.729 C 309.376 219.976,309.031 221.056,308.813 221.129 C 308.595 221.202,308.030 221.949,307.557 222.790 C 307.085 223.631,306.226 224.558,305.649 224.849 C 305.072 225.141,304.171 225.699,303.646 226.089 C 302.364 227.044,293.072 227.094,290.600 226.160 C 289.720 225.827,288.460 225.388,287.800 225.184 C 286.616 224.818,282.767 223.070,281.600 222.369 C 281.270 222.171,280.318 221.639,279.483 221.188 C 278.649 220.736,277.632 220.059,277.224 219.683 C 276.815 219.308,275.832 218.410,275.040 217.690 C 274.248 216.969,273.600 216.277,273.600 216.151 C 273.600 216.026,273.218 215.387,272.750 214.730 C 270.556 211.648,271.605 205.600,274.334 205.600 C 274.536 205.600,274.917 205.341,275.179 205.025 C 275.441 204.709,276.633 204.328,277.828 204.179 C 279.537 203.966,280.000 203.757,280.000 203.200 C 280.000 202.116,281.946 200.969,282.611 201.660 C 284.212 203.325,284.412 205.119,283.118 206.208 L 281.888 207.242 280.744 206.146 L 279.600 205.050 279.540 206.025 C 279.412 208.092,279.697 209.431,280.434 210.226 C 280.855 210.680,281.200 211.350,281.200 211.716 C 281.200 212.662,285.663 217.100,286.936 217.420 C 287.522 217.567,288.670 218.028,289.486 218.444 C 291.406 219.423,293.828 219.406,295.704 218.400 C 296.525 217.960,297.526 217.600,297.929 217.600 C 301.090 217.600,303.380 209.302,301.000 206.473 C 300.450 205.819,300.000 205.099,300.000 204.873 C 300.000 204.647,299.349 204.247,298.552 203.984 C 296.798 203.405,296.271 203.912,296.560 205.899 C 297.086 209.510,292.310 211.078,290.271 207.964 C 288.776 205.681,289.564 201.807,291.715 200.862 C 291.888 200.786,292.573 200.266,293.238 199.706 C 295.131 198.114,299.629 197.501,302.800 198.403 M97.462 199.017 C 97.786 199.861,97.245 200.317,96.784 199.588 C 96.295 198.814,96.305 198.400,96.813 198.400 C 97.039 198.400,97.332 198.678,97.462 199.017 M279.200 199.541 C 279.004 199.903,278.740 200.852,278.613 201.650 C 278.391 203.046,278.309 203.109,276.375 203.366 C 275.188 203.523,274.042 203.958,273.568 204.432 C 273.128 204.872,272.325 205.400,271.784 205.606 C 270.726 206.008,270.663 206.378,270.619 212.361 C 270.607 213.937,270.421 214.984,270.134 215.083 C 268.655 215.593,268.652 207.434,270.131 205.300 C 272.849 201.378,281.005 196.198,279.200 199.541 M101.200 201.400 C 101.200 202.062,101.024 202.103,99.700 201.748 C 98.403 201.400,98.593 200.800,100.000 200.800 C 100.800 200.800,101.200 201.000,101.200 201.400 M103.600 203.176 C 103.600 203.873,102.923 203.978,102.159 203.400 C 101.440 202.856,101.458 202.825,102.500 202.813 C 103.105 202.806,103.600 202.969,103.600 203.176 M324.579 204.766 C 324.849 205.204,324.003 205.557,323.302 205.299 C 323.029 205.199,322.904 204.955,323.026 204.758 C 323.314 204.292,324.289 204.297,324.579 204.766 M107.400 205.200 C 107.264 205.420,106.904 205.600,106.600 205.600 C 106.296 205.600,105.936 205.420,105.800 205.200 C 105.659 204.972,106.004 204.800,106.600 204.800 C 107.196 204.800,107.541 204.972,107.400 205.200 M119.134 208.750 C 119.563 209.022,119.542 209.137,119.029 209.333 C 118.179 209.660,115.955 209.197,116.230 208.751 C 116.506 208.305,118.431 208.305,119.134 208.750 M289.600 208.987 C 289.600 209.345,289.365 209.485,289.000 209.345 C 288.670 209.218,288.400 208.954,288.400 208.757 C 288.400 208.561,288.670 208.400,289.000 208.400 C 289.330 208.400,289.600 208.664,289.600 208.987 M301.172 210.900 C 301.149 211.959,301.085 212.051,300.827 211.400 C 300.653 210.960,300.595 210.375,300.698 210.100 C 301.020 209.242,301.201 209.548,301.172 210.900 M299.297 215.013 C 298.819 215.866,298.202 215.094,298.578 214.114 C 298.754 213.654,298.950 213.590,299.255 213.895 C 299.538 214.178,299.552 214.556,299.297 215.013 M127.267 214.700 C 129.233 215.733,129.854 217.547,128.808 219.200 C 128.326 219.961,124.350 219.988,123.445 219.237 C 120.015 216.391,123.227 212.577,127.267 214.700 M297.902 216.100 C 297.707 216.697,295.600 217.026,295.600 216.460 C 295.600 216.004,296.286 215.677,297.333 215.632 C 297.750 215.614,297.996 215.816,297.902 216.100 M87.181 217.190 C 88.478 217.845,90.318 218.500,91.270 218.645 C 95.681 219.318,96.627 224.381,92.887 227.297 L 91.509 228.371 90.427 227.285 C 89.832 226.688,89.154 225.651,88.921 224.979 C 86.899 219.157,78.721 219.662,75.823 225.788 C 74.582 228.410,74.539 229.872,75.632 232.270 C 76.227 233.577,76.341 234.219,76.032 234.528 C 75.413 235.147,75.499 236.916,76.194 237.824 C 76.520 238.251,76.974 239.264,77.202 240.076 C 77.431 240.888,78.019 242.037,78.509 242.630 C 79.902 244.316,83.722 248.124,84.813 248.916 C 87.337 250.746,89.459 251.986,90.080 251.993 C 90.454 251.997,90.904 252.244,91.080 252.543 C 91.256 252.842,92.390 253.316,93.600 253.597 C 94.810 253.878,96.333 254.377,96.984 254.707 C 97.635 255.037,99.473 255.453,101.068 255.632 C 107.253 256.326,110.059 258.096,107.000 259.374 C 105.773 259.887,105.600 260.134,105.600 261.380 C 105.600 262.770,105.566 262.800,104.000 262.800 C 102.549 262.800,102.400 262.704,102.400 261.774 C 102.400 258.696,98.725 258.013,96.402 260.659 C 95.113 262.127,94.446 262.040,94.393 260.400 C 94.309 257.802,90.232 256.383,88.073 258.200 C 86.145 259.822,85.200 259.566,85.200 257.422 C 85.200 254.529,83.992 253.471,80.461 253.271 L 77.625 253.111 78.175 252.048 C 78.643 251.143,78.641 250.871,78.162 250.216 C 77.853 249.793,77.600 249.160,77.600 248.809 C 77.600 247.790,74.443 245.600,72.974 245.600 L 71.693 245.600 71.525 242.960 C 71.401 241.015,71.178 240.220,70.678 239.940 C 69.778 239.436,69.699 231.080,70.569 228.371 C 70.882 227.397,71.246 225.944,71.379 225.142 C 71.581 223.920,72.635 222.161,74.338 220.200 C 77.684 216.348,83.031 215.095,87.181 217.190 M272.400 216.833 C 272.400 217.808,271.465 217.670,271.271 216.667 C 271.194 216.272,271.398 216.000,271.771 216.000 C 272.142 216.000,272.400 216.342,272.400 216.833 M274.400 218.800 C 274.400 219.707,273.985 219.825,273.280 219.120 C 272.575 218.415,272.693 218.000,273.600 218.000 C 274.133 218.000,274.400 218.267,274.400 218.800 M311.137 219.458 C 311.487 220.131,311.456 220.422,310.992 220.807 C 310.487 221.226,310.400 221.075,310.400 219.782 C 310.400 218.159,310.451 218.136,311.137 219.458 M276.400 220.376 C 276.400 221.069,275.696 221.198,275.196 220.596 C 274.785 220.100,274.845 220.000,275.551 220.000 C 276.018 220.000,276.400 220.169,276.400 220.376 M262.774 224.713 C 264.351 226.290,264.068 228.245,262.145 229.049 C 258.405 230.611,255.805 227.073,258.900 224.633 C 260.567 223.320,261.398 223.337,262.774 224.713 M282.222 224.035 C 282.688 224.789,281.717 225.395,280.998 224.798 C 280.492 224.378,280.468 224.203,280.881 223.941 C 281.582 223.497,281.903 223.519,282.222 224.035 M309.200 224.200 C 309.200 224.530,309.020 224.800,308.800 224.800 C 308.580 224.800,308.400 224.530,308.400 224.200 C 308.400 223.870,308.580 223.600,308.800 223.600 C 309.020 223.600,309.200 223.870,309.200 224.200 M286.912 226.515 C 285.886 226.973,284.310 226.550,285.137 226.039 C 285.420 225.864,286.131 225.812,286.716 225.924 C 287.756 226.123,287.761 226.137,286.912 226.515 M294.200 228.200 C 294.200 228.874,291.465 228.886,290.600 228.216 C 289.852 227.637,289.944 227.603,292.000 227.698 C 293.210 227.754,294.200 227.980,294.200 228.200 M303.774 227.958 C 304.042 228.391,303.080 228.800,301.791 228.800 C 300.815 228.800,300.230 228.304,300.678 227.856 C 301.065 227.468,303.522 227.550,303.774 227.958 M277.484 228.429 C 281.885 229.035,284.721 231.657,283.740 234.212 C 283.360 235.202,281.629 234.929,281.204 233.811 C 280.367 231.610,274.876 231.130,273.300 233.121 C 272.502 234.129,272.676 236.316,273.600 236.893 C 275.159 237.867,273.254 240.885,271.629 240.016 C 270.286 239.297,266.992 239.467,267.619 240.223 C 267.903 240.566,268.601 240.817,269.168 240.781 C 271.037 240.662,271.200 240.770,271.200 242.120 C 271.200 243.783,270.590 244.400,268.945 244.400 C 267.710 244.400,267.636 244.488,267.371 246.253 C 266.942 249.113,267.510 254.993,268.361 256.502 C 268.764 257.216,269.321 258.655,269.599 259.700 C 269.877 260.745,270.236 261.600,270.397 261.600 C 270.558 261.600,271.369 262.140,272.200 262.800 C 274.827 264.887,276.784 264.430,278.220 261.393 L 279.220 259.280 278.210 257.381 C 276.863 254.848,276.784 251.036,278.046 249.433 C 278.511 248.842,278.801 248.268,278.691 248.158 C 277.349 246.815,276.299 252.881,277.248 256.494 C 278.319 260.570,275.612 264.424,273.234 262.210 C 272.885 261.886,271.925 261.057,271.100 260.369 C 269.261 258.834,269.250 258.539,270.960 256.617 C 272.095 255.341,272.393 254.596,272.763 252.103 C 273.034 250.285,273.519 248.721,274.004 248.104 C 274.442 247.548,274.800 246.876,274.800 246.612 C 274.800 245.734,277.628 242.485,278.823 241.990 C 279.470 241.722,280.000 241.354,280.000 241.171 C 280.000 240.989,281.809 240.270,284.019 239.575 C 288.938 238.026,291.552 238.079,295.942 239.817 C 299.491 241.222,304.369 245.696,304.393 247.569 C 304.397 247.881,304.665 248.430,304.989 248.788 C 305.313 249.146,305.857 250.691,306.197 252.220 C 306.536 253.749,307.099 256.260,307.447 257.800 C 308.177 261.033,307.980 266.422,307.033 269.107 C 306.710 270.021,306.256 271.797,306.024 273.052 C 305.792 274.307,305.355 275.619,305.053 275.967 C 304.751 276.315,304.344 277.050,304.148 277.600 C 303.429 279.620,301.389 282.387,300.112 283.075 C 299.391 283.464,298.800 283.907,298.800 284.060 C 298.800 284.213,298.125 284.557,297.300 284.825 C 296.475 285.092,295.260 285.691,294.600 286.156 C 292.552 287.597,280.278 287.411,277.161 285.891 C 275.930 285.291,274.636 284.800,274.285 284.800 C 273.934 284.800,273.524 284.601,273.374 284.358 C 273.224 284.115,272.427 283.615,271.602 283.246 C 269.013 282.086,263.184 277.092,260.498 273.729 C 260.001 273.108,259.146 272.079,258.598 271.442 C 258.049 270.804,257.600 270.112,257.600 269.903 C 257.600 269.694,257.220 268.990,256.755 268.337 C 255.522 266.605,254.201 264.025,253.611 262.198 C 253.328 261.319,252.912 260.369,252.688 260.087 C 252.464 259.804,252.038 258.274,251.741 256.687 C 251.445 255.099,250.995 252.990,250.742 252.000 C 249.238 246.127,250.295 233.927,252.406 232.797 C 253.528 232.196,259.531 232.322,262.135 233.000 C 264.956 233.735,265.200 233.740,265.200 233.064 C 265.200 231.895,268.612 228.870,270.231 228.604 C 271.094 228.463,272.070 228.290,272.400 228.220 C 273.575 227.971,274.407 228.005,277.484 228.429 M290.426 230.625 L 291.526 231.679 290.747 233.000 C 288.991 235.976,284.788 235.075,284.806 231.726 C 284.821 229.007,288.072 228.370,290.426 230.625 M318.701 230.831 C 315.474 232.711,314.103 236.003,315.313 238.967 C 315.910 240.428,316.466 239.075,316.043 237.192 L 315.653 235.457 317.675 233.529 C 319.951 231.358,320.650 231.199,322.082 232.526 L 323.081 233.451 323.488 232.373 C 324.062 230.853,320.587 229.733,318.701 230.831 M300.200 232.750 C 302.089 233.843,301.949 236.064,299.960 236.556 C 295.747 237.597,292.429 234.404,295.654 232.413 C 297.122 231.507,298.189 231.586,300.200 232.750 M279.006 233.275 C 280.889 234.134,279.478 236.760,277.119 236.787 C 275.549 236.806,274.000 235.985,274.000 235.136 C 274.000 233.234,276.707 232.228,279.006 233.275 M324.419 234.380 C 324.100 234.582,323.664 234.640,323.451 234.508 C 323.224 234.368,323.175 234.558,323.332 234.967 C 323.479 235.351,323.600 235.741,323.600 235.833 C 323.600 236.391,324.344 235.842,324.727 235.000 C 325.237 233.880,325.230 233.866,324.419 234.380 M309.838 237.217 C 311.901 237.994,312.073 241.320,310.118 242.634 C 306.783 244.876,302.367 240.372,305.160 237.578 C 306.441 236.298,307.233 236.237,309.838 237.217 M120.400 240.000 C 119.288 240.609,119.172 240.770,119.838 240.783 C 120.299 240.792,121.002 240.440,121.400 240.000 C 122.283 239.025,122.182 239.025,120.400 240.000 M140.026 240.414 C 141.011 240.941,141.079 243.429,140.138 244.469 C 139.193 245.513,136.422 245.447,135.024 244.347 C 132.231 242.151,136.703 238.635,140.026 240.414 M149.874 242.168 L 150.795 243.239 149.922 244.419 C 148.977 245.697,147.601 245.966,146.820 245.024 C 146.557 244.707,145.950 244.392,145.471 244.324 C 144.565 244.195,144.088 242.590,144.577 241.316 C 144.988 240.245,148.739 240.848,149.874 242.168 M320.184 241.227 C 320.039 241.461,320.016 241.749,320.133 241.867 C 320.420 242.153,321.200 241.648,321.200 241.176 C 321.200 240.665,320.509 240.699,320.184 241.227 M91.800 241.600 C 91.486 242.107,89.985 242.107,89.200 241.600 C 88.761 241.316,89.063 241.211,90.324 241.206 C 91.372 241.202,91.950 241.357,91.800 241.600 M111.600 243.600 C 110.886 244.061,104.951 244.074,102.400 243.620 C 101.082 243.386,102.152 243.288,106.400 243.256 C 110.275 243.227,112.001 243.341,111.600 243.600 M131.100 244.396 C 134.373 246.391,130.592 251.163,126.600 250.075 C 124.013 249.370,124.108 244.850,126.718 244.472 C 127.203 244.402,127.600 244.177,127.600 243.972 C 127.600 243.316,129.758 243.577,131.100 244.396 M221.196 245.398 C 222.841 246.248,223.600 247.525,223.600 249.440 C 223.600 251.775,222.767 252.244,218.949 252.060 C 216.178 251.927,215.829 246.558,218.514 245.390 C 220.112 244.696,219.837 244.695,221.196 245.398 M157.413 248.040 C 158.100 250.206,154.779 250.462,154.026 248.301 C 153.674 247.293,153.719 247.001,154.294 246.581 C 155.183 245.931,157.015 246.788,157.413 248.040 M268.980 247.733 C 268.903 253.378,268.760 255.317,268.446 254.980 C 268.069 254.574,267.608 247.352,267.904 246.480 C 268.257 245.439,268.999 246.305,268.980 247.733 M152.426 248.414 C 152.852 248.642,153.200 249.085,153.200 249.400 C 153.200 251.276,157.395 251.520,158.354 249.700 C 159.310 247.886,162.303 249.683,163.852 253.000 C 164.160 253.660,164.583 254.470,164.791 254.800 C 166.588 257.643,167.320 260.687,167.496 266.048 L 167.674 271.496 166.371 274.199 C 164.604 277.862,161.317 281.200,159.476 281.200 C 159.029 281.200,158.353 281.480,157.975 281.823 C 156.435 283.216,146.459 283.256,143.723 281.879 C 143.105 281.568,142.043 281.209,141.361 281.079 C 133.503 279.589,127.662 266.944,131.221 259.128 C 132.689 255.904,134.153 254.017,136.600 252.196 C 137.480 251.541,138.295 250.878,138.410 250.724 C 139.877 248.765,149.974 247.101,152.426 248.414 M125.013 253.382 C 126.062 254.756,126.064 254.775,125.446 256.902 C 124.376 260.581,120.861 261.347,118.949 258.319 L 117.923 256.694 118.999 254.568 C 120.194 252.205,120.370 252.077,122.480 252.032 C 123.715 252.005,124.133 252.228,125.013 253.382 M297.506 255.895 C 297.421 256.283,297.518 257.104,297.722 257.719 C 299.344 262.626,296.941 270.416,291.918 276.534 C 290.864 277.818,289.866 279.103,289.701 279.390 C 288.069 282.219,280.798 283.295,276.800 281.298 C 275.545 280.672,274.125 280.255,273.493 280.327 C 272.290 280.465,272.376 281.200,273.595 281.200 C 274.006 281.200,274.612 281.469,274.941 281.798 C 276.751 283.608,285.293 283.876,287.762 282.200 C 288.572 281.650,289.403 281.200,289.609 281.200 C 289.814 281.200,290.301 280.705,290.691 280.100 C 291.429 278.956,292.369 277.779,293.900 276.081 C 294.395 275.532,294.800 274.879,294.800 274.630 C 294.800 274.382,295.155 273.874,295.589 273.502 C 296.023 273.131,296.503 272.326,296.655 271.713 C 296.807 271.101,297.255 270.150,297.651 269.600 C 298.690 268.156,299.361 261.016,298.750 257.908 C 298.275 255.492,297.773 254.679,297.506 255.895 M116.400 257.653 C 116.400 259.534,112.530 262.023,111.720 260.663 C 111.544 260.368,110.897 259.802,110.282 259.405 C 108.479 258.242,109.026 257.437,111.804 257.167 C 116.389 256.722,116.400 256.723,116.400 257.653 M139.170 259.832 C 137.887 261.197,137.670 270.182,138.888 271.472 C 141.900 274.659,142.579 275.297,143.337 275.652 C 143.812 275.874,144.830 276.403,145.600 276.827 C 146.370 277.252,147.754 277.599,148.676 277.599 C 149.598 277.600,150.464 277.780,150.600 278.000 C 150.736 278.220,151.366 278.400,152.000 278.400 C 152.634 278.400,153.264 278.220,153.400 278.000 C 153.536 277.780,154.089 277.600,154.629 277.600 C 155.201 277.600,156.161 277.057,156.926 276.300 C 157.649 275.585,157.858 275.317,157.391 275.704 C 156.923 276.091,156.423 276.290,156.280 276.147 C 156.137 276.003,155.750 276.110,155.420 276.383 C 153.429 278.036,144.876 276.016,142.048 273.226 C 138.318 269.545,137.410 261.369,140.596 260.146 C 141.138 259.938,140.995 258.800,140.427 258.800 C 140.269 258.800,139.703 259.265,139.170 259.832 M185.097 268.850 C 184.714 269.064,184.400 269.430,184.400 269.662 C 184.400 269.894,183.950 270.619,183.400 271.273 C 182.850 271.927,182.404 272.673,182.409 272.931 C 182.414 273.189,182.748 272.971,183.152 272.446 C 183.696 271.737,183.967 271.622,184.200 272.000 C 184.408 272.337,184.763 271.856,185.248 270.578 C 186.075 268.400,186.066 268.307,185.097 268.850 M160.223 270.300 C 160.077 271.125,159.868 272.160,159.760 272.600 L 159.562 273.400 160.055 272.600 C 160.326 272.160,160.785 271.562,161.074 271.271 C 161.661 270.681,161.711 270.356,161.357 269.433 C 160.952 268.376,160.503 268.719,160.223 270.300 M315.127 278.669 C 314.960 280.076,314.249 280.265,313.696 279.050 C 313.196 277.955,313.391 277.600,314.493 277.600 C 315.082 277.600,315.225 277.841,315.127 278.669 M237.200 284.149 C 237.200 284.456,237.695 285.027,238.300 285.417 C 238.905 285.807,239.544 286.368,239.720 286.663 C 240.030 287.184,241.200 287.430,241.200 286.974 C 241.200 286.787,240.458 285.219,240.225 284.913 C 239.778 284.325,237.200 283.674,237.200 284.149 M125.372 285.645 C 125.001 286.246,123.601 286.062,123.838 285.444 C 123.961 285.124,124.378 284.974,124.821 285.090 C 125.245 285.200,125.492 285.450,125.372 285.645 M307.206 288.422 C 307.446 289.314,307.993 290.344,308.421 290.711 C 309.215 291.391,309.515 293.600,308.814 293.600 C 308.602 293.600,308.235 293.240,308.000 292.800 C 307.631 292.111,307.162 292.000,304.610 292.000 C 301.093 292.000,300.627 291.572,302.713 290.255 C 303.561 289.719,304.783 288.723,305.427 288.041 C 306.859 286.523,306.684 286.485,307.206 288.422 M246.800 292.195 C 246.800 292.592,247.188 292.800,247.928 292.800 C 249.215 292.800,251.600 294.707,251.600 295.736 C 251.600 296.101,251.870 296.400,252.200 296.400 C 253.277 296.400,252.762 294.853,251.093 293.074 C 249.989 291.898,246.800 291.245,246.800 292.195 M257.200 297.948 C 255.925 298.208,255.880 298.261,256.700 298.544 C 257.195 298.714,257.600 299.058,257.600 299.307 C 257.600 299.629,257.738 299.622,258.080 299.280 C 259.325 298.035,263.602 299.593,263.940 301.414 C 264.136 302.472,264.770 303.200,265.492 303.200 C 266.498 303.200,265.711 301.160,264.062 299.491 C 262.446 297.856,260.164 297.343,257.200 297.948 M270.751 302.301 C 270.448 302.733,269.792 303.214,269.294 303.371 C 268.796 303.529,268.492 303.825,268.618 304.029 C 269.047 304.724,270.403 304.403,271.275 303.400 C 273.544 300.790,280.378 304.323,278.606 307.190 C 278.467 307.416,278.700 307.600,279.125 307.600 C 280.303 307.600,279.580 304.250,278.102 302.859 C 276.582 301.429,271.630 301.053,270.751 302.301 ", stroke: "none", fill: "#fb5866", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path2", d: "M72.700 193.359 C 71.097 194.775,70.693 196.706,71.632 198.459 C 72.031 199.206,72.117 199.218,72.777 198.621 C 73.770 197.722,75.925 197.160,76.734 197.589 C 77.100 197.783,77.692 198.030,78.049 198.139 C 79.259 198.506,79.425 203.166,78.254 203.890 C 78.011 204.041,77.224 204.113,76.506 204.051 C 74.946 203.917,74.600 205.793,75.946 207.084 C 76.356 207.478,76.902 208.205,77.160 208.700 C 77.479 209.314,77.991 209.600,78.771 209.600 C 79.418 209.600,80.014 209.860,80.145 210.200 C 80.303 210.613,80.948 210.800,82.215 210.800 L 84.054 210.800 83.227 209.638 C 82.045 207.978,82.192 206.899,83.800 205.426 C 85.606 203.771,85.744 204.124,81.700 200.035 C 79.775 198.089,77.390 195.493,76.400 194.267 C 74.273 191.634,74.570 191.706,72.700 193.359 M88.400 208.384 C 88.400 209.036,88.150 209.801,87.844 210.084 C 87.045 210.825,87.967 212.466,89.785 213.538 C 90.563 213.997,91.200 214.548,91.200 214.762 C 91.200 214.977,91.875 215.208,92.700 215.276 L 94.200 215.400 94.200 217.418 C 94.200 218.665,94.467 219.843,94.900 220.504 C 95.745 221.793,95.796 224.608,95.000 226.000 C 94.147 227.493,94.273 228.281,95.410 228.567 C 95.966 228.706,96.755 229.131,97.163 229.510 C 97.572 229.890,98.665 230.830,99.593 231.600 C 105.120 236.185,107.734 239.039,107.767 240.526 C 107.785 241.330,107.980 242.057,108.200 242.140 C 108.988 242.438,114.631 241.679,116.200 241.063 C 117.080 240.718,118.201 240.427,118.691 240.418 C 119.475 240.402,123.122 238.924,124.800 237.941 C 125.130 237.748,126.126 237.255,127.014 236.846 C 129.094 235.888,132.487 232.420,133.156 230.571 C 134.953 225.600,130.446 222.311,120.298 221.188 C 118.152 220.950,115.379 220.406,114.136 219.978 C 112.892 219.550,111.588 219.197,111.237 219.194 C 110.887 219.191,110.150 218.955,109.600 218.669 C 108.775 218.240,108.366 218.245,107.259 218.697 C 105.108 219.576,104.200 219.254,104.200 217.614 C 104.200 215.342,98.565 212.597,97.600 214.400 C 96.870 215.764,94.917 215.472,94.253 213.900 C 93.938 213.153,93.852 212.438,94.052 212.220 C 94.857 211.341,94.280 210.388,92.005 208.835 C 89.108 206.858,88.400 206.770,88.400 208.384 M323.606 231.989 C 323.150 232.842,323.071 234.138,323.453 234.519 C 324.015 235.082,325.200 233.935,325.200 232.829 C 325.200 231.447,324.183 230.911,323.606 231.989 M320.875 237.400 C 320.212 238.162,319.616 238.400,318.367 238.400 C 317.161 238.400,316.540 238.632,316.015 239.281 C 315.623 239.765,314.705 240.363,313.975 240.608 C 311.533 241.431,311.488 244.400,313.917 244.400 C 314.478 244.400,315.255 244.688,315.644 245.039 C 316.551 245.861,319.010 244.153,319.864 242.107 C 320.165 241.388,320.576 240.800,320.778 240.800 C 320.981 240.800,321.271 240.395,321.423 239.900 C 321.575 239.405,322.031 238.684,322.436 238.297 C 323.201 237.567,323.074 236.400,322.229 236.400 C 321.963 236.400,321.353 236.850,320.875 237.400 M257.510 239.074 C 254.089 239.971,252.215 254.545,255.008 258.532 C 255.333 258.997,255.600 259.623,255.600 259.922 C 255.600 260.438,257.709 265.675,258.315 266.664 C 259.001 267.783,262.148 272.219,262.385 272.400 C 262.529 272.510,262.906 272.980,263.223 273.446 C 264.000 274.584,269.176 278.800,269.797 278.800 C 270.069 278.800,270.750 279.160,271.309 279.600 C 271.869 280.040,272.838 280.395,273.463 280.388 L 274.600 280.376 272.894 278.888 C 271.955 278.070,271.190 277.258,271.194 277.084 C 271.197 276.910,270.836 276.276,270.392 275.675 C 268.216 272.732,267.617 265.983,269.235 262.634 C 270.069 260.907,269.634 258.326,268.123 256.032 C 267.225 254.668,266.965 243.622,267.792 241.924 C 268.907 239.631,262.332 237.809,257.510 239.074 M284.000 246.407 C 281.491 246.711,279.051 247.966,277.999 249.491 C 276.087 252.264,277.895 260.034,280.127 258.637 C 280.724 258.263,283.023 258.020,287.400 257.868 C 297.344 257.523,298.632 256.862,296.607 253.141 C 293.841 248.060,289.496 245.739,284.000 246.407 M147.084 254.279 C 145.036 254.811,140.800 257.946,140.800 258.930 C 140.800 259.279,141.367 259.617,142.220 259.777 C 146.680 260.614,153.941 266.690,154.014 269.647 C 154.021 269.951,154.375 270.920,154.800 271.800 C 155.225 272.680,155.579 273.966,155.586 274.657 C 155.621 277.841,159.214 275.188,160.000 271.399 C 161.774 262.853,153.958 252.493,147.084 254.279 M199.200 258.037 C 194.706 258.637,187.756 264.384,185.764 269.149 C 185.157 270.601,185.030 271.284,185.506 270.541 C 185.785 270.105,186.811 269.854,187.900 269.954 C 188.911 270.047,188.489 272.631,187.381 273.136 C 185.944 273.790,185.676 273.733,184.664 272.556 L 183.766 271.512 181.866 274.342 C 180.822 275.899,179.795 277.280,179.584 277.410 C 178.987 277.779,179.132 278.800,179.781 278.800 C 181.104 278.800,182.325 279.726,182.562 280.908 C 183.074 283.470,178.574 285.698,177.527 283.400 C 177.002 282.248,175.695 282.070,175.320 283.100 C 175.180 283.485,174.566 284.379,173.956 285.088 C 173.047 286.142,172.888 286.630,173.074 287.781 C 173.573 290.852,169.569 294.609,167.744 292.784 C 167.168 292.208,163.264 294.878,162.273 296.528 C 161.852 297.227,161.470 297.844,161.423 297.897 C 160.994 298.392,157.036 298.708,156.176 298.316 C 155.348 297.939,154.945 297.978,154.017 298.526 C 153.324 298.936,152.023 299.200,150.700 299.200 C 149.032 299.200,148.355 299.387,147.800 300.000 C 147.392 300.451,146.535 300.814,145.838 300.832 C 145.157 300.849,144.825 300.954,145.100 301.065 C 145.375 301.176,145.600 301.689,145.600 302.206 C 145.600 303.055,145.899 303.208,148.700 303.799 C 150.405 304.158,153.106 304.744,154.703 305.100 C 158.242 305.890,162.213 305.185,170.000 302.386 C 172.864 301.356,178.881 298.181,180.392 296.901 C 180.726 296.618,182.620 295.061,184.600 293.442 C 186.580 291.823,189.180 289.531,190.377 288.349 C 191.574 287.167,193.644 285.356,194.977 284.324 C 196.310 283.291,197.729 282.153,198.131 281.793 C 198.532 281.433,199.702 280.907,200.731 280.624 C 201.759 280.341,203.439 279.872,204.464 279.581 C 206.523 278.998,215.038 280.641,216.007 281.809 C 216.254 282.106,217.026 282.474,217.724 282.627 C 218.421 282.780,219.534 283.305,220.196 283.794 C 220.858 284.282,221.715 284.793,222.100 284.928 C 222.485 285.064,222.800 285.347,222.800 285.556 C 222.800 285.766,223.408 286.139,224.152 286.384 C 224.895 286.629,225.823 287.183,226.214 287.615 C 226.604 288.047,227.138 288.400,227.399 288.400 C 227.660 288.400,228.307 288.772,228.837 289.228 C 229.906 290.147,234.229 293.043,236.030 294.047 C 236.668 294.403,237.418 294.880,237.695 295.108 C 238.678 295.914,250.827 301.942,251.977 302.195 C 252.619 302.336,253.359 302.710,253.621 303.026 C 254.793 304.438,257.888 303.612,256.926 302.144 C 256.349 301.262,256.351 301.117,256.947 300.458 C 257.882 299.425,257.761 298.964,256.410 298.404 C 255.756 298.133,254.828 297.571,254.349 297.156 C 253.213 296.171,252.201 296.199,251.154 297.246 C 250.479 297.921,249.984 298.050,248.721 297.880 C 246.619 297.598,246.600 297.567,246.600 294.343 L 246.600 291.554 244.400 289.734 C 243.190 288.733,242.140 287.754,242.067 287.557 C 241.802 286.847,240.524 287.222,240.024 288.156 C 239.557 289.029,238.075 290.000,237.212 290.000 C 234.388 290.000,234.043 285.267,236.863 285.213 C 238.246 285.186,237.015 283.518,232.499 279.303 C 229.963 276.936,227.599 274.721,227.245 274.381 C 225.535 272.737,219.624 267.353,219.142 267.000 C 218.842 266.780,217.248 265.520,215.599 264.200 C 212.611 261.808,208.024 259.200,206.803 259.200 C 206.449 259.200,205.945 258.985,205.681 258.721 C 205.064 258.104,201.511 257.729,199.200 258.037 M136.686 297.048 C 136.331 297.403,137.426 298.400,138.171 298.400 C 138.517 298.400,138.800 298.580,138.800 298.800 C 138.800 299.020,138.980 299.200,139.200 299.200 C 139.420 299.200,139.600 298.930,139.600 298.600 C 139.600 298.270,139.352 298.000,139.049 298.000 C 138.746 298.000,138.274 297.730,138.000 297.400 C 137.466 296.756,137.081 296.653,136.686 297.048 M263.828 303.813 C 262.996 305.083,263.031 306.683,263.900 307.140 C 265.025 307.732,268.545 308.051,269.200 307.621 C 270.137 307.007,269.989 304.487,269.000 304.223 C 268.560 304.105,267.358 303.749,266.328 303.432 C 264.499 302.868,264.441 302.877,263.828 303.813 M278.031 308.162 C 277.224 309.135,277.739 309.371,281.033 309.538 C 283.925 309.684,285.709 309.143,284.917 308.361 C 284.183 307.636,278.602 307.475,278.031 308.162 ", stroke: "none", fill: "#fa9538", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path3", d: "M234.096 153.511 C 233.379 154.110,232.794 154.804,232.796 155.054 C 232.798 155.304,232.502 156.432,232.137 157.560 C 231.523 159.462,231.522 159.767,232.126 161.706 C 232.484 162.858,232.868 164.250,232.978 164.800 C 233.481 167.315,236.068 169.200,239.015 169.200 L 241.722 169.200 243.803 167.100 C 250.317 160.529,241.115 147.646,234.096 153.511 M183.400 161.080 C 177.357 164.195,176.883 171.219,182.402 175.863 C 183.556 176.834,184.158 177.013,186.710 177.142 L 189.677 177.291 192.075 174.787 L 194.473 172.282 194.331 168.641 C 194.192 165.087,192.800 161.675,191.463 161.615 C 191.278 161.607,190.669 161.240,190.109 160.800 C 188.664 159.663,185.926 159.778,183.400 161.080 M236.331 161.575 C 236.832 163.012,236.017 164.044,235.029 163.224 C 234.432 162.729,234.903 160.400,235.600 160.400 C 235.777 160.400,236.106 160.929,236.331 161.575 M184.629 170.131 C 184.965 171.008,184.095 172.811,183.454 172.565 C 182.877 172.344,182.315 170.460,182.660 169.902 C 182.972 169.397,184.412 169.565,184.629 170.131 M223.154 176.339 C 221.673 177.486,220.319 177.662,213.117 177.643 C 205.283 177.622,205.204 177.662,205.975 181.259 C 206.907 185.603,210.068 189.410,213.291 190.071 C 215.701 190.566,218.800 189.970,218.800 189.012 C 218.800 188.705,219.133 188.348,219.539 188.219 C 219.946 188.090,220.482 187.538,220.731 186.992 C 220.979 186.447,221.457 186.000,221.791 186.000 C 222.126 186.000,222.400 185.665,222.400 185.256 C 222.400 184.847,222.811 183.902,223.312 183.156 C 223.814 182.410,224.445 181.056,224.714 180.147 C 224.983 179.239,225.473 178.272,225.802 177.998 C 227.833 176.313,225.265 174.704,223.154 176.339 M0.893 192.400 C 0.893 193.170,0.975 193.485,1.076 193.100 C 1.176 192.715,1.176 192.085,1.076 191.700 C 0.975 191.315,0.893 191.630,0.893 192.400 ", stroke: "none", fill: "#341920", "fill-rule": "evenodd" }),
            React__default['default'].createElement("path", { id: "path4", d: "M186.800 25.623 C 185.590 25.790,181.900 26.224,178.600 26.587 C 175.300 26.950,171.108 27.596,169.285 28.023 C 167.462 28.451,165.386 28.800,164.672 28.800 C 163.959 28.800,162.390 29.072,161.187 29.405 C 159.984 29.738,157.740 30.279,156.200 30.608 C 154.660 30.937,152.950 31.451,152.400 31.751 C 151.850 32.051,150.680 32.426,149.800 32.585 C 148.920 32.743,147.283 33.306,146.161 33.836 C 145.040 34.366,143.865 34.800,143.550 34.800 C 143.236 34.800,142.606 35.060,142.152 35.378 C 141.698 35.696,140.443 36.171,139.363 36.432 C 138.284 36.694,136.839 37.243,136.153 37.654 C 135.467 38.064,134.572 38.400,134.164 38.400 C 133.551 38.400,125.695 41.992,123.600 43.230 C 123.270 43.425,121.380 44.405,119.400 45.407 C 113.877 48.204,108.887 50.953,108.336 51.504 C 108.063 51.777,107.628 52.000,107.369 52.000 C 107.110 52.000,106.665 52.281,106.379 52.625 C 106.094 52.968,104.857 53.909,103.630 54.716 C 98.857 57.854,94.097 61.300,92.685 62.639 C 92.198 63.100,89.919 64.990,87.621 66.839 C 83.088 70.485,83.238 70.354,79.741 73.665 C 74.114 78.992,64.117 90.426,60.388 95.800 C 59.625 96.900,58.882 97.890,58.738 98.000 C 58.229 98.389,55.600 102.386,55.600 102.770 C 55.600 102.985,55.375 103.304,55.100 103.480 C 54.559 103.826,52.000 107.459,52.000 107.880 C 52.000 108.021,51.745 108.421,51.433 108.769 C 50.825 109.446,49.859 111.144,47.204 116.200 C 46.280 117.960,45.271 119.684,44.962 120.031 C 44.653 120.379,44.400 120.929,44.400 121.254 C 44.400 121.579,43.968 122.430,43.440 123.146 C 42.912 123.861,42.367 125.048,42.230 125.783 C 42.092 126.518,41.714 127.340,41.389 127.609 C 41.065 127.878,40.800 128.305,40.800 128.559 C 40.800 128.813,40.266 130.096,39.613 131.410 C 38.959 132.725,38.419 134.139,38.413 134.553 C 38.406 134.967,38.064 135.867,37.654 136.553 C 37.243 137.239,36.694 138.684,36.432 139.763 C 36.171 140.843,35.696 142.098,35.378 142.552 C 35.060 143.006,34.800 143.703,34.800 144.101 C 34.800 144.499,34.367 145.854,33.838 147.112 C 33.309 148.370,32.746 150.300,32.586 151.400 C 32.427 152.500,32.029 153.926,31.702 154.569 C 31.375 155.213,30.953 156.967,30.765 158.468 C 30.577 159.968,30.128 161.765,29.769 162.461 C 29.409 163.156,28.971 165.362,28.795 167.362 C 28.619 169.363,28.275 171.515,28.030 172.145 C 26.916 175.014,25.800 188.451,25.800 199.000 C 25.800 208.632,25.946 211.016,27.396 225.000 C 27.510 226.100,27.865 227.720,28.184 228.600 C 28.504 229.480,28.773 231.016,28.782 232.013 C 28.792 233.010,29.084 234.810,29.431 236.013 C 29.778 237.216,30.377 239.640,30.761 241.400 C 31.146 243.160,31.651 244.960,31.884 245.400 C 32.117 245.840,32.425 247.010,32.570 248.000 C 32.715 248.990,33.253 250.970,33.765 252.400 C 35.063 256.021,35.574 257.465,36.458 259.999 C 36.879 261.208,37.602 263.008,38.064 263.999 C 39.224 266.487,40.552 269.428,41.586 271.800 C 42.065 272.900,42.658 274.160,42.902 274.600 C 43.147 275.040,43.595 275.940,43.899 276.600 C 44.202 277.260,44.622 278.070,44.830 278.400 C 45.039 278.730,45.576 279.720,46.023 280.600 C 46.958 282.441,48.638 285.485,49.996 287.800 C 50.512 288.680,51.334 290.137,51.823 291.037 C 52.878 292.983,54.326 295.203,55.971 297.400 C 56.630 298.280,57.465 299.523,57.827 300.162 C 58.543 301.428,58.622 301.536,60.332 303.600 C 60.970 304.370,62.426 306.260,63.568 307.800 C 68.041 313.831,80.620 326.680,88.000 332.757 C 94.357 337.991,94.882 338.409,96.479 339.511 C 97.206 340.013,98.994 341.296,100.453 342.362 C 101.911 343.429,103.261 344.369,103.453 344.451 C 103.644 344.533,105.060 345.427,106.600 346.437 C 110.752 349.162,115.636 352.000,116.173 352.000 C 116.432 352.000,117.255 352.450,118.000 353.000 C 118.745 353.550,119.566 354.000,119.824 354.000 C 120.081 354.000,120.721 354.333,121.246 354.739 C 121.771 355.145,122.740 355.607,123.400 355.764 C 124.060 355.921,126.220 356.835,128.200 357.794 C 133.260 360.246,136.406 361.600,137.039 361.600 C 137.338 361.600,138.531 362.026,139.691 362.547 C 142.365 363.747,145.156 364.705,148.164 365.456 C 149.464 365.780,150.996 366.288,151.569 366.584 C 152.142 366.880,153.508 367.255,154.605 367.416 C 155.702 367.577,157.050 367.891,157.600 368.113 C 158.150 368.335,160.400 368.923,162.600 369.420 C 164.800 369.918,167.320 370.517,168.200 370.753 C 169.080 370.988,170.732 371.185,171.871 371.190 C 173.009 371.196,175.799 371.601,178.071 372.092 C 184.350 373.448,215.566 373.441,221.929 372.082 C 224.201 371.597,226.822 371.200,227.754 371.200 C 228.686 371.200,230.795 370.848,232.439 370.417 C 234.084 369.986,236.736 369.431,238.334 369.183 C 239.932 368.935,241.725 368.479,242.319 368.169 C 242.914 367.859,243.801 367.604,244.291 367.602 C 244.781 367.601,246.311 367.177,247.691 366.660 C 249.071 366.142,250.920 365.589,251.800 365.430 C 252.680 365.271,253.760 364.914,254.200 364.636 C 254.640 364.358,255.865 363.917,256.923 363.654 C 257.981 363.392,259.508 362.822,260.317 362.388 C 261.126 361.955,262.151 361.594,262.594 361.587 C 263.037 361.581,264.300 361.132,265.400 360.591 C 266.500 360.050,267.691 359.606,268.046 359.604 C 268.401 359.602,269.136 359.251,269.678 358.825 C 270.220 358.398,271.137 357.931,271.715 357.786 C 272.294 357.640,272.969 357.278,273.216 356.981 C 273.462 356.684,274.325 356.229,275.132 355.970 C 275.939 355.711,276.870 355.273,277.200 354.997 C 277.530 354.721,278.250 354.360,278.800 354.195 C 279.350 354.030,280.250 353.579,280.800 353.193 C 281.350 352.807,282.430 352.199,283.200 351.842 C 283.970 351.485,285.500 350.665,286.600 350.019 C 287.700 349.373,289.050 348.607,289.600 348.317 C 291.132 347.511,294.118 345.539,294.720 344.937 C 295.015 344.642,295.411 344.400,295.600 344.400 C 295.789 344.400,296.185 344.158,296.480 343.863 C 296.776 343.567,297.734 342.848,298.609 342.266 C 303.380 339.090,305.797 337.245,310.115 333.480 C 312.008 331.830,312.422 331.493,314.400 329.993 C 317.984 327.273,332.828 311.738,334.600 308.852 C 334.820 308.493,335.116 308.110,335.257 308.000 C 335.524 307.793,338.066 304.385,339.676 302.076 C 340.184 301.348,340.836 300.495,341.124 300.181 C 341.972 299.255,344.400 295.549,344.400 295.180 C 344.400 294.993,344.646 294.696,344.946 294.520 C 345.246 294.344,345.807 293.583,346.193 292.829 C 346.578 292.075,347.495 290.603,348.229 289.558 C 348.964 288.513,349.815 287.060,350.121 286.329 C 350.426 285.598,350.974 284.753,351.338 284.451 C 351.702 284.149,352.000 283.599,352.000 283.229 C 352.000 282.858,352.450 281.945,353.000 281.200 C 353.550 280.455,354.000 279.634,354.000 279.376 C 354.000 279.119,354.334 278.479,354.742 277.954 C 355.150 277.429,355.699 276.339,355.962 275.532 C 356.226 274.725,356.697 273.852,357.010 273.592 C 357.323 273.332,357.700 272.463,357.847 271.660 C 357.995 270.857,358.450 269.771,358.858 269.246 C 359.266 268.721,359.600 268.040,359.600 267.733 C 359.600 267.425,360.050 266.285,360.600 265.200 C 361.150 264.115,361.600 262.903,361.600 262.507 C 361.600 262.112,361.955 261.126,362.388 260.317 C 362.822 259.508,363.388 257.981,363.646 256.923 C 363.904 255.865,364.294 254.772,364.512 254.494 C 364.730 254.216,365.139 253.046,365.421 251.894 C 365.703 250.742,366.309 248.769,366.767 247.510 C 367.225 246.250,367.600 244.667,367.600 243.990 C 367.600 243.314,367.863 242.252,368.184 241.630 C 368.506 241.009,368.963 239.263,369.200 237.750 C 369.437 236.238,369.967 233.740,370.378 232.200 C 370.788 230.660,371.230 227.870,371.359 226.000 C 371.489 224.130,371.865 221.340,372.197 219.800 C 373.776 212.457,373.788 184.472,372.215 177.092 C 371.898 175.602,371.440 172.583,371.198 170.382 C 370.956 168.181,370.516 165.695,370.220 164.856 C 369.924 164.018,369.479 162.025,369.231 160.428 C 368.984 158.830,368.536 157.045,368.237 156.462 C 367.938 155.878,367.562 154.410,367.400 153.200 C 367.238 151.990,366.857 150.514,366.553 149.920 C 366.249 149.326,365.744 147.741,365.430 146.397 C 365.117 145.054,364.689 143.740,364.478 143.477 C 364.268 143.215,363.807 141.990,363.453 140.755 C 363.099 139.520,362.539 137.990,362.207 137.355 C 361.876 136.720,361.604 135.964,361.602 135.675 C 361.599 134.874,357.944 126.932,356.782 125.200 C 356.413 124.650,355.896 123.537,355.633 122.726 C 355.370 121.915,355.024 121.195,354.864 121.126 C 354.704 121.057,353.888 119.650,353.052 118.000 C 352.216 116.350,350.924 114.010,350.180 112.800 C 349.437 111.590,348.654 110.214,348.440 109.741 C 348.226 109.269,347.230 107.683,346.226 106.216 C 345.222 104.749,344.400 103.403,344.400 103.224 C 344.400 103.045,344.112 102.659,343.761 102.367 C 343.409 102.075,342.347 100.650,341.400 99.200 C 340.453 97.750,339.391 96.325,339.039 96.033 C 338.688 95.741,338.400 95.328,338.400 95.114 C 338.400 93.883,326.068 79.537,320.631 74.444 C 319.548 73.430,318.372 72.330,318.017 72.000 C 317.662 71.670,316.208 70.420,314.786 69.222 C 313.364 68.024,311.930 66.750,311.600 66.390 C 311.270 66.031,310.105 65.031,309.012 64.169 C 307.918 63.306,306.748 62.383,306.412 62.117 C 306.075 61.851,305.080 61.088,304.200 60.422 C 303.320 59.755,302.356 59.002,302.057 58.749 C 301.322 58.125,297.559 55.600,297.364 55.600 C 297.279 55.600,296.170 54.835,294.901 53.900 C 291.497 51.392,288.247 49.486,280.800 45.627 C 279.370 44.886,277.750 44.027,277.200 43.718 C 276.650 43.409,275.570 42.892,274.800 42.568 C 274.030 42.245,273.130 41.801,272.800 41.582 C 272.470 41.363,271.570 40.904,270.800 40.562 C 270.030 40.219,268.668 39.593,267.774 39.170 C 266.879 38.746,265.910 38.400,265.621 38.400 C 265.331 38.400,264.533 38.059,263.847 37.642 C 263.161 37.226,261.790 36.758,260.800 36.604 C 259.810 36.450,258.437 36.000,257.749 35.605 C 257.062 35.209,255.892 34.754,255.149 34.594 C 254.407 34.435,253.301 34.048,252.690 33.736 C 252.080 33.424,250.550 32.982,249.290 32.754 C 248.031 32.526,246.615 32.091,246.144 31.789 C 245.673 31.487,244.323 31.115,243.144 30.962 C 241.965 30.810,239.689 30.261,238.088 29.743 C 236.486 29.224,234.416 28.792,233.488 28.782 C 232.559 28.773,231.080 28.500,230.200 28.177 C 229.320 27.854,225.810 27.317,222.400 26.984 C 218.990 26.652,214.903 26.114,213.317 25.790 C 210.190 25.150,191.078 25.030,186.800 25.623 M192.790 79.232 C 193.775 79.459,195.755 79.805,197.190 80.000 C 202.186 80.681,204.723 81.208,205.858 81.800 C 206.486 82.127,207.450 82.398,208.000 82.401 C 208.550 82.405,209.963 82.856,211.140 83.404 C 212.317 83.952,213.499 84.400,213.768 84.400 C 214.866 84.400,225.869 90.333,228.268 92.219 C 229.111 92.881,230.250 93.716,230.800 94.074 C 233.169 95.614,240.800 104.100,240.800 105.194 C 240.800 105.417,240.976 105.600,241.192 105.600 C 241.407 105.600,241.959 106.275,242.418 107.100 C 242.878 107.925,243.685 109.320,244.213 110.200 C 245.643 112.585,248.400 118.220,248.400 118.760 C 248.400 119.020,248.755 119.928,249.189 120.779 C 249.624 121.630,250.097 123.108,250.242 124.063 C 250.387 125.018,250.818 126.520,251.201 127.400 C 251.583 128.280,252.010 130.444,252.150 132.209 C 252.289 133.974,252.570 135.997,252.773 136.705 C 254.134 141.450,254.291 156.251,253.036 161.416 C 252.713 162.744,252.325 165.264,252.173 167.016 C 252.021 168.767,251.654 170.799,251.356 171.531 C 251.058 172.263,250.629 174.359,250.401 176.189 C 250.174 178.018,249.792 180.077,249.552 180.765 C 249.100 182.062,250.550 184.800,251.689 184.800 C 251.935 184.800,252.421 185.056,252.769 185.370 C 253.116 185.683,254.480 186.202,255.800 186.523 C 257.120 186.843,259.350 187.414,260.755 187.790 C 272.889 191.040,284.224 185.092,284.100 175.539 C 284.046 171.361,280.862 164.047,279.081 164.007 C 278.905 164.003,278.016 163.640,277.106 163.200 C 275.051 162.208,274.724 162.208,271.765 163.207 C 265.819 165.215,267.323 170.447,274.930 174.217 C 279.741 176.601,280.346 179.914,276.200 181.171 C 275.540 181.372,274.430 181.764,273.733 182.043 C 272.662 182.472,272.227 182.449,270.933 181.897 C 270.090 181.537,268.770 181.120,268.000 180.970 C 267.230 180.821,266.009 180.181,265.286 179.549 C 264.563 178.917,263.713 178.400,263.396 178.400 C 262.487 178.400,261.533 176.165,261.811 174.685 C 262.289 172.134,260.696 170.264,259.263 171.697 C 258.122 172.838,257.608 169.979,258.562 167.800 C 259.145 166.467,258.683 165.049,257.099 163.316 L 256.291 162.432 257.246 162.049 C 257.770 161.838,258.505 161.570,258.878 161.454 C 259.288 161.326,259.657 160.641,259.813 159.721 C 260.252 157.122,260.402 156.863,261.622 156.595 C 263.197 156.249,264.000 155.386,264.000 154.038 C 264.000 152.541,264.364 152.284,265.465 153.006 C 266.565 153.726,269.316 152.325,269.801 150.796 C 270.064 149.968,270.076 149.969,271.804 150.981 C 274.261 152.421,276.861 151.856,277.639 149.713 C 277.835 149.174,278.011 149.390,278.358 150.600 C 279.183 153.468,283.708 155.138,284.897 153.013 C 285.530 151.882,286.000 152.385,286.000 154.194 C 286.000 156.761,288.129 158.222,291.381 157.887 C 294.033 157.613,295.155 158.401,293.730 159.538 C 291.301 161.476,292.733 164.995,296.267 165.771 C 298.108 166.175,298.846 168.074,297.655 169.341 C 296.504 170.566,296.575 171.208,298.042 172.828 C 300.709 175.773,300.862 176.746,298.764 177.411 C 297.526 177.804,297.677 181.558,298.981 182.782 L 299.962 183.704 299.003 184.952 C 298.475 185.638,297.134 186.916,296.022 187.792 C 293.713 189.610,293.599 190.035,295.032 191.468 C 296.222 192.659,299.095 192.581,300.487 191.321 C 301.187 190.688,301.306 190.690,302.432 191.355 C 304.885 192.804,305.827 193.195,306.874 193.198 C 308.425 193.201,310.000 192.514,310.000 191.834 C 310.000 191.072,310.568 190.736,311.349 191.036 C 311.905 191.249,311.906 191.371,311.367 192.195 C 309.526 195.005,313.892 198.572,316.810 196.641 C 318.394 195.592,318.507 195.573,319.236 196.233 C 320.257 197.157,320.202 197.460,318.900 198.081 C 317.164 198.909,317.116 201.522,318.810 202.947 C 320.219 204.133,321.513 204.273,323.166 203.417 C 324.219 202.873,324.353 202.898,325.197 203.797 C 326.179 204.842,326.062 205.853,324.909 206.282 C 320.962 207.751,319.903 211.183,322.574 213.854 C 324.045 215.325,325.104 215.383,327.082 214.102 C 328.312 213.306,328.801 213.769,328.794 215.724 C 328.786 217.955,328.354 218.576,327.039 218.246 C 324.660 217.649,321.600 220.566,321.600 223.431 C 321.600 225.597,322.624 226.800,324.469 226.800 C 327.042 226.800,327.680 229.037,325.851 231.648 C 325.493 232.160,325.200 232.889,325.200 233.270 C 325.200 235.748,323.787 236.582,323.212 234.444 C 322.803 232.924,321.429 231.600,320.263 231.600 C 318.782 231.600,315.657 235.383,315.949 236.821 C 316.336 238.725,319.397 239.099,320.856 237.421 C 321.345 236.860,321.967 236.400,322.239 236.400 C 323.352 236.400,323.063 238.194,321.737 239.520 C 321.442 239.816,321.200 240.345,321.200 240.697 C 321.200 241.314,316.999 245.600,316.395 245.600 C 316.231 245.600,315.874 245.330,315.600 245.000 C 314.295 243.427,310.000 245.704,310.000 247.969 C 310.000 249.035,311.930 252.000,312.625 252.000 C 312.910 252.000,313.437 252.294,313.796 252.653 C 314.305 253.162,314.651 253.214,315.361 252.890 C 316.410 252.412,316.887 252.633,317.559 253.908 C 318.153 255.037,317.923 255.434,316.508 255.723 C 312.017 256.643,313.224 265.200,317.845 265.200 C 319.280 265.200,319.827 266.028,319.184 267.229 C 318.920 267.724,318.348 268.000,317.588 268.000 C 313.872 268.000,312.812 274.379,316.072 277.122 C 318.367 279.053,317.605 280.553,314.193 280.819 C 310.725 281.090,310.592 281.172,309.326 283.848 C 308.060 286.519,308.211 288.742,309.768 290.367 C 312.187 292.892,309.976 295.848,307.200 293.800 C 302.767 290.530,295.893 297.413,298.946 302.064 L 299.645 303.128 297.434 304.595 C 294.752 306.375,293.900 306.230,292.758 303.799 C 291.424 300.962,286.663 300.731,284.624 303.404 C 283.388 305.024,283.393 304.920,284.456 307.116 C 285.561 309.398,285.186 309.669,281.132 309.514 C 277.572 309.378,277.303 309.225,278.203 307.851 C 279.706 305.557,277.137 302.395,273.778 302.404 C 271.693 302.410,269.421 304.546,269.818 306.128 C 270.175 307.551,268.987 308.102,266.300 307.761 C 263.165 307.362,262.340 306.085,263.789 303.873 C 265.895 300.659,260.138 297.142,257.417 299.982 C 256.339 301.108,256.315 301.211,256.921 302.136 C 257.888 303.611,254.798 304.443,253.621 303.026 C 253.359 302.710,252.619 302.336,251.977 302.195 C 250.827 301.942,238.678 295.914,237.695 295.108 C 237.418 294.880,236.668 294.403,236.030 294.047 C 234.229 293.043,229.906 290.147,228.837 289.228 C 228.307 288.772,227.660 288.400,227.399 288.400 C 227.138 288.400,226.604 288.047,226.214 287.615 C 225.823 287.183,224.911 286.635,224.187 286.396 C 223.463 286.157,222.770 285.700,222.648 285.381 C 222.525 285.061,222.211 284.800,221.950 284.800 C 221.689 284.800,220.917 284.374,220.234 283.853 C 219.551 283.332,218.421 282.780,217.724 282.627 C 217.026 282.474,216.254 282.106,216.007 281.809 C 215.038 280.641,206.523 278.998,204.464 279.581 C 203.439 279.872,201.759 280.341,200.731 280.624 C 199.702 280.907,198.532 281.433,198.131 281.793 C 197.729 282.153,196.310 283.291,194.977 284.324 C 193.644 285.356,191.574 287.167,190.377 288.349 C 189.180 289.531,186.580 291.823,184.600 293.442 C 182.620 295.061,180.726 296.618,180.392 296.901 C 178.881 298.181,172.864 301.356,170.000 302.386 C 162.213 305.185,158.242 305.890,154.703 305.100 C 153.106 304.744,150.405 304.158,148.700 303.799 C 145.899 303.208,145.600 303.055,145.600 302.206 C 145.600 301.689,145.375 301.176,145.100 301.065 C 144.825 300.954,145.154 300.849,145.830 300.832 C 147.778 300.782,148.884 299.337,148.377 297.502 C 147.050 292.697,139.600 293.445,139.600 298.384 C 139.600 298.833,139.420 299.200,139.200 299.200 C 138.980 299.200,138.800 299.020,138.800 298.800 C 138.800 298.580,138.462 298.400,138.049 298.400 C 137.636 298.400,137.063 298.117,136.776 297.771 C 136.489 297.425,135.566 296.791,134.727 296.363 C 133.121 295.543,132.804 294.927,133.792 294.548 C 134.721 294.191,136.194 291.516,136.053 290.440 C 135.572 286.774,129.376 283.860,127.036 286.200 C 125.617 287.619,123.729 287.571,123.148 286.100 C 122.909 285.495,122.576 284.724,122.408 284.387 C 122.166 283.902,122.581 283.633,124.402 283.097 C 126.889 282.364,127.184 281.944,127.195 279.126 C 127.209 275.127,123.491 272.127,121.148 274.247 C 120.102 275.193,118.575 274.677,118.062 273.205 C 117.569 271.793,117.970 271.464,120.738 271.005 C 124.161 270.438,124.835 264.860,121.660 263.367 C 120.857 262.989,119.673 262.169,119.028 261.544 C 117.304 259.873,116.455 259.727,115.449 260.931 C 113.761 262.952,109.077 263.513,109.450 261.649 C 109.712 260.338,109.185 259.824,107.973 260.209 C 107.206 260.452,107.194 260.531,107.777 261.420 C 108.119 261.944,108.400 262.454,108.400 262.555 C 108.400 263.075,104.456 263.803,102.516 263.641 C 102.250 263.618,101.821 262.896,101.564 262.037 C 100.936 259.942,98.000 259.261,98.000 261.210 C 98.000 261.609,97.363 262.328,96.585 262.810 C 94.821 263.899,92.800 263.352,92.800 261.784 C 92.800 258.895,89.996 257.325,88.612 259.438 C 87.342 261.376,83.798 260.085,84.219 257.838 C 84.703 255.262,80.344 253.016,78.480 254.880 C 77.627 255.733,77.067 254.581,76.937 251.710 C 76.792 248.482,75.391 246.831,72.780 246.811 C 70.822 246.796,70.400 246.210,70.400 243.507 C 70.400 241.830,70.236 241.112,69.815 240.950 C 69.494 240.827,69.112 240.338,68.966 239.863 C 68.821 239.388,68.509 238.760,68.274 238.466 C 68.038 238.172,67.835 236.526,67.823 234.808 C 67.805 232.320,67.645 231.514,67.038 230.842 C 66.327 230.056,66.320 229.951,66.938 229.269 C 67.797 228.319,67.841 225.267,67.000 224.945 C 66.024 224.570,66.314 223.683,67.500 223.416 C 68.728 223.139,71.078 220.219,70.406 219.804 C 69.248 219.088,69.989 217.600,71.504 217.600 C 73.353 217.600,75.005 216.211,75.412 214.317 C 75.815 212.434,75.938 212.338,76.815 213.215 C 77.789 214.189,79.669 214.232,80.500 213.300 C 81.518 212.157,80.324 209.600,78.771 209.600 C 77.991 209.600,77.479 209.314,77.160 208.700 C 76.902 208.205,76.356 207.478,75.946 207.084 C 74.600 205.793,74.946 203.917,76.506 204.051 C 77.224 204.113,78.014 204.039,78.260 203.886 C 79.431 203.163,79.255 198.503,78.043 198.136 C 77.689 198.029,77.100 197.783,76.734 197.589 C 75.925 197.160,73.770 197.722,72.777 198.621 C 72.117 199.218,72.031 199.206,71.632 198.459 C 70.630 196.587,71.087 194.800,73.000 193.116 C 75.074 191.291,75.063 191.334,73.982 188.961 C 73.180 187.199,72.495 186.690,70.300 186.220 C 68.826 185.905,68.736 183.880,70.147 182.770 C 72.274 181.097,71.938 175.863,69.642 174.915 C 66.069 173.441,65.780 169.600,69.243 169.600 C 72.083 169.600,74.012 167.159,73.438 164.290 C 73.170 162.952,72.155 161.600,71.418 161.600 C 70.263 161.600,70.063 160.704,70.872 159.152 C 71.787 157.397,72.073 157.292,73.084 158.344 C 76.245 161.628,80.487 156.881,77.892 152.963 C 76.574 150.973,76.717 150.477,78.942 149.327 C 80.207 148.672,81.200 149.270,81.200 150.686 C 81.200 150.980,81.681 151.403,82.269 151.626 C 85.129 152.714,87.747 150.245,86.963 147.200 C 86.443 145.177,86.679 144.672,88.054 144.866 C 88.860 144.980,88.981 145.192,88.870 146.300 C 88.772 147.275,88.898 147.600,89.374 147.600 C 89.723 147.600,90.316 147.960,90.693 148.400 C 92.147 150.098,95.376 148.639,95.673 146.150 C 95.951 143.815,98.400 144.048,98.400 146.409 C 98.400 147.253,98.733 147.717,99.779 148.335 L 101.158 149.148 103.079 148.199 C 105.250 147.127,104.991 146.996,107.285 150.315 C 108.251 151.713,108.597 151.912,110.454 152.132 C 113.062 152.441,113.531 152.869,112.448 153.952 L 111.616 154.784 112.836 156.592 C 113.873 158.128,114.256 158.400,115.386 158.400 C 117.125 158.400,117.188 158.150,116.870 152.546 C 116.290 142.342,116.842 130.564,118.002 128.395 C 118.222 127.985,118.653 126.513,118.960 125.124 C 120.085 120.039,124.577 110.670,127.968 106.337 C 128.426 105.752,128.800 105.086,128.800 104.857 C 128.800 104.627,129.045 104.296,129.345 104.120 C 129.645 103.944,130.950 102.542,132.245 101.005 C 133.540 99.468,135.140 97.728,135.800 97.138 C 136.460 96.549,137.708 95.412,138.574 94.612 C 139.440 93.811,141.240 92.358,142.574 91.381 C 143.908 90.404,145.285 89.334,145.634 89.003 C 145.982 88.671,146.455 88.400,146.685 88.400 C 146.914 88.400,147.349 88.101,147.651 87.735 C 147.953 87.369,148.920 86.734,149.800 86.323 C 150.680 85.912,151.670 85.407,152.000 85.201 C 153.177 84.467,158.876 82.400,159.730 82.398 C 160.209 82.396,161.090 82.139,161.689 81.827 C 162.288 81.514,164.628 80.866,166.889 80.385 C 169.150 79.904,171.630 79.372,172.400 79.202 C 174.508 78.735,190.740 78.760,192.790 79.232 M97.022 158.765 C 96.897 158.966,96.044 159.257,95.126 159.413 C 93.240 159.731,88.976 163.737,88.539 165.600 C 88.410 166.150,88.011 167.050,87.652 167.600 C 86.559 169.276,86.765 180.060,87.931 182.185 C 88.409 183.056,88.800 184.067,88.800 184.431 C 88.800 184.794,89.127 185.521,89.527 186.046 C 89.927 186.571,90.489 187.585,90.776 188.300 C 91.062 189.015,91.433 189.600,91.600 189.600 C 91.767 189.600,92.136 190.162,92.420 190.849 C 93.022 192.302,100.609 200.000,101.439 200.000 C 101.748 200.000,102.000 200.177,102.000 200.393 C 102.000 200.610,102.887 201.236,103.972 201.786 C 105.056 202.335,106.057 202.968,106.195 203.192 C 106.334 203.417,106.771 203.600,107.168 203.600 C 107.564 203.600,108.551 204.050,109.362 204.600 C 110.172 205.150,111.183 205.600,111.609 205.600 C 112.034 205.600,113.601 206.089,115.091 206.687 C 119.264 208.360,135.664 208.383,139.400 206.720 C 140.720 206.133,142.175 205.548,142.634 205.420 C 146.864 204.243,149.280 198.536,146.784 195.615 C 146.133 194.853,145.590 194.043,145.577 193.815 C 145.549 193.322,141.729 190.800,141.011 190.800 C 140.736 190.800,139.889 190.395,139.128 189.900 C 138.367 189.405,136.701 188.460,135.427 187.800 C 131.649 185.844,125.605 179.340,124.646 176.200 C 123.974 173.998,121.200 173.907,121.200 176.086 C 121.200 176.795,116.738 181.200,116.020 181.200 C 115.714 181.200,115.160 181.474,114.790 181.809 C 112.988 183.440,104.437 184.039,101.730 182.724 C 99.046 181.420,100.477 178.245,104.294 177.034 C 107.660 175.965,108.770 171.191,106.600 167.115 C 106.050 166.082,105.600 165.003,105.600 164.717 C 105.600 162.024,98.186 156.881,97.022 158.765 M116.880 161.680 C 115.356 163.204,117.262 166.701,119.333 166.181 C 121.087 165.741,121.146 163.962,119.471 162.100 C 118.574 161.104,117.612 160.948,116.880 161.680 M235.218 161.778 C 234.806 162.275,234.786 162.546,235.137 162.897 C 235.765 163.525,236.386 162.809,236.036 161.861 C 235.784 161.181,235.719 161.175,235.218 161.778 M183.267 171.220 C 183.752 172.610,183.790 172.605,184.151 171.100 C 184.371 170.183,184.284 170.000,183.628 170.000 C 182.925 170.000,182.887 170.129,183.267 171.220 M289.406 188.942 C 286.786 189.731,286.109 192.800,288.554 192.800 C 291.429 192.800,293.895 190.190,292.194 188.946 C 291.333 188.317,291.480 188.317,289.406 188.942 M282.464 195.046 C 280.916 197.150,280.966 198.554,282.605 198.965 C 284.971 199.559,287.496 196.280,286.557 193.833 C 286.030 192.460,283.904 193.090,282.464 195.046 M295.723 198.386 C 295.021 198.553,293.903 199.147,293.238 199.706 C 292.573 200.266,291.888 200.786,291.715 200.862 C 289.564 201.807,288.776 205.681,290.271 207.964 C 292.310 211.078,297.086 209.510,296.560 205.899 C 296.271 203.912,296.798 203.405,298.552 203.984 C 299.349 204.247,300.000 204.647,300.000 204.873 C 300.000 205.099,300.450 205.819,301.000 206.473 C 303.380 209.302,301.090 217.600,297.929 217.600 C 297.526 217.600,296.525 217.960,295.704 218.400 C 293.828 219.406,291.406 219.423,289.486 218.444 C 288.670 218.028,287.522 217.567,286.936 217.420 C 285.663 217.100,281.200 212.662,281.200 211.716 C 281.200 211.350,280.855 210.680,280.434 210.226 C 279.697 209.431,279.412 208.092,279.540 206.025 L 279.600 205.050 280.744 206.146 L 281.888 207.242 283.118 206.208 C 284.412 205.119,284.212 203.325,282.611 201.660 C 281.946 200.969,280.000 202.116,280.000 203.200 C 280.000 203.757,279.537 203.966,277.828 204.179 C 276.633 204.328,275.441 204.709,275.179 205.025 C 274.917 205.341,274.536 205.600,274.334 205.600 C 271.605 205.600,270.556 211.648,272.750 214.730 C 273.218 215.387,273.600 216.026,273.600 216.151 C 273.600 216.277,274.248 216.969,275.040 217.690 C 275.832 218.410,276.815 219.308,277.224 219.683 C 277.632 220.059,278.649 220.736,279.483 221.188 C 280.318 221.639,281.270 222.171,281.600 222.369 C 282.767 223.070,286.616 224.818,287.800 225.184 C 288.460 225.388,289.720 225.827,290.600 226.160 C 293.072 227.094,302.364 227.044,303.646 226.089 C 304.171 225.699,305.072 225.141,305.649 224.849 C 306.226 224.558,307.085 223.631,307.557 222.790 C 308.030 221.949,308.595 221.202,308.813 221.129 C 309.031 221.056,309.376 219.976,309.579 218.729 C 309.782 217.481,310.230 215.916,310.574 215.250 C 311.344 213.762,311.384 211.126,310.658 209.680 C 310.361 209.086,309.910 207.752,309.656 206.715 C 308.058 200.170,302.411 196.794,295.723 198.386 M83.642 205.560 C 82.222 206.887,82.071 208.149,83.162 209.568 C 83.721 210.295,83.825 210.816,83.581 211.665 C 83.022 213.616,85.578 214.731,87.510 213.378 C 88.324 212.808,88.352 212.667,87.843 211.678 C 87.369 210.758,87.369 210.524,87.844 210.084 C 88.967 209.042,88.537 206.599,87.027 205.447 C 85.309 204.137,85.161 204.142,83.642 205.560 M94.105 212.100 C 93.272 213.159,94.664 215.264,96.104 215.125 C 97.637 214.976,98.513 213.300,97.620 212.224 C 97.001 211.478,94.659 211.395,94.105 212.100 M90.391 215.811 C 89.635 216.722,90.520 217.240,92.600 217.104 C 93.899 217.020,94.200 216.849,94.200 216.200 C 94.200 215.122,91.216 214.817,90.391 215.811 M104.384 217.042 C 103.679 218.896,104.607 219.709,106.567 218.957 C 107.794 218.487,107.228 216.704,105.700 216.227 C 104.964 215.997,104.725 216.146,104.384 217.042 M79.909 223.022 C 75.595 225.268,75.245 231.379,79.225 234.975 C 80.092 235.759,81.027 236.400,81.301 236.400 C 81.576 236.401,82.323 236.851,82.962 237.400 C 83.601 237.950,84.570 238.400,85.115 238.400 C 85.660 238.400,86.667 238.746,87.353 239.169 C 88.050 239.599,90.078 240.139,91.955 240.395 C 93.800 240.647,95.711 241.117,96.203 241.439 C 96.899 241.895,98.278 241.999,102.448 241.912 L 107.800 241.800 107.731 240.400 C 107.662 238.988,104.904 236.005,99.593 231.600 C 98.665 230.830,97.529 229.847,97.069 229.417 C 96.245 228.645,95.321 228.539,91.919 228.831 C 90.143 228.983,88.994 228.099,88.116 225.905 C 86.647 222.237,83.524 221.140,79.909 223.022 M286.000 229.473 C 283.950 230.316,284.501 234.095,286.745 234.588 C 288.540 234.982,289.895 234.445,290.747 233.000 L 291.526 231.679 290.426 230.625 C 289.329 229.574,287.140 229.004,286.000 229.473 M295.654 232.413 C 292.429 234.404,295.747 237.597,299.960 236.556 C 301.266 236.233,301.400 236.071,301.400 234.822 C 301.400 232.443,297.950 230.996,295.654 232.413 M274.800 233.600 C 273.709 234.691,273.796 235.778,275.019 236.336 C 277.226 237.342,279.322 236.646,279.798 234.751 C 280.256 232.924,276.371 232.029,274.800 233.600 M305.160 237.578 C 303.646 239.093,303.794 240.453,305.650 242.061 C 308.763 244.756,312.686 242.387,311.170 238.728 C 310.238 236.478,306.900 235.839,305.160 237.578 M136.329 240.284 C 134.150 240.617,133.369 243.046,135.024 244.347 C 137.512 246.304,140.800 245.129,140.800 242.283 C 140.800 240.209,139.785 239.755,136.329 240.284 M269.200 240.784 C 266.929 241.351,266.682 244.400,268.907 244.400 C 270.578 244.400,271.200 243.793,271.200 242.163 C 271.200 240.751,270.703 240.409,269.200 240.784 M144.577 241.316 C 144.088 242.590,144.565 244.195,145.471 244.324 C 145.950 244.392,146.557 244.707,146.820 245.024 C 147.601 245.966,148.977 245.697,149.922 244.419 L 150.795 243.239 149.874 242.168 C 148.739 240.848,144.988 240.245,144.577 241.316 M127.600 243.972 C 127.600 244.177,127.203 244.402,126.718 244.472 C 124.108 244.850,124.013 249.370,126.600 250.075 C 130.592 251.163,134.373 246.391,131.100 244.396 C 129.758 243.577,127.600 243.316,127.600 243.972 M154.294 246.581 C 153.254 247.341,154.076 249.442,155.525 249.729 C 157.802 250.181,158.226 247.751,156.064 246.633 C 155.189 246.180,154.855 246.171,154.294 246.581 M120.537 252.253 C 120.282 252.357,119.590 253.399,118.999 254.568 L 117.923 256.694 118.949 258.319 C 120.861 261.347,124.376 260.581,125.446 256.902 C 126.453 253.438,123.795 250.920,120.537 252.253 M295.000 257.252 C 294.340 257.463,290.920 257.737,287.400 257.863 C 280.015 258.125,279.712 258.240,278.246 261.339 C 276.783 264.432,274.843 264.901,272.200 262.800 C 270.261 261.259,269.741 261.289,269.032 262.985 C 267.642 266.313,268.349 272.911,270.392 275.675 C 270.836 276.276,271.200 276.949,271.200 277.171 C 271.200 277.763,275.105 280.581,277.278 281.557 C 281.057 283.254,288.190 282.009,289.701 279.390 C 289.866 279.103,290.864 277.818,291.918 276.534 C 296.050 271.501,297.612 267.996,297.894 263.119 C 298.243 257.093,297.870 256.336,295.000 257.252 M140.555 260.175 C 138.436 261.662,138.113 268.094,140.021 270.800 C 142.938 274.936,146.260 276.600,151.600 276.600 L 155.400 276.600 155.523 275.127 C 155.595 274.255,155.310 272.920,154.823 271.849 C 154.370 270.856,154.000 269.830,154.000 269.569 C 154.000 265.805,143.242 258.289,140.555 260.175 M186.557 269.903 C 184.923 270.170,184.229 273.600,185.808 273.600 C 187.309 273.600,188.400 272.665,188.400 271.379 C 188.400 270.024,187.961 269.672,186.557 269.903 M178.431 280.031 C 175.470 282.991,178.406 286.052,181.530 283.262 C 183.073 281.885,182.984 279.994,181.340 279.246 C 179.957 278.615,179.805 278.656,178.431 280.031 M235.558 285.714 C 234.266 286.699,234.287 287.834,235.618 288.954 C 237.235 290.315,238.568 290.152,239.887 288.435 C 241.278 286.623,237.490 284.243,235.558 285.714 M168.658 287.716 C 167.174 288.992,166.645 290.992,167.463 292.239 C 168.982 294.558,173.200 291.752,173.200 288.424 C 173.200 286.566,170.489 286.143,168.658 287.716 M156.987 292.821 C 155.207 293.345,153.883 294.715,154.160 295.747 C 154.286 296.216,154.392 296.823,154.395 297.095 C 154.413 298.790,160.581 298.959,161.845 297.300 C 163.769 294.776,160.520 291.781,156.987 292.821 M246.667 293.067 C 246.338 293.396,246.328 295.490,246.650 296.690 C 247.190 298.707,251.600 298.221,251.600 296.144 C 251.600 294.189,247.871 291.862,246.667 293.067 ", stroke: "none", fill: "#fcbaba", "fill-rule": "evenodd" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$J,
    GroupsIcon: Icon$K,
    HamburgerIcon: Icon$L,
    HamburgerCloseIcon: Icon$M,
    HomeIcon: Icon$N,
    IfoIcon: Icon$O,
    InfoIcon: Icon$P,
    LanguageIcon: Icon$Q,
    LogoIcon: Logo,
    MoonIcon: Icon$R,
    MoreIcon: Icon$S,
    NftIcon: Icon$T,
    PoolIcon: Icon$U,
    SunIcon: Icon$V,
    TelegramIcon: Icon$W,
    TicketIcon: Icon$X,
    TradeIcon: Icon$Y,
    TwitterIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    LayerIcon: Icon$10,
    RoadmapIcon: Icon$11,
    PresaleIcon: Icon$12,
    MediumIcon: Icon$13,
    ReferralIcon: Icon$14,
    OctIcon: Icon$15
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$q, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$M, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$L, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: '/',
    },
    {
        label: 'Trade',
        icon: 'TradeIcon',
        items: [
            {
                label: 'Exchange',
                href: 'https://exchange.octopusdefi.com/',
            },
            {
                label: 'Liquidity',
                href: 'https://exchange.octopusdefi.com/#/pool',
            },
        ],
    },
    {
        label: 'Farms',
        icon: 'FarmIcon',
        href: '/farms',
    },
    {
        label: 'Staking',
        icon: 'PoolIcon',
        href: '/staking',
    },
    // {
    //   label: 'Pools',
    //   icon: 'PoolIcon',
    //   href: '/pools',
    // },
    {
        label: 'Lottery',
        icon: 'TicketIcon',
        href: '/lottery',
    },
    {
        label: 'Presale',
        icon: 'PresaleIcon',
        href: 'https://presale.octopusdefi.com/',
    },
    {
        label: 'Games',
        icon: 'NftIcon',
        items: [
            {
                label: 'The King of The Forest',
                href: '/game',
            },
        ],
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: 'Project Info',
                href: 'https://octopusdefi.com/',
            },
            {
                label: 'Litepaper',
                href: 'http://litepaper.octopusdefi.com/',
            },
            {
                label: 'Donation Vault',
                href: 'https://octopusdefi.com/dov/',
            },
            {
                label: 'Marketing Vault',
                href: '.https://octopusdefi.com/mav/',
            },
        ],
    },
    // {
    //   label: "IFO",
    //   icon: "IfoIcon",
    //   items: [
    //     {
    //       label: "Next",
    //       href: "/ifo",
    //     },
    //     {
    //       label: "History",
    //       href: "/ifo/history",
    //     },
    //   ],
    // },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: 'Github',
                href: 'https://github.com//#',
            },
            {
                label: 'Docs',
                href: 'https://docs.octopusdefi.com/',
            },
            {
                label: 'Medium',
                href: 'https://octopusdefi.medium.com/',
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/octopustokengroup",
            },
            {
                label: "Español",
                href: "https://t.me/Octopusdefispanish",
            },
            {
                label: "русский",
                href: "https://t.me/OctopusDefiRussian",
            },
        ],
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://octopusdefi.medium.com/",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/octopusdefi/",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd; _a.cakePriceTreeUsd; var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang; _a.priceLink; var priceLinkTree = _a.priceLinkTree;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$l, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(Flex, null,
                cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: priceLinkTree, target: "_blank" },
                    React__default['default'].createElement(Icon$w, { width: "24px", mr: "8px" }),
                    React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })),
                React__default['default'].createElement(Dropdown, { position: "top", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                        React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                    // Safari fix
                    style: { minHeight: "32px", height: "auto" } }, lang.language)); })))),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "10px" : 0;
                if (social.items) {
                    return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top-right", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))));
            })),
            React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$16,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$19,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$17,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$18,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1a,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1b,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.octopusdefi.com/", external: true },
            React__default['default'].createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1c = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$1c, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, cakePriceTreeUsd = _a.cakePriceTreeUsd, links = _a.links, priceLink = _a.priceLink, priceLinkTree = _a.priceLinkTree, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, cakePriceTreeUsd: cakePriceTreeUsd, pushNav: setIsPushed, links: links, priceLink: priceLink, priceLinkTree: priceLinkTree }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = styled.createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#bc191d",
    primaryBright: "#bc191d",
    primaryDark: "#bc191d",
    secondary: "#bc191d",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#191326", textDisabled: "#BDC2C4", textSubtle: "#bc191d", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#bc191d", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$c;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.CopyToClipboard = CopyToClipboard;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.GooseRoundIcon = Icon$x;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MinusIcon = Icon$s;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$t;
exports.PancakeRoundIcon = Icon$v;
exports.PancakeRoundTreeIcon = Icon$w;
exports.PancakesIcon = Icon$u;
exports.PrizeIcon = Icon$y;
exports.Progress = Progress;
exports.ProgressBunny = Icon$B;
exports.Radio = Radio;
exports.RemoveIcon = Icon$z;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$F;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$G;
exports.SyncAltIcon = Icon$H;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$D;
exports.TicketRound = Icon$E;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$A;
exports.WarningIcon = Icon$I;
exports.Won = Icon$C;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
