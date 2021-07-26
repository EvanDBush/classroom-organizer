class Student {
    constructor(
        id, 
        firstName, 
        lastName, 
        middleInitial, 
        birthDate, 
        parentName, 
        phoneContact, 
        emailContact, 
        inSchool, 
        allergies ) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.middleInitial = middleInitial;
            this.birthDate = birthDate;
            this.parentName = parentName;
            this.phoneContact = phoneContact;
            this.emailContact = emailContact;
            this.inSchool = inSchool;
            this.allergies = allergies; 
        }
    get ageInDays() {
        const today = new Date();
        let ageInDays = (today.getTime() - student.birthDate.getTime())/(1000* 60 * 60 * 24);
        return ageInDays;
    }
}
// const age = Math.floor((todaysDate.getTime() - bDay.getTime()) / (1000 * 60 * 60 * 24));
        // console.log(`${student.firstName} ${student.lastName} is ${age} days old.`);