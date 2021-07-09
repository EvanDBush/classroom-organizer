const express = require('express')
const router = express.Router();

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'GET request to /dates'
    })
});

router.post('/',(request, response, nextFunction) => {
    const date = {
        holiday: request.holiday,
        date: request.date,
        description: request.description,
        noWork: request.noWork,
    }
    response.status(200).json({
        message: 'POST request to /dates'
    })
});

module.exports = router;