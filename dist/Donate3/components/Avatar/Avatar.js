function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classNames from 'classnames/bind';
import React from 'react';
import { ZERO_ADDRESS } from "../../utils/const";
import { getNounsBase64 } from "../../utils/nouns";
import styles from "./Avatar.module.css";
function Avatar(props) {
  var _props$address;
  var cx = classNames.bind(styles);
  var myStyle = {
    // backgroundImage: `url('${props.address}')`,
    width: props.width,
    height: props.width,
    borderRadius: props.width
  };
  // console.log('>>>>>', props.address, props.address?.length);
  var base64Hash = ((_props$address = props.address) === null || _props$address === void 0 ? void 0 : _props$address.length) === 42 ? getNounsBase64(props.address || ZERO_ADDRESS) : null;
  var allStyle = _objectSpread(_objectSpread({}, myStyle), props.style);
  return /*#__PURE__*/React.createElement(React.Fragment, null, base64Hash ? /*#__PURE__*/React.createElement("img", {
    className: cx(styles.avatar, props.className),
    alt: "avatar",
    src: "data:image/svg+xml;base64,".concat(base64Hash),
    style: allStyle
  }) : /*#__PURE__*/React.createElement("img", {
    className: cx(styles.avatar, props.className),
    style: allStyle,
    src: "https://i.328888.xyz/2023/03/12/vk3wZ.png"
  }));
}
export default /*#__PURE__*/React.memo(Avatar);