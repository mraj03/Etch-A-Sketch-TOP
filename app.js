let color = 'black';
let click = true;

function populateCanvas(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove);
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    amount = size * size
    for (let i = 0; i < amount; i++){
        let pixel = document.createElement("div");
        pixel.addEventListener("mouseover", pixelColor);
        pixel.style.backgroundColor= "white";
        board.insertAdjacentElement("beforeend", pixel);
    }
}


function smallCanvas(){
    let small = document.querySelector('.size-s');
    small.addEventListener("onClick", populateCanvas(16));
}
function mediumCanvas(){
    let medium = document.querySelector('.size-m');
    medium.addEventListener("onClick", populateCanvas(32));
}
function largeCanvas(){
    let large = document.querySelector('.size-l');
    large.addEventListener("onclick", populateCanvas(64));
}

function pixelColor(){
    if(!click){
        if (color === 'Random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
           }  else{
            this.style.backgroundColor = color;
           };
    }
}

function changeColor(choice){
   color = choice;
}
    
   
    
function resetCanvas(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = "white");
}


document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.tagName !== `BUTTON`){
        click = !click;

    if (!click){
        document.querySelector(".cursor-current-action").textContent = "cursor current- action: Drawing"
    } else{
        document.querySelector(".cursor-current-action").textContent = "cursor current- action: Not drawing"
    }
    }
})