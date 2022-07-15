//
// function successColor(){
// document.body.style.background="green";
// document.getElementById("text").innerHTML="Success";
// }
//
// function warningColor(){
// document.body.style.background="orange";
// document.getElementById("text").innerHTML="Warning";
// }
// function dangerColor(){
// document.body.style.background="red";
// document.getElementById("text").innerHTML="Danger";
// }


const colors = ["green", "red", "orange","purple","blue","yellow"];
const btn = document.getElementById("click-me");
//const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.background = colors[randomNumber];
  document.getElementById("text").innerHTML= colors[randomNumber];
//  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
