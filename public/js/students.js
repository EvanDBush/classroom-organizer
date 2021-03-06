class Student {
    constructor( 
        firstName, 
        lastName, 
        middleInitial, 
        birthDate, 
        parentName, 
        phoneContact, 
        emailContact, 
        inSchool, 
        allergies ) {
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