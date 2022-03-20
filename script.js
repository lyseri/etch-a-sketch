// Returns random color code
function getColorCode() {
    let makeColorCode = '0123456789ABCDEF';
    let code = '#';
    for (let count = 0; count < 6; count++) {
       code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

const container = document.querySelector('#container-a');

// Checks for larger height or width and changes container id accordingly
window.addEventListener('resize', () => {
    if (window.innerHeight < window.innerWidth) {
        container.id = 'container-b';
    } else if (window.innerHeight > window.innerWidth) {
        container.id = 'container-a';
    }
});

// Generates 16x16 grid within #container
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

// Change divs color when mouse hovers
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getColorCode();
    });
});