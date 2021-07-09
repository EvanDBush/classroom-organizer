const express = require('express');
const router = express.Router();

router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'GET request to /students'
    })
});

router.post('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'POST request to /students'
    })
});

router.get('/:studentId',(request, response, nextFunction) => {
    const id = request.params.studentId;
    if (id === 'special') { //configure to ids
        response.status(200).json({
            message: 'You have found the special ID',
            id: id
        });
    } else {
        response.status(200).json({
            message: 'You passed an ID'
        })
    }
});

router.patch('/:studentId',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Updated Student info!'
    })
});

router.delete('/:studentId',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Deleted Student info!'
    })
});

module.exports = router;
