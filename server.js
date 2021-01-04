import express from "express";
import path from "path";
import sms from './routes/api/sms'

const app = express();
// const PORT = process.env.PORT || 9000;
const PORT = 9000;

// app.use(express.static(path.join(__dirname, "client", "build"))); //magical shit right here dawg

app.get("/", (req, res) => {
  res.send(`welcome to the backend on port ${JSON.stringify(process.env)}`);
})

app.use("/api/sms", sms)

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(PORT, () => console.log(`app listening on port ${PORT}`));