var randomNumber1=Math.floor(Math.random()*6)+1;

var random_image="dice"+randomNumber1+".png";
var random_folder="images/"+random_image;

var target=document.querySelectorAll("img")[0];
target.setAttribute("src",random_folder);


var randomNumber2=Math.floor(Math.random()*6)+1;

var folder2="images/dice"+randomNumber2+".png";

var target2=document.querySelectorAll("img")[1];
target2.setAttribute("src",folder2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins !";
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 wins! ";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";

}
