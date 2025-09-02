$(document).ready(function () {
  // Your code goes here
$("<div>")
  .css("height", 0)
  .css("width", 0)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");

  function makeDot(top, left, elementID){
    $("<div>")
  .css("height", 50)
  .css("width", 50)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID);
  }
  function changeColor(){
    var color = Math.ceil(Math.random() * 6);
    if (color === 1){
      $("#die").css("background-color", "yellow")
    }
    else if (color === 2){
      $("#die").css("background-color", "red")
    }
    else if (color === 3){
      $("#die").css("background-color", "blue")
    }
    else if (color === 4){
      $("#die").css("background-color", "green")
    }
    else if (color === 5){
      $("#die").css("background-color", "purple")
    }
    else if (color === 6){
      $("#die").css("background-color", "orange")
    }
  }

   function changeColor2(){
    var color = Math.ceil(Math.random() * 6);
    if (color === 1){
      $("body").css("background-color", "yellow")
    }
    else if (color === 2){
      $("#body").css("background-color", "red")
    }
    else if (color === 3){
      $("#body").css("background-color", "blue")
    }
    else if (color === 4){
      $("#body").css("background-color", "green")
    }
    else if (color === 5){
      $("#body").css("background-color", "purple")
    }
    else if (color === 6){
      $("#body").css("background-color", "orange")
    }
  }
  function rollDie() {
    $("#die").empty();
    var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
if (randomNum === 1) {
  makeDot(120, 127, "#die"); // middle middle
} else if (randomNum === 2) {
  makeDot(30, 30, "#die"); // top left
  makeDot(225, 225, "#die"); // bottom right
} else if (randomNum === 3) {
  makeDot(30, 30, "#die"); // top left
  makeDot(225, 225, "#die"); // bottom right
  makeDot(120, 127, "#die"); // middle middle
} else if (randomNum === 4) {
  makeDot(225, 225, "#die"); // bottom right
  makeDot(30, 30, "#die"); // top left
  makeDot(225, 30, "#die"); // bottom left
  makeDot(30, 225, "#die"); // top right
} else if (randomNum === 5) {
  makeDot(120, 127, "#die"); // middle middle
  makeDot(225, 225, "#die"); // bottom right
  makeDot(30, 30, "#die"); // top left
  makeDot(225, 30, "#die"); // bottom left
  makeDot(30, 225, "#die"); // top right
}
else if (randomNum === 6) {
  makeDot(130, 30, "#die"); // middle left
  makeDot(225, 225, "#die"); // bottom right
  makeDot(30, 30, "#die"); // top left
  makeDot(225, 30, "#die"); // bottom left
  makeDot(30, 225, "#die"); // top right
  makeDot(130, 225, "#die"); // middle right
}
  }

  $("#die").on("click", rollDie);
    $("#die").on("click", changeColor);
    $("body").on("click", changeColor);
});
