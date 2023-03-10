// let string
let nameNum = 'test1234';
console.log(nameNum)
// string concatenation
let firstName = 'Mahasamut'; 
let lastName = 'Khemjinda';
let fullName = firstName + ' ' + lastName
let inFo = `My name is ${fullName}`; //back tick to use function inline
console.log(inFo)
console.log(fullName.length) // length of string

// find letter ,boolean
let myName = 'view';
let findletter = myName.includes("c");
console.log(findletter); //should be false

// undefined : variable has been named but nothing inside(not assigned)
let age;
console.log(age);
// null : named variable but clear(nothing) value

// order of operation B I D M A S
let ans = 5 * (10-3)**2;
console.log(ans);

// array
let selectFruits = [['apple','banana','orange'],['tomato','grape','peach']];
console.log(selectFruits[1][2]); // output >> peach
selectFruits[1][2] = 'pineapple';
console.log(selectFruits[1][2]); // pineapple >> peach


// odject 
let user = {
        firstName: 'Mahasamut',
        lastName: 'Khemjinda',
        email: 'mahasamut.kh@gmail.com',
        age: 20,
        computer: ['html','css','js'],

    }

console.log(user);
console.log(user.email);
user.age = 23;
console.log(user.age); //use name.object for inside object
console.log(user.computer[0]); //use brackets for use array

// change type
let x =23; 
console.log(typeof x);// number
x = 'View';
console.log(typeof x);// string

// enough for today ;-;



