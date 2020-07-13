/*          //////// primitive data types in a javscript //////////
   var firstname='john cina';   // string
    var age=23; //numbers
    var ok=true; //boolean
   var name=; //undefined
*/

/*              ////// type corsion and Mutation of the variables  ///////////
//ES-5
var firstname = "john";
var age = 23;
console.log("My name is " + firstname + " and i am  " + age + " year old");

//ES-6
console.log(`my name is ${firstname} and i am ${age} year old`);
*/

/////functions////////

/* function calculateage(birthyer) {
  return 2018 - birthyer;
}

function retiryer(year, firstname) {
  var age = calculateage(year);
  var retir = 65 - age;
  console.log(`${firstname} retires in a ${retir} years`);
}
console.log(retiryer(1923, "pratik"));
*/

//////////////////function expression/////////////////////
/*var calculateage = function(firstname, lastname) {
  console.log(
    `my name is ${firstname} and my lastname is ${lastname}. Thankyou `
  );
};

console.log(calculateage("pratik", "john"));
*/

/////////////////// Arrays///////////////////////
//there are the two ways two initialize the array

/*  var names = ["john", "rahul", "mike", "hazel"];

var ages = new Array(23, 56, 45, 25, 45, 22, 78);

var john = new Array("pratik", 1996, "mike", 56, 1996);

//mutation of arrays
names[0] = "mike";
console.log(names);

//we can apply method on the arrys also
//push

names.push("harry");
console.log(names);

names.pop();
console.log(names);

names.shift();

console.log(names);
*/

////////   objects and the properties//////

//in a Object we can define a key value pair ....in Object we can store a diffrent data type variable swhich belong to a same grp .... ////
// EXAMPLE//

/*  var scot = {
  firstname: "scot",
  lastname: "scarlet",
  profession: "student",
  ismarried: false,
  age: 23,
  hobbies: ["cricket", "basketball", "watching"]
};
console.log(scot);
scot.age = 25; //we can mutate the data in the object
console.log(scot); */

//diffrenece between the objects and array are the in array order matters a lot but in the object order does not matters///

///////////////////////////////////METHODS///////
//Methods are a functions which are attached to the objects
/*
var scot = {
  firstname: "scot",
  lastname: "scarlet",
  profession: "student",
  ismarried: false,
  hobbies: ["cricket", "basketball", "watching"],
  birthyer: 1996,
  calcage: function() {
    this.age = 2019 - this.birthyer;
  }
};

scot.calcage();
console.log(scot);

var mosh = {
  firstname: "mosh",
  lastname: "hamidani",
  birthyer: 1996,
  calage: function() {
    this.age = 2019 - this.birthyer;
  },
  iselgible: function() {
    if (this.age >= 18) {
      console.log("He/she is eligible for the driving license");
      this.license = "ok";
    } else {
      console.log("he is not eligible for the license");
      this.license = "not-ok";
    }
  }
};

mosh.calage();
console.log(mosh);
mosh.iselgible();
console.log(mosh);


/*
 //////loops////////////
           we use loops to automate the repetative task/////
    */

// var john = ["marry", "leo", "natsu", "naruto", 1996, "jane", 89];
// for (var i = john.length - 1; i >= 0; i--) {
//   // if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

///////////////////loops and highr order function ////////////////

///traditional for loop //////

/*cinaages=[21,25,45,95,65,36,89,15,46,83,27,92,47,89,29];

for(let i=0;i<ages.length;i++){
console.log(ages[i]);*/

//////for-each////
/*ages = [21, 25, 45, 95, 65, 36, 89, 15, 46, 83, 27, 92, 47, 89, 29];

ages.forEach(ages => {
  console.log(ages);
});*/
/////////////////filter//////////////
/*ages = [21, 25, 45, 95, 65, 36, 89, 15, 46, 83, 27, 92, 47, 89, 29];
////usinf old method/////////
let candrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    candrink.push(ages[i]);
  }
}
console.log(candrink);*/

