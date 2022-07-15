const express = require("express");
const app = express();
const bodyParser=  require("body-parser");
const https= require("https");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname +"/signup.html");
});

app.post("/",function(req,res){
  var firstName = req.body.fName;
  var lastName= req.body.lName;
  var email= req.body.email;

var data = {

members: [{

email_address:email,
status:"subscribed",
merge_fields:{
  FNAME:firstName,
  LNAME: lastName
}
}]
}
var jsonData= JSON.stringify(data);


  console.log(firstName, lastName, email);

});

app.listen(process.env.PORT || 3000, function(){
  console.log("server started on 3000");
})


//site-name-heroku
// https://secret-garden-02353.herokuapp.com/

//api key   cd9251f7fc4cd4217ddc12c872676178-us6
// ID  363f7ebb22
