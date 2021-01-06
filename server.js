import express from "express";
import path from "path";
import sms from './routes/api/sms'
// require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();
const PORT = process.env.PORT || 9000;
// const PORT = 9000;

// app.use(express.static(path.join(__dirname, "client", "build"))); //magical shit right here dawg

app.get("/", (req, res) => {
  // res.send(`welcome to the backend on port ${PORT}`);
  // res.sendFile(path.resolve(__dirname, "client", "build"));
  app.use(express.static("client/build"));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

app.use("/api/sms", sms)

app.get("/sms/send", () => {
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

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


app.listen(PORT, () => console.log(`app listening on port ${PORT}`));