let userInfo = {
    userName: 'Mahasamut',
    homeTown: 'Bangkok',
    role : 'student',
    favFood: ['Noodle','ข้าวมันไก่','Fried rice'], 
    age: 20,
    hobbies : ['Photo','Game','Music'],
    greetingInfo () {
        console.log(`Hi, my name is ${this.userName}. I am ${this.age} yearold ${this.role} from ${this.homeTown}.`);
    }
}

userInfo.greetingInfo();

// คุณนุ้ก
// const bankAccount = {
//     name : 'Johnny',
//     bank : 'SVB',
//     amount : 100000,
//     deposit(money){
//       console.log(`you deposit ${money}, your balance is ${this.amount+money}`)
//     },
//     withdraw(money){
//       console.log(`you withdraw ${money}, your balance is ${this.amount-money}`)
//     },
//     show(){
//       if(this.amount > 10000){
//       console.log(`Hello ${this.name}, this is ${this.bank} bank, your balance is ${this.amount} you got interest ${this.amount*0.25} per year`)
//       }else{
//         console.log(`Please contact ${this.bank} bank`)
//       }
//     }
//   }
  
//   bankAccount.deposit(500)
//   bankAccount.withdraw(1000)
//   bankAccount.show()


// คุณกาย
// const myObj = { 
//     firstName : 'Chaiyaphon' ,
//     lastName : 'Yuyod' , 
//     nickName : 'Skay',
//     fullName (){ 
//       return (`My Name is ${myObj.firstName}  ${myObj.lastName} you can call me ${myObj.nickName} `)
//     }
//   };
  
//   console.log(myObj.fullName());

// พี่มีน
function IceCreamMaking(flavor, type, toppings) {
    this.type = type;
    this.flavor = flavor;
    this.toppings = toppings;
  
    this.make = function () {
      return `${this.flavor.charAt(0).toUpperCase()}${this.flavor.slice(1)} ${
        this.type
      } served with ${this.toppings.slice(
        0,
        toppings.length - 1
      )} and ${this.toppings.slice(-1)}. 😉`;
    };
  }
  
  const vanillaFlavor = new IceCreamMaking("vanilla", "gelato", [
    "almond",
    "caramel suace",
  ]);
  
  console.log(vanillaFlavor.make());
  
  const mintChocChip = new IceCreamMaking("Mint Chocolate Chip", "ice cream", [
    "choclate sauce",
    "hazelnut",
    "cherry",
  ]);
  console.log(mintChocChip.make());
  
  const strawberryYogurt = new IceCreamMaking("strawberry", "frozen yogurt", [
    "strawberry",
    "whipped cream",
    "strawberry sauce",
  ]);
  console.log(strawberryYogurt.make());
  
  
//   function showProps(obj, objName) {
//     let result = "";
//     for (let i in obj) {
//       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//       if (obj.hasOwnProperty(i)) {
//         result += objName + "." + i + " = " + obj[i] + "\n";
//       }
//     }
//     return result;
//   }
//   console.log(showProps(vanillaFlavor, "vanillaFlavor"));
  
//   function showProps2(obj, objName) {
//     let result = "";
//     for ([key, value] of Object.entries(obj)) {
//       if (obj.hasOwnProperty(key)) {
//         result += objName + "." + key + " = " + value + "\n";
//       }
//     }
//     return result;
//   }
//   console.log(showProps2(vanillaFlavor, "vanillaFlavor"));

let x =''
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

// for (let i in myObj.cars) {
//   x +=  `${myObj.cars[i].name}` + '\n';
//   for (let j in myObj.cars[i].models) {
//     x += '-' + myObj.cars[i].models[j] + '\n';
//   }
// }
console.log(myObj);
// document.getElementById("")