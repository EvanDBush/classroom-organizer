const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/students')

router.get('/',(req, res, nextFunction) => {
    Student.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    });

router.post('/',(req, res, nextFunction) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.firstName,
        lastName: req.lastName,
        middleInitial: req.middleInitial,
        birthDate: req.birthDate,
        parentName: req.parentName,
        phoneContact: req.phoneContact,
        emailContact: req.emailContact,
        inSchool: req.inSchool,
        allergies: req.allergies
    });
    student
        .save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: "handling POST reqs to /students",
            createdStudent: result
        });
    })
    .catch(err => { 
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});


router.get('/:id',(req, res, nextFunction) => {
    const id = req.params.id;
    Student.findById(id)
    .exec()
    .then(doc => {
        console.log('From database', doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: "No entry found for ID provided"
            })
        }
        
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: error});
    })
});

router.patch('/:id',(req, res, nextFunction) => {
    const id = req.params.id;
    Student.findByIdAndUpdate(id,
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

router.delete('/:studentId',(req, res, nextFunction) => {
    const id = req.params.productId;
    Student.remove({ _id: id })
        .exec()
        .then(result => {
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
