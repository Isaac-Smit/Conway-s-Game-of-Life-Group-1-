//SECTION - Got user inputs working :)
const readlineSync = require('readline-sync');
let userAnswer = readlineSync.question('Please pick a number from 3-6 here: ');
if (userAnswer === 3 || userAnswer === 4 || userAnswer === 5 || userAnswer === 6) {
    console.log('Ah yes, what a great number that is!');
}  else {
    let userAnswer2 = readlineSync.question('That number is out of my range of expertise. Please pick another number from 3-6 here: ');
    console.log('Thank you very much, your input is much appretiated!')
}