let container = document.querySelector('.container');
let size = prompt("Enter grid size: ");

var root = document.querySelector(':root');
root.style.setProperty('--size', size);

function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 

for (let index = 0; index < size; index++) {
    for (let i = 0; i < size ;i++) {
        let div = document.createElement('div');
        div.textContent = "\u00a0";
        div.classList.add('square');
        container.appendChild(div);
    }
}

let squares = document.querySelectorAll('.square');

function black() {
    for (const square of squares) {
        square.addEventListener('mouseover', () => {
            console.log("hovering");
            square.classList.add("color");
        })
    }
}

function rainbow() {
    for (const square of squares) {
        square.addEventListener('mouseover', (e) => {
            console.log("hovering");
            e.target.style.backgroundColor = generateRandomColor();
        })
    }
}

function reset() {
    location.reload();
}