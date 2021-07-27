let dateData = null;

const timeDisplay = document.getElementById('time-display');
const today = new Date();
const [month, day, year] = 
    [today.getMonth(), today.getDate(), today.getFullYear()];

timeDisplay.textContent = `Today's Date: ${month}/${day}/${year}`;

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
        date.date.forEach(day => new Date(day));
    })
    const sortedDateData = dates.slice().sort((a,b) => b.date[0] - a.date[0])
    sortedDateData.forEach(date => {
        let item = document.createElement('li')
        item.textContent = `${date.name} ${date.date[0]}`
        dateList.appendChild(item)        
    });
}

dateList.addEventListener('click', (event) => {
    const dateNameClicked = event.target.textContent.split(" ");
    dateData.forEach(date => {
        if (date.name.split(" ")[0] === dateNameClicked[0]) {
            let descriptionP = document.getElementById('descriptionP');
            descriptionP.textContent = `${date.name}: ${date.description}`;
            
            const daysTill = Math.floor(((new Date(date.date[0]).getTime()) - today.getTime())/(1000 * 60 * 60 * 24))
            let counterP = document.getElementById('counterP');
            counterP.textContent = `${daysTill} days until ${date.name} !!!`
        }
    })
})


