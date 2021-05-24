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

class Student {
    constructor (lastName, firstName, middleInitial, birthDate, emergencyContact) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.birthDate = birthDate;
        this.emergencyContact = emergencyContact;      
    };
};

const jack = new Student("James", "Bush", "A", "07/04/2020", "123-456-7890");
const jimmy = new Student("Jimothy", "Young", "K", "01/05/2021", "555-555-5555");
const jacques = new Student("Jacques", "Javert", "B", "07/14/2020", "502-574-1566");
const joaquin = new Student("Joaquin", "Vogel", "F", "04/01/2020", "800-723-3288");
const jaime = new Student("Jaime", "Carter", "P", "08/27/2020", "877-615-0914");
const james = new Student("James", "Bond", "D", "03/13/2020", "007-247-7334");
const iago = new Student("Iago", "Jenkins", "X", "06/10/2021", "007-247-7334");
const yakov = new Student("Yakov", "Alexander", "I", "09/21/2020", "007-247-7334");
const jacob = new Student("Jacob", "King", "K", "11/11/2021", "007-247-7334");
const jimbo = new Student("Jimboniface", "Rogers", "Z", "04/01/2020", "007-247-7334");
const giacomo = new Student("Giacomo", "Bond", "S", "03/09/2020", "007-247-7334");
const hamish = new Student("Hamish", "", "F", "06/21/2021", "007-247-7334");
const seamus = new Student("Seamus", "Jones", "D", "10/03/2020", "007-247-7334");
const jimi = new Student("Jameson", "Hendrix", "Q", "01/23/2020", "007-247-7334");

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



