//---Gets student list from students.json
document.addEventListener('DOMContentLoaded', function() {
fetch('./data/students.json')
.then(result => result.json())
.then(students => buildList(students))
})

//---builds list of students-------
const studentList = document.getElementById('class-list')
function buildList(students) {
    students.forEach(student => {
        let item = document.createElement('li')
        item.textContent = `${student.firstName} ${student.lastName}`
        studentList.appendChild(item)        
    });
}

//--- Hides Student Form------
const formButton = document.getElementById('form-button')
const studentForm = document.getElementById('student-form')
formButton.addEventListener('click', ()=>{
    if (studentForm.style.display == 'none') {
        studentForm.style.display = 'block'
    } else {studentForm.style.display ='none'}
})

// gets students from JSON. 
const classList = document.getElementById('class-list')
classList.addEventListener('click', (event)=> { 
    const selectedName = event.target;
    const nameArray = selectedName.textContent.split(" ");
    fetch('./data/students.json')
    .then(result => result.json())
    .then(students => getStudentInfo(students, nameArray))
})

// displays student information. Separate from above function
function getStudentInfo(students, nameArray) {
    students.forEach(student => {
        if (student.firstName === nameArray[0] && student.lastName === nameArray[1]) {
        document.getElementById('student-information').innerHTML = 
            `${student.firstName} ${student.lastName} <br> 
            Parent Name: ${student.parentName} <br>
            Emergency Contact: ${student.phoneContact} <br>
            Email Contact: ${student.emailContact} <br>
            Date of Birth: ${student.birthDate} <br>
            Allergies: ${student.allergies}` 
        }
    })
}

// submits student form to db NOT FINISHED
const form = document.getElementById('student-form');
const log = document.getElementById('log')

function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
};

form.addEventListener('submit', logSubmit)