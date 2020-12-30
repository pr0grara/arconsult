const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "frontend", "build")));


app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  res.send("welcome to the backend");
})

let port = process.env.PORT || 9000;

app.listen(port, () => console.log(`app listening on port ${port}`));