class Classroom {
    constructor(classroomName, leadTeacher) {
        this.classroomName = classroomName;
        this.leadTeacher = leadTeacher;
        this.students = [];
        this.teachers = [];

    };
};

const peppers = new Classroom("Peppers", "Mary");
const grapes = new Classroom("Grapes", "Terry");
const apples = new Classroom("Apples", "Carey");
const oranges = new Classroom("Oranges", "Berry");
const pears = new Classroom("Pears", "Gerri" );
const pineapples = new Classroom("Pineapples", "Perry");
const apricots = new Classroom("Apricots", "Arry");
const lemons = new Classroom("Lemons", "Laoghaire");

const classrooms = [peppers, grapes, apples, oranges, pears, pineapples, apricots, lemons]
class Student {
    constructor (firstName, lastName, middleInitial, birthDate, emergencyContact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.birthDate = birthDate;
        this.emergencyContact = emergencyContact;      
    };
};

class Teacher {
    constructor(lastName, firstName, position, wage) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.position = position;
        this.wage = wage;
    };
}

const randomFirstName = [
    "Sophia", "Liam", "Olivia", "Noah", "Riley", "Jackson", "Emma", "Aiden",
    "Ava", "Elijah", "Isabella", "Grayson", "Aria", "Lucas", "Aaliyah", "Oliver",
    "Amelia", "Caden", "Mia", "Mateo", "Layla", "Muhammad", "Zoe", "Mason", "Camilla",
    "Carter", "Charlotte", "Jayden", "Eliana", "Ethan", "Mila", "Sebastian", "Everly",
    "James", "Luna", "Michael", "Avery", "Benjamin", "Evelyn", "Logan", "Harper", "Leo",
    "Lily", "Luca", "Ella", "Alexander", "Daniel", "Charlie", "Henry", "Isla",	"Jayce",
    "Ellie", "Julian", "Leah",	"Jack", "Nora",	"Ryan", "Scarlett",	"Jacob", "Maya", 
    "Asher", "Abigail", "Wyatt", "Madison", "William", "Aubrey", "Owen", "Emily", 
    "Gabriel", "Kinsley",	"Miles", "Elena", "Lincoln", "Paisley","Ezra", "Madelyn", "Isaiah",
    "Aurora", "Luke", "Peyton", "Cameron", "Nova", "Caleb", "Emilia", "Isaac", "Hannah", "Carson",
    "Sarah", "Samuel", "Ariana", "Colton", "Penelope", "Maverick", "Lila",	"Matthew"

    ];
const randomMiddleInitial = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const randomLastName = [
"Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", 
"Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White",
"Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark",
"Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez",
"King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson",
"Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans",
"Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell",
"Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", 
"Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes",
"Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", 
"Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin",
"Diaz", "Hayes",
];

function makeRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function makeRandomName() {
    return randomFirstName[makeRandomInteger(0,randomFirstName.length)] 
        + " " + 
        randomMiddleInitial[makeRandomInteger(0,randomMiddleInitial.length)] 
        + " " + 
        randomLastName[makeRandomInteger(0,randomLastName.length)];
};

const hideButton = document.getElementById('hide-button')
const formDiv = document.getElementById('form-div')
hideButton.addEventListener('click',()=>{
    if (formDiv.style.display == 'none') {
        formDiv.style.display = 'block'
    } else {
        formDiv.style.display = 'none'
    }
})

const classroomList = document.getElementById('classroom-list')
classrooms.forEach(classroom => {
    let listItem = document.createElement('li')
    listItem.textContent = 
        `Classroom: ${classroom.classroomName} /\n/
        Teacher: ${classroom.leadTeacher}`
    classroomList.appendChild(listItem)
})