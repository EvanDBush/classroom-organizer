const express = require('express');
// Spins up express
const app = express();
// sets up logger
const morgan = require('morgan');
// Sets up routes
const studentRoutes = require('./api/routes/students');
const classroomRoutes = require('./api/routes/classrooms');
const dateRoutes = require('./api/routes/dates');
const messageRoutes = require('./api/routes/messages');

// runs routes through logger
app.use(morgan('dev'));

// Sets up middleware
app.use('/students', studentRoutes);
app.use('/classrooms', classroomRoutes);
app.use('/dates', dateRoutes);
app.use('/messages', messageRoutes);

//handle errors that pass middleware
app.use((request, response, nextFunction) => {
    const error = new Error('Not Found');
    error.status = 404;
    //forwards error request
    next(error)
})
// return 500 error
app.use((error, request, response, nextFunction) => {
    response.status(err.status || 500);
    response.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;