const express = require("express");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/test", (req, res) => {
  res.json({ msg: "This is answers route" });
});

router.post("/send", jsonParser, (req, res) => {
  // console.log(req.body)
  var [name, company, body] = [req.body.name, req.body.company, req.body.body];
  const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );
    var msg = `${name} from ${company} says: ${body}`;
    client.messages
    .create({
      body: msg,
      from: "+13158030650",
      to: "+19252553225",
    })
      .catch((err) => console.log(err))
      .then((message) => {
        res.json({msg: message.sid})
        console.log(message.sid)
      });
  }) 



module.exports = router;
