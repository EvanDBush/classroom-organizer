const mongoose = require('mongoose')
const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    headline: String,
    content: String,
    postDate: Date,
    classrooms: Array
})

module.exports = mongoose.model('Message', messageSchema);