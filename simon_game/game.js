var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

let level = 0;


//Start game
$(document).on("keydown", function(){
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }  
});

//press buttton
$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  
  playsound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


//Check Answer Function
function checkAnswer(currentLevel) {

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("sucess");

    if(gamePattern.length === userClickedPattern.length) {
      setTimeout (function() {
        nextSequence();
      }, 1000);
    }

  } else {
    console.log("wrong");

    playsound("wrong");

    $("body").addClass("game-over");
    setInterval(function(){
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startover();
  }

}


//play sequence
function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text(`Level ${level}`);

  var randomNum = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomColor);
}



// sound function
function playsound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// press animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  }


//Start Over
function startover() {
  level = 0;
  gamePattern = [];
  started = false;
}

  



