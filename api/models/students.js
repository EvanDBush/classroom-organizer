const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleInitial: { type: String, required: true },
    birthDate: { type: Date, required: true },
    parentName: { type: String, required: true },
    phoneContact: { type: String, required: true },
    emailContact: { type: String, required: true },
    inSchool: { type: String, required: true },
    allergies: { type: String, required: true }
})

module.exports = mongoose.model('Student', studentSchema);