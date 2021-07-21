const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {}

// Init object 
const myEmiter = new MyEmitter();

// Event listener
MyEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmiter.emit('event');
myEmiter.emit('event');
myEmiter.emit('event');
myEmiter.emit('event');