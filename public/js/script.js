let studentData = null;
let daysUntilNextBirthDay = null;
// Gets student data from API. Stores as studentData.
document.addEventListener('DOMContentLoaded', function() {
fetch('/students')
.then(result => result.json())
.then(students => studentData = students)
// .then(students => buildList(students))
.catch(err => { 
    console.log(err);
})
});

//---builds list of students-------
const studentList = document.getElementById('class-list')

function buildList(studentData) {
    studentData.forEach(student => {
    let item = document.createElement('li')
    item.textContent = `${student.firstName} ${student.lastName}`
    studentList.appendChild(item)        
    });
}

studentList.addEventListener('click', (event) => {
    const selectedName = event.target;
    const nameArray = selectedName.textContent.split(" ");
    getStudentInfo(studentData, nameArray);
});


function getStudentInfo(studentData, nameArray) {
    studentData.forEach(student => {
        if (student.firstName === nameArray[0] && student.lastName === nameArray[1]) {
            
            document.getElementById('student-information').innerHTML = 
                `${student.firstName} ${student.lastName} <br> 
                Parent Name: ${student.parentName} <br>
                Emergency Contact: ${student.phoneContact} <br>
                Email Contact: ${student.emailContact} <br>
                Date of Birth: ${student.birthDate} <br>
                Allergies: ${student.allergies} <br>` 
        }
    })
}

//--- Hides Student Form------
const formButton = document.getElementById('form-button')
const studentForm = document.getElementById('student-form')
formButton.addEventListener('click', ()=>{
    if (studentForm.style.display == 'none') {
        studentForm.style.display = 'block'
    } else {studentForm.style.display ='none'}
})

// submits student form to db NOT FINISHED
const form = document.getElementById('student-form');
const log = document.getElementById('log')

function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = new FormData(form);
    fetch('/students', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})

//---Gets student list from students.json
// document.addEventListener('DOMContentLoaded', function() {
// fetch('/students')
// .then(result => result.json())
// .then(students => buildList(students))
// .catch(err => { 
//     console.log(err);
// })
// });

// function daysUntilBirthday(student) {
//     const bDayArray = student.birthDate.split('/');
//     const nextBirthday = new Date(today.getFullYear, bDayArray[0], bDayArray[1])
//         if (today.getTime() > nextBirthday.getTime()) {
//             nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
//         }
//     let daysUntilNextBirthDay = Math.floor((nextBirthday.getTime() - today.getTime())/(1000 * 60 * 60 * 24))
//     return daysUntilNextBirthDay;
//     }