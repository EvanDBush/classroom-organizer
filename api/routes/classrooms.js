const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Classroom = require('../models/classrooms')

router.get('/',(request, response, nextFunction) => {
    Classroom.find()
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
// POST to classroom.students? should be patch??
// router.patch('/:classroomId',(request, response, nextFunction) => {
//     const id = request.params.classroomId;
//     Classroom.findByIdAndUpdate(id)
//     .exec()
//     .then()// Look up patch
//     response.status(200).json({
//         message: 'handling POST request to /classrooms'
//     })
// });

module.exports = router;