// Checks for larger height or width and changes container id accordingly
function windowSizeChecker() {
    if (window.innerHeight < window.innerWidth) {
        container.id = 'container-b';
    } else if (window.innerHeight > window.innerWidth) {
        container.id = 'container-a';
    }
}

// Returns random color code
function getColorCode() {
    let makeColorCode = '0123456789ABCDEF';
    let code = '#';
    for (let count = 0; count < 6; count++) {
       code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

// Adds event for when divs color when mouse hovers for current cells
function eventHover() {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getColorCode();
        });
    });
}

// Adds event for setting cells to white for current cells
function eventClear() {
    clear.addEventListener('click', () => {
        cells.forEach((cell) => {
            cell.style.backgroundColor = 'white';
        });
    });
}

// Sets events functions with new object lists after generation
function initalize() {
    cells = document.querySelectorAll('.cell');
    rows = document.querySelectorAll('.row');
    eventHover();
    eventClear();    
}

const container = document.querySelector('#container-a');
const clear = document.querySelector('#clear-button');
windowSizeChecker();

window.addEventListener('resize', () => {
    windowSizeChecker();
});

// Generates 16x16 grid within #container, starting
for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    container.appendChild(gridRow);
    gridRow.classList.add('row');
    for (let i = 0; i < 16; i++) {
        const gridSquare = document.createElement('div');
        gridRow.appendChild(gridSquare);
        gridSquare.classList.add('cell');
    }
}

initalize();

// Change gridSize
const gridChange = document.querySelector('#grid-button');
gridSize = 0;

gridChange.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.remove();
    });
    rows.forEach((row) => {
        row.remove();
    })
    gridSize = prompt('What would you like the grid length and height to be? (Max:100)');
    if (gridSize <= 100) {
        for (let i = 0; i < gridSize; i++) {
            const gridRow = document.createElement('div');
            container.appendChild(gridRow);
            gridRow.classList.add('row');
            for (let i = 0; i < gridSize; i++) {
                const gridSquare = document.createElement('div');
                gridRow.appendChild(gridSquare);
                gridSquare.classList.add('cell');
            }
        }
        
        initalize();

    } else {
        alert('Invalid Input');
    }
})