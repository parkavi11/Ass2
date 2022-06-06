class Data {
    constructor(students, courses) {
        this.students = students
        this.courses = courses
    }
}

var dataCollection = null

const fs = require('fs');
const { resolve } = require('path');

filename = '../data/students.json';
type = 'utf8';

function initializeStudent() {
    return new Promise(function(resolve, reject){
      fs.readFile('../data/students.json', type, (err, data) => {
            if(err) {
                reject(err)
            }
            else {
                let sdata = JSON.parse(data)
                resolve(sdata);
            }
      });
    })
  }

  function initializeCourse() {
    return new Promise(function(resolve, reject){
      fs.readFile('../data/courses.json', type, (err, data) => {
            if(err) {
                reject(err)
            }
            else {
                let cdata = JSON.parse(data)
                resolve(cdata);
            }
      });
    })
  }

//   console.log(this.sdata)

// initialize = new Promise(function(resolve, reject){
//     fs.readFile('../data/students.json', 'utf8', function(err, courseData){
//         if (err){
//             // console.log(err); // or reject the promise (if used in a promise)
//             reject;
//         }
//         else {
//             resolve;
//             let sdata = JSON.parse(courseData); // convert the JSON from the file into an array of objects
//             // console.log(sdata);
//         }
//     });
// })

// initialize.then(console.log(courseData), console.log(err))
// function initialize() {

//     fs.readFile('../data/students.json', 'utf8', function(err, courseData){
//         if (err){
//             console.log(err); // or reject the promise (if used in a promise)
//             return; // exit the function
//         }
        
//         let data = JSON.parse(courseData); // convert the JSON from the file into an array of objects
//         // console.log(data);
//     });

//     fs.readFile('../data/courses.json', 'utf8', function(err, coursesData){
//         if (err){
//             console.log(err); // or reject the promise (if used in a promise)
//             return; // exit the function
//         }
        
//         let data = JSON.parse(coursesData); // convert the JSON from the file into an array of objects
//         // console.log(data);
//     });

// }

// initialize();

function getAllStudents() {
    initializeStudent().then(data => {
        courseData = data
        console.log(courseData)
    })

    return new promise ((resolve, reject) => {
        if (courseData == null) {
            reject("No results returned")
        } else {
            resolve("Student data retreived " + courseData)
        }
    })
};

function getTAs() {

}

function getCourses() {
    initializeStudent().then(data => {
        courseData = data
        console.log(courseData)
    })

    return new promise ((resolve, reject) => {
        if (courseData == null) {
            reject("No results returned")
        } else {
            resolve("Course data retreived " + courseData)
        }
    })
}
module.exports = {initialize, getAllStudents, getCourses}
