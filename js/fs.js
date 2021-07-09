
// // Create folder
// fs.makedir(path.join(_dirname,'test',{}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// }));

// // Create and write to file

// fs.writeFile(path.join(_dirname,'test','hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to...')
// });

// // Append File 
// fs.appendFile(path.join(_dirname,'test','hello.txt'), 'Whats up!', err => {
//     if (err) throw err;
//     console.log('File written to...')
// });

// // Read File
// fs.readFile(path.join(_dirname,'/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const fs = require('fs');
let studentData = [];

// Read students.JSON file
fs.readFile('students.JSON', 'utf8', function(err, data) {
    if(err){ console.log(err);
    } else {
        console.log('Student file read');
        studentData = data;
        console.log(studentData)
    } 
})

let newStudent = {
    "firstName": "Janey",
    "lastName": "Storm-Crow",
    "middleInitial": "K",
    "birthDate": "06/02/2020",
    "parentName": "Starchild Storm-Crow",
    "phoneContact": "867-207-7234",
    "emailContact": "wiccanwarrior.outlook.com",
    "inSchool": "true",
    "allergies": "none"
}

//Writes new student to students.JSON 
fs.appendFile('students.JSON', newStudent, err => {
    if(err){ console.log(err);
    } else {
        console.log('Student file written to');
        console.log(studentData)
    } 
})


