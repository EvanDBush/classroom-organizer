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

router.patch('/:classroomId',(req, res, nextFunction) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
    }
    Classroom.save({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
        console.log(result);
        res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            error: err
            });
        });
});

module.exports = router;