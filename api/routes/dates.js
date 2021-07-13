const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Date = require('../models/dates')

router.get('/',(request, response, nextFunction) => {
    Date.find()
    .exec()
    .then(documents => {
        console.log(documents);
        response.status(200).json(documents)
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error: err
        })
    });
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
                message: "POST sucessful. resource dates created",
                createdDate: result
            });
        })
    .catch(error => { 
        console.log(error);
        response.status(200).json({
        error: err
        })
    })
});

module.exports = router;