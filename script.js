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