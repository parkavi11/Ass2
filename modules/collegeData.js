var fs = require('fs');
let dataCollection = null;

class Data {
    constructor(students, courses) {
        this.students = students
        this.courses = courses
    }

   
    initialize() {
        var sdata;
        var cdata;

        return new Promise(function(resolve, reject){
            try {
                const data = fs.readFileSync('./data/students.json', 'utf8');
                sdata = JSON.parse(data)
            } catch (err) {
                reject(err)
            }
    
            try {
                const data = fs.readFileSync('./data/courses.json', 'utf8');
                cdata = JSON.parse(data)
            } catch(err) {
                reject(err)
            }

            dataCollection = new Data(sdata,cdata)

            resolve(dataCollection)

            console.log(sdata)
        });
    }

    

    getAllStudents(students) {
        return new Promise (function(resolve, reject) {
            if (students.length == null) {
                reject("No results returned")
            } else {
                resolve("Retreived " + students.length + " records")
            }
        })
    };

    getCourses(courses) {
        return new Promise (function(resolve, reject) {
            if (courses.length == null) {
                reject("No results returned")
            } else {
                resolve("Retreived " + courses.length + " records")
            }
        })
    }

    getTAs(students){
        return new Promise(function(resolve, reject){
                
            if (students.length > 0) {
                let taStudents = [];
                students.forEach(element => {
                    if(element.TA){
                        taStudents.push(element);
                    }
                });

                if(taStudents.length <= 0 ){
                    reject("There are no TA true in student");
                }
             
                resolve(taStudents);

            } else {
                reject("There are no students");
            }
          });
      }
}

module.exports = Data
