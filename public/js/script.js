let studentData = null;
// Gets student data from API. Stores as studentData.
document.addEventListener('DOMContentLoaded', function() {
fetch('/students')
.then(result => result.json())
.then(students => studentData = students)
.catch(err => { 
    console.log(err);
})
});

//---builds list of students-------
const studentList = document.getElementById('class-list')

async function buildList(studentData) {
    await studentData.forEach(student => {
        let item = document.createElement('li')
        item.textContent = `${student.firstName} ${student.lastName}`
        studentList.appendChild(item)        
    });
}

async function clickDisplayStudent(studentData, event) { 
    const selectedName = event.target;
    const nameArray = selectedName.textContent.split(" ");
    await studentData;
    getStudentInfo(studentData, nameArray)
}

studentList.addEventListener('click', (event) => {
    buildList(studentData);
    clickDisplayStudent(studentData, event);
})

// displays student information. Separate from above function
function getStudentInfo(studentData, nameArray) {
    studentData.forEach(student => {
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

form.addEventListener('submit', logSubmit)

//---Gets student list from students.json
// document.addEventListener('DOMContentLoaded', function() {
// fetch('/students')
// .then(result => result.json())
// .then(students => buildList(students))
// .catch(err => { 
//     console.log(err);
// })
// });