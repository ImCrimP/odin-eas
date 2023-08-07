
function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let area = size *size;

    for(let i = 0; i < area; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "lightblue";
        board.insertAdjacentElement("beforeend", square);
    }
}


const setSizeBtn = document.querySelector("#setSizeBtn");
const input = document.querySelector("#input");


createBoard(16);


function changeBoardSize(input){
    createBoard(input);
}




