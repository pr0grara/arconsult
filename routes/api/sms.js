const express = require("express");
const path = require("path");
const router = express.Router();
// const bodyParser = require("body-parser");
// var jsonParser = bodyParser.json();
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const credentials = {
  key: process.env.TEXT_ANALYSIS_KEY_1,
  endpoint: process.env.ENDPOINT,
};

router.get("/test", (req, res) => {
  res.json({ msg: "This is answers route" });
});

router.get("/send", (req, res) => {
  const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  var standardMsg = `hello`;
  client.messages
    .create({
      body: standardMsg,
      from: "+13158030650",
      to: "+19252553225",
    })
    .catch((err) => console.log(err))
    .then((message) => console.log(message.sid));
}) 



module.exports = router;
