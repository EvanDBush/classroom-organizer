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

router.patch('/:id',(req, res, nextFunction) => {
    const id = req.params.id;
    Classroom.findByIdAndUpdate(id,
        { $set: req.body }, { new: true})
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