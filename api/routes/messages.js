const express = require('express')
const router = express.Router();

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'GET request to /messages'
    })
});

router.post('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'POST request to /messages'
    })
});

router.delete('/:messageId',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Deleted Message!'
    })
});

module.exports = router;