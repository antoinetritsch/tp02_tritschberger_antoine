const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/TP2ANGULAR"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/TP2ANGULAR/index.html"));
});
app.listen(process.env.PORT || 8080);
