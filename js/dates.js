'use strict';
const fs = require('fs');

fs.readFile('./data/calender.json', (err, data) => {
    if (err) throw err;
    let dateData = JSON.parse(data);
    console.log(dateData);
});
console.log('calender read by fs module');

// Displays current time
const timeDisplay = document.getElementById('time-display');
const today = new Date();
const [month, day, year] = 
    [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = 
    [date.getHours(), date.getMinutes(), date.getSeconds()];

timeDisplay.textContent = `Todays Date: ${[month, day, year]}`;