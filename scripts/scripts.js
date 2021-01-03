const main = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const input = document.querySelector('.slider');
const buttons = document.querySelectorAll('.color-picker');
const userPick = document.querySelector('#user-choice');

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
        item.addEventListener('mouseover', () => {
            changeColor(item, color);
        });
    })
}

function changeColor(div, color) {
    switch(color) {
        case 'green':
            div.style.backgroundColor = 'green';
            break;
        case 'rainbow':
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = '#' + randomColor;
            break;
        case 'white':
            div.style.backgroundColor = 'white';
            break;
        default:
            let userColour = userPick.value;
            div.style.backgroundColor = userColour;
            break;
    }
}

clear.addEventListener('click', () => {createGrid(input.value)});
input.addEventListener('change', () => {createGrid(input.value)});
buttons.forEach(button => button.addEventListener('click', ()=> {startDrawing(button.value)}));
userPick.addEventListener('change', () =>{startDrawing(userPick.value)});
