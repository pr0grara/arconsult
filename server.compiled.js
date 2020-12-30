"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, "frontend", "build")));
app.get("/", function (req, res) {
  // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  res.send("welcome to the backend");
});
var port = 9000;
app.listen(port, function () {
  return console.log("app listening on port ".concat(port));
});
