"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _sms = _interopRequireDefault(require("./routes/api/sms"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000; // const PORT = 9000;
// app.use(express.static(path.join(__dirname, "client", "build"))); //magical shit right here dawg

console.log("port number is: ".concat(PORT));
app.get("/", function (req, res) {
  // res.send(`welcome to the backend on port ${PORT}`);
  // res.sendFile(path.resolve(__dirname, "client", "build"));
  app.use(_express["default"]["static"]("client/build"));
  res.sendFile(_path["default"].resolve(__dirname, "client", "build", "index.html"));
});
app.use("/api/sms", _sms["default"]);
app.post("/sms/send", function () {
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
}); // app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.listen(PORT, function () {
  return console.log("hey aws, app is now listening on port ".concat(PORT));
});
