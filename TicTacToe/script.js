const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const displayGameOver = document.querySelector(".game-over-container");
const winText = document.querySelector(".game-over-text");
const newGame = document.querySelector(".new-game");

const computer = document.querySelector(".game-mode-computer");
const friend = document.querySelector(".game-mode-friend");
const gameScreen = document.querySelector(".game-screen");
const homeScreen = document.querySelector(".home-screen");

let gameGrid;
let player;
let comp;
let winnerList = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function initGrid() {
    homeScreen.classList.add("active");
    comp = false;
    player = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    gameInfo.innerText = `Current Player - ${player}`;

    //Clear grid
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        // Give default CSS property
        box.classList.remove('win');
    });
    displayGameOver.classList.remove('active');
    gameScreen.classList.remove('active');
};

initGrid();

function disableCurser() {
    boxes.forEach((box) => {
        box.style.pointerEvents = 'none';
    });
}

function enableCurser() {
    boxes.forEach((box) => {
        box.style.pointerEvents = 'all';
    });
}

function checkGameOver() {
    let winner = "";
    winnerList.forEach((arr) => {
        if (gameGrid[arr[0]] === gameGrid[arr[1]] && gameGrid[arr[1]] === gameGrid[arr[2]] && gameGrid[arr[0]] !== "") {
            boxes[arr[0]].classList.add('win');
            boxes[arr[1]].classList.add('win');
            boxes[arr[2]].classList.add('win');
            winner = gameGrid[arr[0]];
        }
    })
    if (winner !== "") {
        disableCurser();
        if (comp === true) {
            if (winner === 'X') {
                winText.innerText = "Player Wins";
            } else {
                winText.innerText = "Computer Wins";
            }
        } else {
            winText.innerText = `Winner - ${winner}`;
        }
        return true;
    }

    let count = 0;
    gameGrid.forEach((x) => {
        if (x !== "")
            count++;
    });

    if (count === 9) {
        winText.innerText = `It's a Tie`;
        return true;
    }
    return false;
}

function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

function checkIfComputerCanWin(){
    winnerList.forEach((arr)=>{
        if (gameGrid[arr[0]] === gameGrid[arr[1]] && gameGrid[arr[1]] === '0' && gameGrid[arr[2]] === "") {
            return arr[2];
        }else if(gameGrid[arr[1]] === gameGrid[arr[2]] && gameGrid[arr[2]] === '0' && gameGrid[arr[0]] === ""){
            return arr[0];
        }else if(gameGrid[arr[2]] === gameGrid[arr[0]] && gameGrid[arr[2]] === '0' && gameGrid[arr[1]] === ""){
            return arr[1];
        }
    });
    return "";
}

function preventPlayerWinning(){
    winnerList.forEach((arr)=>{
        if (gameGrid[arr[0]] === gameGrid[arr[1]] && gameGrid[arr[1]] === 'X' && gameGrid[arr[2]] === "") {
            return arr[2];
        }else if(gameGrid[arr[1]] === gameGrid[arr[2]] && gameGrid[arr[2]] === 'X' && gameGrid[arr[0]] === ""){
            return arr[0];
        }else if(gameGrid[arr[2]] === gameGrid[arr[0]] && gameGrid[arr[2]] === 'X' && gameGrid[arr[1]] === ""){
            return arr[1];
        }
    });
    return -1;
}

async function handleClick(index) {
    if (gameGrid[index] === "") {
        gameGrid[index] = player;
        boxes[index].innerText = player;

        //Check if game complete
        if (checkGameOver()) {
            displayGameOver.classList.add('active');
            return;
        }

        if (comp === true) {
            gameInfo.innerText = "Current Player - Computer";
            let ind = checkIfComputerCanWin();
            if (ind === -1) {
                ind = preventPlayerWinning();
            }
            if (ind === -1) {
                let arr = [];
                gameGrid.forEach((content, index) => {
                    if (content === "") {
                        arr.push(index);
                    }
                });
                let randInd = Math.floor(Math.random() * arr.length);
                ind = arr[randInd];
            }
            disableCurser();
            await delay(1000);
            enableCurser();
            gameGrid[ind] = '0';
            boxes[ind].innerText = '0';
            if (checkGameOver()) {
                displayGameOver.classList.add('active');
                return;
            }
        } else {
            if (player === 'X') {
                player = '0';
            } else {
                player = 'X';
            }
        }
        gameInfo.innerText = `Current Player - ${player}`;
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
})

friend.addEventListener("click", () => {
    homeScreen.classList.remove("active");
    gameScreen.classList.add("active");
});

computer.addEventListener("click", () => {
    homeScreen.classList.remove("active");
    gameScreen.classList.add("active");
    comp = true;
});

newGame.addEventListener('click', initGrid);