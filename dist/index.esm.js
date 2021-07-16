import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
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
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border: ", ";\n  border-radius: 6px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background: ", ";\n  border: ", ";\n  border-radius: 6px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
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
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
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

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/egg/logo.png" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/egg/9.png" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/egg/99.png" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("image", { width: 80, height: 80, href: "/images/ticket.svg" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("image", { width: 48, height: 48, href: "/images/ticket.svg" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
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
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 6px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 6px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 6px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 6px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
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
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid rgb(234, 238, 243);\n  border-radius: 12px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: 1px solid rgb(234, 238, 243);\n  border-radius: 12px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
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
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
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
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
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
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
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
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
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

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
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
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
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
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
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
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
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
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 6px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 6px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
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

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
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

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
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
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
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
}, space);
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
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 6px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 6px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
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
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$B, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("img", { src: "/images/egg/9.gif" })));
};
var Container$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
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

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
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
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
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
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
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
    var _a = useReducer(reducer, {
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
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
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
    level1: "rgb(0 0 0 / 4%) 0px 0px 8px",
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
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
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
    var makeListener = useCallback(function () {
        return debounce(function (event) {
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
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 12px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 12px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
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
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
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

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
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
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 170 36" }, props),
        React.createElement("image", { width: "170", height: "36", href: isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png' })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, { viewBox: "0 0 24 24", width: "24px", color: "text", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { "fill-rule": "evenodd" },
            React.createElement("path", { d: "M11.549 18.906c3.81 0 6.906-3.09 6.906-6.906A6.908 6.908 0 006.509 7.278a6.909 6.909 0 005.04 11.628zm-2.41-4.173c.063-.225.122-.455.196-.676.083-.26.152-.294.392-.166.411.215.842.333 1.297.391.294.035.583.005.853-.112.51-.22.587-.808.156-1.166a1.937 1.937 0 00-.484-.284c-.446-.196-.911-.343-1.328-.598-.68-.406-1.117-.97-1.063-1.797.06-.94.588-1.523 1.45-1.837.353-.127.358-.122.358-.495v-.377c.005-.279.054-.328.333-.338.088-.005.171 0 .26 0 .592 0 .592 0 .597.593 0 .421 0 .421.421.485.319.049.627.142.921.274.162.074.225.186.176.358-.073.254-.142.514-.225.769-.078.24-.152.274-.382.161a2.904 2.904 0 00-1.46-.289 1.096 1.096 0 00-.391.079c-.441.19-.515.68-.138.984.191.152.407.265.632.358.392.161.784.318 1.156.524 1.185.656 1.504 2.14.671 3.154a2.25 2.25 0 01-1.15.74c-.202.054-.29.161-.28.367.01.206 0 .407 0 .612 0 .182-.093.28-.274.284-.22.005-.441.005-.657 0-.19-.004-.284-.112-.284-.298 0-.147-.005-.3-.005-.446-.005-.328-.014-.343-.328-.392-.406-.064-.803-.157-1.17-.338-.304-.147-.333-.22-.25-.524z" }),
            React.createElement("path", { d: "M19.028 19.484c-3.987 3.987-10.389 4.12-14.537.407h1.332v-1.42H2.042V22.25h1.42v-1.376A11.967 11.967 0 0011.544 24c3.076 0 6.147-1.17 8.488-3.512l.504-.504-1.004-1.004-.504.504zM19.635 1.749v1.376A11.967 11.967 0 0011.553 0C8.478 0 5.407 1.17 3.065 3.512l-.5.5L3.57 5.015l.504-.505C8.061.524 14.463.391 18.611 4.104H17.28v1.42H21.06V1.75h-1.425z" }))));
};

var Icon$13 = function (props) {
    var theme = useTheme();
    return (React.createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props, { width: '19px' }),
        React.createElement("image", { width: "19", height: "19", href: theme.isDark ? '/images/mediumDark.svg' : '/images/mediumLight.svg' })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", width: "24", height: "24", color: "text", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", id: "svg", version: "1.1", width: "24", height: "24", viewBox: "0, 0, 400, 400" }, props),
        React.createElement("g", { id: "svgg" },
            React.createElement("path", { id: "path0", d: "M335.078 43.056 C 334.758 43.375,335.119 44.000,335.624 44.000 C 335.831 44.000,336.000 43.730,336.000 43.400 C 336.000 42.781,335.528 42.605,335.078 43.056 M332.765 45.103 C 331.138 46.231,330.745 46.560,329.665 47.700 C 329.091 48.305,328.392 48.800,328.111 48.800 C 327.830 48.800,327.600 48.948,327.600 49.129 C 327.600 49.433,325.600 51.131,322.335 53.600 C 321.607 54.150,320.629 55.005,320.160 55.500 C 319.692 55.995,319.168 56.400,318.996 56.400 C 318.825 56.400,318.305 56.758,317.842 57.196 C 316.043 58.897,314.755 60.000,314.570 60.000 C 314.348 60.000,309.409 64.034,308.186 65.214 C 307.738 65.646,307.153 66.000,306.886 66.000 C 306.619 66.000,306.400 66.149,306.400 66.330 C 306.400 66.512,305.185 67.636,303.700 68.829 C 302.215 70.021,300.762 71.223,300.471 71.498 C 300.181 71.774,299.789 72.000,299.600 72.000 C 299.411 72.000,298.435 72.765,297.431 73.700 C 295.502 75.495,294.406 76.403,291.800 78.361 C 289.981 79.729,288.957 80.579,286.400 82.842 C 285.410 83.719,284.105 84.702,283.500 85.028 C 282.895 85.354,282.392 85.751,282.381 85.910 C 282.371 86.070,281.467 86.830,280.373 87.600 C 279.279 88.370,277.533 89.764,276.492 90.698 C 275.451 91.632,274.446 92.397,274.258 92.398 C 273.770 92.401,270.886 94.707,268.972 96.627 C 268.076 97.525,267.041 98.375,266.672 98.517 C 266.302 98.659,266.000 98.951,266.000 99.166 C 266.000 99.381,265.055 100.185,263.900 100.953 C 262.745 101.721,261.356 102.765,260.814 103.275 C 259.999 104.040,256.925 106.587,248.951 113.106 C 248.484 113.488,247.584 114.207,246.951 114.705 C 244.193 116.874,242.080 118.573,240.445 119.936 C 239.480 120.741,238.469 121.531,238.198 121.691 C 237.927 121.850,237.131 122.517,236.430 123.172 C 235.729 123.827,233.860 125.342,232.277 126.539 C 230.695 127.735,228.590 129.471,227.600 130.396 C 226.610 131.321,224.900 132.687,223.800 133.432 C 221.878 134.733,219.896 136.330,218.200 137.944 C 217.760 138.363,215.060 140.578,212.200 142.867 C 207.220 146.853,206.484 147.454,204.068 149.508 C 203.481 150.007,202.730 150.643,202.400 150.921 C 202.070 151.199,200.720 152.230,199.400 153.213 C 198.080 154.196,196.820 155.194,196.600 155.430 C 195.932 156.148,191.844 159.458,191.151 159.841 C 190.621 160.134,186.935 163.263,185.050 165.019 C 184.802 165.249,183.790 166.001,182.800 166.690 C 181.810 167.378,179.562 169.215,177.805 170.771 C 176.048 172.327,174.398 173.600,174.139 173.600 C 173.879 173.600,173.607 173.760,173.533 173.955 C 173.419 174.259,166.126 180.409,161.384 184.200 C 160.559 184.860,158.491 186.570,156.790 188.000 C 155.088 189.430,152.370 191.628,150.748 192.884 C 149.127 194.141,147.007 195.880,146.039 196.748 C 145.070 197.617,142.962 199.289,141.354 200.464 C 136.551 203.973,135.423 203.769,161.005 204.016 C 187.165 204.269,187.687 204.352,185.828 207.946 C 185.237 209.089,179.369 215.050,178.180 215.715 C 177.861 215.894,177.600 216.296,177.600 216.609 C 177.600 216.922,174.945 219.912,171.700 223.254 C 159.605 235.708,157.692 237.687,153.103 242.487 C 150.520 245.189,145.932 249.974,142.908 253.119 C 139.884 256.265,137.247 259.145,137.047 259.519 C 136.847 259.894,134.955 261.973,132.842 264.139 C 121.107 276.171,114.454 283.094,108.100 289.890 C 105.636 292.525,104.511 292.398,130.533 292.413 C 148.966 292.423,153.130 292.524,153.726 292.976 C 154.798 293.789,154.714 295.806,153.561 296.942 C 153.032 297.462,151.250 299.626,149.600 301.750 C 147.950 303.875,145.295 307.224,143.700 309.193 C 142.105 311.162,140.800 312.914,140.800 313.086 C 140.799 313.259,140.394 313.881,139.900 314.470 C 139.405 315.058,138.550 316.123,138.000 316.837 C 137.450 317.551,136.595 318.563,136.100 319.086 C 135.605 319.609,135.200 320.123,135.200 320.230 C 135.200 320.449,131.460 325.384,130.372 326.600 C 129.979 327.040,129.194 327.903,128.628 328.518 C 128.063 329.133,127.600 329.783,127.600 329.963 C 127.600 330.410,125.835 332.725,122.307 336.905 C 120.325 339.253,120.205 339.415,119.629 340.518 C 119.315 341.119,118.280 342.401,117.329 343.366 C 116.378 344.330,115.600 345.311,115.600 345.546 C 115.600 345.780,115.240 346.165,114.800 346.400 C 114.360 346.635,114.000 347.067,114.000 347.359 C 114.000 347.933,112.435 350.048,110.123 352.600 C 109.326 353.480,107.883 355.415,106.918 356.900 C 105.952 358.385,104.990 359.600,104.781 359.600 C 104.571 359.600,104.400 359.866,104.400 360.191 C 104.400 360.516,103.950 361.076,103.400 361.437 C 102.850 361.797,102.400 362.276,102.400 362.500 C 102.400 362.725,101.995 363.305,101.500 363.789 C 101.005 364.274,99.885 365.689,99.012 366.935 C 98.139 368.181,97.284 369.200,97.112 369.200 C 96.940 369.200,96.800 369.415,96.800 369.678 C 96.800 369.941,96.373 370.616,95.852 371.178 C 95.331 371.740,93.891 373.550,92.653 375.200 C 91.415 376.850,89.951 378.698,89.401 379.307 C 88.850 379.916,88.400 380.591,88.400 380.807 C 88.400 381.023,88.130 381.200,87.800 381.200 C 87.470 381.200,87.200 381.445,87.200 381.745 C 87.200 382.045,86.666 382.990,86.014 383.845 C 85.361 384.700,84.506 385.826,84.114 386.346 C 83.721 386.866,82.997 387.766,82.505 388.346 C 80.910 390.226,79.200 392.504,79.196 392.755 C 79.193 392.890,78.392 393.867,77.414 394.927 C 76.436 395.987,75.526 397.202,75.391 397.627 C 75.256 398.052,74.900 398.400,74.600 398.400 C 74.300 398.400,73.927 398.805,73.773 399.300 C 73.524 400.098,72.518 401.495,70.607 403.700 C 69.656 404.797,69.765 406.337,70.731 405.462 C 71.134 405.098,71.576 404.800,71.713 404.800 C 71.851 404.800,72.399 404.395,72.932 403.900 C 75.359 401.645,81.016 397.200,81.459 397.200 C 81.598 397.200,81.912 396.944,82.156 396.631 C 82.652 395.995,87.635 391.839,89.388 390.600 C 90.010 390.160,90.987 389.402,91.560 388.915 C 92.132 388.428,93.860 387.041,95.400 385.831 C 99.241 382.815,100.292 381.946,101.367 380.900 C 101.876 380.405,102.487 380.000,102.726 380.000 C 102.965 380.000,103.304 379.775,103.480 379.500 C 103.656 379.225,104.700 378.339,105.800 377.531 C 107.982 375.929,109.458 374.743,111.194 373.200 C 111.812 372.650,112.742 371.882,113.259 371.493 C 115.761 369.614,117.867 367.977,118.500 367.418 C 118.885 367.078,119.367 366.800,119.571 366.800 C 119.775 366.800,120.270 366.392,120.671 365.894 C 121.072 365.396,122.398 364.331,123.617 363.528 C 124.837 362.724,126.592 361.332,127.518 360.434 C 128.443 359.535,129.315 358.800,129.455 358.800 C 129.594 358.800,130.111 358.395,130.604 357.900 C 131.097 357.405,132.018 356.591,132.650 356.091 C 133.283 355.591,134.454 354.646,135.253 353.991 C 136.052 353.336,136.888 352.800,137.110 352.800 C 137.332 352.800,137.619 352.527,137.747 352.194 C 137.875 351.861,138.434 351.415,138.990 351.204 C 139.545 350.993,140.000 350.658,140.000 350.460 C 140.000 350.006,146.183 345.200,146.767 345.200 C 147.005 345.200,147.200 345.047,147.200 344.861 C 147.200 344.539,150.215 342.056,156.000 337.612 C 157.430 336.513,158.960 335.279,159.400 334.870 C 159.840 334.460,161.006 333.512,161.990 332.763 C 162.975 332.013,163.985 331.220,164.235 331.000 C 164.485 330.780,165.355 330.060,166.169 329.400 C 166.984 328.740,167.958 327.930,168.335 327.600 C 168.712 327.270,170.041 326.301,171.289 325.448 C 172.538 324.594,173.959 323.469,174.449 322.948 C 174.939 322.426,175.578 322.000,175.870 322.000 C 176.161 322.000,176.410 321.775,176.423 321.500 C 176.435 321.225,178.144 319.745,180.221 318.211 C 182.298 316.678,184.616 314.878,185.372 314.211 C 188.037 311.863,188.619 311.399,190.644 310.006 C 191.769 309.233,193.929 307.484,195.444 306.120 C 196.960 304.756,199.010 303.103,200.000 302.446 C 200.990 301.789,202.213 300.866,202.717 300.395 C 204.623 298.613,208.378 295.600,208.694 295.600 C 208.874 295.600,209.300 295.285,209.639 294.900 C 210.327 294.118,214.321 290.908,217.150 288.862 C 218.167 288.126,219.900 286.741,221.000 285.783 C 222.100 284.826,224.080 283.210,225.400 282.194 C 226.720 281.177,228.340 279.911,229.000 279.380 C 229.660 278.849,231.730 277.223,233.600 275.767 C 237.513 272.719,239.870 270.796,242.174 268.769 C 243.068 267.982,244.970 266.511,246.400 265.500 C 247.830 264.489,249.568 263.153,250.261 262.531 C 252.689 260.355,258.989 255.296,263.720 251.724 C 267.473 248.891,268.800 247.633,268.800 246.908 C 268.800 246.503,264.027 246.400,245.229 246.400 C 219.307 246.400,220.400 246.506,220.400 243.989 C 220.400 243.133,220.944 242.284,222.500 240.706 C 223.655 239.536,226.400 236.631,228.600 234.251 C 230.800 231.871,234.220 228.240,236.200 226.182 C 238.180 224.125,241.600 220.516,243.800 218.164 C 246.000 215.811,249.465 212.168,251.500 210.066 C 253.535 207.965,255.200 206.073,255.200 205.861 C 255.200 205.649,256.685 203.997,258.500 202.188 C 260.315 200.380,263.870 196.702,266.400 194.017 C 268.930 191.331,272.170 187.935,273.600 186.471 C 275.030 185.006,276.806 183.086,277.547 182.204 C 278.288 181.322,280.538 178.861,282.547 176.735 C 284.556 174.609,286.809 172.179,287.552 171.335 C 288.296 170.491,290.501 168.119,292.452 166.065 C 297.703 160.537,298.299 160.909,283.700 160.611 C 247.715 159.876,246.709 159.837,246.284 159.162 C 245.696 158.228,246.207 156.790,247.693 155.200 C 248.412 154.430,249.787 152.765,250.749 151.500 C 251.710 150.235,252.655 149.200,252.849 149.200 C 253.042 149.200,253.200 148.999,253.200 148.753 C 253.200 148.507,253.740 147.652,254.401 146.853 C 255.061 146.054,256.006 144.896,256.501 144.279 C 256.995 143.662,257.805 142.742,258.300 142.233 C 258.795 141.724,259.200 141.195,259.200 141.056 C 259.200 140.560,264.052 134.466,264.620 134.248 C 264.939 134.125,265.200 133.758,265.200 133.432 C 265.200 133.106,265.456 132.696,265.769 132.520 C 266.083 132.344,267.028 131.188,267.869 129.952 C 269.457 127.621,271.869 124.625,273.600 122.834 C 274.151 122.265,275.138 120.990,275.794 120.000 C 276.780 118.513,279.033 115.675,281.557 112.741 C 281.813 112.444,282.602 111.365,283.311 110.344 C 284.587 108.506,287.175 105.393,289.300 103.139 C 289.905 102.497,290.400 101.773,290.400 101.529 C 290.400 101.286,291.210 100.138,292.200 98.979 C 293.190 97.821,294.000 96.742,294.000 96.582 C 294.000 96.422,294.405 95.889,294.900 95.396 C 295.860 94.439,296.400 93.787,299.857 89.400 C 301.071 87.860,302.320 86.400,302.632 86.156 C 302.944 85.912,303.200 85.520,303.200 85.284 C 303.200 85.049,303.426 84.619,303.702 84.329 C 303.977 84.038,305.179 82.585,306.371 81.100 C 307.564 79.615,308.688 78.400,308.870 78.400 C 309.051 78.400,309.200 78.162,309.200 77.872 C 309.200 77.582,309.605 76.969,310.100 76.511 C 310.595 76.052,311.450 75.023,312.000 74.223 C 313.734 71.703,317.561 67.054,318.193 66.700 C 318.527 66.513,318.800 66.078,318.800 65.733 C 318.800 65.388,319.351 64.452,320.025 63.653 C 322.288 60.967,322.996 60.097,323.800 59.010 C 324.240 58.416,325.005 57.487,325.500 56.947 C 325.995 56.406,326.400 55.861,326.400 55.735 C 326.400 55.476,328.360 53.031,329.588 51.758 C 330.034 51.295,330.400 50.720,330.400 50.481 C 330.400 50.241,330.718 49.810,331.107 49.523 C 331.496 49.235,332.159 48.460,332.580 47.800 C 333.002 47.140,333.584 46.362,333.873 46.071 C 335.043 44.897,334.167 44.131,332.765 45.103 M183.600 67.589 C 182.170 67.764,179.521 67.928,177.712 67.953 C 175.344 67.987,174.002 68.214,172.912 68.764 C 171.976 69.236,170.073 69.631,167.917 69.798 C 165.828 69.961,163.863 70.360,163.007 70.796 C 162.222 71.196,160.460 71.650,159.090 71.805 C 157.721 71.959,156.315 72.337,155.967 72.644 C 155.619 72.951,154.299 73.394,153.033 73.628 C 151.768 73.862,150.162 74.400,149.466 74.825 C 148.770 75.250,147.553 75.598,146.762 75.599 C 145.838 75.599,145.068 75.883,144.607 76.392 C 144.213 76.828,143.240 77.303,142.445 77.448 C 141.650 77.592,140.550 78.020,140.000 78.397 C 139.450 78.775,138.471 79.212,137.824 79.368 C 137.178 79.525,136.177 79.989,135.600 80.400 C 135.023 80.811,134.022 81.276,133.376 81.434 C 132.729 81.593,131.787 82.042,131.281 82.433 C 130.776 82.825,129.843 83.259,129.209 83.398 C 128.574 83.537,127.848 83.901,127.596 84.205 C 127.343 84.510,126.475 84.971,125.668 85.230 C 124.861 85.489,123.930 85.922,123.600 86.192 C 123.270 86.462,122.460 86.952,121.800 87.281 C 119.415 88.470,117.831 89.414,117.024 90.127 C 116.571 90.528,115.705 90.955,115.100 91.077 C 114.495 91.200,114.000 91.440,114.000 91.612 C 114.000 91.784,113.166 92.436,112.146 93.062 C 111.126 93.688,109.896 94.470,109.413 94.800 C 108.930 95.130,107.397 96.120,106.007 97.000 C 104.616 97.880,103.114 99.005,102.667 99.500 C 102.221 99.995,101.703 100.400,101.516 100.400 C 101.085 100.400,97.045 103.566,96.867 104.044 C 96.793 104.240,96.518 104.400,96.256 104.400 C 95.993 104.400,95.495 104.715,95.150 105.100 C 94.805 105.485,93.479 106.700,92.204 107.800 C 89.054 110.517,77.600 121.991,77.600 122.429 C 77.600 122.623,77.150 123.076,76.600 123.437 C 76.050 123.797,75.600 124.276,75.600 124.500 C 75.600 124.725,75.195 125.324,74.700 125.832 C 73.163 127.408,72.544 128.158,71.759 129.393 C 70.936 130.688,70.265 131.529,68.956 132.910 C 68.491 133.399,67.992 134.181,67.845 134.647 C 67.699 135.113,67.224 135.816,66.790 136.209 C 66.355 136.602,66.000 137.138,66.000 137.400 C 66.000 137.662,65.625 138.215,65.167 138.630 C 64.709 139.045,64.069 139.927,63.746 140.592 C 62.725 142.687,61.695 144.432,61.068 145.128 C 60.735 145.497,60.338 146.299,60.185 146.909 C 60.033 147.519,59.593 148.239,59.208 148.509 C 58.823 148.779,58.383 149.566,58.231 150.259 C 58.079 150.951,57.623 151.817,57.217 152.185 C 56.811 152.552,56.368 153.446,56.232 154.171 C 56.096 154.897,55.628 155.813,55.192 156.207 C 54.756 156.602,54.400 157.436,54.400 158.062 C 54.400 158.688,54.064 159.536,53.652 159.948 C 53.241 160.359,52.687 161.605,52.420 162.717 C 52.153 163.829,51.705 164.828,51.424 164.935 C 51.143 165.043,50.792 165.891,50.643 166.820 C 50.495 167.748,50.036 168.937,49.623 169.461 C 49.211 169.986,48.750 171.308,48.600 172.400 C 48.450 173.492,47.983 174.822,47.564 175.356 C 47.144 175.889,46.800 176.888,46.800 177.575 C 46.800 178.262,46.373 179.854,45.852 181.112 C 45.330 182.370,44.780 184.390,44.628 185.600 C 44.476 186.810,44.101 188.187,43.794 188.659 C 43.487 189.132,43.049 191.006,42.821 192.825 C 42.593 194.643,42.131 196.552,41.794 197.066 C 41.396 197.673,41.048 199.750,40.800 203.002 C 40.537 206.441,40.196 208.411,39.709 209.302 C 38.639 211.260,38.672 246.822,39.746 249.600 C 40.129 250.590,40.611 253.303,40.817 255.630 C 41.023 257.956,41.461 260.399,41.790 261.059 C 42.119 261.719,42.584 263.668,42.824 265.389 C 43.063 267.110,43.506 268.897,43.807 269.359 C 44.108 269.822,44.538 271.347,44.763 272.748 C 44.987 274.150,45.457 275.733,45.806 276.266 C 46.156 276.799,46.546 278.173,46.673 279.318 C 46.801 280.464,47.226 281.760,47.620 282.200 C 48.013 282.640,48.457 283.720,48.605 284.600 C 48.753 285.480,49.214 286.682,49.628 287.271 C 50.042 287.860,50.501 289.091,50.647 290.005 C 50.794 290.920,51.147 291.758,51.432 291.868 C 51.718 291.977,52.069 292.637,52.213 293.333 C 52.357 294.030,52.887 295.230,53.390 296.000 C 53.894 296.770,54.413 297.987,54.543 298.704 C 54.674 299.421,55.112 300.501,55.517 301.104 C 55.921 301.707,56.616 302.740,57.060 303.400 C 57.505 304.060,58.003 305.140,58.167 305.800 C 58.331 306.460,58.808 307.320,59.228 307.711 C 59.647 308.102,60.109 308.893,60.253 309.469 C 60.398 310.045,60.805 310.822,61.158 311.195 C 61.784 311.858,62.310 312.685,64.406 316.300 C 65.083 317.469,66.337 319.354,67.001 320.200 C 67.969 321.436,69.696 323.814,70.800 325.433 C 71.350 326.240,72.205 327.303,72.700 327.796 C 73.195 328.289,73.600 328.890,73.600 329.132 C 73.600 329.374,73.915 329.742,74.300 329.949 C 74.685 330.157,75.540 331.064,76.200 331.966 C 76.860 332.868,78.795 335.088,80.500 336.901 C 82.205 338.714,83.600 340.423,83.600 340.699 C 83.600 340.974,83.752 341.200,83.938 341.200 C 84.125 341.200,85.262 342.145,86.466 343.300 C 89.014 345.744,91.737 348.192,95.032 351.000 C 96.323 352.100,97.797 353.405,98.308 353.900 C 98.819 354.395,99.398 354.800,99.596 354.800 C 99.793 354.800,100.190 355.131,100.477 355.535 C 101.618 357.140,102.851 356.918,105.307 354.668 C 108.609 351.644,108.520 350.380,104.800 347.434 C 101.640 344.931,97.306 340.893,93.719 337.107 C 93.455 336.828,93.005 336.380,92.719 336.111 C 92.434 335.842,92.020 335.432,91.800 335.200 C 91.580 334.967,90.230 333.618,88.800 332.202 C 84.594 328.037,82.959 326.246,82.402 325.192 C 82.114 324.646,81.501 323.818,81.039 323.351 C 80.578 322.884,79.788 321.984,79.284 321.351 C 77.708 319.371,76.632 318.048,75.713 316.961 C 75.225 316.383,74.716 315.565,74.582 315.143 C 74.448 314.720,73.947 313.941,73.469 313.412 C 71.589 311.328,70.800 310.252,70.800 309.767 C 70.800 309.489,70.375 308.753,69.855 308.131 C 69.335 307.509,68.783 306.595,68.628 306.100 C 68.473 305.605,68.198 305.200,68.016 305.200 C 67.835 305.200,67.413 304.515,67.078 303.677 C 66.743 302.840,66.195 301.927,65.860 301.650 C 65.525 301.372,65.140 300.636,65.003 300.014 C 64.866 299.392,64.408 298.570,63.985 298.187 C 63.562 297.804,63.102 296.882,62.962 296.139 C 62.823 295.397,62.485 294.656,62.211 294.494 C 61.937 294.332,61.482 293.480,61.198 292.600 C 60.915 291.720,60.350 290.571,59.942 290.046 C 59.534 289.521,59.200 288.743,59.200 288.317 C 59.200 287.891,58.772 286.790,58.248 285.871 C 57.725 284.952,57.187 283.605,57.054 282.877 C 56.920 282.149,56.560 281.303,56.254 280.997 C 55.947 280.690,55.568 279.579,55.410 278.528 C 55.252 277.476,54.799 276.160,54.402 275.603 C 54.006 275.046,53.552 273.513,53.393 272.195 C 53.234 270.878,52.856 269.516,52.553 269.169 C 52.250 268.823,51.798 267.026,51.549 265.176 C 51.300 263.327,50.834 261.414,50.514 260.925 C 50.177 260.411,49.775 258.231,49.560 255.753 C 49.355 253.398,48.878 250.645,48.499 249.635 C 47.448 246.835,47.483 212.717,48.540 210.000 C 48.955 208.932,49.381 206.226,49.586 203.345 C 49.810 200.211,50.167 198.037,50.594 197.211 C 50.959 196.507,51.410 194.461,51.598 192.665 C 51.956 189.236,52.275 188.000,52.804 188.000 C 52.978 188.000,53.248 186.875,53.402 185.500 C 53.557 184.125,54.003 182.460,54.395 181.800 C 54.786 181.140,55.233 179.700,55.388 178.600 C 55.544 177.500,55.947 176.291,56.284 175.914 C 56.622 175.537,57.053 174.400,57.242 173.386 C 57.431 172.373,57.949 171.082,58.393 170.518 C 58.837 169.954,59.200 169.011,59.200 168.424 C 59.200 167.836,59.650 166.745,60.200 166.000 C 60.750 165.255,61.200 164.254,61.200 163.776 C 61.200 163.299,61.560 162.450,62.000 161.891 C 62.440 161.331,62.800 160.612,62.800 160.293 C 62.800 159.973,63.252 159.045,63.805 158.230 C 64.358 157.415,65.080 156.175,65.408 155.474 C 65.737 154.773,66.448 153.480,66.989 152.600 C 67.529 151.720,68.252 150.411,68.595 149.691 C 68.938 148.971,69.574 148.026,70.009 147.591 C 70.444 147.156,70.800 146.552,70.800 146.249 C 70.800 145.946,71.098 145.451,71.462 145.149 C 71.826 144.847,72.368 144.015,72.667 143.300 C 72.966 142.585,73.371 142.000,73.566 142.000 C 73.878 142.000,74.763 140.780,76.250 138.299 C 76.497 137.887,77.172 137.056,77.750 136.453 C 78.327 135.850,78.800 135.184,78.800 134.974 C 78.800 134.764,79.160 134.368,79.600 134.093 C 80.040 133.818,80.400 133.437,80.400 133.247 C 80.400 133.056,81.210 132.055,82.200 131.022 C 83.190 129.988,84.000 128.977,84.000 128.775 C 84.000 127.907,100.540 112.023,102.600 110.912 C 103.098 110.644,103.611 110.149,103.740 109.812 C 103.869 109.475,104.185 109.200,104.442 109.200 C 104.698 109.200,105.312 108.795,105.805 108.300 C 107.372 106.728,108.572 105.739,109.530 105.232 C 110.042 104.961,110.789 104.438,111.190 104.070 C 111.591 103.701,112.580 102.950,113.387 102.400 C 114.195 101.850,115.364 100.995,115.985 100.500 C 116.607 100.005,117.410 99.600,117.770 99.600 C 118.130 99.600,118.535 99.312,118.670 98.961 C 118.805 98.610,119.655 97.969,120.558 97.537 C 122.346 96.681,124.039 95.739,125.600 94.730 C 126.150 94.374,127.050 93.949,127.600 93.784 C 128.150 93.620,128.821 93.172,129.090 92.789 C 129.360 92.406,130.175 91.981,130.903 91.845 C 131.630 91.708,132.533 91.237,132.909 90.798 C 133.307 90.333,134.088 90.000,134.781 90.000 C 135.437 90.000,136.289 89.656,136.684 89.232 C 137.078 88.810,137.940 88.330,138.600 88.166 C 139.260 88.001,140.592 87.447,141.560 86.933 C 142.527 86.420,143.670 86.000,144.098 86.000 C 144.526 86.000,145.373 85.646,145.980 85.214 C 146.587 84.782,147.875 84.309,148.842 84.163 C 149.809 84.017,151.140 83.582,151.800 83.196 C 152.460 82.810,153.884 82.368,154.966 82.213 C 156.047 82.058,157.574 81.587,158.360 81.166 C 159.164 80.734,160.579 80.400,161.600 80.400 C 162.657 80.400,164.043 80.061,164.927 79.588 C 165.892 79.071,167.780 78.643,170.122 78.412 C 172.145 78.212,174.520 77.766,175.400 77.420 C 176.485 76.993,180.087 76.595,186.600 76.182 C 191.880 75.847,197.269 75.472,198.575 75.347 C 199.881 75.223,201.591 75.306,202.375 75.531 C 203.159 75.756,207.937 76.140,212.993 76.385 C 219.923 76.720,222.412 76.978,223.106 77.433 C 223.645 77.786,225.685 78.180,228.024 78.383 C 230.755 78.620,232.529 78.995,233.623 79.565 C 234.652 80.101,235.974 80.400,237.318 80.400 C 238.673 80.400,239.958 80.693,240.960 81.230 C 241.812 81.686,243.499 82.221,244.709 82.418 C 245.920 82.615,247.201 83.032,247.555 83.344 C 247.910 83.657,249.010 84.044,250.000 84.205 C 250.990 84.366,252.250 84.813,252.800 85.199 C 253.350 85.585,254.430 86.032,255.200 86.193 C 255.970 86.355,257.140 86.804,257.800 87.192 C 258.460 87.580,259.540 88.025,260.200 88.181 C 260.860 88.337,261.722 88.810,262.116 89.232 C 262.509 89.655,263.308 90.000,263.890 90.000 C 264.472 90.000,265.364 90.390,265.871 90.867 C 266.905 91.838,271.200 92.473,271.200 91.655 C 271.200 91.259,272.519 90.248,275.448 88.400 C 276.756 87.574,275.814 85.200,274.178 85.200 C 273.854 85.200,269.269 82.981,267.600 82.016 C 266.027 81.106,262.404 79.581,261.288 79.358 C 260.602 79.220,259.734 78.769,259.358 78.354 C 258.983 77.939,258.191 77.600,257.598 77.600 C 257.004 77.600,255.673 77.150,254.638 76.600 C 253.604 76.050,252.182 75.599,251.479 75.599 C 250.775 75.598,249.628 75.248,248.929 74.822 C 248.230 74.396,246.970 73.931,246.129 73.790 C 243.797 73.397,242.000 72.779,242.000 72.369 C 242.000 72.166,241.318 72.000,240.484 72.000 C 238.848 72.000,234.513 70.981,233.823 70.435 C 233.590 70.251,231.690 69.971,229.600 69.813 C 227.510 69.655,225.080 69.245,224.200 68.902 C 221.326 67.781,190.265 66.777,183.600 67.589 M294.359 100.776 C 291.747 102.396,289.854 107.200,291.827 107.200 C 292.117 107.200,292.590 107.531,292.877 107.937 C 293.165 108.342,293.850 108.911,294.400 109.201 C 295.345 109.700,296.106 110.356,300.978 114.877 C 302.090 115.909,303.944 117.619,305.097 118.677 C 306.250 119.735,307.420 120.812,307.697 121.071 C 307.974 121.329,309.010 122.454,310.000 123.569 C 310.990 124.684,313.105 126.991,314.700 128.695 C 316.295 130.399,317.600 131.905,317.600 132.042 C 317.600 132.271,319.024 134.201,320.704 136.249 C 324.003 140.273,325.600 142.488,325.600 143.041 C 325.600 143.333,325.958 143.763,326.395 143.997 C 326.833 144.232,327.299 144.855,327.431 145.382 C 327.564 145.910,328.016 146.652,328.436 147.033 C 328.856 147.413,329.200 148.025,329.200 148.392 C 329.200 148.760,329.635 149.469,330.166 149.968 C 330.698 150.467,331.242 151.313,331.376 151.848 C 331.511 152.383,331.976 153.176,332.410 153.610 C 332.845 154.045,333.200 154.736,333.200 155.146 C 333.200 155.556,333.540 156.324,333.956 156.853 C 334.371 157.381,335.006 158.440,335.366 159.207 C 335.727 159.973,336.284 161.050,336.605 161.600 C 336.926 162.150,337.191 162.983,337.194 163.451 C 337.197 163.919,337.469 164.525,337.797 164.798 C 338.126 165.070,338.593 166.031,338.836 166.933 C 339.078 167.834,339.599 168.981,339.992 169.481 C 340.386 169.981,340.830 171.203,340.978 172.195 C 341.127 173.188,341.396 174.000,341.576 174.000 C 342.001 174.000,342.670 175.781,343.004 177.800 C 343.149 178.680,343.522 179.683,343.832 180.029 C 344.142 180.375,344.508 181.545,344.645 182.629 C 344.782 183.713,345.238 185.203,345.658 185.940 C 346.077 186.678,346.525 188.388,346.653 189.740 C 346.781 191.093,347.211 192.920,347.609 193.800 C 348.007 194.680,348.451 196.750,348.595 198.400 C 348.739 200.050,349.205 202.300,349.630 203.400 C 350.165 204.785,350.519 207.185,350.781 211.200 C 350.990 214.390,351.357 218.440,351.597 220.200 C 352.020 223.298,351.944 234.736,351.477 238.400 C 351.350 239.390,351.040 242.900,350.788 246.199 C 350.462 250.468,350.109 252.683,349.565 253.878 C 349.144 254.801,348.799 256.151,348.798 256.878 C 348.794 259.153,348.049 262.882,347.464 263.555 C 347.156 263.910,346.810 265.293,346.696 266.629 C 346.582 267.965,346.134 269.765,345.701 270.629 C 345.268 271.493,344.797 273.100,344.654 274.200 C 344.512 275.300,344.142 276.388,343.833 276.618 C 343.524 276.848,343.079 278.075,342.844 279.344 C 342.610 280.613,342.054 282.114,341.609 282.680 C 341.164 283.245,340.800 284.240,340.800 284.891 C 340.800 285.541,340.445 286.525,340.011 287.077 C 339.576 287.630,339.108 288.681,338.971 289.414 C 338.833 290.148,338.379 291.057,337.960 291.436 C 337.542 291.814,337.200 292.612,337.200 293.208 C 337.200 293.804,336.834 294.758,336.386 295.327 C 335.938 295.897,335.372 296.956,335.128 297.681 C 334.884 298.407,334.485 299.249,334.242 299.553 C 333.710 300.219,332.301 302.836,331.361 304.900 C 330.986 305.725,330.534 306.400,330.358 306.400 C 330.182 306.400,329.679 307.210,329.241 308.200 C 328.803 309.190,328.255 310.000,328.022 310.000 C 327.790 310.000,327.600 310.238,327.600 310.529 C 327.600 310.820,327.065 311.765,326.411 312.629 C 325.757 313.493,325.217 314.419,325.211 314.686 C 325.205 314.953,324.840 315.365,324.400 315.600 C 323.960 315.835,323.593 316.247,323.584 316.514 C 323.575 316.781,323.035 317.623,322.384 318.385 C 321.733 319.147,321.200 319.896,321.200 320.050 C 321.200 320.205,320.490 321.112,319.621 322.066 C 318.753 323.019,316.559 325.600,314.745 327.800 C 312.932 330.000,309.367 333.827,306.824 336.305 C 300.557 342.411,300.404 342.550,298.624 343.758 C 297.766 344.340,296.814 345.173,296.509 345.608 C 296.204 346.044,295.776 346.400,295.557 346.400 C 295.339 346.400,294.494 347.052,293.680 347.849 C 292.332 349.170,290.294 350.691,288.330 351.843 C 287.915 352.087,287.266 352.586,286.888 352.952 C 285.310 354.481,283.039 356.000,282.332 356.000 C 281.916 356.000,281.480 356.246,281.365 356.547 C 281.090 357.263,277.475 359.600,276.641 359.600 C 276.286 359.600,275.616 360.035,275.153 360.568 C 274.691 361.100,273.851 361.651,273.288 361.792 C 272.724 361.934,271.820 362.398,271.278 362.825 C 270.736 363.251,270.081 363.600,269.824 363.600 C 269.566 363.600,268.745 364.050,268.000 364.600 C 267.255 365.150,266.344 365.600,265.976 365.600 C 265.609 365.600,264.848 365.962,264.286 366.404 C 263.725 366.845,262.665 367.321,261.932 367.461 C 261.200 367.601,260.278 368.049,259.884 368.458 C 259.491 368.866,258.671 369.200,258.062 369.200 C 257.453 369.200,256.363 369.637,255.639 370.171 C 254.915 370.706,253.578 371.269,252.668 371.422 C 251.758 371.576,250.831 371.947,250.607 372.247 C 250.383 372.546,249.256 372.968,248.102 373.185 C 246.949 373.401,245.579 373.857,245.059 374.198 C 244.540 374.538,242.903 374.963,241.422 375.141 C 239.942 375.320,238.607 375.666,238.455 375.910 C 238.114 376.463,235.112 377.177,233.074 377.190 C 232.235 377.196,230.705 377.546,229.674 377.968 C 228.479 378.458,226.315 378.827,223.698 378.987 C 221.442 379.124,218.832 379.524,217.898 379.874 C 214.050 381.319,186.636 381.007,179.800 379.441 C 178.260 379.089,175.702 378.800,174.115 378.800 C 172.245 378.800,170.556 378.537,169.315 378.052 C 168.262 377.640,166.204 377.178,164.743 377.024 C 163.282 376.871,161.482 376.425,160.743 376.034 C 160.004 375.642,158.430 375.210,157.245 375.073 C 156.060 374.937,154.787 374.551,154.417 374.216 C 154.047 373.881,152.779 373.424,151.600 373.200 C 150.421 372.976,149.173 372.540,148.828 372.231 C 148.483 371.921,147.480 371.546,146.600 371.396 C 145.720 371.247,144.530 370.795,143.955 370.391 C 143.380 369.987,142.261 369.535,141.469 369.387 C 140.677 369.238,139.827 368.874,139.581 368.577 C 139.334 368.280,138.178 367.760,137.010 367.420 C 135.842 367.081,134.783 366.532,134.656 366.201 C 134.529 365.871,133.983 365.600,133.443 365.600 C 132.903 365.600,131.927 365.150,131.273 364.600 C 129.248 362.896,126.107 363.573,123.800 366.212 C 123.580 366.463,122.995 366.885,122.500 367.149 C 120.969 367.964,121.263 369.869,122.994 370.347 C 123.760 370.559,124.865 371.107,125.448 371.566 C 126.031 372.025,126.729 372.400,127.000 372.400 C 127.271 372.400,127.921 372.732,128.446 373.138 C 128.971 373.544,130.021 373.997,130.781 374.144 C 131.540 374.292,132.530 374.739,132.981 375.138 C 133.431 375.537,134.565 376.082,135.500 376.348 C 136.435 376.614,137.200 376.985,137.200 377.172 C 137.200 377.358,137.866 377.636,138.681 377.789 C 139.495 377.942,140.979 378.502,141.978 379.033 C 142.976 379.565,144.134 380.000,144.550 380.000 C 144.965 380.000,145.867 380.337,146.553 380.749 C 147.239 381.161,148.602 381.619,149.582 381.767 C 150.561 381.915,151.911 382.365,152.582 382.767 C 153.252 383.169,154.848 383.614,156.130 383.756 C 157.411 383.898,159.159 384.371,160.014 384.807 C 160.869 385.243,162.216 385.600,163.007 385.600 C 164.838 385.600,167.966 386.364,168.989 387.062 C 169.484 387.400,170.945 387.600,172.912 387.600 C 176.513 387.600,181.357 388.257,182.760 388.936 C 184.559 389.806,213.986 389.564,217.400 388.651 C 218.940 388.239,222.297 387.781,224.861 387.633 C 227.425 387.484,229.765 387.167,230.061 386.928 C 230.730 386.389,234.375 385.600,236.197 385.600 C 236.943 385.600,238.193 385.223,238.974 384.762 C 239.804 384.273,241.433 383.831,242.897 383.699 C 244.274 383.575,245.580 383.246,245.800 382.968 C 246.257 382.391,248.910 381.606,250.411 381.602 C 250.967 381.601,251.730 381.240,252.107 380.800 C 252.533 380.303,253.287 380.000,254.099 380.000 C 254.818 380.000,256.252 379.550,257.285 379.000 C 258.318 378.450,259.379 378.000,259.642 378.000 C 260.128 378.000,263.067 376.698,266.500 374.961 C 267.545 374.433,268.572 374.000,268.782 374.000 C 268.993 374.000,269.828 373.550,270.638 373.000 C 271.449 372.450,272.419 372.000,272.794 372.000 C 273.169 372.000,273.802 371.640,274.200 371.200 C 274.598 370.760,275.221 370.400,275.584 370.400 C 275.947 370.400,276.855 369.950,277.600 369.400 C 278.345 368.850,279.163 368.400,279.416 368.400 C 279.669 368.400,280.202 368.040,280.600 367.600 C 280.998 367.160,281.534 366.800,281.790 366.800 C 282.264 366.800,288.123 363.137,290.063 361.627 C 290.648 361.172,291.232 360.800,291.360 360.800 C 291.596 360.800,294.780 358.438,295.798 357.507 C 296.103 357.228,297.001 356.550,297.794 356.000 C 299.514 354.807,304.273 351.011,305.400 349.933 C 308.719 346.759,320.815 334.565,321.689 333.512 C 322.288 332.790,323.433 331.390,324.233 330.400 C 325.034 329.410,325.849 328.540,326.044 328.467 C 326.240 328.393,326.400 328.147,326.400 327.919 C 326.400 327.561,327.073 326.660,329.330 324.000 C 329.609 323.670,330.178 322.860,330.593 322.200 C 331.007 321.540,331.584 320.762,331.873 320.471 C 332.163 320.181,332.400 319.695,332.400 319.391 C 332.400 319.088,332.646 318.696,332.946 318.520 C 333.246 318.344,333.811 317.570,334.202 316.800 C 334.592 316.030,335.075 315.294,335.275 315.165 C 335.667 314.910,336.671 313.192,337.999 310.500 C 338.460 309.565,338.995 308.800,339.187 308.800 C 339.379 308.800,339.646 308.299,339.781 307.687 C 339.915 307.074,340.470 306.056,341.013 305.425 C 341.556 304.793,342.000 303.968,342.000 303.592 C 342.000 303.216,342.327 302.479,342.727 301.954 C 343.127 301.429,343.703 300.370,344.008 299.600 C 344.313 298.830,344.774 298.020,345.032 297.800 C 345.290 297.580,345.612 296.800,345.747 296.068 C 345.882 295.335,346.340 294.294,346.763 293.756 C 347.187 293.217,347.653 292.072,347.798 291.211 C 347.944 290.350,348.314 289.438,348.621 289.183 C 348.928 288.928,349.290 288.063,349.427 287.260 C 349.563 286.457,350.004 285.331,350.406 284.758 C 350.809 284.185,351.333 282.655,351.571 281.358 C 351.809 280.061,352.250 278.817,352.551 278.593 C 352.853 278.369,353.231 277.199,353.392 275.993 C 353.552 274.787,354.006 273.260,354.400 272.600 C 354.794 271.940,355.242 270.230,355.396 268.800 C 355.550 267.370,355.941 265.783,356.265 265.273 C 356.589 264.763,357.022 262.724,357.227 260.743 C 357.657 256.589,357.943 255.212,358.531 254.468 C 358.762 254.176,359.091 251.026,359.263 247.468 C 359.434 243.911,359.756 240.280,359.978 239.400 C 360.553 237.118,360.525 218.180,359.944 217.096 C 359.694 216.628,359.355 213.265,359.191 209.622 C 358.983 204.994,358.700 202.557,358.254 201.530 C 357.902 200.722,357.459 198.373,357.270 196.312 C 357.073 194.175,356.658 192.141,356.304 191.581 C 355.963 191.042,355.558 189.368,355.406 187.862 C 355.253 186.356,354.795 184.556,354.388 183.862 C 353.981 183.168,353.524 181.610,353.372 180.400 C 353.220 179.190,352.856 177.923,352.562 177.584 C 352.268 177.245,351.821 175.985,351.569 174.784 C 351.316 173.583,350.877 172.330,350.592 172.000 C 350.307 171.670,349.863 170.606,349.605 169.636 C 349.346 168.666,348.894 167.496,348.600 167.036 C 348.306 166.576,347.853 165.396,347.594 164.414 C 347.335 163.432,346.780 162.193,346.361 161.660 C 345.943 161.128,345.600 160.288,345.600 159.795 C 345.600 159.302,345.331 158.675,345.002 158.402 C 344.673 158.128,344.190 157.161,343.929 156.253 C 343.668 155.344,343.143 154.293,342.763 153.918 C 342.383 153.542,341.951 152.687,341.804 152.018 C 341.657 151.348,341.364 150.800,341.154 150.800 C 340.944 150.800,340.407 150.035,339.961 149.100 C 338.877 146.825,337.982 145.258,336.899 143.738 C 336.405 143.044,336.000 142.184,336.000 141.826 C 336.000 141.468,335.748 141.078,335.440 140.960 C 334.939 140.768,332.000 136.408,332.000 135.858 C 332.000 135.736,331.595 135.195,331.100 134.656 C 329.344 132.743,326.400 128.914,326.400 128.542 C 326.400 128.405,325.995 127.888,325.500 127.394 C 325.005 126.900,323.790 125.536,322.800 124.363 C 319.669 120.652,303.279 104.400,302.669 104.400 C 302.555 104.400,301.863 103.845,301.131 103.166 C 300.399 102.487,299.495 101.656,299.122 101.319 C 298.299 100.575,295.244 100.227,294.359 100.776 ", stroke: "none", fill: "#f8e243", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path1", d: "M185.600 79.432 C 185.270 79.557,184.640 79.817,184.200 80.011 C 183.760 80.205,182.410 80.450,181.200 80.555 C 179.990 80.659,176.750 80.941,174.000 81.181 C 171.250 81.421,168.311 81.888,167.468 82.218 C 166.626 82.549,164.826 82.926,163.468 83.057 C 162.018 83.197,160.278 83.688,159.250 84.248 C 158.287 84.771,157.159 85.200,156.742 85.200 C 156.326 85.200,154.697 85.650,153.123 86.200 C 151.549 86.750,149.787 87.200,149.208 87.200 C 148.629 87.200,147.545 87.650,146.800 88.200 C 146.055 88.750,145.219 89.200,144.943 89.200 C 144.668 89.200,143.596 89.650,142.562 90.200 C 141.527 90.750,140.268 91.200,139.764 91.200 C 139.260 91.200,138.744 91.367,138.618 91.571 C 138.492 91.775,136.996 92.606,135.294 93.418 C 133.592 94.230,131.930 95.054,131.600 95.249 C 131.270 95.444,130.052 96.075,128.892 96.652 C 127.733 97.229,126.688 97.858,126.569 98.050 C 126.450 98.243,126.017 98.400,125.607 98.400 C 125.197 98.400,124.353 98.819,123.731 99.330 C 123.109 99.842,121.525 100.868,120.210 101.611 C 118.896 102.353,117.546 103.182,117.210 103.451 C 114.925 105.284,111.097 108.000,110.799 108.000 C 110.601 108.000,110.296 108.231,110.120 108.514 C 109.944 108.797,108.630 109.859,107.200 110.875 C 105.770 111.891,103.980 113.370,103.222 114.161 C 102.463 114.952,101.722 115.600,101.573 115.600 C 101.164 115.600,90.800 125.847,90.800 126.251 C 90.800 126.445,89.997 127.233,89.015 128.002 C 88.033 128.771,87.223 129.609,87.215 129.865 C 87.207 130.121,86.255 131.313,85.100 132.515 C 81.894 135.852,81.200 136.675,81.200 137.141 C 81.200 137.376,80.390 138.563,79.400 139.779 C 78.410 140.994,77.600 142.086,77.600 142.204 C 77.600 142.523,74.973 146.284,74.236 147.021 C 73.886 147.371,73.600 147.852,73.600 148.091 C 73.600 148.329,73.189 149.081,72.686 149.762 C 72.184 150.443,71.558 151.495,71.295 152.100 C 71.032 152.705,70.648 153.200,70.440 153.200 C 70.233 153.200,69.949 153.721,69.809 154.359 C 69.669 154.996,69.204 155.834,68.776 156.222 C 68.347 156.610,67.810 157.618,67.583 158.464 C 67.355 159.309,67.003 160.000,66.800 160.000 C 66.597 160.000,66.239 160.712,66.005 161.582 C 65.771 162.452,65.298 163.444,64.956 163.787 C 64.613 164.130,64.150 165.083,63.927 165.905 C 63.703 166.727,63.289 167.670,63.007 168.000 C 62.724 168.330,62.197 169.635,61.835 170.900 C 61.474 172.165,61.003 173.200,60.789 173.200 C 60.575 173.200,60.394 173.515,60.387 173.900 C 60.380 174.285,60.008 175.590,59.561 176.800 C 59.115 178.010,58.503 179.962,58.202 181.139 C 57.901 182.315,57.397 183.575,57.083 183.939 C 56.769 184.302,56.287 186.040,56.013 187.800 C 55.739 189.560,55.366 191.281,55.184 191.624 C 55.002 191.966,54.576 193.836,54.237 195.778 C 53.899 197.719,53.306 199.779,52.921 200.354 C 52.369 201.179,52.177 202.584,52.011 207.000 C 51.843 211.453,51.655 212.814,51.092 213.642 C 49.895 215.403,50.156 245.158,51.384 247.032 C 51.716 247.538,52.086 249.518,52.246 251.645 C 52.426 254.028,52.781 255.808,53.231 256.585 C 53.640 257.293,54.048 259.135,54.208 261.000 C 54.359 262.760,54.744 264.615,55.065 265.122 C 55.385 265.629,55.904 267.386,56.218 269.027 C 56.532 270.668,57.044 272.413,57.356 272.905 C 57.668 273.397,58.047 274.736,58.197 275.880 C 58.347 277.024,58.714 278.163,59.013 278.411 C 59.312 278.659,59.780 279.883,60.053 281.131 C 60.326 282.379,60.785 283.544,61.073 283.719 C 61.361 283.894,61.710 284.744,61.848 285.608 C 61.986 286.472,62.527 287.758,63.049 288.467 C 63.572 289.176,64.000 290.148,64.000 290.629 C 64.000 291.109,64.261 291.718,64.580 291.983 C 64.898 292.248,65.374 293.125,65.638 293.932 C 65.901 294.739,66.450 295.829,66.858 296.354 C 67.266 296.879,67.600 297.619,67.600 298.000 C 67.600 298.381,67.966 299.158,68.414 299.727 C 68.862 300.297,69.420 301.311,69.653 301.981 C 69.887 302.652,70.232 303.200,70.420 303.200 C 70.609 303.200,71.140 303.965,71.601 304.900 C 72.929 307.592,73.933 309.310,74.325 309.565 C 74.525 309.694,74.965 310.340,75.303 311.001 C 75.641 311.661,76.297 312.544,76.759 312.963 C 77.222 313.382,77.600 313.876,77.600 314.062 C 77.600 314.248,77.873 314.715,78.207 315.100 C 79.937 317.096,81.200 318.737,81.200 318.989 C 81.200 319.145,82.010 320.221,83.000 321.379 C 83.990 322.538,84.800 323.709,84.800 323.980 C 84.800 324.252,85.978 325.652,87.418 327.092 C 88.859 328.533,90.281 330.183,90.580 330.761 C 91.237 332.031,97.393 338.000,98.046 338.000 C 98.301 338.000,99.611 339.132,100.955 340.516 C 103.491 343.125,106.055 345.200,106.744 345.200 C 106.963 345.200,107.488 345.640,107.911 346.177 C 109.306 347.952,113.051 347.438,113.178 345.455 C 113.190 345.265,113.659 344.545,114.220 343.855 C 118.007 339.193,119.200 337.650,119.200 337.415 C 119.200 336.913,121.798 334.014,122.254 334.007 C 122.504 334.003,122.996 333.395,123.347 332.655 C 123.698 331.915,124.259 331.083,124.593 330.806 C 124.927 330.529,125.200 330.131,125.200 329.922 C 125.200 329.389,129.614 324.080,130.265 323.830 C 130.559 323.717,130.800 323.243,130.800 322.776 C 130.800 321.897,130.973 321.638,134.620 317.067 C 135.819 315.564,136.800 314.202,136.800 314.041 C 136.800 313.880,137.610 313.142,138.600 312.400 C 139.590 311.658,140.400 310.815,140.400 310.526 C 140.400 310.237,140.715 309.673,141.100 309.274 C 142.673 307.643,144.400 305.208,144.400 304.622 C 144.400 304.278,146.001 302.397,147.957 300.443 C 152.748 295.656,154.334 296.000,127.481 295.998 C 104.085 295.995,102.661 295.895,102.242 294.224 C 101.912 292.910,102.194 292.395,104.005 291.000 C 104.862 290.340,105.571 289.570,105.581 289.290 C 105.592 289.010,106.140 288.672,106.800 288.540 C 107.460 288.408,108.000 288.052,108.000 287.750 C 108.000 287.447,108.270 287.200,108.600 287.200 C 108.930 287.200,109.200 287.046,109.200 286.858 C 109.200 286.671,109.688 285.996,110.285 285.358 C 110.881 284.721,111.426 283.846,111.495 283.413 C 111.693 282.182,112.625 280.982,114.669 279.327 C 117.086 277.370,125.183 269.126,125.205 268.600 C 125.228 268.054,127.915 265.200,128.405 265.200 C 128.622 265.200,128.801 265.065,128.803 264.900 C 128.804 264.735,129.479 263.922,130.303 263.094 C 131.840 261.548,132.654 260.827,135.597 258.400 C 138.076 256.357,138.800 255.533,138.800 254.759 C 138.800 253.895,147.593 244.800,148.429 244.800 C 149.393 244.800,151.420 242.442,152.872 239.631 C 154.126 237.204,155.106 236.269,157.500 235.216 C 157.995 234.998,158.400 234.570,158.400 234.264 C 158.400 233.585,162.328 229.427,163.300 229.077 C 163.685 228.938,164.000 228.562,164.000 228.240 C 164.000 227.917,164.345 227.544,164.767 227.411 C 165.188 227.277,165.710 226.661,165.925 226.043 C 166.256 225.094,169.472 221.500,174.285 216.700 C 174.892 216.095,175.672 215.600,176.019 215.600 C 176.906 215.600,178.935 213.377,179.013 212.320 C 179.049 211.833,179.841 210.782,180.782 209.971 C 182.751 208.276,182.944 205.630,181.060 206.178 C 180.587 206.315,170.171 206.414,157.913 206.396 C 138.296 206.369,135.511 206.440,134.667 206.993 C 133.174 207.971,131.488 207.203,131.846 205.706 C 132.183 204.295,132.660 203.698,133.719 203.362 C 134.184 203.215,135.234 202.398,136.051 201.547 C 136.868 200.696,137.633 200.000,137.750 200.000 C 137.867 200.000,138.736 199.219,139.681 198.264 C 140.627 197.310,141.873 196.412,142.451 196.269 C 143.029 196.126,143.798 195.557,144.160 195.005 C 144.522 194.452,145.000 194.000,145.223 194.000 C 145.754 194.000,148.400 191.346,148.400 190.813 C 148.400 190.586,148.813 190.400,149.317 190.400 C 149.875 190.400,150.925 189.696,152.000 188.600 C 152.972 187.610,153.972 186.800,154.222 186.800 C 154.473 186.800,156.039 185.495,157.703 183.900 C 160.696 181.031,161.060 180.731,163.400 179.207 C 165.376 177.921,166.379 177.095,168.343 175.136 C 169.556 173.926,170.631 173.224,171.406 173.136 C 172.063 173.061,172.559 172.788,172.510 172.529 C 172.460 172.270,172.955 171.821,173.610 171.532 C 174.264 171.242,174.800 170.783,174.800 170.513 C 174.800 170.242,175.340 169.741,176.000 169.400 C 176.660 169.059,177.200 168.600,177.200 168.380 C 177.200 168.160,177.635 167.815,178.166 167.613 C 178.697 167.411,179.249 166.876,179.393 166.423 C 179.536 165.970,179.938 165.600,180.285 165.600 C 180.632 165.600,181.295 165.226,181.758 164.769 C 182.872 163.669,185.636 161.600,185.991 161.600 C 186.145 161.600,186.477 161.150,186.727 160.600 C 186.987 160.030,187.519 159.600,187.964 159.600 C 188.395 159.600,188.860 159.240,189.000 158.800 C 189.144 158.347,189.605 158.000,190.064 158.000 C 190.521 158.000,190.961 157.672,191.071 157.249 C 191.270 156.489,192.751 155.600,193.819 155.600 C 194.138 155.600,194.400 155.333,194.400 155.008 C 194.400 154.682,194.850 154.302,195.400 154.164 C 196.031 154.006,196.400 153.631,196.400 153.148 C 196.400 152.720,196.841 152.182,197.400 151.927 C 197.950 151.677,198.400 151.230,198.400 150.936 C 198.400 150.641,198.658 150.400,198.973 150.400 C 199.288 150.400,199.930 149.860,200.400 149.200 C 200.870 148.540,201.562 148.000,201.938 148.000 C 202.314 148.000,202.915 147.685,203.273 147.300 C 203.630 146.915,204.575 146.060,205.371 145.400 C 206.167 144.740,207.710 143.345,208.800 142.300 C 209.891 141.255,211.057 140.400,211.391 140.400 C 211.726 140.400,212.000 140.224,212.000 140.008 C 212.000 139.793,212.720 139.249,213.600 138.800 C 214.480 138.351,215.200 137.803,215.200 137.582 C 215.200 137.361,215.667 137.002,216.239 136.785 C 216.810 136.568,217.371 136.033,217.485 135.595 C 217.600 135.158,217.922 134.800,218.201 134.800 C 218.480 134.800,219.003 134.350,219.363 133.800 C 219.724 133.250,220.291 132.800,220.624 132.800 C 220.957 132.800,222.076 131.988,223.112 130.996 C 224.147 130.004,225.294 129.097,225.661 128.981 C 226.028 128.864,226.619 128.326,226.973 127.784 C 227.328 127.243,227.841 126.800,228.113 126.800 C 228.385 126.800,228.832 126.440,229.107 126.000 C 229.382 125.560,229.965 125.200,230.403 125.200 C 230.856 125.200,231.200 124.932,231.200 124.580 C 231.200 124.238,231.785 123.713,232.500 123.411 C 233.215 123.110,235.109 121.581,236.710 120.014 C 238.310 118.447,239.797 117.274,240.013 117.408 C 240.540 117.734,242.066 117.230,241.809 116.815 C 241.698 116.635,242.010 116.223,242.503 115.899 C 243.905 114.979,246.000 112.922,246.000 112.466 C 246.000 112.240,246.344 111.945,246.764 111.811 C 247.185 111.678,247.819 111.126,248.173 110.584 C 248.528 110.043,249.191 109.600,249.647 109.600 C 250.138 109.600,250.560 109.275,250.684 108.800 C 250.799 108.360,251.132 108.000,251.424 108.000 C 251.716 108.000,252.190 107.685,252.477 107.300 C 252.765 106.915,253.494 106.345,254.097 106.034 C 254.701 105.722,255.470 105.047,255.807 104.534 C 256.143 104.020,256.641 103.600,256.913 103.600 C 257.185 103.600,257.632 103.240,257.907 102.800 C 258.182 102.360,258.679 102.000,259.012 102.000 C 259.345 102.000,259.822 101.550,260.073 101.000 C 260.370 100.348,260.854 100.000,261.464 100.000 C 262.015 100.000,262.400 99.761,262.400 99.420 C 262.400 99.101,262.649 98.696,262.953 98.520 C 264.002 97.912,266.800 95.495,266.800 95.196 C 266.800 95.030,265.450 94.228,263.800 93.413 C 262.150 92.598,260.800 91.766,260.800 91.565 C 260.800 91.364,260.305 91.193,259.700 91.184 C 259.095 91.175,257.610 90.635,256.400 89.984 C 255.190 89.333,253.819 88.800,253.354 88.800 C 252.889 88.800,252.079 88.467,251.554 88.060 C 251.029 87.653,249.838 87.220,248.907 87.099 C 247.976 86.977,246.446 86.510,245.507 86.061 C 244.568 85.612,242.630 85.071,241.200 84.859 C 239.770 84.647,237.790 84.191,236.800 83.846 C 231.700 82.070,225.613 80.821,221.989 80.807 C 220.958 80.803,219.769 80.513,219.228 80.135 C 218.274 79.466,187.232 78.818,185.600 79.432 M286.100 110.203 C 285.385 111.173,284.800 112.103,284.800 112.269 C 284.800 112.436,284.449 112.938,284.019 113.386 C 282.066 115.422,281.345 116.299,280.080 118.179 C 278.581 120.406,276.271 122.800,275.620 122.800 C 275.389 122.800,275.200 123.184,275.200 123.654 C 275.200 124.124,274.795 124.901,274.300 125.382 C 273.485 126.173,272.814 127.172,271.278 129.880 C 270.991 130.386,270.595 130.800,270.398 130.800 C 269.950 130.800,267.604 133.276,267.602 133.752 C 267.601 133.945,267.015 134.778,266.300 135.602 C 265.585 136.427,264.640 137.581,264.200 138.167 C 263.462 139.151,261.064 141.907,258.902 144.257 C 258.408 144.793,257.728 145.765,257.392 146.416 C 257.055 147.067,256.598 147.600,256.377 147.600 C 256.156 147.600,255.854 147.915,255.706 148.300 C 255.385 149.138,253.239 152.384,252.514 153.129 C 252.232 153.419,252.000 153.817,252.000 154.012 C 252.000 154.208,251.517 154.816,250.926 155.363 C 249.957 156.262,249.900 156.463,250.343 157.436 L 250.834 158.513 269.917 158.254 C 280.413 158.112,291.880 157.955,295.400 157.906 L 301.800 157.815 301.918 159.013 C 302.045 160.295,299.199 163.421,295.920 165.603 C 295.106 166.145,294.332 167.041,294.201 167.594 C 294.071 168.147,292.757 169.793,291.282 171.252 C 289.807 172.710,288.420 174.117,288.200 174.378 C 287.980 174.640,286.630 175.988,285.200 177.374 C 282.333 180.154,281.949 180.599,281.189 182.025 C 280.632 183.071,275.257 188.400,274.759 188.400 C 274.174 188.400,271.209 191.812,271.204 192.490 C 271.202 192.870,270.531 193.770,269.713 194.490 C 267.212 196.693,265.200 198.751,265.200 199.107 C 265.200 199.294,264.525 199.753,263.700 200.129 C 261.098 201.314,259.600 202.996,259.600 204.732 C 259.600 205.607,257.100 208.000,256.186 208.000 C 255.864 208.000,255.600 208.196,255.600 208.434 C 255.600 209.058,253.121 211.600,252.512 211.600 C 252.230 211.600,252.000 211.876,252.000 212.213 C 252.000 212.549,251.765 212.915,251.479 213.025 C 251.192 213.135,250.247 214.214,249.379 215.422 C 248.510 216.630,246.495 219.008,244.900 220.706 C 243.305 222.404,242.000 223.930,242.000 224.097 C 242.000 224.264,241.473 224.400,240.829 224.400 C 239.541 224.400,238.000 225.955,238.000 227.254 C 238.000 227.664,237.823 228.000,237.608 228.000 C 237.392 228.000,237.107 228.432,236.974 228.960 C 236.735 229.912,234.444 232.014,233.100 232.514 C 232.715 232.658,232.400 232.938,232.400 233.137 C 232.400 233.693,229.805 236.400,229.272 236.400 C 229.012 236.400,228.800 236.586,228.800 236.813 C 228.800 237.352,226.379 239.769,225.504 240.105 C 224.569 240.463,223.556 243.013,223.938 244.045 C 224.213 244.788,224.297 244.807,224.771 244.235 C 225.530 243.320,237.244 243.289,238.000 244.200 C 238.647 244.979,270.725 245.115,271.498 244.342 C 272.149 243.691,274.527 244.693,274.221 245.490 C 274.099 245.806,274.000 246.316,274.000 246.622 C 274.000 246.929,273.415 247.478,272.700 247.844 C 271.985 248.209,271.256 248.754,271.080 249.054 C 270.904 249.354,270.416 249.600,269.994 249.600 C 269.573 249.600,269.035 249.960,268.800 250.400 C 268.565 250.840,268.143 251.200,267.862 251.200 C 267.582 251.200,266.438 252.055,265.320 253.100 C 260.522 257.585,258.561 259.200,257.916 259.200 C 257.538 259.200,257.035 259.560,256.800 260.000 C 256.565 260.440,256.116 260.800,255.803 260.800 C 255.491 260.800,254.237 261.790,253.017 263.000 C 251.798 264.210,250.530 265.200,250.200 265.200 C 249.870 265.200,249.600 265.458,249.600 265.773 C 249.600 266.088,249.267 266.452,248.861 266.581 C 248.454 266.710,247.918 267.262,247.669 267.808 C 247.405 268.388,246.881 268.800,246.409 268.800 C 245.964 268.800,245.258 269.142,244.839 269.561 C 244.421 269.979,243.701 270.441,243.239 270.587 C 242.778 270.734,242.400 271.046,242.400 271.280 C 242.400 271.970,239.460 274.799,238.743 274.800 C 238.381 274.800,237.986 275.060,237.864 275.378 C 237.742 275.696,237.003 276.076,236.221 276.222 C 235.161 276.421,234.800 276.690,234.800 277.282 C 234.800 277.748,234.458 278.164,233.969 278.292 C 233.512 278.412,232.977 278.935,232.779 279.455 C 232.582 279.975,232.166 280.400,231.856 280.400 C 231.546 280.400,230.997 280.850,230.637 281.400 C 230.276 281.950,229.795 282.400,229.567 282.400 C 229.078 282.400,225.942 284.779,225.480 285.500 C 225.304 285.775,224.968 286.000,224.733 286.000 C 224.498 286.000,223.691 286.540,222.939 287.200 C 222.187 287.860,221.398 288.400,221.186 288.400 C 220.974 288.400,220.800 288.670,220.800 289.000 C 220.800 289.330,220.626 289.600,220.414 289.600 C 220.201 289.600,219.475 290.140,218.800 290.800 C 218.125 291.460,217.291 292.000,216.947 292.000 C 216.602 292.000,215.556 292.810,214.620 293.800 C 213.685 294.790,212.795 295.600,212.643 295.600 C 212.490 295.600,211.283 296.500,209.962 297.600 C 208.640 298.700,207.398 299.600,207.201 299.600 C 207.005 299.600,205.979 300.475,204.922 301.545 C 203.865 302.615,202.612 303.612,202.137 303.761 C 201.662 303.909,201.173 304.294,201.050 304.615 C 200.926 304.937,200.626 305.200,200.382 305.200 C 200.138 305.200,199.398 305.740,198.738 306.400 C 198.078 307.060,197.282 307.600,196.969 307.600 C 196.656 307.600,196.400 307.867,196.400 308.192 C 196.400 308.518,195.937 308.901,195.371 309.043 C 194.805 309.185,194.179 309.729,193.981 310.251 C 193.782 310.773,193.368 311.200,193.060 311.200 C 192.752 311.200,191.655 312.010,190.622 313.000 C 189.588 313.990,188.582 314.800,188.385 314.800 C 188.061 314.800,186.812 315.856,184.586 318.012 C 184.138 318.445,183.446 318.800,183.048 318.800 C 182.651 318.800,182.237 319.138,182.129 319.551 C 182.021 319.964,181.497 320.501,180.966 320.743 C 180.435 320.985,180.000 321.362,180.000 321.581 C 180.000 321.800,179.450 322.264,178.779 322.611 C 177.563 323.240,176.783 323.838,175.090 325.444 C 174.601 325.909,173.795 326.416,173.300 326.571 C 172.805 326.727,172.400 327.112,172.400 327.427 C 172.400 327.742,172.125 328.000,171.789 328.000 C 171.189 328.000,170.726 328.386,166.509 332.406 C 165.358 333.503,164.053 334.400,163.609 334.400 C 163.164 334.400,162.793 334.625,162.784 334.900 C 162.766 335.490,159.468 338.000,158.712 338.000 C 158.425 338.000,158.012 338.405,157.795 338.900 C 157.578 339.395,156.995 339.978,156.500 340.195 C 156.005 340.412,155.600 340.799,155.600 341.056 C 155.600 341.312,155.060 341.710,154.400 341.940 C 153.740 342.170,153.200 342.527,153.200 342.734 C 153.200 342.940,152.570 343.408,151.800 343.773 C 151.030 344.139,150.400 344.604,150.400 344.808 C 150.400 345.013,149.860 345.459,149.200 345.800 C 148.540 346.141,148.000 346.686,148.000 347.010 C 148.000 347.335,147.736 347.600,147.414 347.600 C 147.092 347.600,146.627 347.975,146.382 348.434 C 146.136 348.892,145.320 349.525,144.568 349.839 C 143.816 350.154,143.200 350.566,143.200 350.757 C 143.200 350.947,142.660 351.327,142.000 351.600 C 141.340 351.873,140.800 352.259,140.800 352.457 C 140.800 352.655,140.370 353.013,139.844 353.253 C 139.318 353.492,138.692 354.118,138.453 354.644 C 138.206 355.185,137.672 355.600,137.223 355.600 C 136.786 355.600,136.235 355.960,136.000 356.400 C 135.765 356.840,135.353 357.205,135.086 357.211 C 134.505 357.224,131.600 359.857,131.600 360.370 C 131.600 360.877,133.956 362.800,134.577 362.800 C 134.860 362.800,135.521 363.137,136.046 363.548 C 136.571 363.959,137.577 364.422,138.281 364.576 C 138.986 364.729,139.976 365.175,140.481 365.566 C 140.987 365.956,142.018 366.396,142.774 366.543 C 143.529 366.689,144.429 367.057,144.774 367.360 C 145.118 367.662,146.340 368.107,147.489 368.348 C 148.638 368.590,150.256 369.150,151.083 369.593 C 151.911 370.037,152.960 370.400,153.414 370.400 C 153.868 370.400,154.411 370.549,154.620 370.730 C 155.089 371.139,157.497 371.837,160.373 372.398 C 161.568 372.632,162.809 373.042,163.132 373.309 C 163.454 373.577,165.093 373.897,166.773 374.021 C 168.784 374.168,170.490 374.566,171.767 375.184 C 173.467 376.007,174.404 376.139,179.353 376.252 C 182.459 376.323,185.630 376.552,186.400 376.761 C 191.073 378.032,202.223 378.753,205.183 377.977 C 207.591 377.345,211.325 376.901,218.600 376.382 C 221.900 376.147,224.960 375.793,225.400 375.595 C 227.289 374.747,230.702 374.000,232.687 374.000 C 233.887 374.000,235.218 373.744,235.716 373.418 C 236.204 373.098,237.683 372.582,239.002 372.272 C 240.321 371.961,242.097 371.413,242.949 371.053 C 243.801 370.694,245.039 370.400,245.702 370.400 C 246.364 370.400,247.467 370.062,248.153 369.649 C 248.839 369.236,250.336 368.680,251.480 368.414 C 252.624 368.148,253.762 367.687,254.008 367.391 C 254.254 367.094,255.028 366.728,255.728 366.577 C 256.427 366.426,257.736 365.875,258.635 365.352 C 259.534 364.828,260.637 364.400,261.086 364.400 C 261.535 364.400,262.102 364.159,262.346 363.865 C 262.591 363.570,263.558 363.103,264.495 362.827 C 265.433 362.550,266.560 362.000,267.000 361.605 C 267.440 361.210,268.385 360.763,269.100 360.611 C 269.815 360.460,270.400 360.188,270.400 360.006 C 270.400 359.602,274.376 357.324,275.665 356.991 C 276.179 356.858,277.489 355.951,278.575 354.975 C 279.661 353.999,280.772 353.200,281.044 353.200 C 281.316 353.200,282.073 352.750,282.727 352.200 C 283.381 351.650,284.079 351.200,284.279 351.200 C 284.747 351.200,287.747 348.994,289.579 347.303 C 290.360 346.582,291.471 345.780,292.046 345.522 C 292.622 345.263,293.432 344.545,293.846 343.925 C 294.261 343.305,295.365 342.438,296.300 341.997 C 297.235 341.556,298.000 341.047,298.000 340.866 C 298.000 340.685,301.450 337.040,305.667 332.768 C 312.714 325.628,318.800 318.639,318.800 317.688 C 318.800 317.473,319.088 317.059,319.439 316.767 C 319.791 316.475,320.877 315.013,321.853 313.518 C 322.829 312.023,323.767 310.800,323.937 310.800 C 324.107 310.800,324.564 310.080,324.952 309.200 C 325.340 308.320,325.825 307.600,326.029 307.600 C 326.233 307.600,326.400 307.344,326.400 307.031 C 326.400 306.718,326.838 305.940,327.374 305.304 C 327.910 304.667,328.473 303.649,328.625 303.041 C 328.778 302.433,329.141 301.844,329.432 301.732 C 329.723 301.621,330.158 300.934,330.398 300.206 C 330.638 299.478,331.187 298.476,331.617 297.980 C 332.048 297.484,332.400 296.769,332.400 296.393 C 332.400 296.016,332.743 295.272,333.161 294.740 C 333.580 294.207,334.122 293.034,334.364 292.133 C 334.607 291.231,335.056 290.286,335.361 290.032 C 335.666 289.779,336.040 288.912,336.191 288.107 C 336.342 287.302,336.796 286.223,337.200 285.709 C 337.603 285.196,338.058 284.017,338.209 283.088 C 338.361 282.160,338.804 281.040,339.195 280.600 C 339.585 280.160,340.025 278.958,340.173 277.928 C 340.320 276.899,340.791 275.610,341.220 275.065 C 341.777 274.357,342.000 273.449,342.000 271.891 C 342.000 270.273,342.219 269.429,342.847 268.632 C 343.432 267.887,343.798 266.621,344.033 264.524 C 344.220 262.857,344.625 261.202,344.933 260.846 C 345.267 260.461,345.597 258.791,345.748 256.714 C 346.016 253.046,346.611 249.543,347.196 248.200 C 348.760 244.604,348.426 210.299,346.778 205.200 C 346.316 203.770,345.864 201.157,345.773 199.394 C 345.663 197.238,345.346 195.671,344.805 194.609 C 344.362 193.741,344.000 192.268,344.000 191.337 C 344.000 190.298,343.613 188.915,343.000 187.762 C 342.296 186.437,342.000 185.254,342.000 183.760 C 342.000 182.228,341.822 181.540,341.357 181.280 C 341.003 181.082,340.466 179.966,340.164 178.799 C 339.861 177.632,339.349 176.386,339.026 176.029 C 338.703 175.671,338.312 174.574,338.159 173.590 C 338.005 172.605,337.567 171.397,337.185 170.903 C 336.803 170.410,336.365 169.340,336.212 168.525 C 336.059 167.710,335.589 166.604,335.167 166.067 C 334.745 165.531,334.400 164.791,334.400 164.424 C 334.400 164.056,333.950 163.145,333.400 162.400 C 332.850 161.655,332.400 160.732,332.400 160.351 C 332.400 159.969,332.144 159.401,331.831 159.089 C 331.285 158.542,330.727 157.569,329.009 154.167 C 328.574 153.305,327.809 152.091,327.309 151.469 C 326.809 150.847,326.400 150.036,326.400 149.666 C 326.400 149.295,326.040 148.768,325.600 148.493 C 325.160 148.218,324.800 147.753,324.800 147.459 C 324.800 147.165,324.456 146.613,324.037 146.233 C 323.617 145.853,323.039 144.978,322.754 144.288 C 322.468 143.599,321.903 142.667,321.498 142.217 C 321.093 141.768,320.442 141.040,320.050 140.600 C 319.658 140.160,318.659 138.752,317.829 137.472 C 316.999 136.192,316.084 135.054,315.796 134.943 C 315.508 134.833,315.167 134.350,315.039 133.871 C 314.910 133.392,314.098 132.481,313.232 131.846 C 312.367 131.211,311.563 130.307,311.445 129.838 C 311.188 128.814,310.425 127.981,307.563 125.601 C 304.530 123.079,301.940 120.386,300.997 118.773 C 300.533 117.979,299.402 116.981,298.314 116.405 C 297.280 115.859,296.213 114.999,295.944 114.495 C 295.674 113.991,294.586 113.045,293.527 112.393 C 292.467 111.741,291.599 111.071,291.597 110.904 C 291.594 110.507,289.226 108.944,288.200 108.661 C 287.591 108.493,287.089 108.862,286.100 110.203 ", stroke: "none", fill: "#bc1b1c", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path2", d: "M343.700 29.865 C 343.425 29.976,343.200 30.396,343.200 30.798 C 343.200 31.339,342.786 31.600,341.617 31.797 C 340.579 31.972,339.952 32.321,339.798 32.807 C 339.668 33.215,339.166 33.606,338.681 33.675 C 338.121 33.754,337.753 34.128,337.672 34.700 C 337.580 35.351,337.276 35.600,336.572 35.600 C 335.802 35.600,335.600 35.808,335.600 36.600 C 335.600 37.400,335.400 37.600,334.600 37.600 C 333.874 37.600,333.600 37.815,333.600 38.382 C 333.600 38.960,333.232 39.233,332.190 39.428 C 331.415 39.574,330.558 40.010,330.286 40.399 C 330.014 40.787,329.433 41.173,328.996 41.256 C 328.538 41.344,328.146 41.789,328.072 42.304 C 327.980 42.951,327.674 43.200,326.972 43.200 C 326.202 43.200,326.000 43.408,326.000 44.200 C 326.000 45.000,325.800 45.200,325.000 45.200 C 324.200 45.200,324.000 45.400,324.000 46.200 C 324.000 46.980,323.795 47.200,323.070 47.200 C 322.558 47.200,321.717 47.650,321.200 48.200 C 320.683 48.750,319.842 49.200,319.330 49.200 C 318.678 49.200,318.400 49.431,318.400 49.972 C 318.400 50.468,318.078 50.790,317.500 50.872 C 316.922 50.954,316.554 51.322,316.472 51.900 C 316.380 52.551,316.076 52.800,315.372 52.800 C 314.602 52.800,314.400 53.008,314.400 53.800 C 314.400 54.572,314.194 54.800,313.495 54.800 C 312.940 54.800,312.437 55.148,312.195 55.700 C 311.926 56.312,311.352 56.664,310.400 56.800 C 309.328 56.953,308.970 57.211,308.872 57.900 C 308.780 58.551,308.476 58.800,307.772 58.800 C 307.078 58.800,306.800 59.021,306.800 59.572 C 306.800 60.068,306.478 60.390,305.900 60.472 C 305.322 60.554,304.954 60.922,304.872 61.500 C 304.780 62.151,304.476 62.400,303.772 62.400 C 303.009 62.400,302.800 62.609,302.800 63.372 C 302.800 64.076,302.551 64.380,301.900 64.472 C 301.322 64.554,300.954 64.922,300.872 65.500 C 300.762 66.279,300.505 66.400,298.972 66.400 C 297.349 66.400,297.200 66.484,297.200 67.400 C 297.200 68.200,297.000 68.400,296.200 68.400 C 295.479 68.400,295.200 68.615,295.200 69.172 C 295.200 69.668,294.878 69.990,294.300 70.072 C 293.730 70.153,293.354 70.521,293.275 71.075 C 293.198 71.621,292.821 71.998,292.275 72.075 C 291.729 72.153,291.353 72.530,291.275 73.078 C 291.173 73.799,290.849 73.978,289.475 74.078 C 288.087 74.179,287.778 74.354,287.672 75.100 C 287.580 75.751,287.276 76.000,286.572 76.000 C 285.802 76.000,285.600 76.208,285.600 77.000 C 285.600 77.800,285.400 78.000,284.600 78.000 C 283.879 78.000,283.600 78.215,283.600 78.772 C 283.600 79.268,283.278 79.590,282.700 79.672 C 282.122 79.754,281.754 80.122,281.672 80.700 C 281.563 81.470,281.302 81.600,279.867 81.600 C 278.511 81.600,278.114 81.427,277.795 80.700 C 277.490 80.005,277.013 79.772,275.700 79.677 C 274.326 79.578,274.000 79.405,274.000 78.777 C 274.000 78.111,273.714 78.000,272.000 78.000 C 270.133 78.000,270.000 77.933,270.000 77.000 C 270.000 76.080,269.854 76.000,268.187 76.000 C 266.826 76.000,266.311 75.826,266.117 75.300 C 265.717 74.216,265.179 74.013,262.700 74.006 C 260.515 74.000,260.400 73.950,260.400 73.000 C 260.400 72.067,260.267 72.000,258.400 72.000 C 256.711 72.000,256.400 71.883,256.400 71.250 C 256.400 70.428,255.029 70.000,252.397 70.000 C 251.230 70.000,250.846 69.821,250.684 69.200 C 250.494 68.474,250.138 68.400,246.837 68.400 C 243.224 68.400,243.200 68.393,243.200 67.400 C 243.200 66.404,243.185 66.400,239.428 66.400 C 235.820 66.400,235.650 66.361,235.528 65.500 C 235.403 64.621,235.267 64.597,229.726 64.489 C 224.207 64.381,224.049 64.354,223.926 63.489 L 223.800 62.600 199.000 62.600 L 174.200 62.600 174.074 63.489 C 173.951 64.352,173.786 64.381,168.474 64.489 C 163.168 64.597,162.996 64.627,162.874 65.485 C 162.756 66.316,162.521 66.378,159.074 66.485 C 155.702 66.591,155.367 66.674,155.005 67.500 C 154.652 68.306,154.327 68.400,151.905 68.400 C 149.487 68.400,149.200 68.483,149.200 69.182 C 149.200 69.876,148.872 69.978,146.300 70.082 C 143.639 70.190,143.389 70.274,143.272 71.100 C 143.162 71.876,142.904 72.000,141.398 72.000 C 139.217 72.000,137.600 72.592,137.600 73.390 C 137.600 73.855,137.126 74.000,135.600 74.000 C 133.733 74.000,133.600 74.067,133.600 75.000 C 133.600 75.919,133.453 76.000,131.800 76.000 C 130.147 76.000,130.000 76.081,130.000 77.000 C 130.000 77.966,129.909 78.000,127.363 78.000 C 125.087 78.000,124.697 78.107,124.522 78.777 C 124.398 79.252,123.907 79.602,123.259 79.677 C 122.513 79.764,122.162 80.066,122.072 80.700 C 121.962 81.479,121.705 81.600,120.172 81.600 C 118.549 81.600,118.400 81.684,118.400 82.600 C 118.400 83.533,118.267 83.600,116.400 83.600 C 114.533 83.600,114.400 83.667,114.400 84.600 C 114.400 85.519,114.253 85.600,112.600 85.600 C 110.947 85.600,110.800 85.681,110.800 86.600 C 110.800 87.400,110.600 87.600,109.800 87.600 C 109.067 87.600,108.800 87.813,108.800 88.400 C 108.800 89.005,108.532 89.201,107.700 89.205 C 105.844 89.215,104.800 89.651,104.800 90.419 C 104.800 90.867,104.456 91.193,103.900 91.272 C 103.339 91.352,102.954 91.721,102.878 92.252 C 102.786 92.901,102.386 93.164,101.205 93.353 C 100.139 93.523,99.574 93.851,99.400 94.400 C 99.238 94.911,98.795 95.200,98.173 95.200 C 97.402 95.200,97.200 95.407,97.200 96.200 C 97.200 97.000,97.000 97.200,96.200 97.200 C 95.479 97.200,95.200 97.415,95.200 97.972 C 95.200 98.468,94.878 98.790,94.300 98.872 C 93.722 98.954,93.354 99.322,93.272 99.900 C 93.179 100.557,92.876 100.800,92.154 100.800 C 91.609 100.800,90.728 101.236,90.196 101.768 C 89.663 102.300,88.906 102.797,88.514 102.872 C 88.121 102.947,87.744 103.400,87.675 103.879 C 87.598 104.421,87.219 104.798,86.675 104.875 C 86.121 104.954,85.753 105.330,85.672 105.900 C 85.580 106.551,85.276 106.800,84.572 106.800 C 83.887 106.800,83.600 107.022,83.600 107.553 C 83.600 107.979,83.239 108.401,82.770 108.524 C 82.314 108.643,81.843 109.114,81.724 109.570 C 81.601 110.039,81.179 110.400,80.753 110.400 C 80.222 110.400,80.000 110.687,80.000 111.372 C 80.000 112.076,79.751 112.380,79.100 112.472 C 78.530 112.553,78.154 112.921,78.075 113.475 C 77.998 114.021,77.621 114.398,77.075 114.475 C 76.530 114.553,76.153 114.930,76.075 115.475 C 75.998 116.021,75.621 116.398,75.075 116.475 C 74.358 116.577,74.178 116.903,74.078 118.275 C 73.978 119.649,73.799 119.973,73.078 120.075 C 72.521 120.154,72.153 120.529,72.072 121.100 C 71.990 121.678,71.668 122.000,71.172 122.000 C 70.615 122.000,70.400 122.279,70.400 123.000 C 70.400 123.800,70.200 124.000,69.400 124.000 C 68.608 124.000,68.400 124.202,68.400 124.972 C 68.400 125.676,68.151 125.980,67.500 126.072 C 66.752 126.178,66.579 126.487,66.477 127.900 C 66.368 129.402,66.240 129.600,65.377 129.600 C 64.609 129.600,64.400 129.808,64.400 130.572 C 64.400 131.276,64.151 131.580,63.500 131.672 C 62.921 131.754,62.554 132.122,62.472 132.701 C 62.402 133.196,62.013 133.779,61.608 133.996 C 61.176 134.227,60.760 135.052,60.601 135.995 C 60.395 137.214,60.146 137.600,59.565 137.600 C 58.925 137.600,58.800 137.894,58.800 139.400 C 58.800 141.053,58.719 141.200,57.800 141.200 C 57.008 141.200,56.800 141.402,56.800 142.172 C 56.800 142.876,56.551 143.180,55.900 143.272 C 55.134 143.381,54.982 143.679,54.879 145.275 C 54.777 146.856,54.621 147.169,53.879 147.275 C 53.155 147.378,52.978 147.700,52.877 149.100 C 52.780 150.434,52.597 150.800,52.024 150.800 C 51.251 150.800,50.815 151.839,50.805 153.700 C 50.801 154.532,50.605 154.800,50.000 154.800 C 49.321 154.800,49.200 155.067,49.200 156.557 C 49.200 158.097,49.077 158.344,48.200 158.564 C 47.319 158.785,47.200 159.029,47.200 160.608 C 47.200 161.915,47.041 162.400,46.614 162.400 C 45.729 162.400,45.200 163.722,45.200 165.930 C 45.200 167.712,45.098 167.939,44.200 168.164 C 43.273 168.397,43.200 168.590,43.200 170.798 C 43.200 172.899,43.081 173.259,42.200 173.837 C 41.306 174.422,41.200 174.763,41.200 177.046 C 41.200 179.333,41.116 179.600,40.400 179.600 C 39.672 179.600,39.600 179.867,39.600 182.572 C 39.600 185.350,39.541 185.553,38.700 185.672 C 37.833 185.795,37.796 185.970,37.687 190.500 L 37.575 195.200 36.587 195.200 L 35.600 195.200 35.600 201.000 C 35.600 206.515,35.561 206.800,34.808 206.800 C 33.591 206.800,33.571 207.191,33.689 228.600 L 33.800 248.600 34.700 248.728 C 35.590 248.854,35.600 248.924,35.600 255.238 L 35.600 261.620 36.585 261.994 C 37.521 262.350,37.575 262.552,37.685 266.084 C 37.794 269.593,37.850 269.807,38.700 269.928 C 39.557 270.050,39.600 270.226,39.600 273.665 C 39.600 276.938,39.675 277.294,40.400 277.484 C 41.021 277.646,41.200 278.030,41.200 279.197 C 41.200 281.693,41.628 283.114,42.443 283.327 C 43.070 283.491,43.200 283.903,43.200 285.734 C 43.200 287.831,43.834 289.200,44.807 289.200 C 44.999 289.200,45.211 290.055,45.278 291.100 C 45.382 292.721,45.532 293.019,46.300 293.128 C 47.079 293.238,47.200 293.495,47.200 295.028 C 47.200 296.651,47.284 296.800,48.200 296.800 C 49.166 296.800,49.200 296.891,49.200 299.437 C 49.200 301.692,49.310 302.104,49.960 302.274 C 50.507 302.417,50.796 302.979,50.991 304.282 C 51.188 305.593,51.474 306.147,52.031 306.292 C 52.518 306.420,52.800 306.843,52.800 307.447 C 52.800 308.191,53.014 308.400,53.778 308.400 C 54.661 308.400,54.768 308.585,54.878 310.300 C 54.982 311.921,55.132 312.219,55.900 312.328 C 56.679 312.438,56.800 312.695,56.800 314.228 C 56.800 315.851,56.884 316.000,57.800 316.000 C 58.600 316.000,58.800 316.200,58.800 317.000 C 58.800 317.733,59.013 318.000,59.600 318.000 C 60.226 318.000,60.400 318.267,60.400 319.226 C 60.400 320.747,61.039 322.000,61.814 322.000 C 62.136 322.000,62.400 322.360,62.400 322.800 C 62.400 323.382,62.667 323.600,63.378 323.600 C 64.261 323.600,64.368 323.785,64.478 325.500 C 64.582 327.121,64.732 327.419,65.500 327.528 C 66.151 327.620,66.400 327.924,66.400 328.628 C 66.400 329.398,66.608 329.600,67.400 329.600 C 68.192 329.600,68.400 329.802,68.400 330.572 C 68.400 331.276,68.649 331.580,69.300 331.672 C 70.048 331.778,70.221 332.087,70.323 333.500 C 70.421 334.851,70.600 335.200,71.195 335.200 C 71.668 335.200,71.992 335.533,72.072 336.100 C 72.153 336.670,72.521 337.046,73.075 337.125 C 73.621 337.202,73.998 337.579,74.075 338.125 C 74.153 338.670,74.530 339.047,75.075 339.125 C 75.621 339.202,75.998 339.579,76.075 340.125 C 76.154 340.679,76.530 341.047,77.100 341.128 C 77.678 341.210,78.000 341.532,78.000 342.028 C 78.000 342.585,78.279 342.800,79.000 342.800 C 79.800 342.800,80.000 343.000,80.000 343.800 C 80.000 344.521,80.215 344.800,80.772 344.800 C 81.268 344.800,81.590 345.122,81.672 345.700 C 81.754 346.278,82.122 346.646,82.700 346.728 C 83.351 346.820,83.600 347.124,83.600 347.828 C 83.600 348.591,83.809 348.800,84.572 348.800 C 85.276 348.800,85.580 349.049,85.672 349.700 C 85.754 350.278,86.122 350.646,86.700 350.728 C 87.278 350.810,87.600 351.132,87.600 351.628 C 87.600 352.185,87.879 352.400,88.600 352.400 C 89.400 352.400,89.600 352.600,89.600 353.400 C 89.600 354.121,89.815 354.400,90.372 354.400 C 90.868 354.400,91.190 354.722,91.272 355.300 C 91.349 355.844,91.721 356.246,92.212 356.316 C 92.659 356.380,93.199 356.830,93.412 357.316 C 93.709 357.993,94.198 358.229,95.500 358.323 L 97.200 358.446 97.200 360.423 C 97.200 362.265,97.132 362.400,96.200 362.400 C 95.452 362.400,95.200 362.611,95.200 363.237 C 95.200 363.740,94.878 364.159,94.396 364.285 C 93.953 364.401,93.484 364.924,93.352 365.448 C 93.221 365.972,92.862 366.400,92.555 366.400 C 92.232 366.400,91.795 367.157,91.516 368.200 C 91.172 369.485,90.829 370.000,90.317 370.000 C 89.824 370.000,89.600 370.304,89.600 370.972 C 89.600 371.676,89.351 371.980,88.700 372.072 C 88.122 372.154,87.754 372.522,87.672 373.100 C 87.602 373.595,87.292 374.000,86.982 374.000 C 86.673 374.000,86.164 374.495,85.851 375.101 C 85.538 375.706,84.903 376.544,84.441 376.963 C 83.978 377.382,83.600 378.146,83.600 378.662 C 83.600 379.333,83.373 379.600,82.800 379.600 C 82.263 379.600,82.000 379.867,82.000 380.410 C 82.000 380.906,81.612 381.367,81.000 381.600 C 80.403 381.827,80.000 382.296,80.000 382.763 C 80.000 383.195,79.641 383.660,79.200 383.800 C 78.651 383.974,78.323 384.539,78.153 385.605 C 77.964 386.786,77.701 387.186,77.052 387.278 C 76.521 387.354,76.152 387.739,76.072 388.300 C 75.991 388.875,75.668 389.200,75.180 389.200 C 74.704 389.200,74.323 389.567,74.172 390.171 C 74.037 390.705,73.680 391.237,73.377 391.354 C 73.073 391.470,72.558 392.206,72.231 392.988 C 71.904 393.771,71.358 394.518,71.018 394.648 C 70.678 394.779,70.400 395.304,70.400 395.815 C 70.400 396.474,70.138 396.782,69.500 396.872 C 68.922 396.954,68.554 397.322,68.472 397.900 C 68.402 398.395,68.083 398.800,67.764 398.800 C 67.444 398.800,66.962 399.288,66.691 399.885 C 66.421 400.482,65.795 401.408,65.300 401.943 C 64.805 402.479,64.400 403.251,64.400 403.658 C 64.400 404.131,64.113 404.400,63.608 404.400 C 63.094 404.400,62.726 404.755,62.562 405.411 C 62.422 405.966,61.969 406.603,61.554 406.825 C 61.139 407.047,60.800 407.426,60.800 407.668 C 60.800 407.910,60.395 408.512,59.900 409.005 C 56.968 411.927,56.800 412.264,56.800 415.222 L 56.800 418.030 60.500 417.915 C 63.992 417.806,64.207 417.749,64.328 416.900 C 64.420 416.249,64.724 416.000,65.428 416.000 C 66.198 416.000,66.400 415.792,66.400 415.000 C 66.400 414.200,66.600 414.000,67.400 414.000 C 68.200 414.000,68.400 413.800,68.400 413.000 C 68.400 412.127,68.575 412.000,69.777 412.000 C 70.665 412.000,71.341 411.736,71.677 411.257 C 71.965 410.849,72.605 410.387,73.100 410.230 C 73.610 410.069,74.000 409.623,74.000 409.201 C 74.000 408.733,74.334 408.408,74.900 408.328 C 75.470 408.247,75.846 407.879,75.925 407.325 C 76.002 406.779,76.379 406.402,76.925 406.325 C 77.461 406.248,77.847 405.870,77.922 405.348 C 78.014 404.699,78.414 404.436,79.595 404.247 C 80.661 404.077,81.226 403.749,81.400 403.200 C 81.562 402.689,82.005 402.400,82.627 402.400 C 83.322 402.400,83.600 402.179,83.600 401.628 C 83.600 401.132,83.922 400.810,84.500 400.728 C 85.070 400.647,85.446 400.279,85.525 399.725 C 85.602 399.179,85.979 398.802,86.525 398.725 C 87.079 398.646,87.447 398.270,87.528 397.700 C 87.613 397.098,87.930 396.800,88.482 396.800 C 88.936 396.800,89.725 396.350,90.235 395.800 C 90.756 395.238,91.608 394.800,92.181 394.800 C 93.001 394.800,93.200 394.605,93.200 393.800 C 93.200 393.000,93.400 392.800,94.200 392.800 C 94.921 392.800,95.200 392.585,95.200 392.028 C 95.200 391.532,95.522 391.210,96.100 391.128 C 96.670 391.047,97.046 390.679,97.125 390.125 C 97.202 389.579,97.579 389.202,98.125 389.125 C 98.671 389.047,99.047 388.670,99.125 388.122 C 99.227 387.401,99.551 387.222,100.925 387.122 C 102.313 387.021,102.622 386.846,102.728 386.100 C 102.820 385.449,103.124 385.200,103.828 385.200 C 104.598 385.200,104.800 384.992,104.800 384.200 C 104.800 383.400,105.000 383.200,105.800 383.200 C 106.600 383.200,106.800 383.000,106.800 382.200 C 106.800 381.400,107.000 381.200,107.800 381.200 C 108.533 381.200,108.800 380.987,108.800 380.400 C 108.800 379.783,109.067 379.600,109.967 379.600 C 111.655 379.600,112.400 379.219,112.400 378.357 C 112.400 377.816,112.686 377.600,113.400 377.600 C 114.200 377.600,114.400 377.400,114.400 376.600 C 114.400 375.800,114.600 375.600,115.400 375.600 C 116.200 375.600,116.400 375.400,116.400 374.600 C 116.400 373.667,116.533 373.600,118.400 373.600 C 120.267 373.600,120.400 373.667,120.400 374.600 C 120.400 375.519,120.547 375.600,122.200 375.600 C 123.853 375.600,124.000 375.681,124.000 376.600 C 124.000 377.533,124.133 377.600,126.000 377.600 C 127.867 377.600,128.000 377.667,128.000 378.600 C 128.000 379.519,128.147 379.600,129.800 379.600 C 131.333 379.600,131.600 379.719,131.600 380.400 C 131.600 381.093,131.867 381.200,133.600 381.200 C 135.467 381.200,135.600 381.267,135.600 382.200 C 135.600 383.170,135.682 383.200,138.372 383.200 C 140.942 383.200,141.154 383.266,141.272 384.100 C 141.380 384.861,141.681 385.018,143.213 385.118 C 144.634 385.211,145.110 385.427,145.413 386.118 C 145.763 386.915,146.133 387.011,149.274 387.115 C 152.513 387.223,152.757 387.290,152.874 388.115 C 152.989 388.922,153.254 389.010,155.900 389.118 C 158.398 389.219,158.800 389.336,158.800 389.965 C 158.800 390.868,160.448 391.189,165.100 391.196 C 168.132 391.200,168.400 391.265,168.400 392.000 C 168.400 392.772,168.667 392.800,175.972 392.800 C 183.520 392.800,183.545 392.803,183.672 393.700 L 183.800 394.600 200.100 394.704 L 216.400 394.809 216.400 393.804 L 216.400 392.800 223.037 392.800 C 229.303 392.800,229.686 392.756,229.881 392.013 C 230.068 391.298,230.498 391.215,234.543 391.113 C 238.706 391.007,239.026 390.942,239.389 390.114 C 239.740 389.314,240.107 389.218,243.189 389.114 C 246.288 389.010,246.636 388.918,246.995 388.100 C 247.348 387.294,247.673 387.200,250.095 387.200 C 252.701 387.200,252.800 387.164,252.800 386.218 C 252.800 385.275,252.919 385.230,255.700 385.118 C 258.343 385.010,258.611 384.922,258.726 384.118 C 258.839 383.323,259.115 383.224,261.526 383.118 C 263.953 383.011,264.212 382.917,264.328 382.100 C 264.439 381.318,264.693 381.200,266.265 381.200 C 267.722 381.200,268.115 381.048,268.279 380.421 C 268.432 379.835,268.893 379.612,270.141 379.521 C 271.512 379.421,271.822 379.244,271.928 378.500 C 272.041 377.706,272.287 377.600,274.028 377.600 C 275.853 377.600,276.000 377.527,276.000 376.622 C 276.000 375.739,276.185 375.632,277.900 375.522 C 279.521 375.418,279.819 375.268,279.928 374.500 C 280.038 373.721,280.295 373.600,281.828 373.600 C 283.451 373.600,283.600 373.516,283.600 372.600 C 283.600 371.800,283.800 371.600,284.600 371.600 C 285.324 371.600,285.600 371.385,285.600 370.822 C 285.600 370.177,285.926 370.023,287.500 369.922 C 289.121 369.818,289.419 369.668,289.528 368.900 C 289.621 368.241,289.923 368.000,290.654 368.000 C 291.971 368.000,293.200 367.317,293.200 366.586 C 293.200 366.228,293.588 366.000,294.200 366.000 C 295.000 366.000,295.200 365.800,295.200 365.000 C 295.200 364.200,295.400 364.000,296.200 364.000 C 297.000 364.000,297.200 363.800,297.200 363.000 C 297.200 362.081,297.347 362.000,299.000 362.000 C 300.512 362.000,300.800 361.876,300.800 361.228 C 300.800 360.732,301.122 360.410,301.700 360.328 C 302.278 360.246,302.646 359.878,302.728 359.300 C 302.820 358.649,303.124 358.400,303.828 358.400 C 304.598 358.400,304.800 358.192,304.800 357.400 C 304.800 356.600,305.000 356.400,305.800 356.400 C 306.600 356.400,306.800 356.200,306.800 355.400 C 306.800 354.600,307.000 354.400,307.800 354.400 C 308.600 354.400,308.800 354.200,308.800 353.400 C 308.800 352.667,309.013 352.400,309.600 352.400 C 310.133 352.400,310.400 352.133,310.400 351.600 C 310.400 351.013,310.667 350.800,311.400 350.800 C 312.200 350.800,312.400 350.600,312.400 349.800 C 312.400 349.000,312.600 348.800,313.400 348.800 C 314.200 348.800,314.400 348.600,314.400 347.800 C 314.400 347.000,314.600 346.800,315.400 346.800 C 316.200 346.800,316.400 346.600,316.400 345.800 C 316.400 345.000,316.600 344.800,317.400 344.800 C 318.200 344.800,318.400 344.600,318.400 343.800 C 318.400 343.067,318.613 342.800,319.200 342.800 C 319.733 342.800,320.000 342.533,320.000 342.000 C 320.000 341.413,320.267 341.200,321.000 341.200 C 321.800 341.200,322.000 341.000,322.000 340.200 C 322.000 339.400,322.200 339.200,323.000 339.200 C 323.800 339.200,324.000 339.000,324.000 338.200 C 324.000 337.400,324.200 337.200,325.000 337.200 C 325.792 337.200,326.000 336.998,326.000 336.228 C 326.000 335.524,326.249 335.220,326.900 335.128 C 327.478 335.046,327.846 334.678,327.928 334.100 C 328.009 333.525,328.332 333.200,328.820 333.200 C 329.302 333.200,329.678 332.830,329.836 332.200 C 329.974 331.650,330.318 331.200,330.601 331.200 C 331.233 331.200,331.600 330.307,331.600 328.767 C 331.600 327.789,331.762 327.600,332.600 327.600 C 333.400 327.600,333.600 327.400,333.600 326.600 C 333.600 325.800,333.800 325.600,334.600 325.600 C 335.387 325.600,335.600 325.397,335.600 324.647 C 335.600 324.048,335.881 323.620,336.357 323.495 C 336.875 323.360,337.199 322.787,337.388 321.673 C 337.600 320.415,337.859 320.019,338.531 319.924 C 339.133 319.838,339.438 319.475,339.523 318.741 C 339.598 318.093,339.948 317.602,340.423 317.478 C 341.033 317.319,341.200 316.923,341.200 315.637 C 341.200 314.158,341.296 314.000,342.200 314.000 C 343.116 314.000,343.200 313.851,343.200 312.228 C 343.200 310.695,343.321 310.438,344.100 310.328 C 344.672 310.247,345.046 309.879,345.125 309.319 C 345.194 308.834,345.590 308.330,346.004 308.199 C 346.530 308.032,346.837 307.423,347.024 306.180 C 347.228 304.821,347.464 304.400,348.021 304.400 C 348.579 304.400,348.814 303.978,349.019 302.613 C 349.207 301.360,349.513 300.755,350.043 300.586 C 350.632 300.399,350.800 299.962,350.800 298.616 C 350.800 297.105,350.926 296.855,351.800 296.636 C 352.685 296.414,352.800 296.173,352.800 294.550 C 352.800 293.069,352.993 292.563,353.800 291.929 C 354.625 291.280,354.800 290.797,354.800 289.171 C 354.800 287.504,354.917 287.200,355.557 287.200 C 356.526 287.200,356.800 286.449,356.800 283.794 C 356.800 282.046,356.939 281.610,357.557 281.414 C 358.451 281.130,358.787 280.080,358.795 277.547 C 358.799 276.032,358.946 275.655,359.600 275.484 C 360.325 275.294,360.400 274.938,360.400 271.665 C 360.400 268.226,360.443 268.050,361.300 267.928 C 362.170 267.804,362.204 267.638,362.312 262.900 C 362.405 258.870,362.531 258.000,363.022 258.000 C 364.314 258.000,364.406 255.955,364.303 229.466 L 364.200 203.000 363.311 202.874 C 362.446 202.751,362.419 202.593,362.311 197.074 C 362.203 191.533,362.179 191.397,361.300 191.272 C 360.439 191.150,360.400 190.980,360.400 187.372 C 360.400 183.867,360.343 183.600,359.600 183.600 C 358.893 183.600,358.799 183.332,358.796 181.300 C 358.789 177.632,358.410 176.000,357.566 176.000 C 356.944 176.000,356.819 175.603,356.718 173.300 C 356.615 170.943,356.486 170.550,355.700 170.205 C 354.933 169.869,354.800 169.503,354.800 167.738 C 354.800 165.151,354.520 164.400,353.557 164.400 C 352.915 164.400,352.800 164.096,352.800 162.400 C 352.800 160.533,352.733 160.400,351.800 160.400 C 350.881 160.400,350.800 160.253,350.800 158.600 C 350.800 157.084,350.677 156.800,350.022 156.800 C 349.377 156.800,349.223 156.474,349.122 154.900 C 349.019 153.293,348.864 152.981,348.121 152.875 C 347.379 152.769,347.223 152.456,347.121 150.875 C 347.018 149.279,346.866 148.981,346.100 148.872 C 345.321 148.762,345.200 148.505,345.200 146.972 C 345.200 145.359,345.112 145.200,344.222 145.200 C 343.339 145.200,343.232 145.015,343.122 143.300 C 343.018 141.679,342.868 141.381,342.100 141.272 C 341.449 141.180,341.200 140.876,341.200 140.172 C 341.200 139.476,340.979 139.200,340.423 139.200 C 339.795 139.200,339.622 138.874,339.523 137.500 C 339.421 136.087,339.248 135.778,338.500 135.672 C 337.849 135.580,337.600 135.276,337.600 134.572 C 337.600 133.808,337.391 133.600,336.622 133.600 C 335.739 133.600,335.632 133.415,335.522 131.700 C 335.418 130.079,335.268 129.781,334.500 129.672 C 333.925 129.591,333.600 129.268,333.600 128.780 C 333.600 128.298,333.230 127.922,332.600 127.764 C 331.974 127.607,331.600 127.230,331.600 126.757 C 331.600 126.282,331.319 126.000,330.845 126.000 C 330.255 126.000,330.031 125.598,329.814 124.154 C 329.616 122.833,329.325 122.253,328.791 122.114 C 328.381 122.006,327.990 121.532,327.922 121.059 C 327.846 120.521,327.463 120.152,326.900 120.072 C 326.325 119.991,326.000 119.668,326.000 119.180 C 326.000 118.698,325.630 118.322,325.000 118.164 C 324.374 118.007,324.000 117.630,324.000 117.157 C 324.000 116.616,323.714 116.400,323.000 116.400 C 322.200 116.400,322.000 116.200,322.000 115.400 C 322.000 114.600,321.800 114.400,321.000 114.400 C 320.200 114.400,320.000 114.200,320.000 113.400 C 320.000 112.679,319.785 112.400,319.228 112.400 C 318.732 112.400,318.410 112.078,318.328 111.500 C 318.247 110.930,317.879 110.554,317.325 110.475 C 316.779 110.398,316.402 110.021,316.325 109.475 C 316.246 108.921,315.870 108.553,315.300 108.472 C 314.722 108.390,314.400 108.068,314.400 107.572 C 314.400 107.015,314.121 106.800,313.400 106.800 C 312.600 106.800,312.400 106.600,312.400 105.800 C 312.400 105.000,312.200 104.800,311.400 104.800 C 310.600 104.800,310.400 104.600,310.400 103.800 C 310.400 103.086,310.184 102.800,309.643 102.800 C 309.170 102.800,308.793 102.426,308.636 101.800 C 308.480 101.181,308.101 100.800,307.639 100.800 C 307.229 100.800,306.803 100.454,306.692 100.031 C 306.546 99.471,305.990 99.188,304.646 98.986 C 303.202 98.769,302.800 98.545,302.800 97.955 C 302.800 97.416,302.513 97.200,301.800 97.200 C 301.012 97.200,300.800 96.997,300.800 96.243 C 300.800 95.557,301.082 95.216,301.800 95.036 C 302.419 94.880,302.800 94.501,302.800 94.039 C 302.800 93.629,303.158 93.200,303.595 93.085 C 304.033 92.971,304.559 92.435,304.765 91.893 C 304.970 91.352,305.413 90.804,305.747 90.676 C 306.082 90.547,306.473 89.819,306.616 89.058 C 306.786 88.148,307.147 87.603,307.667 87.467 C 308.103 87.353,308.555 86.892,308.673 86.443 C 308.790 85.994,309.227 85.518,309.643 85.386 C 310.059 85.254,310.400 84.841,310.400 84.468 C 310.400 84.095,310.804 83.612,311.298 83.395 C 311.791 83.178,312.256 82.679,312.330 82.286 C 312.404 81.893,312.900 81.102,313.432 80.528 C 313.964 79.953,314.400 79.169,314.400 78.785 C 314.400 78.374,314.811 77.984,315.400 77.836 C 316.065 77.669,316.400 77.306,316.400 76.755 C 316.400 76.262,316.724 75.840,317.200 75.716 C 317.647 75.599,318.000 75.170,318.000 74.743 C 318.000 74.297,318.416 73.822,319.000 73.600 C 319.550 73.391,320.000 72.954,320.000 72.628 C 320.000 72.303,320.450 71.586,321.000 71.036 C 321.550 70.486,322.000 69.688,322.000 69.262 C 322.000 68.769,322.364 68.395,323.000 68.236 C 323.665 68.069,324.000 67.706,324.000 67.155 C 324.000 66.666,324.323 66.241,324.787 66.119 C 325.219 66.006,325.683 65.567,325.818 65.144 C 325.952 64.721,326.498 63.938,327.031 63.405 C 327.564 62.872,328.000 61.991,328.000 61.446 C 328.000 60.724,328.243 60.421,328.900 60.328 C 329.478 60.246,329.846 59.878,329.928 59.300 C 330.010 58.722,330.332 58.400,330.828 58.400 C 331.385 58.400,331.600 58.121,331.600 57.400 C 331.600 56.678,331.815 56.400,332.373 56.400 C 332.799 56.400,333.262 56.035,333.404 55.587 C 333.546 55.140,334.098 54.338,334.631 53.805 C 335.164 53.272,335.600 52.391,335.600 51.846 C 335.600 51.124,335.843 50.821,336.500 50.728 C 337.078 50.646,337.446 50.278,337.528 49.700 C 337.610 49.122,337.932 48.800,338.428 48.800 C 338.936 48.800,339.200 48.524,339.200 47.990 C 339.200 47.494,339.588 47.033,340.200 46.800 C 340.797 46.573,341.200 46.104,341.200 45.637 C 341.200 45.205,341.559 44.740,342.000 44.600 C 342.549 44.426,342.877 43.861,343.047 42.795 C 343.236 41.614,343.499 41.214,344.148 41.122 C 344.679 41.046,345.048 40.661,345.128 40.100 C 345.198 39.605,345.518 39.200,345.838 39.200 C 346.158 39.200,346.591 38.750,346.800 38.200 C 347.009 37.650,347.459 37.200,347.800 37.200 C 349.194 37.200,349.907 30.357,348.567 29.843 C 347.824 29.558,344.423 29.573,343.700 29.865 M340.619 39.259 C 340.785 39.783,340.557 40.368,339.934 41.013 C 338.284 42.722,337.656 43.531,337.011 44.779 C 336.664 45.450,336.200 46.000,335.981 46.000 C 335.762 46.000,335.364 46.495,335.098 47.100 C 334.831 47.705,334.295 48.435,333.906 48.723 C 333.518 49.010,333.200 49.493,333.200 49.796 C 333.200 50.098,332.858 50.455,332.440 50.587 C 332.022 50.720,331.567 51.278,331.429 51.826 C 331.291 52.375,330.734 53.211,330.189 53.684 C 329.645 54.157,329.200 54.716,329.200 54.926 C 329.200 55.136,328.795 55.724,328.300 56.233 C 325.897 58.701,325.600 59.063,325.600 59.527 C 325.600 59.801,325.322 60.132,324.983 60.262 C 324.644 60.392,324.021 61.174,323.600 62.000 C 323.179 62.826,322.556 63.608,322.217 63.738 C 321.878 63.868,321.600 64.187,321.600 64.445 C 321.600 64.893,321.340 65.215,319.004 67.646 C 318.452 68.221,318.000 68.902,318.000 69.158 C 318.000 69.415,317.722 69.732,317.383 69.862 C 317.044 69.992,316.421 70.774,316.000 71.600 C 315.579 72.426,314.956 73.208,314.617 73.338 C 314.278 73.468,314.000 73.846,314.000 74.178 C 314.000 74.510,313.550 75.076,313.000 75.437 C 312.450 75.797,312.000 76.340,312.000 76.643 C 312.000 76.945,311.640 77.418,311.200 77.693 C 310.760 77.968,310.400 78.379,310.400 78.607 C 310.400 78.835,309.860 79.613,309.200 80.336 C 308.540 81.058,308.000 81.908,308.000 82.225 C 308.000 82.541,307.721 82.800,307.379 82.800 C 307.038 82.800,306.576 83.322,306.354 83.960 C 306.132 84.598,305.601 85.211,305.175 85.322 C 304.730 85.439,304.400 85.870,304.400 86.336 C 304.400 86.781,304.073 87.250,303.673 87.377 C 303.273 87.504,302.700 88.236,302.399 89.004 C 302.097 89.772,301.618 90.400,301.333 90.400 C 301.048 90.400,300.704 90.844,300.568 91.386 C 300.432 91.928,299.996 92.474,299.600 92.600 C 299.204 92.726,298.768 93.272,298.632 93.814 C 298.496 94.356,298.152 94.800,297.868 94.800 C 297.583 94.800,296.930 95.368,296.417 96.063 C 295.444 97.379,295.906 98.400,297.476 98.400 C 297.764 98.400,298.000 98.562,298.000 98.761 C 298.000 98.959,298.542 99.311,299.205 99.542 C 299.868 99.773,300.517 100.241,300.648 100.581 C 300.779 100.921,301.132 101.200,301.434 101.200 C 301.735 101.200,302.276 101.650,302.637 102.200 C 302.997 102.750,303.531 103.200,303.823 103.200 C 304.845 103.200,322.819 121.510,326.402 126.200 C 328.804 129.346,329.412 130.112,330.287 131.094 C 330.775 131.641,331.282 132.429,331.414 132.845 C 331.546 133.260,331.817 133.600,332.017 133.600 C 332.216 133.600,332.678 134.185,333.044 134.900 C 333.409 135.615,333.954 136.344,334.254 136.520 C 334.554 136.696,334.805 137.056,334.811 137.320 C 334.817 137.584,335.357 138.507,336.011 139.371 C 336.665 140.235,337.200 141.180,337.200 141.471 C 337.200 141.762,337.386 142.000,337.614 142.000 C 337.842 142.000,338.376 142.810,338.800 143.800 C 339.224 144.790,339.751 145.600,339.970 145.600 C 340.190 145.600,340.563 146.320,340.800 147.200 C 341.037 148.080,341.384 148.800,341.572 148.800 C 341.760 148.800,342.215 149.554,342.584 150.476 C 342.952 151.397,343.492 152.342,343.783 152.576 C 344.074 152.809,344.521 153.661,344.776 154.468 C 345.032 155.275,345.488 156.141,345.789 156.391 C 346.091 156.641,346.456 157.545,346.600 158.400 C 346.744 159.255,347.117 160.165,347.428 160.424 C 347.740 160.682,348.192 161.637,348.434 162.547 C 348.676 163.456,349.150 164.509,349.486 164.886 C 349.823 165.263,350.255 166.412,350.447 167.440 C 350.639 168.468,351.052 169.509,351.364 169.755 C 351.676 170.000,352.140 171.235,352.394 172.500 C 352.649 173.765,353.015 174.800,353.210 174.800 C 353.660 174.800,354.395 177.422,354.398 179.039 C 354.399 179.720,354.747 180.678,355.171 181.167 C 355.667 181.738,356.041 182.978,356.218 184.634 C 356.374 186.088,356.797 187.602,357.187 188.106 C 357.659 188.715,357.957 190.083,358.122 192.400 C 358.273 194.534,358.645 196.344,359.118 197.259 C 359.685 198.356,359.937 199.987,360.131 203.822 C 360.337 207.884,360.534 209.085,361.095 209.705 C 362.143 210.863,362.175 243.989,361.132 246.800 C 360.764 247.790,360.278 250.796,360.052 253.481 C 359.813 256.311,359.382 258.861,359.026 259.550 C 358.688 260.204,358.294 262.057,358.150 263.669 C 358.006 265.281,357.633 267.107,357.320 267.728 C 357.007 268.348,356.495 270.195,356.181 271.833 C 355.868 273.471,355.360 275.213,355.053 275.705 C 354.746 276.197,354.375 277.405,354.228 278.390 C 354.082 279.374,353.719 280.454,353.423 280.790 C 353.126 281.125,352.675 282.421,352.420 283.669 C 352.165 284.917,351.715 286.139,351.420 286.384 C 351.125 286.628,350.762 287.497,350.613 288.314 C 350.463 289.131,350.019 290.355,349.624 291.033 C 349.229 291.710,348.680 292.970,348.403 293.833 C 348.126 294.695,347.676 295.670,347.403 296.000 C 347.131 296.330,346.780 297.140,346.624 297.800 C 346.468 298.460,346.025 299.360,345.638 299.800 C 345.252 300.240,344.718 301.365,344.452 302.300 C 344.186 303.235,343.809 304.000,343.615 304.000 C 343.421 304.000,343.061 304.608,342.816 305.352 C 342.571 306.095,342.017 307.023,341.585 307.414 C 341.153 307.804,340.800 308.421,340.800 308.784 C 340.800 309.147,340.350 310.055,339.800 310.800 C 339.250 311.545,338.800 312.384,338.800 312.664 C 338.800 312.943,338.440 313.365,338.000 313.600 C 337.560 313.835,337.200 314.357,337.200 314.759 C 337.200 315.161,336.660 316.169,336.000 317.000 C 335.340 317.831,334.800 318.755,334.800 319.055 C 334.800 319.355,334.624 319.600,334.408 319.600 C 334.193 319.600,333.660 320.298,333.225 321.151 C 332.790 322.004,332.156 322.808,331.817 322.938 C 331.478 323.068,331.200 323.424,331.200 323.729 C 331.200 324.034,330.795 324.746,330.300 325.311 C 329.805 325.876,328.950 327.011,328.400 327.832 C 327.850 328.653,326.905 329.819,326.300 330.423 C 325.695 331.027,325.200 331.656,325.200 331.821 C 325.200 331.985,324.390 332.885,323.400 333.820 C 322.410 334.756,321.600 335.686,321.600 335.888 C 321.600 336.090,321.195 336.639,320.700 337.108 C 320.205 337.577,319.598 338.172,319.350 338.430 C 318.867 338.935,316.398 341.410,315.639 342.150 C 315.385 342.397,314.958 342.834,314.689 343.119 C 314.420 343.405,313.966 343.855,313.681 344.119 C 313.395 344.384,312.945 344.834,312.681 345.119 C 311.773 346.100,309.121 348.556,305.253 352.000 C 303.380 353.668,302.690 354.257,299.400 356.999 C 298.740 357.549,297.981 357.999,297.714 358.000 C 297.447 358.000,297.035 358.360,296.800 358.800 C 296.565 359.240,296.141 359.600,295.858 359.600 C 295.575 359.600,294.974 360.005,294.521 360.500 C 294.068 360.995,292.768 361.940,291.631 362.600 C 290.494 363.260,289.128 364.191,288.595 364.669 C 288.062 365.147,287.260 365.654,286.813 365.796 C 286.366 365.938,286.000 366.208,286.000 366.396 C 286.000 366.584,285.392 366.939,284.648 367.184 C 283.905 367.429,282.986 367.973,282.607 368.392 C 282.227 368.812,281.384 369.272,280.731 369.415 C 280.079 369.558,279.452 369.920,279.338 370.218 C 279.223 370.517,278.470 370.978,277.665 371.244 C 276.859 371.509,276.020 371.948,275.800 372.219 C 275.580 372.490,274.739 372.921,273.932 373.176 C 273.125 373.432,272.257 373.890,272.004 374.195 C 271.752 374.499,270.972 374.870,270.272 375.017 C 269.573 375.165,268.640 375.612,268.200 376.011 C 267.760 376.409,266.737 376.858,265.926 377.007 C 265.116 377.157,264.143 377.621,263.764 378.040 C 263.386 378.458,262.588 378.800,261.992 378.800 C 261.396 378.800,260.458 379.154,259.909 379.586 C 259.359 380.018,258.033 380.569,256.961 380.809 C 255.890 381.049,254.740 381.479,254.406 381.764 C 254.073 382.050,252.734 382.490,251.431 382.742 C 250.128 382.994,248.758 383.476,248.386 383.813 C 248.014 384.149,246.740 384.532,245.555 384.664 C 244.370 384.795,242.860 385.218,242.200 385.603 C 241.540 385.988,239.830 386.428,238.400 386.582 C 236.970 386.735,235.260 387.185,234.600 387.580 C 233.799 388.061,232.152 388.389,229.642 388.569 C 227.576 388.717,225.236 389.112,224.442 389.448 C 220.364 391.176,177.886 391.193,174.522 389.468 C 173.905 389.152,171.690 388.761,169.600 388.599 C 167.190 388.413,165.261 388.032,164.326 387.558 C 163.516 387.147,161.566 386.691,159.994 386.545 C 158.260 386.384,156.894 386.037,156.519 385.662 C 156.179 385.322,154.728 384.904,153.288 384.731 C 151.560 384.522,150.438 384.163,149.978 383.668 C 149.550 383.209,148.456 382.823,147.141 382.668 C 145.940 382.525,144.804 382.147,144.555 381.805 C 144.309 381.470,143.268 381.039,142.240 380.847 C 141.212 380.655,140.040 380.198,139.635 379.832 C 139.230 379.466,138.202 379.060,137.350 378.930 C 136.497 378.800,135.440 378.377,135.000 377.990 C 134.560 377.603,133.630 377.166,132.933 377.019 C 132.236 376.871,131.290 376.425,130.830 376.026 C 130.371 375.628,129.269 375.185,128.382 375.044 C 127.495 374.902,126.670 374.528,126.549 374.212 C 126.428 373.897,125.737 373.443,125.013 373.204 C 124.289 372.965,123.377 372.417,122.986 371.985 C 122.596 371.553,121.779 371.200,121.171 371.200 C 120.432 371.200,119.806 370.843,119.278 370.118 L 118.490 369.036 116.745 370.876 C 115.785 371.888,114.437 372.998,113.748 373.343 C 113.060 373.688,112.391 374.247,112.261 374.585 C 112.131 374.923,111.672 375.200,111.240 375.200 C 110.807 375.200,110.343 375.551,110.206 375.980 C 110.070 376.408,109.608 376.870,109.179 377.007 C 108.750 377.143,108.213 377.602,107.986 378.027 C 107.758 378.452,107.353 378.800,107.085 378.800 C 106.817 378.800,106.088 379.340,105.465 380.000 C 104.842 380.660,104.121 381.200,103.862 381.200 C 103.604 381.200,103.168 381.560,102.893 382.000 C 102.618 382.440,102.064 382.800,101.661 382.800 C 101.258 382.800,100.723 383.250,100.473 383.800 C 100.222 384.350,99.750 384.800,99.423 384.800 C 99.096 384.800,98.635 385.160,98.400 385.600 C 98.165 386.040,97.712 386.400,97.395 386.400 C 97.078 386.400,96.522 386.852,96.160 387.405 C 95.798 387.957,95.083 388.514,94.572 388.643 C 94.061 388.771,93.358 389.309,93.012 389.838 C 92.665 390.367,92.122 390.800,91.805 390.800 C 91.488 390.800,91.035 391.160,90.800 391.600 C 90.565 392.040,90.174 392.400,89.932 392.400 C 89.690 392.400,89.088 392.805,88.595 393.300 C 86.822 395.079,85.714 395.965,84.666 396.443 C 84.080 396.710,83.600 397.152,83.600 397.425 C 83.600 397.698,83.060 398.110,82.400 398.340 C 81.740 398.570,81.200 399.038,81.200 399.379 C 81.200 399.721,80.957 400.000,80.659 400.000 C 80.362 400.000,79.557 400.495,78.871 401.100 C 76.472 403.214,74.887 404.400,74.459 404.400 C 74.222 404.400,73.835 404.760,73.600 405.200 C 73.365 405.640,72.929 406.000,72.632 406.000 C 72.335 406.000,71.797 406.450,71.437 407.000 C 71.076 407.550,70.614 408.000,70.409 408.000 C 70.204 408.000,69.533 408.463,68.918 409.028 C 68.303 409.593,67.490 410.339,67.111 410.686 C 66.088 411.623,65.200 410.706,65.200 408.714 C 65.200 407.462,65.369 407.081,66.000 406.916 C 66.440 406.801,66.800 406.400,66.800 406.025 C 66.800 405.651,67.250 404.953,67.800 404.475 C 68.350 403.997,68.800 403.344,68.800 403.025 C 68.800 402.706,69.131 402.210,69.537 401.923 C 69.942 401.635,70.488 400.995,70.751 400.500 C 71.013 400.005,71.452 399.600,71.726 399.600 C 72.000 399.600,72.428 399.060,72.678 398.400 C 72.927 397.740,73.416 397.200,73.765 397.200 C 74.116 397.200,74.400 396.869,74.400 396.459 C 74.400 395.789,75.345 394.517,77.596 392.158 C 78.038 391.695,78.400 391.003,78.400 390.620 C 78.400 390.238,78.749 389.834,79.175 389.722 C 79.601 389.611,80.132 388.998,80.354 388.360 C 80.576 387.722,81.038 387.200,81.379 387.200 C 81.739 387.200,82.000 386.854,82.000 386.377 C 82.000 385.925,82.513 385.070,83.140 384.477 C 83.767 383.885,84.391 383.085,84.527 382.700 C 84.663 382.315,85.051 382.000,85.387 382.000 C 85.736 382.000,86.000 381.651,86.000 381.190 C 86.000 380.694,86.388 380.233,87.000 380.000 C 87.574 379.782,88.000 379.302,88.000 378.873 C 88.000 378.116,88.910 376.839,90.900 374.804 C 91.505 374.185,92.000 373.403,92.000 373.066 C 92.000 372.730,92.360 372.340,92.800 372.200 C 93.240 372.060,93.600 371.619,93.600 371.219 C 93.600 370.819,94.050 370.197,94.600 369.837 C 95.150 369.476,95.600 368.922,95.600 368.605 C 95.600 368.287,96.140 367.475,96.800 366.800 C 97.460 366.125,98.000 365.420,98.000 365.233 C 98.000 365.046,98.360 364.799,98.800 364.684 C 99.292 364.555,99.600 364.138,99.600 363.600 C 99.600 363.107,99.906 362.641,100.300 362.532 C 100.991 362.341,103.200 359.269,103.200 358.499 C 103.200 358.281,102.486 357.988,101.613 357.848 C 100.617 357.689,99.866 357.297,99.599 356.797 C 99.364 356.359,99.000 356.000,98.789 356.000 C 98.042 356.000,93.606 352.292,89.338 348.100 C 88.162 346.945,87.032 346.000,86.827 346.000 C 86.622 346.000,86.340 345.640,86.200 345.200 C 86.060 344.760,85.772 344.400,85.560 344.400 C 85.131 344.400,82.400 341.778,82.400 341.367 C 82.400 341.224,81.095 339.786,79.500 338.172 C 77.905 336.557,76.150 334.670,75.600 333.977 C 75.050 333.284,74.108 332.151,73.506 331.459 C 72.905 330.766,72.410 330.065,72.406 329.900 C 72.403 329.735,72.127 329.285,71.793 328.900 C 68.316 324.889,67.737 324.125,65.506 320.601 C 65.228 320.162,64.505 319.211,63.900 318.487 C 63.295 317.764,62.800 316.903,62.800 316.574 C 62.800 316.244,62.546 315.878,62.236 315.759 C 61.926 315.639,61.564 315.113,61.433 314.588 C 61.301 314.063,60.745 313.150,60.197 312.559 C 59.648 311.967,59.200 311.177,59.200 310.804 C 59.200 310.430,58.850 309.807,58.423 309.421 C 57.995 309.034,57.535 308.214,57.400 307.600 C 57.265 306.986,56.805 306.166,56.377 305.779 C 55.950 305.393,55.600 304.758,55.600 304.369 C 55.600 303.980,55.176 303.153,54.658 302.531 C 54.139 301.909,53.590 300.716,53.436 299.879 C 53.282 299.042,52.913 298.265,52.617 298.151 C 52.321 298.038,51.966 297.345,51.829 296.613 C 51.691 295.880,51.226 294.832,50.795 294.284 C 50.363 293.735,49.816 292.382,49.579 291.276 C 49.342 290.170,48.908 289.174,48.615 289.061 C 48.322 288.949,47.959 287.959,47.808 286.860 C 47.652 285.721,47.219 284.579,46.800 284.200 C 46.383 283.823,45.949 282.681,45.794 281.558 C 45.645 280.469,45.258 279.315,44.935 278.992 C 44.612 278.669,44.164 277.189,43.938 275.702 C 43.713 274.216,43.251 272.564,42.911 272.032 C 42.571 271.500,42.158 269.844,41.995 268.352 C 41.816 266.725,41.437 265.380,41.049 264.991 C 40.692 264.635,40.394 264.221,40.386 264.071 C 40.158 259.737,39.558 255.817,39.035 255.238 C 38.625 254.785,38.400 253.793,38.400 252.437 C 38.400 248.730,37.535 240.717,36.959 239.083 C 36.126 236.722,36.167 221.056,37.011 219.438 C 37.344 218.799,37.605 217.719,37.591 217.038 C 37.536 214.420,38.709 203.991,39.114 203.504 C 39.347 203.222,39.744 201.104,39.996 198.796 C 40.247 196.488,40.720 194.060,41.047 193.400 C 41.374 192.740,41.808 190.894,42.011 189.299 C 42.214 187.703,42.640 185.896,42.958 185.282 C 43.275 184.668,43.744 183.004,44.000 181.583 C 44.257 180.162,44.702 178.730,44.990 178.400 C 45.277 178.070,45.642 176.990,45.799 176.000 C 45.956 175.010,46.418 173.652,46.825 172.982 C 47.231 172.311,47.686 170.961,47.835 169.982 C 47.984 169.002,48.369 167.898,48.689 167.529 C 49.010 167.159,49.446 166.082,49.659 165.135 C 49.872 164.187,50.289 163.139,50.586 162.806 C 50.883 162.473,51.324 161.456,51.566 160.547 C 51.808 159.637,52.270 158.674,52.592 158.406 C 52.915 158.139,53.292 157.318,53.430 156.583 C 53.567 155.848,54.112 154.661,54.640 153.946 C 55.168 153.230,55.600 152.252,55.600 151.771 C 55.600 151.291,55.885 150.661,56.234 150.372 C 56.583 150.082,57.143 149.160,57.478 148.323 C 57.813 147.485,58.240 146.800,58.428 146.800 C 58.616 146.800,58.963 146.080,59.200 145.200 C 59.437 144.320,59.814 143.600,60.038 143.600 C 60.262 143.600,60.803 142.790,61.241 141.800 C 61.679 140.810,62.197 140.000,62.392 140.000 C 62.587 140.000,62.873 139.595,63.028 139.100 C 63.183 138.605,63.735 137.691,64.255 137.069 C 64.775 136.447,65.200 135.689,65.200 135.383 C 65.200 135.078,65.539 134.647,65.954 134.425 C 66.369 134.203,66.822 133.566,66.962 133.011 C 67.101 132.455,67.387 132.000,67.597 132.000 C 67.808 132.000,68.279 131.415,68.646 130.700 C 69.292 129.440,69.666 128.972,71.796 126.754 C 72.348 126.179,72.800 125.580,72.800 125.423 C 72.800 125.267,73.346 124.593,74.013 123.925 C 74.680 123.258,75.715 122.069,76.313 121.283 C 77.707 119.451,88.982 108.136,90.810 106.735 C 91.575 106.149,92.779 105.159,93.486 104.535 C 94.194 103.911,95.246 103.040,95.826 102.600 C 96.405 102.160,97.356 101.386,97.940 100.881 C 100.079 99.027,102.124 97.600,102.641 97.600 C 102.933 97.600,103.365 97.240,103.600 96.800 C 103.835 96.360,104.203 96.000,104.418 96.000 C 104.632 96.000,105.552 95.460,106.463 94.800 C 107.375 94.140,108.273 93.600,108.460 93.600 C 108.647 93.600,109.115 93.319,109.500 92.975 C 111.316 91.352,113.378 90.000,114.035 90.000 C 114.434 90.000,114.904 89.753,115.080 89.452 C 115.256 89.151,116.120 88.519,117.000 88.048 C 118.762 87.105,119.506 86.664,121.622 85.310 C 122.403 84.809,123.324 84.400,123.668 84.400 C 124.011 84.400,124.721 84.066,125.246 83.658 C 125.771 83.250,126.861 82.701,127.668 82.438 C 128.475 82.174,129.351 81.700,129.615 81.382 C 129.878 81.065,130.792 80.618,131.647 80.387 C 132.501 80.157,133.200 79.801,133.200 79.596 C 133.200 79.390,134.175 78.939,135.366 78.593 C 136.558 78.246,137.734 77.720,137.981 77.423 C 138.227 77.126,139.077 76.762,139.869 76.613 C 140.661 76.465,141.780 76.013,142.355 75.609 C 142.930 75.205,144.110 74.753,144.979 74.604 C 145.847 74.456,146.996 73.989,147.533 73.567 C 148.069 73.145,149.076 72.800,149.769 72.800 C 150.463 72.800,151.744 72.417,152.615 71.949 C 153.487 71.481,155.247 70.960,156.526 70.790 C 157.837 70.616,159.059 70.211,159.326 69.863 C 159.644 69.448,161.009 69.114,163.480 68.845 C 165.504 68.625,167.574 68.187,168.080 67.872 C 168.642 67.523,171.141 67.128,174.500 66.859 C 177.854 66.590,180.351 66.197,180.900 65.850 C 181.632 65.387,184.488 65.274,196.200 65.244 C 209.732 65.210,212.778 65.370,217.200 66.347 C 218.190 66.566,220.890 66.867,223.200 67.016 C 225.510 67.164,227.929 67.540,228.575 67.850 C 229.221 68.160,231.471 68.603,233.575 68.834 C 235.679 69.066,237.823 69.529,238.341 69.863 C 238.858 70.198,240.432 70.635,241.839 70.834 C 243.245 71.033,245.069 71.557,245.892 71.998 C 246.715 72.439,247.843 72.800,248.400 72.800 C 248.957 72.800,250.055 73.145,250.840 73.566 C 251.626 73.987,253.111 74.458,254.139 74.612 C 255.168 74.766,256.454 75.242,256.998 75.670 C 257.542 76.098,258.665 76.552,259.494 76.678 C 260.322 76.805,261.285 77.155,261.633 77.456 C 261.982 77.757,263.197 78.280,264.333 78.617 C 265.470 78.955,266.400 79.390,266.400 79.584 C 266.400 79.778,266.932 80.053,267.581 80.196 C 268.231 80.339,269.176 80.778,269.681 81.173 C 270.187 81.567,271.050 82.023,271.600 82.187 C 272.150 82.350,273.050 82.780,273.600 83.142 C 274.150 83.504,275.140 83.995,275.800 84.234 C 276.460 84.472,277.220 85.102,277.489 85.634 C 278.179 86.997,279.450 86.682,281.415 84.661 C 283.481 82.537,286.774 80.000,287.466 80.000 C 287.760 80.000,288.000 79.724,288.000 79.387 C 288.000 79.051,288.315 78.659,288.700 78.517 C 289.085 78.376,289.796 77.886,290.279 77.430 C 290.762 76.973,291.662 76.195,292.279 75.701 C 292.896 75.206,294.054 74.261,294.853 73.601 C 295.652 72.940,296.495 72.400,296.726 72.400 C 296.957 72.400,297.260 72.040,297.400 71.600 C 297.544 71.147,298.005 70.800,298.464 70.800 C 298.930 70.800,299.361 70.470,299.478 70.025 C 299.589 69.599,300.202 69.068,300.840 68.846 C 301.478 68.624,302.000 68.162,302.000 67.821 C 302.000 67.479,302.236 67.200,302.525 67.200 C 302.814 67.200,303.568 66.660,304.200 66.000 C 304.832 65.340,305.676 64.800,306.075 64.800 C 306.474 64.800,306.800 64.514,306.800 64.165 C 306.800 63.816,307.340 63.327,308.000 63.078 C 308.660 62.828,309.200 62.388,309.200 62.100 C 309.200 61.811,309.515 61.462,309.900 61.324 C 310.285 61.186,311.050 60.650,311.600 60.134 C 313.903 57.972,315.370 56.800,315.776 56.800 C 316.013 56.800,316.432 56.440,316.707 56.000 C 316.982 55.560,317.469 55.200,317.789 55.200 C 318.110 55.200,318.565 54.840,318.800 54.400 C 319.035 53.960,319.452 53.600,319.725 53.600 C 319.998 53.600,320.678 53.105,321.237 52.500 C 321.795 51.895,322.855 50.950,323.593 50.400 C 324.331 49.850,325.363 48.995,325.886 48.500 C 326.409 48.005,327.077 47.600,327.372 47.600 C 327.667 47.600,328.203 47.150,328.563 46.600 C 328.924 46.050,329.472 45.600,329.782 45.600 C 330.092 45.600,330.460 45.240,330.600 44.800 C 330.740 44.360,331.108 44.000,331.418 44.000 C 331.728 44.000,332.268 43.563,332.617 43.030 C 332.967 42.496,333.781 41.876,334.426 41.651 C 335.072 41.426,335.600 41.048,335.600 40.812 C 335.600 40.576,336.093 40.162,336.695 39.891 C 337.296 39.621,338.102 39.089,338.485 38.709 C 339.302 37.899,340.266 38.148,340.619 39.259 M182.618 77.971 C 182.249 78.568,183.673 78.805,185.332 78.423 C 187.659 77.887,187.574 77.600,185.090 77.600 C 183.857 77.600,182.744 77.767,182.618 77.971 M211.400 78.181 C 214.239 78.621,216.400 78.461,216.400 77.810 C 216.400 77.694,214.555 77.619,212.300 77.642 L 208.200 77.684 211.400 78.181 M171.107 79.890 C 171.826 79.979,172.906 79.977,173.507 79.886 C 174.108 79.795,173.520 79.722,172.200 79.724 C 170.880 79.726,170.388 79.801,171.107 79.890 M226.941 80.055 C 227.458 80.356,227.941 80.360,228.541 80.070 C 229.290 79.707,229.196 79.652,227.800 79.639 C 226.469 79.627,226.325 79.697,226.941 80.055 M155.600 83.627 C 154.730 83.882,154.795 83.925,156.100 83.960 C 157.623 84.001,158.006 83.828,157.100 83.510 C 156.825 83.413,156.150 83.466,155.600 83.627 M267.800 94.400 C 267.640 94.658,267.690 95.050,267.910 95.270 C 268.176 95.536,268.406 95.513,268.600 95.200 C 268.760 94.942,268.710 94.550,268.490 94.330 C 268.224 94.064,267.994 94.087,267.800 94.400 M288.881 106.341 C 288.467 106.604,288.487 106.774,288.981 107.184 C 289.507 107.620,289.600 107.570,289.600 106.849 C 289.600 105.892,289.595 105.889,288.881 106.341 M303.834 120.306 C 304.073 120.468,304.473 120.960,304.722 121.400 C 305.145 122.146,305.177 122.125,305.188 121.100 C 305.198 120.221,305.020 120.001,304.300 120.006 C 303.788 120.010,303.587 120.139,303.834 120.306 M85.388 129.620 C 85.007 130.235,85.528 130.632,86.042 130.118 C 86.329 129.831,86.336 129.607,86.062 129.439 C 85.839 129.300,85.535 129.382,85.388 129.620 M77.600 139.400 C 77.600 139.767,77.794 140.002,78.030 139.923 C 78.267 139.845,78.460 139.609,78.460 139.400 C 78.460 139.191,78.267 138.956,78.030 138.877 C 77.794 138.798,77.600 139.033,77.600 139.400 M72.028 147.900 C 72.053 148.875,72.095 148.909,72.400 148.200 C 72.869 147.107,72.869 146.800,72.400 146.800 C 72.180 146.800,72.013 147.295,72.028 147.900 M70.000 151.000 C 70.000 151.596,70.172 151.941,70.400 151.800 C 70.620 151.664,70.800 151.304,70.800 151.000 C 70.800 150.696,70.620 150.336,70.400 150.200 C 70.172 150.059,70.000 150.404,70.000 151.000 M68.000 154.000 C 68.000 154.660,68.180 155.200,68.400 155.200 C 68.620 155.200,68.800 154.660,68.800 154.000 C 68.800 153.340,68.620 152.800,68.400 152.800 C 68.180 152.800,68.000 153.340,68.000 154.000 M66.276 157.347 C 66.103 157.978,66.060 158.593,66.181 158.714 C 66.598 159.131,66.860 158.469,66.725 157.337 L 66.590 156.200 66.276 157.347 M333.378 160.035 C 333.231 160.274,333.310 160.670,333.555 160.915 C 333.882 161.242,334.000 161.126,334.000 160.480 C 334.000 159.514,333.792 159.365,333.378 160.035 M64.000 161.400 C 64.000 162.849,64.532 163.275,64.957 162.167 C 65.388 161.044,65.216 160.000,64.600 160.000 C 64.181 160.000,64.000 160.422,64.000 161.400 M62.288 165.075 C 62.009 166.533,62.421 167.645,62.842 166.571 C 63.265 165.489,63.268 164.000,62.847 164.000 C 62.652 164.000,62.401 164.484,62.288 165.075 M60.406 169.876 C 60.411 171.266,60.520 171.633,60.800 171.200 C 61.309 170.413,61.309 168.514,60.800 168.200 C 60.554 168.048,60.402 168.694,60.406 169.876 M339.116 172.791 C 339.020 173.446,339.087 174.211,339.265 174.491 C 339.458 174.796,339.590 174.320,339.594 173.300 C 339.601 171.326,339.368 171.077,339.116 172.791 M58.400 174.824 C 58.400 175.804,58.558 176.349,58.800 176.200 C 59.020 176.064,59.200 175.333,59.200 174.576 C 59.200 173.819,59.020 173.200,58.800 173.200 C 58.580 173.200,58.400 173.931,58.400 174.824 M340.950 177.387 C 340.826 177.710,340.907 178.475,341.131 179.087 C 341.519 180.152,341.538 180.127,341.568 178.500 C 341.601 176.770,341.356 176.329,340.950 177.387 M56.660 178.989 C 56.281 179.975,56.342 182.000,56.750 182.000 C 57.262 182.000,57.653 179.624,57.257 178.917 C 56.963 178.391,56.886 178.400,56.660 178.989 M342.828 183.700 C 342.907 185.094,343.544 185.780,343.572 184.500 C 343.587 183.785,343.420 183.200,343.200 183.200 C 342.980 183.200,342.813 183.425,342.828 183.700 M54.716 186.391 C 54.620 187.046,54.687 187.811,54.865 188.091 C 55.058 188.396,55.190 187.920,55.194 186.900 C 55.201 184.926,54.968 184.677,54.716 186.391 M344.806 191.100 C 344.824 191.977,345.588 192.559,345.594 191.700 C 345.597 191.205,345.420 190.800,345.200 190.800 C 344.980 190.800,344.803 190.935,344.806 191.100 M52.850 194.420 L 52.900 196.600 53.204 194.800 C 53.371 193.810,53.348 192.829,53.154 192.620 C 52.946 192.397,52.821 193.140,52.850 194.420 M346.812 200.200 C 346.812 201.895,346.926 202.424,347.200 202.000 C 347.413 201.670,347.588 200.860,347.588 200.200 C 347.588 199.540,347.413 198.730,347.200 198.400 C 346.926 197.976,346.812 198.505,346.812 200.200 M50.924 205.400 C 50.926 206.720,51.001 207.212,51.090 206.493 C 51.179 205.774,51.177 204.694,51.086 204.093 C 50.995 203.492,50.922 204.080,50.924 205.400 M133.357 205.033 C 133.491 205.381,133.603 205.786,133.606 205.933 C 133.614 206.291,134.386 205.083,134.394 204.700 C 134.397 204.535,134.111 204.400,133.757 204.400 C 133.335 204.400,133.198 204.618,133.357 205.033 M348.691 210.400 C 348.322 211.717,348.372 214.792,348.779 215.800 C 349.297 217.083,349.770 213.058,349.336 211.068 C 349.003 209.546,348.947 209.488,348.691 210.400 M48.834 231.800 C 48.819 234.779,48.937 236.006,49.200 235.600 C 49.675 234.865,49.675 229.305,49.200 228.200 C 48.979 227.686,48.848 228.974,48.834 231.800 M348.673 240.421 C 348.297 241.827,348.351 246.903,348.749 247.531 C 349.454 248.643,349.905 241.922,349.239 240.221 C 348.957 239.500,348.915 239.515,348.673 240.421 M50.853 252.600 C 50.825 255.057,50.935 256.009,51.200 255.600 C 51.647 254.909,51.647 251.956,51.200 250.200 C 50.988 249.365,50.882 250.095,50.853 252.600 M346.828 256.324 C 346.810 258.177,346.946 259.157,347.200 259.000 C 347.682 258.702,347.682 255.321,347.200 254.200 C 346.964 253.651,346.847 254.319,346.828 256.324 M52.623 260.897 C 52.273 263.018,52.636 265.748,53.220 265.388 C 53.650 265.122,53.650 262.010,53.220 260.200 C 52.948 259.052,52.922 259.083,52.623 260.897 M344.704 264.700 C 344.504 266.340,344.689 267.200,345.243 267.200 C 345.439 267.200,345.600 266.300,345.600 265.200 C 345.600 262.865,344.971 262.514,344.704 264.700 M54.687 268.246 C 54.338 268.595,54.307 271.292,54.642 272.165 C 55.045 273.217,55.602 272.446,55.572 270.876 C 55.539 269.149,55.098 267.836,54.687 268.246 M343.043 270.633 C 342.669 271.607,342.755 273.125,343.200 273.400 C 343.444 273.551,343.600 272.937,343.600 271.824 C 343.600 269.908,343.447 269.580,343.043 270.633 M56.477 276.469 C 56.621 278.425,57.600 279.120,57.600 277.266 C 57.600 275.807,57.246 274.800,56.734 274.800 C 56.525 274.800,56.409 275.551,56.477 276.469 M341.293 278.400 C 341.293 279.170,341.375 279.485,341.476 279.100 C 341.576 278.715,341.576 278.085,341.476 277.700 C 341.375 277.315,341.293 277.630,341.293 278.400 M58.400 281.776 C 58.400 282.779,58.580 283.600,58.800 283.600 C 59.020 283.600,59.200 282.891,59.200 282.024 C 59.200 281.157,59.020 280.336,58.800 280.200 C 58.556 280.049,58.400 280.663,58.400 281.776 M339.293 283.600 C 339.293 284.370,339.375 284.685,339.476 284.300 C 339.576 283.915,339.576 283.285,339.476 282.900 C 339.375 282.515,339.293 282.830,339.293 283.600 M60.406 286.300 C 60.403 287.235,60.580 288.000,60.800 288.000 C 61.310 288.000,61.310 285.990,60.800 285.200 C 60.516 284.761,60.411 285.055,60.406 286.300 M337.293 288.400 C 337.293 289.170,337.375 289.485,337.476 289.100 C 337.576 288.715,337.576 288.085,337.476 287.700 C 337.375 287.315,337.293 287.630,337.293 288.400 M62.406 290.900 C 62.410 291.784,62.523 292.026,62.757 291.656 C 63.072 291.159,62.917 289.600,62.553 289.600 C 62.469 289.600,62.403 290.185,62.406 290.900 M335.200 292.600 C 335.200 293.150,335.380 293.600,335.600 293.600 C 335.820 293.600,336.000 293.150,336.000 292.600 C 336.000 292.050,335.820 291.600,335.600 291.600 C 335.380 291.600,335.200 292.050,335.200 292.600 M64.228 294.354 C 64.079 294.596,64.120 295.085,64.319 295.441 C 64.624 295.986,64.716 295.996,64.903 295.508 C 65.195 294.747,64.607 293.741,64.228 294.354 M128.800 294.800 L 105.400 295.010 128.050 295.105 C 140.508 295.157,151.263 295.313,151.950 295.450 C 152.940 295.648,153.200 295.565,153.200 295.050 C 153.200 294.693,152.975 294.443,152.700 294.495 C 152.425 294.547,141.670 294.685,128.800 294.800 M66.000 298.576 C 66.000 298.893,66.180 299.264,66.400 299.400 C 66.620 299.536,66.800 299.277,66.800 298.824 C 66.800 298.371,66.620 298.000,66.400 298.000 C 66.180 298.000,66.000 298.259,66.000 298.576 M146.600 369.600 C 146.457 369.831,146.828 369.997,147.476 369.994 C 148.349 369.989,148.466 369.901,148.000 369.600 C 147.231 369.103,146.907 369.103,146.600 369.600 M152.000 371.627 C 151.130 371.882,151.195 371.925,152.500 371.960 C 154.023 372.001,154.406 371.828,153.500 371.510 C 153.225 371.413,152.550 371.466,152.000 371.627 M245.200 371.600 C 244.402 371.856,244.604 371.927,246.200 371.954 C 247.628 371.978,248.028 371.877,247.600 371.600 C 246.912 371.156,246.588 371.156,245.200 371.600 M157.800 373.600 C 157.650 373.843,158.228 373.998,159.276 373.994 C 160.537 373.989,160.839 373.884,160.400 373.600 C 159.615 373.093,158.114 373.093,157.800 373.600 M238.800 373.600 C 238.361 373.884,238.655 373.989,239.900 373.994 C 240.835 373.997,241.600 373.820,241.600 373.600 C 241.600 373.090,239.590 373.090,238.800 373.600 M165.900 375.077 C 164.480 375.446,165.260 376.000,167.200 376.000 C 168.300 376.000,169.200 375.820,169.200 375.600 C 169.200 375.380,168.855 375.200,168.433 375.200 C 168.011 375.200,167.426 375.131,167.133 375.048 C 166.840 374.964,166.285 374.977,165.900 375.077 M230.000 375.600 C 230.000 375.820,230.990 376.000,232.200 376.000 C 233.410 376.000,234.400 375.820,234.400 375.600 C 234.400 375.380,233.410 375.200,232.200 375.200 C 230.990 375.200,230.000 375.380,230.000 375.600 M221.000 377.223 L 219.800 377.467 221.200 377.758 C 221.970 377.919,223.045 377.885,223.589 377.683 L 224.577 377.317 223.389 377.148 C 222.735 377.056,221.660 377.090,221.000 377.223 M175.544 377.557 C 176.041 377.872,177.600 377.717,177.600 377.353 C 177.600 377.269,177.015 377.203,176.300 377.206 C 175.416 377.210,175.174 377.323,175.544 377.557 ", stroke: "none", fill: "#221a0b", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path3", d: "M338.485 38.709 C 338.102 39.089,337.296 39.621,336.695 39.891 C 336.093 40.162,335.600 40.576,335.600 40.812 C 335.600 41.048,335.072 41.426,334.426 41.651 C 333.781 41.876,332.967 42.496,332.617 43.030 C 332.268 43.563,331.728 44.000,331.418 44.000 C 331.108 44.000,330.740 44.360,330.600 44.800 C 330.460 45.240,330.092 45.600,329.782 45.600 C 329.472 45.600,328.924 46.050,328.563 46.600 C 328.203 47.150,327.667 47.600,327.372 47.600 C 327.077 47.600,326.409 48.005,325.886 48.500 C 325.363 48.995,324.331 49.850,323.593 50.400 C 322.855 50.950,321.795 51.895,321.237 52.500 C 320.678 53.105,319.998 53.600,319.725 53.600 C 319.452 53.600,319.035 53.960,318.800 54.400 C 318.565 54.840,318.110 55.200,317.789 55.200 C 317.469 55.200,316.982 55.560,316.707 56.000 C 316.432 56.440,316.013 56.800,315.776 56.800 C 315.370 56.800,313.903 57.972,311.600 60.134 C 311.050 60.650,310.285 61.186,309.900 61.324 C 309.515 61.462,309.200 61.811,309.200 62.100 C 309.200 62.388,308.660 62.828,308.000 63.078 C 307.340 63.327,306.800 63.816,306.800 64.165 C 306.800 64.514,306.474 64.800,306.075 64.800 C 305.676 64.800,304.832 65.340,304.200 66.000 C 303.568 66.660,302.814 67.200,302.525 67.200 C 302.236 67.200,302.000 67.479,302.000 67.821 C 302.000 68.162,301.478 68.624,300.840 68.846 C 300.202 69.068,299.589 69.599,299.478 70.025 C 299.361 70.470,298.930 70.800,298.464 70.800 C 298.005 70.800,297.544 71.147,297.400 71.600 C 297.260 72.040,296.957 72.400,296.726 72.400 C 296.495 72.400,295.652 72.940,294.853 73.601 C 294.054 74.261,292.896 75.206,292.279 75.701 C 291.662 76.195,290.762 76.973,290.279 77.430 C 289.796 77.886,289.085 78.376,288.700 78.517 C 288.315 78.659,288.000 79.051,288.000 79.387 C 288.000 79.724,287.760 80.000,287.466 80.000 C 286.774 80.000,283.481 82.537,281.415 84.661 C 279.450 86.682,278.179 86.997,277.489 85.634 C 277.220 85.102,276.460 84.472,275.800 84.234 C 275.140 83.995,274.150 83.504,273.600 83.142 C 273.050 82.780,272.150 82.350,271.600 82.187 C 271.050 82.023,270.187 81.567,269.681 81.173 C 269.176 80.778,268.231 80.339,267.581 80.196 C 266.932 80.053,266.400 79.778,266.400 79.584 C 266.400 79.390,265.470 78.955,264.333 78.617 C 263.197 78.280,261.982 77.757,261.633 77.456 C 261.285 77.155,260.322 76.805,259.494 76.678 C 258.665 76.552,257.542 76.098,256.998 75.670 C 256.454 75.242,255.168 74.766,254.139 74.612 C 253.111 74.458,251.626 73.987,250.840 73.566 C 250.055 73.145,248.957 72.800,248.400 72.800 C 247.843 72.800,246.715 72.439,245.892 71.998 C 245.069 71.557,243.245 71.033,241.839 70.834 C 240.432 70.635,238.858 70.198,238.341 69.863 C 237.823 69.529,235.679 69.066,233.575 68.834 C 231.471 68.603,229.221 68.160,228.575 67.850 C 227.929 67.540,225.510 67.164,223.200 67.016 C 220.890 66.867,218.190 66.566,217.200 66.347 C 212.778 65.370,209.732 65.210,196.200 65.244 C 184.488 65.274,181.632 65.387,180.900 65.850 C 180.351 66.197,177.854 66.590,174.500 66.859 C 171.141 67.128,168.642 67.523,168.080 67.872 C 167.574 68.187,165.504 68.625,163.480 68.845 C 161.009 69.114,159.644 69.448,159.326 69.863 C 159.059 70.211,157.837 70.616,156.526 70.790 C 155.247 70.960,153.487 71.481,152.615 71.949 C 151.744 72.417,150.463 72.800,149.769 72.800 C 149.076 72.800,148.069 73.145,147.533 73.567 C 146.996 73.989,145.847 74.456,144.979 74.604 C 144.110 74.753,142.930 75.205,142.355 75.609 C 141.780 76.013,140.661 76.465,139.869 76.613 C 139.077 76.762,138.227 77.126,137.981 77.423 C 137.734 77.720,136.558 78.246,135.366 78.593 C 134.175 78.939,133.200 79.390,133.200 79.596 C 133.200 79.801,132.501 80.157,131.647 80.387 C 130.792 80.618,129.878 81.065,129.615 81.382 C 129.351 81.700,128.475 82.174,127.668 82.438 C 126.861 82.701,125.771 83.250,125.246 83.658 C 124.721 84.066,124.011 84.400,123.668 84.400 C 123.324 84.400,122.403 84.809,121.622 85.310 C 119.506 86.664,118.762 87.105,117.000 88.048 C 116.120 88.519,115.256 89.151,115.080 89.452 C 114.904 89.753,114.434 90.000,114.035 90.000 C 113.378 90.000,111.316 91.352,109.500 92.975 C 109.115 93.319,108.647 93.600,108.460 93.600 C 108.273 93.600,107.375 94.140,106.463 94.800 C 105.552 95.460,104.632 96.000,104.418 96.000 C 104.203 96.000,103.835 96.360,103.600 96.800 C 103.365 97.240,102.933 97.600,102.641 97.600 C 102.124 97.600,100.079 99.027,97.940 100.881 C 97.356 101.386,96.405 102.160,95.826 102.600 C 95.246 103.040,94.194 103.911,93.486 104.535 C 92.779 105.159,91.575 106.149,90.810 106.735 C 88.982 108.136,77.707 119.451,76.313 121.283 C 75.715 122.069,74.680 123.258,74.013 123.925 C 73.346 124.593,72.800 125.267,72.800 125.423 C 72.800 125.580,72.348 126.179,71.796 126.754 C 69.666 128.972,69.292 129.440,68.646 130.700 C 68.279 131.415,67.808 132.000,67.597 132.000 C 67.387 132.000,67.101 132.455,66.962 133.011 C 66.822 133.566,66.369 134.203,65.954 134.425 C 65.539 134.647,65.200 135.078,65.200 135.383 C 65.200 135.689,64.775 136.447,64.255 137.069 C 63.735 137.691,63.183 138.605,63.028 139.100 C 62.873 139.595,62.587 140.000,62.392 140.000 C 62.197 140.000,61.679 140.810,61.241 141.800 C 60.803 142.790,60.262 143.600,60.038 143.600 C 59.814 143.600,59.437 144.320,59.200 145.200 C 58.963 146.080,58.616 146.800,58.428 146.800 C 58.240 146.800,57.813 147.485,57.478 148.323 C 57.143 149.160,56.583 150.082,56.234 150.372 C 55.885 150.661,55.600 151.291,55.600 151.771 C 55.600 152.252,55.168 153.230,54.640 153.946 C 54.112 154.661,53.567 155.848,53.430 156.583 C 53.292 157.318,52.915 158.139,52.592 158.406 C 52.270 158.674,51.808 159.637,51.566 160.547 C 51.324 161.456,50.883 162.473,50.586 162.806 C 50.289 163.139,49.872 164.187,49.659 165.135 C 49.446 166.082,49.010 167.159,48.689 167.529 C 48.369 167.898,47.984 169.002,47.835 169.982 C 47.686 170.961,47.231 172.311,46.825 172.982 C 46.418 173.652,45.956 175.010,45.799 176.000 C 45.642 176.990,45.277 178.070,44.990 178.400 C 44.702 178.730,44.257 180.162,44.000 181.583 C 43.744 183.004,43.275 184.668,42.958 185.282 C 42.640 185.896,42.214 187.703,42.011 189.299 C 41.808 190.894,41.374 192.740,41.047 193.400 C 40.720 194.060,40.247 196.488,39.996 198.796 C 39.744 201.104,39.347 203.222,39.114 203.504 C 38.709 203.991,37.536 214.420,37.591 217.038 C 37.605 217.719,37.344 218.799,37.011 219.438 C 36.167 221.056,36.126 236.722,36.959 239.083 C 37.535 240.717,38.400 248.730,38.400 252.437 C 38.400 253.793,38.625 254.785,39.035 255.238 C 39.558 255.817,40.158 259.737,40.386 264.071 C 40.394 264.221,40.692 264.635,41.049 264.991 C 41.437 265.380,41.816 266.725,41.995 268.352 C 42.158 269.844,42.571 271.500,42.911 272.032 C 43.251 272.564,43.713 274.216,43.938 275.702 C 44.164 277.189,44.612 278.669,44.935 278.992 C 45.258 279.315,45.645 280.469,45.794 281.558 C 45.949 282.681,46.383 283.823,46.800 284.200 C 47.219 284.579,47.652 285.721,47.808 286.860 C 47.959 287.959,48.322 288.949,48.615 289.061 C 48.908 289.174,49.342 290.170,49.579 291.276 C 49.816 292.382,50.363 293.735,50.795 294.284 C 51.226 294.832,51.691 295.880,51.829 296.613 C 51.966 297.345,52.321 298.038,52.617 298.151 C 52.913 298.265,53.282 299.042,53.436 299.879 C 53.590 300.716,54.139 301.909,54.658 302.531 C 55.176 303.153,55.600 303.980,55.600 304.369 C 55.600 304.758,55.950 305.393,56.377 305.779 C 56.805 306.166,57.265 306.986,57.400 307.600 C 57.535 308.214,57.995 309.034,58.423 309.421 C 58.850 309.807,59.200 310.430,59.200 310.804 C 59.200 311.177,59.648 311.967,60.197 312.559 C 60.745 313.150,61.301 314.063,61.433 314.588 C 61.564 315.113,61.926 315.639,62.236 315.759 C 62.546 315.878,62.800 316.244,62.800 316.574 C 62.800 316.903,63.295 317.764,63.900 318.487 C 64.505 319.211,65.228 320.162,65.506 320.601 C 67.737 324.125,68.316 324.889,71.793 328.900 C 72.127 329.285,72.403 329.735,72.406 329.900 C 72.410 330.065,72.905 330.766,73.506 331.459 C 74.108 332.151,75.050 333.284,75.600 333.977 C 76.150 334.670,77.905 336.557,79.500 338.172 C 81.095 339.786,82.400 341.224,82.400 341.367 C 82.400 341.778,85.131 344.400,85.560 344.400 C 85.772 344.400,86.060 344.760,86.200 345.200 C 86.340 345.640,86.622 346.000,86.827 346.000 C 87.032 346.000,88.162 346.945,89.338 348.100 C 93.606 352.292,98.042 356.000,98.789 356.000 C 99.000 356.000,99.364 356.359,99.599 356.797 C 99.866 357.297,100.617 357.689,101.613 357.848 C 102.486 357.988,103.200 358.281,103.200 358.499 C 103.200 359.269,100.991 362.341,100.300 362.532 C 99.906 362.641,99.600 363.107,99.600 363.600 C 99.600 364.138,99.292 364.555,98.800 364.684 C 98.360 364.799,98.000 365.046,98.000 365.233 C 98.000 365.420,97.460 366.125,96.800 366.800 C 96.140 367.475,95.600 368.287,95.600 368.605 C 95.600 368.922,95.150 369.476,94.600 369.837 C 94.050 370.197,93.600 370.819,93.600 371.219 C 93.600 371.619,93.240 372.060,92.800 372.200 C 92.360 372.340,92.000 372.730,92.000 373.066 C 92.000 373.403,91.505 374.185,90.900 374.804 C 88.910 376.839,88.000 378.116,88.000 378.873 C 88.000 379.302,87.574 379.782,87.000 380.000 C 86.388 380.233,86.000 380.694,86.000 381.190 C 86.000 381.651,85.736 382.000,85.387 382.000 C 85.051 382.000,84.663 382.315,84.527 382.700 C 84.391 383.085,83.767 383.885,83.140 384.477 C 82.513 385.070,82.000 385.925,82.000 386.377 C 82.000 386.854,81.739 387.200,81.379 387.200 C 81.038 387.200,80.576 387.722,80.354 388.360 C 80.132 388.998,79.601 389.611,79.175 389.722 C 78.749 389.834,78.400 390.238,78.400 390.620 C 78.400 391.003,78.038 391.695,77.596 392.158 C 75.345 394.517,74.400 395.789,74.400 396.459 C 74.400 396.869,74.116 397.200,73.765 397.200 C 73.416 397.200,72.927 397.740,72.678 398.400 C 72.428 399.060,72.000 399.600,71.726 399.600 C 71.452 399.600,71.013 400.005,70.751 400.500 C 70.488 400.995,69.942 401.635,69.537 401.923 C 69.131 402.210,68.800 402.706,68.800 403.025 C 68.800 403.344,68.350 403.997,67.800 404.475 C 67.250 404.953,66.800 405.651,66.800 406.025 C 66.800 406.400,66.440 406.801,66.000 406.916 C 65.369 407.081,65.200 407.462,65.200 408.714 C 65.200 410.706,66.088 411.623,67.111 410.686 C 67.490 410.339,68.303 409.593,68.918 409.028 C 69.533 408.463,70.204 408.000,70.409 408.000 C 70.614 408.000,71.076 407.550,71.437 407.000 C 71.797 406.450,72.335 406.000,72.632 406.000 C 72.929 406.000,73.365 405.640,73.600 405.200 C 73.835 404.760,74.222 404.400,74.459 404.400 C 74.887 404.400,76.472 403.214,78.871 401.100 C 79.557 400.495,80.362 400.000,80.659 400.000 C 80.957 400.000,81.200 399.721,81.200 399.379 C 81.200 399.038,81.740 398.570,82.400 398.340 C 83.060 398.110,83.600 397.698,83.600 397.425 C 83.600 397.152,84.080 396.710,84.666 396.443 C 85.714 395.965,86.822 395.079,88.595 393.300 C 89.088 392.805,89.690 392.400,89.932 392.400 C 90.174 392.400,90.565 392.040,90.800 391.600 C 91.035 391.160,91.488 390.800,91.805 390.800 C 92.122 390.800,92.665 390.367,93.012 389.838 C 93.358 389.309,94.061 388.771,94.572 388.643 C 95.083 388.514,95.798 387.957,96.160 387.405 C 96.522 386.852,97.078 386.400,97.395 386.400 C 97.712 386.400,98.165 386.040,98.400 385.600 C 98.635 385.160,99.096 384.800,99.423 384.800 C 99.750 384.800,100.222 384.350,100.473 383.800 C 100.723 383.250,101.258 382.800,101.661 382.800 C 102.064 382.800,102.618 382.440,102.893 382.000 C 103.168 381.560,103.604 381.200,103.862 381.200 C 104.121 381.200,104.842 380.660,105.465 380.000 C 106.088 379.340,106.817 378.800,107.085 378.800 C 107.353 378.800,107.758 378.452,107.986 378.027 C 108.213 377.602,108.750 377.143,109.179 377.007 C 109.608 376.870,110.070 376.408,110.206 375.980 C 110.343 375.551,110.807 375.200,111.240 375.200 C 111.672 375.200,112.131 374.923,112.261 374.585 C 112.391 374.247,113.060 373.688,113.748 373.343 C 114.437 372.998,115.785 371.888,116.745 370.876 L 118.490 369.036 119.278 370.118 C 119.806 370.843,120.432 371.200,121.171 371.200 C 121.779 371.200,122.596 371.553,122.986 371.985 C 123.377 372.417,124.289 372.965,125.013 373.204 C 125.737 373.443,126.428 373.897,126.549 374.212 C 126.670 374.528,127.495 374.902,128.382 375.044 C 129.269 375.185,130.371 375.628,130.830 376.026 C 131.290 376.425,132.236 376.871,132.933 377.019 C 133.630 377.166,134.560 377.603,135.000 377.990 C 135.440 378.377,136.497 378.800,137.350 378.930 C 138.202 379.060,139.230 379.466,139.635 379.832 C 140.040 380.198,141.212 380.655,142.240 380.847 C 143.268 381.039,144.309 381.470,144.555 381.805 C 144.804 382.147,145.940 382.525,147.141 382.668 C 148.456 382.823,149.550 383.209,149.978 383.668 C 150.438 384.163,151.560 384.522,153.288 384.731 C 154.728 384.904,156.179 385.322,156.519 385.662 C 156.894 386.037,158.260 386.384,159.994 386.545 C 161.566 386.691,163.516 387.147,164.326 387.558 C 165.261 388.032,167.190 388.413,169.600 388.599 C 171.690 388.761,173.905 389.152,174.522 389.468 C 177.886 391.193,220.364 391.176,224.442 389.448 C 225.236 389.112,227.576 388.717,229.642 388.569 C 232.152 388.389,233.799 388.061,234.600 387.580 C 235.260 387.185,236.970 386.735,238.400 386.582 C 239.830 386.428,241.540 385.988,242.200 385.603 C 242.860 385.218,244.370 384.795,245.555 384.664 C 246.740 384.532,248.014 384.149,248.386 383.813 C 248.758 383.476,250.128 382.994,251.431 382.742 C 252.734 382.490,254.073 382.050,254.406 381.764 C 254.740 381.479,255.890 381.049,256.961 380.809 C 258.033 380.569,259.359 380.018,259.909 379.586 C 260.458 379.154,261.396 378.800,261.992 378.800 C 262.588 378.800,263.386 378.458,263.764 378.040 C 264.143 377.621,265.116 377.157,265.926 377.007 C 266.737 376.858,267.760 376.409,268.200 376.011 C 268.640 375.612,269.573 375.165,270.272 375.017 C 270.972 374.870,271.752 374.499,272.004 374.195 C 272.257 373.890,273.125 373.432,273.932 373.176 C 274.739 372.921,275.580 372.490,275.800 372.219 C 276.020 371.948,276.859 371.509,277.665 371.244 C 278.470 370.978,279.223 370.517,279.338 370.218 C 279.452 369.920,280.079 369.558,280.731 369.415 C 281.384 369.272,282.227 368.812,282.607 368.392 C 282.986 367.973,283.905 367.429,284.648 367.184 C 285.392 366.939,286.000 366.584,286.000 366.396 C 286.000 366.208,286.366 365.938,286.813 365.796 C 287.260 365.654,288.062 365.147,288.595 364.669 C 289.128 364.191,290.494 363.260,291.631 362.600 C 292.768 361.940,294.068 360.995,294.521 360.500 C 294.974 360.005,295.575 359.600,295.858 359.600 C 296.141 359.600,296.565 359.240,296.800 358.800 C 297.035 358.360,297.447 358.000,297.714 358.000 C 297.981 357.999,298.740 357.549,299.400 356.999 C 302.690 354.257,303.380 353.668,305.253 352.000 C 309.121 348.556,311.773 346.100,312.681 345.119 C 312.945 344.834,313.395 344.384,313.681 344.119 C 313.966 343.855,314.420 343.405,314.689 343.119 C 314.958 342.834,315.385 342.397,315.639 342.150 C 316.398 341.410,318.867 338.935,319.350 338.430 C 319.598 338.172,320.205 337.577,320.700 337.108 C 321.195 336.639,321.600 336.090,321.600 335.888 C 321.600 335.686,322.410 334.756,323.400 333.820 C 324.390 332.885,325.200 331.985,325.200 331.821 C 325.200 331.656,325.695 331.027,326.300 330.423 C 326.905 329.819,327.850 328.653,328.400 327.832 C 328.950 327.011,329.805 325.876,330.300 325.311 C 330.795 324.746,331.200 324.034,331.200 323.729 C 331.200 323.424,331.478 323.068,331.817 322.938 C 332.156 322.808,332.790 322.004,333.225 321.151 C 333.660 320.298,334.193 319.600,334.408 319.600 C 334.624 319.600,334.800 319.355,334.800 319.055 C 334.800 318.755,335.340 317.831,336.000 317.000 C 336.660 316.169,337.200 315.161,337.200 314.759 C 337.200 314.357,337.560 313.835,338.000 313.600 C 338.440 313.365,338.800 312.943,338.800 312.664 C 338.800 312.384,339.250 311.545,339.800 310.800 C 340.350 310.055,340.800 309.147,340.800 308.784 C 340.800 308.421,341.153 307.804,341.585 307.414 C 342.017 307.023,342.571 306.095,342.816 305.352 C 343.061 304.608,343.421 304.000,343.615 304.000 C 343.809 304.000,344.186 303.235,344.452 302.300 C 344.718 301.365,345.252 300.240,345.638 299.800 C 346.025 299.360,346.468 298.460,346.624 297.800 C 346.780 297.140,347.131 296.330,347.403 296.000 C 347.676 295.670,348.126 294.695,348.403 293.833 C 348.680 292.970,349.229 291.710,349.624 291.033 C 350.019 290.355,350.463 289.131,350.613 288.314 C 350.762 287.497,351.125 286.628,351.420 286.384 C 351.715 286.139,352.165 284.917,352.420 283.669 C 352.675 282.421,353.126 281.125,353.423 280.790 C 353.719 280.454,354.082 279.374,354.228 278.390 C 354.375 277.405,354.746 276.197,355.053 275.705 C 355.360 275.213,355.868 273.471,356.181 271.833 C 356.495 270.195,357.007 268.348,357.320 267.728 C 357.633 267.107,358.006 265.281,358.150 263.669 C 358.294 262.057,358.688 260.204,359.026 259.550 C 359.382 258.861,359.813 256.311,360.052 253.481 C 360.278 250.796,360.764 247.790,361.132 246.800 C 362.175 243.989,362.143 210.863,361.095 209.705 C 360.534 209.085,360.337 207.884,360.131 203.822 C 359.937 199.987,359.685 198.356,359.118 197.259 C 358.645 196.344,358.273 194.534,358.122 192.400 C 357.957 190.083,357.659 188.715,357.187 188.106 C 356.797 187.602,356.374 186.088,356.218 184.634 C 356.041 182.978,355.667 181.738,355.171 181.167 C 354.747 180.678,354.399 179.720,354.398 179.039 C 354.395 177.422,353.660 174.800,353.210 174.800 C 353.015 174.800,352.649 173.765,352.394 172.500 C 352.140 171.235,351.676 170.000,351.364 169.755 C 351.052 169.509,350.639 168.468,350.447 167.440 C 350.255 166.412,349.823 165.263,349.486 164.886 C 349.150 164.509,348.676 163.456,348.434 162.547 C 348.192 161.637,347.740 160.682,347.428 160.424 C 347.117 160.165,346.744 159.255,346.600 158.400 C 346.456 157.545,346.091 156.641,345.789 156.391 C 345.488 156.141,345.032 155.275,344.776 154.468 C 344.521 153.661,344.074 152.809,343.783 152.576 C 343.492 152.342,342.952 151.397,342.584 150.476 C 342.215 149.554,341.760 148.800,341.572 148.800 C 341.384 148.800,341.037 148.080,340.800 147.200 C 340.563 146.320,340.190 145.600,339.970 145.600 C 339.751 145.600,339.224 144.790,338.800 143.800 C 338.376 142.810,337.842 142.000,337.614 142.000 C 337.386 142.000,337.200 141.762,337.200 141.471 C 337.200 141.180,336.665 140.235,336.011 139.371 C 335.357 138.507,334.817 137.584,334.811 137.320 C 334.805 137.056,334.554 136.696,334.254 136.520 C 333.954 136.344,333.409 135.615,333.044 134.900 C 332.678 134.185,332.216 133.600,332.017 133.600 C 331.817 133.600,331.546 133.260,331.414 132.845 C 331.282 132.429,330.775 131.641,330.287 131.094 C 329.412 130.112,328.804 129.346,326.402 126.200 C 322.819 121.510,304.845 103.200,303.823 103.200 C 303.531 103.200,302.997 102.750,302.637 102.200 C 302.276 101.650,301.735 101.200,301.434 101.200 C 301.132 101.200,300.779 100.921,300.648 100.581 C 300.517 100.241,299.868 99.773,299.205 99.542 C 298.542 99.311,298.000 98.959,298.000 98.761 C 298.000 98.562,297.764 98.400,297.476 98.400 C 295.906 98.400,295.444 97.379,296.417 96.063 C 296.930 95.368,297.583 94.800,297.868 94.800 C 298.152 94.800,298.496 94.356,298.632 93.814 C 298.768 93.272,299.204 92.726,299.600 92.600 C 299.996 92.474,300.432 91.928,300.568 91.386 C 300.704 90.844,301.048 90.400,301.333 90.400 C 301.618 90.400,302.097 89.772,302.399 89.004 C 302.700 88.236,303.273 87.504,303.673 87.377 C 304.073 87.250,304.400 86.781,304.400 86.336 C 304.400 85.870,304.730 85.439,305.175 85.322 C 305.601 85.211,306.132 84.598,306.354 83.960 C 306.576 83.322,307.038 82.800,307.379 82.800 C 307.721 82.800,308.000 82.541,308.000 82.225 C 308.000 81.908,308.540 81.058,309.200 80.336 C 309.860 79.613,310.400 78.835,310.400 78.607 C 310.400 78.379,310.760 77.968,311.200 77.693 C 311.640 77.418,312.000 76.945,312.000 76.643 C 312.000 76.340,312.450 75.797,313.000 75.437 C 313.550 75.076,314.000 74.510,314.000 74.178 C 314.000 73.846,314.278 73.468,314.617 73.338 C 314.956 73.208,315.579 72.426,316.000 71.600 C 316.421 70.774,317.044 69.992,317.383 69.862 C 317.722 69.732,318.000 69.415,318.000 69.158 C 318.000 68.902,318.452 68.221,319.004 67.646 C 321.340 65.215,321.600 64.893,321.600 64.445 C 321.600 64.187,321.878 63.868,322.217 63.738 C 322.556 63.608,323.179 62.826,323.600 62.000 C 324.021 61.174,324.644 60.392,324.983 60.262 C 325.322 60.132,325.600 59.801,325.600 59.527 C 325.600 59.063,325.897 58.701,328.300 56.233 C 328.795 55.724,329.200 55.136,329.200 54.926 C 329.200 54.716,329.645 54.157,330.189 53.684 C 330.734 53.211,331.291 52.375,331.429 51.826 C 331.567 51.278,332.022 50.720,332.440 50.587 C 332.858 50.455,333.200 50.098,333.200 49.796 C 333.200 49.493,333.518 49.010,333.906 48.723 C 334.295 48.435,334.831 47.705,335.098 47.100 C 335.364 46.495,335.762 46.000,335.981 46.000 C 336.200 46.000,336.664 45.450,337.011 44.779 C 337.656 43.531,338.284 42.722,339.934 41.013 C 341.479 39.412,340.057 37.150,338.485 38.709 M339.687 40.073 C 339.076 40.684,338.625 40.233,338.964 39.350 C 339.164 38.829,339.337 38.777,339.693 39.133 C 340.049 39.489,340.047 39.713,339.687 40.073 M338.400 41.182 C 338.400 41.612,337.995 42.390,337.500 42.912 C 336.215 44.266,335.332 45.407,334.801 46.399 C 334.547 46.873,334.038 47.602,333.670 48.019 C 332.495 49.349,331.199 50.954,329.970 52.600 C 327.487 55.928,325.652 58.233,324.500 59.470 C 324.005 60.001,323.600 60.539,323.600 60.665 C 323.600 60.791,323.105 61.493,322.500 62.225 C 321.895 62.956,321.009 64.060,320.530 64.677 C 320.052 65.295,318.653 67.060,317.422 68.600 C 316.191 70.140,314.872 71.814,314.492 72.320 C 314.111 72.826,313.305 73.839,312.700 74.573 C 312.095 75.306,311.600 76.009,311.600 76.135 C 311.600 76.345,310.782 77.293,308.772 79.414 C 308.347 79.862,308.000 80.371,308.000 80.546 C 308.000 80.720,307.100 81.898,306.000 83.163 C 304.900 84.427,304.000 85.575,304.000 85.713 C 304.000 85.851,303.595 86.406,303.100 86.947 C 302.605 87.487,301.891 88.350,301.514 88.865 C 300.646 90.049,295.714 95.943,294.964 96.693 C 294.654 97.003,294.400 97.604,294.400 98.029 C 294.400 98.453,294.130 98.800,293.800 98.800 C 293.470 98.800,293.200 98.936,293.200 99.103 C 293.200 99.269,294.014 99.341,295.010 99.262 C 296.984 99.105,298.971 99.842,300.183 101.181 C 300.591 101.632,301.166 102.000,301.462 102.000 C 301.758 102.000,302.000 102.153,302.000 102.341 C 302.000 102.529,303.124 103.564,304.498 104.641 C 308.780 107.998,325.200 124.917,325.200 125.971 C 325.200 126.207,325.377 126.400,325.594 126.400 C 325.811 126.400,326.396 127.015,326.894 127.766 C 327.392 128.517,328.804 130.452,330.030 132.066 C 333.834 137.070,339.741 146.126,340.946 148.800 C 341.095 149.130,341.741 150.300,342.382 151.400 C 343.022 152.500,343.767 153.850,344.036 154.400 C 345.644 157.684,346.400 159.409,346.400 159.790 C 346.400 160.027,346.712 160.667,347.094 161.211 C 347.476 161.755,348.119 163.100,348.524 164.200 C 348.928 165.300,349.587 167.100,349.988 168.200 C 350.389 169.300,351.004 170.740,351.356 171.400 C 351.707 172.060,351.996 172.963,351.998 173.406 C 351.999 173.849,352.346 174.857,352.769 175.646 C 353.191 176.435,353.731 178.128,353.968 179.409 C 354.205 180.690,354.646 182.116,354.949 182.579 C 355.252 183.041,355.634 184.405,355.799 185.610 C 355.963 186.814,356.421 188.627,356.818 189.638 C 357.215 190.649,357.665 192.809,357.820 194.438 C 357.974 196.067,358.345 198.002,358.645 198.738 C 359.133 199.933,359.466 202.506,360.262 211.200 C 360.392 212.630,360.706 214.700,360.958 215.800 C 361.513 218.221,361.145 240.679,360.480 245.000 C 360.243 246.540,359.856 249.690,359.621 252.000 C 359.385 254.310,358.939 257.010,358.630 258.000 C 358.320 258.990,357.950 260.951,357.807 262.358 C 357.664 263.765,357.292 265.565,356.980 266.358 C 356.668 267.151,356.151 268.970,355.831 270.400 C 355.255 272.980,354.559 275.339,353.351 278.800 C 353.006 279.790,352.452 281.590,352.120 282.800 C 351.787 284.010,351.354 285.200,351.156 285.444 C 350.958 285.687,350.456 286.857,350.041 288.044 C 349.626 289.230,348.998 290.740,348.645 291.400 C 348.293 292.060,348.004 292.856,348.002 293.169 C 348.001 293.481,347.761 294.021,347.468 294.369 C 347.175 294.716,346.610 295.900,346.213 297.000 C 345.816 298.100,345.245 299.284,344.945 299.631 C 344.645 299.979,344.399 300.519,344.397 300.831 C 344.396 301.144,344.028 301.940,343.580 302.600 C 343.132 303.260,342.502 304.340,342.180 305.000 C 341.857 305.660,341.065 307.100,340.418 308.200 C 339.772 309.300,338.974 310.754,338.645 311.432 C 338.315 312.109,337.766 312.896,337.423 313.181 C 337.080 313.465,336.800 313.927,336.800 314.207 C 336.800 315.464,327.161 328.652,321.894 334.602 C 319.973 336.772,306.655 350.027,304.818 351.597 C 303.661 352.586,302.214 353.846,301.601 354.397 C 300.988 354.949,299.829 355.850,299.025 356.400 C 298.221 356.950,296.469 358.255,295.131 359.300 C 293.793 360.345,292.575 361.200,292.424 361.200 C 292.274 361.200,291.794 361.532,291.358 361.939 C 290.922 362.345,290.100 362.930,289.531 363.239 C 288.963 363.547,287.482 364.475,286.241 365.300 C 285.000 366.125,283.830 366.800,283.641 366.800 C 283.452 366.800,283.053 367.095,282.755 367.455 C 282.456 367.815,281.489 368.458,280.606 368.885 C 278.026 370.131,275.750 371.366,275.153 371.842 C 274.849 372.085,273.982 372.492,273.226 372.747 C 272.470 373.002,271.570 373.455,271.226 373.754 C 270.882 374.054,269.939 374.511,269.132 374.770 C 268.325 375.029,267.448 375.502,267.183 375.820 C 266.918 376.139,266.408 376.400,266.048 376.400 C 265.688 376.400,264.548 376.850,263.515 377.400 C 262.482 377.950,261.403 378.401,261.118 378.402 C 260.833 378.404,260.060 378.692,259.400 379.042 C 258.740 379.393,257.030 380.087,255.600 380.586 C 248.279 383.139,246.771 383.622,243.800 384.361 C 242.260 384.744,240.640 385.248,240.200 385.482 C 239.760 385.716,238.590 386.025,237.600 386.170 C 236.610 386.315,234.450 386.778,232.800 387.200 C 231.150 387.622,227.820 388.249,225.400 388.593 C 222.980 388.937,219.920 389.419,218.600 389.665 C 215.365 390.268,184.719 390.290,181.200 389.692 C 179.770 389.449,176.009 388.884,172.843 388.437 C 169.676 387.989,166.346 387.358,165.443 387.035 C 164.539 386.711,162.798 386.338,161.573 386.204 C 160.348 386.070,158.858 385.708,158.262 385.398 C 157.665 385.089,156.058 384.619,154.689 384.355 C 153.320 384.090,151.573 383.542,150.806 383.137 C 150.039 382.732,148.958 382.400,148.403 382.400 C 147.848 382.400,146.548 381.950,145.515 381.400 C 144.482 380.850,143.313 380.394,142.918 380.387 C 142.523 380.381,141.300 379.932,140.200 379.391 C 139.100 378.850,137.975 378.406,137.700 378.404 C 137.425 378.402,136.345 377.955,135.300 377.411 C 134.255 376.867,132.320 375.951,131.000 375.376 C 129.680 374.801,128.240 374.135,127.800 373.896 C 124.501 372.107,120.934 370.400,120.493 370.400 C 120.099 370.400,120.034 370.016,120.238 368.900 C 120.507 367.431,120.497 367.414,119.725 368.100 C 119.292 368.485,118.753 368.800,118.528 368.800 C 118.303 368.800,117.572 369.295,116.904 369.900 C 114.977 371.646,113.550 372.800,113.319 372.800 C 113.202 372.800,112.515 373.295,111.794 373.900 C 111.073 374.505,109.699 375.656,108.741 376.458 C 107.784 377.261,105.920 378.729,104.600 379.721 C 103.280 380.714,100.940 382.585,99.400 383.879 C 97.860 385.173,95.610 386.964,94.400 387.859 C 92.185 389.496,86.934 393.762,85.344 395.217 C 84.873 395.648,84.371 396.000,84.230 396.000 C 84.088 396.000,82.368 397.305,80.408 398.900 C 78.447 400.495,76.068 402.376,75.121 403.079 C 74.175 403.783,72.770 404.952,72.000 405.677 C 69.375 408.149,66.702 409.673,66.080 409.052 C 65.617 408.588,65.676 408.351,66.466 407.509 C 67.395 406.520,67.763 406.051,70.002 403.000 C 71.504 400.953,72.719 399.407,74.100 397.786 C 74.705 397.076,75.200 396.383,75.200 396.247 C 75.200 396.111,75.475 395.685,75.812 395.300 C 77.928 392.879,78.800 391.791,78.800 391.570 C 78.800 391.351,79.652 390.334,81.820 387.966 C 82.139 387.618,82.400 387.192,82.400 387.019 C 82.400 386.847,82.895 386.106,83.500 385.373 C 84.105 384.639,84.960 383.552,85.400 382.956 C 85.840 382.360,86.695 381.347,87.300 380.705 C 87.905 380.063,88.400 379.452,88.400 379.346 C 88.400 379.022,90.967 375.821,91.500 375.480 C 91.775 375.304,92.000 374.933,92.000 374.655 C 92.000 374.377,92.540 373.632,93.200 373.000 C 93.860 372.368,94.400 371.704,94.400 371.525 C 94.400 371.346,94.678 370.885,95.018 370.500 C 95.627 369.809,97.778 367.069,99.114 365.282 C 99.491 364.777,100.292 363.787,100.893 363.082 C 101.494 362.377,102.217 361.528,102.499 361.195 C 103.819 359.634,104.785 358.040,104.507 357.881 C 104.338 357.784,103.495 357.578,102.633 357.422 C 101.233 357.169,98.890 355.776,97.800 354.550 C 97.580 354.302,97.098 353.942,96.729 353.750 C 93.706 352.174,76.322 334.504,72.816 329.443 C 72.495 328.979,72.045 328.380,71.816 328.111 C 71.587 327.842,70.902 326.942,70.294 326.111 C 69.686 325.280,68.291 323.446,67.194 322.034 C 66.097 320.623,65.200 319.228,65.200 318.934 C 65.200 318.641,65.048 318.400,64.863 318.400 C 64.677 318.400,64.109 317.590,63.600 316.600 C 63.091 315.610,62.540 314.800,62.376 314.800 C 62.212 314.800,61.876 314.305,61.630 313.700 C 61.383 313.095,60.574 311.610,59.832 310.400 C 59.090 309.190,57.722 306.715,56.792 304.900 C 55.861 303.085,54.957 301.600,54.782 301.600 C 54.607 301.600,54.339 301.015,54.187 300.300 C 54.035 299.585,53.498 298.190,52.993 297.200 C 51.260 293.803,50.000 290.988,50.000 290.515 C 50.000 290.255,49.550 289.196,49.000 288.162 C 48.450 287.127,48.000 285.924,48.000 285.488 C 48.000 285.051,47.659 284.133,47.243 283.447 C 46.827 282.761,46.356 281.570,46.198 280.800 C 46.039 280.030,45.570 278.645,45.155 277.722 C 44.740 276.799,44.403 275.629,44.407 275.122 C 44.411 274.615,43.968 272.760,43.424 271.000 C 42.034 266.509,41.240 263.154,40.614 259.131 C 40.317 257.223,39.794 254.697,39.452 253.518 C 38.216 249.267,36.995 223.813,37.862 220.360 C 38.116 219.349,38.338 217.009,38.356 215.160 C 38.393 211.326,38.646 209.137,39.416 206.000 C 39.713 204.790,40.158 202.180,40.404 200.200 C 40.650 198.220,41.088 195.970,41.378 195.200 C 41.668 194.430,42.036 192.810,42.197 191.600 C 42.357 190.390,42.919 188.072,43.444 186.449 C 43.970 184.826,44.401 183.026,44.402 182.449 C 44.404 181.872,44.675 180.883,45.004 180.251 C 45.334 179.619,45.887 178.009,46.232 176.675 C 46.578 175.340,47.118 173.882,47.431 173.435 C 47.744 172.988,48.001 172.167,48.002 171.611 C 48.004 171.055,48.293 170.060,48.645 169.400 C 48.998 168.740,49.617 167.254,50.022 166.097 C 50.428 164.940,51.038 163.595,51.380 163.108 C 51.721 162.621,52.000 161.893,52.000 161.490 C 52.000 161.088,52.360 160.093,52.799 159.279 C 53.238 158.466,53.865 157.170,54.191 156.400 C 54.517 155.630,54.944 154.730,55.140 154.400 C 55.335 154.070,56.104 152.540,56.848 151.000 C 57.591 149.460,58.393 148.074,58.630 147.920 C 58.866 147.765,59.300 146.910,59.594 146.020 C 59.888 145.129,60.288 144.400,60.484 144.400 C 60.680 144.400,61.098 143.784,61.413 143.032 C 61.727 142.279,62.573 140.820,63.292 139.788 C 64.011 138.756,64.960 137.321,65.400 136.599 C 66.612 134.608,67.696 133.045,68.172 132.600 C 68.407 132.380,69.221 131.300,69.979 130.200 C 70.738 129.100,72.271 127.120,73.386 125.800 C 74.502 124.480,75.771 122.954,76.207 122.409 C 77.128 121.257,90.085 108.291,91.825 106.779 C 92.471 106.218,94.520 104.508,96.377 102.979 C 99.646 100.290,100.495 99.677,106.847 95.421 C 108.471 94.333,109.980 93.294,110.200 93.111 C 110.420 92.928,111.410 92.275,112.400 91.660 C 113.390 91.044,114.740 90.201,115.400 89.785 C 116.060 89.370,117.140 88.734,117.800 88.372 C 118.460 88.010,119.810 87.249,120.800 86.679 C 121.790 86.110,124.130 84.904,126.000 83.999 C 127.870 83.093,129.670 82.189,130.000 81.988 C 131.236 81.237,135.437 79.277,136.400 79.002 C 136.950 78.845,137.760 78.491,138.200 78.215 C 139.299 77.525,143.782 75.683,146.169 74.940 C 147.252 74.604,148.512 74.095,148.969 73.811 C 149.426 73.527,150.564 73.181,151.499 73.043 C 152.433 72.904,153.963 72.455,154.899 72.044 C 156.913 71.160,160.647 70.164,164.800 69.404 C 166.450 69.102,169.330 68.500,171.200 68.066 C 173.070 67.632,176.598 67.175,179.040 67.051 C 181.483 66.927,183.969 66.640,184.566 66.413 C 185.956 65.884,209.282 65.863,211.200 66.388 C 211.970 66.599,215.149 66.950,218.265 67.168 C 221.380 67.386,225.340 67.919,227.065 68.352 C 228.789 68.785,231.460 69.266,233.000 69.420 C 234.540 69.574,236.252 69.930,236.805 70.212 C 237.358 70.493,238.708 70.856,239.805 71.019 C 240.902 71.183,242.929 71.740,244.309 72.258 C 245.689 72.776,247.181 73.200,247.625 73.200 C 248.069 73.200,249.100 73.533,249.916 73.941 C 250.732 74.348,252.300 74.900,253.400 75.167 C 254.500 75.434,255.763 75.887,256.206 76.174 C 256.649 76.460,257.559 76.815,258.227 76.962 C 258.895 77.109,260.318 77.672,261.389 78.214 C 262.460 78.757,263.643 79.200,264.019 79.200 C 264.395 79.200,264.926 79.470,265.200 79.800 C 265.474 80.130,265.901 80.400,266.149 80.400 C 266.570 80.400,271.065 82.463,272.400 83.269 C 272.730 83.469,273.848 84.017,274.884 84.488 C 276.312 85.138,276.828 85.617,277.015 86.468 C 277.431 88.362,278.386 88.117,281.600 85.290 C 282.150 84.806,283.770 83.509,285.200 82.408 C 286.630 81.307,288.060 80.185,288.377 79.915 C 291.348 77.388,292.456 76.487,293.434 75.800 C 294.061 75.360,295.120 74.514,295.787 73.921 C 297.384 72.500,298.247 71.792,303.000 68.002 C 305.200 66.248,307.285 64.539,307.634 64.206 C 307.982 63.873,308.416 63.600,308.597 63.600 C 308.779 63.600,310.024 62.587,311.364 61.350 C 314.890 58.094,315.477 57.600,315.825 57.600 C 316.114 57.600,320.489 54.015,321.400 53.032 C 321.620 52.794,322.700 51.924,323.800 51.098 C 324.900 50.272,326.216 49.282,326.725 48.898 C 327.234 48.514,328.041 47.840,328.517 47.400 C 329.779 46.235,332.066 44.348,333.607 43.200 C 334.345 42.650,335.411 41.801,335.975 41.313 C 337.267 40.194,338.400 40.133,338.400 41.182 M196.600 76.849 C 195.280 77.063,193.480 77.150,192.600 77.042 C 190.024 76.725,179.948 77.506,178.146 78.162 C 177.236 78.493,174.806 78.883,172.746 79.029 C 170.647 79.177,168.284 79.601,167.372 79.993 C 166.476 80.377,164.548 80.819,163.087 80.976 C 161.521 81.144,160.055 81.554,159.516 81.975 C 158.988 82.388,157.662 82.767,156.384 82.871 C 155.026 82.982,153.709 83.375,152.984 83.885 C 152.333 84.344,150.913 84.828,149.829 84.962 C 148.745 85.095,147.571 85.465,147.219 85.783 C 146.867 86.101,145.830 86.482,144.914 86.628 C 143.999 86.775,142.890 87.230,142.450 87.640 C 142.010 88.049,140.892 88.555,139.967 88.763 C 139.041 88.971,138.165 89.334,138.019 89.569 C 137.874 89.805,136.820 90.275,135.677 90.614 C 134.535 90.953,133.600 91.397,133.600 91.600 C 133.600 91.803,132.888 92.161,132.017 92.395 C 131.146 92.630,130.313 93.017,130.165 93.256 C 130.018 93.495,129.155 94.049,128.248 94.486 C 125.635 95.748,124.231 96.561,123.019 97.513 C 122.399 98.001,121.588 98.400,121.216 98.400 C 120.844 98.400,120.117 98.850,119.600 99.400 C 119.083 99.950,118.493 100.400,118.288 100.400 C 118.083 100.400,117.381 100.850,116.727 101.400 C 116.073 101.950,115.289 102.400,114.983 102.400 C 114.678 102.400,114.235 102.760,114.000 103.200 C 113.765 103.640,113.310 104.000,112.989 104.000 C 112.669 104.000,112.182 104.360,111.907 104.800 C 111.632 105.240,111.219 105.600,110.989 105.600 C 110.758 105.600,109.947 106.133,109.185 106.784 C 108.423 107.435,107.641 107.975,107.446 107.984 C 107.251 107.993,106.688 108.405,106.195 108.900 C 105.702 109.395,104.691 110.310,103.949 110.933 C 100.245 114.043,98.201 115.967,91.554 122.600 C 87.586 126.560,84.038 130.168,83.670 130.618 C 83.301 131.068,82.053 132.598,80.896 134.018 C 79.739 135.438,78.569 136.863,78.296 137.185 C 77.651 137.946,75.523 140.821,75.004 141.632 C 74.782 141.980,74.206 142.880,73.724 143.632 C 73.242 144.384,72.612 145.257,72.324 145.571 C 72.036 145.885,71.530 146.627,71.200 147.220 C 70.870 147.814,70.264 148.907,69.853 149.650 C 69.442 150.392,68.788 151.360,68.399 151.800 C 68.010 152.240,67.563 153.024,67.406 153.541 C 67.249 154.059,66.688 155.119,66.160 155.897 C 65.632 156.675,65.200 157.534,65.200 157.807 C 65.200 158.079,64.939 158.518,64.620 158.783 C 64.302 159.048,63.827 159.925,63.565 160.732 C 63.303 161.539,62.754 162.678,62.344 163.262 C 61.935 163.846,61.600 164.676,61.600 165.108 C 61.600 165.539,61.263 166.321,60.852 166.846 C 60.441 167.371,59.971 168.430,59.809 169.200 C 59.647 169.970,59.195 171.140,58.806 171.800 C 58.416 172.460,57.970 173.720,57.815 174.600 C 57.659 175.480,57.271 176.491,56.952 176.848 C 56.632 177.204,56.167 178.644,55.918 180.048 C 55.669 181.451,55.230 182.879,54.942 183.221 C 54.655 183.562,54.252 185.024,54.047 186.468 C 53.843 187.912,53.362 189.700,52.979 190.441 C 52.590 191.193,52.152 193.292,51.988 195.194 C 51.826 197.067,51.423 199.320,51.093 200.200 C 50.762 201.080,50.369 203.780,50.218 206.200 C 50.068 208.620,49.589 212.400,49.155 214.600 C 48.076 220.063,47.929 240.386,48.941 244.217 C 49.292 245.547,49.681 247.977,49.807 249.617 C 50.153 254.161,50.864 258.947,51.268 259.459 C 51.467 259.711,51.779 261.249,51.961 262.875 C 52.144 264.502,52.570 266.368,52.908 267.022 C 53.246 267.676,53.647 269.108,53.800 270.205 C 53.953 271.302,54.402 272.920,54.799 273.800 C 55.195 274.680,55.643 276.120,55.793 277.000 C 55.944 277.880,56.393 279.140,56.790 279.800 C 57.188 280.460,57.641 281.630,57.796 282.400 C 57.951 283.170,58.331 284.199,58.639 284.686 C 58.948 285.173,59.487 286.418,59.839 287.453 C 60.190 288.488,60.730 289.587,61.039 289.896 C 61.347 290.205,61.600 290.779,61.600 291.173 C 61.600 291.566,62.032 292.525,62.560 293.303 C 63.088 294.081,63.649 295.141,63.807 295.659 C 63.965 296.176,64.321 296.870,64.597 297.200 C 64.873 297.530,65.308 298.453,65.564 299.252 C 65.821 300.050,66.383 301.023,66.815 301.414 C 67.247 301.804,67.600 302.353,67.600 302.633 C 67.600 302.914,67.877 303.419,68.215 303.757 C 68.553 304.095,69.082 304.978,69.391 305.718 C 69.701 306.458,70.234 307.296,70.577 307.581 C 70.920 307.865,71.200 308.321,71.200 308.594 C 71.200 309.126,73.007 311.662,74.369 313.042 C 74.826 313.505,75.207 314.045,75.216 314.242 C 75.225 314.439,75.765 315.223,76.416 315.985 C 77.067 316.747,77.600 317.512,77.600 317.685 C 77.600 317.858,77.915 318.333,78.300 318.739 C 79.309 319.804,82.520 323.601,83.056 324.362 C 83.307 324.719,84.340 325.908,85.352 327.005 C 86.364 328.102,87.193 329.225,87.196 329.500 C 87.198 329.775,87.361 330.000,87.558 330.000 C 87.923 330.000,96.800 338.593,96.800 338.946 C 96.800 339.258,99.234 341.600,99.558 341.600 C 100.085 341.600,102.800 344.205,102.800 344.710 C 102.800 344.980,103.128 345.200,103.528 345.200 C 104.282 345.200,108.000 348.496,108.000 349.165 C 108.000 350.984,110.518 351.202,111.347 349.455 C 111.698 348.715,112.259 347.883,112.593 347.606 C 112.927 347.329,113.200 346.875,113.200 346.597 C 113.200 346.319,113.650 345.797,114.200 345.437 C 114.750 345.076,115.200 344.614,115.200 344.409 C 115.200 344.204,115.605 343.601,116.100 343.069 C 116.595 342.537,117.450 341.434,118.000 340.618 C 118.550 339.802,119.450 338.625,120.000 338.002 C 122.936 334.679,123.332 333.992,122.300 334.007 C 121.811 334.014,119.200 336.884,119.200 337.415 C 119.200 337.650,118.007 339.193,114.220 343.855 C 113.659 344.545,113.190 345.265,113.178 345.455 C 113.051 347.438,109.306 347.952,107.911 346.177 C 107.488 345.640,106.963 345.200,106.744 345.200 C 106.055 345.200,103.491 343.125,100.955 340.516 C 99.611 339.132,98.301 338.000,98.046 338.000 C 97.393 338.000,91.237 332.031,90.580 330.761 C 90.281 330.183,88.859 328.533,87.418 327.092 C 85.978 325.652,84.800 324.252,84.800 323.980 C 84.800 323.709,83.990 322.538,83.000 321.379 C 82.010 320.221,81.200 319.145,81.200 318.989 C 81.200 318.737,79.937 317.096,78.207 315.100 C 77.873 314.715,77.600 314.248,77.600 314.062 C 77.600 313.876,77.222 313.382,76.759 312.963 C 76.297 312.544,75.641 311.661,75.303 311.001 C 74.965 310.340,74.525 309.694,74.325 309.565 C 73.933 309.310,72.929 307.592,71.601 304.900 C 71.140 303.965,70.609 303.200,70.420 303.200 C 70.232 303.200,69.887 302.652,69.653 301.981 C 69.420 301.311,68.862 300.297,68.414 299.727 C 67.966 299.158,67.600 298.381,67.600 298.000 C 67.600 297.619,67.266 296.879,66.858 296.354 C 66.450 295.829,65.901 294.739,65.638 293.932 C 65.374 293.125,64.898 292.248,64.580 291.983 C 64.261 291.718,64.000 291.109,64.000 290.629 C 64.000 290.148,63.572 289.176,63.049 288.467 C 62.527 287.758,61.986 286.472,61.848 285.608 C 61.710 284.744,61.361 283.894,61.073 283.719 C 60.785 283.544,60.326 282.379,60.053 281.131 C 59.780 279.883,59.312 278.659,59.013 278.411 C 58.714 278.163,58.347 277.024,58.197 275.880 C 58.047 274.736,57.668 273.397,57.356 272.905 C 57.044 272.413,56.532 270.668,56.218 269.027 C 55.904 267.386,55.385 265.629,55.065 265.122 C 54.744 264.615,54.359 262.760,54.208 261.000 C 54.048 259.135,53.640 257.293,53.231 256.585 C 52.781 255.808,52.426 254.028,52.246 251.645 C 52.086 249.518,51.716 247.538,51.384 247.032 C 50.156 245.158,49.895 215.403,51.092 213.642 C 51.655 212.814,51.843 211.453,52.011 207.000 C 52.177 202.584,52.369 201.179,52.921 200.354 C 53.306 199.779,53.899 197.719,54.237 195.778 C 54.576 193.836,55.002 191.966,55.184 191.624 C 55.366 191.281,55.739 189.560,56.013 187.800 C 56.287 186.040,56.769 184.302,57.083 183.939 C 57.397 183.575,57.901 182.315,58.202 181.139 C 58.503 179.962,59.115 178.010,59.561 176.800 C 60.008 175.590,60.380 174.285,60.387 173.900 C 60.394 173.515,60.575 173.200,60.789 173.200 C 61.003 173.200,61.474 172.165,61.835 170.900 C 62.197 169.635,62.724 168.330,63.007 168.000 C 63.289 167.670,63.703 166.727,63.927 165.905 C 64.150 165.083,64.613 164.130,64.956 163.787 C 65.298 163.444,65.771 162.452,66.005 161.582 C 66.239 160.712,66.597 160.000,66.800 160.000 C 67.003 160.000,67.355 159.309,67.583 158.464 C 67.810 157.618,68.347 156.610,68.776 156.222 C 69.204 155.834,69.669 154.996,69.809 154.359 C 69.949 153.721,70.233 153.200,70.440 153.200 C 70.648 153.200,71.032 152.705,71.295 152.100 C 71.558 151.495,72.184 150.443,72.686 149.762 C 73.189 149.081,73.600 148.329,73.600 148.091 C 73.600 147.852,73.886 147.371,74.236 147.021 C 74.973 146.284,77.600 142.523,77.600 142.204 C 77.600 142.086,78.410 140.994,79.400 139.779 C 80.390 138.563,81.200 137.376,81.200 137.141 C 81.200 136.675,81.894 135.852,85.100 132.515 C 86.255 131.313,87.207 130.121,87.215 129.865 C 87.223 129.609,88.033 128.771,89.015 128.002 C 89.997 127.233,90.800 126.445,90.800 126.251 C 90.800 125.847,101.164 115.600,101.573 115.600 C 101.722 115.600,102.463 114.952,103.222 114.161 C 103.980 113.370,105.770 111.891,107.200 110.875 C 108.630 109.859,109.944 108.797,110.120 108.514 C 110.296 108.231,110.601 108.000,110.799 108.000 C 111.097 108.000,114.925 105.284,117.210 103.451 C 117.546 103.182,118.896 102.353,120.210 101.611 C 121.525 100.868,123.109 99.842,123.731 99.330 C 124.353 98.819,125.197 98.400,125.607 98.400 C 126.017 98.400,126.450 98.243,126.569 98.050 C 126.688 97.858,127.733 97.229,128.892 96.652 C 130.052 96.075,131.270 95.444,131.600 95.249 C 131.930 95.054,133.592 94.230,135.294 93.418 C 136.996 92.606,138.492 91.775,138.618 91.571 C 138.744 91.367,139.260 91.200,139.764 91.200 C 140.268 91.200,141.527 90.750,142.562 90.200 C 143.596 89.650,144.668 89.200,144.943 89.200 C 145.219 89.200,146.055 88.750,146.800 88.200 C 147.545 87.650,148.629 87.200,149.208 87.200 C 149.787 87.200,151.549 86.750,153.123 86.200 C 154.697 85.650,156.326 85.200,156.742 85.200 C 157.159 85.200,158.287 84.771,159.250 84.248 C 160.278 83.688,162.018 83.197,163.468 83.057 C 164.826 82.926,166.626 82.549,167.468 82.218 C 168.311 81.888,171.250 81.421,174.000 81.181 C 176.750 80.941,179.990 80.659,181.200 80.555 C 182.410 80.450,183.834 80.147,184.365 79.882 C 186.073 79.030,217.960 79.246,219.205 80.119 C 219.768 80.513,220.941 80.803,221.989 80.807 C 225.613 80.821,231.700 82.070,236.800 83.846 C 237.790 84.191,239.770 84.647,241.200 84.859 C 242.630 85.071,244.568 85.612,245.507 86.061 C 246.446 86.510,247.976 86.977,248.907 87.099 C 249.838 87.220,251.029 87.653,251.554 88.060 C 252.079 88.467,252.889 88.800,253.354 88.800 C 253.819 88.800,255.190 89.333,256.400 89.984 C 257.610 90.635,259.095 91.175,259.700 91.184 C 260.305 91.193,260.800 91.364,260.800 91.565 C 260.800 91.766,262.150 92.598,263.800 93.413 C 265.450 94.228,266.800 95.030,266.800 95.196 C 266.800 95.495,264.002 97.912,262.953 98.520 C 262.649 98.696,262.400 99.101,262.400 99.420 C 262.400 99.761,262.015 100.000,261.464 100.000 C 260.854 100.000,260.370 100.348,260.073 101.000 C 259.822 101.550,259.345 102.000,259.012 102.000 C 258.679 102.000,258.182 102.360,257.907 102.800 C 257.632 103.240,257.185 103.600,256.913 103.600 C 256.641 103.600,256.143 104.020,255.807 104.534 C 255.470 105.047,254.701 105.722,254.097 106.034 C 253.494 106.345,252.765 106.915,252.477 107.300 C 252.190 107.685,251.716 108.000,251.424 108.000 C 251.132 108.000,250.799 108.360,250.684 108.800 C 250.560 109.275,250.138 109.600,249.647 109.600 C 249.191 109.600,248.528 110.043,248.173 110.584 C 247.819 111.126,247.185 111.678,246.764 111.811 C 246.344 111.945,246.000 112.260,246.000 112.512 C 246.000 112.764,245.505 113.366,244.900 113.849 C 244.295 114.333,243.915 114.844,244.055 114.986 C 244.196 115.128,244.807 114.784,245.414 114.222 C 246.021 113.660,246.695 113.200,246.913 113.200 C 247.130 113.200,247.715 112.795,248.212 112.300 C 250.862 109.662,255.786 105.600,256.334 105.600 C 256.580 105.600,257.076 105.150,257.437 104.600 C 257.797 104.050,258.276 103.600,258.500 103.600 C 258.725 103.600,259.312 103.195,259.805 102.700 C 261.385 101.114,263.204 99.600,263.529 99.600 C 263.702 99.600,264.549 98.954,265.412 98.164 C 266.274 97.374,267.464 96.477,268.057 96.170 C 268.650 95.864,269.402 95.077,269.729 94.421 C 270.404 93.069,270.416 93.079,267.300 92.594 C 266.365 92.449,265.451 92.063,265.269 91.738 C 265.087 91.412,264.146 90.968,263.178 90.750 C 262.210 90.533,261.116 90.031,260.746 89.635 C 260.377 89.238,259.362 88.800,258.490 88.661 C 257.617 88.521,256.692 88.151,256.432 87.839 C 256.173 87.526,255.024 87.052,253.880 86.784 C 252.736 86.517,251.530 86.066,251.200 85.783 C 250.870 85.500,249.880 85.143,249.000 84.990 C 248.120 84.837,246.810 84.375,246.089 83.963 C 245.368 83.551,243.685 83.038,242.349 82.823 C 241.013 82.608,239.687 82.238,239.402 82.001 C 239.117 81.765,237.219 81.323,235.186 81.019 C 233.152 80.715,231.346 80.237,231.173 79.956 C 230.972 79.631,229.428 79.347,226.928 79.176 C 224.768 79.028,222.276 78.635,221.392 78.304 C 218.998 77.406,216.119 77.106,208.800 76.995 C 205.170 76.939,201.480 76.796,200.600 76.677 C 199.720 76.557,197.920 76.635,196.600 76.849 M187.098 77.835 C 186.671 78.262,183.813 78.779,183.094 78.559 C 181.737 78.143,182.866 77.600,185.090 77.600 C 186.324 77.600,187.228 77.706,187.098 77.835 M216.400 77.810 C 216.400 78.461,214.239 78.621,211.400 78.181 L 208.200 77.684 212.300 77.642 C 214.555 77.619,216.400 77.694,216.400 77.810 M173.507 79.886 C 172.906 79.977,171.826 79.979,171.107 79.890 C 170.388 79.801,170.880 79.726,172.200 79.724 C 173.520 79.722,174.108 79.795,173.507 79.886 M228.541 80.070 C 227.941 80.360,227.458 80.356,226.941 80.055 C 226.325 79.697,226.469 79.627,227.800 79.639 C 229.196 79.652,229.290 79.707,228.541 80.070 M157.600 83.843 C 157.600 83.929,156.925 83.982,156.100 83.960 C 154.795 83.925,154.730 83.882,155.600 83.627 C 156.524 83.356,157.600 83.472,157.600 83.843 M268.600 95.200 C 268.406 95.513,268.176 95.536,267.910 95.270 C 267.690 95.050,267.640 94.658,267.800 94.400 C 267.994 94.087,268.224 94.064,268.490 94.330 C 268.710 94.550,268.760 94.942,268.600 95.200 M288.300 105.640 C 287.695 106.227,287.200 106.818,287.200 106.952 C 287.200 107.288,282.483 113.433,281.773 114.022 C 281.458 114.284,281.200 114.734,281.200 115.022 C 281.200 115.310,280.885 115.648,280.500 115.772 C 280.115 115.896,279.485 116.493,279.100 117.099 C 278.714 117.705,278.004 118.830,277.521 119.600 C 277.037 120.370,276.407 121.144,276.121 121.320 C 275.615 121.630,275.377 122.800,275.820 122.800 C 276.295 122.800,278.795 120.087,280.080 118.179 C 281.345 116.299,282.066 115.422,284.019 113.386 C 284.449 112.938,284.800 112.424,284.800 112.243 C 284.800 112.063,285.375 111.169,286.077 110.258 C 286.780 109.346,287.390 108.544,287.434 108.477 C 287.654 108.136,290.348 109.629,291.400 110.674 C 292.060 111.330,293.241 112.250,294.025 112.719 C 294.809 113.189,295.672 113.986,295.942 114.492 C 296.213 114.997,297.280 115.859,298.314 116.405 C 299.402 116.981,300.533 117.979,300.997 118.773 C 301.940 120.386,304.530 123.079,307.563 125.601 C 310.425 127.981,311.188 128.814,311.445 129.838 C 311.563 130.307,312.367 131.211,313.232 131.846 C 314.098 132.481,314.910 133.392,315.039 133.871 C 315.167 134.350,315.508 134.833,315.796 134.943 C 316.084 135.054,316.999 136.192,317.829 137.472 C 318.659 138.752,319.658 140.160,320.050 140.600 C 320.442 141.040,321.093 141.768,321.498 142.217 C 321.903 142.667,322.468 143.599,322.754 144.288 C 323.039 144.978,323.617 145.853,324.037 146.233 C 324.456 146.613,324.800 147.165,324.800 147.459 C 324.800 147.753,325.160 148.218,325.600 148.493 C 326.040 148.768,326.400 149.295,326.400 149.666 C 326.400 150.036,326.809 150.847,327.309 151.469 C 327.809 152.091,328.574 153.305,329.009 154.167 C 330.727 157.569,331.285 158.542,331.831 159.089 C 332.144 159.401,332.400 159.969,332.400 160.351 C 332.400 160.732,332.850 161.655,333.400 162.400 C 333.950 163.145,334.400 164.056,334.400 164.424 C 334.400 164.791,334.745 165.531,335.167 166.067 C 335.589 166.604,336.059 167.710,336.212 168.525 C 336.365 169.340,336.803 170.410,337.185 170.903 C 337.567 171.397,338.005 172.605,338.159 173.590 C 338.312 174.574,338.703 175.671,339.026 176.029 C 339.349 176.386,339.861 177.632,340.164 178.799 C 340.466 179.966,341.003 181.082,341.357 181.280 C 341.822 181.540,342.000 182.228,342.000 183.760 C 342.000 185.254,342.296 186.437,343.000 187.762 C 343.613 188.915,344.000 190.298,344.000 191.337 C 344.000 192.268,344.362 193.741,344.805 194.609 C 345.346 195.671,345.663 197.238,345.773 199.394 C 345.864 201.157,346.316 203.770,346.778 205.200 C 348.426 210.299,348.760 244.604,347.196 248.200 C 346.611 249.543,346.016 253.046,345.748 256.714 C 345.597 258.791,345.267 260.461,344.933 260.846 C 344.625 261.202,344.220 262.857,344.033 264.524 C 343.798 266.621,343.432 267.887,342.847 268.632 C 342.219 269.429,342.000 270.273,342.000 271.891 C 342.000 273.449,341.777 274.357,341.220 275.065 C 340.791 275.610,340.320 276.899,340.173 277.928 C 340.025 278.958,339.585 280.160,339.195 280.600 C 338.804 281.040,338.361 282.160,338.209 283.088 C 338.058 284.017,337.603 285.196,337.200 285.709 C 336.796 286.223,336.342 287.302,336.191 288.107 C 336.040 288.912,335.666 289.779,335.361 290.032 C 335.056 290.286,334.607 291.231,334.364 292.133 C 334.122 293.034,333.580 294.207,333.161 294.740 C 332.743 295.272,332.400 296.016,332.400 296.393 C 332.400 296.769,332.048 297.484,331.617 297.980 C 331.187 298.476,330.638 299.478,330.398 300.206 C 330.158 300.934,329.723 301.621,329.432 301.732 C 329.141 301.844,328.778 302.433,328.625 303.041 C 328.473 303.649,327.910 304.667,327.374 305.304 C 326.838 305.940,326.400 306.718,326.400 307.031 C 326.400 307.344,326.233 307.600,326.029 307.600 C 325.825 307.600,325.340 308.320,324.952 309.200 C 324.564 310.080,324.107 310.800,323.937 310.800 C 323.767 310.800,322.829 312.023,321.853 313.518 C 320.877 315.013,319.791 316.475,319.439 316.767 C 319.088 317.059,318.800 317.473,318.800 317.688 C 318.800 318.639,312.714 325.628,305.667 332.768 C 301.450 337.040,298.000 340.685,298.000 340.866 C 298.000 341.047,297.235 341.556,296.300 341.997 C 295.365 342.438,294.261 343.305,293.846 343.925 C 293.432 344.545,292.622 345.263,292.046 345.522 C 291.471 345.780,290.360 346.582,289.579 347.303 C 287.747 348.994,284.747 351.200,284.279 351.200 C 284.079 351.200,283.381 351.650,282.727 352.200 C 282.073 352.750,281.316 353.200,281.044 353.200 C 280.772 353.200,279.661 353.999,278.575 354.975 C 277.489 355.951,276.179 356.858,275.665 356.991 C 274.376 357.324,270.400 359.602,270.400 360.006 C 270.400 360.188,269.815 360.460,269.100 360.611 C 268.385 360.763,267.440 361.210,267.000 361.605 C 266.560 362.000,265.433 362.550,264.495 362.827 C 263.558 363.103,262.591 363.570,262.346 363.865 C 262.102 364.159,261.535 364.400,261.086 364.400 C 260.637 364.400,259.534 364.828,258.635 365.352 C 257.736 365.875,256.427 366.426,255.728 366.577 C 255.028 366.728,254.254 367.094,254.008 367.391 C 253.762 367.687,252.624 368.148,251.480 368.414 C 250.336 368.680,248.839 369.236,248.153 369.649 C 247.467 370.062,246.364 370.400,245.702 370.400 C 245.039 370.400,243.801 370.694,242.949 371.053 C 242.097 371.413,240.321 371.961,239.002 372.272 C 237.683 372.582,236.204 373.098,235.716 373.418 C 235.218 373.744,233.887 374.000,232.687 374.000 C 230.702 374.000,227.289 374.747,225.400 375.595 C 224.960 375.793,221.900 376.147,218.600 376.382 C 211.325 376.901,207.591 377.345,205.183 377.977 C 202.223 378.753,191.073 378.032,186.400 376.761 C 185.630 376.552,182.459 376.323,179.353 376.252 C 174.404 376.139,173.467 376.007,171.767 375.184 C 170.490 374.566,168.784 374.168,166.773 374.021 C 165.093 373.897,163.454 373.577,163.132 373.309 C 162.809 373.042,161.568 372.632,160.373 372.398 C 157.497 371.837,155.089 371.139,154.620 370.730 C 154.411 370.549,153.868 370.400,153.414 370.400 C 152.960 370.400,151.911 370.037,151.083 369.593 C 150.256 369.150,148.638 368.590,147.489 368.348 C 146.340 368.107,145.118 367.662,144.774 367.360 C 144.429 367.057,143.529 366.689,142.774 366.543 C 142.018 366.396,140.987 365.956,140.481 365.566 C 139.976 365.175,138.986 364.729,138.281 364.576 C 137.577 364.422,136.571 363.959,136.046 363.548 C 135.521 363.137,134.860 362.800,134.577 362.800 C 133.956 362.800,131.600 360.877,131.600 360.370 C 131.600 359.857,134.505 357.224,135.086 357.211 C 135.353 357.205,135.765 356.840,136.000 356.400 C 136.235 355.960,136.786 355.600,137.223 355.600 C 137.672 355.600,138.206 355.185,138.453 354.644 C 138.692 354.118,139.318 353.492,139.844 353.253 C 140.370 353.013,140.800 352.655,140.800 352.457 C 140.800 352.259,141.340 351.873,142.000 351.600 C 142.660 351.327,143.200 350.947,143.200 350.757 C 143.200 350.566,143.816 350.154,144.568 349.839 C 145.320 349.525,146.136 348.892,146.382 348.434 C 146.627 347.975,147.092 347.600,147.414 347.600 C 147.736 347.600,148.000 347.335,148.000 347.010 C 148.000 346.686,148.540 346.141,149.200 345.800 C 149.860 345.459,150.400 345.013,150.400 344.808 C 150.400 344.604,151.030 344.139,151.800 343.773 C 152.570 343.408,153.200 342.940,153.200 342.734 C 153.200 342.527,153.740 342.170,154.400 341.940 C 155.060 341.710,155.600 341.312,155.600 341.056 C 155.600 340.799,156.005 340.412,156.500 340.195 C 156.995 339.978,157.578 339.395,157.795 338.900 C 158.012 338.405,158.425 338.000,158.712 338.000 C 159.468 338.000,162.766 335.490,162.784 334.900 C 162.793 334.625,163.164 334.400,163.609 334.400 C 164.053 334.400,165.358 333.503,166.509 332.406 C 170.726 328.386,171.189 328.000,171.789 328.000 C 172.125 328.000,172.400 327.742,172.400 327.427 C 172.400 327.112,172.805 326.727,173.300 326.571 C 173.795 326.416,174.601 325.909,175.090 325.444 C 176.783 323.838,177.563 323.240,178.779 322.611 C 179.450 322.264,180.000 321.800,180.000 321.581 C 180.000 321.362,180.435 320.985,180.966 320.743 C 181.497 320.501,182.021 319.964,182.129 319.551 C 182.237 319.138,182.651 318.800,183.048 318.800 C 183.446 318.800,184.138 318.445,184.586 318.012 C 186.812 315.856,188.061 314.800,188.385 314.800 C 188.582 314.800,189.588 313.990,190.622 313.000 C 191.655 312.010,192.752 311.200,193.060 311.200 C 193.368 311.200,193.782 310.773,193.981 310.251 C 194.179 309.729,194.805 309.185,195.371 309.043 C 195.937 308.901,196.400 308.518,196.400 308.192 C 196.400 307.867,196.656 307.600,196.969 307.600 C 197.282 307.600,198.078 307.060,198.738 306.400 C 199.398 305.740,200.138 305.200,200.382 305.200 C 200.626 305.200,200.926 304.937,201.050 304.615 C 201.173 304.294,201.662 303.909,202.137 303.761 C 202.612 303.612,203.865 302.615,204.922 301.545 C 205.979 300.475,207.005 299.600,207.201 299.600 C 207.398 299.600,208.640 298.700,209.962 297.600 C 211.283 296.500,212.490 295.600,212.643 295.600 C 212.795 295.600,213.685 294.790,214.620 293.800 C 215.556 292.810,216.602 292.000,216.947 292.000 C 217.291 292.000,218.125 291.460,218.800 290.800 C 219.475 290.140,220.201 289.600,220.414 289.600 C 220.626 289.600,220.800 289.330,220.800 289.000 C 220.800 288.670,220.974 288.400,221.186 288.400 C 221.398 288.400,222.187 287.860,222.939 287.200 C 223.691 286.540,224.498 286.000,224.733 286.000 C 224.968 286.000,225.304 285.775,225.480 285.500 C 225.942 284.779,229.078 282.400,229.567 282.400 C 229.795 282.400,230.276 281.950,230.637 281.400 C 230.997 280.850,231.546 280.400,231.856 280.400 C 232.166 280.400,232.582 279.975,232.779 279.455 C 232.977 278.935,233.512 278.412,233.969 278.292 C 234.426 278.173,234.800 277.782,234.800 277.423 C 234.800 276.668,233.262 277.274,232.680 278.258 C 232.504 278.556,232.175 278.800,231.948 278.800 C 231.721 278.800,229.945 280.150,228.000 281.800 C 226.055 283.450,224.330 284.800,224.166 284.800 C 224.001 284.800,223.582 285.061,223.234 285.380 C 220.412 287.963,218.650 289.421,217.326 290.267 C 216.707 290.662,215.965 291.304,215.677 291.693 C 215.390 292.082,214.993 292.400,214.796 292.400 C 214.598 292.400,213.994 292.805,213.453 293.300 C 212.425 294.241,211.504 294.985,207.200 298.357 C 205.770 299.477,203.721 301.160,202.647 302.097 C 201.573 303.033,200.403 303.914,200.047 304.053 C 199.691 304.192,199.057 304.687,198.638 305.153 C 198.219 305.619,197.732 306.000,197.556 306.000 C 197.380 306.000,196.796 306.405,196.258 306.900 C 192.797 310.084,191.497 311.200,191.250 311.200 C 191.096 311.200,190.347 311.733,189.585 312.384 C 188.823 313.035,188.040 313.575,187.844 313.584 C 187.648 313.593,187.288 313.856,187.044 314.169 C 186.800 314.482,185.250 315.838,183.600 317.181 C 181.950 318.525,180.180 319.978,179.666 320.412 C 179.152 320.845,178.590 321.200,178.416 321.200 C 178.242 321.200,177.276 321.965,176.268 322.900 C 175.260 323.835,173.593 325.230,172.563 326.000 C 171.534 326.770,170.406 327.715,170.057 328.100 C 169.708 328.485,169.227 328.800,168.987 328.800 C 168.565 328.800,165.788 331.068,163.472 333.305 C 162.843 333.913,161.939 334.617,161.464 334.869 C 160.989 335.121,160.365 335.658,160.077 336.063 C 159.790 336.469,159.335 336.800,159.066 336.800 C 158.798 336.800,158.271 337.115,157.895 337.500 C 157.520 337.885,156.715 338.599,156.106 339.086 C 153.409 341.248,151.330 342.879,150.465 343.514 C 149.950 343.891,149.087 344.605,148.547 345.100 C 148.006 345.595,147.457 346.000,147.327 346.000 C 147.197 346.000,145.900 346.988,144.445 348.196 C 142.990 349.404,141.369 350.709,140.843 351.096 C 140.316 351.483,139.453 352.205,138.925 352.700 C 138.396 353.195,137.822 353.600,137.648 353.600 C 137.474 353.600,136.869 354.095,136.302 354.700 C 135.735 355.305,134.614 356.250,133.811 356.800 C 131.775 358.195,130.567 359.165,128.726 360.884 L 127.136 362.369 128.168 362.584 C 128.736 362.703,129.681 362.901,130.268 363.025 C 130.856 363.148,131.780 363.598,132.322 364.025 C 132.864 364.451,133.609 364.800,133.976 364.800 C 134.344 364.800,135.255 365.250,136.000 365.800 C 136.745 366.350,137.829 366.800,138.408 366.800 C 138.999 366.800,139.852 367.217,140.353 367.750 C 140.881 368.312,141.886 368.787,142.812 368.911 C 143.673 369.026,144.659 369.402,145.002 369.745 C 145.345 370.088,146.295 370.475,147.113 370.606 C 147.931 370.736,148.870 371.017,149.200 371.230 C 150.635 372.154,152.468 372.800,153.656 372.800 C 154.360 372.800,155.240 373.074,155.610 373.409 C 155.980 373.744,157.524 374.263,159.041 374.564 C 160.559 374.864,162.430 375.379,163.200 375.708 C 163.970 376.036,165.860 376.427,167.400 376.577 C 168.940 376.726,170.801 377.124,171.536 377.460 C 172.438 377.873,175.237 378.206,180.136 378.484 C 185.087 378.764,187.651 379.071,188.189 379.447 C 189.351 380.261,211.046 380.257,211.969 379.443 C 212.413 379.050,214.641 378.768,219.498 378.490 C 224.729 378.190,226.640 377.935,227.404 377.434 C 228.022 377.029,229.683 376.680,231.706 376.531 C 233.544 376.395,235.619 375.982,236.400 375.596 C 237.170 375.216,238.927 374.710,240.305 374.472 C 241.683 374.233,243.208 373.760,243.694 373.419 C 244.180 373.079,245.141 372.800,245.829 372.800 C 246.518 372.800,247.888 372.371,248.875 371.846 C 249.861 371.322,251.430 370.764,252.362 370.606 C 253.294 370.449,254.148 370.079,254.261 369.785 C 254.374 369.490,255.037 369.137,255.733 368.999 C 257.540 368.644,259.200 367.959,259.200 367.570 C 259.200 367.386,259.875 367.112,260.700 366.960 C 261.525 366.809,262.709 366.261,263.331 365.742 C 263.953 365.224,264.783 364.800,265.177 364.800 C 265.570 364.800,266.352 364.438,266.914 363.996 C 267.475 363.555,268.496 363.081,269.182 362.944 C 269.868 362.806,270.647 362.386,270.914 362.008 C 271.181 361.631,272.075 361.101,272.900 360.830 C 273.725 360.559,274.400 360.190,274.400 360.008 C 274.400 359.827,274.931 359.493,275.580 359.267 C 276.229 359.041,277.079 358.483,277.469 358.028 C 277.859 357.572,278.470 357.200,278.827 357.200 C 279.184 357.200,279.802 356.840,280.200 356.400 C 280.598 355.960,281.140 355.600,281.404 355.600 C 281.667 355.600,282.369 355.150,282.962 354.600 C 283.556 354.050,284.206 353.600,284.407 353.600 C 284.608 353.600,285.310 353.105,285.968 352.500 C 287.952 350.674,291.298 348.245,292.676 347.629 C 293.157 347.414,293.749 346.870,293.990 346.419 C 294.231 345.969,294.604 345.600,294.818 345.600 C 295.033 345.600,296.043 344.835,297.064 343.900 C 298.085 342.965,299.459 341.705,300.119 341.100 C 300.779 340.495,301.446 340.000,301.602 340.000 C 301.952 340.000,310.644 331.195,312.468 328.992 C 313.201 328.107,314.160 327.000,314.600 326.532 C 315.637 325.428,317.191 323.569,318.200 322.226 C 318.640 321.640,319.465 320.584,320.033 319.880 C 320.600 319.176,321.180 318.285,321.320 317.900 C 321.460 317.515,321.773 317.200,322.014 317.200 C 322.270 317.200,322.360 316.823,322.231 316.300 C 322.108 315.805,322.115 315.636,322.245 315.925 C 322.527 316.546,324.633 314.370,325.044 313.035 C 325.186 312.576,325.554 311.930,325.862 311.600 C 326.673 310.733,328.784 307.460,328.793 307.058 C 328.797 306.870,329.250 306.181,329.800 305.527 C 330.350 304.873,330.800 304.107,330.800 303.823 C 330.800 303.540,331.149 302.864,331.575 302.322 C 332.002 301.780,332.468 300.869,332.611 300.298 C 332.755 299.726,333.212 298.951,333.628 298.575 C 334.044 298.198,334.497 297.291,334.634 296.559 C 334.771 295.827,335.139 295.017,335.450 294.758 C 335.762 294.500,336.211 293.514,336.450 292.569 C 336.688 291.623,337.224 290.540,337.641 290.163 C 338.059 289.785,338.400 288.988,338.400 288.392 C 338.400 287.796,338.754 286.858,339.186 286.309 C 339.618 285.759,340.163 284.457,340.397 283.416 C 340.630 282.374,341.061 281.281,341.355 280.987 C 341.649 280.693,342.015 279.512,342.167 278.361 C 342.320 277.210,342.786 275.836,343.202 275.306 C 343.619 274.777,344.069 273.501,344.204 272.472 C 344.338 271.442,344.778 269.880,345.182 269.000 C 345.585 268.120,346.043 266.320,346.199 265.000 C 346.355 263.681,346.763 262.061,347.106 261.400 C 347.450 260.740,347.874 258.517,348.049 256.461 C 348.223 254.405,348.534 252.515,348.737 252.261 C 350.988 249.463,351.085 211.614,348.857 205.414 C 348.315 203.905,348.000 202.076,348.000 200.440 C 348.000 198.707,347.744 197.316,347.225 196.226 C 346.799 195.332,346.260 193.200,346.028 191.490 C 345.795 189.779,345.354 187.979,345.046 187.490 C 344.738 187.000,344.361 185.700,344.208 184.600 C 344.055 183.500,343.609 182.060,343.216 181.400 C 342.824 180.740,342.389 179.313,342.250 178.229 C 342.110 177.145,341.729 175.964,341.403 175.603 C 341.076 175.242,340.696 174.329,340.557 173.574 C 340.419 172.818,339.896 171.570,339.396 170.800 C 338.896 170.030,338.372 168.743,338.233 167.940 C 338.093 167.137,337.715 166.261,337.392 165.994 C 337.070 165.726,336.608 164.763,336.366 163.853 C 336.124 162.944,335.692 161.930,335.407 161.600 C 335.122 161.270,334.765 160.415,334.613 159.700 C 334.461 158.986,334.004 158.168,333.597 157.883 C 333.190 157.597,332.726 156.844,332.566 156.209 C 332.276 155.051,331.158 153.127,329.621 151.137 C 329.170 150.552,328.800 149.815,328.800 149.500 C 328.800 149.185,328.428 148.493,327.972 147.963 C 327.517 147.434,326.392 145.850,325.472 144.445 C 324.553 143.040,323.440 141.400,323.000 140.801 C 322.560 140.202,321.846 139.192,321.413 138.556 C 320.980 137.920,320.260 136.999,319.813 136.510 C 318.198 134.741,317.600 133.995,317.600 133.748 C 317.600 133.610,316.939 132.755,316.132 131.848 C 315.324 130.942,313.569 128.951,312.232 127.424 C 308.300 122.934,300.046 114.926,297.414 113.047 C 296.526 112.413,295.329 111.423,294.752 110.847 C 293.212 109.308,291.579 108.000,291.197 108.000 C 291.013 108.000,290.646 107.325,290.383 106.500 C 289.735 104.472,289.571 104.405,288.300 105.640 M289.600 106.849 C 289.600 107.570,289.507 107.620,288.981 107.184 C 288.487 106.774,288.467 106.604,288.881 106.341 C 289.595 105.889,289.600 105.892,289.600 106.849 M242.400 116.000 C 241.850 116.430,241.597 116.786,241.838 116.791 C 242.079 116.796,242.602 116.440,243.000 116.000 C 243.912 114.992,243.688 114.992,242.400 116.000 M236.685 120.038 C 235.098 121.592,233.215 123.110,232.500 123.411 C 231.785 123.713,231.200 124.238,231.200 124.580 C 231.200 124.932,230.856 125.200,230.403 125.200 C 229.965 125.200,229.382 125.560,229.107 126.000 C 228.832 126.440,228.385 126.800,228.113 126.800 C 227.841 126.800,227.328 127.243,226.973 127.784 C 226.619 128.326,226.028 128.864,225.661 128.981 C 225.294 129.097,224.147 130.004,223.112 130.996 C 222.076 131.988,220.957 132.800,220.624 132.800 C 220.291 132.800,219.724 133.250,219.363 133.800 C 219.003 134.350,218.480 134.800,218.201 134.800 C 217.922 134.800,217.600 135.158,217.485 135.595 C 217.371 136.033,216.810 136.568,216.239 136.785 C 215.667 137.002,215.200 137.361,215.200 137.582 C 215.200 137.803,214.480 138.351,213.600 138.800 C 212.720 139.249,212.000 139.793,212.000 140.008 C 212.000 140.224,211.726 140.400,211.391 140.400 C 211.057 140.400,209.891 141.255,208.800 142.300 C 207.710 143.345,206.167 144.740,205.371 145.400 C 204.575 146.060,203.630 146.915,203.273 147.300 C 202.915 147.685,202.314 148.000,201.938 148.000 C 201.562 148.000,200.870 148.540,200.400 149.200 C 199.930 149.860,199.288 150.400,198.973 150.400 C 198.658 150.400,198.400 150.641,198.400 150.936 C 198.400 151.230,197.950 151.677,197.400 151.927 C 196.567 152.307,195.946 153.600,196.597 153.600 C 196.983 153.600,202.904 148.903,205.167 146.800 C 205.523 146.470,206.260 145.910,206.807 145.555 C 207.353 145.200,209.240 143.706,211.000 142.234 C 212.760 140.763,214.621 139.253,215.135 138.879 C 215.649 138.506,216.480 137.795,216.981 137.300 C 217.482 136.805,218.013 136.400,218.161 136.400 C 218.310 136.400,219.189 135.661,220.115 134.758 C 221.673 133.241,223.743 131.680,225.725 130.529 C 226.171 130.271,226.694 129.776,226.888 129.429 C 227.081 129.083,227.408 128.800,227.615 128.800 C 227.821 128.800,228.889 127.945,229.988 126.900 C 232.434 124.576,234.608 122.800,235.009 122.800 C 235.174 122.800,235.730 122.395,236.244 121.900 C 237.591 120.605,238.465 119.896,239.707 119.091 C 240.941 118.290,241.085 117.795,240.185 117.450 C 239.778 117.293,238.595 118.168,236.685 120.038 M305.188 121.100 C 305.177 122.125,305.145 122.146,304.722 121.400 C 304.473 120.960,304.073 120.468,303.834 120.306 C 303.587 120.139,303.788 120.010,304.300 120.006 C 305.020 120.001,305.198 120.221,305.188 121.100 M273.612 124.168 C 273.410 124.700,273.005 125.285,272.713 125.468 C 272.420 125.650,271.840 126.335,271.422 126.990 C 271.005 127.644,270.335 128.533,269.932 128.965 C 269.529 129.397,269.200 129.927,269.200 130.142 C 269.200 130.357,268.925 130.818,268.588 131.166 C 265.900 133.950,264.000 136.195,264.000 136.585 C 264.000 136.841,263.460 137.568,262.800 138.200 C 262.140 138.832,261.600 139.496,261.600 139.675 C 261.600 140.009,260.875 140.918,259.300 142.556 C 258.805 143.070,258.400 143.627,258.400 143.793 C 258.400 143.959,257.860 144.748,257.199 145.547 C 256.539 146.346,255.632 147.450,255.183 148.000 C 254.734 148.550,253.564 149.868,252.583 150.929 C 251.603 151.989,250.800 153.024,250.800 153.227 C 250.800 153.431,250.196 154.273,249.458 155.099 C 247.500 157.289,247.308 158.800,248.989 158.800 C 250.623 158.800,250.850 158.547,250.300 157.339 C 249.911 156.486,249.992 156.229,250.926 155.363 C 251.517 154.816,252.000 154.208,252.000 154.012 C 252.000 153.817,252.232 153.419,252.514 153.129 C 253.344 152.276,255.600 148.795,255.600 148.367 C 255.600 148.152,255.877 147.869,256.215 147.739 C 256.553 147.609,257.094 146.992,257.417 146.368 C 257.739 145.744,258.408 144.793,258.902 144.257 C 261.064 141.907,263.462 139.151,264.200 138.167 C 264.640 137.581,265.585 136.427,266.300 135.602 C 267.015 134.778,267.601 133.945,267.602 133.752 C 267.604 133.276,269.950 130.800,270.398 130.800 C 270.595 130.800,270.991 130.386,271.278 129.880 C 272.814 127.172,273.485 126.173,274.300 125.382 C 274.795 124.901,275.200 124.214,275.200 123.854 C 275.200 122.848,274.026 123.079,273.612 124.168 M86.042 130.118 C 85.528 130.632,85.007 130.235,85.388 129.620 C 85.535 129.382,85.839 129.300,86.062 129.439 C 86.336 129.607,86.329 129.831,86.042 130.118 M78.460 139.400 C 78.460 139.609,78.267 139.845,78.030 139.923 C 77.794 140.002,77.600 139.767,77.600 139.400 C 77.600 139.033,77.794 138.798,78.030 138.877 C 78.267 138.956,78.460 139.191,78.460 139.400 M72.772 147.100 C 72.662 148.273,72.054 148.926,72.028 147.900 C 72.013 147.295,72.180 146.800,72.400 146.800 C 72.620 146.800,72.787 146.935,72.772 147.100 M70.800 151.000 C 70.800 151.304,70.620 151.664,70.400 151.800 C 70.172 151.941,70.000 151.596,70.000 151.000 C 70.000 150.404,70.172 150.059,70.400 150.200 C 70.620 150.336,70.800 150.696,70.800 151.000 M68.800 154.000 C 68.800 154.660,68.620 155.200,68.400 155.200 C 68.180 155.200,68.000 154.660,68.000 154.000 C 68.000 153.340,68.180 152.800,68.400 152.800 C 68.620 152.800,68.800 153.340,68.800 154.000 M194.800 154.400 C 194.483 154.596,194.356 154.889,194.518 155.052 C 194.681 155.214,195.023 155.137,195.280 154.880 C 195.884 154.276,195.547 153.938,194.800 154.400 M192.135 156.073 C 191.659 156.303,191.181 156.831,191.072 157.246 C 190.961 157.672,190.522 158.000,190.064 158.000 C 189.605 158.000,189.144 158.347,189.000 158.800 C 188.860 159.240,188.395 159.600,187.964 159.600 C 187.519 159.600,186.987 160.030,186.727 160.600 C 186.477 161.150,186.145 161.600,185.991 161.600 C 185.636 161.600,182.872 163.669,181.758 164.769 C 181.295 165.226,180.632 165.600,180.285 165.600 C 179.938 165.600,179.536 165.970,179.393 166.423 C 179.249 166.876,178.697 167.411,178.166 167.613 C 177.635 167.815,177.200 168.160,177.200 168.380 C 177.200 168.600,176.660 169.059,176.000 169.400 C 175.340 169.741,174.800 170.286,174.800 170.610 C 174.800 170.935,174.575 171.206,174.300 171.213 C 173.524 171.232,172.302 172.292,172.742 172.564 C 172.957 172.697,173.668 172.354,174.324 171.803 C 174.979 171.251,175.651 170.800,175.816 170.800 C 175.981 170.800,176.495 170.437,176.958 169.994 C 179.902 167.178,182.659 164.816,183.011 164.808 C 183.237 164.804,183.708 164.485,184.056 164.100 C 184.405 163.715,185.278 162.950,185.996 162.400 C 186.714 161.850,187.786 160.950,188.378 160.400 C 188.970 159.850,190.061 158.950,190.802 158.400 C 194.144 155.920,194.793 154.787,192.135 156.073 M66.630 158.703 C 66.159 159.175,65.971 158.457,66.276 157.347 L 66.590 156.200 66.725 157.337 C 66.799 157.962,66.757 158.577,66.630 158.703 M286.015 157.893 C 278.213 157.958,271.677 158.163,271.490 158.350 C 270.839 159.001,275.448 159.251,286.542 159.168 C 299.061 159.074,299.465 159.163,297.644 161.626 C 297.180 162.254,296.800 162.854,296.800 162.959 C 296.800 163.191,295.888 164.190,290.768 169.565 C 288.585 171.856,286.800 173.840,286.800 173.976 C 286.800 174.435,280.525 180.800,280.072 180.800 C 279.824 180.800,279.341 181.340,279.000 182.000 C 278.659 182.660,278.204 183.200,277.990 183.200 C 277.775 183.200,277.600 183.371,277.600 183.581 C 277.600 183.790,276.295 185.293,274.700 186.920 C 273.105 188.548,270.331 191.416,268.537 193.294 C 266.742 195.172,265.122 196.774,264.937 196.854 C 264.751 196.935,264.006 197.873,263.280 198.940 C 262.554 200.007,262.104 200.805,262.280 200.714 C 262.456 200.623,263.185 200.317,263.900 200.035 C 264.615 199.753,265.200 199.352,265.200 199.145 C 265.200 198.755,267.130 196.765,269.713 194.490 C 270.531 193.770,271.202 192.870,271.204 192.490 C 271.209 191.812,274.174 188.400,274.759 188.400 C 275.257 188.400,280.632 183.071,281.189 182.025 C 281.949 180.599,282.333 180.154,285.200 177.374 C 286.630 175.988,287.980 174.640,288.200 174.378 C 288.420 174.117,289.807 172.710,291.282 171.252 C 292.757 169.793,294.071 168.147,294.201 167.594 C 294.332 167.041,295.106 166.145,295.920 165.603 C 300.741 162.395,303.710 157.828,301.000 157.788 C 300.560 157.782,293.817 157.829,286.015 157.893 M334.000 160.480 C 334.000 161.126,333.882 161.242,333.555 160.915 C 333.310 160.670,333.231 160.274,333.378 160.035 C 333.792 159.365,334.000 159.514,334.000 160.480 M65.200 160.767 C 65.200 161.812,64.791 162.800,64.357 162.800 C 64.161 162.800,64.000 162.170,64.000 161.400 C 64.000 160.422,64.181 160.000,64.600 160.000 C 64.930 160.000,65.200 160.345,65.200 160.767 M63.172 164.900 C 63.156 165.395,63.008 166.147,62.842 166.571 C 62.421 167.645,62.009 166.533,62.288 165.075 C 62.537 163.773,63.211 163.640,63.172 164.900 M61.194 169.524 C 61.191 170.116,61.013 170.870,60.800 171.200 C 60.520 171.633,60.411 171.266,60.406 169.876 C 60.402 168.694,60.554 168.048,60.800 168.200 C 61.020 168.336,61.197 168.932,61.194 169.524 M339.594 173.300 C 339.590 174.320,339.458 174.796,339.265 174.491 C 338.960 174.011,339.111 171.600,339.445 171.600 C 339.530 171.600,339.597 172.365,339.594 173.300 M59.200 174.576 C 59.200 175.333,59.020 176.064,58.800 176.200 C 58.558 176.349,58.400 175.804,58.400 174.824 C 58.400 173.931,58.580 173.200,58.800 173.200 C 59.020 173.200,59.200 173.819,59.200 174.576 M168.340 175.109 C 166.407 177.075,165.426 177.889,163.400 179.207 C 161.060 180.731,160.696 181.031,157.703 183.900 C 156.039 185.495,154.473 186.800,154.222 186.800 C 153.972 186.800,152.972 187.610,152.000 188.600 C 150.925 189.696,149.875 190.400,149.317 190.400 C 148.813 190.400,148.400 190.586,148.400 190.813 C 148.400 191.346,145.754 194.000,145.223 194.000 C 145.000 194.000,144.522 194.452,144.160 195.005 C 143.798 195.557,143.029 196.126,142.451 196.269 C 141.873 196.412,140.627 197.310,139.681 198.264 C 138.736 199.219,137.867 200.000,137.750 200.000 C 137.633 200.000,136.868 200.696,136.051 201.547 C 135.234 202.398,134.184 203.215,133.719 203.362 C 131.807 203.969,131.040 206.607,132.602 207.201 C 133.799 207.656,136.374 206.523,136.089 205.667 C 135.664 204.392,136.435 202.552,137.702 201.815 C 138.416 201.399,139.420 200.686,139.934 200.230 C 140.448 199.773,141.370 198.950,141.983 198.400 C 142.597 197.850,143.680 196.950,144.391 196.400 C 145.102 195.850,145.890 195.220,146.142 195.000 C 146.394 194.780,147.230 194.122,148.000 193.538 C 148.770 192.953,150.058 191.873,150.861 191.138 C 151.665 190.402,153.193 189.170,154.257 188.400 C 155.321 187.630,156.733 186.520,157.396 185.933 C 160.500 183.182,161.913 182.000,162.098 182.000 C 162.209 182.000,163.125 181.235,164.133 180.300 C 165.142 179.365,167.138 177.746,168.568 176.702 C 171.612 174.481,172.550 173.195,171.114 173.209 C 170.561 173.215,169.465 173.966,168.340 175.109 M341.568 178.500 C 341.538 180.127,341.519 180.152,341.131 179.087 C 340.907 178.475,340.826 177.710,340.950 177.387 C 341.356 176.329,341.601 176.770,341.568 178.500 M57.348 180.761 C 57.212 181.442,56.942 182.000,56.750 182.000 C 56.342 182.000,56.281 179.975,56.660 178.989 C 57.089 177.869,57.642 179.291,57.348 180.761 M343.572 184.500 C 343.548 185.589,343.488 185.670,343.200 185.000 C 342.725 183.895,342.725 183.200,343.200 183.200 C 343.420 183.200,343.587 183.785,343.572 184.500 M55.194 186.900 C 55.190 187.920,55.058 188.396,54.865 188.091 C 54.560 187.611,54.711 185.200,55.045 185.200 C 55.130 185.200,55.197 185.965,55.194 186.900 M345.594 191.700 C 345.589 192.428,345.514 192.485,345.200 192.000 C 344.699 191.224,344.699 190.800,345.200 190.800 C 345.420 190.800,345.597 191.205,345.594 191.700 M53.204 194.800 L 52.900 196.600 52.850 194.420 C 52.821 193.140,52.946 192.397,53.154 192.620 C 53.348 192.829,53.371 193.810,53.204 194.800 M347.588 200.200 C 347.588 200.860,347.413 201.670,347.200 202.000 C 346.926 202.424,346.812 201.895,346.812 200.200 C 346.812 198.505,346.926 197.976,347.200 198.400 C 347.413 198.730,347.588 199.540,347.588 200.200 M51.090 206.493 C 51.001 207.212,50.926 206.720,50.924 205.400 C 50.922 204.080,50.995 203.492,51.086 204.093 C 51.177 204.694,51.179 205.774,51.090 206.493 M258.942 203.597 C 258.120 203.929,256.000 206.358,256.000 206.969 C 256.000 207.130,254.376 208.913,252.392 210.931 C 239.004 224.547,239.128 224.400,241.000 224.400 C 241.550 224.400,242.000 224.264,242.000 224.097 C 242.000 223.930,243.305 222.404,244.900 220.706 C 246.495 219.008,248.510 216.630,249.379 215.422 C 250.247 214.214,251.192 213.135,251.479 213.025 C 251.765 212.915,252.000 212.549,252.000 212.213 C 252.000 211.876,252.230 211.600,252.512 211.600 C 253.121 211.600,255.600 209.058,255.600 208.434 C 255.600 208.196,255.864 208.000,256.186 208.000 C 257.228 208.000,259.500 205.661,259.686 204.398 C 259.782 203.739,259.848 203.211,259.831 203.225 C 259.814 203.239,259.414 203.406,258.942 203.597 M134.394 204.700 C 134.386 205.083,133.614 206.291,133.606 205.933 C 133.603 205.786,133.491 205.381,133.357 205.033 C 133.198 204.618,133.335 204.400,133.757 204.400 C 134.111 204.400,134.397 204.535,134.394 204.700 M182.676 205.880 C 182.101 206.029,182.005 206.313,182.212 207.252 C 182.440 208.293,182.248 208.645,180.636 210.146 C 178.822 211.836,178.328 212.811,179.300 212.788 C 179.926 212.774,182.400 210.553,182.400 210.006 C 182.400 209.783,182.580 209.600,182.800 209.600 C 183.550 209.600,184.800 208.002,184.800 207.043 C 184.800 206.305,183.892 205.353,183.467 205.646 C 183.430 205.672,183.074 205.777,182.676 205.880 M178.600 206.400 C 177.891 206.705,177.925 206.747,178.900 206.772 C 179.505 206.787,180.000 206.620,180.000 206.400 C 180.000 205.931,179.693 205.931,178.600 206.400 M349.401 214.668 C 349.164 216.197,349.034 216.433,348.779 215.800 C 348.372 214.792,348.322 211.717,348.691 210.400 C 349.158 208.734,349.760 212.353,349.401 214.668 M174.285 216.700 C 169.472 221.500,166.256 225.094,165.925 226.043 C 165.710 226.661,165.188 227.277,164.767 227.411 C 164.345 227.544,164.000 227.917,164.000 228.240 C 164.000 228.562,163.685 228.938,163.300 229.077 C 162.313 229.432,158.400 233.590,158.400 234.283 C 158.400 235.091,159.624 234.073,162.822 230.604 C 164.240 229.067,167.601 225.557,170.290 222.804 C 177.255 215.677,177.317 215.600,176.118 215.600 C 175.716 215.600,174.892 216.095,174.285 216.700 M235.971 227.963 C 235.195 228.603,234.029 229.901,233.380 230.848 C 232.731 231.795,230.625 234.114,228.700 236.000 C 226.775 237.886,225.200 239.558,225.200 239.715 C 225.200 240.368,226.113 239.913,227.413 238.613 C 228.176 237.851,228.800 237.041,228.800 236.813 C 228.800 236.586,229.012 236.400,229.272 236.400 C 229.805 236.400,232.400 233.693,232.400 233.137 C 232.400 232.938,232.715 232.658,233.100 232.514 C 234.444 232.014,236.735 229.912,236.974 228.960 C 237.107 228.432,237.392 228.000,237.608 228.000 C 237.823 228.000,238.000 227.730,238.000 227.400 C 238.000 226.531,237.561 226.653,235.971 227.963 M49.566 232.000 C 49.578 233.650,49.413 235.270,49.200 235.600 C 48.937 236.006,48.819 234.779,48.834 231.800 C 48.848 228.974,48.979 227.686,49.200 228.200 C 49.389 228.640,49.554 230.350,49.566 232.000 M156.514 235.646 C 156.268 235.892,155.666 236.297,155.176 236.546 C 154.300 236.993,151.725 241.058,152.089 241.422 C 152.249 241.582,153.865 240.339,154.940 239.231 C 156.082 238.052,156.800 237.165,156.800 236.931 C 156.800 236.784,157.098 236.334,157.462 235.931 C 158.224 235.090,157.337 234.823,156.514 235.646 M349.567 243.000 C 349.601 245.819,349.171 248.197,348.749 247.531 C 348.351 246.903,348.297 241.827,348.673 240.421 C 349.055 238.992,349.536 240.379,349.567 243.000 M223.770 241.252 C 223.567 241.599,222.984 242.101,222.477 242.368 C 221.465 242.900,221.315 245.439,222.300 245.360 C 222.575 245.338,226.428 245.293,230.862 245.260 C 238.897 245.200,238.922 245.197,238.200 244.400 C 237.211 243.307,225.659 243.165,224.771 244.235 C 224.041 245.114,223.408 243.506,224.028 242.348 C 224.553 241.367,224.310 240.332,223.770 241.252 M271.280 244.480 C 271.016 244.744,270.800 245.377,270.800 245.886 C 270.800 247.734,267.867 250.767,263.268 253.675 C 262.681 254.047,261.959 254.565,261.663 254.825 C 261.368 255.086,259.748 256.447,258.063 257.849 C 256.379 259.251,254.715 260.669,254.366 260.999 C 254.018 261.330,253.525 261.600,253.270 261.600 C 253.015 261.600,252.582 261.960,252.307 262.400 C 252.032 262.840,251.621 263.200,251.392 263.200 C 251.164 263.200,250.712 263.575,250.388 264.034 C 250.065 264.492,249.350 265.105,248.800 265.396 C 248.250 265.686,247.406 266.267,246.925 266.687 C 246.444 267.106,245.564 267.799,244.969 268.225 C 243.079 269.580,239.032 272.887,238.114 273.828 C 237.626 274.327,236.827 275.016,236.338 275.358 C 235.849 275.701,235.547 276.081,235.669 276.202 C 236.000 276.533,238.000 275.682,238.000 275.210 C 238.000 274.984,238.315 274.800,238.700 274.800 C 239.449 274.799,242.400 271.992,242.400 271.280 C 242.400 271.046,242.778 270.734,243.239 270.587 C 243.701 270.441,244.421 269.979,244.839 269.561 C 245.258 269.142,245.964 268.800,246.409 268.800 C 246.881 268.800,247.405 268.388,247.669 267.808 C 247.918 267.262,248.454 266.710,248.861 266.581 C 249.267 266.452,249.600 266.088,249.600 265.773 C 249.600 265.458,249.870 265.200,250.200 265.200 C 250.530 265.200,251.798 264.210,253.017 263.000 C 254.237 261.790,255.491 260.800,255.803 260.800 C 256.116 260.800,256.565 260.440,256.800 260.000 C 257.035 259.560,257.538 259.200,257.916 259.200 C 258.561 259.200,260.522 257.585,265.320 253.100 C 266.438 252.055,267.582 251.200,267.862 251.200 C 268.143 251.200,268.565 250.840,268.800 250.400 C 269.035 249.960,269.573 249.600,269.994 249.600 C 270.416 249.600,270.904 249.354,271.080 249.054 C 271.256 248.754,271.985 248.209,272.700 247.844 C 273.415 247.478,274.000 246.929,274.000 246.622 C 274.000 246.316,274.097 245.813,274.215 245.504 C 274.594 244.518,272.109 243.651,271.280 244.480 M143.308 249.435 C 139.441 253.411,138.109 255.200,139.018 255.200 C 139.316 255.200,147.600 246.805,147.600 246.504 C 147.600 246.371,147.898 245.934,148.262 245.531 C 148.779 244.960,148.803 244.800,148.370 244.800 C 148.065 244.800,145.787 246.886,143.308 249.435 M51.547 253.200 C 51.569 254.190,51.413 255.270,51.200 255.600 C 50.935 256.009,50.825 255.057,50.853 252.600 C 50.896 248.919,51.460 249.407,51.547 253.200 M347.572 256.876 C 347.587 257.908,347.420 258.864,347.200 259.000 C 346.946 259.157,346.810 258.177,346.828 256.324 C 346.859 253.076,347.522 253.569,347.572 256.876 M134.897 258.900 C 134.431 259.395,133.575 260.160,132.995 260.600 C 131.598 261.660,128.810 264.521,128.804 264.900 C 128.802 265.065,128.622 265.200,128.405 265.200 C 127.915 265.200,125.228 268.054,125.205 268.600 C 125.183 269.108,117.238 277.188,114.303 279.686 C 112.074 281.584,110.666 284.000,111.789 284.000 C 112.490 284.000,114.936 281.577,117.394 278.449 C 118.452 277.102,119.540 276.000,119.812 276.000 C 120.084 276.000,120.404 275.627,120.524 275.170 C 120.643 274.714,121.114 274.243,121.570 274.124 C 122.027 274.004,122.400 273.737,122.400 273.530 C 122.400 273.323,123.255 272.314,124.300 271.287 C 125.345 270.260,126.804 268.696,127.542 267.810 C 128.280 266.925,130.575 264.457,132.642 262.328 C 134.709 260.198,136.400 258.353,136.400 258.228 C 136.400 257.733,135.702 258.045,134.897 258.900 M53.553 263.276 C 53.610 265.545,52.945 266.179,52.575 264.208 C 52.202 262.219,52.807 258.460,53.220 260.200 C 53.377 260.860,53.527 262.244,53.553 263.276 M345.600 265.200 C 345.600 267.060,345.125 267.855,344.703 266.700 C 344.422 265.929,344.843 263.200,345.244 263.200 C 345.440 263.200,345.600 264.100,345.600 265.200 M55.572 270.876 C 55.602 272.446,55.045 273.217,54.642 272.165 C 54.307 271.292,54.338 268.595,54.687 268.246 C 55.098 267.836,55.539 269.149,55.572 270.876 M343.600 271.824 C 343.600 272.937,343.444 273.551,343.200 273.400 C 342.755 273.125,342.669 271.607,343.043 270.633 C 343.447 269.580,343.600 269.908,343.600 271.824 M57.357 275.433 C 57.491 275.781,57.600 276.606,57.600 277.266 C 57.600 279.120,56.621 278.425,56.477 276.469 C 56.356 274.823,56.884 274.201,57.357 275.433 M341.476 279.100 C 341.375 279.485,341.293 279.170,341.293 278.400 C 341.293 277.630,341.375 277.315,341.476 277.700 C 341.576 278.085,341.576 278.715,341.476 279.100 M59.200 282.024 C 59.200 282.891,59.020 283.600,58.800 283.600 C 58.580 283.600,58.400 282.779,58.400 281.776 C 58.400 280.663,58.556 280.049,58.800 280.200 C 59.020 280.336,59.200 281.157,59.200 282.024 M339.476 284.300 C 339.375 284.685,339.293 284.370,339.293 283.600 C 339.293 282.830,339.375 282.515,339.476 282.900 C 339.576 283.285,339.576 283.915,339.476 284.300 M61.194 286.900 C 61.197 287.505,61.020 288.000,60.800 288.000 C 60.580 288.000,60.403 287.235,60.406 286.300 C 60.411 285.055,60.516 284.761,60.800 285.200 C 61.013 285.530,61.191 286.295,61.194 286.900 M337.476 289.100 C 337.375 289.485,337.293 289.170,337.293 288.400 C 337.293 287.630,337.375 287.315,337.476 287.700 C 337.576 288.085,337.576 288.715,337.476 289.100 M106.100 288.665 C 105.825 288.776,105.592 289.077,105.581 289.333 C 105.571 289.590,104.862 290.340,104.005 291.000 C 102.200 292.390,101.912 292.911,102.236 294.203 C 102.629 295.765,103.008 295.793,127.000 296.015 C 139.760 296.133,150.567 296.369,151.015 296.539 C 152.268 297.015,154.143 295.416,153.576 294.355 C 153.163 293.583,152.659 293.567,129.597 293.619 C 116.640 293.648,105.851 293.555,105.620 293.412 C 104.779 292.893,105.190 291.137,106.400 290.075 C 108.021 288.652,107.872 287.950,106.100 288.665 M62.904 290.356 C 63.013 290.771,62.947 291.356,62.757 291.656 C 62.523 292.026,62.410 291.784,62.406 290.900 C 62.399 289.445,62.607 289.218,62.904 290.356 M336.000 292.600 C 336.000 293.150,335.820 293.600,335.600 293.600 C 335.380 293.600,335.200 293.150,335.200 292.600 C 335.200 292.050,335.380 291.600,335.600 291.600 C 335.820 291.600,336.000 292.050,336.000 292.600 M64.903 295.508 C 64.716 295.996,64.624 295.986,64.319 295.441 C 63.871 294.641,64.345 293.664,64.813 294.421 C 64.985 294.700,65.026 295.188,64.903 295.508 M153.200 295.050 C 153.200 295.565,152.940 295.648,151.950 295.450 C 151.263 295.313,140.508 295.157,128.050 295.105 L 105.400 295.010 128.800 294.800 C 141.670 294.685,152.425 294.547,152.700 294.495 C 152.975 294.443,153.200 294.693,153.200 295.050 M147.700 300.666 C 145.885 302.512,144.400 304.297,144.400 304.634 C 144.400 305.210,142.661 307.656,141.100 309.274 C 140.715 309.673,140.400 310.237,140.400 310.526 C 140.400 310.815,139.590 311.658,138.600 312.400 C 137.610 313.142,136.800 313.880,136.800 314.041 C 136.800 314.202,135.819 315.564,134.620 317.067 C 130.973 321.638,130.800 321.897,130.800 322.776 C 130.800 323.243,130.559 323.717,130.265 323.830 C 129.614 324.080,125.200 329.389,125.200 329.922 C 125.200 330.131,124.934 330.523,124.608 330.793 C 123.844 331.427,122.757 333.600,123.203 333.600 C 123.392 333.600,123.960 333.017,124.467 332.305 C 125.483 330.879,126.021 330.214,127.445 328.627 C 127.970 328.042,128.400 327.393,128.400 327.185 C 128.400 326.977,128.760 326.582,129.200 326.307 C 129.640 326.032,130.000 325.579,130.000 325.300 C 130.000 325.021,130.540 324.228,131.200 323.537 C 131.860 322.846,132.400 322.151,132.400 321.991 C 132.400 321.831,133.210 320.855,134.200 319.822 C 135.190 318.788,136.000 317.787,136.000 317.596 C 136.000 317.405,136.540 316.658,137.200 315.936 C 137.860 315.213,138.400 314.452,138.400 314.244 C 138.400 313.863,138.893 313.264,140.900 311.207 C 141.505 310.587,142.000 309.961,142.000 309.816 C 142.000 309.583,143.502 307.571,145.200 305.531 C 145.530 305.134,146.250 304.249,146.800 303.564 C 147.350 302.878,148.115 301.976,148.500 301.559 C 148.885 301.141,149.200 300.634,149.200 300.431 C 149.200 300.228,149.672 299.500,150.250 298.814 C 152.296 296.382,150.955 297.357,147.700 300.666 M66.800 298.824 C 66.800 299.277,66.620 299.536,66.400 299.400 C 66.180 299.264,66.000 298.893,66.000 298.576 C 66.000 298.259,66.180 298.000,66.400 298.000 C 66.620 298.000,66.800 298.371,66.800 298.824 M148.000 369.600 C 148.466 369.901,148.349 369.989,147.476 369.994 C 146.828 369.997,146.457 369.831,146.600 369.600 C 146.907 369.103,147.231 369.103,148.000 369.600 M154.000 371.843 C 154.000 371.929,153.325 371.982,152.500 371.960 C 151.195 371.925,151.130 371.882,152.000 371.627 C 152.924 371.356,154.000 371.472,154.000 371.843 M247.600 371.600 C 248.028 371.877,247.628 371.978,246.200 371.954 C 244.604 371.927,244.402 371.856,245.200 371.600 C 246.588 371.156,246.912 371.156,247.600 371.600 M160.400 373.600 C 160.839 373.884,160.537 373.989,159.276 373.994 C 158.228 373.998,157.650 373.843,157.800 373.600 C 158.114 373.093,159.615 373.093,160.400 373.600 M241.600 373.600 C 241.600 373.820,240.835 373.997,239.900 373.994 C 238.655 373.989,238.361 373.884,238.800 373.600 C 239.590 373.090,241.600 373.090,241.600 373.600 M168.433 375.200 C 168.855 375.200,169.200 375.380,169.200 375.600 C 169.200 375.820,168.300 376.000,167.200 376.000 C 166.100 376.000,165.200 375.833,165.200 375.629 C 165.200 375.188,166.381 374.832,167.133 375.048 C 167.426 375.131,168.011 375.200,168.433 375.200 M234.400 375.600 C 234.400 375.820,233.410 376.000,232.200 376.000 C 230.990 376.000,230.000 375.820,230.000 375.600 C 230.000 375.380,230.990 375.200,232.200 375.200 C 233.410 375.200,234.400 375.380,234.400 375.600 M223.589 377.683 C 223.045 377.885,221.970 377.919,221.200 377.758 L 219.800 377.467 221.000 377.223 C 221.660 377.090,222.735 377.056,223.389 377.148 L 224.577 377.317 223.589 377.683 M177.600 377.353 C 177.600 377.717,176.041 377.872,175.544 377.557 C 175.174 377.323,175.416 377.210,176.300 377.206 C 177.015 377.203,177.600 377.269,177.600 377.353 ", stroke: "none", fill: "#71421a", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path4", d: "M338.964 39.350 C 338.625 40.233,339.076 40.684,339.687 40.073 C 340.047 39.713,340.049 39.489,339.693 39.133 C 339.337 38.777,339.164 38.829,338.964 39.350 M335.975 41.313 C 335.411 41.801,334.345 42.650,333.607 43.200 C 332.066 44.348,329.779 46.235,328.517 47.400 C 328.041 47.840,327.234 48.514,326.725 48.898 C 326.216 49.282,324.900 50.272,323.800 51.098 C 322.700 51.924,321.620 52.794,321.400 53.032 C 320.489 54.015,316.114 57.600,315.825 57.600 C 315.477 57.600,314.890 58.094,311.364 61.350 C 310.024 62.587,308.779 63.600,308.597 63.600 C 308.416 63.600,307.982 63.873,307.634 64.206 C 307.285 64.539,305.200 66.248,303.000 68.002 C 298.247 71.792,297.384 72.500,295.787 73.921 C 295.120 74.514,294.061 75.360,293.434 75.800 C 292.456 76.487,291.348 77.388,288.377 79.915 C 288.060 80.185,286.630 81.307,285.200 82.408 C 283.770 83.509,282.150 84.806,281.600 85.290 C 278.386 88.117,277.431 88.362,277.015 86.468 C 276.828 85.617,276.312 85.138,274.884 84.488 C 273.848 84.017,272.730 83.469,272.400 83.269 C 271.065 82.463,266.570 80.400,266.149 80.400 C 265.901 80.400,265.474 80.130,265.200 79.800 C 264.926 79.470,264.395 79.200,264.019 79.200 C 263.643 79.200,262.460 78.757,261.389 78.214 C 260.318 77.672,258.895 77.109,258.227 76.962 C 257.559 76.815,256.649 76.460,256.206 76.174 C 255.763 75.887,254.500 75.434,253.400 75.167 C 252.300 74.900,250.732 74.348,249.916 73.941 C 249.100 73.533,248.069 73.200,247.625 73.200 C 247.181 73.200,245.689 72.776,244.309 72.258 C 242.929 71.740,240.902 71.183,239.805 71.019 C 238.708 70.856,237.358 70.493,236.805 70.212 C 236.252 69.930,234.540 69.574,233.000 69.420 C 231.460 69.266,228.789 68.785,227.065 68.352 C 225.340 67.919,221.380 67.386,218.265 67.168 C 215.149 66.950,211.970 66.599,211.200 66.388 C 209.282 65.863,185.956 65.884,184.566 66.413 C 183.969 66.640,181.483 66.927,179.040 67.051 C 176.598 67.175,173.070 67.632,171.200 68.066 C 169.330 68.500,166.450 69.102,164.800 69.404 C 160.647 70.164,156.913 71.160,154.899 72.044 C 153.963 72.455,152.433 72.904,151.499 73.043 C 150.564 73.181,149.426 73.527,148.969 73.811 C 148.512 74.095,147.252 74.604,146.169 74.940 C 143.782 75.683,139.299 77.525,138.200 78.215 C 137.760 78.491,136.950 78.845,136.400 79.002 C 135.437 79.277,131.236 81.237,130.000 81.988 C 129.670 82.189,127.870 83.093,126.000 83.999 C 124.130 84.904,121.790 86.110,120.800 86.679 C 119.810 87.249,118.460 88.010,117.800 88.372 C 117.140 88.734,116.060 89.370,115.400 89.785 C 114.740 90.201,113.390 91.044,112.400 91.660 C 111.410 92.275,110.420 92.928,110.200 93.111 C 109.980 93.294,108.471 94.333,106.847 95.421 C 100.495 99.677,99.646 100.290,96.377 102.979 C 94.520 104.508,92.471 106.218,91.825 106.779 C 90.085 108.291,77.128 121.257,76.207 122.409 C 75.771 122.954,74.502 124.480,73.386 125.800 C 72.271 127.120,70.738 129.100,69.979 130.200 C 69.221 131.300,68.407 132.380,68.172 132.600 C 67.696 133.045,66.612 134.608,65.400 136.599 C 64.960 137.321,64.011 138.756,63.292 139.788 C 62.573 140.820,61.727 142.279,61.413 143.032 C 61.098 143.784,60.680 144.400,60.484 144.400 C 60.288 144.400,59.888 145.129,59.594 146.020 C 59.300 146.910,58.866 147.765,58.630 147.920 C 58.393 148.074,57.591 149.460,56.848 151.000 C 56.104 152.540,55.335 154.070,55.140 154.400 C 54.944 154.730,54.517 155.630,54.191 156.400 C 53.865 157.170,53.238 158.466,52.799 159.279 C 52.360 160.093,52.000 161.088,52.000 161.490 C 52.000 161.893,51.721 162.621,51.380 163.108 C 51.038 163.595,50.428 164.940,50.022 166.097 C 49.617 167.254,48.998 168.740,48.645 169.400 C 48.293 170.060,48.004 171.055,48.002 171.611 C 48.001 172.167,47.744 172.988,47.431 173.435 C 47.118 173.882,46.578 175.340,46.232 176.675 C 45.887 178.009,45.334 179.619,45.004 180.251 C 44.675 180.883,44.404 181.872,44.402 182.449 C 44.401 183.026,43.970 184.826,43.444 186.449 C 42.919 188.072,42.357 190.390,42.197 191.600 C 42.036 192.810,41.668 194.430,41.378 195.200 C 41.088 195.970,40.650 198.220,40.404 200.200 C 40.158 202.180,39.713 204.790,39.416 206.000 C 38.646 209.137,38.393 211.326,38.356 215.160 C 38.338 217.009,38.116 219.349,37.862 220.360 C 36.995 223.813,38.216 249.267,39.452 253.518 C 39.794 254.697,40.317 257.223,40.614 259.131 C 41.240 263.154,42.034 266.509,43.424 271.000 C 43.968 272.760,44.411 274.615,44.407 275.122 C 44.403 275.629,44.740 276.799,45.155 277.722 C 45.570 278.645,46.039 280.030,46.198 280.800 C 46.356 281.570,46.827 282.761,47.243 283.447 C 47.659 284.133,48.000 285.051,48.000 285.488 C 48.000 285.924,48.450 287.127,49.000 288.162 C 49.550 289.196,50.000 290.255,50.000 290.515 C 50.000 290.988,51.260 293.803,52.993 297.200 C 53.498 298.190,54.035 299.585,54.187 300.300 C 54.339 301.015,54.607 301.600,54.782 301.600 C 54.957 301.600,55.861 303.085,56.792 304.900 C 57.722 306.715,59.090 309.190,59.832 310.400 C 60.574 311.610,61.383 313.095,61.630 313.700 C 61.876 314.305,62.212 314.800,62.376 314.800 C 62.540 314.800,63.091 315.610,63.600 316.600 C 64.109 317.590,64.677 318.400,64.863 318.400 C 65.048 318.400,65.200 318.641,65.200 318.934 C 65.200 319.228,66.097 320.623,67.194 322.034 C 68.291 323.446,69.686 325.280,70.294 326.111 C 70.902 326.942,71.587 327.842,71.816 328.111 C 72.045 328.380,72.495 328.979,72.816 329.443 C 76.322 334.504,93.706 352.174,96.729 353.750 C 97.098 353.942,97.580 354.302,97.800 354.550 C 98.890 355.776,101.233 357.169,102.633 357.422 C 103.495 357.578,104.338 357.784,104.507 357.881 C 104.785 358.040,103.819 359.634,102.499 361.195 C 102.217 361.528,101.494 362.377,100.893 363.082 C 100.292 363.787,99.491 364.777,99.114 365.282 C 97.778 367.069,95.627 369.809,95.018 370.500 C 94.678 370.885,94.400 371.346,94.400 371.525 C 94.400 371.704,93.860 372.368,93.200 373.000 C 92.540 373.632,92.000 374.377,92.000 374.655 C 92.000 374.933,91.775 375.304,91.500 375.480 C 90.967 375.821,88.400 379.022,88.400 379.346 C 88.400 379.452,87.905 380.063,87.300 380.705 C 86.695 381.347,85.840 382.360,85.400 382.956 C 84.960 383.552,84.105 384.639,83.500 385.373 C 82.895 386.106,82.400 386.847,82.400 387.019 C 82.400 387.192,82.139 387.618,81.820 387.966 C 79.652 390.334,78.800 391.351,78.800 391.570 C 78.800 391.791,77.928 392.879,75.812 395.300 C 75.475 395.685,75.200 396.111,75.200 396.247 C 75.200 396.383,74.705 397.076,74.100 397.786 C 72.719 399.407,71.504 400.953,70.002 403.000 C 67.763 406.051,67.395 406.520,66.466 407.509 C 65.676 408.351,65.617 408.588,66.080 409.052 C 66.702 409.673,69.375 408.149,72.000 405.677 C 72.770 404.952,74.175 403.783,75.121 403.079 C 76.068 402.376,78.447 400.495,80.408 398.900 C 82.368 397.305,84.088 396.000,84.230 396.000 C 84.371 396.000,84.873 395.648,85.344 395.217 C 86.934 393.762,92.185 389.496,94.400 387.859 C 95.610 386.964,97.860 385.173,99.400 383.879 C 100.940 382.585,103.280 380.714,104.600 379.721 C 105.920 378.729,107.784 377.261,108.741 376.458 C 109.699 375.656,111.073 374.505,111.794 373.900 C 112.515 373.295,113.202 372.800,113.319 372.800 C 113.550 372.800,114.977 371.646,116.904 369.900 C 117.572 369.295,118.303 368.800,118.528 368.800 C 118.753 368.800,119.292 368.485,119.725 368.100 C 120.497 367.414,120.507 367.431,120.238 368.900 C 120.034 370.016,120.099 370.400,120.493 370.400 C 120.934 370.400,124.501 372.107,127.800 373.896 C 128.240 374.135,129.680 374.801,131.000 375.376 C 132.320 375.951,134.255 376.867,135.300 377.411 C 136.345 377.955,137.425 378.402,137.700 378.404 C 137.975 378.406,139.100 378.850,140.200 379.391 C 141.300 379.932,142.523 380.381,142.918 380.387 C 143.313 380.394,144.482 380.850,145.515 381.400 C 146.548 381.950,147.848 382.400,148.403 382.400 C 148.958 382.400,150.039 382.732,150.806 383.137 C 151.573 383.542,153.320 384.090,154.689 384.355 C 156.058 384.619,157.665 385.089,158.262 385.398 C 158.858 385.708,160.348 386.070,161.573 386.204 C 162.798 386.338,164.539 386.711,165.443 387.035 C 166.346 387.358,169.676 387.989,172.843 388.437 C 176.009 388.884,179.770 389.449,181.200 389.692 C 184.719 390.290,215.365 390.268,218.600 389.665 C 219.920 389.419,222.980 388.937,225.400 388.593 C 227.820 388.249,231.150 387.622,232.800 387.200 C 234.450 386.778,236.610 386.315,237.600 386.170 C 238.590 386.025,239.760 385.716,240.200 385.482 C 240.640 385.248,242.260 384.744,243.800 384.361 C 246.771 383.622,248.279 383.139,255.600 380.586 C 257.030 380.087,258.740 379.393,259.400 379.042 C 260.060 378.692,260.833 378.404,261.118 378.402 C 261.403 378.401,262.482 377.950,263.515 377.400 C 264.548 376.850,265.688 376.400,266.048 376.400 C 266.408 376.400,266.918 376.139,267.183 375.820 C 267.448 375.502,268.325 375.029,269.132 374.770 C 269.939 374.511,270.882 374.054,271.226 373.754 C 271.570 373.455,272.470 373.002,273.226 372.747 C 273.982 372.492,274.849 372.085,275.153 371.842 C 275.750 371.366,278.026 370.131,280.606 368.885 C 281.489 368.458,282.456 367.815,282.755 367.455 C 283.053 367.095,283.452 366.800,283.641 366.800 C 283.830 366.800,285.000 366.125,286.241 365.300 C 287.482 364.475,288.963 363.547,289.531 363.239 C 290.100 362.930,290.922 362.345,291.358 361.939 C 291.794 361.532,292.274 361.200,292.424 361.200 C 292.575 361.200,293.793 360.345,295.131 359.300 C 296.469 358.255,298.221 356.950,299.025 356.400 C 299.829 355.850,300.988 354.949,301.601 354.397 C 302.214 353.846,303.661 352.586,304.818 351.597 C 306.655 350.027,319.973 336.772,321.894 334.602 C 327.161 328.652,336.800 315.464,336.800 314.207 C 336.800 313.927,337.080 313.465,337.423 313.181 C 337.766 312.896,338.315 312.109,338.645 311.432 C 338.974 310.754,339.772 309.300,340.418 308.200 C 341.065 307.100,341.857 305.660,342.180 305.000 C 342.502 304.340,343.132 303.260,343.580 302.600 C 344.028 301.940,344.396 301.144,344.397 300.831 C 344.399 300.519,344.645 299.979,344.945 299.631 C 345.245 299.284,345.816 298.100,346.213 297.000 C 346.610 295.900,347.175 294.716,347.468 294.369 C 347.761 294.021,348.001 293.481,348.002 293.169 C 348.004 292.856,348.293 292.060,348.645 291.400 C 348.998 290.740,349.626 289.230,350.041 288.044 C 350.456 286.857,350.958 285.687,351.156 285.444 C 351.354 285.200,351.787 284.010,352.120 282.800 C 352.452 281.590,353.006 279.790,353.351 278.800 C 354.559 275.339,355.255 272.980,355.831 270.400 C 356.151 268.970,356.668 267.151,356.980 266.358 C 357.292 265.565,357.664 263.765,357.807 262.358 C 357.950 260.951,358.320 258.990,358.630 258.000 C 358.939 257.010,359.385 254.310,359.621 252.000 C 359.856 249.690,360.243 246.540,360.480 245.000 C 361.145 240.679,361.513 218.221,360.958 215.800 C 360.706 214.700,360.392 212.630,360.262 211.200 C 359.466 202.506,359.133 199.933,358.645 198.738 C 358.345 198.002,357.974 196.067,357.820 194.438 C 357.665 192.809,357.215 190.649,356.818 189.638 C 356.421 188.627,355.963 186.814,355.799 185.610 C 355.634 184.405,355.252 183.041,354.949 182.579 C 354.646 182.116,354.205 180.690,353.968 179.409 C 353.731 178.128,353.191 176.435,352.769 175.646 C 352.346 174.857,351.999 173.849,351.998 173.406 C 351.996 172.963,351.707 172.060,351.356 171.400 C 351.004 170.740,350.389 169.300,349.988 168.200 C 349.587 167.100,348.928 165.300,348.524 164.200 C 348.119 163.100,347.476 161.755,347.094 161.211 C 346.712 160.667,346.400 160.027,346.400 159.790 C 346.400 159.409,345.644 157.684,344.036 154.400 C 343.767 153.850,343.022 152.500,342.382 151.400 C 341.741 150.300,341.095 149.130,340.946 148.800 C 339.741 146.126,333.834 137.070,330.030 132.066 C 328.804 130.452,327.392 128.517,326.894 127.766 C 326.396 127.015,325.811 126.400,325.594 126.400 C 325.377 126.400,325.200 126.207,325.200 125.971 C 325.200 124.917,308.780 107.998,304.498 104.641 C 303.124 103.564,302.000 102.529,302.000 102.341 C 302.000 102.153,301.758 102.000,301.462 102.000 C 301.166 102.000,300.591 101.632,300.183 101.181 C 298.971 99.842,296.984 99.105,295.010 99.262 C 294.014 99.341,293.200 99.269,293.200 99.103 C 293.200 98.936,293.470 98.800,293.800 98.800 C 294.130 98.800,294.400 98.453,294.400 98.029 C 294.400 97.604,294.654 97.003,294.964 96.693 C 295.714 95.943,300.646 90.049,301.514 88.865 C 301.891 88.350,302.605 87.487,303.100 86.947 C 303.595 86.406,304.000 85.851,304.000 85.713 C 304.000 85.575,304.900 84.427,306.000 83.163 C 307.100 81.898,308.000 80.720,308.000 80.546 C 308.000 80.371,308.347 79.862,308.772 79.414 C 310.782 77.293,311.600 76.345,311.600 76.135 C 311.600 76.009,312.095 75.306,312.700 74.573 C 313.305 73.839,314.111 72.826,314.492 72.320 C 314.872 71.814,316.191 70.140,317.422 68.600 C 318.653 67.060,320.052 65.295,320.530 64.677 C 321.009 64.060,321.895 62.956,322.500 62.225 C 323.105 61.493,323.600 60.791,323.600 60.665 C 323.600 60.539,324.005 60.001,324.500 59.470 C 325.652 58.233,327.487 55.928,329.970 52.600 C 331.199 50.954,332.495 49.349,333.670 48.019 C 334.038 47.602,334.547 46.873,334.801 46.399 C 335.332 45.407,336.215 44.266,337.500 42.912 C 339.411 40.899,338.073 39.497,335.975 41.313 M336.000 43.400 C 336.000 43.730,335.831 44.000,335.624 44.000 C 335.119 44.000,334.758 43.375,335.078 43.056 C 335.528 42.605,336.000 42.781,336.000 43.400 M334.400 45.195 C 334.400 45.386,334.163 45.781,333.873 46.071 C 333.584 46.362,333.002 47.140,332.580 47.800 C 332.159 48.460,331.496 49.235,331.107 49.523 C 330.718 49.810,330.400 50.241,330.400 50.481 C 330.400 50.720,330.034 51.295,329.588 51.758 C 328.360 53.031,326.400 55.476,326.400 55.735 C 326.400 55.861,325.995 56.406,325.500 56.947 C 325.005 57.487,324.240 58.416,323.800 59.010 C 322.996 60.097,322.288 60.967,320.025 63.653 C 319.351 64.452,318.800 65.388,318.800 65.733 C 318.800 66.078,318.527 66.513,318.193 66.700 C 317.561 67.054,313.734 71.703,312.000 74.223 C 311.450 75.023,310.595 76.052,310.100 76.511 C 309.605 76.969,309.200 77.582,309.200 77.872 C 309.200 78.162,309.051 78.400,308.870 78.400 C 308.688 78.400,307.564 79.615,306.371 81.100 C 305.179 82.585,303.977 84.038,303.702 84.329 C 303.426 84.619,303.200 85.049,303.200 85.284 C 303.200 85.520,302.944 85.912,302.632 86.156 C 302.320 86.400,301.071 87.860,299.857 89.400 C 296.400 93.787,295.860 94.439,294.900 95.396 C 294.405 95.889,294.000 96.422,294.000 96.582 C 294.000 96.742,293.190 97.821,292.200 98.979 C 291.210 100.138,290.400 101.286,290.400 101.529 C 290.400 101.773,289.905 102.497,289.300 103.139 C 287.175 105.393,284.587 108.506,283.311 110.344 C 282.602 111.365,281.813 112.444,281.557 112.741 C 279.033 115.675,276.780 118.513,275.794 120.000 C 275.138 120.990,274.151 122.265,273.600 122.834 C 271.869 124.625,269.457 127.621,267.869 129.952 C 267.028 131.188,266.083 132.344,265.769 132.520 C 265.456 132.696,265.200 133.106,265.200 133.432 C 265.200 133.758,264.939 134.125,264.620 134.248 C 264.052 134.466,259.200 140.560,259.200 141.056 C 259.200 141.195,258.795 141.724,258.300 142.233 C 257.805 142.742,256.995 143.662,256.501 144.279 C 256.006 144.896,255.061 146.054,254.401 146.853 C 253.740 147.652,253.200 148.507,253.200 148.753 C 253.200 148.999,253.042 149.200,252.849 149.200 C 252.655 149.200,251.710 150.235,250.749 151.500 C 249.787 152.765,248.412 154.430,247.693 155.200 C 246.207 156.790,245.696 158.228,246.284 159.162 C 246.709 159.837,247.715 159.876,283.700 160.611 C 298.299 160.909,297.703 160.537,292.452 166.065 C 290.501 168.119,288.296 170.491,287.552 171.335 C 286.809 172.179,284.556 174.609,282.547 176.735 C 280.538 178.861,278.288 181.322,277.547 182.204 C 276.806 183.086,275.030 185.006,273.600 186.471 C 272.170 187.935,268.930 191.331,266.400 194.017 C 263.870 196.702,260.315 200.380,258.500 202.188 C 256.685 203.997,255.200 205.649,255.200 205.861 C 255.200 206.073,253.535 207.965,251.500 210.066 C 249.465 212.168,246.000 215.811,243.800 218.164 C 241.600 220.516,238.180 224.125,236.200 226.182 C 234.220 228.240,230.800 231.871,228.600 234.251 C 226.400 236.631,223.655 239.536,222.500 240.706 C 220.944 242.284,220.400 243.133,220.400 243.989 C 220.400 246.506,219.307 246.400,245.229 246.400 C 264.027 246.400,268.800 246.503,268.800 246.908 C 268.800 247.633,267.473 248.891,263.720 251.724 C 258.989 255.296,252.689 260.355,250.261 262.531 C 249.568 263.153,247.830 264.489,246.400 265.500 C 244.970 266.511,243.068 267.982,242.174 268.769 C 239.870 270.796,237.513 272.719,233.600 275.767 C 231.730 277.223,229.660 278.849,229.000 279.380 C 228.340 279.911,226.720 281.177,225.400 282.194 C 224.080 283.210,222.100 284.826,221.000 285.783 C 219.900 286.741,218.167 288.126,217.150 288.862 C 214.321 290.908,210.327 294.118,209.639 294.900 C 209.300 295.285,208.874 295.600,208.694 295.600 C 208.378 295.600,204.623 298.613,202.717 300.395 C 202.213 300.866,200.990 301.789,200.000 302.446 C 199.010 303.103,196.960 304.756,195.444 306.120 C 193.929 307.484,191.769 309.233,190.644 310.006 C 188.619 311.399,188.037 311.863,185.372 314.211 C 184.616 314.878,182.298 316.678,180.221 318.211 C 178.144 319.745,176.435 321.225,176.423 321.500 C 176.410 321.775,176.161 322.000,175.870 322.000 C 175.578 322.000,174.939 322.426,174.449 322.948 C 173.959 323.469,172.538 324.594,171.289 325.448 C 170.041 326.301,168.712 327.270,168.335 327.600 C 167.958 327.930,166.984 328.740,166.169 329.400 C 165.355 330.060,164.485 330.780,164.235 331.000 C 163.985 331.220,162.975 332.013,161.990 332.763 C 161.006 333.512,159.840 334.460,159.400 334.870 C 158.960 335.279,157.430 336.513,156.000 337.612 C 150.215 342.056,147.200 344.539,147.200 344.861 C 147.200 345.047,147.005 345.200,146.767 345.200 C 146.183 345.200,140.000 350.006,140.000 350.460 C 140.000 350.658,139.545 350.993,138.990 351.204 C 138.434 351.415,137.875 351.861,137.747 352.194 C 137.619 352.527,137.332 352.800,137.110 352.800 C 136.888 352.800,136.052 353.336,135.253 353.991 C 134.454 354.646,133.283 355.591,132.650 356.091 C 132.018 356.591,131.097 357.405,130.604 357.900 C 130.111 358.395,129.594 358.800,129.455 358.800 C 129.315 358.800,128.443 359.535,127.518 360.434 C 126.592 361.332,124.837 362.724,123.617 363.528 C 122.398 364.331,121.072 365.396,120.671 365.894 C 120.270 366.392,119.775 366.800,119.571 366.800 C 119.367 366.800,118.885 367.078,118.500 367.418 C 117.867 367.977,115.761 369.614,113.259 371.493 C 112.742 371.882,111.812 372.650,111.194 373.200 C 109.458 374.743,107.982 375.929,105.800 377.531 C 104.700 378.339,103.656 379.225,103.480 379.500 C 103.304 379.775,102.965 380.000,102.726 380.000 C 102.487 380.000,101.876 380.405,101.367 380.900 C 100.292 381.946,99.241 382.815,95.400 385.831 C 93.860 387.041,92.132 388.428,91.560 388.915 C 90.987 389.402,90.010 390.160,89.388 390.600 C 87.635 391.839,82.652 395.995,82.156 396.631 C 81.912 396.944,81.598 397.200,81.459 397.200 C 81.244 397.200,79.020 398.811,77.145 400.325 C 75.481 401.668,73.785 403.107,72.932 403.900 C 72.399 404.395,71.851 404.800,71.713 404.800 C 71.576 404.800,71.134 405.098,70.731 405.462 C 69.765 406.337,69.656 404.797,70.607 403.700 C 72.518 401.495,73.524 400.098,73.773 399.300 C 73.927 398.805,74.300 398.400,74.600 398.400 C 74.900 398.400,75.256 398.052,75.391 397.627 C 75.526 397.202,76.436 395.987,77.414 394.927 C 78.392 393.867,79.193 392.890,79.196 392.755 C 79.200 392.504,80.910 390.226,82.505 388.346 C 82.997 387.766,83.721 386.866,84.114 386.346 C 84.506 385.826,85.361 384.700,86.014 383.845 C 86.666 382.990,87.200 382.045,87.200 381.745 C 87.200 381.445,87.470 381.200,87.800 381.200 C 88.130 381.200,88.400 381.023,88.400 380.807 C 88.400 380.591,88.850 379.916,89.401 379.307 C 89.951 378.698,91.415 376.850,92.653 375.200 C 93.891 373.550,95.331 371.740,95.852 371.178 C 96.373 370.616,96.800 369.941,96.800 369.678 C 96.800 369.415,96.940 369.200,97.112 369.200 C 97.284 369.200,98.139 368.181,99.012 366.935 C 99.885 365.689,101.005 364.274,101.500 363.789 C 101.995 363.305,102.400 362.725,102.400 362.500 C 102.400 362.276,102.850 361.797,103.400 361.437 C 103.950 361.076,104.400 360.516,104.400 360.191 C 104.400 359.866,104.571 359.600,104.781 359.600 C 104.990 359.600,105.952 358.385,106.918 356.900 C 107.883 355.415,109.326 353.480,110.123 352.600 C 112.435 350.048,114.000 347.933,114.000 347.359 C 114.000 347.067,114.360 346.635,114.800 346.400 C 115.240 346.165,115.600 345.780,115.600 345.546 C 115.600 345.311,116.378 344.330,117.329 343.366 C 118.280 342.401,119.315 341.119,119.629 340.518 C 120.205 339.415,120.325 339.253,122.307 336.905 C 125.835 332.725,127.600 330.410,127.600 329.963 C 127.600 329.783,128.063 329.133,128.628 328.518 C 129.194 327.903,129.979 327.040,130.372 326.600 C 131.460 325.384,135.200 320.449,135.200 320.230 C 135.200 320.123,135.605 319.609,136.100 319.086 C 136.595 318.563,137.450 317.551,138.000 316.837 C 138.550 316.123,139.405 315.058,139.900 314.470 C 140.394 313.881,140.799 313.259,140.800 313.086 C 140.800 312.914,142.105 311.162,143.700 309.193 C 145.295 307.224,147.950 303.875,149.600 301.750 C 151.250 299.626,153.032 297.462,153.561 296.942 C 154.714 295.806,154.798 293.789,153.726 292.976 C 153.130 292.524,148.966 292.423,130.533 292.413 C 104.511 292.398,105.636 292.525,108.100 289.890 C 114.454 283.094,121.107 276.171,132.842 264.139 C 134.955 261.973,136.847 259.894,137.047 259.519 C 137.247 259.145,139.884 256.265,142.908 253.119 C 145.932 249.974,150.520 245.189,153.103 242.487 C 157.692 237.687,159.605 235.708,171.700 223.254 C 174.945 219.912,177.600 216.922,177.600 216.609 C 177.600 216.296,177.861 215.894,178.180 215.715 C 179.369 215.050,185.237 209.089,185.828 207.946 C 187.687 204.352,187.165 204.269,161.005 204.016 C 135.423 203.769,136.551 203.973,141.354 200.464 C 142.962 199.289,145.070 197.617,146.039 196.748 C 147.007 195.880,149.127 194.141,150.748 192.884 C 152.370 191.628,155.088 189.430,156.790 188.000 C 158.491 186.570,160.559 184.860,161.384 184.200 C 166.126 180.409,173.419 174.259,173.533 173.955 C 173.607 173.760,173.879 173.600,174.139 173.600 C 174.398 173.600,176.048 172.327,177.805 170.771 C 179.562 169.215,181.810 167.378,182.800 166.690 C 183.790 166.001,184.802 165.249,185.050 165.019 C 186.935 163.263,190.621 160.134,191.151 159.841 C 191.844 159.458,195.932 156.148,196.600 155.430 C 196.820 155.194,198.080 154.196,199.400 153.213 C 200.720 152.230,202.070 151.199,202.400 150.921 C 202.730 150.643,203.481 150.007,204.068 149.508 C 206.484 147.454,207.220 146.853,212.200 142.867 C 215.060 140.578,217.760 138.363,218.200 137.944 C 219.896 136.330,221.878 134.733,223.800 133.432 C 224.900 132.687,226.610 131.321,227.600 130.396 C 228.590 129.471,230.695 127.735,232.277 126.539 C 233.860 125.342,235.729 123.827,236.430 123.172 C 237.131 122.517,237.927 121.850,238.198 121.691 C 238.469 121.531,239.480 120.741,240.445 119.936 C 242.080 118.573,244.193 116.874,246.951 114.705 C 247.584 114.207,248.484 113.488,248.951 113.106 C 256.925 106.587,259.999 104.040,260.814 103.275 C 261.356 102.765,262.745 101.721,263.900 100.953 C 265.055 100.185,266.000 99.381,266.000 99.166 C 266.000 98.951,266.302 98.659,266.672 98.517 C 267.041 98.375,268.076 97.525,268.972 96.627 C 270.886 94.707,273.770 92.401,274.258 92.398 C 274.446 92.397,275.451 91.632,276.492 90.698 C 277.533 89.764,279.279 88.370,280.373 87.600 C 281.467 86.830,282.371 86.070,282.381 85.910 C 282.392 85.751,282.895 85.354,283.500 85.028 C 284.105 84.702,285.410 83.719,286.400 82.842 C 288.957 80.579,289.981 79.729,291.800 78.361 C 294.406 76.403,295.502 75.495,297.431 73.700 C 298.435 72.765,299.411 72.000,299.600 72.000 C 299.789 72.000,300.181 71.774,300.471 71.498 C 300.762 71.223,302.215 70.021,303.700 68.829 C 305.185 67.636,306.400 66.512,306.400 66.330 C 306.400 66.149,306.619 66.000,306.886 66.000 C 307.153 66.000,307.738 65.646,308.186 65.214 C 309.409 64.034,314.348 60.000,314.570 60.000 C 314.755 60.000,316.043 58.897,317.842 57.196 C 318.305 56.758,318.825 56.400,318.996 56.400 C 319.168 56.400,319.692 55.995,320.160 55.500 C 320.629 55.005,321.607 54.150,322.335 53.600 C 325.600 51.131,327.600 49.433,327.600 49.129 C 327.600 48.948,327.830 48.800,328.111 48.800 C 328.392 48.800,329.091 48.305,329.665 47.700 C 330.745 46.560,331.138 46.231,332.765 45.103 C 333.705 44.451,334.400 44.491,334.400 45.195 M218.200 67.959 C 220.620 68.134,223.320 68.558,224.200 68.902 C 225.080 69.245,227.510 69.655,229.600 69.813 C 231.690 69.971,233.590 70.251,233.823 70.435 C 234.513 70.981,238.848 72.000,240.484 72.000 C 241.318 72.000,242.000 72.166,242.000 72.369 C 242.000 72.779,243.797 73.397,246.129 73.790 C 246.970 73.931,248.230 74.396,248.929 74.822 C 249.628 75.248,250.775 75.598,251.479 75.599 C 252.182 75.599,253.604 76.050,254.638 76.600 C 255.673 77.150,257.004 77.600,257.598 77.600 C 258.191 77.600,258.983 77.939,259.358 78.354 C 259.734 78.769,260.602 79.220,261.288 79.358 C 262.404 79.581,266.027 81.106,267.600 82.016 C 269.269 82.981,273.854 85.200,274.178 85.200 C 275.814 85.200,276.756 87.574,275.448 88.400 C 272.519 90.248,271.200 91.259,271.200 91.655 C 271.200 92.473,266.905 91.838,265.871 90.867 C 265.364 90.390,264.472 90.000,263.890 90.000 C 263.308 90.000,262.509 89.655,262.116 89.232 C 261.722 88.810,260.860 88.337,260.200 88.181 C 259.540 88.025,258.460 87.580,257.800 87.192 C 257.140 86.804,255.970 86.355,255.200 86.193 C 254.430 86.032,253.350 85.585,252.800 85.199 C 252.250 84.813,250.990 84.366,250.000 84.205 C 249.010 84.044,247.910 83.657,247.555 83.344 C 247.201 83.032,245.920 82.615,244.709 82.418 C 243.499 82.221,241.812 81.686,240.960 81.230 C 239.958 80.693,238.673 80.400,237.318 80.400 C 235.974 80.400,234.652 80.101,233.623 79.565 C 232.529 78.995,230.755 78.620,228.024 78.383 C 225.685 78.180,223.645 77.786,223.106 77.433 C 222.412 76.978,219.923 76.720,212.993 76.385 C 207.937 76.140,203.159 75.756,202.375 75.531 C 201.591 75.306,199.881 75.223,198.575 75.347 C 197.269 75.472,191.880 75.847,186.600 76.182 C 180.087 76.595,176.485 76.993,175.400 77.420 C 174.520 77.766,172.145 78.212,170.122 78.412 C 167.780 78.643,165.892 79.071,164.927 79.588 C 164.043 80.061,162.657 80.400,161.600 80.400 C 160.579 80.400,159.164 80.734,158.360 81.166 C 157.574 81.587,156.047 82.058,154.966 82.213 C 153.884 82.368,152.460 82.810,151.800 83.196 C 151.140 83.582,149.809 84.017,148.842 84.163 C 147.875 84.309,146.587 84.782,145.980 85.214 C 145.373 85.646,144.526 86.000,144.098 86.000 C 143.670 86.000,142.527 86.420,141.560 86.933 C 140.592 87.447,139.260 88.001,138.600 88.166 C 137.940 88.330,137.078 88.810,136.684 89.232 C 136.289 89.656,135.437 90.000,134.781 90.000 C 134.088 90.000,133.307 90.333,132.909 90.798 C 132.533 91.237,131.630 91.708,130.903 91.845 C 130.175 91.981,129.360 92.406,129.090 92.789 C 128.821 93.172,128.150 93.620,127.600 93.784 C 127.050 93.949,126.150 94.374,125.600 94.730 C 124.039 95.739,122.346 96.681,120.558 97.537 C 119.655 97.969,118.805 98.610,118.670 98.961 C 118.535 99.312,118.130 99.600,117.770 99.600 C 117.410 99.600,116.607 100.005,115.985 100.500 C 115.364 100.995,114.195 101.850,113.387 102.400 C 112.580 102.950,111.591 103.701,111.190 104.070 C 110.789 104.438,110.042 104.961,109.530 105.232 C 108.572 105.739,107.372 106.728,105.805 108.300 C 105.312 108.795,104.698 109.200,104.442 109.200 C 104.185 109.200,103.869 109.475,103.740 109.812 C 103.611 110.149,103.098 110.644,102.600 110.912 C 100.540 112.023,84.000 127.907,84.000 128.775 C 84.000 128.977,83.190 129.988,82.200 131.022 C 81.210 132.055,80.400 133.056,80.400 133.247 C 80.400 133.437,80.040 133.818,79.600 134.093 C 79.160 134.368,78.800 134.764,78.800 134.974 C 78.800 135.184,78.327 135.850,77.750 136.453 C 77.172 137.056,76.497 137.887,76.250 138.299 C 74.763 140.780,73.878 142.000,73.566 142.000 C 73.371 142.000,72.966 142.585,72.667 143.300 C 72.368 144.015,71.826 144.847,71.462 145.149 C 71.098 145.451,70.800 145.946,70.800 146.249 C 70.800 146.552,70.444 147.156,70.009 147.591 C 69.574 148.026,68.938 148.971,68.595 149.691 C 68.252 150.411,67.529 151.720,66.989 152.600 C 66.448 153.480,65.737 154.773,65.408 155.474 C 65.080 156.175,64.358 157.415,63.805 158.230 C 63.252 159.045,62.800 159.973,62.800 160.293 C 62.800 160.612,62.440 161.331,62.000 161.891 C 61.560 162.450,61.200 163.299,61.200 163.776 C 61.200 164.254,60.750 165.255,60.200 166.000 C 59.650 166.745,59.200 167.836,59.200 168.424 C 59.200 169.011,58.837 169.954,58.393 170.518 C 57.949 171.082,57.431 172.373,57.242 173.386 C 57.053 174.400,56.622 175.537,56.284 175.914 C 55.947 176.291,55.544 177.500,55.388 178.600 C 55.233 179.700,54.786 181.140,54.395 181.800 C 54.003 182.460,53.557 184.125,53.402 185.500 C 53.248 186.875,52.978 188.000,52.804 188.000 C 52.275 188.000,51.956 189.236,51.598 192.665 C 51.410 194.461,50.959 196.507,50.594 197.211 C 50.167 198.037,49.810 200.211,49.586 203.345 C 49.381 206.226,48.955 208.932,48.540 210.000 C 47.483 212.717,47.448 246.835,48.499 249.635 C 48.878 250.645,49.355 253.398,49.560 255.753 C 49.775 258.231,50.177 260.411,50.514 260.925 C 50.834 261.414,51.300 263.327,51.549 265.176 C 51.798 267.026,52.250 268.823,52.553 269.169 C 52.856 269.516,53.234 270.878,53.393 272.195 C 53.552 273.513,54.006 275.046,54.402 275.603 C 54.799 276.160,55.252 277.476,55.410 278.528 C 55.568 279.579,55.947 280.690,56.254 280.997 C 56.560 281.303,56.920 282.149,57.054 282.877 C 57.187 283.605,57.725 284.952,58.248 285.871 C 58.772 286.790,59.200 287.891,59.200 288.317 C 59.200 288.743,59.534 289.521,59.942 290.046 C 60.350 290.571,60.915 291.720,61.198 292.600 C 61.482 293.480,61.937 294.332,62.211 294.494 C 62.485 294.656,62.823 295.397,62.962 296.139 C 63.102 296.882,63.562 297.804,63.985 298.187 C 64.408 298.570,64.866 299.392,65.003 300.014 C 65.140 300.636,65.525 301.372,65.860 301.650 C 66.195 301.927,66.743 302.840,67.078 303.677 C 67.413 304.515,67.835 305.200,68.016 305.200 C 68.198 305.200,68.473 305.605,68.628 306.100 C 68.783 306.595,69.335 307.509,69.855 308.131 C 70.375 308.753,70.800 309.489,70.800 309.767 C 70.800 310.252,71.589 311.328,73.469 313.412 C 73.947 313.941,74.448 314.720,74.582 315.143 C 74.716 315.565,75.225 316.383,75.713 316.961 C 76.632 318.048,77.708 319.371,79.284 321.351 C 79.788 321.984,80.578 322.884,81.039 323.351 C 81.501 323.818,82.114 324.646,82.402 325.192 C 82.959 326.246,84.594 328.037,88.800 332.202 C 90.230 333.618,91.580 334.967,91.800 335.200 C 92.020 335.432,92.434 335.842,92.719 336.111 C 93.005 336.380,93.455 336.828,93.719 337.107 C 97.306 340.893,101.640 344.931,104.800 347.434 C 108.520 350.380,108.609 351.644,105.307 354.668 C 102.851 356.918,101.618 357.140,100.477 355.535 C 100.190 355.131,99.793 354.800,99.596 354.800 C 99.398 354.800,98.819 354.395,98.308 353.900 C 97.797 353.405,96.323 352.100,95.032 351.000 C 91.737 348.192,89.014 345.744,86.466 343.300 C 85.262 342.145,84.125 341.200,83.938 341.200 C 83.752 341.200,83.600 340.974,83.600 340.699 C 83.600 340.423,82.205 338.714,80.500 336.901 C 78.795 335.088,76.860 332.868,76.200 331.966 C 75.540 331.064,74.685 330.157,74.300 329.949 C 73.915 329.742,73.600 329.374,73.600 329.132 C 73.600 328.890,73.195 328.289,72.700 327.796 C 72.205 327.303,71.350 326.240,70.800 325.433 C 69.696 323.814,67.969 321.436,67.001 320.200 C 66.337 319.354,65.083 317.469,64.406 316.300 C 62.310 312.685,61.784 311.858,61.158 311.195 C 60.805 310.822,60.398 310.045,60.253 309.469 C 60.109 308.893,59.647 308.102,59.228 307.711 C 58.808 307.320,58.331 306.460,58.167 305.800 C 58.003 305.140,57.505 304.060,57.060 303.400 C 56.616 302.740,55.921 301.707,55.517 301.104 C 55.112 300.501,54.674 299.421,54.543 298.704 C 54.413 297.987,53.894 296.770,53.390 296.000 C 52.887 295.230,52.357 294.030,52.213 293.333 C 52.069 292.637,51.718 291.977,51.432 291.868 C 51.147 291.758,50.794 290.920,50.647 290.005 C 50.501 289.091,50.042 287.860,49.628 287.271 C 49.214 286.682,48.753 285.480,48.605 284.600 C 48.457 283.720,48.013 282.640,47.620 282.200 C 47.226 281.760,46.801 280.464,46.673 279.318 C 46.546 278.173,46.156 276.799,45.806 276.266 C 45.457 275.733,44.987 274.150,44.763 272.748 C 44.538 271.347,44.108 269.822,43.807 269.359 C 43.506 268.897,43.063 267.110,42.824 265.389 C 42.584 263.668,42.119 261.719,41.790 261.059 C 41.461 260.399,41.023 257.956,40.817 255.630 C 40.611 253.303,40.129 250.590,39.746 249.600 C 38.672 246.822,38.639 211.260,39.709 209.302 C 40.196 208.411,40.537 206.441,40.800 203.002 C 41.048 199.750,41.396 197.673,41.794 197.066 C 42.131 196.552,42.593 194.643,42.821 192.825 C 43.049 191.006,43.487 189.132,43.794 188.659 C 44.101 188.187,44.476 186.810,44.628 185.600 C 44.780 184.390,45.330 182.370,45.852 181.112 C 46.373 179.854,46.800 178.262,46.800 177.575 C 46.800 176.888,47.144 175.889,47.564 175.356 C 47.983 174.822,48.450 173.492,48.600 172.400 C 48.750 171.308,49.211 169.986,49.623 169.461 C 50.036 168.937,50.495 167.748,50.643 166.820 C 50.792 165.891,51.143 165.043,51.424 164.935 C 51.705 164.828,52.153 163.829,52.420 162.717 C 52.687 161.605,53.241 160.359,53.652 159.948 C 54.064 159.536,54.400 158.688,54.400 158.062 C 54.400 157.436,54.756 156.602,55.192 156.207 C 55.628 155.813,56.096 154.897,56.232 154.171 C 56.368 153.446,56.811 152.552,57.217 152.185 C 57.623 151.817,58.079 150.951,58.231 150.259 C 58.383 149.566,58.823 148.779,59.208 148.509 C 59.593 148.239,60.033 147.519,60.185 146.909 C 60.338 146.299,60.735 145.497,61.068 145.128 C 61.695 144.432,62.725 142.687,63.746 140.592 C 64.069 139.927,64.709 139.045,65.167 138.630 C 65.625 138.215,66.000 137.662,66.000 137.400 C 66.000 137.138,66.355 136.602,66.790 136.209 C 67.224 135.816,67.699 135.113,67.845 134.647 C 67.992 134.181,68.491 133.399,68.956 132.910 C 70.265 131.529,70.936 130.688,71.759 129.393 C 72.544 128.158,73.163 127.408,74.700 125.832 C 75.195 125.324,75.600 124.725,75.600 124.500 C 75.600 124.276,76.050 123.797,76.600 123.437 C 77.150 123.076,77.600 122.623,77.600 122.429 C 77.600 121.991,89.054 110.517,92.204 107.800 C 93.479 106.700,94.805 105.485,95.150 105.100 C 95.495 104.715,95.993 104.400,96.256 104.400 C 96.518 104.400,96.793 104.240,96.867 104.044 C 97.045 103.566,101.085 100.400,101.516 100.400 C 101.703 100.400,102.221 99.995,102.667 99.500 C 103.114 99.005,104.616 97.880,106.007 97.000 C 107.397 96.120,108.930 95.130,109.413 94.800 C 109.896 94.470,111.126 93.688,112.146 93.062 C 113.166 92.436,114.000 91.784,114.000 91.612 C 114.000 91.440,114.495 91.200,115.100 91.077 C 115.705 90.955,116.571 90.528,117.024 90.127 C 117.831 89.414,119.415 88.470,121.800 87.281 C 122.460 86.952,123.270 86.462,123.600 86.192 C 123.930 85.922,124.861 85.489,125.668 85.230 C 126.475 84.971,127.343 84.510,127.596 84.205 C 127.848 83.901,128.574 83.537,129.209 83.398 C 129.843 83.259,130.776 82.825,131.281 82.433 C 131.787 82.042,132.729 81.593,133.376 81.434 C 134.022 81.276,135.023 80.811,135.600 80.400 C 136.177 79.989,137.178 79.525,137.824 79.368 C 138.471 79.212,139.450 78.775,140.000 78.397 C 140.550 78.020,141.650 77.592,142.445 77.448 C 143.240 77.303,144.213 76.828,144.607 76.392 C 145.068 75.883,145.838 75.599,146.762 75.599 C 147.553 75.598,148.770 75.250,149.466 74.825 C 150.162 74.400,151.768 73.862,153.033 73.628 C 154.299 73.394,155.619 72.951,155.967 72.644 C 156.315 72.337,157.721 71.959,159.090 71.805 C 160.460 71.650,162.222 71.196,163.007 70.796 C 163.863 70.360,165.828 69.961,167.917 69.798 C 170.073 69.631,171.976 69.236,172.912 68.764 C 174.002 68.214,175.344 67.987,177.712 67.953 C 179.521 67.928,182.170 67.764,183.600 67.589 C 186.617 67.222,211.721 67.490,218.200 67.959 M208.800 76.995 C 216.119 77.106,218.998 77.406,221.392 78.304 C 222.276 78.635,224.768 79.028,226.928 79.176 C 229.428 79.347,230.972 79.631,231.173 79.956 C 231.346 80.237,233.152 80.715,235.186 81.019 C 237.219 81.323,239.117 81.765,239.402 82.001 C 239.687 82.238,241.013 82.608,242.349 82.823 C 243.685 83.038,245.368 83.551,246.089 83.963 C 246.810 84.375,248.120 84.837,249.000 84.990 C 249.880 85.143,250.870 85.500,251.200 85.783 C 251.530 86.066,252.736 86.517,253.880 86.784 C 255.024 87.052,256.173 87.526,256.432 87.839 C 256.692 88.151,257.617 88.521,258.490 88.661 C 259.362 88.800,260.377 89.238,260.746 89.635 C 261.116 90.031,262.210 90.533,263.178 90.750 C 264.146 90.968,265.087 91.412,265.269 91.738 C 265.451 92.063,266.365 92.449,267.300 92.594 C 270.416 93.079,270.404 93.069,269.729 94.421 C 269.402 95.077,268.650 95.864,268.057 96.170 C 267.464 96.477,266.274 97.374,265.412 98.164 C 264.549 98.954,263.702 99.600,263.529 99.600 C 263.204 99.600,261.385 101.114,259.805 102.700 C 259.312 103.195,258.725 103.600,258.500 103.600 C 258.276 103.600,257.797 104.050,257.437 104.600 C 257.076 105.150,256.580 105.600,256.334 105.600 C 255.797 105.600,250.996 109.551,248.258 112.244 C 247.786 112.709,246.995 113.216,246.500 113.371 C 246.005 113.527,245.600 113.817,245.600 114.017 C 245.600 114.216,245.105 114.641,244.500 114.960 C 243.895 115.279,242.475 116.409,241.344 117.470 C 240.213 118.532,238.802 119.760,238.209 120.200 C 237.616 120.640,236.720 121.405,236.219 121.900 C 235.718 122.395,235.174 122.800,235.009 122.800 C 234.608 122.800,232.434 124.576,229.988 126.900 C 228.889 127.945,227.821 128.800,227.615 128.800 C 227.408 128.800,227.081 129.083,226.888 129.429 C 226.694 129.776,226.171 130.271,225.725 130.529 C 223.743 131.680,221.673 133.241,220.115 134.758 C 219.189 135.661,218.310 136.400,218.161 136.400 C 218.013 136.400,217.482 136.805,216.981 137.300 C 216.480 137.795,215.649 138.506,215.135 138.879 C 214.621 139.253,212.760 140.763,211.000 142.234 C 209.240 143.706,207.353 145.200,206.807 145.555 C 206.260 145.910,205.523 146.470,205.167 146.800 C 203.672 148.189,200.449 150.827,198.400 152.339 C 197.190 153.232,195.936 154.196,195.614 154.481 C 194.400 155.556,192.089 157.435,190.795 158.400 C 190.057 158.950,188.970 159.850,188.378 160.400 C 187.786 160.950,186.714 161.850,185.996 162.400 C 185.278 162.950,184.405 163.715,184.056 164.100 C 183.708 164.485,183.237 164.804,183.011 164.808 C 182.785 164.813,181.520 165.803,180.200 167.008 C 176.748 170.160,176.289 170.554,175.560 171.000 C 173.767 172.096,172.439 173.156,170.800 174.797 C 169.810 175.789,168.192 177.140,167.204 177.800 C 166.215 178.460,164.716 179.675,163.872 180.500 C 163.027 181.325,162.238 182.000,162.117 182.000 C 161.915 182.000,160.556 183.133,157.396 185.933 C 156.733 186.520,155.321 187.630,154.257 188.400 C 153.193 189.170,151.665 190.402,150.861 191.138 C 150.058 191.873,148.770 192.953,148.000 193.538 C 147.230 194.122,146.394 194.780,146.142 195.000 C 145.890 195.220,145.102 195.850,144.391 196.400 C 143.680 196.950,142.597 197.850,141.983 198.400 C 141.370 198.950,140.448 199.773,139.934 200.230 C 139.420 200.686,138.416 201.399,137.702 201.815 C 136.379 202.585,135.639 204.483,136.147 205.806 C 136.411 206.495,178.394 206.684,181.973 206.013 C 184.182 205.599,184.800 205.824,184.800 207.043 C 184.800 208.002,183.550 209.600,182.800 209.600 C 182.580 209.600,182.400 209.870,182.400 210.200 C 182.400 210.530,182.258 210.800,182.085 210.800 C 181.673 210.800,176.831 215.531,175.800 216.941 C 175.360 217.543,172.840 220.237,170.200 222.927 C 167.560 225.617,164.119 229.164,162.553 230.809 C 160.988 232.454,159.053 234.410,158.253 235.156 C 157.454 235.902,156.800 236.667,156.800 236.856 C 156.800 237.402,156.131 238.104,151.100 242.835 C 149.175 244.645,147.600 246.275,147.600 246.456 C 147.600 246.637,145.035 249.393,141.900 252.579 C 138.765 255.766,135.930 258.710,135.600 259.122 C 135.270 259.534,133.470 261.489,131.600 263.466 C 123.804 271.708,122.400 273.250,122.400 273.570 C 122.400 273.755,122.027 274.004,121.570 274.124 C 121.114 274.243,120.643 274.714,120.524 275.170 C 120.404 275.627,120.084 276.000,119.812 276.000 C 119.540 276.000,118.452 277.102,117.394 278.449 C 115.329 281.077,112.516 284.000,112.052 284.000 C 111.896 284.000,110.875 285.008,109.784 286.239 C 108.693 287.471,107.215 289.097,106.500 289.852 C 105.215 291.211,104.797 292.903,105.620 293.412 C 105.851 293.555,116.638 293.648,129.591 293.619 C 156.886 293.558,155.540 293.347,151.781 297.106 C 150.603 298.284,149.522 299.615,149.380 300.064 C 149.237 300.512,148.824 301.203,148.461 301.598 C 148.097 301.994,147.350 302.878,146.800 303.564 C 146.250 304.249,145.530 305.134,145.200 305.531 C 143.502 307.571,142.000 309.583,142.000 309.816 C 142.000 309.961,141.505 310.587,140.900 311.207 C 138.893 313.264,138.400 313.863,138.400 314.244 C 138.400 314.452,137.860 315.213,137.200 315.936 C 136.540 316.658,136.000 317.405,136.000 317.596 C 136.000 317.787,135.190 318.788,134.200 319.822 C 133.210 320.855,132.400 321.831,132.400 321.991 C 132.400 322.151,131.860 322.846,131.200 323.537 C 130.540 324.228,130.000 325.021,130.000 325.300 C 130.000 325.579,129.640 326.032,129.200 326.307 C 128.760 326.582,128.400 326.977,128.400 327.185 C 128.400 327.393,127.995 328.005,127.500 328.544 C 127.005 329.083,126.150 330.115,125.600 330.836 C 125.050 331.558,124.195 332.573,123.700 333.092 C 123.205 333.611,122.800 334.193,122.800 334.384 C 122.800 334.721,122.097 335.629,120.000 338.002 C 119.450 338.625,118.550 339.802,118.000 340.618 C 117.450 341.434,116.595 342.537,116.100 343.069 C 115.605 343.601,115.200 344.204,115.200 344.409 C 115.200 344.614,114.750 345.076,114.200 345.437 C 113.650 345.797,113.200 346.319,113.200 346.597 C 113.200 346.875,112.927 347.329,112.593 347.606 C 112.259 347.883,111.698 348.715,111.347 349.455 C 110.518 351.202,108.000 350.984,108.000 349.165 C 108.000 348.496,104.282 345.200,103.528 345.200 C 103.128 345.200,102.800 344.980,102.800 344.710 C 102.800 344.205,100.085 341.600,99.558 341.600 C 99.234 341.600,96.800 339.258,96.800 338.946 C 96.800 338.593,87.923 330.000,87.558 330.000 C 87.361 330.000,87.198 329.775,87.196 329.500 C 87.193 329.225,86.364 328.102,85.352 327.005 C 84.340 325.908,83.307 324.719,83.056 324.362 C 82.520 323.601,79.309 319.804,78.300 318.739 C 77.915 318.333,77.600 317.858,77.600 317.685 C 77.600 317.512,77.067 316.747,76.416 315.985 C 75.765 315.223,75.225 314.439,75.216 314.242 C 75.207 314.045,74.826 313.505,74.369 313.042 C 73.007 311.662,71.200 309.126,71.200 308.594 C 71.200 308.321,70.920 307.865,70.577 307.581 C 70.234 307.296,69.701 306.458,69.391 305.718 C 69.082 304.978,68.553 304.095,68.215 303.757 C 67.877 303.419,67.600 302.914,67.600 302.633 C 67.600 302.353,67.247 301.804,66.815 301.414 C 66.383 301.023,65.821 300.050,65.564 299.252 C 65.308 298.453,64.873 297.530,64.597 297.200 C 64.321 296.870,63.965 296.176,63.807 295.659 C 63.649 295.141,63.088 294.081,62.560 293.303 C 62.032 292.525,61.600 291.566,61.600 291.173 C 61.600 290.779,61.347 290.205,61.039 289.896 C 60.730 289.587,60.190 288.488,59.839 287.453 C 59.487 286.418,58.948 285.173,58.639 284.686 C 58.331 284.199,57.951 283.170,57.796 282.400 C 57.641 281.630,57.188 280.460,56.790 279.800 C 56.393 279.140,55.944 277.880,55.793 277.000 C 55.643 276.120,55.195 274.680,54.799 273.800 C 54.402 272.920,53.953 271.302,53.800 270.205 C 53.647 269.108,53.246 267.676,52.908 267.022 C 52.570 266.368,52.144 264.502,51.961 262.875 C 51.779 261.249,51.467 259.711,51.268 259.459 C 50.864 258.947,50.153 254.161,49.807 249.617 C 49.681 247.977,49.292 245.547,48.941 244.217 C 47.929 240.386,48.076 220.063,49.155 214.600 C 49.589 212.400,50.068 208.620,50.218 206.200 C 50.369 203.780,50.762 201.080,51.093 200.200 C 51.423 199.320,51.826 197.067,51.988 195.194 C 52.152 193.292,52.590 191.193,52.979 190.441 C 53.362 189.700,53.843 187.912,54.047 186.468 C 54.252 185.024,54.655 183.562,54.942 183.221 C 55.230 182.879,55.669 181.451,55.918 180.048 C 56.167 178.644,56.632 177.204,56.952 176.848 C 57.271 176.491,57.659 175.480,57.815 174.600 C 57.970 173.720,58.416 172.460,58.806 171.800 C 59.195 171.140,59.647 169.970,59.809 169.200 C 59.971 168.430,60.441 167.371,60.852 166.846 C 61.263 166.321,61.600 165.539,61.600 165.108 C 61.600 164.676,61.935 163.846,62.344 163.262 C 62.754 162.678,63.303 161.539,63.565 160.732 C 63.827 159.925,64.302 159.048,64.620 158.783 C 64.939 158.518,65.200 158.079,65.200 157.807 C 65.200 157.534,65.632 156.675,66.160 155.897 C 66.688 155.119,67.249 154.059,67.406 153.541 C 67.563 153.024,68.010 152.240,68.399 151.800 C 68.788 151.360,69.442 150.392,69.853 149.650 C 70.264 148.907,70.870 147.814,71.200 147.220 C 71.530 146.627,72.036 145.885,72.324 145.571 C 72.612 145.257,73.242 144.384,73.724 143.632 C 74.206 142.880,74.782 141.980,75.004 141.632 C 75.523 140.821,77.651 137.946,78.296 137.185 C 78.569 136.863,79.739 135.438,80.896 134.018 C 82.053 132.598,83.301 131.068,83.670 130.618 C 84.038 130.168,87.586 126.560,91.554 122.600 C 98.201 115.967,100.245 114.043,103.949 110.933 C 104.691 110.310,105.702 109.395,106.195 108.900 C 106.688 108.405,107.251 107.993,107.446 107.984 C 107.641 107.975,108.423 107.435,109.185 106.784 C 109.947 106.133,110.758 105.600,110.989 105.600 C 111.219 105.600,111.632 105.240,111.907 104.800 C 112.182 104.360,112.669 104.000,112.989 104.000 C 113.310 104.000,113.765 103.640,114.000 103.200 C 114.235 102.760,114.678 102.400,114.983 102.400 C 115.289 102.400,116.073 101.950,116.727 101.400 C 117.381 100.850,118.083 100.400,118.288 100.400 C 118.493 100.400,119.083 99.950,119.600 99.400 C 120.117 98.850,120.844 98.400,121.216 98.400 C 121.588 98.400,122.399 98.001,123.019 97.513 C 124.231 96.561,125.635 95.748,128.248 94.486 C 129.155 94.049,130.018 93.495,130.165 93.256 C 130.313 93.017,131.146 92.630,132.017 92.395 C 132.888 92.161,133.600 91.803,133.600 91.600 C 133.600 91.397,134.535 90.953,135.677 90.614 C 136.820 90.275,137.874 89.805,138.019 89.569 C 138.165 89.334,139.041 88.971,139.967 88.763 C 140.892 88.555,142.010 88.049,142.450 87.640 C 142.890 87.230,143.999 86.775,144.914 86.628 C 145.830 86.482,146.867 86.101,147.219 85.783 C 147.571 85.465,148.745 85.095,149.829 84.962 C 150.913 84.828,152.333 84.344,152.984 83.885 C 153.709 83.375,155.026 82.982,156.384 82.871 C 157.662 82.767,158.988 82.388,159.516 81.975 C 160.055 81.554,161.521 81.144,163.087 80.976 C 164.548 80.819,166.476 80.377,167.372 79.993 C 168.284 79.601,170.647 79.177,172.746 79.029 C 174.806 78.883,177.236 78.493,178.146 78.162 C 179.948 77.506,190.024 76.725,192.600 77.042 C 193.480 77.150,195.280 77.063,196.600 76.849 C 197.920 76.635,199.720 76.557,200.600 76.677 C 201.480 76.796,205.170 76.939,208.800 76.995 M299.122 101.319 C 299.495 101.656,300.399 102.487,301.131 103.166 C 301.863 103.845,302.555 104.400,302.669 104.400 C 303.279 104.400,319.669 120.652,322.800 124.363 C 323.790 125.536,325.005 126.900,325.500 127.394 C 325.995 127.888,326.400 128.405,326.400 128.542 C 326.400 128.914,329.344 132.743,331.100 134.656 C 331.595 135.195,332.000 135.736,332.000 135.858 C 332.000 136.408,334.939 140.768,335.440 140.960 C 335.748 141.078,336.000 141.468,336.000 141.826 C 336.000 142.184,336.405 143.044,336.899 143.738 C 337.982 145.258,338.877 146.825,339.961 149.100 C 340.407 150.035,340.944 150.800,341.154 150.800 C 341.364 150.800,341.657 151.348,341.804 152.018 C 341.951 152.687,342.383 153.542,342.763 153.918 C 343.143 154.293,343.668 155.344,343.929 156.253 C 344.190 157.161,344.673 158.128,345.002 158.402 C 345.331 158.675,345.600 159.302,345.600 159.795 C 345.600 160.288,345.943 161.128,346.361 161.660 C 346.780 162.193,347.335 163.432,347.594 164.414 C 347.853 165.396,348.306 166.576,348.600 167.036 C 348.894 167.496,349.346 168.666,349.605 169.636 C 349.863 170.606,350.307 171.670,350.592 172.000 C 350.877 172.330,351.316 173.583,351.569 174.784 C 351.821 175.985,352.268 177.245,352.562 177.584 C 352.856 177.923,353.220 179.190,353.372 180.400 C 353.524 181.610,353.981 183.168,354.388 183.862 C 354.795 184.556,355.253 186.356,355.406 187.862 C 355.558 189.368,355.963 191.042,356.304 191.581 C 356.658 192.141,357.073 194.175,357.270 196.312 C 357.459 198.373,357.902 200.722,358.254 201.530 C 358.700 202.557,358.983 204.994,359.191 209.622 C 359.355 213.265,359.694 216.628,359.944 217.096 C 360.525 218.180,360.553 237.118,359.978 239.400 C 359.756 240.280,359.434 243.911,359.263 247.468 C 359.091 251.026,358.762 254.176,358.531 254.468 C 357.943 255.212,357.657 256.589,357.227 260.743 C 357.022 262.724,356.589 264.763,356.265 265.273 C 355.941 265.783,355.550 267.370,355.396 268.800 C 355.242 270.230,354.794 271.940,354.400 272.600 C 354.006 273.260,353.552 274.787,353.392 275.993 C 353.231 277.199,352.853 278.369,352.551 278.593 C 352.250 278.817,351.809 280.061,351.571 281.358 C 351.333 282.655,350.809 284.185,350.406 284.758 C 350.004 285.331,349.563 286.457,349.427 287.260 C 349.290 288.063,348.928 288.928,348.621 289.183 C 348.314 289.438,347.944 290.350,347.798 291.211 C 347.653 292.072,347.187 293.217,346.763 293.756 C 346.340 294.294,345.882 295.335,345.747 296.068 C 345.612 296.800,345.290 297.580,345.032 297.800 C 344.774 298.020,344.313 298.830,344.008 299.600 C 343.703 300.370,343.127 301.429,342.727 301.954 C 342.327 302.479,342.000 303.216,342.000 303.592 C 342.000 303.968,341.556 304.793,341.013 305.425 C 340.470 306.056,339.915 307.074,339.781 307.687 C 339.646 308.299,339.379 308.800,339.187 308.800 C 338.995 308.800,338.460 309.565,337.999 310.500 C 336.671 313.192,335.667 314.910,335.275 315.165 C 335.075 315.294,334.592 316.030,334.202 316.800 C 333.811 317.570,333.246 318.344,332.946 318.520 C 332.646 318.696,332.400 319.088,332.400 319.391 C 332.400 319.695,332.163 320.181,331.873 320.471 C 331.584 320.762,331.007 321.540,330.593 322.200 C 330.178 322.860,329.609 323.670,329.330 324.000 C 327.073 326.660,326.400 327.561,326.400 327.919 C 326.400 328.147,326.240 328.393,326.044 328.467 C 325.849 328.540,325.034 329.410,324.233 330.400 C 323.433 331.390,322.288 332.790,321.689 333.512 C 320.815 334.565,308.719 346.759,305.400 349.933 C 304.273 351.011,299.514 354.807,297.794 356.000 C 297.001 356.550,296.103 357.228,295.798 357.507 C 294.780 358.438,291.596 360.800,291.360 360.800 C 291.232 360.800,290.648 361.172,290.063 361.627 C 288.123 363.137,282.264 366.800,281.790 366.800 C 281.534 366.800,280.998 367.160,280.600 367.600 C 280.202 368.040,279.669 368.400,279.416 368.400 C 279.163 368.400,278.345 368.850,277.600 369.400 C 276.855 369.950,275.947 370.400,275.584 370.400 C 275.221 370.400,274.598 370.760,274.200 371.200 C 273.802 371.640,273.169 372.000,272.794 372.000 C 272.419 372.000,271.449 372.450,270.638 373.000 C 269.828 373.550,268.993 374.000,268.782 374.000 C 268.572 374.000,267.545 374.433,266.500 374.961 C 263.067 376.698,260.128 378.000,259.642 378.000 C 259.379 378.000,258.318 378.450,257.285 379.000 C 256.252 379.550,254.818 380.000,254.099 380.000 C 253.287 380.000,252.533 380.303,252.107 380.800 C 251.730 381.240,250.967 381.601,250.411 381.602 C 248.910 381.606,246.257 382.391,245.800 382.968 C 245.580 383.246,244.274 383.575,242.897 383.699 C 241.433 383.831,239.804 384.273,238.974 384.762 C 238.193 385.223,236.943 385.600,236.197 385.600 C 234.375 385.600,230.730 386.389,230.061 386.928 C 229.765 387.167,227.425 387.484,224.861 387.633 C 222.297 387.781,218.940 388.239,217.400 388.651 C 213.986 389.564,184.559 389.806,182.760 388.936 C 181.357 388.257,176.513 387.600,172.912 387.600 C 170.945 387.600,169.484 387.400,168.989 387.062 C 167.966 386.364,164.838 385.600,163.007 385.600 C 162.216 385.600,160.869 385.243,160.014 384.807 C 159.159 384.371,157.411 383.898,156.130 383.756 C 154.848 383.614,153.252 383.169,152.582 382.767 C 151.911 382.365,150.561 381.915,149.582 381.767 C 148.602 381.619,147.239 381.161,146.553 380.749 C 145.867 380.337,144.965 380.000,144.550 380.000 C 144.134 380.000,142.976 379.565,141.978 379.033 C 140.979 378.502,139.495 377.942,138.681 377.789 C 137.866 377.636,137.200 377.358,137.200 377.172 C 137.200 376.985,136.435 376.614,135.500 376.348 C 134.565 376.082,133.431 375.537,132.981 375.138 C 132.530 374.739,131.540 374.292,130.781 374.144 C 130.021 373.997,128.971 373.544,128.446 373.138 C 127.921 372.732,127.271 372.400,127.000 372.400 C 126.729 372.400,126.031 372.025,125.448 371.566 C 124.865 371.107,123.760 370.559,122.994 370.347 C 121.263 369.869,120.969 367.964,122.500 367.149 C 122.995 366.885,123.580 366.463,123.800 366.212 C 126.107 363.573,129.248 362.896,131.273 364.600 C 131.927 365.150,132.903 365.600,133.443 365.600 C 133.983 365.600,134.529 365.871,134.656 366.201 C 134.783 366.532,135.842 367.081,137.010 367.420 C 138.178 367.760,139.334 368.280,139.581 368.577 C 139.827 368.874,140.677 369.238,141.469 369.387 C 142.261 369.535,143.380 369.987,143.955 370.391 C 144.530 370.795,145.720 371.247,146.600 371.396 C 147.480 371.546,148.483 371.921,148.828 372.231 C 149.173 372.540,150.421 372.976,151.600 373.200 C 152.779 373.424,154.047 373.881,154.417 374.216 C 154.787 374.551,156.060 374.937,157.245 375.073 C 158.430 375.210,160.004 375.642,160.743 376.034 C 161.482 376.425,163.282 376.871,164.743 377.024 C 166.204 377.178,168.262 377.640,169.315 378.052 C 170.556 378.537,172.245 378.800,174.115 378.800 C 175.702 378.800,178.260 379.089,179.800 379.441 C 186.636 381.007,214.050 381.319,217.898 379.874 C 218.832 379.524,221.442 379.124,223.698 378.987 C 226.315 378.827,228.479 378.458,229.674 377.968 C 230.705 377.546,232.235 377.196,233.074 377.190 C 235.112 377.177,238.114 376.463,238.455 375.910 C 238.607 375.666,239.942 375.320,241.422 375.141 C 242.903 374.963,244.540 374.538,245.059 374.198 C 245.579 373.857,246.949 373.401,248.102 373.185 C 249.256 372.968,250.383 372.546,250.607 372.247 C 250.831 371.947,251.758 371.576,252.668 371.422 C 253.578 371.269,254.915 370.706,255.639 370.171 C 256.363 369.637,257.453 369.200,258.062 369.200 C 258.671 369.200,259.491 368.866,259.884 368.458 C 260.278 368.049,261.200 367.601,261.932 367.461 C 262.665 367.321,263.725 366.845,264.286 366.404 C 264.848 365.962,265.609 365.600,265.976 365.600 C 266.344 365.600,267.255 365.150,268.000 364.600 C 268.745 364.050,269.566 363.600,269.824 363.600 C 270.081 363.600,270.736 363.251,271.278 362.825 C 271.820 362.398,272.724 361.934,273.288 361.792 C 273.851 361.651,274.691 361.100,275.153 360.568 C 275.616 360.035,276.286 359.600,276.641 359.600 C 277.475 359.600,281.090 357.263,281.365 356.547 C 281.480 356.246,281.916 356.000,282.332 356.000 C 283.039 356.000,285.310 354.481,286.888 352.952 C 287.266 352.586,287.915 352.087,288.330 351.843 C 290.294 350.691,292.332 349.170,293.680 347.849 C 294.494 347.052,295.339 346.400,295.557 346.400 C 295.776 346.400,296.204 346.044,296.509 345.608 C 296.814 345.173,297.766 344.340,298.624 343.758 C 300.404 342.550,300.557 342.411,306.824 336.305 C 309.367 333.827,312.932 330.000,314.745 327.800 C 316.559 325.600,318.753 323.019,319.621 322.066 C 320.490 321.112,321.200 320.205,321.200 320.050 C 321.200 319.896,321.733 319.147,322.384 318.385 C 323.035 317.623,323.575 316.781,323.584 316.514 C 323.593 316.247,323.960 315.835,324.400 315.600 C 324.840 315.365,325.205 314.953,325.211 314.686 C 325.217 314.419,325.757 313.493,326.411 312.629 C 327.065 311.765,327.600 310.820,327.600 310.529 C 327.600 310.238,327.790 310.000,328.022 310.000 C 328.255 310.000,328.803 309.190,329.241 308.200 C 329.679 307.210,330.182 306.400,330.358 306.400 C 330.534 306.400,330.986 305.725,331.361 304.900 C 332.301 302.836,333.710 300.219,334.242 299.553 C 334.485 299.249,334.884 298.407,335.128 297.681 C 335.372 296.956,335.938 295.897,336.386 295.327 C 336.834 294.758,337.200 293.804,337.200 293.208 C 337.200 292.612,337.542 291.814,337.960 291.436 C 338.379 291.057,338.833 290.148,338.971 289.414 C 339.108 288.681,339.576 287.630,340.011 287.077 C 340.445 286.525,340.800 285.541,340.800 284.891 C 340.800 284.240,341.164 283.245,341.609 282.680 C 342.054 282.114,342.610 280.613,342.844 279.344 C 343.079 278.075,343.524 276.848,343.833 276.618 C 344.142 276.388,344.512 275.300,344.654 274.200 C 344.797 273.100,345.268 271.493,345.701 270.629 C 346.134 269.765,346.582 267.965,346.696 266.629 C 346.810 265.293,347.156 263.910,347.464 263.555 C 348.049 262.882,348.794 259.153,348.798 256.878 C 348.799 256.151,349.144 254.801,349.565 253.878 C 350.109 252.683,350.462 250.468,350.788 246.199 C 351.040 242.900,351.350 239.390,351.477 238.400 C 351.944 234.736,352.020 223.298,351.597 220.200 C 351.357 218.440,350.990 214.390,350.781 211.200 C 350.519 207.185,350.165 204.785,349.630 203.400 C 349.205 202.300,348.739 200.050,348.595 198.400 C 348.451 196.750,348.007 194.680,347.609 193.800 C 347.211 192.920,346.781 191.093,346.653 189.740 C 346.525 188.388,346.077 186.678,345.658 185.940 C 345.238 185.203,344.782 183.713,344.645 182.629 C 344.508 181.545,344.142 180.375,343.832 180.029 C 343.522 179.683,343.149 178.680,343.004 177.800 C 342.670 175.781,342.001 174.000,341.576 174.000 C 341.396 174.000,341.127 173.188,340.978 172.195 C 340.830 171.203,340.386 169.981,339.992 169.481 C 339.599 168.981,339.078 167.834,338.836 166.933 C 338.593 166.031,338.126 165.070,337.797 164.798 C 337.469 164.525,337.197 163.919,337.194 163.451 C 337.191 162.983,336.926 162.150,336.605 161.600 C 336.284 161.050,335.727 159.973,335.366 159.207 C 335.006 158.440,334.371 157.381,333.956 156.853 C 333.540 156.324,333.200 155.556,333.200 155.146 C 333.200 154.736,332.845 154.045,332.410 153.610 C 331.976 153.176,331.511 152.383,331.376 151.848 C 331.242 151.313,330.698 150.467,330.166 149.968 C 329.635 149.469,329.200 148.760,329.200 148.392 C 329.200 148.025,328.856 147.413,328.436 147.033 C 328.016 146.652,327.564 145.910,327.431 145.382 C 327.299 144.855,326.833 144.232,326.395 143.997 C 325.958 143.763,325.600 143.333,325.600 143.041 C 325.600 142.488,324.003 140.273,320.704 136.249 C 319.024 134.201,317.600 132.271,317.600 132.042 C 317.600 131.905,316.295 130.399,314.700 128.695 C 313.105 126.991,310.990 124.684,310.000 123.569 C 309.010 122.454,307.974 121.329,307.697 121.071 C 307.420 120.812,306.250 119.735,305.097 118.677 C 303.944 117.619,302.090 115.909,300.978 114.877 C 296.106 110.356,295.345 109.700,294.400 109.201 C 293.850 108.911,293.165 108.342,292.877 107.937 C 292.590 107.531,292.117 107.200,291.827 107.200 C 289.854 107.200,291.747 102.396,294.359 100.776 C 295.244 100.227,298.299 100.575,299.122 101.319 M290.383 106.500 C 290.646 107.325,291.013 108.000,291.197 108.000 C 291.579 108.000,293.212 109.308,294.752 110.847 C 295.329 111.423,296.526 112.413,297.414 113.047 C 300.046 114.926,308.300 122.934,312.232 127.424 C 313.569 128.951,315.324 130.942,316.132 131.848 C 316.939 132.755,317.600 133.610,317.600 133.748 C 317.600 133.995,318.198 134.741,319.813 136.510 C 320.260 136.999,320.980 137.920,321.413 138.556 C 321.846 139.192,322.560 140.202,323.000 140.801 C 323.440 141.400,324.553 143.040,325.472 144.445 C 326.392 145.850,327.517 147.434,327.972 147.963 C 328.428 148.493,328.800 149.185,328.800 149.500 C 328.800 149.815,329.170 150.552,329.621 151.137 C 331.158 153.127,332.276 155.051,332.566 156.209 C 332.726 156.844,333.190 157.597,333.597 157.883 C 334.004 158.168,334.461 158.986,334.613 159.700 C 334.765 160.415,335.122 161.270,335.407 161.600 C 335.692 161.930,336.124 162.944,336.366 163.853 C 336.608 164.763,337.070 165.726,337.392 165.994 C 337.715 166.261,338.093 167.137,338.233 167.940 C 338.372 168.743,338.896 170.030,339.396 170.800 C 339.896 171.570,340.419 172.818,340.557 173.574 C 340.696 174.329,341.076 175.242,341.403 175.603 C 341.729 175.964,342.110 177.145,342.250 178.229 C 342.389 179.313,342.824 180.740,343.216 181.400 C 343.609 182.060,344.055 183.500,344.208 184.600 C 344.361 185.700,344.738 187.000,345.046 187.490 C 345.354 187.979,345.795 189.779,346.028 191.490 C 346.260 193.200,346.799 195.332,347.225 196.226 C 347.744 197.316,348.000 198.707,348.000 200.440 C 348.000 202.076,348.315 203.905,348.857 205.414 C 351.085 211.614,350.988 249.463,348.737 252.261 C 348.534 252.515,348.223 254.405,348.049 256.461 C 347.874 258.517,347.450 260.740,347.106 261.400 C 346.763 262.061,346.355 263.681,346.199 265.000 C 346.043 266.320,345.585 268.120,345.182 269.000 C 344.778 269.880,344.338 271.442,344.204 272.472 C 344.069 273.501,343.619 274.777,343.202 275.306 C 342.786 275.836,342.320 277.210,342.167 278.361 C 342.015 279.512,341.649 280.693,341.355 280.987 C 341.061 281.281,340.630 282.374,340.397 283.416 C 340.163 284.457,339.618 285.759,339.186 286.309 C 338.754 286.858,338.400 287.796,338.400 288.392 C 338.400 288.988,338.059 289.785,337.641 290.163 C 337.224 290.540,336.688 291.623,336.450 292.569 C 336.211 293.514,335.762 294.500,335.450 294.758 C 335.139 295.017,334.771 295.827,334.634 296.559 C 334.497 297.291,334.044 298.198,333.628 298.575 C 333.212 298.951,332.755 299.726,332.611 300.298 C 332.468 300.869,332.002 301.780,331.575 302.322 C 331.149 302.864,330.800 303.540,330.800 303.823 C 330.800 304.107,330.350 304.873,329.800 305.527 C 329.250 306.181,328.797 306.870,328.793 307.058 C 328.784 307.460,326.673 310.733,325.862 311.600 C 325.554 311.930,325.183 312.585,325.038 313.055 C 324.798 313.834,324.299 314.486,321.974 317.056 C 321.549 317.527,321.200 318.044,321.200 318.204 C 321.200 318.364,320.705 319.094,320.100 319.827 C 319.495 320.561,318.640 321.640,318.200 322.226 C 317.191 323.569,315.637 325.428,314.600 326.532 C 314.160 327.000,313.201 328.107,312.468 328.992 C 310.644 331.195,301.952 340.000,301.602 340.000 C 301.446 340.000,300.779 340.495,300.119 341.100 C 299.459 341.705,298.085 342.965,297.064 343.900 C 296.043 344.835,295.033 345.600,294.818 345.600 C 294.604 345.600,294.231 345.969,293.990 346.419 C 293.749 346.870,293.157 347.414,292.676 347.629 C 291.298 348.245,287.952 350.674,285.968 352.500 C 285.310 353.105,284.608 353.600,284.407 353.600 C 284.206 353.600,283.556 354.050,282.962 354.600 C 282.369 355.150,281.667 355.600,281.404 355.600 C 281.140 355.600,280.598 355.960,280.200 356.400 C 279.802 356.840,279.184 357.200,278.827 357.200 C 278.470 357.200,277.859 357.572,277.469 358.028 C 277.079 358.483,276.229 359.041,275.580 359.267 C 274.931 359.493,274.400 359.827,274.400 360.008 C 274.400 360.190,273.725 360.559,272.900 360.830 C 272.075 361.101,271.181 361.631,270.914 362.008 C 270.647 362.386,269.868 362.806,269.182 362.944 C 268.496 363.081,267.475 363.555,266.914 363.996 C 266.352 364.438,265.570 364.800,265.177 364.800 C 264.783 364.800,263.953 365.224,263.331 365.742 C 262.709 366.261,261.525 366.809,260.700 366.960 C 259.875 367.112,259.200 367.386,259.200 367.570 C 259.200 367.959,257.540 368.644,255.733 368.999 C 255.037 369.137,254.374 369.490,254.261 369.785 C 254.148 370.079,253.294 370.449,252.362 370.606 C 251.430 370.764,249.861 371.322,248.875 371.846 C 247.888 372.371,246.518 372.800,245.829 372.800 C 245.141 372.800,244.180 373.079,243.694 373.419 C 243.208 373.760,241.683 374.233,240.305 374.472 C 238.927 374.710,237.170 375.216,236.400 375.596 C 235.619 375.982,233.544 376.395,231.706 376.531 C 229.683 376.680,228.022 377.029,227.404 377.434 C 226.640 377.935,224.729 378.190,219.498 378.490 C 214.641 378.768,212.413 379.050,211.969 379.443 C 211.046 380.257,189.351 380.261,188.189 379.447 C 187.651 379.071,185.087 378.764,180.136 378.484 C 175.237 378.206,172.438 377.873,171.536 377.460 C 170.801 377.124,168.940 376.726,167.400 376.577 C 165.860 376.427,163.970 376.036,163.200 375.708 C 162.430 375.379,160.559 374.864,159.041 374.564 C 157.524 374.263,155.980 373.744,155.610 373.409 C 155.240 373.074,154.360 372.800,153.656 372.800 C 152.468 372.800,150.635 372.154,149.200 371.230 C 148.870 371.017,147.931 370.736,147.113 370.606 C 146.295 370.475,145.345 370.088,145.002 369.745 C 144.659 369.402,143.673 369.026,142.812 368.911 C 141.886 368.787,140.881 368.312,140.353 367.750 C 139.852 367.217,138.999 366.800,138.408 366.800 C 137.829 366.800,136.745 366.350,136.000 365.800 C 135.255 365.250,134.344 364.800,133.976 364.800 C 133.609 364.800,132.864 364.451,132.322 364.025 C 131.780 363.598,130.856 363.148,130.268 363.025 C 129.681 362.901,128.736 362.703,128.168 362.584 L 127.136 362.369 128.726 360.884 C 130.567 359.165,131.775 358.195,133.811 356.800 C 134.614 356.250,135.735 355.305,136.302 354.700 C 136.869 354.095,137.474 353.600,137.648 353.600 C 137.822 353.600,138.396 353.195,138.925 352.700 C 139.453 352.205,140.316 351.483,140.843 351.096 C 141.369 350.709,142.990 349.404,144.445 348.196 C 145.900 346.988,147.197 346.000,147.327 346.000 C 147.457 346.000,148.006 345.595,148.547 345.100 C 149.087 344.605,149.950 343.891,150.465 343.514 C 151.330 342.879,153.409 341.248,156.106 339.086 C 156.715 338.599,157.520 337.885,157.895 337.500 C 158.271 337.115,158.798 336.800,159.066 336.800 C 159.335 336.800,159.790 336.469,160.077 336.063 C 160.365 335.658,160.989 335.121,161.464 334.869 C 161.939 334.617,162.843 333.913,163.472 333.305 C 165.788 331.068,168.565 328.800,168.987 328.800 C 169.227 328.800,169.708 328.485,170.057 328.100 C 170.406 327.715,171.534 326.770,172.563 326.000 C 173.593 325.230,175.260 323.835,176.268 322.900 C 177.276 321.965,178.242 321.200,178.416 321.200 C 178.590 321.200,179.152 320.845,179.666 320.412 C 180.180 319.978,181.950 318.525,183.600 317.181 C 185.250 315.838,186.800 314.482,187.044 314.169 C 187.288 313.856,187.648 313.593,187.844 313.584 C 188.040 313.575,188.823 313.035,189.585 312.384 C 190.347 311.733,191.096 311.200,191.250 311.200 C 191.497 311.200,192.797 310.084,196.258 306.900 C 196.796 306.405,197.380 306.000,197.556 306.000 C 197.732 306.000,198.219 305.619,198.638 305.153 C 199.057 304.687,199.691 304.192,200.047 304.053 C 200.403 303.914,201.573 303.033,202.647 302.097 C 203.721 301.160,205.770 299.477,207.200 298.357 C 211.504 294.985,212.425 294.241,213.453 293.300 C 213.994 292.805,214.598 292.400,214.796 292.400 C 214.993 292.400,215.390 292.082,215.677 291.693 C 215.965 291.304,216.707 290.662,217.326 290.267 C 218.650 289.421,220.412 287.963,223.234 285.380 C 223.582 285.061,224.001 284.800,224.166 284.800 C 224.330 284.800,226.055 283.450,228.000 281.800 C 229.945 280.150,231.721 278.800,231.948 278.800 C 232.175 278.800,232.504 278.571,232.680 278.290 C 232.856 278.010,233.509 277.457,234.131 277.061 C 235.376 276.268,236.860 275.051,238.157 273.760 C 239.069 272.851,243.219 269.479,244.969 268.225 C 245.564 267.799,246.444 267.106,246.925 266.687 C 247.406 266.267,248.250 265.686,248.800 265.396 C 249.350 265.105,250.065 264.492,250.388 264.034 C 250.712 263.575,251.164 263.200,251.392 263.200 C 251.621 263.200,252.032 262.840,252.307 262.400 C 252.582 261.960,253.015 261.600,253.270 261.600 C 253.525 261.600,254.018 261.330,254.366 260.999 C 254.715 260.669,256.379 259.251,258.063 257.849 C 259.748 256.447,261.368 255.086,261.663 254.825 C 261.959 254.565,262.681 254.047,263.268 253.675 C 268.005 250.680,270.800 247.735,270.800 245.740 L 270.800 244.669 247.100 244.946 C 234.065 245.099,223.040 245.263,222.600 245.312 C 221.420 245.442,221.223 243.030,222.364 242.419 C 223.425 241.851,225.200 240.198,225.200 239.778 C 225.200 239.596,226.865 237.788,228.900 235.760 C 230.935 233.732,233.118 231.321,233.750 230.402 C 234.383 229.484,235.632 228.202,236.526 227.555 C 237.420 226.907,238.820 225.487,239.637 224.399 C 240.455 223.311,242.806 220.705,244.862 218.608 C 246.918 216.510,250.265 213.100,252.300 211.029 C 254.335 208.958,256.000 207.110,256.000 206.923 C 256.000 206.374,258.417 203.600,258.895 203.600 C 259.516 203.600,262.939 199.850,263.832 198.192 C 264.245 197.426,264.717 196.800,264.883 196.800 C 265.049 196.800,266.673 195.243,268.492 193.340 C 270.312 191.437,273.105 188.548,274.700 186.920 C 276.295 185.293,277.600 183.790,277.600 183.581 C 277.600 183.371,277.775 183.200,277.990 183.200 C 278.204 183.200,278.659 182.660,279.000 182.000 C 279.341 181.340,279.824 180.800,280.072 180.800 C 280.525 180.800,286.800 174.435,286.800 173.976 C 286.800 173.840,288.585 171.856,290.768 169.565 C 295.888 164.190,296.800 163.191,296.800 162.959 C 296.800 162.854,297.180 162.254,297.644 161.626 C 299.612 158.964,299.023 158.919,259.574 158.673 L 247.749 158.600 247.932 157.600 C 248.033 157.050,248.720 155.924,249.458 155.099 C 250.196 154.273,250.800 153.431,250.800 153.227 C 250.800 153.024,251.603 151.989,252.583 150.929 C 253.564 149.868,254.734 148.550,255.183 148.000 C 255.632 147.450,256.539 146.346,257.199 145.547 C 257.860 144.748,258.400 143.959,258.400 143.793 C 258.400 143.627,258.805 143.070,259.300 142.556 C 260.875 140.918,261.600 140.009,261.600 139.675 C 261.600 139.496,262.140 138.832,262.800 138.200 C 263.460 137.568,264.000 136.841,264.000 136.585 C 264.000 136.195,265.900 133.950,268.588 131.166 C 268.925 130.818,269.200 130.357,269.200 130.142 C 269.200 129.927,269.529 129.397,269.932 128.965 C 270.335 128.533,271.006 127.644,271.425 126.990 C 271.844 126.335,272.504 125.565,272.893 125.277 C 273.282 124.990,273.600 124.490,273.600 124.167 C 273.600 123.844,274.050 123.409,274.600 123.200 C 275.150 122.991,275.600 122.554,275.600 122.230 C 275.600 121.905,275.834 121.496,276.121 121.320 C 276.407 121.144,277.037 120.370,277.521 119.600 C 278.004 118.830,278.714 117.705,279.100 117.099 C 279.485 116.493,280.115 115.896,280.500 115.772 C 280.885 115.648,281.200 115.310,281.200 115.022 C 281.200 114.734,281.458 114.284,281.773 114.022 C 282.483 113.433,287.200 107.288,287.200 106.952 C 287.200 106.507,289.395 104.567,289.652 104.786 C 289.790 104.904,290.119 105.675,290.383 106.500 ", stroke: "none", fill: "#a0962c", "fill-rule": "evenodd" }))));
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

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$M, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$L, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
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

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
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

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd; _a.cakePriceTreeUsd; var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang; _a.priceLink; var priceLinkTree = _a.priceLinkTree;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            React.createElement(Flex, null,
                cakePriceUsd ? (React.createElement(PriceLink, { href: priceLinkTree, target: "_blank" },
                    React.createElement(Icon$w, { width: "24px", mr: "8px" }),
                    React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
                React.createElement(Dropdown, { position: "top", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                        React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                    // Safari fix
                    style: { minHeight: "32px", height: "auto" } }, lang.language)); })))),
        React.createElement(SettingsEntry, null,
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "10px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top-right", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            })),
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
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
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
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
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.octopusdefi.com/", external: true },
            React.createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 6px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 6px;\n  opacity: 0.7;\n"])), function (_a) {
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
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$1c, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, cakePriceTreeUsd = _a.cakePriceTreeUsd, links = _a.links, priceLink = _a.priceLink, priceLinkTree = _a.priceLinkTree, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
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
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, cakePriceTreeUsd: cakePriceTreeUsd, pushNav: setIsPushed, links: links, priceLink: priceLink, priceLinkTree: priceLinkTree }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
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
var StyledToast = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
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
    useEffect(function () {
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
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: \"Open Sans\";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 3px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 3px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 3px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: \"Open Sans\";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 3px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 3px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 3px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "linear-gradient(90.32deg, #84080b 2.5%, #bc191d 99.8%)",
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
    boxShadow: "rgb(0 0 0 / 4%) 0px 0px 8px",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "rgb(0 0 0 / 4%) 0px 0px 8px",
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

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, CopyToClipboard, Dropdown, Icon$1 as ErrorIcon, Flex, Icon$x as GooseRoundIcon, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$w as PancakeRoundTreeIcon, Icon$u as PancakesIcon, Icon$y as PrizeIcon, Progress, Icon$B as ProgressBunny, Radio, Icon$z as RemoveIcon, ResetCSS, Icon$F as SearchIcon, Skeleton, Spinner, Svg, Icon$G as SwapVertIcon, Icon$H as SyncAltIcon, Tag, Text, Icon$D as Ticket, Icon$E as TicketRound, ToastContainer, Toggle, Icon$A as VerifiedIcon, Icon$I as WarningIcon, Icon$C as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
