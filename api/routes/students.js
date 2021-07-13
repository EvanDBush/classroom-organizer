const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/students')

router.get('/',(request, response, nextFunction) => {
    Student.find()
        .exec()
        .then(documents => {
            console.log(documents);
            response.status(200).json(documents);
        })
        .catch(err => {
            console.log(err);
            response.status(500).json({
                error: err
            })
        })
    });

router.post('/',(request, response, nextFunction) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        firstName: request.firstName,
        lastName: request.lastName,
        middleInitial: request.middleInitial,
        birthDate: request.birthDate,
        parentName: request.parentName,
        phoneContact: request.phoneContact,
        emailContact: request.emailContact,
        inSchool: request.inSchool,
        allergies: request.allergies
    });
    student
        .save()
        .then(result => {
        console.log(result);
        response.status(201).json({
            message: "handling POST requests to /students",
            createdStudent: result
        });
    })
    .catch(err => { 
        console.log(err);
        response.status(500).json({
            error: err
        })
    })
});


router.get('/:studentId',(request, response, nextFunction) => {
    const id = request.params.studentId;
    Student.findById(id)
    .exec()
    .then(document => {
        console.log('From database', document);
        if (document) {
            response.status(200).json(document);
        } else {
            response.status(404).json({
                message: "No entry found for ID provided"
            })
        }
        
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({error: error});
    })
});

router.patch('/:studentId',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Updated Student info!'
    })
});

router.delete('/:studentId',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Deleted Student info!'
    })
});

module.exports = router;
