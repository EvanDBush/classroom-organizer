class Classroom {
    constructor( roomName, ageDates, students) {
    this.roomName = roomName;
    this.ageDates = [new Date(ageDates[0]), new Date(ageDates[1])];
    this.students = students;
    }
}

const schoolYearStartDate = new Date(08/01/2021);
const todaysDate = new Date();

const figs = new Classroom('figs', ["06/30/2021", "01/01/2021"], []);
const grapes = new Classroom('grapes', ["12/31/2020", "07/01/2020"], []);
const lemons = new Classroom('lemons', ["06/30/2020", "01/01/2020"], []);
const apples = new Classroom('apples', ["12/31/2019", "07/01/2019"], []);

let classroomsArray = [figs, grapes, lemons, apples]
const classroomList = document.getElementById('classroom-ulist')

classroomsArray.forEach(classroom => {
    let listItem = document.createElement('li')
    listItem.textContent = `${classroom.roomName}`
    classroomList.appendChild(listItem)
})

classroomList.addEventListener('click', (event) => {
    const roomClicked = event.target.textContent;
    organizeByAge(studentData, roomClicked);
});

function organizeByAge(students, roomClicked) {
    const classroom = classroomsArray.find((room) => room.roomName === roomClicked);
    students.forEach((student) => {
        const bDay = new Date(student.birthDate);
        if ((classroom.ageDates[1] >= bDay) && (bDay >= classroom.ageDates[0])) {
            classroom.students.push(student);
        }        
    });
}

