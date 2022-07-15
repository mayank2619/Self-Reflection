const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
var items =["Buy food","cook food","eat food"];

app.use(express.static("public"));
app.get("/",function(req,res){

var options= {
  day: 'numeric',
  year: 'numeric',
  month:'long'
}

var date = new Date();

 res.render("list",{whatDay:date.toLocaleDateString(undefined,options), addme:items});

}


);
app.post("/",function(req,res){
var  item = req.body.addItems;
  items.push(item);
  res.redirect("/");

});




app.listen(3000,function(){
  console.log("server started");
}

);
