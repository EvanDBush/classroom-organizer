const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// routes
const studentRoutes = require('./api/routes/students');
const classroomRoutes = require('./api/routes/classrooms');
const dateRoutes = require('./api/routes/dates');
const messageRoutes = require('./api/routes/messages');

mongoose.connect('mongodb+srv://demo-user1:' +process.env.MONGO_ATLAS_PW+ '@cluster0.tnvmw.mongodb.net/ClassRoomDB?retryWrites=true&w=majority',
{ useUnifiedTopology: true, useNewUrlParser: true }).
catch(error => handleError(error));

mongoose.connection.on('error', err => {
    logError(err);
});

//  middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //simple bodies
app.use(express.json());
// Headers to prevent CORS errors
app.use((request, response, nextFunction) => {
    response.header('Access-Control-Allow-Origin', '*'); //could limit access here
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (request.method === 'OPTIONS') {
        //supported requests
        response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return response.status(200).json({});
    }
    nextFunction();
});

app.use('/students', studentRoutes);
app.use('/classrooms', classroomRoutes);
app.use('/dates', dateRoutes);
app.use('/messages', messageRoutes);

//handle errors that pass middleware
app.use((request, response, nextFunction) => {
    const error = new Error('Not Found');
    error.status = 404;
    nextFunction(error)
})

app.use((error, request, response, nextFunction) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;