const express = require('express');
// Spins up express
const app = express();
// Sets up logger
const morgan = require('morgan');
// Sets up Mongoose
const mongoose = require('mongoose');
// Sets up routes
const studentRoutes = require('./api/routes/students');
// const classroomRoutes = require('./api/routes/classrooms'); //unsure about how i want to construct
const dateRoutes = require('./api/routes/dates');
// const messageRoutes = require('./api/routes/messages'); //unsure about how i want to construct
//connects to database
mongoose.connect(
    'mongodb+srv://demo-user1:' + 
    process.env.MONGO_ATLAS_PW + 
    '@cluster0.tnvmw.mongodb.net/classroomDB?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
)
// Sets up middleware
// runs routes through logger
app.use(morgan('dev'));
//runs through body parser
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
// app.use('/classrooms', classroomRoutes);  // HOLD for organizing
app.use('/dates', dateRoutes);
// app.use('/messages', messageRoutes); // HOLD for organizing

//handle errors that pass middleware
app.use((request, response, nextFunction) => {
    const error = new Error('Not Found');
    error.status = 404;
    //forwards error request
    nextFunction(error)
})
// return 500 error
app.use((error, request, response, nextFunction) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;