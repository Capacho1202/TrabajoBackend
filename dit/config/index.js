"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = _interopRequireDefault(require("../app.js"));
var _message = _interopRequireDefault(require("./message.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var caseEntoro = function caseEntoro() {
  switch (process.env.NODE_ENV) {
    case "developer":
      (0, _message["default"])("Estas en el puerto ".concat(_app["default"].get("PORT")), "sucess");
      break;
    case "qa":
      (0, _message["default"])("Estas en el puerto ".concat(_app["default"].get("PORT")), "warning");
      break;
    case "production":
      (0, _message["default"])("Estas en el puerto ".concat(_app["default"].get("PORT")), "danger");
      break;
    default:
      (0, _message["default"])("Estas en el puerto ".concat(_app["default"].get("PORT")), "white");
      break;
  }
};
var _default = caseEntoro;
exports["default"] = _default;