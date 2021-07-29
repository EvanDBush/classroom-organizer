<img src="./public/img/badtz2.png" style= "width: 200px;">

# iinchou: a classroom organizer

***

"iinchou" is Japanese for "class representative". That is exactly what this app strives to be! It is intended for an admin and teachers to organize students into classrooms. I hope to expand it to handle important holidays/ days off. and maybe an attendance and messaging system.

***
***
### Installation Instructions:
Requires Node.js. Please download and install.

1. Clone repository from github. "https://www.github.com/EvanDBush.classroom-organizer"

2. Install node dependencies. "npm install" in project directory terminal.

3. Create "nodemon.json" file in root level of classroom-organizer directory.

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

***
***

## Features:

***
### 1. [x] Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)

***

The dates information is first fetched and converted to JSON format.
```
document.addEventListener('DOMContentLoaded', function() {
    fetch('/dates')
    .then(result => result.json())
    .then(dates => dateData = dates)
    .then(dates => buildDateList(dates))
    .catch(err => { 
        console.log(err);
    })
    });
```
This dates data is then displayed as a list on the page.

```
const dateList = document.getElementById('date-list');
function buildDateList(dates) {
    dates.forEach(date => {
        date.date.forEach(day => new Date(day));
    })
    const sortedDateData = dates.slice().sort((a,b) => b.date[0] - a.date[0])
    sortedDateData.forEach(date => {
        let item = document.createElement('li')
        item.textContent = `${date.name} ${date.date[0]}`
        dateList.appendChild(item)        
    });
}
```
***

### 2. [x] Post to an external API and show that it has saved/persisted
Used html form and then created API with mongoose to handle form and submit it to the database.
message returned upon successful post. Also can verify it has saved/persisted by refreshing the page. Created student should be in class list.

```
router.post('/',(req, res, nextFunction) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleInitial: req.body.middleInitial,
        birthDate: req.body.birthDate,
        parentName: req.body.parentName,
        phoneContact: req.body.phoneContact,
        emailContact: req.body.emailContact,
        inSchool: req.body.inSchool,
        allergies: req.body.allergies
    });
    student
        .save()
        .then(result => {
            res.status(200).json(result);
            console.log(`createdStudent: ${result}`)
        })
        .catch(err => { 
            console.log(err);
            res.status(500).json({
            error: err
            })
        })
});
```

---

### 3. [x] Create a form and save the values (on click of Submit button) to an external file

used post route above and built a form. 
```
<form  method="post" action="/students" id="student-form" class="hide" style="display: none;">
    <fieldset>
        
    </fieldset>
    <button type="submit"> Submit </button
</form>
```
**You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted.

Student created by form should now be sorted into class lists upon page refresh. If the students birthdate is outside the class ranges, the student should be found in the "unassigned" class list.

***

### 4. [x] Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

***
-classroom array. push students to class based on birthdate.

***
### 5. [x]  Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

-function getStudentInfo()

***
### 6. [x]  Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

-click on important date. tells how many days until that date.

Additional Features you can include but may not be covered by Treehouse:

***
### 7. [x]  Create a web server with at least one route and connect to it 
from your application using ExpressJS

-set up student routes POST, GET.


***
scroll: https://codepen.io/shippin/pen/vLXyWR

spreadsheet link: https://docs.google.com/spreadsheets/d/1UPrq3MV0_NqX6EdSiI7d4MPOP7YxV4YGap2EDXCmcsM/edit?usp=sharing