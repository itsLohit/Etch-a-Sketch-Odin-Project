// DOM Objects
const sketchArea = document.querySelector("#sketchArea");
const btnGridSize = document.querySelector("#btnGridSize");
const btnReset = document.querySelector("#btnReset");


sketchArea.style.width = "400px";
sketchArea.style.height = "400px";
sketchArea.style.border = "1px solid red";


btnGridSize.addEventListener("click", promptGridSize);
btnReset.addEventListener("click", resetGrid);

function resetGrid(){
    createGrid();
}

function promptGridSize(){
    let userInput = prompt("Enter a number between 1 and 100");
    if((userInput<1) || (isNaN(userInput))){
        userInput = 1;
    }
    else if(userInput>100){
        userInput = 100;
    }
    createGrid(userInput);
}


function changeBackgroundColor(){
    this.style.backgroundColor = "#FACD3D";
}

// Creating A Grid
function createGrid(size=16){
    sketchArea.innerHTML = "";
    for(let i=0; i<(size**2); i++){
        const grid = document.createElement("div");
        const gridSize = 400
        /size;
        grid.classList.add("grid");
        grid.style.height = `${gridSize - 2}px`;
        grid.style.width = `${gridSize - 2}px`;
        grid.style.border = "1px solid black"
        sketchArea.appendChild(grid);
        grid.addEventListener("mouseover", changeBackgroundColor);
        
        console.log(size);
    }
}
















createGrid();