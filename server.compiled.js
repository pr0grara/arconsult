"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _sms = _interopRequireDefault(require("./routes/api/sms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 9000; // const PORT = 9000;
// app.use(express.static(path.join(__dirname, "client", "build"))); //magical shit right here dawg

app.get("/", function (req, res) {
  res.send("welcome to the backend on port ".concat(PORT));
});
app.use("/api/sms", _sms["default"]);
app.get("/*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "../client/build/index.html"));
});
app.listen(PORT, function () {
  return console.log("app listening on port ".concat(PORT));
});
