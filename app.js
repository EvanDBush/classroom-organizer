const express = require('express');
// Spins up express
const app = express();
// Sets up middleware
app.use((request, response, nextFunction) => {
    //send response
    response.status(200).json({
        message: 'Mic Check one TWO one TWO'
    });
});

module.exports = app;