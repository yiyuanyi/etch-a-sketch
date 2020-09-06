const container = document.querySelector('.container');

function createGrid() {
for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute("class","square");
    };
};

window.addEventListener('onclick', createGrid());

/*need to use getElement, think cause returns live list of 
  HTML items instead of node list*/

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

refresh.addEventListener('click', function() {
    let newSize = prompt("how many squares wide?");
    container.style.setProperty('grid-template-columns', `repeat(${newSize}, 1fr)`);
});