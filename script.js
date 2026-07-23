function subscribe(){

let email=document.querySelector("input").value;

if(email=="")
{
alert("Please enter your email.");
}
else
{
alert("Thank you for subscribing!");
document.querySelector("input").value="";
}

}
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000,()=>{
    console.log("Server Running");
});