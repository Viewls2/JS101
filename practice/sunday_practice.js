// 26/03/23 sunday practice (by friends)

//find sum valur in object(sum money)
const myObj = {
    a : 50,
    b : 100,
    c : 250
  }
  console.log(myObj); // check obj
  function sum(myObj) {
    let result = 0;
    for (let i in myObj) {
      result += myObj[i]
    }
    return result
  }
  console.log(sum(myObj));
  
  // กำลังสองarray
  const arr = [2, 3, 4, 8, 12];
  function powArr(arr) {
    for (let i = 0 ; i < arr.length; i++) {
      return arr[i]**2;
    }
  }
  powArr(arr); // output : [4, 9, 16, 64, 144]
  console.log(arr)
  
  
  // 6.) ให้เติมคำว่า kendo,judo,basketball ต่อท้าย swimming ใน array
  
  const sports = ['boxing', 'football', 'swimming', 'biking'];
  sports.splice(3,0,'kendo','judo','basketball');
  console.log(sports)
  
  // result = [ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]
  
  
  // return age greater than 20
  const arrInfo = [
    { name: 'Benji', age: 30 },
    { name: 'Nas', age: 20 },
    { name: 'Sayo', age: 22 },
    { name: 'Sapari', age: 16 },
    { name: 'Storm', age: 27 }
  ];
  // function filter (arrInfo) {
  //     const newArr = []
  //     arrInfo.forEach(element => {
  //         if (arrInfo.age > 20) {
  //             newArr.push(element)
  //         }
  //     });
  //     return newArr
  // }
  const filter1 = arrInfo => arrInfo.filter(e => e.age > 20)
  filter1(arrInfo)
  // [ { name: 'Benji', age: 30 },{ name: 'Sayo', age: 22 },{ name: 'Storm', age: 27 } ]
  
  // หา index ที่ id = 3
  
  const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
    { id: 4, name: 'Football' }
  ];
  const findId = tasks.findIndex(object => {
    return object.id === 3;
  });
  console.log(findId)
  // return 2
  
  
  // square(n)sum
  // const sqrtSum = arrNum => {
  //   let result = 0;
  //   arrNum.forEach(e => {
  //     return arrNum.reduce((acc, Value) => {
  //     return acc + Value ** 2;
  //   }, 0);
  //   return result;
  // }
  
function sqrtSum(inputNum){
    let square = inputNum.reduce((acc, curVal) => {
      return acc + curVal ** 2;
    }, 0);
    return square;
  }
sqrtSum([2,4,3])
//   const squareSum = (int) => {
//     let total = 0
//     int.forEach(e => total += e**2)
//     return total
//   }
//   squareSum(input)



// remove todos list
const todos = [
    { id: 1, title: 'reading' , completed: false},
    { id: 2, title: 'workout' , completed: true},
    { id: 3, title: 'cooking' , completed: true},
    { id: 4, title: 'coding' , completed: false},
  ]
// console.log(todos);
const deleteTodo = n => {       //function
    const deleteId = todos.findIndex(e => {
      return e.id === n;      // find id(n) = your input , e = element in obj
    })
    todos.splice(deleteId,1);  // splice array: deleteId = index found, 1 = remove
  }
deleteTodo(3);
console.log(todos);
