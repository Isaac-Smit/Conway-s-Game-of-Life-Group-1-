/*SECTION - Got user inputs working :)
const readlineSync = require('readline-sync');
let userAnswer = readlineSync.question('Please pick a number from 3-6 here: ');
if (userAnswer === 3 || userAnswer === 4 || userAnswer === 5 || userAnswer === 6) {
    console.log('Ah yes, what a great number that is!');
}  else {
    let userAnswer2 = readlineSync.question('That number is out of my range of expertise. Please pick another number from 3-6 here: ');
    console.log('Thank you very much, your input is much appretiated!')
}
*/

/*const readlineSync = require('readline-sync');
let userAnswerX = readlineSync.question("Please input an x value from 1-10")
    if (userAnswerX isInRange(value); {
        typeof value === 'number' && value >= 1 && value <= 10;
} ) return ("thanks! now your y value, again a value from 1-10") {
    else (return )
}
*/

const readlineSync = require('readline-sync');

// Function to check if a value is within the range of 1 to 10
function isInRange(value) {
  return typeof value === 'number' && value >= 1 && value <= 10;
}

// Prompt the user to input an x value between 1 and 10
let userAnswerX;
do {
  userAnswerX = parseFloat(readlineSync.question("Please input an x value from 1 to 10: "));
} while (!isInRange(userAnswerX));

console.log("Thanks!");

// Prompt the user to input a y value between 1 and 10
let userAnswerY;
do {
  userAnswerY = parseFloat(readlineSync.question("Now your y value, again a value from 1 to 10: "));
} while (!isInRange(userAnswerY));

console.log("Thanks!");

// You can now use userAnswerX and userAnswerY for further processing
 
// userAnswerX and userAnswerY
