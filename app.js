var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({encoded:true}));
app.set("view engine", "ejs");

//HOME PAGE
app.get("/", function(req,res){
    res.render("index");
})

//START THE SERVER
app.listen(3000, function() {
    console.log("server listening on port 3000");
})
