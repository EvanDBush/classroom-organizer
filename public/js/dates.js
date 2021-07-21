// const fs = require('fs');

// fs.readFile('./data/calender.json', (err, data) => {
//     if (err) throw err;
//     let dateData = JSON.parse(data);
//     dateData.forEach(date => {
//         const p = document.createElement("p");
//         p.textContent = `${date.name}: ${date.date[0]} `
//         document.getElementById("test").appendChild(p);
        
//     })
// });


// Displays current date
const timeDisplay = document.getElementById('time-display');
const today = new Date();
const [month, day, year] = 
    [today.getMonth(), today.getDate(), today.getFullYear()];

timeDisplay.textContent = `Todays Date: ${[month, day, year]}`;