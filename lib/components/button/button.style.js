"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.default = react_jss_1.createUseStyles(function (theme) { return ({
    root: {
        color: function (props) { return props.color || theme.colorPrimary; },
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: function (props) {
            return props.color || theme.colorPrimary;
        },
        padding: '15px 32px',
        transition: 'all 250ms',
        '&:not([disabled])&:hover': {
            color: 'white',
            backgroundColor: function (props) {
                return props.color || theme.colorPrimary;
            },
        },
        '&:focus': {
            outline: 'none',
        },
        '&[disabled]': {
            opacity: 0.3,
            cursor: 'unset',
        },
    },
    label: {
        fontWeight: 'bold',
    },
}); });
//# sourceMappingURL=button.style.js.map