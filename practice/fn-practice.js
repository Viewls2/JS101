// declaration + hoisting
// Myinfo('Mahasamut');
// function Myinfo(name) {
//     console.log('Hello ' + name);
// }


// expression + hoisting
// myInfo('View');
// const myInfo = function(name){
//     console.log('Hello ' + name);
// };


// arrow function (from defining fn.)
// const myinfO = Name => console.log('Hello '+Name);
// myinfO('VIEW');


// chain(?) passing arguments
function addNum(a,b) {
        return a+b;
}
let x = addNum(2,4);
let y =x;
console.log(y);