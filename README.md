# iinchou: a classroom organizer

"iinchou" is Japanese for "class representative". That is exactly what this app strives to be! It is intended for an admin and teachers to organize students into classrooms. I hope to expand it to handle important holidays/ days off. and maybe an attendance and messaging system. 

Features List:
[] 1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app.

[x] 2. Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)

- retrieves students from server

[] 3. Post to an external API and show that it has saved/persisted

- post request to /students
status: works using postman. want to try and connect it to html form


Example: Use Amazon S3’s API to upload a file to an AWS S3 bucket

[] 4. Create a form and save the values (on click of Submit button) to an external file

-student-form... should be achieved by above feature.

**You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

[x] 5. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

-classroom array. push students to class based on birthdate.


[x] 6. Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

-function getStudentInfo()

[] 7. Implement a log that records errors, invalid inputs, or other important events and writes them to a text file

[] 8. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

-regex student-form. i dont want to. but i'm pretty sure its necessary.


[x] 9. Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

-click on important date. tells how many days until that date.

Additional Features you can include but may not be covered by Treehouse:


[x] 11. Create a web server with at least one route and connect to it 
from your application using ExpressJS

-set up student routes POST, GET.



scroll: https://codepen.io/shippin/pen/vLXyWR

spreadsheet link: https://docs.google.com/spreadsheets/d/1UPrq3MV0_NqX6EdSiI7d4MPOP7YxV4YGap2EDXCmcsM/edit?usp=sharing