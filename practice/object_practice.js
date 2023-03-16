// object literal
let myCar = {
    made : 'BMW',
    model : 'e34',
    year : 1987,
    drive : function () {
        console.log('Driving car');
    }
};
console.log(myCar);
console.log(myCar.made);
console.log(myCar['model']);

// factory function : like factory produce the products
function carCar (make,model) {
    return {
        make,model,
        drive() {
            console.log(drive);
        }
    }
}   // new parameter
const newCar = new carCar('Honda',2005);
console.log(newCar);

// what if we have to make more car? >> newCar2 newCar3 ... newCarN???
// object constructor (constructor fn.) like template or blueprint
// start with UPPERCASE letter
let Car = function (make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(name) {
        // console.log(`${name} is driving car `); // include undefined *cm1*
        // name is driving car 
        // undefined
        return `${name} is driving this car`;
    }
    // console.log(this);
}
let myCar2 = new Car('Nissan','s13',1993);
console.log(myCar2);
// myCar2.drive('Mark')  *cm1*
console.log(myCar2.drive('Mark'));
let myCar3 = new Car('Subaru','wrx',1999);
console.log(myCar3);
// myCar3.drive('Zoom')  *cm1*
console.log(myCar3.drive('Zoom')); 