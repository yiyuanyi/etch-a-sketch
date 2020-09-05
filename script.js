const container = document.querySelector('.container');

function createGrid() {
for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute("class","square");
    };
};

window.addEventListener('onclick', createGrid());

let square = document.querySelector('.square');

function colorChange() {
    square.setAttribute("class","colorful");
};

square.addEventListener('mouseover', colorChange());

