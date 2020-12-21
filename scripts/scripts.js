const main = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const input = document.querySelector('input');

createGrid(100);

function createGrid(size) {
    const width = main.offsetWidth;
    let dimension = size * size;
    let divSize = width/size;

    for (let i = 0; i < dimension; i++) {
        const item = document.createElement('div');
        main.appendChild(item);
    }
    main.style.gridTemplateColumns = `repeat(${size}, ${divSize}px)`;
    main.style.gridTemplateRows = `repeat(${size}, ${divSize}px)`;
}



const wybierz = main.querySelectorAll('div');

wybierz.forEach(function (div) {
    div.addEventListener('mouseenter', function () {
        div.style.background = 'green';
    })
})

function  wyczysc(to) {
    to.forEach(function (div) {
        div.style.background = 'black';
    })
}

clear.addEventListener('click', function() {
    wyczysc(wybierz);
});

input.addEventListener('change', function () {
    wyczysc(wybierz);
    createGrid(input.value);
    console.log(input.value);
})
