const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/messages');

router.get('/',(req, res, nextFunction) => {
    Message.find()
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
    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        headline: req.headline,
        content: req.content,
        poatDateDate: req.postDate,
        classrooms: req.classrooms
    });
    message
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "handling POST requsts to /messages"
            })
        })
    .catch(error => console.log(error));
    res.status(200).json({
        message: 'POST request to /messages',
        createdMessage: message
    })
});

router.delete('/:messageId',(req, res, nextFunction) => {
    const id = req.params.productId;
    Message.remove({ _id: id })
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