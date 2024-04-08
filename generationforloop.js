
// iterating through x and y axis of the grid
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

// checking the neighbours of cells with offset values
function checkNeighbours (x, y){
    let result = 0
    for(let offsetX = -1; offsetX<=1; offsetX++) {
        for(let offsetY = -1; offsetY<=1; offsetY++) {
            if(!(offsetX == 0 && offsetY == 0)) {
                const resultX = (x + offsetX + x) % x;
                const resultY = (y + offsetY + y) % y;
                console.log(`X = (${x} + ${offsetX} + ${x}) % ${x} = ${resultX}`);
                console.log(`Y = (${y} + ${offsetY} + ${y}) % ${y} = ${resultY}`);

                result += grid[resultX][resultY]
            }
        } 
    }
    return result;
}