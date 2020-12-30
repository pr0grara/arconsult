import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "frontend", "build")));


app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  res.send("welcome to the backend");
})

let port = 9000;

app.listen(port, () => console.log(`app listening on port ${port}`));