const container = document.querySelector('.container');

let gridItem = document.getElementsByClassName('square');

let refresh = document.querySelector(".reset");

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < (size ** 2); i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute("class","square");
    };

    container.style.setProperty("grid-template-columns", `repeat(${size}, 1fr)`);

    /*function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
        return color;
    }*/

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', function() {
            gridItem[i].style.backgroundColor = '#29a684';
        });
    };

    for (let i = 0; i < gridItem.length; i++) {
        refresh.addEventListener('click', function() {
            gridItem[i].style.backgroundColor = "#FFF";
        });
    };
};

window.addEventListener('onload', createGrid(16));

refresh.addEventListener('click', function() {
    let newSize = prompt("how many squares wide?");
    createGrid(newSize);
});