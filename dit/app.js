"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _message = _interopRequireDefault(require("./config/message.js"));
var _enviroments = _interopRequireDefault(require("./config/enviroments"));
var _user = _interopRequireDefault(require("./Routes/user.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set("PORT", process.env.PORT || 3000);
app.use(_express["default"].json());
app.use("/api", _user["default"]);
var _default = app;
exports["default"] = _default;