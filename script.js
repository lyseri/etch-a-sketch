const contain = document.querySelector('#container');


// Generates 16x16 grid within #container
for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    contain.appendChild(gridRow);
    gridRow.classList.add('row');
    for (let i = 0; i < 16; i++) {
        const gridSquare = document.createElement('div');
        gridRow.appendChild(gridSquare);
    }
}