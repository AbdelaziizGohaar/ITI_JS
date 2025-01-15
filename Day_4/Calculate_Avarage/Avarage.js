// Anoyominus function 
Array.prototype.average = function(){      
    //if array is empty
    if (this.length === 0){
        console.error('Cannot calculate the average of an empty array');
        return null;
    }
    let sum = 0;
    for (let i=0; i<this.length; i++){
        if (isNaN(this[i])) {
            console.error("Array must contain only numeric elements.");
            return null;
        }
        sum+= Number(this[i]);                //Number like paresInt but more safa in narrow casses will return NaN
    }
return sum /this.length;
}


var arr = [1, 2, 3, 4];
console.log("Average of Array -> "+ arr +' : ' + arr.average() +"\n");

var arr2 = [];
console.log("Average of Array -> "+ arr2 +' : ' + arr2.average() +"\n");

var arr3 = ['a', 'b', 'c', 'f'];
console.log("Average of Array -> "+ arr3 +' : ' + arr3.average() +"\n");

var arr4 =["123abc"];
console.log("Average of Array -> "+ arr4 +' : ' + arr4.average() +"\n");

/*
Create an array method that calculates the average for an array of numbers.
    ex: var arr = [1, 2, 3, 4]
        arr.average() // should return the average
    Note: Handle validation

*/