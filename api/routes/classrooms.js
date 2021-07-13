const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Classroom = require('../models/classrooms')

router.get('/',(req, res, nextFunction) => {
    Classroom.find()
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    });
// POST to classroom.students? should be patch??
// router.patch('/:classroomId',(req, res, nextFunction) => {
//     const id = req.params.classroomId;
//     Classroom.findByIdAndUpdate(id)
//     .exec()
//     .then()// Look up patch
//     res.status(200).json({
//         message: 'handling POST req to /classrooms'
//     })
// });

module.exports = router;