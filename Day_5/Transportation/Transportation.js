// 1- You're tasked with modeling vehicles and cars in a transportation app:
//     - A Vehicle has type and speed properties.
//     - All vehicles can start and stop.
//     - A Car inherits from Vehicle and has an additional drive method.
//     a- Implement this using ES6 classes
//      - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
//      - the implementation of the methods can be console.log only or you can leave them empty 
//     b- Write a function that checks whether an object is an instance of Car using two different ways


class Vehicle {
    static instancescount = 0 ;

    constructor(type , speed) {
        this.speed = speed ;
        this.type = type;
        Vehicle.instancescount ++;
    }

    checkInstance = function(){
        if (instancescount >= 50) {
            throw new Error('Vehicle limit reached');
        }
    };

   start () {
    console.log("Vehicle start");
   }
  stop () {
    console.log("Vehicle start");
}
}

class Car extends Vehicle{
    constructor(type , speed) {
        super(type , speed);
    }

  start () {
    console.log("Vehicle start");
}
  stop () {
    console.log("Vehicle start");
}
  drive () {
    console.log("Vehicle start");
}
}


function isCarInstance(obj) {
    const check1 = obj instanceof Car;                            //the instanceof operator to check if obj was created using the Car constructor or inherits from its prototype in run time

    const check2 = obj.constructor === Car;

    const check3 =  Object.getPrototypeOf(obj) ===  Car.prototype;   //get prototype of obj and check if it === prototype of Car obj

    const check4 = Car.prototype.isPrototypeOf(obj);                 //check if the prototype of a given object 'Car' exists in the prototype chain of another object.

    const check5 = Reflect.has(obj, 'drive');                       //check if the prototype object contains specific properties or methods that belong to the class

    const check6 = obj.__proto__ === Car.prototype;

    return`Check using instanceof: -> ${check1} \n Check using constructor: -> ${check2} \n Check using Object.getPrototypeOf -> ${check3} \n Check using Object.prototype.isPrototypeOf -> ${check4} \n Check using Reflect.has(object, 'propetry/method') -> ${check5} \n Check using .__prto__ -> ${check6}`;
}

try {
    const car1 = new Car('Sedan', 120);
    console.log('Is car1 a Car instance?'+ '\n', isCarInstance(car1));
    console.log(car1);
    car1.start();
    car1.stop();
    car1.drive();
    console.log('Vehicle instance count:', instanceCounter);  //1


    const vehicle1 = new Vehicle('Truck', 80);
    console.log('Is vehicle1 a Car instance?'+'\n', isCarInstance(vehicle1)); //false
    console.log(vehicle1);
    vehicle1.start();
    vehicle1.stop();

    //vehicle1.drive();// throw not a function in veihcle
    console.log('Vehicle instance count:', instanceCounter);
    
    for (let i = 0; i < 50; i++) {  //create 50 instance of veihcle
        new Vehicle('Car' + i, 100);
    }
    console.log('Vehicle instance count: ', instanceCounter);  //52 throw limted
} catch (error) {
    console.error(error.message);
}

