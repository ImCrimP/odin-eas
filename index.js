
function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let area = size *size;

    for(let i = 0; i < area; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        square.style.backgroundColor = "lightblue";
        board.insertAdjacentElement("beforeend", square);
    }
}


const setSizeBtn = document.querySelector("#setSizeBtn");
const input = document.querySelector("#input");


createBoard(16);


function changeBoardSize(input){
    console.log(input);
    if(input >= 2 && input <= 100){
        createBoard(input);
    }
    else{
        alert("Enter a number between 2 and 100");
    }
}




