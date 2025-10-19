const lab = require('./lab-two.js');
const readlineSync = require('readline-sync');

const year = parseInt(readlineSync.question("Enter year: "));
const month = parseInt(readlineSync.question("Enter month: "));
const day = parseInt(readlineSync.question("Enter day: "));
const weekday = lab.getDayOfTheWeek(year, month, day);
console.log(` ${month}-${day}-${year} is a ${weekday}.`);
    
