const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < (size ** 2); i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute("class","square");
    };
};

window.addEventListener('onload', createGrid(16));

let gridItem = document.getElementsByClassName('square');

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', function() {
        gridItem[i].style.backgroundColor = "#8EF0D5";
    });
};

let refresh = document.querySelector(".reset");

for (let i = 0; i < gridItem.length; i++) {
    refresh.addEventListener('click', function() {
        gridItem[i].style.backgroundColor = "#FFF";
    });
};

function removeGrid() {
    //use querySelectorAll to get static list
    let currentGrid = document.querySelectorAll(".square");
    for (let i = 0; i < currentGrid; i++) {
        container.removeChild(currentGrid[i]);
    };
};

refresh.addEventListener('click', function() {
    removeGrid();
    newSize = prompt("how many squares wide?");
    createGrid(newSize);
});