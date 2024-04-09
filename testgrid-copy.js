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

// iterating through x and y axis of the grid
function checkCells (){
  for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
          const neighbours = checkNeighbours ( x, y);
          //NOTE -  changed the paramaters checkNeighours function is taking to just (x, y)
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
// This math forces the values to loop around the edges of the grid. e.g. (9 + 1 + 10) % 10 = 20 % 10 = 0
              const resultX = (x + offsetX + 10) % 10;
              const resultY = (y + offsetY + 10) % 10;

              result += grid[resultX][resultY]
          }
      } 
  }
  return result;
}


function printGrid() {
  grid.forEach(row => {
    console.log(row.join(' '));
  });
}

function yesNo(question) {
  let continueResponse = readlineSync.question(`${question} (yes/no): `);
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


function getuserInput (){
let userInputting = true
while (userInputting){
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
printGrid()
userInputting = yesNo("Do you want to coninue adding cells?")
}}



//NOTE - fixed while loop so it stops when you say no.
printGrid();
//NOTE - properly declared control variable for the while loop. "gameRunning" instead of "True" which = Infinite loop
let gameRunning = true
while (gameRunning) {
 if(yesNo("Do you want to add cells?")) getuserInput()
  checkCells()


  console.log("Updated Grid:");
  cycleCount++;
  console.log(`Count ${cycleCount}`)
  printGrid();
  gameRunning =yesNo("Do you want to continue the simulation?");
//NOTE -  here we reference gameRunning and have it "=" yesNo function
}
console.log("Thanks for using the program!")