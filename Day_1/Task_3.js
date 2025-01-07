

var cars = ["Dark Knight ", "Intersteller", "Last Samurai","the Prestige"];
var movies = cars;
console.log("a");
console.log(movies);

console.log("b");
cars[2] ="GodFather";
console.log(cars);

console.log("c");
cars[2] ="GodFather";
console.log(cars[3]);
let delmovie = cars.pop();
console.log(delmovie);
console.log(cars.at(2));

console.log("d");
cars.unshift("Wolf of wall street");
console.log(cars);
/*
(3) create an array with your favourite movies
a- copy the array into a different variable
b- replace the third element with a different movie
c- return the last array item in 3 different ways
d- add a new movie to the beggining

*/