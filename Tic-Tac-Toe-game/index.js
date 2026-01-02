let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0; //To count draw

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enabledBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#E86252";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#EE2677";
      turnO = true;
    }

    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if(count === 9 && !isWinner) {
      gameDraw();
    }

  });
});


const gameDraw = () => {
  msg.innerText = 'This game is a Draw.';
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

let showWinner = (winner) => {
  msg.innerText = `Congratulation the Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val === post2Val && post2Val === post3Val) {
        showWinner(post1Val);
      } 
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
