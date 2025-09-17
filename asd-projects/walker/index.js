/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
  };

   var walker = {
    x : 0,
    y : 0,
    speedX : 0,
    speedY : 0,
   }
    var walker2 = {
    x : 50,
    y : 50,
    speedX : 0,
    speedY : 0,
   }
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);  
  $(document).on('keyup', handleKeyUp);                        
  $(document).on('keydown', handleKeyDown2);  
  $(document).on('keyup', handleKeyUp2);                        

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    repositionGameItem2();
    wallCollision();
    wallCollision2();
    redrawGameItem();
    redrawGameItem2();
    console.log(walker.x, walker.y);
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    console.log(event.which);
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
}if (event.which === KEY.RIGHT) {
   walker.speedX = 5;
}if (event.which === KEY.UP) {
    walker.speedY = -5;
}if (event.which === KEY.DOWN) {
     walker.speedY = 5;
}
  }
  function handleKeyDown2(event) {
    console.log(event.which);
    if (event.which === KEY.A) {
      walker2.speedX = -5;
}if (event.which === KEY.D) {
   walker2.speedX = 5;
}if (event.which === KEY.W) {
    walker2.speedY = -5;
}if (event.which === KEY.S) {
     walker2.speedY = 5;
}
  }
function handleKeyUp(event) {
    console.log(event.which);
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
}if (event.which === KEY.RIGHT) {
   walker.speedX = 0;
}if (event.which === KEY.UP) {
    walker.speedY = 0;
}if (event.which === KEY.DOWN) {
     walker.speedY = 0;
}
  }
  function handleKeyUp2(event) {
    console.log(event.which);
    if (event.which === KEY.A) {
      walker2.speedX = 0;
}if (event.which === KEY.D) {
   walker2.speedX = 0;
}if (event.which === KEY.W) {
    walker2.speedY = 0;
}if (event.which === KEY.S) {
     walker2.speedY = 0;
}
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function wallCollision() {
    if (walker.x < 0 || walker.y < 0 || walker.x + $("#walker").width() > $("#board").width() || walker.y + $("#walker").height() > $("#board").height()) {
      walker.x -= walker.speedX;
      walker.y -= walker.speedY;
    }
  } 
 function wallCollision2() {
    if (walker2.x < 0 || walker2.y < 0 || walker2.x + $("#walker").width() > $("#board").width() || walker2.y + $("#walker").height() > $("#board").height()) {
      walker2.x -= walker2.speedX;
      walker2.y -= walker2.speedY;
    }
  } 
  function endGame() {
    // stop the interval timer
    clearInterval(interval);
   
    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem() {
    walker.x += walker.speedX
    walker.y += walker.speedY
   }
   function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
   }
    function repositionGameItem2() {
    walker2.x += walker2.speedX
    walker2.y += walker2.speedY
   }
   function redrawGameItem2() {
    $("#walker2").css("left", walker2.x);
    $("#walker2").css("top", walker2.y);
   }
    $("#walker").on("click", changeColor);
    
    function changeColor(){
    var color = Math.ceil(Math.random() * 6);
    if (color === 1){
      $("#walker").css("background-color", "yellow")
    }
    else if (color === 2){
      $("#walker").css("background-color", "red")
    }
    else if (color === 3){
      $("#walker").css("background-color", "blue")
    }
    else if (color === 4){
      $("#walker").css("background-color", "green")
    }
    else if (color === 5){
      $("#walker").css("background-color", "purple")
    }
    else if (color === 6){
      $("#walker").css("background-color", "orange")
    }
  }
  $("#walker2").on("click", changeColor2);
    function changeColor2(){
    var color = Math.ceil(Math.random() * 6);
    if (color === 1){
      $("#walker2").css("background-color", "yellow")
    }
    else if (color === 2){
      $("#walker2").css("background-color", "red")
    }
    else if (color === 3){
      $("#walker2").css("background-color", "blue")
    }
    else if (color === 4){
      $("#walker2").css("background-color", "green")
    }
    else if (color === 5){
      $("#walker2").css("background-color", "purple")
    }
    else if (color === 6){
      $("#walker2").css("background-color", "orange")
    }
  }
}
