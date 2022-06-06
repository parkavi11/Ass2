/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Parkavi Student ID: 150994218 Date: 5 JUNE 2022
*
********************************************************************************/
const Data = require("./modules/collegeData");

 

let collegeData = new Data();

collegeData.initialize()
.then((data) => {
    collegeData.getAllStudents(data.students)
    .then(students => {
        console.log(students.length + " students data retrieved successfully")
    })
    .catch(error => {
        console.log(error)
    });

    collegeData.getCourses(data.courses)
    .then(courses => {
        console.log("Successfully retreived " + courses.length + " data from Courses")
    })
    .catch(error => {
        console.log(error)
    });

    collegeData.getTAs(data.students).then(tas => {
        // console.log(tas);
        console.log("Successfully retrived " + tas.length + " TAs");
    }).catch(error => {
        console.log(error);
    });
})
.catch(error => {
    console.log(error)
});