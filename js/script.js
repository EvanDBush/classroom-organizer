//---Gets student list from students.json
document.addEventListener('DOMContentLoaded', function() {
fetch('./js/students.json')
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


const classList = document.getElementById('class-list')
classList.addEventListener('click', (event)=> { 
    const selectedName = event.target;
    const nameArray = selectedName.textContent.split(" ");
    fetch('./js/students.json')
    .then(result => result.json())
    .then(students => getStudentInfo(students, nameArray))
})

function getStudentInfo(students, nameArray) {
    students.forEach(student => {
        if (student.firstName === nameArray[0] && student.lastName === nameArray[1]) {
        document.getElementById('student-information').textContent = student.firstName//what is the best way to display this object?
        }
    })
}
