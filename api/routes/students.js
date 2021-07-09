const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Student = require('../models/students')

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'GET request to /students'
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
    student.save();
    response.status(200).json({
        message: 'POST request to /students',
        createdStudent: student 
    })
});

router.get('/:studentId',(request, response, nextFunction) => {
    const id = request.params.studentId;
    if (id === 'special') { //configure to ids
        response.status(200).json({
            message: 'You have found the special ID',
            id: id
        });
    } else {
        response.status(200).json({
            message: 'You passed an ID'
        })
    }
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
