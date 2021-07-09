const express = require('express')
const router = express.Router();

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'GET request to /classrooms'
    })
});

router.post('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'POST request to /classrooms'
    })
});

module.exports = router;