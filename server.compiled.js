"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _sms = _interopRequireDefault(require("./routes/api/sms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("dotenv").config({
  path: _path["default"].resolve(__dirname, "./.env")
});

var app = (0, _express["default"])();
var PORT = process.env.PORT || 9000; // const PORT = 9000;
// app.use(express.static(path.join(__dirname, "client", "build"))); //magical shit right here dawg

app.get("/", function (req, res) {
  res.send("welcome to the backend on port ".concat(PORT));
});
app.use("/api/sms", _sms["default"]);
app.get("/sms/send", function () {
  var client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  var standardMsg = "hello";
  client.messages.create({
    body: standardMsg,
    from: "+13158030650",
    to: "+19252553225"
  })["catch"](function (err) {
    return console.log(err);
  }).then(function (message) {
    return console.log(message.sid);
  });
});
app.get("/*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "../client/build/index.html"));
});
app.listen(PORT, function () {
  return console.log("app listening on port ".concat(PORT));
});
