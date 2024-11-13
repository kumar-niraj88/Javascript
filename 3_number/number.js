console.log("number in js")


let num=10;

console.log(num);           //10


let num1=Number(200);
console.log("num1 : ",num1);          //200
console.log(typeof num1);  //number

let num2=Number("900");
console.log("num2: ",num2);        //900
console.log(typeof num2)  //number


let num3 = Number("732abc");
console.log("num3:",num3);    //NaN
console.log(typeof num3)        // number




// how to take input from the user
// let num4 = prompt("enter a number: ");

// console.log("enter the number of user : ",num4);
// console.log("the types of enter by the user : ",typeof num4);   // always string 

//take a two input from the user
// let a= Number(prompt("enter first number"));
// let b= Number(prompt("enter second number"));

// alert(a+b);

//************************************************************** */
//number method

// 1.Number.parseint()

let num5= Number.parseInt("300abc");
console.log(num5)                    //300

let num6=Number.parseInt("a882");
console.log(num6)                   // NaN

//2.Number.parseFloat();

let num7=Number.parseFloat("45.2qsjg");
console.log(num7);      //45.2
console.log(typeof num7)    //Number

// 3. Number.isInteger()

let b=387265;
console.log(Number.isInteger(b))   //true

let b1=3872.65;
console.log(Number.isInteger(b1))  //false

// 4.Number.isNaN()

console.log(Number.isNaN(452))  //false
console.log(Number.isNaN(45.5))  //false

console.log(Number.isNaN(NaN));   //true

console.log(Number.isNaN("niraj"))  //false


//diff b/w isNaN()  and Number.isNaN()
  
console.log(isNaN(123))    //false
console.log(isNaN(123.23)) //false
console.log(isNaN("khx"))  //true


// Number.isFinite()

console.log(Number.isFinite(200000000000000000000000000000)); // true
console.log(Number.isFinite(2n))   //false
console.log(Number.isFinite("niraj"))  //false5