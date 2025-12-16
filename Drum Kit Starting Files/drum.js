// button or key length
let num = document.querySelectorAll("button.drum").length;

//sound function
function sound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(this);
  }
}

//Mouse Event
for (let i = 0; i < num; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
    let button = this.innerHTML;
    sound(button);
    animate(button);
  });
}

//Keyboard Event
document.addEventListener("keydown", function(event){
  sound(event.key);
  animate(event.key);
});


//Animation
function animate(pressedKey) {
  let key = document.querySelector(`.${pressedKey}`);
  key.classList.add("pressed");

  setTimeout(function() {
    key.classList.remove("pressed");
  }, 100);
}









// calculator
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}


//Mouse Event
// for (let i = 0; i < num; i++) {
//   document
//     .querySelectorAll("button.drum")
//     [i].addEventListener("click", function () {
//       let button = this.innerHTML;

//       switch (button) {
//         case "w":
//           const tom1 = new Audio("./sounds/tom-1.mp3");
//           tom1.play();
//           break;

//         case "a":
//           const tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//           break;

//         case "s":
//           const tom3 = new Audio("sounds/tom-3.mp3");
//           tom3.play();
//           break;

//         case "d":
//           const tom4 = new Audio("sounds/tom-4.mp3");
//           tom4.play();
//           break;

//         case "j":
//           const crash = new Audio("sounds/crash.mp3");
//           crash.play();
//           break;

//         case "k":
//           const kick = new Audio("sounds/kick-bass.mp3");
//           kick.play();
//           break;

//         case "l":
//           const snare = new Audio("sounds/snare.mp3");
//           snare.play();
//           break;

//         default:
//           console.log(this);
//       }
//     });
// }