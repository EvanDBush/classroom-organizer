const mongoose = require('mongoose')
const dateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    date: Date,
    description: String,
    noWork: Boolean,
})

module.exports = mongoose.model('Date', dateSchema);