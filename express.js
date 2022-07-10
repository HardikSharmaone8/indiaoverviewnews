var express = require("express");
var app = express();
var port = process.env.PORT || 8000;

app.set("view engine", "hbs");

app.get("/home", (req, res) => {
    res.render("indiaoverview");
});

app.listen(port, () => {
    console.log("listening on port no." + port);
});