const readlineSync = require('readline-sync');

let initialGrid = [];
let cycleCount = 0

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

function yesNo() {
  let continueResponse = readlineSync.question("Do you want to continue? (yes/no): ");
  if (continueResponse.toLowerCase() === 'no') {
    return false;
  } else if (continueResponse.toLowerCase() === 'yes') {
    return true;
  } else {
    yesNo();
  }
}



function isInRange(value) {
  return typeof value === 'number' && value >= 1 && value <= 10;
}

printGrid();

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
checkCells
  console.log("Updated Grid:");
  cycleCount++;
  console.log(`Count ${cycleCount}`)
  printGrid();

  let continueResponse = readlineSync.question("Do you want to continue? (yes/no): ").toLowerCase();
  while (continueResponse !== 'yes' && continueResponse !== 'no') {
    let continueResponse = readlineSync.question("Do you want to continue? (yes/no): ").toLowerCase();
    if (continueResponse === 'no') {
      break outerLoop;
    }
  }

  if (continueResponse === 'no') {
    break;
  }
}

//  else {
    //console.log("The world is going to end")
// }
  

//}

console.log("Thanks for using the program!")