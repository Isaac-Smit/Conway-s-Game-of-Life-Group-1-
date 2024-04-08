const readlineSync = require('readline-sync');

let initialGrid = [];


function isInRange(value) {
  return typeof value === 'number' && value >= 1 && value <= 10;
}

let grid = [];
for (let i = 0; i < 10; i++) {
  grid.push(new Array(10).fill(0));
}

function printGrid() {
  grid.forEach(row => {
    console.log(row.join(' '));
  });
}

while (true) {

  let userAnswerX;
  do {
    userAnswerX = parseFloat(readlineSync.question("Please input an x value from 1 to 10: "));
  } while (!isInRange(userAnswerX));

  let userAnswerY;
  do {
    userAnswerY = parseFloat(readlineSync.question("Now your y value, again a value from 1 to 10: "));
  } while (!isInRange(userAnswerY));

  let xValue = userAnswerX - 1;
  let yValue = userAnswerY - 1;

  grid[yValue][xValue] = 1;

  console.log("Updated Grid:");
  printGrid();

  let continueResponse = readlineSync.question("Do you want to continue? (yes/no): ");
  if (continueResponse.toLowerCase() !== 'yes') {
    break;
  }
}
 
console.log("Thanks for using the program!");