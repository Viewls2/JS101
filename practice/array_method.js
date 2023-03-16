// .forEach : do for each element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((item,index) => {
    console.log(index,item); //log index for 'each' element
});

const letters = ['a','b','c', 'd', 'a', 'c', 'a'];
let count = {};          //create empty object to keep track the count
letters.forEach(item =>{
    if (count[item]){   //check if we have an letter in
        count[item]++;  // count for count iterations
    }else{
        count[item] = 1;
    }
    console.log(count); // log count for each loop
});

// .map : do something for each element & return value
const storeUSD = [5,6,7,8];
// const storeEUR = storeUSD.map(value => value*=0.85)  //arrow function
// console.log(storeUSD);
// console.log(storeEUR);
function toEUR(value) {
    value *=0.85;
    return value;
}
let storeEUR =storeUSD.map(toEUR);
console.log(storeUSD);
console.log(storeEUR);

// .filter :  filter something out from 'original array' to 'new array'
const allNumber = [1,-1,2,-2,3]
const filtered = allNumber.filter(n => n>=0); //filter +int to new array
console.log(filtered); // 1 2 3
const fruits = ['apple','banana','orange','avocado']
const selectedFruit = fruits.filter(n => n!= 'orange'); //not equal 'orange'
console.log(selectedFruit); 

randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;       
  });
  console.log(smallNumbers);    // only num less than 250

  
//   .reduce : like sum -- can because for sum in your shopping basket
const baskets = [1, 2, 3, 4, 5];
//a=1, c=2 => 3
//a=3, c=3 => 6
//a=6, c=4 => 10
//a=10, c=5 => 15 

const sum = baskets.reduce((accumulator,currentValue) => accumulator+currentValue);
console.log(sum); //1+2+3+4+5 =15