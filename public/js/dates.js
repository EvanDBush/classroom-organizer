let dateData = null;

document.addEventListener('DOMContentLoaded', function() {
    fetch('/dates')
    .then(result => result.json())
    .then(dates => dateData = dates)
    .then(dates => buildDateList(dates))
    .catch(err => { 
        console.log(err);
    })
    });

function buildDateList(dates) {
    dates.forEach(date => {
        let item = document.createElement('li')
        item.textContent = `${date.name} ${date.date[0]}`
        document.getElementById('date-list').appendChild(item)        
    });
}


// Displays current date
const timeDisplay = document.getElementById('time-display');
const today = new Date();
const [month, day, year] = 
    [today.getMonth(), today.getDate(), today.getFullYear()];

timeDisplay.textContent = `Today's Date: ${[month, day, year]}`;