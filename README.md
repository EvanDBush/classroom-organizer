# iinchou: a classroom organizer

"iinchou" is Japanese for "class representative". That is exactly what this app strives to be! It is intended for an admin and teachers to organize students into classrooms. I hope to expand it to handle important holidays/ days off. and maybe an attendance and messaging system.

### Installation Instructions:
1. Clone repository from github. "https://www.github.com/EvanDBush.classroom-organizer"

2. Install node dependencies. "npm install" in project directory terminal.

3. Create "nodemon.json" file in root directory.

4. Inside the file. Create an object to store the password for the database.

```
{
    "env": {
        "MONGO_ATLAS_PW": "password"
    }
}
```

5. replace "password" with string given in project submission form. (remember to use double quotes for valid JSON).

6. In the terminal run "npm start". this will begin nodemon and open a server on port 3000.

7. In the browser url type "localhost:3000" to view the application.


### Features List:

1. [x]Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app.

-retrieves dates from server. want to add from JSON file as well.

2. [x] Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)

- retrieves students from server

3. [x] Post to an external API and show that it has saved/persisted

- post request to /students
status: works using postman and html form.

4. [x] Create a form and save the values (on click of Submit button) to an external file

-student-form... should be achieved by above feature.

**You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

5. [x] Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

-classroom array. push students to class based on birthdate.

6. [x]  Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

-function getStudentInfo()

7. [x]  Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

-click on important date. tells how many days until that date.

Additional Features you can include but may not be covered by Treehouse:

8. [x]  Create a web server with at least one route and connect to it 
from your application using ExpressJS

-set up student routes POST, GET.



scroll: https://codepen.io/shippin/pen/vLXyWR

spreadsheet link: https://docs.google.com/spreadsheets/d/1UPrq3MV0_NqX6EdSiI7d4MPOP7YxV4YGap2EDXCmcsM/edit?usp=sharing