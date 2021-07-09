const express = require('express');
// Spins up express
const app = express();
// Sets up routes
const studentRoutes = require('./api/routes/students');
const classroomRoutes = require('./api/routes/classrooms');
const dateRoutes = require('./api/routes/dates');
const messageRoutes = require('./api/routes/messages');

// Sets up middleware
app.use('/students', studentRoutes);
app.use('/classrooms', classroomRoutes);
app.use('/dates', dateRoutes);
app.use('/messages', messageRoutes);

module.exports = app;