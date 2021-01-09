const main = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const input = document.querySelector('.slider');
const buttons = document.querySelectorAll('.color-picker');
const userPick = document.querySelector('#user-choice');

createGrid(25);

function createGrid(size) {
    const showSize = document.querySelector('p');
    const dimension = size * size;
    showSize.textContent = size + ' x ' + size;
    main.innerHTML = '';
    
    
    for (let i = 0; i < dimension; i++) {
        const item = document.createElement('div');
        main.appendChild(item);
    }
    main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    main.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    startDrawing();
}

function startDrawing(event) {
    const blackboard = main.querySelectorAll('div');
    const colourChoice = this.id;

    blackboard.forEach(item => {
        item.addEventListener('mouseenter', () => {
            changeColor(colourChoice, item);
        });
    });
}

function changeColor(colour, div) {
    switch(colour) {
        case 'eraser':
            div.style.backgroundColor = 'transparent';
            break;
        case 'rainbow':
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = '#' + randomColor;
            break;
        case 'user-choice':
            const userColour = userPick.value;
            div.style.backgroundColor = userColour;
            break;
        default:
            div.style.backgroundColor = 'white';
            break;
    }
}

clear.addEventListener('click', () => {createGrid(input.value)});
input.addEventListener('change', () => {createGrid(input.value)});
buttons.forEach(button => button.addEventListener('click', startDrawing));
userPick.addEventListener('change', startDrawing);
