"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _sms = _interopRequireDefault(require("./routes/api/sms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var answers = require("./routes/api/sms");

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, "client", "build"))); //magical shit right here dawg

app.get("/", function (req, res) {
  // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  res.send("welcome to the backend");
});
app.use("/api/sms", _sms["default"]); // app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

var PORT = process.env.PORT || 9000;
app.listen(PORT, function () {
  return console.log("app listening on port ".concat(PORT));
});
