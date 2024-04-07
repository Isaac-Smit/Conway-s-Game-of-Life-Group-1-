const readlineSync = require('readline-sync');

let grid =  [[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], 
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]]]

grid.forEach(row => {
    let rowString = '';
    row.forEach(element => {
        rowString += JSON.stringify(element);
    });
    console.log(rowString);
});

let userAnswer = readlineSync.question('Please pick where in the grid you want to start: ');