
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

var items = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   var today = new Date();
   var option = {
    weekday : "long",
    day : "numeric",
    month : "long",
   };

   var day = today.toLocaleDateString("en-US", option);

res.render("view", { kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
   item = req.body.newItem;

   items.push(item);
res.redirect("/");
});


app.listen(3000, function(){
    console.log("Server is log on port 3000")
});