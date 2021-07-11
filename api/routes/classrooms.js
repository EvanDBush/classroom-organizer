const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Classroom = require('../models/classrooms')

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'handling GET request to /classrooms'
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