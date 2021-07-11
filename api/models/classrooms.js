const mongoose = require('mongoose')
const classroomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    maxStudents: Number,
    agesDates: Array,
    students: Array
})

module.exports = mongoose.model('Classroom', classroomSchema);