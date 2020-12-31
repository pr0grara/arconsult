import express from "express";
import path from "path";
import sms from './routes/api/sms'
const answers = require("./routes/api/sms");


const app = express();

app.use(express.static(path.join(__dirname, "frontend", "build"))); //magical shit right here dawg


app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  res.send("welcome to the backend");
})

app.use("/api/sms", sms)

let port = 9000;

app.listen(port, () => console.log(`app listening on port ${port}`));