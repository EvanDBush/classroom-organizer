const http = require('http');
const app = require('./app')

const port = process.env.PORT || 3000;
const server = http.createServer(app);

//Start server
server.listen(port, () => {
    console.log(`the server is running on port: ${port}`)
});