let container = document.querySelector('.container');

for (let index = 0; index < 16; index++) {
    for (let index = 0; index < 16; index++) {
        let div = document.createElement('div');
        div.textContent = "\u00a0";
        div.classList.add('square');
        container.appendChild(div);
    }
}

let squares = document.querySelectorAll('.square');
for (const square of squares) {
    square.addEventListener('mouseover', () => {
        console.log("hovering");
        square.classList.add("color");
    })
    
}
