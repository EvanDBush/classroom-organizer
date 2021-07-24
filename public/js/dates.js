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

const dateList = document.getElementById('date-list');

function buildDateList(dates) {
    dates.forEach(date => {
        let item = document.createElement('li')
        item.textContent = `${date.name} ${date.date[0]}`
        dateList.appendChild(item)        
    });
}

dateList.addEventListener('click', (event) => {
const dateNameClicked = event.target.textContent.split(" ");
dateData.forEach(date => {
    if (date.name.split(" ")[0] === dateNameClicked[0]) {
        let descriptionP = document.createElement('p');
        descriptionP.textContent = `${date.name}: ${date.description}`;
        document.getElementById('test').appendChild(descriptionP);
    }
})
})


// Displays current date
const timeDisplay = document.getElementById('time-display');
const today = new Date();
const [month, day, year] = 
    [today.getMonth(), today.getDate(), today.getFullYear()];

timeDisplay.textContent = `Today's Date: ${[month, day, year]}`;