"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var button_style_1 = __importDefault(require("./button.style"));
var Button = function (_a) {
    var children = _a.children, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.type, type = _d === void 0 ? 'submit' : _d, _e = _a.color, color = _e === void 0 ? '' : _e, _f = _a.dataTestId, dataTestId = _f === void 0 ? 'button' : _f;
    var classes = button_style_1.default({ color: color });
    var handleClick = function () {
        if (!disabled && onClick)
            onClick();
    };
    var rootProps = {
        className: classes.root,
        type: type,
        onClick: handleClick,
        disabled: disabled,
        'data-testid': dataTestId,
    };
    return (React.createElement("button", __assign({}, rootProps),
        React.createElement("span", { className: classes.label }, children)));
};
exports.default = Button;
//# sourceMappingURL=index.js.map