//using filter method////
// ages = [21, 25, 45, 95, 65, 36, 89, 15, 46, 83, 27, 92, 47, 89, 29];
// const candrink = ages.filter(function(ages) {
//   if (ages >= 21) {
//     return true;
//   }
// });
// console.log(candrink);
///using es6/////
// ages = [21, 25, 45, 95, 65, 36, 89, 15, 46, 83, 27, 92, 47, 89, 29];
// const candrink = ages.filter(ages => (ages >= 21 ? true : false));

// console.log(candrink);

/////////////////////////////////MAP METHOD////////////////////
// let names = ["meena", "deena", "leena", "sam", "lora", "james"];

////WITH THE HELP OF THE MAP WE CAN CREATE A NEW ARRAY///////

// const nav = names.map(function(name) {
//   return `my name is ${name} `;
// });
// console.log(nav);

////////////// functin constructor///////////////
// var Person = function(name, yearofbirth, job) {
//   this.name = name;
//   this.yearofbirth = yearofbirth;
//   this.job = job;
// };

// var john = new Person("johny", 1996, "teacher");
///the new operator will create a whole new empty object and then the this keywpord points out to the new empty object;////
///we also us e a prototype to pur=t all themethods and properties so that other object will inherit it/////
//////////////prototype////////////
// Person.prototype.calculateage = function() {
//   console.log(2019 - this.yearofbirth);
// };

/////////prctice problem////////////
/*
var Car = function(model, color, price, avg) {
  this.model = model;
  this.color = color;
  this.price = price;
  this.avg = avg;
};
Car.prototype.discount = function() {
  console.log(this.price - 2000);
  console.log("this is your discount happyyy diwali");
};

var skoda = new Car(2019, "black", 5000, 27.5);
var rapid = new Car(2018, "grey", 7000, 22.5);
var maruti = new Car(2019, "white", 8000, 16.5);

console.log(skoda);
console.log(rapid);
console.log(maruti);
maruti.discount();
*/
//////callback/////

// const nav = names.map(function(name) {
//   return `my name is ${name} `;
// });
// console.log(nav);

// var ye = [2016, 1993, 2000, 2003, 2005];

// const nav = ye.map(el => 2019 - el);

// conifsole.log(nav);

////Promoses/////////////
// Promise is an object which represent the eventual completion or rejection of am async function
//example//
// const willgetyouadog = Promise((resolve, reject) => {
//   const rand = Math.random();

//   if (rand > 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
////////// IF the Promise is resolve then we have to execute a code according to it thats why we have a .then /////////////
// const willgetyouadog = new Promise((resolve, reject) => {  //New prmose created a promise obje on which we can apply two propertise .then and .catch
//   const rand = Math.random();

//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// //we use a .then to run some code after sueessful complition of an promise

// //this is the syntax
// willgetyouadog.then(() => {
//   //The code which we have to execute
//   console.log("hey i got a dog");
// });
// willgetyouadog.catch(()=>{
//   console.log("nahhh I want a dog");
//   //catch is use when the promise is rejected
// })
//////////////Returning Promises from Function ////////////

// const willgetyouadog = () => {
//   const rand = Math.random();

//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// };
/////////////////////Aync Function/////////////////////
//Async Function its just an synthetical sugar on a promises
//example

// async function greet() {
//   return "Hello from Async";
// }

// greet().then((val) => {
//   console.log("Promises resolved with ", val);
// });

//await keyword/////
//  async function greet() {
//    return
//  }
//////Multiple awaits///////////
/////////////////////////OOPS///////////////////////
//Prototypes
//Prototypes are the Template objects which has a bunch of menthods
////////////////////////Primitive  data types ///////////////////
//this type of the data tyoes are not for objects they are just a non object data types

///////////////////OOPS Example ////////////

//  class Person5 {
//    constructor(name , job , age){
//              this.name= name ;
//              this.job = job;
//              this.age = age;
//    }

//  }
