
  //object 
let student = {
    sname:"niraj",
    age:24,
    ph:1234567890,
    sub:['java','sql','web tech'],
    isStudent:true,
    work: () =>{ `im going to college`},
    adress: {
        city:"chennai",
        pin:600097
    }

}
console.log(student)

let student1 = {
    sname:"niraj",
    age:24,
    sub:['java','sql','web tech'],
    isStudent:true
}

console.log(student1)  //{sname: 'niraj', age: 24, sub: Array(3), isStudent: true}

// hoe to access
console.log(student1.sname)   // niraj
console.log(student1["age"])   //24  used key name in the string

//modify

student1.age= 25;

console.log(student1)  //{sname: 'niraj', age: 25, sub: Array(3), isStudent: true}
console.log(student1.age)   //25


//how  to add 

student1.ph = 12345646846
console.log(student1)  //{sname: 'niraj', age: 25, sub: Array(3), isStudent: true, ph: 12345646846}
  

// how to delete

delete student1.ph;
console.log(student1)  //{sname: 'niraj', age: 25, sub: Array(3), isStudent: true}


let student2 = {
    sname:"niraj",
    age:24,
    sub:['java','mysql','amgular'],
    isStudent:true
}


// obj methods



// Object.keys()
let keys = Object.keys(student2)
console.log(keys)  // it will return array of keys --> ['sname', 'age', 'sub', 'isStudent']

// 2.Object.values()
let values = Object.values(student2)

console.log(values)  // return array of values  --> ['niraj', 24, Array(3), true]


//3. Object.freeze()   it will be freeze(perevent) the obj to ant operation
// Object.freeze(student2)
// student2.ph = 5454265255
// student2.age = 45;
// delete student2.sname;console.log(student2)


//4.Object.isFrozen()
// console.log(Object.isFrozen())   //--> to check freeze or not 


//5.Object.seal()

Object.seal(student2)  // only we can modify but in freeze we cant do anything

student2.phon =52524652;  //cant  add
delete student2.sname   //cant  delete

student2.age =40  // ya we can modify

console.log(student2)  //{sname: 'niraj', age: 40, sub: Array(3), isStudent: true}


//6. Object.isSealed()  --> to check seal or not

console.log(Object.isSealed(student2))  // if seal meand true else false 



//7.Object.assign()
let ob1 ={
    name:"abc",
    age:14
}

let ob2 ={
    city:"chennai",
    pin:1454,
    ph:626868235
}

let combineob = Object.assign({},ob1,ob2)  // empty bez --> the all object are assgin in that objects

console.log(combineob)   //{name: 'abc', age: 14, city: 'chennai', pin: 1454, ph: 626868235}

//8.Object.entries()  --> its converting of obj into arr of arr
let entries = Object.entries(ob2)
console.log(entries)  //  ['city', 'chennai'] ['pin', 1454]['ph', 626868235]


//9//7.Object.fromEntries()  --> covert  o/p of  Object.entries()  to object

let newobj = Object.fromEntries(entries)
console.log(newobj)  // {city: 'chennai', pin: 1454, ph: 626868235}


//10.ObjectName.hasOwnProperty()  --> check wether 

console.log(ob2.hasOwnProperty("city"))   // if have  --> true

