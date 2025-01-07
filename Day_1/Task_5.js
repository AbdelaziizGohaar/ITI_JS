
var name = prompt("What's your Name?", "Gohaar");
var Grades = [90,50,30,10];
var Grades_ans = prompt("What's your Grades?", Grades);

var Grades_arr =  Grades_ans.split(",");

function GradesPromp(name,Grades_arr) {

    if (name) {
        console.log("Hello " + name + "! How are you today?");  
      }
    console.table(Grades_arr);   //
}

GradesPromp(name,Grades_arr);

/*
(5) Create a function that takes the following:
    a- User name using prompt ( required)
    b- User Grades in one prompt in the format: 
        “90,50,30,10”
    Welcome the user by Name on console
    and display grades as table on console
    after that show the average grade of user’s grades.

*/