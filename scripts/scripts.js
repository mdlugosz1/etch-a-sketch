const main = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const zielony = document.querySelector('#green');


createGrid(50);

function createGrid(size) {
    main.innerHTML = '';
    const width = main.offsetWidth;
    let dimension = size * size;
    let divSize = width/size;
    
    for (let i = 0; i < dimension; i++) {
        const item = document.createElement('div');
        main.appendChild(item);
    }
    main.style.gridTemplateColumns = `repeat(${size}, ${divSize}px)`;
    main.style.gridTemplateRows = `repeat(${size}, ${divSize}px)`;
    startDrawing();
}


function startDrawing(color) {
    const blackboard = main.querySelectorAll('div');
    
    blackboard.forEach(item => {
        item.addEventListener('mouseenter', y => {
            changeColor(item, color);
        });
    })
}



function changeColor(div, color) {
       
    switch(color) {
        case 'green':
            div.style.background = 'green';
            break;
        case 'red':
            div.style.background = 'red';
            break;
        default:
            div.style.background = 'yellow';
            break;
    }
}

clear.addEventListener('click', () => {createGrid(input.value)});
input.addEventListener('change', () => {createGrid(input.value)});
zielony.addEventListener('click', () => {startDrawing(zielony.value)});
