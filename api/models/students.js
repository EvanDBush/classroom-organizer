const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    middleInitial: String,
    birthDate: Date,
    phoneContact: String, //Should this be a number?
    emailContact: String,
    inSchool: Boolean,
    allergies: String
})

module.exports = mongoose.model('Student', studentSchema);