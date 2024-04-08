

function checkCells (){
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const neighbours = checkNeighbours (grid, x, y);
            if (grid[x][y] === 1) {
                if (neighbours < 2 || neighbours > 3) {
                    grid[x][y] = 0;
                }
            } else {
                if (neighbours === 3) {
                    grid[x][y] = 1;
                }
            }
            }
        }
    }
function checkNeighbours (){
    for()
}