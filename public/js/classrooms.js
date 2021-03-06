class Classroom {
    constructor( roomName, ageDates, students) {
    this.roomName = roomName;
    this.ageDates = ageDates;
    this.students = students;
    }
}

const schoolYearStartDate = new Date('08/01/2021');
const todaysDate = new Date();

const figs = new Classroom('figs', ["06/30/2021", "01/01/2021"], []);
const grapes = new Classroom('grapes', ["12/31/2020", "07/01/2020"], []);
const lemons = new Classroom('lemons', ["06/30/2020", "01/01/2020"], []);
const apples = new Classroom('apples', ["12/31/2019", "07/01/2019"], []);
const allStudents = new Classroom('all', ["06/30/2021", "07/01/2019"], []);
const waitList = new Classroom('unassigned', ["07/01/2019", "06/30/2021"], []);

let classroomsArray = [figs, grapes, lemons, apples, allStudents, waitList];
const classroomList = document.getElementById('classroom-ulist')

classroomsArray.forEach(classroom => {
    let listItem = document.createElement('li')
    listItem.textContent = `${classroom.roomName}`
    classroomList.appendChild(listItem)
})

classroomList.addEventListener('click', (event) => {
    const roomClicked = event.target.textContent;
    organizeByAge(studentData, roomClicked);
    console.log(roomClicked)
});

function organizeByAge(studentData, roomClicked) {
    const classroom = classroomsArray.find((room) => room.roomName === roomClicked);
    studentData.forEach((student) => {
        const bDay = new Date(student.birthDate);
        if ((bDay <= new Date(classroom.ageDates[0])) && (bDay >= new Date(classroom.ageDates[1]))) {
            classroom.students.push(student);   
        }       
    });
    if (classroom === waitList) {
        studentData.forEach((student) => {
            const bDay = new Date(student.birthDate);
            if ((bDay <= new Date(classroom.ageDates[0])) | (bDay >= new Date(classroom.ageDates[1]))) {
                classroom.students.push(student);   
            }
        })
    }
    buildList(classroom.students);
}
