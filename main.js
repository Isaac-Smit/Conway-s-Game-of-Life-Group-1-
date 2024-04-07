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

/*<<<<<<< HEAD
=======
let userAnswer = readlineSync.question('Please pick where in the grid you want to start: ');
>>>>>>> 
/*
// will accept coordinates (1-10, 1-10)
//wont accept: anything else

//for the input, it checks the surrounding 8 cells

// *four rules applied here*
// if neighbourSum = 

//runs it through for dead cells as well - if three neighbours are alive, the cell comes alive

// prints array

// asks for next input */