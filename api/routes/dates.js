const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Date = require('../models/dates')

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'handling GET request to /dates'
    })
});

router.post('/',(request, response, nextFunction) => {
    const date = new Date ({
        _id: new mongoose.Types.ObjectId(),
        name: request.name,
        date: request.date,
        description: request.description,
        noWork: request.noWork,
    });
    date
        .save()
        .then(result =>{
            console.log(result);
            response.status(201).json({
                message: "POST sucessful. resource dates created"
            })
        })
    .catch(error => console.log(error));
        response.status(200).json({
        message: 'handling POST request to /dates'
    })
});

module.exports = router;