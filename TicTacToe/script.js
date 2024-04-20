const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");

let gameGrid;
let player;
let winnerList = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function initGrid(){
    player = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    gameInfo.innerText = `Current Player - ${player}`;

    //Clear grid
    boxes.forEach((box) =>{
        box.innerText = "";
        box.style.pointerEvents = "all";
        // Give default CSS property
        box.classList.remove('win');
    });
    btn.classList.remove('active');
};

initGrid();

function disableCurser(){
    boxes.forEach((box)=>{
        box.style.pointerEvents = 'none';
    });
}

function checkGameOver(){
    let winner = "";
    winnerList.forEach((arr)=>{
        if(gameGrid[arr[0]] === gameGrid[arr[1]] && gameGrid[arr[1]] === gameGrid[arr[2]] && gameGrid[arr[0]] !== ""){
            boxes[arr[0]].classList.add('win');
            boxes[arr[1]].classList.add('win');
            boxes[arr[2]].classList.add('win');
            winner = gameGrid[arr[0]];
        }
    })
    if(winner !== ""){
        disableCurser();
        gameInfo.innerText = `Winner - ${winner}`;
        return true;
    }

    let count = 0;
    gameGrid.forEach((x)=>{
        if(x !== "")
            count++;
    });

    if(count === 9){
        gameInfo.innerText = `It's a Tie`;
        return true;
    }
    return false;
}

function handleClick(index){
    if(gameGrid[index] === ""){
        gameGrid[index] = player;
        boxes[index].innerText = player;
        
        //Check if game complete
        if(checkGameOver()){
            btn.classList.add('active');
            return;
        }

        if(player === 'X'){
            player = '0';
        }else{
            player = 'X';
        }
        gameInfo.innerText = `Current Player - ${player}`;
    }
}

boxes.forEach((box, index)=>{
    box.addEventListener('click', ()=>{
        handleClick(index);
    });
})

btn.addEventListener('click', initGrid);