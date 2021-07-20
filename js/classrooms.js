class Classroom {
    constructor( roomName, ageRange, students) {
    this.roomName = roomName;
    this.ageRange = ageRange;
    this.students = students;
    }

    addStudent(student) {
        this.students.push(student);
    }
}

const schoolYearStartDate = new Date(08/01/2021);
const todaysDate = new Date();


const figs = new Classroom('figs', [6/30/2021, 1/1/2021], []);
const grapes = new Classroom('grapes', [12/31/2020, 7/1/2020], []);
const lemons = new Classroom('lemons', [6/30/2020, 1/1/2020], []);
const apples = new Classroom('apples', [12/31/2019, 7/1/2019], []);
