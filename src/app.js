var express = require("express");
var app = express();
var hbs = require("hbs");
var path = require("path");
var port = process.env.PORT || 8080;

var cssPath = path.join(__dirname, "../css");
var htmlPath = path.join(__dirname, "../html");
var imgPath = path.join(__dirname, "../img");

app.set("view engine", "hbs");
app.set("views");

app.use(express.static(cssPath));
app.use(express.static(htmlPath));
app.use(express.static(imgPath));

app.get("/home", async(req, res) => {
    try {
        res.render("indiaoverview");
    } catch (err) {
        console.log(err);
    }
});

app.get("/", (req, res) => {
    res.render("indiaoverview");
});

app.listen(port, () => {
    console.log("listening on port no." + port);
});