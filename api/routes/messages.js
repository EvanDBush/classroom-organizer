const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/messages');

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'GET request to /messages'
    })
});

router.post('/',(request, response, nextFunction) => {
    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        headline: request.headline,
        content: request.content,
        poatDateDate: request.postDate,
        classrooms: request.classrooms
    });
    message
        .save()
        .then(result => {
            console.log(result);
            response.status(201).json({
                message: "handling POST requsts to /messages"
            })
        })
    .catch(error => console.log(error));
    response.status(200).json({
        message: 'POST request to /messages',
        createdMessage: message
    })
});

router.delete('/:messageId',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Deleted Message!'
    })
});

module.exports = router;