const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());
// Host (root domain)
console.log(myUrl.host)
// Hostname (no PORT)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathanme);
// Serialized Query
console.log(myURl.search);
// Params object 
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123')
// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
