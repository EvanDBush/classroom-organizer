const path = require('path');

// Base file name
console.log(path.basename((_filename)));

// Directory name
console.log(path.extname(_filename));

// Create path object
console.log(path.parse(_filename).base);

// Concatenate paths
console.log(path.join(_dirname,'test','hello.html')) 