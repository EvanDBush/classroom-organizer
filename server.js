// get http and app module
const http = require('http');
const app = require('./app')
// assign port from envirionment or set at 3000
const port = process.env.PORT || 3000;

const server = http.createServer(app);

//Start server
server.listen(port, () => {
    console.log(`the server is running on port: ${port}`)
});

// app.get("/", (req, res) => {
//     res.render('index');
// });