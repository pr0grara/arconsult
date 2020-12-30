const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"))
})

let port = process.env.PORT || 5050;

app.listen(port, () => console.log(`app listening on port ${port}`));